"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["32710"],{981655:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>a,assets:()=>o,toc:()=>l,contentTitle:()=>i});var a=JSON.parse('{"id":"REST/dataClass","title":"dataClass","description":"Os nomes de dataclass podem ser utilizados diretamente nos pedidos REST para trabalhar com entidades e selec\xe7\xf5es de entidades, ou fun\xe7\xf5es de classe da dataclass.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/REST/dataClass.md","sourceDirName":"REST","slug":"/REST/dataClass","permalink":"/docs/pt/20/REST/dataClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FdataClass.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"dataClass","title":"dataClass"},"sidebar":"docs","previous":{"title":"API (dataClass)","permalink":"/docs/pt/20/category/api-dataclass"},"next":{"title":"$asArray","permalink":"/docs/pt/20/REST/asArray"}}'),d=s("785893"),t=s("250065");let r={id:"dataClass",title:"dataClass"},i=void 0,o={},l=[{value:"Sintaxe dispon\xedvel",id:"sintaxe-dispon\xedvel",level:2},{value:"{dataClass}",id:"dataclass",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:3},{value:"Exemplo",id:"exemplo",level:3},{value:"{dataClass}[{key}]",id:"dataclasskey",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:3},{value:"Exemplo",id:"exemplo-1",level:3},{value:"{dataClass}:{attribute}(value)",id:"dataclassattributevalue",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-2",level:3},{value:"Exemplo",id:"exemplo-2",level:3}];function c(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:"Os nomes de dataclass podem ser utilizados diretamente nos pedidos REST para trabalhar com entidades e selec\xe7\xf5es de entidades, ou fun\xe7\xf5es de classe da dataclass."}),"\n",(0,d.jsx)(n.h2,{id:"sintaxe-dispon\xedvel",children:"Sintaxe dispon\xedvel"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Sintaxe"}),(0,d.jsx)(n.th,{children:"Exemplo"}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"#dataclass",children:(0,d.jsx)(n.strong,{children:"{dataClass}"})})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"/Employee"})}),(0,d.jsx)(n.td,{children:"Retorna todos os dados (como padr\xe3o as primeiras 100 entidades) para a dataclass"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"#dataclasskey",children:(0,d.jsx)(n.strong,{children:"{dataClass}[{key}]"})})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"/Employee[22]"})}),(0,d.jsx)(n.td,{children:"Retorna os dados para a entidade especifica definida pela chave prim\xe1ria da classe de dados"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"#dataclassattributevalue",children:(0,d.jsx)(n.strong,{children:"{dataClass}:{attribute}(value)"})})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"/Employee:firstName(John)"})}),(0,d.jsx)(n.td,{children:"Retorna os dados para uma entidade na qual os valores de atributo s\xe3o definidas"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/pt/20/REST/classFunctions#function-calls",children:(0,d.jsx)(n.strong,{children:"{dataClass}/{DataClassClassFunction}"})})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"/City/getCity"})}),(0,d.jsx)(n.td,{children:"Executa uma fun\xe7\xe3o de classe de uma dataclass"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/pt/20/REST/classFunctions#function-calls",children:(0,d.jsx)(n.strong,{children:"{dataClass}/{EntitySelectionClassFunction}"})})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:'/City/getPopulation/?$filter="ID<3"'})}),(0,d.jsx)(n.td,{children:"Executa uma fun\xe7\xe3o de classe de uma sele\xe7\xe3o de entidade"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/pt/20/REST/classFunctions#function-calls",children:(0,d.jsx)(n.strong,{children:"{dataClass}[{key}]/{EntityClassFunction}"})})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"City[2]/getPopulation"})}),(0,d.jsx)(n.td,{children:"Executa uma fun\xe7\xe3o de classe de uma entidade"})]})]})]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["As chamadas de fun\xe7\xf5es s\xe3o descritas em detalho na sec\xe7\xe3o ",(0,d.jsx)(n.a,{href:"/docs/pt/20/REST/classFunctions",children:"Chamada fun\xe7\xf5es da classe ORDA"}),"."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"dataclass",children:"{dataClass}"}),"\n",(0,d.jsxs)(n.p,{children:["Retorna todos os dados (como padr\xe3o as primeiras 100 entidades) para uma classe de dados espec\xedfica (*por exemplo *, ",(0,d.jsx)(n.code,{children:"Company"}),")"]}),"\n",(0,d.jsx)(n.h3,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["Quando chamar este par\xe2metro em sua peti\xe7\xe3o REST, as primeiras 100 entidades s\xe3o retornadas a menos que tenha especificado um valor usando ",(0,d.jsx)(n.a,{href:"/docs/pt/20/REST/top_$limit",children:(0,d.jsx)(n.code,{children:"$top/$limit"})}),"."]}),"\n",(0,d.jsx)(n.p,{children:"Aqui est\xe1 uma descri\xe7\xe3o dos dados retornados:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Propriedade"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"__entityModel"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"Nome da dataclass."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"__COUNT"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"N\xfamero de entidades na classe de dados."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"__SENT"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsxs)(n.td,{children:["N\xfamero de entidades enviadas pela peti\xe7\xe3o REST. Esse n\xfamero pode ser o n\xfamero total de entidades se for menor que o valor definido por ",(0,d.jsx)(n.code,{children:"$top/$limit"}),"."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"__FIRST"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsxs)(n.td,{children:["N\xfamero de entidade em que a sele\xe7\xe3o vai come\xe7ar. Ou o valor padr\xe3o 0 ou o valor definido por ",(0,d.jsx)(n.code,{children:"$skip"}),"."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"__ENTITIES"}),(0,d.jsx)(n.td,{children:"Collection"}),(0,d.jsx)(n.td,{children:"Esta cole\xe7\xe3o de objetos cont\xe9m um objeto para cada entidade com todos seus atributos. Todos os atributos relacionais s\xe3o retornados como objetos com uma URI para obter informa\xe7\xe3o sobre o objeto pai."})]})]})]}),"\n",(0,d.jsx)(n.p,{children:"Cada entidade cont\xe9m as propriedades abaixo:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Propriedade"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"__KEY"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"Valor da chave prim\xe1ria definida para a classe de dados."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"__TIMESTAMP"}),(0,d.jsx)(n.td,{children:"Date"}),(0,d.jsx)(n.td,{children:"Registro de hora da \xfaltima modifica\xe7\xe3o da entidade"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"__STAMP"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsxs)(n.td,{children:["Registro interno necess\xe1rio quando modificar qualquer um dos valores na entidade quando usar",(0,d.jsx)(n.code,{children:"$method=update"}),"."]})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Se quiser especificar quais atributos quer retornar, defina-os usando a sintaxe abaixo ",(0,d.jsx)(n.a,{href:"/docs/pt/20/REST/manData#selecting-attributes-to-get",children:"{attribute1, attribute2, ...}"}),". Por exemplo:"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"GET  /rest/Company/name,address"})}),"\n",(0,d.jsx)(n.h3,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(n.p,{children:"Retorna todas as datas para uma classe de dados espec\xedfica."}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"GET  /rest/Company"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Resultadoi"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "__entityModel": "Company",\n    "__GlobalStamp": 51,\n    "__COUNT": 250,\n    "__SENT": 100,\n    "__FIRST": 0,\n    "__ENTITIES": [\n        {\n            "__KEY": "1",\n            "__TIMESTAMP": "2020-04-10T10:44:49.927Z",\n            "__STAMP": 1,\n            "ID": 1,\n            "name": "Adobe",\n            "address": null,\n            "city": "San Jose",\n            "country": "USA",\n            "revenues": 500000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(1)/staff?$expand=staff"\n                }\n            }\n        },\n        {\n            "__KEY": "2",\n            "__TIMESTAMP": "2018-04-25T14:42:18.351Z",\n            "__STAMP": 1,\n            "ID": 2,\n            "name": "Apple",\n            "address": null,\n            "city": "Cupertino",\n            "country": "USA",\n            "revenues": 890000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(2)/staff?$expand=staff"\n                }\n            }\n        },\n        {\n            "__KEY": "3",\n            "__TIMESTAMP": "2018-04-23T09:03:49.021Z",\n            "__STAMP": 2,\n            "ID": 3,\n            "name": "4D",\n            "address": null,\n            "city": "Clichy",\n            "country": "France",\n            "revenues": 700000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(3)/staff?$expand=staff"\n                }\n            }\n        },\n        {\n            "__KEY": "4",\n            "__TIMESTAMP": "2018-03-28T14:38:07.430Z",\n            "__STAMP": 1,\n            "ID": 4,\n            "name": "Microsoft",\n            "address": null,\n            "city": "Seattle",\n            "country": "USA",\n            "revenues": 650000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(4)/staff?$expand=staff"\n                }\n            }\n        }\n.....//more entities here \n    ]\n}\n'})}),"\n",(0,d.jsx)(n.h2,{id:"dataclasskey",children:"{dataClass}[{key}]"}),"\n",(0,d.jsxs)(n.p,{children:["Returns the data for the specific entity defined by the dataclass's primary key, ",(0,d.jsx)(n.em,{children:"e.g."}),", ",(0,d.jsx)(n.code,{children:"Company[22] or Company[IT0911AB2200]"})]}),"\n",(0,d.jsx)(n.h3,{id:"descri\xe7\xe3o-1",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["Passando a classe de dados e uma chave, pode recuperar toda a informa\xe7\xe3o p\xfablica para a entidade. A chave \xe9 o valor do atributo definido como a chave prim\xe1ria para seu dataclas. Para saber mais sobre a defini\xe7\xe3o de chave prim\xe1ria, veja a se\xe7\xe3o ",(0,d.jsx)(n.strong,{children:"Modifying the Primary Key"})," em ",(0,d.jsx)(n.strong,{children:"Data Model Editor"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Para saber mais sobre os dados retornados, veja ",(0,d.jsx)(n.a,{href:"#dataclass",children:"{dataClass}"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Se quiser especificar quais atributos quer retornar, defina-os usando a sintaxe abaixo ",(0,d.jsx)(n.a,{href:"/docs/pt/20/REST/manData#selecting-attributes-to-get",children:"{attribute1, attribute2, ...}"}),". Por exemplo:"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"GET  /rest/Company[1]/name,address"})}),"\n",(0,d.jsxs)(n.p,{children:["Se quiser expandir o atributo de rela\xe7\xe3o usando ",(0,d.jsx)(n.code,{children:"$expand"}),", pode fazer isso como mostrado abaixo:"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"GET  /rest/Company[1]/name,address,staff?$expand=staff"})}),"\n",(0,d.jsx)(n.h3,{id:"exemplo-1",children:"Exemplo"}),"\n",(0,d.jsx)(n.p,{children:"A peti\xe7\xe3o abaixo retorna todos os dados p\xfablicos na dataclass Company cuja chave \xe9 1."}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"GET  /rest/Company[1]"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Resultadoi"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "__entityModel": "Company",\n    "__KEY": "1",\n    "__TIMESTAMP": "2020-04-10T10:44:49.927Z",\n    "__STAMP": 2,\n    "ID": 1,\n    "name": "Apple",\n    "address": Infinite Loop,\n    "city": "Cupertino",\n    "country": "USA",\n    "url": http://www.apple.com,\n    "revenues": 500000,\n    "staff": {\n        "__deferred": {\n            "uri": "http://127.0.0.1:8081/rest/Company(1)/staff?$expand=staff"\n        }\n    }\n}\n'})}),"\n",(0,d.jsx)(n.h2,{id:"dataclassattributevalue",children:"{dataClass}:{attribute}(value)"}),"\n",(0,d.jsx)(n.p,{children:"Retorna os dados para uma entidade na qual os valores de atributo s\xe3o definidas"}),"\n",(0,d.jsx)(n.h3,{id:"descri\xe7\xe3o-2",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["Passando ",(0,d.jsx)(n.em,{children:"dataClass"})," e um ",(0,d.jsx)(n.em,{children:"atributo"})," junto com o valor, pode recuperar toda a informa\xe7\xe3o p\xfablica para essa entidade. O valor \xe9 um valor \xfanico para o atributo, mas n\xe3o \xe9 a chave prim\xe1ria."]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"GET  /rest/Company:companyCode(Acme001)"})}),"\n",(0,d.jsxs)(n.p,{children:["Se quiser especificar quais atributos quer retornar, defina-os usando a sintaxe abaixo ",(0,d.jsx)(n.a,{href:"/docs/pt/20/REST/manData#selecting-attributes-to-get",children:"{attribute1, attribute2, ...}"}),". Por exemplo:"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"GET  /rest/Company:companyCode(Acme001)/name,address"})}),"\n",(0,d.jsxs)(n.p,{children:["Se quiser usar um atributo de rela\xe7\xe3o usando ",(0,d.jsx)(n.a,{href:"/docs/pt/20/REST/attributes",children:"$attributes"}),", pode fazer isso especificando-o como mostrado abaixo:"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"GET  /rest/Company:companyCode(Acme001)?$attributes=name,address,staff.name"})}),"\n",(0,d.jsx)(n.h3,{id:"exemplo-2",children:"Exemplo"}),"\n",(0,d.jsx)(n.p,{children:'A peti\xe7\xe3o abaixo retorna todos os dados p\xfablicos do funcion\xe1rio chamado "Jones".'}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"GET  /rest/Employee:lastname(Jones)"})})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return r}});var a=s(667294);let d={},t=a.createContext(d);function r(e){let n=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);