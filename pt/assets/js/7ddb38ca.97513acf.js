"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42657"],{150225:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>i,metadata:()=>d,assets:()=>o,toc:()=>l,contentTitle:()=>r});var d=JSON.parse('{"id":"REST/classFunctions","title":"Chamada de fun\xe7\xf5es de classe ORDA","description":"Pode chamar as fun\xe7\xf5es de classe de modelos de dados definidas para o modelo de dados ORDA atrav\xe9s dos seus pedidos REST, para poder beneficiar da API da aplica\xe7\xe3o 4D objetivo.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/REST/ClassFunctions.md","sourceDirName":"REST","slug":"/REST/classFunctions","permalink":"/docs/pt/19/REST/classFunctions","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FClassFunctions.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"classFunctions","title":"Chamada de fun\xe7\xf5es de classe ORDA"},"sidebar":"docs","previous":{"title":"Manipula\xe7\xe3o de dados","permalink":"/docs/pt/19/REST/manData"},"next":{"title":"Sobre peti\xe7\xf5es REST","permalink":"/docs/pt/19/REST/REST_requests"}}'),a=n("785893"),t=n("250065");let i={id:"classFunctions",title:"Chamada de fun\xe7\xf5es de classe ORDA"},r=void 0,o={},l=[{value:"Chamadas fun\xe7\xf5es",id:"chamadas-fun\xe7\xf5es",level:2},{value:"Par\xe2metros",id:"par\xe2metros",level:2},{value:"Par\xe2metro de valor escalar",id:"par\xe2metro-de-valor-escalar",level:3},{value:"Par\xe2metro da entidade",id:"par\xe2metro-da-entidade",level:3},{value:"Par\xe2metro de entidade relacionada",id:"par\xe2metro-de-entidade-relacionada",level:4},{value:"Par\xe2metro de sele\xe7\xe3o da entidade",id:"par\xe2metro-de-sele\xe7\xe3o-da-entidade",level:3},{value:"Exemplos de peti\xe7\xf5es",id:"exemplos-de-peti\xe7\xf5es",level:2},{value:"Utilizar uma fun\xe7\xe3o de classe do datastore",id:"utilizar-uma-fun\xe7\xe3o-de-classe-do-datastore",level:3},{value:"Resultados",id:"resultados",level:4},{value:"Utiliza\xe7\xe3o de uma fun\xe7\xe3o de classe de dataclass",id:"utiliza\xe7\xe3o-de-uma-fun\xe7\xe3o-de-classe-de-dataclass",level:3},{value:"Resultados",id:"resultados-1",level:4},{value:"Utiliza\xe7\xe3o de uma fun\xe7\xe3o de classe de uma entidade",id:"utiliza\xe7\xe3o-de-uma-fun\xe7\xe3o-de-classe-de-uma-entidade",level:3},{value:"Resultados",id:"resultados-2",level:4},{value:"Usar uma fun\xe7\xe3o de classe de uma sele\xe7\xe3o de entidade",id:"usar-uma-fun\xe7\xe3o-de-classe-de-uma-sele\xe7\xe3o-de-entidade",level:3},{value:"Resultados",id:"resultados-3",level:4},{value:"Usando uma fun\xe7\xe3o de classe entitySelection e um entitySet",id:"usando-uma-fun\xe7\xe3o-de-classe-entityselection-e-um-entityset",level:3},{value:"Resultados",id:"resultados-4",level:4},{value:"Usando uma fun\xe7\xe3o de classe de sele\xe7\xe3o de entidades e um orderBy",id:"usando-uma-fun\xe7\xe3o-de-classe-de-sele\xe7\xe3o-de-entidades-e-um-orderby",level:3},{value:"Resultados",id:"resultados-5",level:4},{value:"Utilizar uma entidade a ser criada no servidor",id:"utilizar-uma-entidade-a-ser-criada-no-servidor",level:3},{value:"Resultados",id:"resultados-6",level:4},{value:"Utilizar uma entidade a atualizar no servidor",id:"utilizar-uma-entidade-a-atualizar-no-servidor",level:3},{value:"Resultados",id:"resultados-7",level:4},{value:"Cria\xe7\xe3o de uma entidade com uma entidade relacionada",id:"cria\xe7\xe3o-de-uma-entidade-com-uma-entidade-relacionada",level:3},{value:"Resultados",id:"resultados-8",level:4},{value:"Atualiza\xe7\xe3o de uma entidade com uma entidade relacionada",id:"atualiza\xe7\xe3o-de-uma-entidade-com-uma-entidade-relacionada",level:3},{value:"Resultados",id:"resultados-9",level:4},{value:"Receber uma sele\xe7\xe3o de entidade como par\xe2metro",id:"receber-uma-sele\xe7\xe3o-de-entidade-como-par\xe2metro",level:3},{value:"Resultados",id:"resultados-10",level:4},{value:"Utilizar uma sele\xe7\xe3o de entidade actualizada no cliente",id:"utilizar-uma-sele\xe7\xe3o-de-entidade-actualizada-no-cliente",level:3}];function c(e){let s={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:["Pode chamar as ",(0,a.jsx)(s.a,{href:"/docs/pt/19/ORDA/ordaClasses",children:"fun\xe7\xf5es de classe de modelos de dados"})," definidas para o modelo de dados ORDA atrav\xe9s dos seus pedidos REST, para poder beneficiar da API da aplica\xe7\xe3o 4D objetivo."]}),"\n",(0,a.jsxs)(s.p,{children:["As fun\xe7\xf5es s\xe3o simplesmente chamadas em pedidos POST na interface ORDA apropriada, sem (). Por exemplo, se tiver definido uma fun\xe7\xe3o ",(0,a.jsx)(s.code,{children:"getCity()"})," na dataclass City, pode cham\xe1-la utilizando o seguinte pedido:"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.code,{children:"/rest/City/getCity"})}),"\n",(0,a.jsxs)(s.p,{children:["com dados no corpo do pedido POST: ",(0,a.jsx)(s.code,{children:'["Aguada"]'})]}),"\n",(0,a.jsx)(s.p,{children:"Na linguagem 4D, esta chamada \xe9 equivalente a:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:'$city:=ds. City.getCity("Aguada")\n'})}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsxs)(s.p,{children:["Apenas as fun\xe7\xf5es com a palavra-chave ",(0,a.jsx)(s.code,{children:"exposed"})," podem ser diretamente chamadas a partir de pedidos REST. Ver a sec\xe7\xe3o ",(0,a.jsx)(s.a,{href:"/docs/pt/19/ORDA/ordaClasses#exposed-vs-non-exposed-functions",children:"Fun\xe7\xf5es expostas vs n\xe3o expostas"}),"."]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"chamadas-fun\xe7\xf5es",children:"Chamadas fun\xe7\xf5es"}),"\n",(0,a.jsxs)(s.p,{children:["As fun\xe7\xf5es t\xeam de ser sempre chamadas atrav\xe9s de pedidos ",(0,a.jsx)(s.strong,{children:"POST"})," REST (um pedido GET dar\xe1 origem a um erro)."]}),"\n",(0,a.jsx)(s.p,{children:"As fun\xe7\xf5es s\xe3o chamadas no objeto correspondente no datastore do servidor."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Fun\xe7\xe3o de classe"}),(0,a.jsx)(s.th,{children:"Sintaxe"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.a,{href:"/docs/pt/19/ORDA/ordaClasses#datastore-class",children:"datastore class"})}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"/rest/$catalog/DataStoreClassFunction"})})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.a,{href:"/docs/pt/19/ORDA/ordaClasses#dataclass-class",children:"dataclass class"})}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"/rest/{dataClass}/DataClassClassFunction"})})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.a,{href:"/docs/pt/19/ORDA/ordaClasses#entityselection-class",children:"entitySelection class"})}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"/rest/{dataClass}/EntitySelectionClassFunction"})})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"/rest/{dataClass}/EntitySelectionClassFunction/$entityset/entitySetNumber"})})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"/rest/{dataClass}/EntitySelectionClassFunction/$filter"})})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"/rest/{dataClass}/EntitySelectionClassFunction/$orderby"})})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.a,{href:"/docs/pt/19/ORDA/ordaClasses#entity-class",children:"entity class"})}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"/rest/\\{dataClass\\}(key)/EntityClassFunction/"})})]})]})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"/rest/\\{dataClass\\}/fun\xe7\xe3o"})," pode ser usado para chamar um dataclass ou uma fun\xe7\xe3o de sele\xe7\xe3o de entidade (",(0,a.jsx)(s.code,{children:"/rest/\\{dataClass\\}"})," retorna todas as entidades da DataClass como uma sele\xe7\xe3o de entidade). A fun\xe7\xe3o \xe9 pesquisada primeiro na classe de sele\xe7\xe3o de entidades. Se n\xe3o for encontrado, \xe9 procurado na dataclass. Por outras palavras, se uma fun\xe7\xe3o com o mesmo nome for definida tanto na classe DataClass como na classe EntitySelection, a fun\xe7\xe3o da classe de dataClass nunca ser\xe1 executada."]}),"\n"]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsxs)(s.p,{children:["All 4D code called from REST requests ",(0,a.jsx)(s.strong,{children:"must be thread-safe"})," if the project runs in compiled mode, because the REST Server always uses preemptive processes in this case (the ",(0,a.jsxs)(s.a,{href:"/docs/pt/19/WebServer/webServerConfig#use-preemptive-processes",children:[(0,a.jsx)(s.em,{children:"Use preemptive process"})," setting value"]})," is ignored by the REST Server)."]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"par\xe2metros",children:"Par\xe2metros"}),"\n",(0,a.jsx)(s.p,{children:"\xc9 poss\xedvel enviar par\xe2metros para fun\xe7\xf5es definidas em classes usu\xe1rios ORDA. No lado do servidor, ser\xe3o recebidos nas fun\xe7\xf5es de classe nos par\xe2metros normais $1, $2, etc."}),"\n",(0,a.jsx)(s.p,{children:"As regras abaixo s\xe3o v\xe1lidas:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Os par\xe2metros devem ser transmitidos no corpo ",(0,a.jsx)(s.strong,{children:"do pedido POST"})]}),"\n",(0,a.jsx)(s.li,{children:"Os par\xe2metros devem ser inclu\xeddos numa cole\xe7\xe3o (formato JSON)"}),"\n",(0,a.jsx)(s.li,{children:"Todos os tipos de dados escalares suportados nas cole\xe7\xf5es JSON podem ser passados como par\xe2metros."}),"\n",(0,a.jsx)(s.li,{children:"A entidade e a sele\xe7\xe3o de entidades podem ser passadas como par\xe2metros. O objeto JSON deve conter atributos espec\xedficos utilizados pelo servidor REST para atribuir dados aos objetos ORDA correspondentes: __DATACLASS,__ENTITY, __ENTITIES,__DATASET."}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["See ",(0,a.jsx)(s.a,{href:"#receiving-an-entity-selection-as-parameter",children:"this example"}),"."]}),"\n",(0,a.jsx)(s.h3,{id:"par\xe2metro-de-valor-escalar",children:"Par\xe2metro de valor escalar"}),"\n",(0,a.jsxs)(s.p,{children:["Os par\xe2metros devem ser simplesmente inclu\xeddos numa cole\xe7\xe3o definida no corpo. Por exemplo, com uma fun\xe7\xe3o de classe de dados ",(0,a.jsx)(s.code,{children:"getCities()"})," que recebe par\xe2metros de texto: ",(0,a.jsx)(s.code,{children:"/rest/City/getCities"})]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Par\xe2metros no corpo:"}),' ["Aguada", "Paris"]']}),"\n",(0,a.jsx)(s.p,{children:'Todos os tipos de dados JSON s\xe3o suportados nos par\xe2metros, incluindo os ponteiros JSON. As datas podem ser transmitidas como cadeias de caracteres no formato de data ISO 8601 (por exemplo, "2020-08-22T22:00:000Z").'}),"\n",(0,a.jsx)(s.h3,{id:"par\xe2metro-da-entidade",children:"Par\xe2metro da entidade"}),"\n",(0,a.jsxs)(s.p,{children:["As entidades passadas nos par\xe2metros s\xe3o referenciadas no servidor atrav\xe9s da sua chave (",(0,a.jsx)(s.em,{children:", ou seja, a propriedade"})," __KEY). Se o par\xe2metro chave for omitido num pedido, \xe9 carregada uma nova entidade na mem\xf3ria do servidor. Tamb\xe9m \xe9 poss\xedvel transmitir valores para quaisquer atributos da entidade. Estes valores ser\xe3o automaticamente utilizados para a entidade tratada no servidor."]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Se o pedido enviar valores de atributos modificados para uma entidade existente no servidor, a fun\xe7\xe3o de modelo de dados ORDA chamada ser\xe1 automaticamente executada no servidor com valores modificados. Esta carater\xedstica permite-lhe, por exemplo, verificar o resultado de uma opera\xe7\xe3o numa entidade, depois de aplicar todas as regras de neg\xf3cio, a partir da aplica\xe7\xe3o cliente. O usu\xe1rio pode ent\xe3o decidir guardar ou n\xe3o a entidade no servidor."}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Propriedades"}),(0,a.jsx)(s.th,{children:"Tipo"}),(0,a.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Atributos da entidade"}),(0,a.jsx)(s.td,{children:"misto"}),(0,a.jsx)(s.td,{children:"Opcional - Valores a modificar"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"__DATACLASS"}),(0,a.jsx)(s.td,{children:"Text"}),(0,a.jsx)(s.td,{children:"Obrigat\xf3rio - Indica a Dataclass da entidade"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"__ENTITY"}),(0,a.jsx)(s.td,{children:"Par\xe2metros"}),(0,a.jsx)(s.td,{children:"Obrigat\xf3rio - Verdadeiro para indicar ao servidor que o par\xe2metro \xe9 uma entidade"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"__KEY"}),(0,a.jsx)(s.td,{children:"misto (do mesmo tipo que a chave prim\xe1ria)"}),(0,a.jsx)(s.td,{children:"Facultativo - Chave prim\xe1ria da entidade"})]})]})]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Se __KEY n\xe3o for fornecido, uma nova entidade \xe9 criada no servidor com os atributos fornecidos."}),"\n",(0,a.jsx)(s.li,{children:"Se __KEY for fornecido, a entidade correspondente a __KEY \xe9 carregada no servidor com os atributos fornecidos"}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"See examples for creating or updating entities."}),"\n",(0,a.jsx)(s.h4,{id:"par\xe2metro-de-entidade-relacionada",children:"Par\xe2metro de entidade relacionada"}),"\n",(0,a.jsxs)(s.p,{children:["Propriedades id\xeanticas \xe0s de um par\xe2metro de entidade ",(0,a.jsx)(s.a,{href:"#entity-parameter"}),". Al\xe9m disso, a entidade relacionada deve existir e ser referenciada por __KEY que cont\xe9m a sua chave prim\xe1ria."]}),"\n",(0,a.jsxs)(s.p,{children:["Ver exemplos para ",(0,a.jsx)(s.a,{href:"#creating-an-entity-with-a-related-entity",children:"criar"})," ou ",(0,a.jsx)(s.a,{href:"#updating-an-entity-with-a-related-entity",children:"atualizar"})," entidades com entidades relacionadas."]}),"\n",(0,a.jsx)(s.h3,{id:"par\xe2metro-de-sele\xe7\xe3o-da-entidade",children:"Par\xe2metro de sele\xe7\xe3o da entidade"}),"\n",(0,a.jsxs)(s.p,{children:["A sele\xe7\xe3o da entidade deve ter sido previamente definida utilizando ",(0,a.jsx)(s.a,{href:"/docs/pt/19/REST/method#methodentityset",children:"$method=entityset"}),"."]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Se o pedido enviar uma sele\xe7\xe3o de entidade modificada para o servidor, a fun\xe7\xe3o de modelo de dados ORDA chamada ser\xe1 automaticamente executada no servidor com a sele\xe7\xe3o de entidade modificada."}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Propriedades"}),(0,a.jsx)(s.th,{children:"Tipo"}),(0,a.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Atributos da entidade"}),(0,a.jsx)(s.td,{children:"misto"}),(0,a.jsx)(s.td,{children:"Opcional - Valores a modificar"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"__DATASET"}),(0,a.jsx)(s.td,{children:"Text"}),(0,a.jsx)(s.td,{children:"Obrigat\xf3rio - entitySetID (UUID) da sele\xe7\xe3o de entidades"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"__ENTITIES"}),(0,a.jsx)(s.td,{children:"Par\xe2metros"}),(0,a.jsx)(s.td,{children:"Obrigat\xf3rio - Verdadeiro para indicar ao servidor que o par\xe2metro \xe9 uma sele\xe7\xe3o de entidade"})]})]})]}),"\n",(0,a.jsxs)(s.p,{children:["Ver exemplo de",(0,a.jsx)(s.a,{href:"#receiving-an-entity-selection-as-parameter",children:"recep\xe7\xe3o de uma sele\xe7\xe3o de entidade"}),"."]}),"\n",(0,a.jsx)(s.h2,{id:"exemplos-de-peti\xe7\xf5es",children:"Exemplos de peti\xe7\xf5es"}),"\n",(0,a.jsx)(s.p,{children:"Esta base de dados \xe9 exposta como um datastore remoto no localhost (porta 8111):"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"alt-text",src:n(685666).Z+"",width:"882",height:"599"})}),"\n",(0,a.jsx)(s.h3,{id:"utilizar-uma-fun\xe7\xe3o-de-classe-do-datastore",children:"Utilizar uma fun\xe7\xe3o de classe do datastore"}),"\n",(0,a.jsxs)(s.p,{children:["A classe de ",(0,a.jsx)(s.code,{children:"DataStore"})," US_Cities fornece uma API:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'// DataStore class Class extends DataStoreImplementation\n\nexposed Function getName()\n    $0:="US cities and zip codes manager" \n'})}),"\n",(0,a.jsx)(s.p,{children:"Pode ent\xe3o executar este pedido:"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"POST"})," ",(0,a.jsx)(s.code,{children:"127.0.0.1:8111/rest/$catalog/getName"})]}),"\n",(0,a.jsx)(s.h4,{id:"resultados",children:"Resultados"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'{\n"result": "US cities and zip codes manager" \n}\n'})}),"\n",(0,a.jsx)(s.h3,{id:"utiliza\xe7\xe3o-de-uma-fun\xe7\xe3o-de-classe-de-dataclass",children:"Utiliza\xe7\xe3o de uma fun\xe7\xe3o de classe de dataclass"}),"\n",(0,a.jsxs)(s.p,{children:["A classe Dataclass ",(0,a.jsx)(s.code,{children:"City"})," fornece uma API que devolve uma entidade cidade a partir de um nome passado como par\xe2metro:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'// City class Class extends DataClass\n\nexposed Function getCity()\n var $0 : cs. CityEntity\n var $1,$nameParam : text\n $nameParam:=$1\n $0:=This.query("name = :1";$nameParam).first()\n'})}),"\n",(0,a.jsx)(s.p,{children:"Pode ent\xe3o executar este pedido:"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"POST"})," ",(0,a.jsx)(s.code,{children:"127.0.0.1:8111/rest/City/getCity"})]}),"\n",(0,a.jsx)(s.p,{children:'Corpo do pedido: ["Aguada"]'}),"\n",(0,a.jsx)(s.h4,{id:"resultados-1",children:"Resultados"}),"\n",(0,a.jsx)(s.p,{children:"O resultado \xe9 uma entidade:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'{\n    "__entityModel": "City",\n    "__DATACLASS": "City",\n    "__KEY": "1",\n    "__TIMESTAMP": "2020-03-09T08:03:19.923Z",\n    "__STAMP": 1,\n    "ID": 1,\n    "name": "Aguada",\n    "countyFIPS": 72003,\n    "county": {\n        "__deferred": {\n            "uri": "/rest/County(72003)",\n            "__KEY": "72003" \n        }\n    },\n    "zips": {\n        "__deferred": {\n            "uri": "/rest/City(1)/zips?$expand=zips" \n        }\n    }\n}\n'})}),"\n",(0,a.jsx)(s.h3,{id:"utiliza\xe7\xe3o-de-uma-fun\xe7\xe3o-de-classe-de-uma-entidade",children:"Utiliza\xe7\xe3o de uma fun\xe7\xe3o de classe de uma entidade"}),"\n",(0,a.jsxs)(s.p,{children:["A classe de entidade ",(0,a.jsx)(s.code,{children:"CityEntity"})," fornece uma API:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'// CityEntity class Class extends Entity\n\nexposed Function getPopulation()\n    $0:=This.zips.sum("population")\n'})}),"\n",(0,a.jsx)(s.p,{children:"Pode ent\xe3o executar este pedido:"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"POST"})," ",(0,a.jsx)(s.code,{children:"127.0.0.1:8111/rest/City(2)/getPopulation"})]}),"\n",(0,a.jsx)(s.h4,{id:"resultados-2",children:"Resultados"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'{\n    "result": 48814\n}\n'})}),"\n",(0,a.jsx)(s.h3,{id:"usar-uma-fun\xe7\xe3o-de-classe-de-uma-sele\xe7\xe3o-de-entidade",children:"Usar uma fun\xe7\xe3o de classe de uma sele\xe7\xe3o de entidade"}),"\n",(0,a.jsxs)(s.p,{children:["A classe de selection de entidade ",(0,a.jsx)(s.code,{children:"CitySelection"})," fornece uma API:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'// CitySelection class Class extends EntitySelection\n\nexposed Function getPopulation()\n    $0:=This.zips.sum("population")\n'})}),"\n",(0,a.jsx)(s.p,{children:"Pode ent\xe3o executar este pedido:"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"POST"})," ",(0,a.jsx)(s.code,{children:'127.0.0.1:8111/rest/City/getPopulation/?$filter="ID<3"'})]}),"\n",(0,a.jsx)(s.h4,{id:"resultados-3",children:"Resultados"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'{\n    "result": 87256\n}\n'})}),"\n",(0,a.jsx)(s.h3,{id:"usando-uma-fun\xe7\xe3o-de-classe-entityselection-e-um-entityset",children:"Usando uma fun\xe7\xe3o de classe entitySelection e um entitySet"}),"\n",(0,a.jsxs)(s.p,{children:["A classe ",(0,a.jsx)(s.code,{children:"StudentsSelection"})," tem uma fun\xe7\xe3o ",(0,a.jsx)(s.code,{children:"getAgeAverage"}),":"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"// StudentsSelection Class Class extends EntitySelection\n\nexposed Function getAgeAverage\n C_LONGINT($sum;$0)\n C_OBJECT($s)\n\n $sum:=0\n For each ($s;This)\n     $sum:=$sum+$s.age()\n End for each \n $0:=$sum/This.length\n"})}),"\n",(0,a.jsx)(s.p,{children:"Uma vez criado um conjunto de entidades, \xe9 poss\xedvel executar este pedido:"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"POST"})," ",(0,a.jsx)(s.code,{children:"127.0.0.1:8044/rest/Students/getAgeAverage/$entityset/17E83633FFB54ECDBF947E5C620BB532"})]}),"\n",(0,a.jsx)(s.h4,{id:"resultados-4",children:"Resultados"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'{\n    "result": 34\n}\n'})}),"\n",(0,a.jsx)(s.h3,{id:"usando-uma-fun\xe7\xe3o-de-classe-de-sele\xe7\xe3o-de-entidades-e-um-orderby",children:"Usando uma fun\xe7\xe3o de classe de sele\xe7\xe3o de entidades e um orderBy"}),"\n",(0,a.jsxs)(s.p,{children:["A classe ",(0,a.jsx)(s.code,{children:"StudentsSelection"})," tem uma fun\xe7\xe3o ",(0,a.jsx)(s.code,{children:"getLastSummary"}),":"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'// StudentsSelection Class Class extends EntitySelection\n\nexposed Function getLastSummary\n C_TEXT($0)\n C_OBJECT($last)\n\n $last:=This.last()\n $0:=$last.firstname+" - "+$last.lastname+" is ... "+String($last.age())\n'})}),"\n",(0,a.jsx)(s.p,{children:"Pode ent\xe3o executar este pedido:"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"POST"})," ",(0,a.jsx)(s.code,{children:'127.0.0.1:8044/rest/Students/getLastSummary/$entityset/?$filter="lastname=b@"&$orderby="lastname"'})]}),"\n",(0,a.jsx)(s.h4,{id:"resultados-5",children:"Resultados"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'{\n    "result": "Wilbert - Bull is ... 21" \n}\n'})}),"\n",(0,a.jsx)(s.h3,{id:"utilizar-uma-entidade-a-ser-criada-no-servidor",children:"Utilizar uma entidade a ser criada no servidor"}),"\n",(0,a.jsxs)(s.p,{children:["A classe de Dataclass ",(0,a.jsx)(s.code,{children:"Students"})," tem a fun\xe7\xe3o ",(0,a.jsx)(s.code,{children:"pushData()"})," que recebe uma entidade que cont\xe9m dados do cliente. O m\xe9todo ",(0,a.jsx)(s.code,{children:"checkData()"})," executa alguns controlos. Se estiverem corretas, a entidade \xe9 guardada e devolvida."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"// Students Class Class extends DataClass\n\nexposed Function pushData\n var $1, $entity, $status, $0 : Object\n\n $entity:=$1\n\n $status:=checkData($entity) // $status is an object with a success boolean property\n\n $0:=$status\n\n If ($status.success)\n     $status:=$entity.save()\n     If ($status.success)\n         $0:=$entity\n     End if \n End if\n\n"})}),"\n",(0,a.jsx)(s.p,{children:"Executa-se este pedido:"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"POST"})," ",(0,a.jsx)(s.code,{children:"http://127.0.0.1:8044/rest/Students/pushData"})]}),"\n",(0,a.jsx)(s.p,{children:"Corpo do pedido:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'[{\n"__DATACLASS":"Students",\n"__ENTITY":true,\n"firstname":"Ann",\n"lastname":"Brown" \n}]\n'})}),"\n",(0,a.jsxs)(s.p,{children:["J\xe1 que n\xe3o \xe9 dada nenhuma ",(0,a.jsx)(s.code,{children:"__KEY"})," , \xe9 carregada uma nova entidade Estudantes no servidor ",(0,a.jsx)(s.strong,{children:"com os atributos recebidos do cliente"}),". Como a fun\xe7\xe3o ",(0,a.jsx)(s.code,{children:"pushData()"})," executa uma a\xe7\xe3o ",(0,a.jsx)(s.code,{children:"save()"})," , a nova entidade \xe9 criada."]}),"\n",(0,a.jsx)(s.h4,{id:"resultados-6",children:"Resultados"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'{\n    "__entityModel": "Students",\n    "__DATACLASS": "Students",\n    "__KEY": "55",\n    "__TIMESTAMP": "2020-06-16T10:54:41.805Z",\n    "__STAMP": 1,\n    "ID": 55,\n    "firstname": "Ann",\n    "lastname": "BROWN",\n    "schoolID": null,\n    "school": null\n}\n'})}),"\n",(0,a.jsx)(s.h3,{id:"utilizar-uma-entidade-a-atualizar-no-servidor",children:"Utilizar uma entidade a atualizar no servidor"}),"\n",(0,a.jsx)(s.p,{children:"O mesmo que acima, mas com um atributo __KEY"}),"\n",(0,a.jsx)(s.p,{children:"Executa-se este pedido:"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"POST:"}),(0,a.jsx)(s.code,{children:"http://127.0.0.1:8044/rest/Students/pushData"})]}),"\n",(0,a.jsx)(s.p,{children:"Corpo do pedido:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'[{\n"__DATACLASS":"Students",\n"__ENTITY":true,\n"lastname":"Brownie",\n"__KEY":55\n}]\n'})}),"\n",(0,a.jsxs)(s.p,{children:["Uma vez que ",(0,a.jsx)(s.code,{children:"__KEY"})," \xe9 fornecido, a entidade Estudantes com a chave prim\xe1ria 55 \xe9 carregada ",(0,a.jsx)(s.strong,{children:"com o valor do sobrenome recebido do cliente"}),". Como a fun\xe7\xe3o executa uma a\xe7\xe3o ",(0,a.jsx)(s.code,{children:"save()"})," , a entidade \xe9 atualizada."]}),"\n",(0,a.jsx)(s.h4,{id:"resultados-7",children:"Resultados"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'{\n    "__entityModel": "Students",\n    "__DATACLASS": "Students",\n    "__KEY": "55",\n    "__TIMESTAMP": "2020-06-16T11:10:21.679Z",\n    "__STAMP": 3,\n    "ID": 55,\n    "firstname": "Ann",\n    "lastname": "BROWNIE",\n    "schoolID": null,\n    "school": null \n}\n'})}),"\n",(0,a.jsx)(s.h3,{id:"cria\xe7\xe3o-de-uma-entidade-com-uma-entidade-relacionada",children:"Cria\xe7\xe3o de uma entidade com uma entidade relacionada"}),"\n",(0,a.jsx)(s.p,{children:"Neste exemplo, criamos uma nova entidade Estudantes com a entidade Escolas com a chave prim\xe1ria 2."}),"\n",(0,a.jsx)(s.p,{children:"Executa-se este pedido:"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"POST:"}),(0,a.jsx)(s.code,{children:"http://127.0.0.1:8044/rest/Students/pushData"})]}),"\n",(0,a.jsx)(s.p,{children:"Corpo do pedido:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'[{\n"__DATACLASS":"Students",\n"__ENTITY":true,\n"firstname":"John",\n"lastname":"Smith",\n"school":{"__KEY":2}\n}]\n'})}),"\n",(0,a.jsx)(s.h4,{id:"resultados-8",children:"Resultados"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'{\n    "__entityModel": "Students",\n    "__DATACLASS": "Students",\n    "__KEY": "56",\n    "__TIMESTAMP": "2020-06-16T11:16:47.601Z",\n    "__STAMP": 1,\n    "ID": 56,\n    "firstname": "John",\n    "lastname": "SMITH",\n    "schoolID": 2,\n       "school": {\n        "__deferred": {\n            "uri": "/rest/Schools(2)",\n            "__KEY": "2" \n        }\n    }\n}\n'})}),"\n",(0,a.jsx)(s.h3,{id:"atualiza\xe7\xe3o-de-uma-entidade-com-uma-entidade-relacionada",children:"Atualiza\xe7\xe3o de uma entidade com uma entidade relacionada"}),"\n",(0,a.jsxs)(s.p,{children:["Neste exemplo, associamos uma escola existente a uma entidade Students. A classe ",(0,a.jsx)(s.code,{children:"StudentEntity"})," tem um API:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"// StudentsEntity class Class extends Entity\n\nexposed Function putToSchool()\n var $1, $school , $0, $status : Object\n\n  //$1 is a Schools entity\n $school:=$1\n  //Associar a entidade escola relacionada \xe0 entidade Students atual\n This.school:=$school\n\n $status:=This.save()\n\n $0:=$status\n"})}),"\n",(0,a.jsxs)(s.p,{children:["Voc\xea executa esta solicita\xe7\xe3o, chamada em uma entidade Students: ",(0,a.jsx)(s.strong,{children:"POST"})," ",(0,a.jsx)(s.code,{children:"http://127.0.0.1:8044/rest/Students(1)/putToSchool"})," Corpo da solicita\xe7\xe3o:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'[{\n"__DATACLASS":"Schools",\n"__ENTITY":true,\n"__KEY":2\n}]\n'})}),"\n",(0,a.jsx)(s.h4,{id:"resultados-9",children:"Resultados"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'{\n    "result": {\n        "success": true\n    }\n}\n'})}),"\n",(0,a.jsx)(s.h3,{id:"receber-uma-sele\xe7\xe3o-de-entidade-como-par\xe2metro",children:"Receber uma sele\xe7\xe3o de entidade como par\xe2metro"}),"\n",(0,a.jsxs)(s.p,{children:["Na classe ",(0,a.jsx)(s.code,{children:"Students"})," Dataclass, a fun\xe7\xe3o ",(0,a.jsx)(s.code,{children:"setFinalExam()"})," atualiza uma sele\xe7\xe3o de entidade recebida ($1). Na realidade, atualiza o atributo ",(0,a.jsx)(s.em,{children:"finalExam"})," com o valor recebido ($2). Devolve as chaves prim\xe1rias das entidades atualizadas."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"// Students class Class extends DataClass\n\nexposed Function setFinalExam()\n\n    var $1, $es, $student, $status : Object\n    var $2, $examResult : Text\n\n    var $keys, $0 : Collection\n\n      //Entity selection\n    $es:=$1\n\n    $examResult:=$2\n\n    $keys:=New collection()\n\n      //Loop on the entity selection\n    For each ($student;$es)\n        $student.finalExam:=$examResult\n        $status:=$student.save()\n        If ($status.success)\n            $keys.push($student.ID)\n        End if \n    End for each \n\n    $0:=$keys\n"})}),"\n",(0,a.jsx)(s.p,{children:"Um conjunto de entidades \xe9 criado primeiro com este pedido:"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.code,{children:'http://127.0.0.1:8044/rest/Students/?$filter="ID<3"&$method=entityset'})}),"\n",(0,a.jsx)(s.p,{children:"Em seguida, pode executar este pedido:"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"POST"})," ",(0,a.jsx)(s.code,{children:"http://127.0.0.1:8044/rest/Students/setFinalExam"})]}),"\n",(0,a.jsx)(s.p,{children:"Corpo do pedido:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'[\n{\n"__ENTITIES":true,\n"__DATASET":"9B9C053A111E4A288E9C1E48965FE671" \n},\n"Passed" \n]\n\n'})}),"\n",(0,a.jsx)(s.h4,{id:"resultados-10",children:"Resultados"}),"\n",(0,a.jsx)(s.p,{children:"As entidades com chaves prim\xe1rias 1 e 2 foram atualizadas."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'{\n    "result": [\n        1,\n        2\n    ]\n}\n'})}),"\n",(0,a.jsx)(s.h3,{id:"utilizar-uma-sele\xe7\xe3o-de-entidade-actualizada-no-cliente",children:"Utilizar uma sele\xe7\xe3o de entidade actualizada no cliente"}),"\n",(0,a.jsxs)(s.p,{children:["Utilizando a fun\xe7\xe3o ",(0,a.jsx)(s.code,{children:"getAgeAverage()"})," ",(0,a.jsx)(s.a,{href:"#using-an-entityselection-class-function-and-an-entityset",children:"definida acima"}),"."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:'var $remoteDS, $newStudent, $students : Object\nvar $ageAverage : Integer\n\n$remoteDS:=Open datastore(New object("hostname";"127.0.0.1:8044");"students")\n\n// $newStudent is a student entity to procees\n$newStudent:=...\n$students:=$remoteDS. Students.query("school.name = :1";"Math school")\n// We add an entity to the $students entity selection on the client\n$students.add($newStudent) \n\n// We call a function on the StudentsSelection class returning the age average of the students in the entity selection\n// The function is executed on the server on the updated $students entity selection which included the student added from the client\n$ageAverage:=$students.getAgeAverage()\n'})})]})}function u(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},685666:function(e,s,n){n.d(s,{Z:function(){return d}});let d=n.p+"assets/images/ordastructure-64d64d76ce9764a2365629e381bde282.png"},250065:function(e,s,n){n.d(s,{Z:function(){return r},a:function(){return i}});var d=n(667294);let a={},t=d.createContext(a);function i(e){let s=d.useContext(t);return d.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),d.createElement(t.Provider,{value:s},e.children)}}}]);