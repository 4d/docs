/*! For license information please see a38975ef.fb63fb13.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[67199],{688361:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>t,toc:()=>l});var o=d(474848),s=d(28453);const a={id:"method",title:"$method"},r=void 0,t={id:"REST/method",title:"$method",description:"Este par\xe2metro permite-lhe definir a opera\xe7\xe3o a executar com a entidade ou a sele\xe7\xe3o de entidades devolvida.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/REST/$method.md",sourceDirName:"REST",slug:"/REST/method",permalink:"/docs/pt/18/REST/method",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24method.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"method",title:"$method"},sidebar:"docs",previous:{title:"$imageformat",permalink:"/docs/pt/18/REST/imageformat"},next:{title:"$orderby",permalink:"/docs/pt/18/REST/orderby"}},i={},l=[{value:"Sintaxe dispon\xedvel",id:"Sintaxe-dispon\xedvel",level:2},{value:"$method=delete",id:"methoddelete",level:2},{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o",level:3},{value:"Exemplo",id:"Exemplo",level:3},{value:"$method=entityset",id:"methodentityset",level:2},{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o-1",level:3},{value:"Exemplo",id:"Exemplo-1",level:3},{value:"$method=release",id:"methodrelease",level:2},{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o-2",level:3},{value:"Exemplo",id:"Exemplo-2",level:3},{value:"Responsa:",id:"Responsa",level:4},{value:"$method=subentityset",id:"methodsubentityset",level:2},{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o-3",level:3},{value:"Exemplo",id:"Exemplo-3",level:3},{value:"Responsa:",id:"Responsa-1",level:4},{value:"$method=update",id:"methodupdate",level:2},{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o-4",level:3},{value:"Exemplo",id:"Exemplo-4",level:3}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Este par\xe2metro permite-lhe definir a opera\xe7\xe3o a executar com a entidade ou a sele\xe7\xe3o de entidades devolvida."}),"\n",(0,o.jsx)(n.h2,{id:"Sintaxe-dispon\xedvel",children:"Sintaxe dispon\xedvel"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Sintaxe"}),(0,o.jsx)(n.th,{children:"Exemplo"}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"#methoddelete",children:(0,o.jsx)(n.strong,{children:"$method=delete"})})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:'POST /Employee?$filter="ID=11"& $method=delete'})}),(0,o.jsx)(n.td,{children:"Elimina a entidade, cole\xe7\xe3o de entidades ou sele\xe7\xe3o de entidades atual"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"#methodentityset",children:(0,o.jsx)(n.strong,{children:"$method=entityset"})})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:'GET /People/?$filter="ID>320"& $method=entityset& $timeout=600'})}),(0,o.jsx)(n.td,{children:"Cria um conjunto de entidades no cache do 4D Server baseado na cole\xe7\xe3o de entidades definidas no pedido REST"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"#methodrelease",children:(0,o.jsx)(n.strong,{children:"$method=release"})})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"GET /Employee/$entityset/<entitySetID>?$method=release"})}),(0,o.jsx)(n.td,{children:"Libera um conjunto de entidades existente armazenado no cache do 4D Server"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"#methodsubentityset",children:(0,o.jsx)(n.strong,{children:"$method=subentityset"})})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"GET /Company(1)/staff?$expand=staff& $method=subentityset&   $subOrderby=lastName ASC"})}),(0,o.jsx)(n.td,{children:"Cria um conjunto de entidades com base na cole\xe7\xe3o de entidades relacionadas definidas no pedido REST"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"#methodupdate",children:(0,o.jsx)(n.strong,{children:"$method=update"})})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"POST /Person/?$method=update"})}),(0,o.jsx)(n.td,{children:"Actualiza e/ou cria uma ou mais entidades"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"methoddelete",children:"$method=delete"}),"\n",(0,o.jsx)(n.p,{children:"Elimina a entidade, cole\xe7\xe3o de entidades ou sele\xe7\xe3o de entidades atual (criada atrav\xe9s de REST)"}),"\n",(0,o.jsx)(n.h3,{id:"Descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["Com ",(0,o.jsx)(n.code,{children:"$method=delete"}),", \xe9 poss\xedvel eliminar uma entidade ou toda uma cole\xe7\xe3o de entidades. You can define the collection of entities by using, for example, ",(0,o.jsx)(n.a,{href:"/docs/pt/18/REST/filter",children:(0,o.jsx)(n.code,{children:"$filter"})})," or specifying one directly using ",(0,o.jsx)(n.a,{href:"%7BdataClass%7D.html#dataclasskey",children:(0,o.jsx)(n.code,{children:"\\{dataClass\\}({key})"})})," ",(0,o.jsx)(n.em,{children:"(e.g."}),", /Employee(22))."]}),"\n",(0,o.jsxs)(n.p,{children:["You can also delete the entities in an entity set, by calling ",(0,o.jsx)(n.a,{href:"/docs/pt/18/REST/entityset#entitysetentitysetid",children:(0,o.jsx)(n.code,{children:"$entityset/\\{entitySetID\\}"})}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"Exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.p,{children:"Pode ent\xe3o escrever o seguinte pedido REST para eliminar a entidade cuja chave \xe9 22:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"POST  /rest/Employee(22)/?$method=delete"})}),"\n",(0,o.jsx)(n.p,{children:"Tamb\xe9m \xe9 poss\xedvel efetuar uma consulta utilizando $filter:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:'POST  /rest/Employee?$filter="ID=11"&$method=delete'})}),"\n",(0,o.jsx)(n.p,{children:"You can also delete an entity set using $entityset/{entitySetID}:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"POST  /rest/Employee/$entityset/73F46BE3A0734EAA9A33CA8B14433570?$method=delete"})}),"\n",(0,o.jsx)(n.p,{children:"Responsa:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "ok": true\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"methodentityset",children:"$method=entityset"}),"\n",(0,o.jsx)(n.p,{children:"Cria um conjunto de entidades no cache do 4D Server baseado na cole\xe7\xe3o de entidades definidas no pedido REST"}),"\n",(0,o.jsx)(n.h3,{id:"Descri\xe7\xe3o-1",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["Quando cria uma cole\xe7\xe3o de entidades em REST, pode tamb\xe9m criar um conjunto de entidades que ser\xe1 guardado na cache do 4D Server. The entity set will have a reference number that you can pass to ",(0,o.jsx)(n.code,{children:"$entityset/\\{entitySetID\\}"})," to access it. Por padr\xe3o, \xe9 v\xe1lido durante duas horas; no entanto, pode modificar esse tempo passando um valor (em segundos) para $timeout."]}),"\n",(0,o.jsxs)(n.p,{children:["Se usou ",(0,o.jsx)(n.code,{children:"$savedfilter"})," e/ou ",(0,o.jsx)(n.code,{children:"$savedorderby"})," (em conjunto com ",(0,o.jsx)(n.code,{children:"$filter"})," e/ou ",(0,o.jsx)(n.code,{children:"$orderby"}),") quando criou seu conjunto de entidades, pode recri\xe1-lo com o mesmo ID de refer\xeancia mesmo que tenha sido removido do cache de 4D Server."]}),"\n",(0,o.jsx)(n.h3,{id:"Exemplo-1",children:"Exemplo"}),"\n",(0,o.jsxs)(n.p,{children:["Para criar um conjunto de entidades, que ser\xe1 guardado no cache do 4D Server por duas horas, adicione ",(0,o.jsx)(n.code,{children:"$method=entityset"})," no final do seu pedido REST:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:'GET  /rest/People/?$filter="ID>320"&$method=entityset'})}),"\n",(0,o.jsxs)(n.p,{children:["Pode criar um conjunto de entidades que ser\xe1 armazenado na cache do 4D Server por apenas dez minutos, passando um novo timeout para ",(0,o.jsx)(n.code,{children:"$timeout"}),":"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:'GET  /rest/People/?$filter="ID>320"&$method=entityset&$timeout=600'})}),"\n",(0,o.jsxs)(n.p,{children:["Tamb\xe9m \xe9 poss\xedvel guardar o filtro e ordenar por, passando true para ",(0,o.jsx)(n.code,{children:"$savedfilter"})," e ",(0,o.jsx)(n.code,{children:"$savedorderby"}),"."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"$skip"})," e ",(0,o.jsx)(n.code,{children:"$top/$limit"})," n\xe3o s\xe3o tidos em considera\xe7\xe3o quando se guarda um conjunto de entidades."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Ap\xf3s criar um conjunto de entidades, o primeiro elemento, ",(0,o.jsx)(n.code,{children:"__ENTITYSET"}),", \xe9 adicionado ao objeto devolvido e indica o URI a utilizar para aceder ao conjunto de entidades:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'__ENTITYSET: "http://127.0.0.1:8081/rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7"`\n'})}),"\n",(0,o.jsx)(n.h2,{id:"methodrelease",children:"$method=release"}),"\n",(0,o.jsx)(n.p,{children:"Libera um conjunto de entidades existente armazenado no cache do 4D Server."}),"\n",(0,o.jsx)(n.h3,{id:"Descri\xe7\xe3o-2",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["Voc\xea pode liberar um conjunto de entidades, que voc\xea criou usando ",(0,o.jsx)(n.a,{href:"#methodentityset",children:(0,o.jsx)(n.code,{children:"$method=entityset"})}),", do cache de 4D Server."]}),"\n",(0,o.jsx)(n.h3,{id:"Exemplo-2",children:"Exemplo"}),"\n",(0,o.jsx)(n.p,{children:"Mostra um conjunto de entidades existente:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"GET  /rest/Employee/$entityset/4C51204DD8184B65AC7D79F09A077F24?$method=release"})}),"\n",(0,o.jsx)(n.h4,{id:"Responsa",children:"Responsa:"}),"\n",(0,o.jsx)(n.p,{children:"Se o pedido for bem sucedido, \xe9 devolvida a seguinte resposta:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "ok": true\n} If the entity set wasn\'t found, an error is returned:\n\n{\n    "__ERROR": [\n        {\n            "message": "Error code: 1802\\nEntitySet  \\"4C51204DD8184B65AC7D79F09A077F24\\" cannot be found\\ncomponent:  \'dbmg\'\\ntask 22, name: \'HTTP connection handler\'\\n",\n            "componentSignature": "dbmg",\n            "errCode": 1802\n        }\n    ]\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"methodsubentityset",children:"$method=subentityset"}),"\n",(0,o.jsx)(n.p,{children:"Cria um conjunto de entidades no cache do 4D Server baseado na cole\xe7\xe3o de entidades relacionadas definidas no pedido REST"}),"\n",(0,o.jsx)(n.h3,{id:"Descri\xe7\xe3o-3",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"$method=subentityset"})," permite-lhe ordenar os dados devolvidos pelo atributo relacional definido no pedido REST."]}),"\n",(0,o.jsxs)(n.p,{children:["Para ordenar os dados, utilize a propriedade ",(0,o.jsx)(n.code,{children:"$subOrderby"}),". Para cada atributo, especifica a ordem como ASC (ou asc) para ordem ascendente e DESC (desc) para ordem descendente. Por defeito, os dados s\xe3o ordenados por ordem ascendente."]}),"\n",(0,o.jsxs)(n.p,{children:["Se pretender especificar v\xe1rios atributos, pode delimit\xe1-los com uma v\xedrgula, \xb5, ",(0,o.jsx)(n.code,{children:'$subOrderby="lastName desc, firstName asc"'}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"Exemplo-3",children:"Exemplo"}),"\n",(0,o.jsx)(n.p,{children:"Se pretender recuperar apenas as entidades relacionadas para uma entidade espec\xedfica, pode efetuar o seguinte pedido REST em que staff \xe9 o atributo de rela\xe7\xe3o na dataclass Company ligada \xe0 dataclass Employee:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"GET  /rest/Company(1)/staff?$expand=staff&$method=subentityset&$subOrderby=lastName ASC"})}),"\n",(0,o.jsx)(n.h4,{id:"Responsa-1",children:"Responsa:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n\n    "__ENTITYSET": "/rest/Employee/$entityset/FF625844008E430B9862E5FD41C741AB",\n    "__entityModel": "Employee",\n    "__COUNT": 2,\n    "__SENT": 2,\n    "__FIRST": 0,\n    "__ENTITIES": [\n        {\n            "__KEY": "4",\n            "__STAMP": 1,\n            "ID": 4,\n            "firstName": "Linda",\n            "lastName": "Jones",\n            "birthday": "1970-10-05T14:23:00Z",\n            "employer": {\n                "__deferred": {\n                    "uri": "/rest/Company(1)",\n                    "__KEY": "1"\n                }\n            }\n        },\n        {\n            "__KEY": "1",\n            "__STAMP": 3,\n            "ID": 1,\n            "firstName": "John",\n            "lastName": "Smith",\n            "birthday": "1985-11-01T15:23:00Z",\n            "employer": {\n                "__deferred": {\n                    "uri": "/rest/Company(1)",\n                    "__KEY": "1"\n                }\n            }\n        }\n    ]\n\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"methodupdate",children:"$method=update"}),"\n",(0,o.jsx)(n.p,{children:"Actualiza e/ou cria uma ou mais entidades"}),"\n",(0,o.jsx)(n.h3,{id:"Descri\xe7\xe3o-4",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"$method=update"})," permite-lhe atualizar e/ou criar uma ou mais entidades num \xfanico ",(0,o.jsx)(n.strong,{children:"POST"}),". Se atualizar e/ou criar uma entidade, isso \xe9 feito num objeto em que cada propriedade \xe9 um atributo com o respetivo valor, ",(0,o.jsx)(n.em,{children:"por exemplo"}),", ",(0,o.jsx)(n.code,{children:'{ lastName: "Smith" }'}),". Se forem atualizadas e/ou criadas v\xe1rias entidades, \xe9 necess\xe1rio criar uma cole\xe7\xe3o de objetos."]}),"\n",(0,o.jsxs)(n.p,{children:["Em qualquer caso, \xe9 necess\xe1rio definir os dados ",(0,o.jsx)(n.strong,{children:"POST"})," no corpo **** do pedido."]}),"\n",(0,o.jsxs)(n.p,{children:["Para atualizar uma entidade, \xe9 necess\xe1rio passar os par\xe2metros ",(0,o.jsx)(n.code,{children:"__KEY"})," e ",(0,o.jsx)(n.code,{children:"__STAMP"})," no objeto, com quaisquer atributos modificados. Se ambos os par\xe2metros estiverem em falta, ser\xe1 adicionada uma entidade com os valores do objeto que enviar no corpo do seu ",(0,o.jsx)(n.strong,{children:"POST"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Os triggers s\xe3o executados imediatamente ao guardar a entidade no servidor. A resposta cont\xe9m todos os dados tal como existem no servidor."}),"\n",(0,o.jsxs)(n.p,{children:["Tamb\xe9m \xe9 poss\xedvel colocar estes pedidos para criar ou atualizar entidades numa transa\xe7\xe3o, chamando ",(0,o.jsx)(n.code,{children:"$atomic/$atOnce"}),". Se ocorrerem erros durante a valida\xe7\xe3o de dados, nenhuma das entidades \xe9 guardada. Pode tamb\xe9m utilizar ",(0,o.jsx)(n.code,{children:"$method=validate"})," para validar as entidades antes de as criar ou atualizar."]}),"\n",(0,o.jsx)(n.p,{children:"Se surgir um problema ao adicionar ou modificar uma entidade, ser-lhe-\xe1 enviado um erro com essa informa\xe7\xe3o."}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"As datas"}),' devem ser expressas no formato YYYY-MM-DDTHH:MM:SSZ (por exemplo, "2010-10-05T23:00:00Z"). Se tiver selecionado a propriedade Apenas data para o seu atributo Data, o fuso hor\xe1rio e a hora (hora, minutos e segundos) ser\xe3o removidos. Neste caso, tamb\xe9m pode enviar a data no formato que lhe \xe9 devolvido dd!mm!yyyy (por exemplo, 05!10!2013).']}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Booleanos"})," s\xe3o true ou false."]}),"\n",(0,o.jsxs)(n.li,{children:["Os ficheiros carregados utilizando ",(0,o.jsx)(n.code,{children:"$upload"})," podem ser aplicados a um atributo do tipo Imagem ou BLOB passando o objecto devolvido no seguinte formato ",(0,o.jsx)(n.code,{children:'{"ID": "D507BC03E613487E9B4C2F6A0512FE50"}'})," :::"]}),"\n"]}),(0,o.jsx)(n.h3,{id:"Exemplo-4",children:"Exemplo"}),(0,o.jsx)(n.p,{children:"Para atualizar uma entidade espec\xedfica, utilizar o seguinte URL:"}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"POST  /rest/Person/?$method=update"})}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Dados POST:"})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    __KEY: "340",\n    __STAMP: 2,\n    firstName: "Pete",\n    lastName: "Miller"\n}\n'})}),(0,o.jsx)(n.p,{children:"Os atributos firstName e lastName na entidade indicada acima ser\xe3o modificados, deixando todos os outros atributos (exceto os calculados com base nestes atributos) inalterados."}),(0,o.jsx)(n.p,{children:"Se voc\xea quiser criar uma entidade, poder\xe1 enviar os atributos via POST usando este URL:"}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"POST  /rest/Person/?$method=update"})}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Dados POST:"})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{ \n    firstName: "John",\n    lastName: "Smith"\n}\n'})}),(0,o.jsx)(n.p,{children:"Tamb\xe9m \xe9 poss\xedvel criar e atualizar v\xe1rias entidades em simult\xe2neo, utilizando o mesmo URL acima, passando v\xe1rios objetos num array para o POST:"}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"POST  /rest/Person/?$method=update"})}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Dados POST:"})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'[{ \n    "__KEY": "309",\n    "__STAMP": 5,\n    "ID": "309",\n    "firstName": "Penelope",\n    "lastName": "Miller"\n}, { \n    "firstName": "Ann",\n    "lastName": "Jones"\n}]\n'})}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Responsa:"})}),(0,o.jsx)(n.p,{children:"Quando se adiciona ou modifica uma entidade, esta \xe9-lhe devolvida com os atributos modificados. Por exemplo, se criar o novo empregado acima, ser-lhe-\xe1 devolvido o seguinte:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "__KEY": "622", \n    "__STAMP": 1, \n    "uri": "http://127.0.0.1:8081/rest/Employee(622)", \n    "__TIMESTAMP": "!!2020-04-03!!",\n    "ID": 622, \n    "firstName": "John", \n    "firstName": "Smith"\n}\n'})}),(0,o.jsx)(n.p,{children:"Se, por exemplo, o carimbo n\xe3o estiver correto, \xe9 apresentado o seguinte erro:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "__STATUS": {\n        "status": 2,\n        "statusText": "Stamp has changed",\n        "success": false\n    },\n    "__KEY": "1",\n    "__STAMP": 12,\n    "__TIMESTAMP": "!!2020-03-31!!",\n    "ID": 1,\n    "firstname": "Denise",\n    "lastname": "O\'Peters",\n    "isWoman": true,\n    "numberOfKids": 1,\n    "addressID": 1,\n    "gender": true,\n    "imageAtt": {\n        "__deferred": {\n            "uri": "/rest/Persons(1)/imageAtt?$imageformat=best&$version=12&$expand=imageAtt",\n            "image": true\n        }\n    },\n    "extra": {\n        "num": 1,\n        "alpha": "I am 1"\n    },\n    "address": {\n        "__deferred": {\n            "uri": "/rest/Address(1)",\n            "__KEY": "1"\n        }\n    },\n    "__ERROR": [\n        {\n            "message": "Given stamp does not match current one for record# 0 of table Persons",\n            "componentSignature": "dbmg",\n            "errCode": 1263\n        },\n        {\n            "message": "Cannot save record 0 in table Persons of database remote_dataStore",\n            "componentSignature": "dbmg",\n            "errCode": 1046\n        },\n        {\n            "message": "The entity# 1 in the \\"Persons\\" dataclass cannot be saved",\n            "componentSignature": "dbmg",\n            "errCode": 1517\n        }\n    ]\n}{}\n\n'})})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},221020:(e,n,d)=>{var o=d(296540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,t=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,d){var o,a={},l=null,c=null;for(o in void 0!==d&&(l=""+d),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)r.call(n,o)&&!i.hasOwnProperty(o)&&(a[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===a[o]&&(a[o]=n[o]);return{$$typeof:s,type:e,key:l,ref:c,props:a,_owner:t.current}}n.Fragment=a,n.jsx=l,n.jsxs=l},474848:(e,n,d)=>{e.exports=d(221020)},28453:(e,n,d)=>{d.d(n,{R:()=>r,x:()=>t});var o=d(296540);const s={},a=o.createContext(s);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);