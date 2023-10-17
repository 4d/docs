"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6750],{603905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>c});var n=t(667294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):d(d({},a),e)),t},p=function(e){var a=l(e.components);return n.createElement(i.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),c=o,k=u["".concat(i,".").concat(c)]||u[c]||m[c]||r;return t?n.createElement(k,d(d({ref:a},p),{},{components:t})):n.createElement(k,d({ref:a},p))}));function c(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,d=new Array(r);d[0]=u;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,d[1]=s;for(var l=2;l<r;l++)d[l]=t[l];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},680422:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>d,metadata:()=>i,toc:()=>p});t(667294);var n=t(603905);function o(){return o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function r(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const d={id:"manData",title:"Manipula\xe7\xe3o de dados"},s=void 0,i={unversionedId:"REST/manData",id:"version-20-R2/REST/manData",title:"Manipula\xe7\xe3o de dados",description:"Todos os atributos, classes e m\xe9todos da datastore expostos podem ser acessados atrav\xe9s de REST. Os nomes de classes de dados, atributos e m\xe9todos s\xe3o sens\xedveis \xe0s mai\xfasculas e min\xfasculas, entretanto, os dados das pesquisas n\xe3o s\xe3o.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R2/REST/manData.md",sourceDirName:"REST",slug:"/REST/manData",permalink:"/docs/pt/20-R2/REST/manData",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FmanData.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"manData",title:"Manipula\xe7\xe3o de dados"},sidebar:"docs",previous:{title:"Obter informa\xe7\xe3o do servidor",permalink:"/docs/pt/20-R2/REST/genInfo"},next:{title:"Chamada de fun\xe7\xf5es de classe ORDA",permalink:"/docs/pt/20-R2/REST/classFunctions"}},l={},p=[{value:"Pesquisas de dados",id:"pesquisas-de-dados",level:2},{value:"Adicionar, modificar e apagar entidades",id:"adicionar-modificar-e-apagar-entidades",level:2},{value:"Navegando dados",id:"navegando-dados",level:2},{value:"Criar e gerenciar conjuntos de entidades",id:"criar-e-gerenciar-conjuntos-de-entidades",level:2},{value:"Calcular dados",id:"calcular-dados",level:2},{value:"Chamar as fun\xe7\xf5es de classe do modelo de dados",id:"chamar-as-fun\xe7\xf5es-de-classe-do-modelo-de-dados",level:2},{value:"Selecionar atributos a obter",id:"selecionar-atributos-a-obter",level:2},{value:"Exemplos",id:"exemplos",level:3},{value:"Exemplo com uma dataclass",id:"exemplo-com-uma-dataclass",level:4},{value:"Exemplo entidade",id:"exemplo-entidade",level:4},{value:"Exemplo de conjunto de Entidades",id:"exemplo-de-conjunto-de-entidades",level:4},{value:"Vendo um atributo de imagem",id:"vendo-um-atributo-de-imagem",level:2},{value:"Salvar um atributo BLOB ao disco",id:"salvar-um-atributo-blob-ao-disco",level:2},{value:"Recuperar apenas uma entidade",id:"recuperar-apenas-uma-entidade",level:2}],m={toc:p};function u(e){var{components:a}=e,t=r(e,["components"]);return(0,n.kt)("wrapper",o({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Todos ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R2/REST/configuration#exposing-tables-and-fields"}),"os atributos, classes")," e m\xe9todos da datastore expostos podem ser acessados atrav\xe9s de REST. Os nomes de classes de dados, atributos e m\xe9todos s\xe3o sens\xedveis \xe0s mai\xfasculas e min\xfasculas, entretanto, os dados das pesquisas n\xe3o s\xe3o."),(0,n.kt)("h2",o({},{id:"pesquisas-de-dados"}),"Pesquisas de dados"),(0,n.kt)("p",null,"Para pesquisar diretamente aos dados, pode fazer isso usando a fun\xe7\xe3o ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R2/REST/filter"}),(0,n.kt)("inlineCode",{parentName:"a"},"$filter")),'. Por exemplo, para encontrar a pessoa chamada "smith" poderia escrever:'),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'http://127.0.0.1:8081/rest/Person/?$filter="lastName=Smith"')),(0,n.kt)("h2",o({},{id:"adicionar-modificar-e-apagar-entidades"}),"Adicionar, modificar e apagar entidades"),(0,n.kt)("p",null,"Com o REST API, pode realizar todas as manipula\xe7\xf5es de dados que quiser em 4D."),(0,n.kt)("p",null,"Para adicionar e modificar entidades, pode chamar ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R2/REST/method#methodupdate"}),(0,n.kt)("inlineCode",{parentName:"a"},"$method=update")),". Se quiser apagar uma ou mais entidades, pode usar ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R2/REST/method#methoddelete"}),(0,n.kt)("inlineCode",{parentName:"a"},"$method=delete")),"."),(0,n.kt)("p",null,"Besides retrieving a single entity in a dataclass using ",(0,n.kt)("a",o({parentName:"p"},{href:"%7BdataClass%7D_%7Bkey%7D.html"}),"{dataClass}({key})"),", you can also write a ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R2/REST/classFunctions#function-calls"}),"class function")," that returns an entity selection (or a collection)."),(0,n.kt)("p",null,"Antes de devolver a cole\xe7\xe3o, tamb\xe9m pode orden\xe1-la utilizando ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R2/REST/orderby"}),(0,n.kt)("inlineCode",{parentName:"a"},"$orderby"))," um ou v\xe1rios atributos (mesmo os atributos de rela\xe7\xe3o)."),(0,n.kt)("h2",o({},{id:"navegando-dados"}),"Navegando dados"),(0,n.kt)("p",null,"Adicione ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R2/REST/skip"}),(0,n.kt)("inlineCode",{parentName:"a"},"$skip"))," (para definir qual entidade a iniciar) e ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R2/REST/top_$limit"}),(0,n.kt)("inlineCode",{parentName:"a"},"$top/$limit"))," (para definir quantas entidades retornar) peti\xe7\xf5es REST para suas pesquisas ou sele\xe7\xf5es de entidade para navegar a cole\xe7\xe3o de entidades."),(0,n.kt)("h2",o({},{id:"criar-e-gerenciar-conjuntos-de-entidades"}),"Criar e gerenciar conjuntos de entidades"),(0,n.kt)("p",null,"Um conjunto de entidades (ou ent\xe3o ",(0,n.kt)("em",{parentName:"p"},"sele\xe7\xf5es de entidades"),") \xe9 uma cole\xe7\xe3o de entidades obtidas atrav\xe9s de peti\xe7\xf5es REST que \xe9 armazenada no cache de 4D Server. Usar um conjunto de entidades previne que pesquise continuamente sua aplica\xe7\xe3o pelos mesmos resultados. Acessar um conjunto de entidades \xe9 mais r\xe1pido e pode melhorar a velocidade de sua aplica\xe7\xe3o."),(0,n.kt)("p",null,"Para criar um conjunto de entidades, chame ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R2/REST/method#methodentityset"}),(0,n.kt)("inlineCode",{parentName:"a"},"$method=entityset"))," em sua peti\xe7\xe3o REST. Como uma medida de seguran\xe7a, tamb\xe9m pode usar ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R2/REST/savedfilter"}),(0,n.kt)("inlineCode",{parentName:"a"},"$savedfilter"))," ou ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R2/REST/savedorderby"}),(0,n.kt)("inlineCode",{parentName:"a"},"$savedorderby"))," quando chamar ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R2/REST/filter"}),(0,n.kt)("inlineCode",{parentName:"a"},"$filter"))," ou ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R2/REST/orderby"}),(0,n.kt)("inlineCode",{parentName:"a"},"$orderby"))," assim se o conjunto de entidade alguma ver for removido ou der time out no servidor, pode ser facilmente recuperado com a mesma ID que antes."),(0,n.kt)("p",null,"Para acessar o conjunto de entidades, deve usar ",(0,n.kt)("inlineCode",{parentName:"p"},"$entityset/{entitySetID}"),", por exemplo:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"/rest/People/$entityset/0AF4679A5C394746BFEB68D2162A19FF")),(0,n.kt)("p",null,"Como padr\xe3o, um conjunto de entidades \xe9 armazenado por duas horas; entretanto pode mudar o timeout ao passar um novo valor a ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R2/REST/timeout"}),(0,n.kt)("inlineCode",{parentName:"a"},"$timeout")),". O timeout \xe9 continuamente resetado ao valor definido (seja o valor padr\xe3o ou um definido por voc\xea) a cada vez que for usado."),(0,n.kt)("p",null,"Se quiser remover um conjunto de entidades da cache 4D Server, pode usar ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R2/REST/method#methodrelease"}),(0,n.kt)("inlineCode",{parentName:"a"},"$method=release")),"."),(0,n.kt)("p",null,"Se modificar qualquer dos atributos de entidade no conjunto de entidades, o valor ser\xe1 atualizado. Entretanto, se modificar um valor que era uma parte da pesquisa executada para criar o conjunto de entidades, n\xe3o ser\xe1 removido do conjunto de entidades mesmo se n\xe3o se enquadrar mais nos crit\xe9rios de pesquisa. Qualquer entidade que apagar n\xe3o ser\xe1 mais parte do conjunto de entidades."),(0,n.kt)("p",null,"Se o conjunto de entidades n\xe3o existir mais no cache 4D Server, ser\xe1 recriada com um novo timeout padr\xe3o de 10 minutos. O conjunto de entidades ser\xe1 renovado (certas entidades podem ser incluidas e outras podem ser removidas) j\xe1 que desde a \xfaltima vez que foi criada, n\xe3o existe mais antes da recria\xe7\xe3o)."),(0,n.kt)("p",null,"Usando ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R2/REST/entityset#entitysetentitysetidoperatorothercollection"}),(0,n.kt)("inlineCode",{parentName:"a"},"$entityset/{entitySetID}?$logicOperator... &$otherCollection")),", pode combinar dois conjuntos de entidade que foram previamente criados. Pode ent\xe3o combinar os resultados em ambos, retornar s\xf3 o que \xe9 comum entre os dois, ou retornar o que n\xe3o \xe9 comum entre os dois."),(0,n.kt)("p",null,"Uma nova sele\xe7\xe3o de entidades \xe9 retornada, entretanto tamb\xe9m pode criar um novo conjunto de entidades chamando ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R2/REST/method#methodentityset"}),(0,n.kt)("inlineCode",{parentName:"a"},"$method=entityset"))," no fim da peti\xe7\xe3o REST."),(0,n.kt)("h2",o({},{id:"calcular-dados"}),"Calcular dados"),(0,n.kt)("p",null,"Usando ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R2/REST/compute"}),(0,n.kt)("inlineCode",{parentName:"a"},"$compute")),", pode computar ",(0,n.kt)("strong",{parentName:"p"},"average"),", ",(0,n.kt)("strong",{parentName:"p"},"count"),", ",(0,n.kt)("strong",{parentName:"p"},"min"),", ",(0,n.kt)("strong",{parentName:"p"},"max"),", ou ",(0,n.kt)("strong",{parentName:"p"},"sum")," para um atributo espec\xedfico em uma classe de dados. Pode tamb\xe9m computar todos os valores com a palavra chave $all."),(0,n.kt)("p",null,"Por exemplo, para obter o maior sal\xe1rio:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"/rest/Employee/salary/?$compute=sum")),(0,n.kt)("p",null,"Para computar todos os valores e retornar um objeto JSON:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"/rest/Employee/salary/?$compute=$all")),(0,n.kt)("h2",o({},{id:"chamar-as-fun\xe7\xf5es-de-classe-do-modelo-de-dados"}),"Chamar as fun\xe7\xf5es de classe do modelo de dados"),(0,n.kt)("p",null,"Pode chamar as ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R2/REST/classFunctions"}),"fun\xe7\xf5es da classe usu\xe1rio")," ORDA do modelo de dados atrav\xe9s de pedidos POST, para poder beneficiar da API da aplica\xe7\xe3o direcionada. Por exemplo, se tiver definido uma fun\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},"getCity()")," na dataclass City, pode cham\xe1-la utilizando o seguinte pedido:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"/rest/City/getCity")),(0,n.kt)("p",null,"com dados no corpo do pedido: ",(0,n.kt)("inlineCode",{parentName:"p"},'["Paris"]')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Pode chamar m\xe9todos de projeto 4D que s\xe3o ",(0,n.kt)("a",o({parentName:"p"},{href:"%7BdataClass%7D.html#4d-configuration"}),"expostos como servi\xe7os REST"),".")),(0,n.kt)("h2",o({},{id:"selecionar-atributos-a-obter"}),"Selecionar atributos a obter"),(0,n.kt)("p",null,"Sempre pode definir que atributos a retornar na resposta REST depois de uma peti\xe7\xe3o inicial ao passar sua rota na peti\xe7\xe3o (",(0,n.kt)("em",{parentName:"p"},"e.g."),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Company(1)/name,revenues/"),")"),(0,n.kt)("p",null,"Pode aplicar essa t\xe9cnica a:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Object"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Sintaxe"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Exemplo"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Dataclass"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"{dataClass}/{att1,att2...}"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"/People/firstName,lastName")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Cole\xe7\xe3o de entidades"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),'{dataClass}/{att1,att2...}/?$filter="{filter}"'),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"/People/firstName,lastName/?$filter=\"lastName='a@'\"")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Entidade especificada"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"{dataClass}({ID})/{att1,att2...}"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"/People(1)/firstName,lastName")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null})),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"{dataClass}:{attribute}(value)/{att1,att2...}/"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"/People:firstName(Larry)/firstName,lastName/")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Sele\xe7\xe3o de entidades"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"{dataClass}/{att1,att2...}/$entityset/{entitySetID}"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"/People/firstName/$entityset/528BF90F10894915A4290158B4281E61")))),(0,n.kt)("p",null,"Os atributos devem ser delimitados por uma v\xedrgula, ",(0,n.kt)("em",{parentName:"p"},"ou seja"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"/Employee/firstName,lastName,salary"),". Os atributos de armazenamento ou rela\xe7\xe3o podem ser passados."),(0,n.kt)("h3",o({},{id:"exemplos"}),"Exemplos"),(0,n.kt)("p",null,"Aqui alguns exemplos, mostrando como especificar que atributos vai retornar dependendo da t\xe9cnica usada para recuperar entidades."),(0,n.kt)("p",null,"Pode aplicar esse filtro das maneiras a seguir:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Classes de dados (todas ou uma cole\xe7\xe3o de entidades em uma classe de dados)"),(0,n.kt)("li",{parentName:"ul"},"Entidades especificas"),(0,n.kt)("li",{parentName:"ul"},"Conjuntos de entidades")),(0,n.kt)("h4",o({},{id:"exemplo-com-uma-dataclass"}),"Exemplo com uma dataclass"),(0,n.kt)("p",null,"As peti\xe7\xf5es abaixo retornar apenas o primeiro nome e o \xfaltimo nome da classe de dados People (seja a classe de dados inteira ou a sele\xe7\xe3o de entidades baseada na pesquisa definida em",(0,n.kt)("inlineCode",{parentName:"p"},"$filter"),")."),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/People/firstName,lastName/")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resultadoi"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),'{\n    __entityModel: "People",\n    __COUNT: 4,\n    __SENT: 4,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "1",\n            __STAMP: 1,\n            firstName: "John",\n            lastName: "Smith"\n        },\n        {\n            __KEY: "2",\n            __STAMP: 2,\n            firstName: "Susan",\n            lastName: "O\'Leary"\n        },\n        {\n            __KEY: "3",\n            __STAMP: 2,\n            firstName: "Pete",\n            lastName: "Marley"\n        },\n        {\n            __KEY: "4",\n            __STAMP: 1,\n            firstName: "Beth",\n            lastName: "Adams"\n        }\n    ]\n}\n')),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/People/firstName,lastName/?$filter=\"lastName='A@'\"/")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resultadoi"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),'{\n    __entityModel: "People",\n    __COUNT: 1,\n    __SENT: 1,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "4",\n            __STAMP: 4,\n            firstName: "Beth",\n            lastName: "Adams"\n        }\n    ]\n}\n')),(0,n.kt)("h4",o({},{id:"exemplo-entidade"}),"Exemplo entidade"),(0,n.kt)("p",null,"As peti\xe7\xf5es abaixo retornar apenas os atributos primeiro nome e \xfaltimo sobrenome de uma entidade especifica na dataclasse People:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/People(3)/firstName,lastName/")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resultadoi"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),'{\n    __entityModel: "People",\n    __KEY: "3",\n    __STAMP: 2,\n    firstName: "Pete",\n    lastName: "Marley"\n}\n')),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/People(3)/")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resultadoi"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),'{\n    __entityModel: "People",\n    __KEY: "3",\n    __STAMP: 2,\n    ID: 3,\n    firstName: "Pete",\n    lastName: "Marley",\n    salary: 30000,\n    employer: {\n        __deferred: {\n            uri: "http://127.0.0.1:8081/rest/Company(3)",\n            __KEY: "3"\n        }\n    },\n    fullName: "Pete Marley",\n    employerName: "microsoft"\n\n}\n')),(0,n.kt)("h4",o({},{id:"exemplo-de-conjunto-de-entidades"}),"Exemplo de conjunto de Entidades"),(0,n.kt)("p",null,"Quanto tiver ",(0,n.kt)("a",o({parentName:"p"},{href:"#creating-and-managing-entity-set"}),"criado um conjunto de entidade"),", pode filtrar a informa\xe7\xe3o nele definindo quais atributos a retornar:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"`GET  /rest/People/firstName,employer.name/$entityset/BDCD8AABE13144118A4CF8641D5883F5?$expand=employer")),(0,n.kt)("h2",o({},{id:"vendo-um-atributo-de-imagem"}),"Vendo um atributo de imagem"),(0,n.kt)("p",null,"Se quiser ver um atributo de imagem integralmente, escreva o abaixo:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo")),(0,n.kt)("p",null,"Para saber mais sobre formatos de imagem, veja ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R2/REST/imageformat"}),(0,n.kt)("inlineCode",{parentName:"a"},"$imageformat")),". Para saber mais sobre par\xe2metros de vers\xe3o, veja ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R2/REST/version"}),(0,n.kt)("inlineCode",{parentName:"a"},"$version")),"."),(0,n.kt)("h2",o({},{id:"salvar-um-atributo-blob-ao-disco"}),"Salvar um atributo BLOB ao disco"),(0,n.kt)("p",null,"Se quiser salvar um BLOB armazenado na dataclass, pode escrever:"),(0,n.kt)("p",null,"  ",(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt")),(0,n.kt)("h2",o({},{id:"recuperar-apenas-uma-entidade"}),"Recuperar apenas uma entidade"),(0,n.kt)("p",null,"Pode usar a sintaxe",(0,n.kt)("a",o({parentName:"p"},{href:"%7BdataClass%7D.html#dataclassattributevalue"}),(0,n.kt)("inlineCode",{parentName:"a"},"{dataClass}:{attribute}(value)"))," quando quiser recuperar apenas uma entidade. \xc9 particularmente \xfatil quando quiser fazer uma pesquisa relacionada que n\xe3o seja criada com a mesma chave prim\xe1ria que a dataclass. Por exemplo, pode escrever:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},'GET  /rest/Company:companyCode("Acme001")')))}u.isMDXComponent=!0}}]);