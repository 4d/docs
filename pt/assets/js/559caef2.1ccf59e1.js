"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74869"],{421155:function(e,a,s){s.r(a),s.d(a,{metadata:()=>d,contentTitle:()=>t,default:()=>m,assets:()=>i,toc:()=>l,frontMatter:()=>r});var d=JSON.parse('{"id":"REST/manData","title":"Manipula\xe7\xe3o de dados","description":"Todos os atributos, classes e m\xe9todos da datastore expostos podem ser acessados atrav\xe9s de REST. Os nomes de classes de dados, atributos e m\xe9todos s\xe3o sens\xedveis \xe0s mai\xfasculas e min\xfasculas, entretanto, os dados das pesquisas n\xe3o s\xe3o.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/REST/manData.md","sourceDirName":"REST","slug":"/REST/manData","permalink":"/docs/pt/20/REST/manData","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FmanData.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"manData","title":"Manipula\xe7\xe3o de dados"},"sidebar":"docs","previous":{"title":"Obter informa\xe7\xe3o do servidor","permalink":"/docs/pt/20/REST/genInfo"},"next":{"title":"Chamada de fun\xe7\xf5es de classe ORDA","permalink":"/docs/pt/20/REST/classFunctions"}}'),n=s("785893"),o=s("250065");let r={id:"manData",title:"Manipula\xe7\xe3o de dados"},t=void 0,i={},l=[{value:"Pesquisas de dados",id:"pesquisas-de-dados",level:2},{value:"Adicionar, modificar e apagar entidades",id:"adicionar-modificar-e-apagar-entidades",level:2},{value:"Navegando dados",id:"navegando-dados",level:2},{value:"Criar e gerenciar conjuntos de entidades",id:"criar-e-gerenciar-conjuntos-de-entidades",level:2},{value:"Calcular dados",id:"calcular-dados",level:2},{value:"Chamar as fun\xe7\xf5es de classe do modelo de dados",id:"chamar-as-fun\xe7\xf5es-de-classe-do-modelo-de-dados",level:2},{value:"Selecionar atributos a obter",id:"selecionar-atributos-a-obter",level:2},{value:"Exemplos",id:"exemplos",level:3},{value:"Exemplo com uma dataclass",id:"exemplo-com-uma-dataclass",level:4},{value:"Exemplo entidade",id:"exemplo-entidade",level:4},{value:"Exemplo de conjunto de Entidades",id:"exemplo-de-conjunto-de-entidades",level:4},{value:"Vendo um atributo de imagem",id:"vendo-um-atributo-de-imagem",level:2},{value:"Salvar um atributo BLOB ao disco",id:"salvar-um-atributo-blob-ao-disco",level:2},{value:"Recuperar apenas uma entidade",id:"recuperar-apenas-uma-entidade",level:2}];function c(e){let a={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["Todos ",(0,n.jsx)(a.a,{href:"/docs/pt/20/REST/configuration#exposing-tables-and-fields",children:"os atributos, classes"})," e m\xe9todos da datastore expostos podem ser acessados atrav\xe9s de REST. Os nomes de classes de dados, atributos e m\xe9todos s\xe3o sens\xedveis \xe0s mai\xfasculas e min\xfasculas, entretanto, os dados das pesquisas n\xe3o s\xe3o."]}),"\n",(0,n.jsx)(a.h2,{id:"pesquisas-de-dados",children:"Pesquisas de dados"}),"\n",(0,n.jsxs)(a.p,{children:["Para pesquisar diretamente aos dados, pode fazer isso usando a fun\xe7\xe3o ",(0,n.jsx)(a.a,{href:"/docs/pt/20/REST/filter",children:(0,n.jsx)(a.code,{children:"$filter"})}),'. Por exemplo, para encontrar a pessoa chamada "smith" poderia escrever:']}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:'http://127.0.0.1:8081/rest/Person/?$filter="lastName=Smith"'})}),"\n",(0,n.jsx)(a.h2,{id:"adicionar-modificar-e-apagar-entidades",children:"Adicionar, modificar e apagar entidades"}),"\n",(0,n.jsx)(a.p,{children:"Com o REST API, pode realizar todas as manipula\xe7\xf5es de dados que quiser em 4D."}),"\n",(0,n.jsxs)(a.p,{children:["Para adicionar e modificar entidades, pode chamar ",(0,n.jsx)(a.a,{href:"/docs/pt/20/REST/method#methodupdate",children:(0,n.jsx)(a.code,{children:"$method=update"})}),". Se quiser apagar uma ou mais entidades, pode usar ",(0,n.jsx)(a.a,{href:"/docs/pt/20/REST/method#methoddelete",children:(0,n.jsx)(a.code,{children:"$method=delete"})}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["Besides retrieving a single entity in a dataclass using ",(0,n.jsx)(a.a,{href:"/docs/pt/20/REST/dataClass#dataclasskey",children:"{dataClass}({key})"}),", you can also write a ",(0,n.jsx)(a.a,{href:"/docs/pt/20/REST/classFunctions#function-calls",children:"class function"})," that returns an entity selection (or a collection)."]}),"\n",(0,n.jsxs)(a.p,{children:["Antes de devolver a cole\xe7\xe3o, tamb\xe9m pode orden\xe1-la utilizando ",(0,n.jsx)(a.a,{href:"/docs/pt/20/REST/orderby",children:(0,n.jsx)(a.code,{children:"$orderby"})})," um ou v\xe1rios atributos (mesmo os atributos de rela\xe7\xe3o)."]}),"\n",(0,n.jsx)(a.h2,{id:"navegando-dados",children:"Navegando dados"}),"\n",(0,n.jsxs)(a.p,{children:["Adicione ",(0,n.jsx)(a.a,{href:"/docs/pt/20/REST/skip",children:(0,n.jsx)(a.code,{children:"$skip"})})," (para definir qual entidade a iniciar) e ",(0,n.jsx)(a.a,{href:"/docs/pt/20/REST/top_$limit",children:(0,n.jsx)(a.code,{children:"$top/$limit"})})," (para definir quantas entidades retornar) peti\xe7\xf5es REST para suas pesquisas ou sele\xe7\xf5es de entidade para navegar a cole\xe7\xe3o de entidades."]}),"\n",(0,n.jsx)(a.h2,{id:"criar-e-gerenciar-conjuntos-de-entidades",children:"Criar e gerenciar conjuntos de entidades"}),"\n",(0,n.jsxs)(a.p,{children:["Um conjunto de entidades (ou ent\xe3o ",(0,n.jsx)(a.em,{children:"sele\xe7\xf5es de entidades"}),") \xe9 uma cole\xe7\xe3o de entidades obtidas atrav\xe9s de peti\xe7\xf5es REST que \xe9 armazenada no cache de 4D Server. Usar um conjunto de entidades previne que pesquise continuamente sua aplica\xe7\xe3o pelos mesmos resultados. Acessar um conjunto de entidades \xe9 mais r\xe1pido e pode melhorar a velocidade de sua aplica\xe7\xe3o."]}),"\n",(0,n.jsxs)(a.p,{children:["Para criar um conjunto de entidades, chame ",(0,n.jsx)(a.a,{href:"/docs/pt/20/REST/method#methodentityset",children:(0,n.jsx)(a.code,{children:"$method=entityset"})})," em sua peti\xe7\xe3o REST. Como uma medida de seguran\xe7a, tamb\xe9m pode usar ",(0,n.jsx)(a.a,{href:"/docs/pt/20/REST/savedfilter",children:(0,n.jsx)(a.code,{children:"$savedfilter"})})," ou ",(0,n.jsx)(a.a,{href:"/docs/pt/20/REST/savedorderby",children:(0,n.jsx)(a.code,{children:"$savedorderby"})})," quando chamar ",(0,n.jsx)(a.a,{href:"/docs/pt/20/REST/filter",children:(0,n.jsx)(a.code,{children:"$filter"})})," ou ",(0,n.jsx)(a.a,{href:"/docs/pt/20/REST/orderby",children:(0,n.jsx)(a.code,{children:"$orderby"})})," assim se o conjunto de entidade alguma ver for removido ou der time out no servidor, pode ser facilmente recuperado com a mesma ID que antes."]}),"\n",(0,n.jsxs)(a.p,{children:["To access the entity set, you must use ",(0,n.jsx)(a.code,{children:"$entityset/\\{entitySetID\\}"}),", for example:"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:"/rest/People/$entityset/0AF4679A5C394746BFEB68D2162A19FF"})}),"\n",(0,n.jsxs)(a.p,{children:["Como padr\xe3o, um conjunto de entidades \xe9 armazenado por duas horas; entretanto pode mudar o timeout ao passar um novo valor a ",(0,n.jsx)(a.a,{href:"/docs/pt/20/REST/timeout",children:(0,n.jsx)(a.code,{children:"$timeout"})}),". O timeout \xe9 continuamente resetado ao valor definido (seja o valor padr\xe3o ou um definido por voc\xea) a cada vez que for usado."]}),"\n",(0,n.jsxs)(a.p,{children:["Se quiser remover um conjunto de entidades da cache 4D Server, pode usar ",(0,n.jsx)(a.a,{href:"/docs/pt/20/REST/method#methodrelease",children:(0,n.jsx)(a.code,{children:"$method=release"})}),"."]}),"\n",(0,n.jsx)(a.p,{children:"Se modificar qualquer dos atributos de entidade no conjunto de entidades, o valor ser\xe1 atualizado. Entretanto, se modificar um valor que era uma parte da pesquisa executada para criar o conjunto de entidades, n\xe3o ser\xe1 removido do conjunto de entidades mesmo se n\xe3o se enquadrar mais nos crit\xe9rios de pesquisa. Qualquer entidade que apagar n\xe3o ser\xe1 mais parte do conjunto de entidades."}),"\n",(0,n.jsx)(a.p,{children:"Se o conjunto de entidades n\xe3o existir mais no cache 4D Server, ser\xe1 recriada com um novo timeout padr\xe3o de 10 minutos. O conjunto de entidades ser\xe1 renovado (certas entidades podem ser incluidas e outras podem ser removidas) j\xe1 que desde a \xfaltima vez que foi criada, n\xe3o existe mais antes da recria\xe7\xe3o)."}),"\n",(0,n.jsxs)(a.p,{children:["Using ",(0,n.jsx)(a.a,{href:"/docs/pt/20/REST/entityset#entitysetentitysetidoperatorothercollection",children:(0,n.jsx)(a.code,{children:"$entityset/\\{entitySetID\\}?$logicOperator... &$otherCollection"})}),", you can combine two entity sets that you previously created. Pode ent\xe3o combinar os resultados em ambos, retornar s\xf3 o que \xe9 comum entre os dois, ou retornar o que n\xe3o \xe9 comum entre os dois."]}),"\n",(0,n.jsxs)(a.p,{children:["Uma nova sele\xe7\xe3o de entidades \xe9 retornada, entretanto tamb\xe9m pode criar um novo conjunto de entidades chamando ",(0,n.jsx)(a.a,{href:"/docs/pt/20/REST/method#methodentityset",children:(0,n.jsx)(a.code,{children:"$method=entityset"})})," no fim da peti\xe7\xe3o REST."]}),"\n",(0,n.jsx)(a.h2,{id:"calcular-dados",children:"Calcular dados"}),"\n",(0,n.jsxs)(a.p,{children:["Usando ",(0,n.jsx)(a.a,{href:"/docs/pt/20/REST/compute",children:(0,n.jsx)(a.code,{children:"$compute"})}),", pode computar ",(0,n.jsx)(a.strong,{children:"average"}),", ",(0,n.jsx)(a.strong,{children:"count"}),", ",(0,n.jsx)(a.strong,{children:"min"}),", ",(0,n.jsx)(a.strong,{children:"max"}),", ou ",(0,n.jsx)(a.strong,{children:"sum"})," para um atributo espec\xedfico em uma classe de dados. Pode tamb\xe9m computar todos os valores com a palavra chave $all."]}),"\n",(0,n.jsx)(a.p,{children:"Por exemplo, para obter o maior sal\xe1rio:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:"/rest/Employee/salary/?$compute=sum"})}),"\n",(0,n.jsx)(a.p,{children:"Para computar todos os valores e retornar um objeto JSON:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:"/rest/Employee/salary/?$compute=$all"})}),"\n",(0,n.jsx)(a.h2,{id:"chamar-as-fun\xe7\xf5es-de-classe-do-modelo-de-dados",children:"Chamar as fun\xe7\xf5es de classe do modelo de dados"}),"\n",(0,n.jsxs)(a.p,{children:["Pode chamar as ",(0,n.jsx)(a.a,{href:"/docs/pt/20/REST/classFunctions",children:"fun\xe7\xf5es da classe usu\xe1rio"})," ORDA do modelo de dados atrav\xe9s de pedidos POST, para poder beneficiar da API da aplica\xe7\xe3o direcionada. Por exemplo, se tiver definido uma fun\xe7\xe3o ",(0,n.jsx)(a.code,{children:"getCity()"})," na dataclass City, pode cham\xe1-la utilizando o seguinte pedido:"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:"/rest/City/getCity"})}),"\n",(0,n.jsxs)(a.p,{children:["com dados no corpo do pedido: ",(0,n.jsx)(a.code,{children:'["Paris"]'})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:["Pode chamar m\xe9todos de projeto 4D que s\xe3o ",(0,n.jsx)(a.a,{href:"%7BdataClass%7D.html#4d-configuration",children:"expostos como servi\xe7os REST"}),"."]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"selecionar-atributos-a-obter",children:"Selecionar atributos a obter"}),"\n",(0,n.jsxs)(a.p,{children:["Sempre pode definir que atributos a retornar na resposta REST depois de uma peti\xe7\xe3o inicial ao passar sua rota na peti\xe7\xe3o (",(0,n.jsx)(a.em,{children:"e.g."}),", ",(0,n.jsx)(a.code,{children:"Company(1)/name,revenues/"}),")"]}),"\n",(0,n.jsx)(a.p,{children:"Pode aplicar essa t\xe9cnica a:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Object"}),(0,n.jsx)(a.th,{children:"Sintaxe"}),(0,n.jsx)(a.th,{children:"Exemplo"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Dataclass"}),(0,n.jsx)(a.td,{children:"{dataClass}/{att1,att2...}"}),(0,n.jsx)(a.td,{children:"/People/firstName,lastName"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Cole\xe7\xe3o de entidades"}),(0,n.jsx)(a.td,{children:'{dataClass}/{att1,att2...}/?$filter="{filter}"'}),(0,n.jsx)(a.td,{children:"/People/firstName,lastName/?$filter=\"lastName='a@'\""})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Entidade especificada"}),(0,n.jsx)(a.td,{children:"{dataClass}({ID})/{att1,att2...}"}),(0,n.jsx)(a.td,{children:"/People(1)/firstName,lastName"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{}),(0,n.jsx)(a.td,{children:"{dataClass}:{attribute}(value)/{att1,att2...}/"}),(0,n.jsx)(a.td,{children:"/People:firstName(Larry)/firstName,lastName/"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Sele\xe7\xe3o de entidades"}),(0,n.jsx)(a.td,{children:"{dataClass}/{att1,att2...}/$entityset/{entitySetID}"}),(0,n.jsx)(a.td,{children:"/People/firstName/$entityset/528BF90F10894915A4290158B4281E61"})]})]})]}),"\n",(0,n.jsxs)(a.p,{children:["Os atributos devem ser delimitados por uma v\xedrgula, ",(0,n.jsx)(a.em,{children:"ou seja"}),", ",(0,n.jsx)(a.code,{children:"/Employee/firstName,lastName,salary"}),". Os atributos de armazenamento ou rela\xe7\xe3o podem ser passados."]}),"\n",(0,n.jsx)(a.h3,{id:"exemplos",children:"Exemplos"}),"\n",(0,n.jsx)(a.p,{children:"Aqui alguns exemplos, mostrando como especificar que atributos vai retornar dependendo da t\xe9cnica usada para recuperar entidades."}),"\n",(0,n.jsx)(a.p,{children:"Pode aplicar esse filtro das maneiras a seguir:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Classes de dados (todas ou uma cole\xe7\xe3o de entidades em uma classe de dados)"}),"\n",(0,n.jsx)(a.li,{children:"Entidades especificas"}),"\n",(0,n.jsx)(a.li,{children:"Conjuntos de entidades"}),"\n"]}),"\n",(0,n.jsx)(a.h4,{id:"exemplo-com-uma-dataclass",children:"Exemplo com uma dataclass"}),"\n",(0,n.jsxs)(a.p,{children:["As peti\xe7\xf5es abaixo retornar apenas o primeiro nome e o \xfaltimo nome da classe de dados People (seja a classe de dados inteira ou a sele\xe7\xe3o de entidades baseada na pesquisa definida em",(0,n.jsx)(a.code,{children:"$filter"}),")."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:"GET  /rest/People/firstName,lastName/"})}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Resultadoi"}),":"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:'{\n    __entityModel: "People",\n    __COUNT: 4,\n    __SENT: 4,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "1",\n            __STAMP: 1,\n            firstName: "John",\n            lastName: "Smith"\n        },\n        {\n            __KEY: "2",\n            __STAMP: 2,\n            firstName: "Susan",\n            lastName: "O\'Leary"\n        },\n        {\n            __KEY: "3",\n            __STAMP: 2,\n            firstName: "Pete",\n            lastName: "Marley"\n        },\n        {\n            __KEY: "4",\n            __STAMP: 1,\n            firstName: "Beth",\n            lastName: "Adams"\n        }\n    ]\n}\n'})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:"GET  /rest/People/firstName,lastName/?$filter=\"lastName='A@'\"/"})}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Resultadoi"}),":"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:'{\n    __entityModel: "People",\n    __COUNT: 1,\n    __SENT: 1,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "4",\n            __STAMP: 4,\n            firstName: "Beth",\n            lastName: "Adams"\n        }\n    ]\n}\n'})}),"\n",(0,n.jsx)(a.h4,{id:"exemplo-entidade",children:"Exemplo entidade"}),"\n",(0,n.jsx)(a.p,{children:"As peti\xe7\xf5es abaixo retornar apenas os atributos primeiro nome e \xfaltimo sobrenome de uma entidade especifica na dataclasse People:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:"GET  /rest/People(3)/firstName,lastName/"})}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Resultadoi"}),":"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:'{\n    __entityModel: "People",\n    __KEY: "3",\n    __STAMP: 2,\n    firstName: "Pete",\n    lastName: "Marley"\n}\n'})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:"GET  /rest/People(3)/"})}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Resultadoi"}),":"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:'{\n    __entityModel: "People",\n    __KEY: "3",\n    __STAMP: 2,\n    ID: 3,\n    firstName: "Pete",\n    lastName: "Marley",\n    salary: 30000,\n    employer: {\n        __deferred: {\n            uri: "http://127.0.0.1:8081/rest/Company(3)",\n            __KEY: "3"\n        }\n    },\n    fullName: "Pete Marley",\n    employerName: "microsoft"\n\n}\n'})}),"\n",(0,n.jsx)(a.h4,{id:"exemplo-de-conjunto-de-entidades",children:"Exemplo de conjunto de Entidades"}),"\n",(0,n.jsxs)(a.p,{children:["Quanto tiver ",(0,n.jsx)(a.a,{href:"#creating-and-managing-entity-set",children:"criado um conjunto de entidade"}),", pode filtrar a informa\xe7\xe3o nele definindo quais atributos a retornar:"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:"`GET  /rest/People/firstName,employer.name/$entityset/BDCD8AABE13144118A4CF8641D5883F5?$expand=employer"})}),"\n",(0,n.jsx)(a.h2,{id:"vendo-um-atributo-de-imagem",children:"Vendo um atributo de imagem"}),"\n",(0,n.jsx)(a.p,{children:"Se quiser ver um atributo de imagem integralmente, escreva o abaixo:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:"GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo"})}),"\n",(0,n.jsxs)(a.p,{children:["Para saber mais sobre formatos de imagem, veja ",(0,n.jsx)(a.a,{href:"/docs/pt/20/REST/imageformat",children:(0,n.jsx)(a.code,{children:"$imageformat"})}),". Para saber mais sobre par\xe2metros de vers\xe3o, veja ",(0,n.jsx)(a.a,{href:"/docs/pt/20/REST/version",children:(0,n.jsx)(a.code,{children:"$version"})}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"salvar-um-atributo-blob-ao-disco",children:"Salvar um atributo BLOB ao disco"}),"\n",(0,n.jsx)(a.p,{children:"Se quiser salvar um BLOB armazenado na dataclass, pode escrever:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt"})}),"\n",(0,n.jsx)(a.h2,{id:"recuperar-apenas-uma-entidade",children:"Recuperar apenas uma entidade"}),"\n",(0,n.jsxs)(a.p,{children:["You can use the ",(0,n.jsx)(a.a,{href:"%7BdataClass%7D.html#dataclassattributevalue",children:(0,n.jsx)(a.code,{children:"\\{dataClass\\}:\\{attribute\\}(value)"})})," syntax when you want to retrieve only one entity. \xc9 particularmente \xfatil quando quiser fazer uma pesquisa relacionada que n\xe3o seja criada com a mesma chave prim\xe1ria que a dataclass. Por exemplo, pode escrever:"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:'GET  /rest/Company:companyCode("Acme001")'})})]})}function m(e={}){let{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},250065:function(e,a,s){s.d(a,{Z:function(){return t},a:function(){return r}});var d=s(667294);let n={},o=d.createContext(n);function r(e){let a=d.useContext(o);return d.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),d.createElement(o.Provider,{value:a},e.children)}}}]);