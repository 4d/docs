/*! For license information please see fa346c5d.ec885974.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43915],{919182:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>l});var a=s(474848),d=s(28453);const t={id:"classFunctions",title:"Chamada de fun\xe7\xf5es de classe ORDA"},i=void 0,r={id:"REST/classFunctions",title:"Chamada de fun\xe7\xf5es de classe ORDA",description:"Puede llamar a funciones de clase de modelos de datos definidas para el modelo de datos ORDA a trav\xe9s de sus peticiones REST, para poder beneficiarse de la API expuesta de la aplicaci\xf3n 4D objetivo.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/REST/ClassFunctions.md",sourceDirName:"REST",slug:"/REST/classFunctions",permalink:"/docs/pt/REST/classFunctions",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FClassFunctions.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"classFunctions",title:"Chamada de fun\xe7\xf5es de classe ORDA"},sidebar:"docs",previous:{title:"Manipula\xe7\xe3o de dados",permalink:"/docs/pt/REST/manData"},next:{title:"Sobre peti\xe7\xf5es REST",permalink:"/docs/pt/REST/REST_requests"}},o={},l=[{value:"Chamadas fun\xe7\xf5es",id:"Chamadas-fun\xe7\xf5es",level:2},{value:"Par\xe2metros",id:"Par\xe2metros",level:2},{value:"Par\xe2metro de valor escalar",id:"Par\xe2metro-de-valor-escalar",level:3},{value:"Par\xe2metro da entidade",id:"Par\xe2metro-da-entidade",level:3},{value:"Par\xe2metro de entidade relacionada",id:"Par\xe2metro-de-entidade-relacionada",level:4},{value:"Par\xe2metro de sele\xe7\xe3o da entidade",id:"Par\xe2metro-de-sele\xe7\xe3o-da-entidade",level:3},{value:"Exemplos de peti\xe7\xf5es",id:"Exemplos-de-peti\xe7\xf5es",level:2},{value:"Utilizar uma fun\xe7\xe3o de classe do datastore",id:"Utilizar-uma-fun\xe7\xe3o-de-classe-do-datastore",level:3},{value:"Resultados",id:"Resultados",level:4},{value:"Utiliza\xe7\xe3o de uma fun\xe7\xe3o de classe de dataclass",id:"Utiliza\xe7\xe3o-de-uma-fun\xe7\xe3o-de-classe-de-dataclass",level:3},{value:"Resultados",id:"Resultados-1",level:4},{value:"Utiliza\xe7\xe3o de uma fun\xe7\xe3o de classe de uma entidade",id:"Utiliza\xe7\xe3o-de-uma-fun\xe7\xe3o-de-classe-de-uma-entidade",level:3},{value:"Resultados",id:"Resultados-2",level:4},{value:"Usar uma fun\xe7\xe3o de classe de uma sele\xe7\xe3o de entidade",id:"Usar-uma-fun\xe7\xe3o-de-classe-de-uma-sele\xe7\xe3o-de-entidade",level:3},{value:"Resultados",id:"Resultados-3",level:4},{value:"Usando uma fun\xe7\xe3o de classe entitySelection e um entitySet",id:"Usando-uma-fun\xe7\xe3o-de-classe-entitySelection-e-um-entitySet",level:3},{value:"Resultados",id:"Resultados-4",level:4},{value:"Usando uma fun\xe7\xe3o de classe de sele\xe7\xe3o de entidades e um orderBy",id:"Usando-uma-fun\xe7\xe3o-de-classe-de-sele\xe7\xe3o-de-entidades-e-um-orderBy",level:3},{value:"Resultados",id:"Resultados-5",level:4},{value:"Utilizar uma entidade a ser criada no servidor",id:"Utilizar-uma-entidade-a-ser-criada-no-servidor",level:3},{value:"Resultados",id:"Resultados-6",level:4},{value:"Utilizar uma entidade a atualizar no servidor",id:"Utilizar-uma-entidade-a-atualizar-no-servidor",level:3},{value:"Resultados",id:"Resultados-7",level:4},{value:"Cria\xe7\xe3o de uma entidade com uma entidade relacionada",id:"Cria\xe7\xe3o-de-uma-entidade-com-uma-entidade-relacionada",level:3},{value:"Resultados",id:"Resultados-8",level:4},{value:"Atualiza\xe7\xe3o de uma entidade com uma entidade relacionada",id:"Atualiza\xe7\xe3o-de-uma-entidade-com-uma-entidade-relacionada",level:3},{value:"Resultados",id:"Resultados-9",level:4},{value:"Receber uma sele\xe7\xe3o de entidade como par\xe2metro",id:"Receber-uma-sele\xe7\xe3o-de-entidade-como-par\xe2metro",level:3},{value:"Resultados",id:"Resultados-10",level:4},{value:"Utilizar uma sele\xe7\xe3o de entidade actualizada no cliente",id:"Utilizar-uma-sele\xe7\xe3o-de-entidade-actualizada-no-cliente",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Puede llamar a ",(0,a.jsx)(n.a,{href:"/docs/pt/ORDA/ordaClasses",children:"funciones de clase de modelos de datos"})," definidas para el modelo de datos ORDA a trav\xe9s de sus peticiones REST, para poder beneficiarse de la API expuesta de la aplicaci\xf3n 4D objetivo."]}),"\n",(0,a.jsxs)(n.p,{children:["As fun\xe7\xf5es s\xe3o simplesmente chamadas em pedidos POST na interface ORDA apropriada, sem (). Por ejemplo, si ha definido una funci\xf3n ",(0,a.jsx)(n.code,{children:"getCity()"})," en la dataclass City, podr\xeda llamarla utilizando la siguiente petici\xf3n:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"/rest/City/getCity"})}),"\n",(0,a.jsxs)(n.p,{children:["con los datos en el cuerpo de la petici\xf3n POST: ",(0,a.jsx)(n.code,{children:'["Aguada"]'})]}),"\n",(0,a.jsx)(n.p,{children:"Na linguagem 4D, esta chamada \xe9 equivalente a:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'$city:=ds. City.getCity("Aguada")\n'})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["S\xf3lo las funciones con la palabra clave ",(0,a.jsx)(n.code,{children:"exposed"})," pueden ser llamadas directamente desde las peticiones REST. Ver la secci\xf3n ",(0,a.jsx)(n.a,{href:"/docs/pt/ORDA/ordaClasses#exposed-vs-non-exposed-functions",children:"Funciones expuestas vs. no expuestas"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"Chamadas-fun\xe7\xf5es",children:"Chamadas fun\xe7\xf5es"}),"\n",(0,a.jsxs)(n.p,{children:["Las funciones deben llamarse siempre utilizando peticiones ",(0,a.jsx)(n.strong,{children:"POST"})," (una petici\xf3n GET recibir\xe1 un error)."]}),"\n",(0,a.jsx)(n.p,{children:"As fun\xe7\xf5es s\xe3o chamadas no objeto correspondente no datastore do servidor."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Fun\xe7\xe3o de classe"}),(0,a.jsx)(n.th,{children:"Sintaxe"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"/docs/pt/ORDA/ordaClasses#datastore-class",children:"datastore class"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"/rest/$catalog/DataStoreClassFunction"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"/docs/pt/ORDA/ordaClasses#dataclass-class",children:"dataclass class"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"/rest/\\{dataClass\\}/DataClassClassFunction"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"/docs/pt/ORDA/ordaClasses#entityselection-class",children:"entitySelection class"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"/rest/\\{dataClass\\}/EntitySelectionClassFunction"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"/rest/\\{dataClass\\}/EntitySelectionClassFunction/$entityset/entitySetNumber"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"/rest/\\{dataClass\\}/EntitySelectionClassFunction/$filter"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"/rest/\\{dataClass\\}/EntitySelectionClassFunction/$orderby"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"/docs/pt/ORDA/ordaClasses#entity-class",children:"entity class"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"/rest/\\{dataClass\\}(key)/EntityClassFunction/"})})]})]})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"/rest/\\{dataClass\\}/Function"})," can be used to call either a dataclass or an entity selection function (",(0,a.jsx)(n.code,{children:"/rest/\\{dataClass\\}"})," returns all entities of the DataClass as an entity selection).",(0,a.jsx)(n.br,{}),"\nA fun\xe7\xe3o \xe9 pesquisada primeiro na classe de sele\xe7\xe3o de entidades. Se n\xe3o for encontrado, \xe9 procurado na dataclass. Por outras palavras, se uma fun\xe7\xe3o com o mesmo nome for definida tanto na classe DataClass como na classe EntitySelection, a fun\xe7\xe3o da classe de dataClass nunca ser\xe1 executada."]}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["All 4D code called from REST requests ",(0,a.jsx)(n.strong,{children:"must be thread-safe"})," if the project runs in compiled mode, because the REST Server always uses preemptive processes in this case (the ",(0,a.jsxs)(n.a,{href:"/docs/pt/WebServer/preemptiveWeb#enabling-the-preemptive-mode-for-the-web-server",children:[(0,a.jsx)(n.em,{children:"Use preemptive process"})," setting value"]})," is ignored by the REST Server)."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"Par\xe2metros",children:"Par\xe2metros"}),"\n",(0,a.jsxs)(n.p,{children:["\xc9 poss\xedvel enviar par\xe2metros para fun\xe7\xf5es definidas em classes usu\xe1rios ORDA. Del lado del servidor, ser\xe1n recibidos en los ",(0,a.jsx)(n.a,{href:"/docs/pt/Concepts/parameters#declaring-parameters",children:"par\xe1metros declarados"})," de las funciones clase."]}),"\n",(0,a.jsx)(n.p,{children:"As regras abaixo s\xe3o v\xe1lidas:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Los par\xe1metros deben pasarse en el ",(0,a.jsx)(n.strong,{children:"cuerpo de la petici\xf3n POST"})]}),"\n",(0,a.jsx)(n.li,{children:"Os par\xe2metros devem ser inclu\xeddos numa cole\xe7\xe3o (formato JSON)"}),"\n",(0,a.jsx)(n.li,{children:"Todos os tipos de dados escalares suportados nas cole\xe7\xf5es JSON podem ser passados como par\xe2metros."}),"\n",(0,a.jsx)(n.li,{children:"A entidade e a sele\xe7\xe3o de entidades podem ser passadas como par\xe2metros. O objeto JSON deve conter atributos espec\xedficos utilizados pelo servidor REST para atribuir dados aos objectos ORDA correspondentes: __DATACLASS, __ENTITY, __ENTITIES, __DATASET."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)(n.a,{href:"#using-an-entity-to-be-created-on-the-server",children:"this example"})," and ",(0,a.jsx)(n.a,{href:"#receiving-an-entity-selection-as-parameter",children:"this example"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"Par\xe2metro-de-valor-escalar",children:"Par\xe2metro de valor escalar"}),"\n",(0,a.jsxs)(n.p,{children:["Os par\xe2metros devem ser simplesmente inclu\xeddos numa cole\xe7\xe3o definida no corpo. For example, with a  dataclass function ",(0,a.jsx)(n.code,{children:"getCities()"})," receiving text parameters: ",(0,a.jsx)(n.code,{children:"/rest/City/getCities"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Par\xe1metros en el cuerpo:"}),' ["Aguada","Paris"]']}),"\n",(0,a.jsx)(n.p,{children:'Todos os tipos de dados JSON s\xe3o suportados nos par\xe2metros, incluindo os ponteiros JSON. As datas podem ser transmitidas como cadeias de caracteres no formato de data ISO 8601 (por exemplo, "2020-08-22T22:00:000Z").'}),"\n",(0,a.jsx)(n.h3,{id:"Par\xe2metro-da-entidade",children:"Par\xe2metro da entidade"}),"\n",(0,a.jsxs)(n.p,{children:["Las entidades pasadas en los par\xe1metros son referenciadas en el servidor a trav\xe9s de su llave (",(0,a.jsx)(n.em,{children:"es decir,"})," propiedad __KEY). Se o par\xe2metro chave for omitido num pedido, \xe9 carregada uma nova entidade na mem\xf3ria do servidor.\nTamb\xe9m \xe9 poss\xedvel transmitir valores para quaisquer atributos da entidade. Estes valores ser\xe3o automaticamente utilizados para a entidade tratada no servidor."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Se o pedido enviar valores de atributos modificados para uma entidade existente no servidor, a fun\xe7\xe3o de modelo de dados ORDA chamada ser\xe1 automaticamente executada no servidor com valores modificados. Esta carater\xedstica permite-lhe, por exemplo, verificar o resultado de uma opera\xe7\xe3o numa entidade, depois de aplicar todas as regras de neg\xf3cio, a partir da aplica\xe7\xe3o cliente. O usu\xe1rio pode ent\xe3o decidir guardar ou n\xe3o a entidade no servidor."}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Propriedades"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Atributos da entidade"}),(0,a.jsx)(n.td,{children:"misto"}),(0,a.jsx)(n.td,{children:"Opcional - Valores a modificar"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__DATACLASS"}),(0,a.jsx)(n.td,{children:"String"}),(0,a.jsx)(n.td,{children:"Obrigat\xf3rio - Indica a Dataclass da entidade"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__ENTITY"}),(0,a.jsx)(n.td,{children:"Par\xe2metros"}),(0,a.jsx)(n.td,{children:"Obrigat\xf3rio - Verdadeiro para indicar ao servidor que o par\xe2metro \xe9 uma entidade"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__KEY"}),(0,a.jsx)(n.td,{children:"misto (do mesmo tipo que a chave prim\xe1ria)"}),(0,a.jsx)(n.td,{children:"Facultativo - Chave prim\xe1ria da entidade"})]})]})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Se __KEY n\xe3o for fornecido, uma nova entidade \xe9 criada no servidor com os atributos fornecidos."}),"\n",(0,a.jsx)(n.li,{children:"Se __KEY for fornecido, a entidade correspondente a __KEY \xe9 carregada no servidor com os atributos fornecidos"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Ver los ejemplos de ",(0,a.jsx)(n.a,{href:"#creating-an-entity",children:"creaci\xf3n"})," o de ",(0,a.jsx)(n.a,{href:"#updating-an-entity",children:"actualizaci\xf3n"})," de las entidades."]}),"\n",(0,a.jsx)(n.h4,{id:"Par\xe2metro-de-entidade-relacionada",children:"Par\xe2metro de entidade relacionada"}),"\n",(0,a.jsxs)(n.p,{children:["Las mismas propiedades que para un ",(0,a.jsx)(n.a,{href:"#entity-parameter",children:"par\xe1metro de entidad"}),". Al\xe9m disso, a entidade relacionada deve existir e ser referenciada por __KEY que cont\xe9m a sua chave prim\xe1ria."]}),"\n",(0,a.jsxs)(n.p,{children:["Ver los ejemplos para ",(0,a.jsx)(n.a,{href:"#creating-an-entity-with-a-related-entity",children:"creaci\xf3n"})," o ",(0,a.jsx)(n.a,{href:"#updating-an-entity-with-a-related-entity",children:"actualizaci\xf3n"})," de las entidades con las entidades relacionadas."]}),"\n",(0,a.jsx)(n.h3,{id:"Par\xe2metro-de-sele\xe7\xe3o-da-entidade",children:"Par\xe2metro de sele\xe7\xe3o da entidade"}),"\n",(0,a.jsxs)(n.p,{children:["La selecci\xf3n de entidades debe haber sido definida previamente utilizando ",(0,a.jsx)(n.a,{href:"/docs/pt/REST/method#methodentityset",children:"$method=entityset"}),"."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Se o pedido enviar uma sele\xe7\xe3o de entidade modificada para o servidor, a fun\xe7\xe3o de modelo de dados ORDA chamada ser\xe1 automaticamente executada no servidor com a sele\xe7\xe3o de entidade modificada."}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Propriedades"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Atributos da entidade"}),(0,a.jsx)(n.td,{children:"misto"}),(0,a.jsx)(n.td,{children:"Opcional - Valores a modificar"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__DATASET"}),(0,a.jsx)(n.td,{children:"String"}),(0,a.jsx)(n.td,{children:"Obrigat\xf3rio - entitySetID (UUID) da sele\xe7\xe3o de entidades"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"__ENTITIES"}),(0,a.jsx)(n.td,{children:"Par\xe2metros"}),(0,a.jsx)(n.td,{children:"Obrigat\xf3rio - Verdadeiro para indicar ao servidor que o par\xe2metro \xe9 uma sele\xe7\xe3o de entidade"})]})]})]}),"\n",(0,a.jsxs)(n.p,{children:["Ver ejemplo para ",(0,a.jsx)(n.a,{href:"#receiving-an-entity-selection-as-parameter",children:"recibir una selecci\xf3n de entidades"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"Exemplos-de-peti\xe7\xf5es",children:"Exemplos de peti\xe7\xf5es"}),"\n",(0,a.jsx)(n.p,{children:"Esta base de dados \xe9 exposta como um datastore remoto no localhost (porta 8111):"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"alt-text",src:s(742113).A+"",width:"882",height:"599"})}),"\n",(0,a.jsx)(n.h3,{id:"Utilizar-uma-fun\xe7\xe3o-de-classe-do-datastore",children:"Utilizar uma fun\xe7\xe3o de classe do datastore"}),"\n",(0,a.jsxs)(n.p,{children:["La clase de ",(0,a.jsx)(n.code,{children:"DataStore"})," US_Cities ofrece una API:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'// DataStore class\n\nClass extends DataStoreImplementation\n\nexposed Function getName() : Text\n    return "US cities and zip codes manager"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Pode ent\xe3o executar este pedido:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"POST"})," ",(0,a.jsx)(n.code,{children:"127.0.0.1:8111/rest/$catalog/getName"})]}),"\n",(0,a.jsx)(n.h4,{id:"Resultados",children:"Resultados"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n"result": "US cities and zip codes manager"\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"Utiliza\xe7\xe3o-de-uma-fun\xe7\xe3o-de-classe-de-dataclass",children:"Utiliza\xe7\xe3o de uma fun\xe7\xe3o de classe de dataclass"}),"\n",(0,a.jsxs)(n.p,{children:["La clase de Dataclass ",(0,a.jsx)(n.code,{children:"City"})," ofrece una PI que devuelve una entidad de ciudad a partir del nombre pasado en par\xe1metro:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'// City class\n\nClass extends DataClass\n\nexposed Function getCity($city : Text ) : cs.CityEntity\n\treturn This.query("name = :1";$city).first()\n'})}),"\n",(0,a.jsx)(n.p,{children:"Pode ent\xe3o executar este pedido:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"POST"})," ",(0,a.jsx)(n.code,{children:"127.0.0.1:8111/rest/City/getCity"})]}),"\n",(0,a.jsx)(n.p,{children:'Corpo do pedido: ["Aguada"]'}),"\n",(0,a.jsx)(n.h4,{id:"Resultados-1",children:"Resultados"}),"\n",(0,a.jsx)(n.p,{children:"Le r\xe9sultat est une entit\xe9:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    "__entityModel": "City",\n    "__DATACLASS": "City",\n    "__KEY": "1",\n    "__TIMESTAMP": "2020-03-09T08:03:19.923Z",\n    "__STAMP": 1,\n    "ID": 1,\n    "name": "Aguada",\n    "countyFIPS": 72003,\n    "county": {\n        "__deferred": {\n            "uri": "/rest/County(72003)",\n            "__KEY": "72003"\n        }\n    },\n    "zips": {\n        "__deferred": {\n            "uri": "/rest/City(1)/zips?$expand=zips"\n        }\n    }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"Utiliza\xe7\xe3o-de-uma-fun\xe7\xe3o-de-classe-de-uma-entidade",children:"Utiliza\xe7\xe3o de uma fun\xe7\xe3o de classe de uma entidade"}),"\n",(0,a.jsxs)(n.p,{children:["La clase de entidad ",(0,a.jsx)(n.code,{children:"CityEntity"})," ofrece una API:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'// CityEntity class\n\nClass extends Entity\n\nexposed Function getPopulation()\n    return This.zips.sum("population")\n'})}),"\n",(0,a.jsx)(n.p,{children:"Pode ent\xe3o executar este pedido:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"POST"})," ",(0,a.jsx)(n.code,{children:"127.0.0.1:8111/rest/City(2)/getPopulation"})]}),"\n",(0,a.jsx)(n.h4,{id:"Resultados-2",children:"Resultados"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    "result": 48814\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"Usar-uma-fun\xe7\xe3o-de-classe-de-uma-sele\xe7\xe3o-de-entidade",children:"Usar uma fun\xe7\xe3o de classe de uma sele\xe7\xe3o de entidade"}),"\n",(0,a.jsxs)(n.p,{children:["La clase de selecci\xf3n de entidad ",(0,a.jsx)(n.code,{children:"CityEntity"})," ofrece una API:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'// CitySelection class\n\nClass extends EntitySelection\n\nexposed Function getPopulation()\n    return This.zips.sum("population")\n'})}),"\n",(0,a.jsx)(n.p,{children:"Pode ent\xe3o executar este pedido:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"POST"})," ",(0,a.jsx)(n.code,{children:'127.0.0.1:8111/rest/City/getPopulation/?$filter="ID<3"'})]}),"\n",(0,a.jsx)(n.h4,{id:"Resultados-3",children:"Resultados"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    "result": 87256\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"Usando-uma-fun\xe7\xe3o-de-classe-entitySelection-e-um-entitySet",children:"Usando uma fun\xe7\xe3o de classe entitySelection e um entitySet"}),"\n",(0,a.jsxs)(n.p,{children:["La clase ",(0,a.jsx)(n.code,{children:"StudentsSelection"})," tine una funci\xf3n ",(0,a.jsx)(n.code,{children:"getAgeAverage"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"// StudentsSelection Class\n\nClass extends EntitySelection\n\nexposed Function getAgeAverage : Integer\n\tvar $sum : Integer\n\tvar $s : Object\n\n\t$sum:=0\n\tFor each ($s;This)\n\t    $sum:=$sum+$s.age()\n\tEnd for each\n\treturn $sum/This.length\n"})}),"\n",(0,a.jsx)(n.p,{children:"Uma vez criado um conjunto de entidades, \xe9 poss\xedvel executar este pedido:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"POST"})," ",(0,a.jsx)(n.code,{children:"127.0.0.1:8044/rest/Students/getAgeAverage/$entityset/17E83633FFB54ECDBF947E5C620BB532"})]}),"\n",(0,a.jsx)(n.h4,{id:"Resultados-4",children:"Resultados"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    "result": 34\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"Usando-uma-fun\xe7\xe3o-de-classe-de-sele\xe7\xe3o-de-entidades-e-um-orderBy",children:"Usando uma fun\xe7\xe3o de classe de sele\xe7\xe3o de entidades e um orderBy"}),"\n",(0,a.jsxs)(n.p,{children:["La clase ",(0,a.jsx)(n.code,{children:"StudentsSelection"})," tiene una funci\xf3n ",(0,a.jsx)(n.code,{children:"getLastSummary"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'// StudentsSelection Class\n\n\nClass extends EntitySelection\n\nexposed Function getLastSummary : Text\n\tvar $last : Object\n\n\t$last:=This.last()\n\treturn =$last.firstname+" - "+$last.lastname+" is ... "+String($last.age())\n'})}),"\n",(0,a.jsx)(n.p,{children:"Pode ent\xe3o executar este pedido:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"POST"})," ",(0,a.jsx)(n.code,{children:'127.0.0.1:8044/rest/Students/getLastSummary/$entityset/?$filter="lastname=b@"&$orderby="lastname"'})]}),"\n",(0,a.jsx)(n.h4,{id:"Resultados-5",children:"Resultados"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    "result": "Wilbert - Bull is ... 21"\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"Utilizar-uma-entidade-a-ser-criada-no-servidor",children:"Utilizar uma entidade a ser criada no servidor"}),"\n",(0,a.jsxs)(n.p,{children:["La clase de Dataclass ",(0,a.jsx)(n.code,{children:"Students"})," tiene la funci\xf3n ",(0,a.jsx)(n.code,{children:"pushData()"})," que recibe una entidad que contiene los datos del cliente. El m\xe9todo ",(0,a.jsx)(n.code,{children:"checkData()"})," efect\xfaa algunos controles. Se estiverem corretas, a entidade \xe9 guardada e devolvida."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"// Students Class\n\nClass extends DataClass\n\nexposed Function pushData($entity : Object) : Object\n\tvar $status : Object\n\n\t$status:=checkData($entity) // $status is an object with a success boolean property\n\n\tIf ($status.success)\n\t    $status:=$entity.save()\n \t   If ($status.success)\n \t       return $entity\n  \t  End if\n\tEnd if\n\n\treturn $status\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"Executa-se este pedido:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"POST"})," ",(0,a.jsx)(n.code,{children:"http://127.0.0.1:8044/rest/Students/pushData"})]}),"\n",(0,a.jsx)(n.p,{children:"Corpo do pedido:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'[{\n"__DATACLASS":"Students",\n"__ENTITY":true,\n"firstname":"Ann",\n"lastname":"Brown"\n}]\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Como ninguna ",(0,a.jsx)(n.code,{children:"__KEY"})," es dada, una nueva entidad Students est\xe1 cargada en el servidor ",(0,a.jsx)(n.strong,{children:"con los atributos del cliente"}),". Como la funci\xf3n ",(0,a.jsx)(n.code,{children:"pushData()"})," ejecuta una acci\xf3n ",(0,a.jsx)(n.code,{children:"save()"}),", la nueva entidad es creada."]}),"\n",(0,a.jsx)(n.h4,{id:"Resultados-6",children:"Resultados"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    "__entityModel": "Students",\n    "__DATACLASS": "Students",\n    "__KEY": "55",\n    "__TIMESTAMP": "2020-06-16T10:54:41.805Z",\n    "__STAMP": 1,\n    "ID": 55,\n    "firstname": "Ann",\n    "lastname": "BROWN",\n    "schoolID": null,\n    "school": null\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"Utilizar-uma-entidade-a-atualizar-no-servidor",children:"Utilizar uma entidade a atualizar no servidor"}),"\n",(0,a.jsx)(n.p,{children:"O mesmo que acima, mas com um atributo __KEY"}),"\n",(0,a.jsx)(n.p,{children:"Executa-se este pedido:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"POST:"}),(0,a.jsx)(n.code,{children:"http://127.0.0.1:8044/rest/Students/pushData"})]}),"\n",(0,a.jsx)(n.p,{children:"Corpo do pedido:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'[{\n"__DATACLASS":"Students",\n"__ENTITY":true,\n"lastname":"Brownie",\n"__KEY":55\n}]\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Como ",(0,a.jsx)(n.code,{children:"__KEY"})," es dada, la entidad Students est\xe1 cargada con llave primaria 55 ",(0,a.jsx)(n.strong,{children:"con el valor lastname recibido por el cliente"}),". Como la funci\xf3n ejecuta una acci\xf3n ",(0,a.jsx)(n.code,{children:"save()"}),", la nueva entidad es actualizada."]}),"\n",(0,a.jsx)(n.h4,{id:"Resultados-7",children:"Resultados"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    "__entityModel": "Students",\n    "__DATACLASS": "Students",\n    "__KEY": "55",\n    "__TIMESTAMP": "2020-06-16T11:10:21.679Z",\n    "__STAMP": 3,\n    "ID": 55,\n    "firstname": "Ann",\n    "lastname": "BROWNIE",\n    "schoolID": null,\n    "school": null\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"Cria\xe7\xe3o-de-uma-entidade-com-uma-entidade-relacionada",children:"Cria\xe7\xe3o de uma entidade com uma entidade relacionada"}),"\n",(0,a.jsx)(n.p,{children:"Neste exemplo, criamos uma nova entidade Estudantes com a entidade Escolas com a chave prim\xe1ria 2."}),"\n",(0,a.jsx)(n.p,{children:"Executa-se este pedido:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"POST:"}),(0,a.jsx)(n.code,{children:"http://127.0.0.1:8044/rest/Students/pushData"})]}),"\n",(0,a.jsx)(n.p,{children:"Corpo do pedido:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'[{\n"__DATACLASS":"Students",\n"__ENTITY":true,\n"firstname":"John",\n"lastname":"Smith",\n"school":{"__KEY":2}\n}]\n'})}),"\n",(0,a.jsx)(n.h4,{id:"Resultados-8",children:"Resultados"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    "__entityModel": "Students",\n    "__DATACLASS": "Students",\n    "__KEY": "56",\n    "__TIMESTAMP": "2020-06-16T11:16:47.601Z",\n    "__STAMP": 1,\n    "ID": 56,\n    "firstname": "John",\n    "lastname": "SMITH",\n    "schoolID": 2,\n       "school": {\n        "__deferred": {\n            "uri": "/rest/Schools(2)",\n            "__KEY": "2"\n        }\n    }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"Atualiza\xe7\xe3o-de-uma-entidade-com-uma-entidade-relacionada",children:"Atualiza\xe7\xe3o de uma entidade com uma entidade relacionada"}),"\n",(0,a.jsxs)(n.p,{children:["Neste exemplo, associamos uma escola existente a uma entidade Students. La clase ",(0,a.jsx)(n.code,{children:"StudentsEntity"})," tiene una API:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"// StudentsEntity class\n\nClass extends Entity\n\nexposed Function putToSchool()\n\tvar $1, $school , $0, $status : Object\n\n\t\t//$1 is a Schools entity\n\t$school:=$1\n\t\t//Associate the related entity school to the current Students entity\n\tThis.school:=$school\n\n\t$status:=This.save()\n\n\t$0:=$status\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You run this request, called on a Students entity : ",(0,a.jsx)(n.strong,{children:"POST"})," ",(0,a.jsx)(n.code,{children:"http://127.0.0.1:8044/rest/Students(1)/putToSchool"})," Body of the request:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'[{\n"__DATACLASS":"Schools",\n"__ENTITY":true,\n"__KEY":2\n}]\n'})}),"\n",(0,a.jsx)(n.h4,{id:"Resultados-9",children:"Resultados"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    "result": {\n        "success": true\n    }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"Receber-uma-sele\xe7\xe3o-de-entidade-como-par\xe2metro",children:"Receber uma sele\xe7\xe3o de entidade como par\xe2metro"}),"\n",(0,a.jsxs)(n.p,{children:["En la clase de Dataclass ",(0,a.jsx)(n.code,{children:"Students"}),", la funci\xf3n ",(0,a.jsx)(n.code,{children:"setFinalExam()"})," actualiza una selecci\xf3n de entidad recibida ($1). En realidad, actualiza el atributo ",(0,a.jsx)(n.em,{children:"finalExam"})," con el valor recibido ($2). Devolve as chaves prim\xe1rias das entidades atualizadas."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"// Students class\n\nClass extends DataClass\n\nexposed Function setFinalExam()\n\n    var $1, $es, $student, $status : Object\n    var $2, $examResult : Text\n\n    var $keys, $0 : Collection\n\n      //Entity selection\n    $es:=$1\n\n    $examResult:=$2\n\n    $keys:=New collection()\n\n      //Loop on the entity selection\n    For each ($student;$es)\n        $student.finalExam:=$examResult\n        $status:=$student.save()\n        If ($status.success)\n            $keys.push($student.ID)\n        End if\n    End for each\n\n    $0:=$keys\n"})}),"\n",(0,a.jsx)(n.p,{children:"Um conjunto de entidades \xe9 criado primeiro com este pedido:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:'http://127.0.0.1:8044/rest/Students/?$filter="ID<3"&$method=entityset'})}),"\n",(0,a.jsx)(n.p,{children:"Em seguida, pode executar este pedido:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"POST"})," ",(0,a.jsx)(n.code,{children:"http://127.0.0.1:8044/rest/Students/setFinalExam"})]}),"\n",(0,a.jsx)(n.p,{children:"Corpo do pedido:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'[\n{\n"__ENTITIES":true,\n"__DATASET":"9B9C053A111E4A288E9C1E48965FE671"\n},\n"Passed"\n]\n\n'})}),"\n",(0,a.jsx)(n.h4,{id:"Resultados-10",children:"Resultados"}),"\n",(0,a.jsx)(n.p,{children:"As entidades com chaves prim\xe1rias 1 e 2 foram atualizadas."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    "result": [\n        1,\n        2\n    ]\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"Utilizar-uma-sele\xe7\xe3o-de-entidade-actualizada-no-cliente",children:"Utilizar uma sele\xe7\xe3o de entidade actualizada no cliente"}),"\n",(0,a.jsxs)(n.p,{children:["Utilizando la funci\xf3n ",(0,a.jsx)(n.code,{children:"getAgeAverage()"})," ",(0,a.jsx)(n.a,{href:"#using-an-entityselection-class-function-and-an-entityset",children:"definida anteriormente"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'var $remoteDS, $newStudent, $students : Object\nvar $ageAverage : Integer\n\n$remoteDS:=Open datastore(New object("hostname";"127.0.0.1:8044");"students")\n\n// $newStudent is a student entity to procees\n$newStudent:=...\n$students:=$remoteDS.Students.query("school.name = :1";"Math school")\n// We add an entity to the $students entity selection on the client\n$students.add($newStudent)\n\n// We call a function on the StudentsSelection class returning the age average of the students in the entity selection\n// The function is executed on the server on the updated $students entity selection which included the student added from the client\n$ageAverage:=$students.getAgeAverage()\n'})})]})}function u(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},221020:(e,n,s)=>{var a=s(296540),d=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,s){var a,t={},l=null,c=null;for(a in void 0!==s&&(l=""+s),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)i.call(n,a)&&!o.hasOwnProperty(a)&&(t[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===t[a]&&(t[a]=n[a]);return{$$typeof:d,type:e,key:l,ref:c,props:t,_owner:r.current}}n.Fragment=t,n.jsx=l,n.jsxs=l},474848:(e,n,s)=>{e.exports=s(221020)},742113:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/ordastructure-64d64d76ce9764a2365629e381bde282.png"},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>r});var a=s(296540);const d={},t=a.createContext(d);function i(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);