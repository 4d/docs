"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21259],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,k=m["".concat(i,".").concat(c)]||m[c]||u[c]||o;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},72016:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={id:"dataClass",title:"dataClass"},s=void 0,i={unversionedId:"REST/dataClass",id:"version-20/REST/dataClass",title:"dataClass",description:"Dataclass names can be used directly in the REST requests to work with entities and entity selections, or class functions of the dataclass.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/REST/dataClass.md",sourceDirName:"REST",slug:"/REST/dataClass",permalink:"/docs/pt/REST/dataClass",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FdataClass.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"dataClass",title:"dataClass"},sidebar:"docs",previous:{title:"API (dataClass)",permalink:"/docs/pt/category/api-dataclass"},next:{title:"$asArray",permalink:"/docs/pt/REST/asArray"}},d={},p=[{value:"Sintaxe dispon\xedvel",id:"sintaxe-dispon\xedvel",level:2},{value:"{dataClass}",id:"dataclass",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:3},{value:"Exemplo",id:"exemplo",level:3},{value:"{dataClass}[{key}]",id:"dataclasskey",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:3},{value:"Exemplo",id:"exemplo-1",level:3},{value:"{dataClass}:{attribute}(value)",id:"dataclassattributevalue",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-2",level:3},{value:"Exemplo",id:"exemplo-2",level:3}],u={toc:p};function m(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",r({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Dataclass names can be used directly in the REST requests to work with entities and entity selections, or class functions of the dataclass."),(0,n.kt)("h2",r({},{id:"sintaxe-dispon\xedvel"}),"Sintaxe dispon\xedvel"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Sintaxe"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Exemplo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#dataClass"}),(0,n.kt)("strong",{parentName:"a"},"{dataClass}"))),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"/Employee")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Retorna todos os dados (como padr\xe3o as primeiras 100 entidades) para a dataclass")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#dataclasskey"}),(0,n.kt)("strong",{parentName:"a"},"{dataClass}[{key}]"))),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"/Employee[22]")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Retorna os dados para a entidade especifica definida pela chave prim\xe1ria da classe de dados")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#dataclassattributevalue"}),(0,n.kt)("strong",{parentName:"a"},"{dataClass}:{attribute}(value)"))),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"/Employee:firstName(John)")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Retorna os dados para uma entidade na qual os valores de atributo s\xe3o definidas")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/pt/REST/classFunctions#function-calls"}),(0,n.kt)("strong",{parentName:"a"},"{dataClass}/{DataClassClassFunction}"))),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"/City/getCity")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Executa uma fun\xe7\xe3o de classe de uma dataclass")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/pt/REST/classFunctions#function-calls"}),(0,n.kt)("strong",{parentName:"a"},"{dataClass}({EntitySelectionClassFunction}"))),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'/City/getPopulation/?$filter="ID<3"')),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Executa uma fun\xe7\xe3o de classe de uma sele\xe7\xe3o de entidade")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/pt/REST/classFunctions#function-calls"}),(0,n.kt)("strong",{parentName:"a"},"{dataClass}[{key}]/{EntityClassFunction}"))),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"City[2]/getPopulation")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Executes an entity class function")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Function calls are detailed in the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/REST/classFunctions"}),"Calling ORDA class functions")," section.")),(0,n.kt)("h2",r({},{id:"dataclass"}),"{dataClass}"),(0,n.kt)("p",null,"Retorna todos os dados (como padr\xe3o as primeiras 100 entidades) para uma classe de dados espec\xedfica (",(0,n.kt)("em",{parentName:"p"},"por exemplo "),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Company"),")"),(0,n.kt)("h3",r({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"Quando chamar este par\xe2metro em sua peti\xe7\xe3o REST, as primeiras 100 entidades s\xe3o retornadas a menos que tenha especificado um valor usando ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/REST/top_$limit"}),(0,n.kt)("inlineCode",{parentName:"a"},"$top/$limit")),"."),(0,n.kt)("p",null,"Aqui est\xe1 uma descri\xe7\xe3o dos dados retornados:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Propriedade"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"__entityModel"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nome da dataclass.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"__COUNT"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero de entidades na classe de dados.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"__SENT"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero de entidades enviadas pela peti\xe7\xe3o REST. Esse n\xfamero pode ser o n\xfamero total de entidades se for menor que o valor definido por ",(0,n.kt)("inlineCode",{parentName:"td"},"$top/$limit"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"__FIRST"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xfamero de entidade em que a sele\xe7\xe3o vai come\xe7ar. Ou o valor padr\xe3o 0 ou o valor definido por ",(0,n.kt)("inlineCode",{parentName:"td"},"$skip"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"__ENTITIES"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Collection"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Esta cole\xe7\xe3o de objetos cont\xe9m um objeto para cada entidade com todos seus atributos. Todos os atributos relacionais s\xe3o retornados como objetos com uma URI para obter informa\xe7\xe3o sobre o objeto pai.")))),(0,n.kt)("p",null,"Cada entidade cont\xe9m as propriedades abaixo:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Propriedade"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"__KEY"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Valor da chave prim\xe1ria definida para a classe de dados.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"__TIMESTAMP"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Date"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Registro de hora da \xfaltima modifica\xe7\xe3o da entidade")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"__STAMP"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Number"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Registro interno necess\xe1rio quando modificar qualquer um dos valores na entidade quando usar",(0,n.kt)("inlineCode",{parentName:"td"},"$method=update"),".")))),(0,n.kt)("p",null,"If you want to specify which attributes you want to return, define them using the following syntax ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/REST/manData#selecting-attributes-to-get"}),"{attribute1, attribute2, ...}"),". Por exemplo:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company/name,address")),(0,n.kt)("h3",r({},{id:"exemplo"}),"Exemplo"),(0,n.kt)("p",null,"Retorna todas as datas para uma classe de dados espec\xedfica."),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resultadoi"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-json"}),'{\n    "__entityModel": "Company",\n    "__GlobalStamp": 51,\n    "__COUNT": 250,\n    "__SENT": 100,\n    "__FIRST": 0,\n    "__ENTITIES": [\n        {\n            "__KEY": "1",\n            "__TIMESTAMP": "2020-04-10T10:44:49.927Z",\n            "__STAMP": 1,\n            "ID": 1,\n            "name": "Adobe",\n            "address": null,\n            "city": "San Jose",\n            "country": "USA",\n            "revenues": 500000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(1)/staff?$expand=staff"\n                }\n            }\n        },\n        {\n            "__KEY": "2",\n            "__TIMESTAMP": "2018-04-25T14:42:18.351Z",\n            "__STAMP": 1,\n            "ID": 2,\n            "name": "Apple",\n            "address": null,\n            "city": "Cupertino",\n            "country": "USA",\n            "revenues": 890000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(2)/staff?$expand=staff"\n                }\n            }\n        },\n        {\n            "__KEY": "3",\n            "__TIMESTAMP": "2018-04-23T09:03:49.021Z",\n            "__STAMP": 2,\n            "ID": 3,\n            "name": "4D",\n            "address": null,\n            "city": "Clichy",\n            "country": "France",\n            "revenues": 700000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(3)/staff?$expand=staff"\n                }\n            }\n        },\n        {\n            "__KEY": "4",\n            "__TIMESTAMP": "2018-03-28T14:38:07.430Z",\n            "__STAMP": 1,\n            "ID": 4,\n            "name": "Microsoft",\n            "address": null,\n            "city": "Seattle",\n            "country": "USA",\n            "revenues": 650000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(4)/staff?$expand=staff"\n                }\n            }\n        }\n.....//more entities here \n    ]\n}\n')),(0,n.kt)("h2",r({},{id:"dataclasskey"}),"{dataClass}","[","{key}]"),(0,n.kt)("p",null,"Returns the data for the specific entity defined by the dataclass's primary key, ",(0,n.kt)("em",{parentName:"p"},"e.g."),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Company[22] or Company[IT0911AB2200]")),(0,n.kt)("h3",r({},{id:"descri\xe7\xe3o-1"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"Passando a classe de dados e uma chave, pode recuperar toda a informa\xe7\xe3o p\xfablica para a entidade. Passando a classe de dados e uma chave, pode recuperar toda a informa\xe7\xe3o p\xfablica para a entidade. Para saber mais sobre a defini\xe7\xe3o de chave prim\xe1ria, veja a se\xe7\xe3o ",(0,n.kt)("strong",{parentName:"p"},"Modifying the Primary Key")," em ",(0,n.kt)("strong",{parentName:"p"},"Data Model Editor"),"."),(0,n.kt)("p",null,"For more information about the data returned, refer to ",(0,n.kt)("a",r({parentName:"p"},{href:"#dataclass"}),"{DataClass}"),"."),(0,n.kt)("p",null,"If you want to specify which attributes you want to return, define them using the following syntax ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/REST/manData#selecting-attributes-to-get"}),"{attribute1, attribute2, ...}"),". Por exemplo:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company[1]/name,address")),(0,n.kt)("p",null,"Se quiser expandir o atributo de rela\xe7\xe3o usando ",(0,n.kt)("inlineCode",{parentName:"p"},"$expand"),", pode fazer isso como mostrado abaixo:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company[1]/name,address,staff?$expand=staff")),(0,n.kt)("h3",r({},{id:"exemplo-1"}),"Exemplo"),(0,n.kt)("p",null,"A peti\xe7\xe3o abaixo retorna todos os dados p\xfablicos na dataclass Company cuja chave \xe9 1."),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company[1]")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resultadoi"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-json"}),'{\n    "__entityModel": "Company",\n    "__KEY": "1",\n    "__TIMESTAMP": "2020-04-10T10:44:49.927Z",\n    "__STAMP": 2,\n    "ID": 1,\n    "name": "Apple",\n    "address": Infinite Loop,\n    "city": "Cupertino",\n    "country": "USA",\n    "url": http://www.apple.com,\n    "revenues": 500000,\n    "staff": {\n        "__deferred": {\n            "uri": "http://127.0.0.1:8081/rest/Company(1)/staff?$expand=staff"\n        }\n    }\n}\n')),(0,n.kt)("h2",r({},{id:"dataclassattributevalue"}),"{dataClass}:{attribute}(value)"),(0,n.kt)("p",null,"Retorna os dados para uma entidade na qual os valores de atributo s\xe3o definidas"),(0,n.kt)("h3",r({},{id:"descri\xe7\xe3o-2"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"Passando ",(0,n.kt)("em",{parentName:"p"},"dataClass")," e um ",(0,n.kt)("em",{parentName:"p"},"atributo")," junto com o valor, pode recuperar toda a informa\xe7\xe3o p\xfablica para essa entidade. O valor \xe9 um valor \xfanico para o atributo, mas n\xe3o \xe9 a chave prim\xe1ria."),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company:companyCode(Acme001)")),(0,n.kt)("p",null,"If you want to specify which attributes you want to return, define them using the following syntax ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/REST/manData#selecting-attributes-to-get"}),"{attribute1, attribute2, ...}"),". Por exemplo:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company:companyCode(Acme001)/name,address")),(0,n.kt)("p",null,"Se quiser usar um atributo de rela\xe7\xe3o usando ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/REST/attributes"}),"$attributes"),", pode fazer isso especificando-o como mostrado abaixo:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company:companyCode(Acme001)?$attributes=name,address,staff.name")),(0,n.kt)("h3",r({},{id:"exemplo-2"}),"Exemplo"),(0,n.kt)("p",null,'A peti\xe7\xe3o abaixo retorna todos os dados p\xfablicos do funcion\xe1rio chamado "Jones".'),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee:lastname(Jones)")))}m.isMDXComponent=!0}}]);