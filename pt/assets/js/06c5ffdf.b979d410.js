"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66855"],{752100:function(e,a,n){n.r(a),n.d(a,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>l,toc:()=>i,contentTitle:()=>t});var s=JSON.parse('{"id":"REST/{dataClass}","title":"{dataClass}","description":"Os nomes das classes de dados podem ser usadas diretamente nas peti\xe7\xf5es REST para trabalhar com entidades, sele\xe7\xf5es de entidades ou m\xe9todos da classe de dados.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/REST/{dataClass}.md","sourceDirName":"REST","slug":"/REST/{dataClass}","permalink":"/docs/pt/18/REST/{dataClass}","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%7BdataClass%7D.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"{dataClass}","title":"{dataClass}"},"sidebar":"docs","previous":{"title":"$upload","permalink":"/docs/pt/18/REST/upload"},"next":{"title":"$asArray","permalink":"/docs/pt/18/REST/asArray"}}'),d=n("785893"),r=n("250065");let o={id:"{dataClass}",title:"{dataClass}"},t=void 0,l={},i=[{value:"Sintaxe dispon\xedvel",id:"sintaxe-dispon\xedvel",level:2},{value:"{dataClass}",id:"dataclass",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:3},{value:"Exemplo",id:"exemplo",level:3},{value:"{dataClass}({key})",id:"dataclasskey",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:3},{value:"Exemplo",id:"exemplo-1",level:3},{value:"{dataClass}:{attribute}(value)",id:"dataclassattributevalue",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-2",level:3},{value:"Exemplo",id:"exemplo-2",level:3},{value:"{dataClass}/{method} and {dataClass}({key})/{method}",id:"dataclassmethod-and-dataclasskeymethod",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-3",level:3},{value:"Configura\xe7\xe3o 4D",id:"configura\xe7\xe3o-4d",level:3},{value:"Passar par\xe2metros a um M\xe9todo",id:"passar-par\xe2metros-a-um-m\xe9todo",level:3},{value:"Exemplos",id:"exemplos",level:3},{value:"Alcance da tabela",id:"alcance-da-tabela",level:4},{value:"Alcance do registro atual",id:"alcance-do-registro-atual",level:4},{value:"Alcance da sele\xe7\xe3o atual",id:"alcance-da-sele\xe7\xe3o-atual",level:4}];function c(e){let a={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.p,{children:"Os nomes das classes de dados podem ser usadas diretamente nas peti\xe7\xf5es REST para trabalhar com entidades, sele\xe7\xf5es de entidades ou m\xe9todos da classe de dados."}),"\n",(0,d.jsx)(a.h2,{id:"sintaxe-dispon\xedvel",children:"Sintaxe dispon\xedvel"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(a.table,{children:[(0,d.jsx)(a.thead,{children:(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.th,{children:"Sintaxe"}),(0,d.jsx)(a.th,{children:"Exemplo"}),(0,d.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(a.tbody,{children:[(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.td,{children:(0,d.jsx)(a.a,{href:"#dataclass",children:(0,d.jsx)(a.strong,{children:"{dataClass}"})})}),(0,d.jsx)(a.td,{children:(0,d.jsx)(a.code,{children:"/Employee"})}),(0,d.jsx)(a.td,{children:"Retorna todos os dados (como padr\xe3o as primeiras 100 entidades) para a dataclass"})]}),(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.td,{children:(0,d.jsx)(a.a,{href:"#dataclasskey",children:(0,d.jsx)(a.strong,{children:"{dataClass}({key})"})})}),(0,d.jsx)(a.td,{children:(0,d.jsx)(a.code,{children:"/Employee(22)"})}),(0,d.jsx)(a.td,{children:"Retorna os dados para a entidade especifica definida pela chave prim\xe1ria da classe de dados"})]}),(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.td,{children:(0,d.jsx)(a.a,{href:"#dataclassattributevalue",children:(0,d.jsx)(a.strong,{children:"{dataClass}:{attribute}(value)"})})}),(0,d.jsx)(a.td,{children:(0,d.jsx)(a.code,{children:"/Employee:firstName(John)"})}),(0,d.jsx)(a.td,{children:"Retorna os dados para uma entidade na qual os valores de atributo s\xe3o definidas"})]}),(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.td,{children:(0,d.jsx)(a.a,{href:"#dataclassmethod-and-dataclasskeymethod",children:(0,d.jsx)(a.strong,{children:"{dataClass}/{method}"})})}),(0,d.jsx)(a.td,{children:(0,d.jsx)(a.code,{children:"/Employee/getHighSalaries"})}),(0,d.jsx)(a.td,{children:"Executa um m\xe9todo projeto e devolve um objeto ou uma cole\xe7\xe3o (o m\xe9todo projeto deve estar exposto)"})]}),(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.td,{children:(0,d.jsx)(a.a,{href:"#dataclassmethod-and-dataclasskeymethod",children:(0,d.jsx)(a.strong,{children:"{dataClass}({key})/{method}"})})}),(0,d.jsx)(a.td,{children:(0,d.jsx)(a.code,{children:"/Employee(22)/getAge"})}),(0,d.jsx)(a.td,{children:"Retona um valor baseado no m\xe9todo de entidade"})]})]})]}),"\n",(0,d.jsx)(a.h2,{id:"dataclass",children:"{dataClass}"}),"\n",(0,d.jsxs)(a.p,{children:["Retorna todos os dados (como padr\xe3o as primeiras 100 entidades) para uma classe de dados espec\xedfica (*por exemplo *, ",(0,d.jsx)(a.code,{children:"Company"}),")"]}),"\n",(0,d.jsx)(a.h3,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(a.p,{children:["Quando chamar este par\xe2metro em sua peti\xe7\xe3o REST, as primeiras 100 entidades s\xe3o retornadas a menos que tenha especificado um valor usando ",(0,d.jsx)(a.a,{href:"/docs/pt/18/REST/top_$limit",children:(0,d.jsx)(a.code,{children:"$top/$limit"})}),"."]}),"\n",(0,d.jsx)(a.p,{children:"Aqui est\xe1 uma descri\xe7\xe3o dos dados retornados:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(a.table,{children:[(0,d.jsx)(a.thead,{children:(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.th,{children:"Propriedade"}),(0,d.jsx)(a.th,{children:"Tipo"}),(0,d.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(a.tbody,{children:[(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.td,{children:"__entityModel"}),(0,d.jsx)(a.td,{children:"Text"}),(0,d.jsx)(a.td,{children:"Nome da dataclass."})]}),(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.td,{children:"__COUNT"}),(0,d.jsx)(a.td,{children:"Number"}),(0,d.jsx)(a.td,{children:"N\xfamero de entidades na classe de dados."})]}),(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.td,{children:"__SENT"}),(0,d.jsx)(a.td,{children:"Number"}),(0,d.jsxs)(a.td,{children:["N\xfamero de entidades enviadas pela peti\xe7\xe3o REST. Esse n\xfamero pode ser o n\xfamero total de entidades se for menor que o valor definido por ",(0,d.jsx)(a.code,{children:"$top/$limit"}),"."]})]}),(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.td,{children:"__FIRST"}),(0,d.jsx)(a.td,{children:"Number"}),(0,d.jsxs)(a.td,{children:["N\xfamero de entidade em que a sele\xe7\xe3o vai come\xe7ar. Ou o valor padr\xe3o 0 ou o valor definido por ",(0,d.jsx)(a.code,{children:"$skip"}),"."]})]}),(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.td,{children:"__ENTITIES"}),(0,d.jsx)(a.td,{children:"Collection"}),(0,d.jsx)(a.td,{children:"Esta cole\xe7\xe3o de objetos cont\xe9m um objeto para cada entidade com todos seus atributos. Todos os atributos relacionais s\xe3o retornados como objetos com uma URI para obter informa\xe7\xe3o sobre o objeto pai."})]})]})]}),"\n",(0,d.jsx)(a.p,{children:"Cada entidade cont\xe9m as propriedades abaixo:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(a.table,{children:[(0,d.jsx)(a.thead,{children:(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.th,{children:"Propriedade"}),(0,d.jsx)(a.th,{children:"Tipo"}),(0,d.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(a.tbody,{children:[(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.td,{children:"__KEY"}),(0,d.jsx)(a.td,{children:"Text"}),(0,d.jsx)(a.td,{children:"Valor da chave prim\xe1ria definida para a classe de dados."})]}),(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.td,{children:"__TIMESTAMP"}),(0,d.jsx)(a.td,{children:"Date"}),(0,d.jsx)(a.td,{children:"Registro de hora da \xfaltima modifica\xe7\xe3o da entidade"})]}),(0,d.jsxs)(a.tr,{children:[(0,d.jsx)(a.td,{children:"__STAMP"}),(0,d.jsx)(a.td,{children:"Number"}),(0,d.jsxs)(a.td,{children:["Registro interno necess\xe1rio quando modificar qualquer um dos valores na entidade quando usar",(0,d.jsx)(a.code,{children:"$method=update"}),"."]})]})]})]}),"\n",(0,d.jsxs)(a.p,{children:["Se quiser especificar quais atributos quer retornar, defina-os usando a sintaxe abaixo ",(0,d.jsx)(a.a,{href:"/docs/pt/18/REST/manData#selecting-attributes-to-get",children:"{attribute1, attribute2, ...}"}),". Por exemplo:"]}),"\n",(0,d.jsx)(a.p,{children:(0,d.jsx)(a.code,{children:"GET  /rest/Company/name,address"})}),"\n",(0,d.jsx)(a.h3,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(a.p,{children:"Retorna todas as datas para uma classe de dados espec\xedfica."}),"\n",(0,d.jsx)(a.p,{children:(0,d.jsx)(a.code,{children:"GET  /rest/Company"})}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.strong,{children:"Resultadoi"}),":"]}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{children:'{\n    "__entityModel": "Company",\n    "__GlobalStamp": 51,\n    "__COUNT": 250,\n    "__SENT": 100,\n    "__FIRST": 0,\n    "__ENTITIES": [\n        {\n            "__KEY": "1",\n            "__TIMESTAMP": "2020-04-10T10:44:49.927Z",\n            "__STAMP": 1,\n            "ID": 1,\n            "name": "Adobe",\n            "address": null,\n            "city": "San Jose",\n            "country": "USA",\n            "revenues": 500000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(1)/staff?$expand=staff"\n                }\n            }\n        },\n        {\n            "__KEY": "2",\n            "__TIMESTAMP": "2018-04-25T14:42:18.351Z",\n            "__STAMP": 1,\n            "ID": 2,\n            "name": "Apple",\n            "address": null,\n            "city": "Cupertino",\n            "country": "USA",\n            "revenues": 890000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(2)/staff?$expand=staff"\n                }\n            }\n        },\n        {\n            "__KEY": "3",\n            "__TIMESTAMP": "2018-04-23T09:03:49.021Z",\n            "__STAMP": 2,\n            "ID": 3,\n            "name": "4D",\n            "address": null,\n            "city": "Clichy",\n            "country": "France",\n            "revenues": 700000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(3)/staff?$expand=staff"\n                }\n            }\n        },\n        {\n            "__KEY": "4",\n            "__TIMESTAMP": "2018-03-28T14:38:07.430Z",\n            "__STAMP": 1,\n            "ID": 4,\n            "name": "Microsoft",\n            "address": null,\n            "city": "Seattle",\n            "country": "USA",\n            "revenues": 650000,\n            "staff": {\n                "__deferred": {\n                    "uri": "http://127.0.0.1:8081/rest/Company(4)/staff?$expand=staff"\n                }\n            }\n        }\n.....//more entities here \n    ]\n}\n'})}),"\n",(0,d.jsx)(a.h2,{id:"dataclasskey",children:"{dataClass}({key})"}),"\n",(0,d.jsxs)(a.p,{children:["Retorna os dados para a entidade espec\xedfica definida pela chave prim\xe1ria da classe de dados, ",(0,d.jsx)(a.em,{children:"e.g."}),", ",(0,d.jsx)(a.code,{children:'Company(22) ou Company("IT0911AB2200")'})]}),"\n",(0,d.jsx)(a.h3,{id:"descri\xe7\xe3o-1",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(a.p,{children:["Passando a classe de dados e uma chave, pode recuperar toda a informa\xe7\xe3o p\xfablica para a entidade. Passando a classe de dados e uma chave, pode recuperar toda a informa\xe7\xe3o p\xfablica para a entidade. Para saber mais sobre a defini\xe7\xe3o de chave prim\xe1ria, veja a se\xe7\xe3o ",(0,d.jsx)(a.strong,{children:"Modifying the Primary Key"})," em ",(0,d.jsx)(a.strong,{children:"Data Model Editor"}),"."]}),"\n",(0,d.jsxs)(a.p,{children:["Se quiser especificar quais atributos quer retornar, defina-os usando a sintaxe abaixo ",(0,d.jsx)(a.a,{href:"/docs/pt/18/REST/manData##selecting-attributes-to-get",children:"{atributo1, atributo2, ...}"}),". Por exemplo:"]}),"\n",(0,d.jsx)(a.p,{children:(0,d.jsx)(a.code,{children:"GET  /rest/Company(1)/name,address"})}),"\n",(0,d.jsxs)(a.p,{children:["Se quiser expandir o atributo de rela\xe7\xe3o usando ",(0,d.jsx)(a.code,{children:"$expand"}),", pode fazer isso como mostrado abaixo:"]}),"\n",(0,d.jsx)(a.p,{children:(0,d.jsx)(a.code,{children:"GET  /rest/Company(1)/name,address,staff?$expand=staff"})}),"\n",(0,d.jsx)(a.h3,{id:"exemplo-1",children:"Exemplo"}),"\n",(0,d.jsx)(a.p,{children:"A peti\xe7\xe3o abaixo retorna todos os dados p\xfablicos na dataclass Company cuja chave \xe9 1."}),"\n",(0,d.jsx)(a.p,{children:(0,d.jsx)(a.code,{children:"GET  /rest/Company(1)"})}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.strong,{children:"Resultadoi"}),":"]}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{children:'{\n    "__entityModel": "Company",\n    "__KEY": "1",\n    "__TIMESTAMP": "2020-04-10T10:44:49.927Z",\n    "__STAMP": 2,\n    "ID": 1,\n    "name": "Apple",\n    "address": Infinite Loop,\n    "city": "Cupertino",\n    "country": "USA",\n    "url": http://www.apple.com,\n    "revenues": 500000,\n    "staff": {\n        "__deferred": {\n            "uri": "http://127.0.0.1:8081/rest/Company(1)/staff?$expand=staff"\n        }\n    }\n}\n'})}),"\n",(0,d.jsx)(a.h2,{id:"dataclassattributevalue",children:"{dataClass}:{attribute}(value)"}),"\n",(0,d.jsx)(a.p,{children:"Retorna os dados para uma entidade na qual os valores de atributo s\xe3o definidas"}),"\n",(0,d.jsx)(a.h3,{id:"descri\xe7\xe3o-2",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(a.p,{children:["Passando ",(0,d.jsx)(a.em,{children:"dataClass"})," e um ",(0,d.jsx)(a.em,{children:"atributo"})," junto com o valor, pode recuperar toda a informa\xe7\xe3o p\xfablica para essa entidade. O valor \xe9 um valor \xfanico para o atributo, mas n\xe3o \xe9 a chave prim\xe1ria."]}),"\n",(0,d.jsx)(a.p,{children:(0,d.jsx)(a.code,{children:"GET  /rest/Company:companyCode(Acme001)"})}),"\n",(0,d.jsxs)(a.p,{children:["Se quiser especificar quais atributos quer retornar, defina-os usando a sintaxe abaixo ",(0,d.jsx)(a.a,{href:"/docs/pt/18/REST/manData##selecting-attributes-to-get",children:"{atributo1, atributo2, ...}"}),". Por exemplo:"]}),"\n",(0,d.jsx)(a.p,{children:(0,d.jsx)(a.code,{children:"GET  /rest/Company:companyCode(Acme001)/name,address"})}),"\n",(0,d.jsxs)(a.p,{children:["Se quiser usar um atributo de rela\xe7\xe3o usando ",(0,d.jsx)(a.a,{href:"/docs/pt/18/REST/attributes",children:"$attributes"}),", pode fazer isso especificando-o como mostrado abaixo:"]}),"\n",(0,d.jsx)(a.p,{children:(0,d.jsx)(a.code,{children:"GET  /rest/Company:companyCode(Acme001)?$attributes=name,address,staff.name"})}),"\n",(0,d.jsx)(a.h3,{id:"exemplo-2",children:"Exemplo"}),"\n",(0,d.jsx)(a.p,{children:'A peti\xe7\xe3o abaixo retorna todos os dados p\xfablicos do funcion\xe1rio chamado "Jones".'}),"\n",(0,d.jsx)(a.p,{children:(0,d.jsx)(a.code,{children:"GET  /rest/Employee:lastname(Jones)"})}),"\n",(0,d.jsx)(a.h2,{id:"dataclassmethod-and-dataclasskeymethod",children:"{dataClass}/{method} and {dataClass}({key})/{method}"}),"\n",(0,d.jsx)(a.p,{children:"Retorna um objeto ou uma cole\xe7\xe3o baseada em um m\xe9todo projeto."}),"\n",(0,d.jsx)(a.h3,{id:"descri\xe7\xe3o-3",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsx)(a.p,{children:"Os m\xe9todos projeto s\xe3o chamados atrav\xe9s de uma classe de dados (tabela) ou uma entidade (registro), e devem retornar ou um objeto ou uma cole\xe7\xe3o."}),"\n",(0,d.jsx)(a.p,{children:(0,d.jsx)(a.code,{children:"POST /rest/Employee/getHighSalaries"})}),"\n",(0,d.jsx)(a.p,{children:(0,d.jsx)(a.code,{children:"POST  /rest/Employee(52)/getFullName"})}),"\n",(0,d.jsx)(a.h3,{id:"configura\xe7\xe3o-4d",children:"Configura\xe7\xe3o 4D"}),"\n",(0,d.jsx)(a.p,{children:"Para ser chamado em uma peti\xe7\xe3o REST, um m\xe9todo deve:"}),"\n",(0,d.jsxs)(a.ul,{children:["\n",(0,d.jsx)(a.li,{children:'ter sido declarado como "dispon\xedvel via o servidor REST" em 4D,'}),"\n",(0,d.jsxs)(a.li,{children:["ter sua tabela mestre e escopo definidos de forma coerente:\n",(0,d.jsxs)(a.ul,{children:["\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.strong,{children:"Tabela"}),": tabela 4D (classe de dados) na qual o m\xe9todo \xe9 chamado. A tabela deve ser ",(0,d.jsx)(a.a,{href:"/docs/pt/18/REST/configuration#exposing-tables-and-fields",children:"exposta a REST"}),"."]}),"\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.strong,{children:"Escopo/alcance"}),": Essa configura\xe7\xe3o \xe9 \xfatil quando o m\xe9todo usar a linguagem cl\xe1ssica 4D e assim precisar ter um contexto de database no lado do servidor.\n",(0,d.jsxs)(a.ul,{children:["\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.strong,{children:"Tabela"})," -para m\xe9todos aplicados para a tabela inteira (dataclass)"]}),"\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.strong,{children:"Current record"})," -for methods applied to the current record (entity) using the ",(0,d.jsx)(a.code,{children:"\\{dataClass\\}(key)/{method}"})," syntax."]}),"\n",(0,d.jsxs)(a.li,{children:[(0,d.jsx)(a.strong,{children:"Sele\xe7\xe3o atual"})," -para os m\xe9todos aplicados \xe0 sele\xe7\xe3o atual"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(a.p,{children:(0,d.jsx)(a.img,{alt:"alt-text",src:n(531797).Z+"",width:"552",height:"557"})}),"\n",(0,d.jsx)(a.h3,{id:"passar-par\xe2metros-a-um-m\xe9todo",children:"Passar par\xe2metros a um M\xe9todo"}),"\n",(0,d.jsx)(a.p,{children:"Tamb\xe9m pode passar par\xe2metros a um m\xe9todo e um POST."}),"\n",(0,d.jsx)(a.p,{children:(0,d.jsx)(a.code,{children:"POST /rest/Employee/addEmployee"})}),"\n",(0,d.jsx)(a.p,{children:"Pode fazer um POST de dados no corpo da consulta, por exemplo:"}),"\n",(0,d.jsx)(a.p,{children:'["John","Smith"]'}),"\n",(0,d.jsx)(a.h3,{id:"exemplos",children:"Exemplos"}),"\n",(0,d.jsx)(a.h4,{id:"alcance-da-tabela",children:"Alcance da tabela"}),"\n",(0,d.jsxs)(a.p,{children:["Chamada de um m\xe9todo ",(0,d.jsx)(a.code,{children:"getAverage"}),":"]}),"\n",(0,d.jsxs)(a.ul,{children:["\n",(0,d.jsx)(a.li,{children:"na tabela [Employee]"}),"\n",(0,d.jsxs)(a.li,{children:["com o alcance de ",(0,d.jsx)(a.strong,{children:"Table"})]}),"\n"]}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-4d",children:' //getAverage ALL RECORDS([Employee])\n$0:=New object("ageAverage";Average([Employee]age))\n'})}),"\n",(0,d.jsx)(a.p,{children:(0,d.jsx)(a.code,{children:"POST  /rest/Employee/getAverage"})}),"\n",(0,d.jsx)(a.p,{children:"Resultados:"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{children:'{\n    "result": {\n        "ageAverage": 44.125\n    }\n}\n'})}),"\n",(0,d.jsx)(a.h4,{id:"alcance-do-registro-atual",children:"Alcance do registro atual"}),"\n",(0,d.jsxs)(a.p,{children:["Chamada de um m\xe9todo ",(0,d.jsx)(a.code,{children:"getFullName"}),":"]}),"\n",(0,d.jsxs)(a.ul,{children:["\n",(0,d.jsx)(a.li,{children:"na tabela [Employee]"}),"\n",(0,d.jsxs)(a.li,{children:["com o alcance de ",(0,d.jsx)(a.strong,{children:"Current record"})]}),"\n"]}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-4d",children:' //getFullName  \n$0:=New object("fullName";[Employee]firstname+" "+[Employee]lastname)\n'})}),"\n",(0,d.jsx)(a.p,{children:(0,d.jsx)(a.code,{children:"POST  /rest/Employee(3)/getFullName"})}),"\n",(0,d.jsx)(a.p,{children:"Resultados:"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{children:'{\n    "result": {\n        "fullName": "John Smith"\n    }\n}\n'})}),"\n",(0,d.jsx)(a.h4,{id:"alcance-da-sele\xe7\xe3o-atual",children:"Alcance da sele\xe7\xe3o atual"}),"\n",(0,d.jsxs)(a.p,{children:["Chamada de um m\xe9todo ",(0,d.jsx)(a.code,{children:"updateSalary"}),":"]}),"\n",(0,d.jsxs)(a.ul,{children:["\n",(0,d.jsx)(a.li,{children:"na tabela [Employee]"}),"\n",(0,d.jsxs)(a.li,{children:["com o alcance de ",(0,d.jsx)(a.strong,{children:"Current selection"})]}),"\n"]}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-4d",children:' //updateSalary C_REAL($1;$vCount)\nREAD WRITE([Employee])\n$vCount:=0 FIRST RECORD([Employee])\nWhile (Not(End selection([Employee]))  \n [Employee]salary:=[Employee]salary * $1\n    SAVE RECORD([Employee])\n    $vCount:=$vCount+1\n    NEXT RECORD([Employee])\nEnd while UNLOAD RECORD([Employee])\n$0:=New object("updates";$vCount)\n'})}),"\n",(0,d.jsx)(a.p,{children:(0,d.jsx)(a.code,{children:'POST  /rest/Employee/updateSalary/?$filter="salary<1500"'})}),"\n",(0,d.jsx)(a.p,{children:"POST data (in the request body): [1.5]"}),"\n",(0,d.jsx)(a.p,{children:"Resultados:"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{children:'{\n    "result": {\n        "ageAverage": 42\n    }\n}\n'})})]})}function h(e={}){let{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,d.jsx)(a,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},531797:function(e,a,n){n.d(a,{Z:function(){return s}});let s=n.p+"assets/images/MethodProp-81c3e8a0e2bb72d44d9ac3e5d10d4a7f.png"},250065:function(e,a,n){n.d(a,{Z:function(){return t},a:function(){return o}});var s=n(667294);let d={},r=s.createContext(d);function o(e){let a=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);