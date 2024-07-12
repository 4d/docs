/*! For license information please see c6cc364b.17b5a313.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[60019],{92008:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var a=s(474848),d=s(28453);const t={id:"dataClass",title:"dataClass"},r=void 0,i={id:"REST/dataClass",title:"dataClass",description:"Os nomes de dataclass podem ser utilizados diretamente nos pedidos REST para trabalhar com entidades e selec\xe7\xf5es de entidades, ou fun\xe7\xf5es de classe da dataclass.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/REST/dataClass.md",sourceDirName:"REST",slug:"/REST/dataClass",permalink:"/docs/pt/REST/dataClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FdataClass.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"dataClass",title:"dataClass"},sidebar:"docs",previous:{title:"API (dataClass)",permalink:"/docs/pt/category/api-dataclass"},next:{title:"$asArray",permalink:"/docs/pt/REST/asArray"}},o={},l=[{value:"Sintaxe dispon\xedvel",id:"sintaxe-dispon\xedvel",level:2},{value:"{dataClass}",id:"dataclass",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:3},{value:"Exemplo",id:"exemplo",level:3},{value:"{dataClass}[{key}]",id:"dataclasskey",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:3},{value:"Exemplo",id:"exemplo-1",level:3},{value:"{dataClass}:{attribute}(value)",id:"dataclassattributevalue",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-2",level:3},{value:"Exemplo",id:"exemplo-2",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Os nomes de dataclass podem ser utilizados diretamente nos pedidos REST para trabalhar com entidades e selec\xe7\xf5es de entidades, ou fun\xe7\xf5es de classe da dataclass."}),"\n",(0,a.jsx)(n.h2,{id:"sintaxe-dispon\xedvel",children:"Sintaxe dispon\xedvel"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Sintaxe"}),(0,a.jsx)(n.th,{children:"Exemplo"}),(0,a.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"#dataClass",children:(0,a.jsx)(n.strong,{children:"{dataClass}"})})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"/Employee"})}),(0,a.jsx)(n.td,{children:"Retorna todos os dados (como padr\xe3o as primeiras 100 entidades) para a dataclass"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"#dataclasskey",children:(0,a.jsx)(n.strong,{children:"{dataClass}[{key}]"})})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"/Employee[22]"})}),(0,a.jsx)(n.td,{children:"Retorna os dados para a entidade especifica definida pela chave prim\xe1ria da classe de dados"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"#dataclassattributevalue",children:(0,a.jsx)(n.strong,{children:"{dataClass}:{attribute}(value)"})})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"/Employee:firstName(John)"})}),(0,a.jsx)(n.td,{children:"Retorna os dados para uma entidade na qual os valores de atributo s\xe3o definidas"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"/docs/pt/REST/classFunctions#function-calls",children:(0,a.jsx)(n.strong,{children:"{dataClass}/{DataClassClassFunction}"})})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"/City/getCity"})}),(0,a.jsx)(n.td,{children:"Executa uma fun\xe7\xe3o de classe de uma dataclass"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"/docs/pt/REST/classFunctions#function-calls",children:(0,a.jsx)(n.strong,{children:"{dataClass}/{EntitySelectionClassFunction}"})})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:'/City/getPopulation/?$filter="ID<3"'})}),(0,a.jsx)(n.td,{children:"Executa uma fun\xe7\xe3o de classe de uma sele\xe7\xe3o de entidade"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"/docs/pt/REST/classFunctions#function-calls",children:(0,a.jsx)(n.strong,{children:"{dataClass}[{key}]/{EntityClassFunction}"})})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"City[2]/getPopulation"})}),(0,a.jsx)(n.td,{children:"Executa uma fun\xe7\xe3o de classe de uma entidade"})]})]})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Las llamadas a las funciones se detallan en la secci\xf3n ",(0,a.jsx)(n.a,{href:"/docs/pt/REST/classFunctions",children:"Llamar las funciones de la clase ORDA"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"dataclass",children:"{dataClass}"}),"\n",(0,a.jsxs)(n.p,{children:["Devuelve todos los datos (por defecto las 100 primeras entidades) para una clase de datos espec\xedfica (",(0,a.jsx)(n.em,{children:"por ejemplo"}),", ",(0,a.jsx)(n.code,{children:"Company"}),")"]}),"\n",(0,a.jsx)(n.h3,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(n.p,{children:["When you call this parameter in your REST request, the first 100 entities are returned unless you have specified a value using ",(0,a.jsx)(n.a,{href:"/docs/pt/REST/top_$limit",children:(0,a.jsx)(n.code,{children:"$top/$limit"})}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Aqui est\xe1 uma descri\xe7\xe3o dos dados retornados:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Propriedade"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__entityModel"}),(0,a.jsx)(n.td,{children:"String"}),(0,a.jsx)(n.td,{children:"Nome da dataclass."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__COUNT"}),(0,a.jsx)(n.td,{children:"Number"}),(0,a.jsx)(n.td,{children:"N\xfamero de entidades na classe de dados."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__SENT"}),(0,a.jsx)(n.td,{children:"Number"}),(0,a.jsxs)(n.td,{children:["N\xfamero de entidades enviadas pela peti\xe7\xe3o REST. Este n\xfamero puede ser el n\xfamero total de entidades si es menor que el valor definido por ",(0,a.jsx)(n.code,{children:"$top/$limit"}),"."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__FIRST"}),(0,a.jsx)(n.td,{children:"Number"}),(0,a.jsxs)(n.td,{children:["N\xfamero de entidade em que a sele\xe7\xe3o vai come\xe7ar. O bien 0 por defecto o el valor definido por ",(0,a.jsx)(n.code,{children:"$skip"}),"."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__ENTITIES"}),(0,a.jsx)(n.td,{children:"Collection"}),(0,a.jsx)(n.td,{children:"Esta cole\xe7\xe3o de objetos cont\xe9m um objeto para cada entidade com todos seus atributos. Todos os atributos relacionais s\xe3o retornados como objetos com uma URI para obter informa\xe7\xe3o sobre o objeto pai."})]})]})]}),"\n",(0,a.jsx)(n.p,{children:"Cada entidade cont\xe9m as propriedades abaixo:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Propriedade"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__KEY"}),(0,a.jsx)(n.td,{children:"String"}),(0,a.jsx)(n.td,{children:"Valor da chave prim\xe1ria definida para a classe de dados."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__TIMESTAMP"}),(0,a.jsx)(n.td,{children:"Date"}),(0,a.jsx)(n.td,{children:"Registro de hora da \xfaltima modifica\xe7\xe3o da entidade"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__STAMP"}),(0,a.jsx)(n.td,{children:"Number"}),(0,a.jsxs)(n.td,{children:["Sello interno que se necesita cuando se modifica alguno de los valores de la entidad al utilizar ",(0,a.jsx)(n.code,{children:"$method=update"}),"."]})]})]})]}),"\n",(0,a.jsxs)(n.p,{children:["Si quiere especificar qu\xe9 atributos quiere devolver, def\xednalos utilizando la siguiente sintaxis ",(0,a.jsx)(n.a,{href:"/docs/pt/REST/manData#selecting-attributes-to-get",children:"{attribute1, attribute2, ...}"}),". Por exemplo:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Company/name,address"})}),"\n",(0,a.jsx)(n.h3,{id:"exemplo",children:"Exemplo"}),"\n",(0,a.jsx)(n.p,{children:"Retorna todas as datas para uma classe de dados espec\xedfica."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Company"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Resultado"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "__entityModel": "Company",\n    "__GlobalStamp": 51,\n    "__COUNT": 250,\n    "__SENT": 100,\n    "__FIRST": 0,\n    "__ENTITIES": [\n        {\n            "__KEY": "1",\n            "__TIMESTAMP": "2020-04-10T10:44:49.927Z",\n            "__STAMP": 1,\n            "ID": 1,\n            "name": "Adobe",\n            "address": null,\n            "city": "San Jose",\n            "country": "USA",\n            "revenues": 500000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(1)/staff?$expand=staff"\n                }\n            }\n        },\n        {\n            "__KEY": "2",\n            "__TIMESTAMP": "2018-04-25T14:42:18.351Z",\n            "__STAMP": 1,\n            "ID": 2,\n            "name": "Apple",\n            "address": null,\n            "city": "Cupertino",\n            "country": "USA",\n            "revenues": 890000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(2)/staff?$expand=staff"\n                }\n            }\n        },\n        {\n            "__KEY": "3",\n            "__TIMESTAMP": "2018-04-23T09:03:49.021Z",\n            "__STAMP": 2,\n            "ID": 3,\n            "name": "4D",\n            "address": null,\n            "city": "Clichy",\n            "country": "France",\n            "revenues": 700000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(3)/staff?$expand=staff"\n                }\n            }\n        },\n        {\n            "__KEY": "4",\n            "__TIMESTAMP": "2018-03-28T14:38:07.430Z",\n            "__STAMP": 1,\n            "ID": 4,\n            "name": "Microsoft",\n            "address": null,\n            "city": "Seattle",\n            "country": "USA",\n            "revenues": 650000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(4)/staff?$expand=staff"\n                }\n            }\n        }\n.....//more entities here \n    ]\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"dataclasskey",children:"{dataClass}[{key}]"}),"\n",(0,a.jsxs)(n.p,{children:["Devuelve los datos de la entidad espec\xedfica definida por la llave primaria de la clase de datos, ",(0,a.jsx)(n.em,{children:"por ejemplo"}),", ",(0,a.jsx)(n.code,{children:"Company[22]"})," o ",(0,a.jsx)(n.code,{children:"Company[IT0911AB2200]"})]}),"\n",(0,a.jsx)(n.h3,{id:"descri\xe7\xe3o-1",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(n.p,{children:["Passando a classe de dados e uma chave, pode recuperar toda a informa\xe7\xe3o p\xfablica para a entidade. Passando a classe de dados e uma chave, pode recuperar toda a informa\xe7\xe3o p\xfablica para a entidade. Para m\xe1s informaci\xf3n sobre la definici\xf3n de una llave primaria, consulte la secci\xf3n ",(0,a.jsx)(n.strong,{children:"Modifying the Primary Key"})," en el ",(0,a.jsx)(n.strong,{children:"Editor del modelo de datos"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["For more information about the data returned, refer to ",(0,a.jsx)(n.a,{href:"#dataclass",children:"{dataClass}"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Si quiere especificar qu\xe9 atributos quiere devolver, def\xednalos utilizando la siguiente sintaxis ",(0,a.jsx)(n.a,{href:"/docs/pt/REST/manData#selecting-attributes-to-get",children:"{attribute1, attribute2, ...}"}),". Por exemplo:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Company[1]/name,address"})}),"\n",(0,a.jsxs)(n.p,{children:["Si desea expandir un atributo de relaci\xf3n utilizando ",(0,a.jsx)(n.code,{children:"$expand"}),", lo har\xe1 especific\xe1ndolo como se muestra a continuaci\xf3n:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Company[1]/name,address,staff?$expand=staff"})}),"\n",(0,a.jsx)(n.h3,{id:"exemplo-1",children:"Exemplo"}),"\n",(0,a.jsx)(n.p,{children:"A peti\xe7\xe3o abaixo retorna todos os dados p\xfablicos na dataclass Company cuja chave \xe9 1."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Company[1]"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Resultado"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "__entityModel": "Company",\n    "__KEY": "1",\n    "__TIMESTAMP": "2020-04-10T10:44:49.927Z",\n    "__STAMP": 2,\n    "ID": 1,\n    "name": "Apple",\n    "address": Infinite Loop,\n    "city": "Cupertino",\n    "country": "USA",\n    "url": http://www.apple.com,\n    "revenues": 500000,\n    "staff": {\n        "__deferred": {\n            "uri": "http://127.0.0.1:8081/rest/Company(1)/staff?$expand=staff"\n        }\n    }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"dataclassattributevalue",children:"{dataClass}:{attribute}(value)"}),"\n",(0,a.jsx)(n.p,{children:"Retorna os dados para uma entidade na qual os valores de atributo s\xe3o definidas"}),"\n",(0,a.jsx)(n.h3,{id:"descri\xe7\xe3o-2",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(n.p,{children:["Pasando la ",(0,a.jsx)(n.em,{children:"clase de datos"})," y un ",(0,a.jsx)(n.em,{children:"atributo"})," junto con un valor, se puede recuperar toda la informaci\xf3n p\xfablica de esa entidad. O valor \xe9 um valor \xfanico para o atributo, mas n\xe3o \xe9 a chave prim\xe1ria."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Company:companyCode(Acme001)"})}),"\n",(0,a.jsxs)(n.p,{children:["Si quiere especificar qu\xe9 atributos quiere devolver, def\xednalos utilizando la siguiente sintaxis ",(0,a.jsx)(n.a,{href:"/docs/pt/REST/manData#selecting-attributes-to-get",children:"{attribute1, attribute2, ...}"}),". Por exemplo:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Company:companyCode(Acme001)/name,address"})}),"\n",(0,a.jsxs)(n.p,{children:["Si desea utilizar un atributo relacional utilizando ",(0,a.jsx)(n.a,{href:"/docs/pt/REST/attributes",children:'$attributes.md">'}),", lo har\xe1 especific\xe1ndolo como se muestra a continuaci\xf3n:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Company:companyCode(Acme001)?$attributes=name,address,staff.name"})}),"\n",(0,a.jsx)(n.h3,{id:"exemplo-2",children:"Exemplo"}),"\n",(0,a.jsx)(n.p,{children:'A peti\xe7\xe3o abaixo retorna todos os dados p\xfablicos do funcion\xe1rio chamado "Jones".'}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET  /rest/Employee:lastname(Jones)"})})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},221020:(e,n,s)=>{var a=s(296540),d=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,s){var a,t={},l=null,c=null;for(a in void 0!==s&&(l=""+s),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)r.call(n,a)&&!o.hasOwnProperty(a)&&(t[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===t[a]&&(t[a]=n[a]);return{$$typeof:d,type:e,key:l,ref:c,props:t,_owner:i.current}}n.Fragment=t,n.jsx=l,n.jsxs=l},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>i});var a=s(296540);const d={},t=a.createContext(d);function r(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);