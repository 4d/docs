/*! For license information please see 40bff4e6.c56edb84.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[64736],{432453:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var a=s(474848),d=s(28453);const t={id:"dataClass",title:"dataClass"},i=void 0,l={id:"REST/dataClass",title:"dataClass",description:"Los nombres de dataclass pueden utilizarse directamente en las peticiones REST para trabajar con entidades, selecciones de entidades o funciones de clase de la dataclass.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/REST/dataClass.md",sourceDirName:"REST",slug:"/REST/dataClass",permalink:"/docs/es/20/REST/dataClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FdataClass.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"dataClass",title:"dataClass"},sidebar:"docs",previous:{title:"API (dataClass)",permalink:"/docs/es/20/category/api-dataclass"},next:{title:"$asArray",permalink:"/docs/es/20/REST/asArray"}},r={},c=[{value:"Sintaxis disponible",id:"sintaxis-disponible",level:2},{value:"{dataClass}",id:"dataclass",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:3},{value:"Ejemplo",id:"ejemplo",level:3},{value:"{dataClass}[{key}]",id:"dataclasskey",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-1",level:3},{value:"Ejemplo",id:"ejemplo-1",level:3},{value:"{dataClass}:{attribute}(value)",id:"dataclassattributevalue",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-2",level:3},{value:"Ejemplo",id:"ejemplo-2",level:3}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Los nombres de dataclass pueden utilizarse directamente en las peticiones REST para trabajar con entidades, selecciones de entidades o funciones de clase de la dataclass."}),"\n",(0,a.jsx)(n.h2,{id:"sintaxis-disponible",children:"Sintaxis disponible"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Sintaxis"}),(0,a.jsx)(n.th,{children:"Ejemplo"}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"#dataClass",children:(0,a.jsx)(n.strong,{children:"{dataClass}"})})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"/Employee"})}),(0,a.jsx)(n.td,{children:"Devuelve todos los datos (por defecto las 100 primeras entidades) de la clase de datos"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"#dataclasskey",children:(0,a.jsx)(n.strong,{children:"{dataClass}[{key}]"})})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"/Employee[22]"})}),(0,a.jsx)(n.td,{children:"Devuelve los datos de la entidad espec\xedfica definida por la llave primaria de la clase de datos"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"#dataclassattributevalue",children:(0,a.jsx)(n.strong,{children:"{dataClass}:{attribute}(value)"})})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"/Employee:firstName(John)"})}),(0,a.jsx)(n.td,{children:"Devuelve los datos de una entidad en la que est\xe1 definido el valor del atributo"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"/docs/es/20/REST/classFunctions#function-calls",children:(0,a.jsx)(n.strong,{children:"{dataClass}/{DataClassClassFunction}"})})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"/City/getCity"})}),(0,a.jsx)(n.td,{children:"Ejecuta una funci\xf3n de clase de una dataclass"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"/docs/es/20/REST/classFunctions#function-calls",children:(0,a.jsx)(n.strong,{children:"{dataClass}/{EntitySelectionClassFunction}"})})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:'/City/getPopulation/?$filter="ID<3"'})}),(0,a.jsx)(n.td,{children:"Ejecuta una funci\xf3n de clase de una selecci\xf3n de entidades"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"/docs/es/20/REST/classFunctions#function-calls",children:(0,a.jsx)(n.strong,{children:"{dataClass}[{key}]/{EntityClassFunction}"})})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"City[2]/getPopulation"})}),(0,a.jsx)(n.td,{children:"Ejecuta una funci\xf3n de clase de una entidad"})]})]})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Las llamadas a las funciones se detallan en la secci\xf3n ",(0,a.jsx)(n.a,{href:"/docs/es/20/REST/classFunctions",children:"Llamar las funciones de la clase ORDA"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"dataclass",children:"{dataClass}"}),"\n",(0,a.jsxs)(n.p,{children:["Devuelve todos los datos (por defecto las 100 primeras entidades) para una clase de datos espec\xedfica (",(0,a.jsx)(n.em,{children:"por ejemplo"}),", ",(0,a.jsx)(n.code,{children:"Company"}),")"]}),"\n",(0,a.jsx)(n.h3,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["Cuando se llama a este par\xe1metro en la petici\xf3n REST, se devuelven las 100 primeras entidades, a menos que se haya especificado un valor con ",(0,a.jsx)(n.a,{href:"/docs/es/20/REST/top_$limit",children:(0,a.jsx)(n.code,{children:"$top/$limit"})}),"."]}),"\n",(0,a.jsx)(n.p,{children:"A continuaci\xf3n se describen los datos devueltos:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Propiedad"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__entityModel"}),(0,a.jsx)(n.td,{children:"String"}),(0,a.jsx)(n.td,{children:"Nombre de la dataclass."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__COUNT"}),(0,a.jsx)(n.td,{children:"Number"}),(0,a.jsx)(n.td,{children:"N\xfamero de entidades en la clase de datos."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__SENT"}),(0,a.jsx)(n.td,{children:"Number"}),(0,a.jsxs)(n.td,{children:["N\xfamero de entidades enviadas por la petici\xf3n REST. Este n\xfamero puede ser el n\xfamero total de entidades si es menor que el valor definido por ",(0,a.jsx)(n.code,{children:"$top/$limit"}),"."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__FIRST"}),(0,a.jsx)(n.td,{children:"Number"}),(0,a.jsxs)(n.td,{children:["N\xfamero de entidad en la que comienza la selecci\xf3n. O bien 0 por defecto o el valor definido por ",(0,a.jsx)(n.code,{children:"$skip"}),"."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__ENTITIES"}),(0,a.jsx)(n.td,{children:"Collection"}),(0,a.jsx)(n.td,{children:"Esta colecci\xf3n de objetos contiene un objeto para cada entidad con todos sus atributos. Todos los atributos relacionales se devuelven como objetos con una URI para obtener informaci\xf3n sobre el padre."})]})]})]}),"\n",(0,a.jsx)(n.p,{children:"Cada entidad contiene las siguientes propiedades:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Propiedad"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__KEY"}),(0,a.jsx)(n.td,{children:"String"}),(0,a.jsx)(n.td,{children:"Valor de la llave primaria definida para la clase de datos."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__TIMESTAMP"}),(0,a.jsx)(n.td,{children:"Fecha"}),(0,a.jsx)(n.td,{children:"Marca de tiempo de la \xfaltima modificaci\xf3n de la entidad"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__STAMP"}),(0,a.jsx)(n.td,{children:"Number"}),(0,a.jsxs)(n.td,{children:["Sello interno que se necesita cuando se modifica alguno de los valores de la entidad al utilizar ",(0,a.jsx)(n.code,{children:"$method=update"}),"."]})]})]})]}),"\n",(0,a.jsxs)(n.p,{children:["Si quiere especificar qu\xe9 atributos quiere devolver, def\xednalos utilizando la siguiente sintaxis ",(0,a.jsx)(n.a,{href:"/docs/es/20/REST/manData#selecting-attributes-to-get",children:"{attribute1, attribute2, ...}"}),". Por ejemplo:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Company/name,address"})}),"\n",(0,a.jsx)(n.h3,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(n.p,{children:"Devuelve todos los datos de una clase de datos espec\xedfica."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Company"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Resultado"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "__entityModel": "Company",\n    "__GlobalStamp": 51,\n    "__COUNT": 250,\n    "__SENT": 100,\n    "__FIRST": 0,\n    "__ENTITIES": [\n        {\n            "__KEY": "1",\n            "__TIMESTAMP": "2020-04-10T10:44:49.927Z",\n            "__STAMP": 1,\n            "ID": 1,\n            "name": "Adobe",\n            "address": null,\n            "city": "San Jose",\n            "country": "USA",\n            "revenues": 500000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(1)/staff?$expand=staff"\n                }\n            }\n        },\n        {\n            "__KEY": "2",\n            "__TIMESTAMP": "2018-04-25T14:42:18.351Z",\n            "__STAMP": 1,\n            "ID": 2,\n            "name": "Apple",\n            "address": null,\n            "city": "Cupertino",\n            "country": "USA",\n            "revenues": 890000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(2)/staff?$expand=staff"\n                }\n            }\n        },\n        {\n            "__KEY": "3",\n            "__TIMESTAMP": "2018-04-23T09:03:49.021Z",\n            "__STAMP": 2,\n            "ID": 3,\n            "name": "4D",\n            "address": null,\n            "city": "Clichy",\n            "country": "France",\n            "revenues": 700000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(3)/staff?$expand=staff"\n                }\n            }\n        },\n        {\n            "__KEY": "4",\n            "__TIMESTAMP": "2018-03-28T14:38:07.430Z",\n            "__STAMP": 1,\n            "ID": 4,\n            "name": "Microsoft",\n            "address": null,\n            "city": "Seattle",\n            "country": "USA",\n            "revenues": 650000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(4)/staff?$expand=staff"\n                }\n            }\n        }\n.....//more entities here \n    ]\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"dataclasskey",children:"{dataClass}[{key}]"}),"\n",(0,a.jsxs)(n.p,{children:["Devuelve los datos de la entidad espec\xedfica definida por la llave primaria de la clase de datos, ",(0,a.jsx)(n.em,{children:"por ejemplo"}),", ",(0,a.jsx)(n.code,{children:"Company[22]"})," o ",(0,a.jsx)(n.code,{children:"Company[IT0911AB2200]"})]}),"\n",(0,a.jsx)(n.h3,{id:"descripci\xf3n-1",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["Pasando la clase de datos y una llave, se puede recuperar toda la informaci\xf3n p\xfablica de esa entidad. Pasando la clase de datos y una llave, se puede recuperar toda la informaci\xf3n p\xfablica de esa entidad. Para m\xe1s informaci\xf3n sobre la definici\xf3n de una llave primaria, consulte la secci\xf3n ",(0,a.jsx)(n.strong,{children:"Modifying the Primary Key"})," en el ",(0,a.jsx)(n.strong,{children:"Editor del modelo de datos"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["For more information about the data returned, refer to ",(0,a.jsx)(n.a,{href:"#dataclass",children:"{dataClass}"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Si quiere especificar qu\xe9 atributos quiere devolver, def\xednalos utilizando la siguiente sintaxis ",(0,a.jsx)(n.a,{href:"/docs/es/20/REST/manData#selecting-attributes-to-get",children:"{attribute1, attribute2, ...}"}),". Por ejemplo:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Company[1]/name,address"})}),"\n",(0,a.jsxs)(n.p,{children:["Si desea expandir un atributo de relaci\xf3n utilizando ",(0,a.jsx)(n.code,{children:"$expand"}),", lo har\xe1 especific\xe1ndolo como se muestra a continuaci\xf3n:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Company[1]/name,address,staff?$expand=staff"})}),"\n",(0,a.jsx)(n.h3,{id:"ejemplo-1",children:"Ejemplo"}),"\n",(0,a.jsx)(n.p,{children:"La siguiente petici\xf3n devuelve todos los datos p\xfablicos de la clase de datos Company cuya llave es 1."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Company[1]"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Resultado"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "__entityModel": "Company",\n    "__KEY": "1",\n    "__TIMESTAMP": "2020-04-10T10:44:49.927Z",\n    "__STAMP": 2,\n    "ID": 1,\n    "name": "Apple",\n    "address": Infinite Loop,\n    "city": "Cupertino",\n    "country": "USA",\n    "url": http://www.apple.com,\n    "revenues": 500000,\n    "staff": {\n        "__deferred": {\n            "uri": "http://127.0.0.1:8081/rest/Company(1)/staff?$expand=staff"\n        }\n    }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"dataclassattributevalue",children:"{dataClass}:{attribute}(value)"}),"\n",(0,a.jsx)(n.p,{children:"Devuelve los datos de una entidad en la que est\xe1 definido el valor del atributo"}),"\n",(0,a.jsx)(n.h3,{id:"descripci\xf3n-2",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["Pasando la ",(0,a.jsx)(n.em,{children:"clase de datos"})," y un ",(0,a.jsx)(n.em,{children:"atributo"})," junto con un valor, se puede recuperar toda la informaci\xf3n p\xfablica de esa entidad. El valor es un valor \xfanico para el atributo, pero no es la llave primaria."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Company:companyCode(Acme001)"})}),"\n",(0,a.jsxs)(n.p,{children:["Si quiere especificar qu\xe9 atributos quiere devolver, def\xednalos utilizando la siguiente sintaxis ",(0,a.jsx)(n.a,{href:"/docs/es/20/REST/manData#selecting-attributes-to-get",children:"{attribute1, attribute2, ...}"}),". Por ejemplo:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Company:companyCode(Acme001)/name,address"})}),"\n",(0,a.jsxs)(n.p,{children:["Si desea utilizar un atributo relacional utilizando ",(0,a.jsx)(n.a,{href:"/docs/es/20/REST/attributes",children:'$attributes.md">'}),", lo har\xe1 especific\xe1ndolo como se muestra a continuaci\xf3n:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Company:companyCode(Acme001)?$attributes=name,address,staff.name"})}),"\n",(0,a.jsx)(n.h3,{id:"ejemplo-2",children:"Ejemplo"}),"\n",(0,a.jsx)(n.p,{children:'La siguiente petici\xf3n devuelve todos los datos p\xfablicos del empleado llamado "Jones".'}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Employee:lastname(Jones)"})})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},221020:(e,n,s)=>{var a=s(296540),d=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var a,t={},c=null,o=null;for(a in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(o=n.ref),n)i.call(n,a)&&!r.hasOwnProperty(a)&&(t[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===t[a]&&(t[a]=n[a]);return{$$typeof:d,type:e,key:c,ref:o,props:t,_owner:l.current}}n.Fragment=t,n.jsx=c,n.jsxs=c},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var a=s(296540);const d={},t=a.createContext(d);function i(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);