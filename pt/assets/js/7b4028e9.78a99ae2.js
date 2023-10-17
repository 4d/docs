"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91329],{603905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},d=Object.keys(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,d=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=i(a),c=r,k=m["".concat(l,".").concat(c)]||m[c]||p[c]||d;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=a.length,o=new Array(d);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<d;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},136446:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});a(667294);var n=a(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},d=Object.keys(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={id:"classFunctions",title:"Chamada de fun\xe7\xf5es de classe ORDA"},s=void 0,l={unversionedId:"REST/classFunctions",id:"version-20-R3/REST/classFunctions",title:"Chamada de fun\xe7\xf5es de classe ORDA",description:"Pode chamar as fun\xe7\xf5es de classe de modelos de dados definidas para o modelo de dados ORDA atrav\xe9s dos seus pedidos REST, para poder beneficiar da API da aplica\xe7\xe3o 4D objetivo.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R3/REST/ClassFunctions.md",sourceDirName:"REST",slug:"/REST/classFunctions",permalink:"/docs/pt/REST/classFunctions",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FClassFunctions.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"classFunctions",title:"Chamada de fun\xe7\xf5es de classe ORDA"},sidebar:"docs",previous:{title:"Manipula\xe7\xe3o de dados",permalink:"/docs/pt/REST/manData"},next:{title:"Sobre peti\xe7\xf5es REST",permalink:"/docs/pt/REST/REST_requests"}},i={},u=[{value:"Chamadas fun\xe7\xf5es",id:"chamadas-fun\xe7\xf5es",level:2},{value:"Par\xe2metros",id:"par\xe2metros",level:2},{value:"Par\xe2metro de valor escalar",id:"par\xe2metro-de-valor-escalar",level:3},{value:"Par\xe2metro da entidade",id:"par\xe2metro-da-entidade",level:3},{value:"Par\xe2metro de entidade relacionada",id:"par\xe2metro-de-entidade-relacionada",level:4},{value:"Par\xe2metro de sele\xe7\xe3o da entidade",id:"par\xe2metro-de-sele\xe7\xe3o-da-entidade",level:3},{value:"Exemplos de peti\xe7\xf5es",id:"exemplos-de-peti\xe7\xf5es",level:2},{value:"Utilizar uma fun\xe7\xe3o de classe do datastore",id:"utilizar-uma-fun\xe7\xe3o-de-classe-do-datastore",level:3},{value:"Resultados",id:"resultados",level:4},{value:"Utiliza\xe7\xe3o de uma fun\xe7\xe3o de classe de dataclass",id:"utiliza\xe7\xe3o-de-uma-fun\xe7\xe3o-de-classe-de-dataclass",level:3},{value:"Resultados",id:"resultados-1",level:4},{value:"Utiliza\xe7\xe3o de uma fun\xe7\xe3o de classe de uma entidade",id:"utiliza\xe7\xe3o-de-uma-fun\xe7\xe3o-de-classe-de-uma-entidade",level:3},{value:"Resultados",id:"resultados-2",level:4},{value:"Usar uma fun\xe7\xe3o de classe de uma sele\xe7\xe3o de entidade",id:"usar-uma-fun\xe7\xe3o-de-classe-de-uma-sele\xe7\xe3o-de-entidade",level:3},{value:"Resultados",id:"resultados-3",level:4},{value:"Usando uma fun\xe7\xe3o de classe entitySelection e um entitySet",id:"usando-uma-fun\xe7\xe3o-de-classe-entityselection-e-um-entityset",level:3},{value:"Resultados",id:"resultados-4",level:4},{value:"Usando uma fun\xe7\xe3o de classe de sele\xe7\xe3o de entidades e um orderBy",id:"usando-uma-fun\xe7\xe3o-de-classe-de-sele\xe7\xe3o-de-entidades-e-um-orderby",level:3},{value:"Resultados",id:"resultados-5",level:4},{value:"Utilizar uma entidade a ser criada no servidor",id:"utilizar-uma-entidade-a-ser-criada-no-servidor",level:3},{value:"Resultados",id:"resultados-6",level:4},{value:"Utilizar uma entidade a atualizar no servidor",id:"utilizar-uma-entidade-a-atualizar-no-servidor",level:3},{value:"Resultados",id:"resultados-7",level:4},{value:"Cria\xe7\xe3o de uma entidade com uma entidade relacionada",id:"cria\xe7\xe3o-de-uma-entidade-com-uma-entidade-relacionada",level:3},{value:"Resultados",id:"resultados-8",level:4},{value:"Atualiza\xe7\xe3o de uma entidade com uma entidade relacionada",id:"atualiza\xe7\xe3o-de-uma-entidade-com-uma-entidade-relacionada",level:3},{value:"Resultados",id:"resultados-9",level:4},{value:"Receber uma sele\xe7\xe3o de entidade como par\xe2metro",id:"receber-uma-sele\xe7\xe3o-de-entidade-como-par\xe2metro",level:3},{value:"Resultados",id:"resultados-10",level:4},{value:"Utilizar uma sele\xe7\xe3o de entidade actualizada no cliente",id:"utilizar-uma-sele\xe7\xe3o-de-entidade-actualizada-no-cliente",level:3}],p={toc:u};function m(e){var{components:t}=e,o=d(e,["components"]);return(0,n.kt)("wrapper",r({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Pode chamar as ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/ORDA/ordaClasses"}),"fun\xe7\xf5es de classe de modelos de dados")," definidas para o modelo de dados ORDA atrav\xe9s dos seus pedidos REST, para poder beneficiar da API da aplica\xe7\xe3o 4D objetivo."),(0,n.kt)("p",null,"As fun\xe7\xf5es s\xe3o simplesmente chamadas em pedidos POST na interface ORDA apropriada, sem (). Por exemplo, se tiver definido uma fun\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},"getCity()")," na dataclass City, pode cham\xe1-la utilizando o seguinte pedido:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"/rest/City/getCity")),(0,n.kt)("p",null,"com dados no corpo do pedido POST: ",(0,n.kt)("inlineCode",{parentName:"p"},'["Aguada"]')),(0,n.kt)("p",null,"Na linguagem 4D, esta chamada \xe9 equivalente a:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'$city:=ds. City.getCity("Aguada")\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Apenas as fun\xe7\xf5es com a palavra-chave ",(0,n.kt)("inlineCode",{parentName:"p"},"exposed")," podem ser diretamente chamadas a partir de pedidos REST. Ver a sec\xe7\xe3o ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/ORDA/ordaClasses#exposed-vs-non-exposed-functions"}),"Fun\xe7\xf5es expostas vs n\xe3o expostas"),".")),(0,n.kt)("h2",r({},{id:"chamadas-fun\xe7\xf5es"}),"Chamadas fun\xe7\xf5es"),(0,n.kt)("p",null,"As fun\xe7\xf5es t\xeam de ser sempre chamadas atrav\xe9s de pedidos ",(0,n.kt)("strong",{parentName:"p"},"POST")," REST (um pedido GET dar\xe1 origem a um erro)."),(0,n.kt)("p",null,"As fun\xe7\xf5es s\xe3o chamadas no objeto correspondente no datastore do servidor."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Fun\xe7\xe3o de classe"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Sintaxe"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/pt/ORDA/ordaClasses#datastore-class"}),"datastore class")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"/rest/$catalog/DataStoreClassFunction"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/pt/ORDA/ordaClasses#dataclass-class"}),"dataclass class")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"/rest/{dataClass}/DataClassClassFunction"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/pt/ORDA/ordaClasses#entityselection-class"}),"entitySelection class")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"/rest/{dataClass}/EntitySelectionClassFunction"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"/rest/{dataClass}/EntitySelectionClassFunction/$entityset/entitySetNumber"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"/rest/{dataClass}/EntitySelectionClassFunction/$filter"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"/rest/{dataClass}/EntitySelectionClassFunction/$orderby"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"/docs/pt/ORDA/ordaClasses#entity-class"}),"entity class")),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"/rest/{dataClass}(key)/EntityClassFunction/"))))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"/rest/{dataClass}/Function")," pode ser utilizada para chamar uma fun\xe7\xe3o de dataclass ou de sele\xe7\xe3o de entidades (",(0,n.kt)("inlineCode",{parentName:"p"},"/rest/{dataClass}")," devolve todas as entidades da DataClass como uma sele\xe7\xe3o de entidades).",(0,n.kt)("br",{parentName:"p"}),"\n","A fun\xe7\xe3o \xe9 pesquisada primeiro na classe de sele\xe7\xe3o de entidades. Se n\xe3o for encontrado, \xe9 procurado na dataclass. Por outras palavras, se uma fun\xe7\xe3o com o mesmo nome for definida tanto na classe DataClass como na classe EntitySelection, a fun\xe7\xe3o da classe de dataClass nunca ser\xe1 executada.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Todo o c\xf3digo 4D chamado a partir de pedidos REST ",(0,n.kt)("strong",{parentName:"p"},"deve ser thread-safe")," se o projeto correr em modo compilado, porque o Servidor REST usa sempre processos preemptivos neste caso (o valor da defini\xe7\xe3o ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/WebServer/preemptiveWeb#enabling-the-preemptive-mode-for-the-web-server"}),(0,n.kt)("em",{parentName:"a"},"Use preemptive process"))," \xe9 ignorado pelo Servidor REST).")),(0,n.kt)("h2",r({},{id:"par\xe2metros"}),"Par\xe2metros"),(0,n.kt)("p",null,"\xc9 poss\xedvel enviar par\xe2metros para fun\xe7\xf5es definidas em classes usu\xe1rios ORDA. No lado do servidor, ser\xe3o recebidos nas fun\xe7\xf5es de classe nos par\xe2metros normais $1, $2, etc."),(0,n.kt)("p",null,"As regras abaixo s\xe3o v\xe1lidas:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Os par\xe2metros devem ser transmitidos no corpo ",(0,n.kt)("strong",{parentName:"li"},"do pedido POST")),(0,n.kt)("li",{parentName:"ul"},"Os par\xe2metros devem ser inclu\xeddos numa cole\xe7\xe3o (formato JSON)"),(0,n.kt)("li",{parentName:"ul"},"Todos os tipos de dados escalares suportados nas cole\xe7\xf5es JSON podem ser passados como par\xe2metros."),(0,n.kt)("li",{parentName:"ul"},"A entidade e a sele\xe7\xe3o de entidades podem ser passadas como par\xe2metros. O objeto JSON deve conter atributos espec\xedficos utilizados pelo servidor REST para atribuir dados aos objectos ORDA correspondentes: ",(0,n.kt)("strong",{parentName:"li"},"DATACLASS, "),"ENTITY, ",(0,n.kt)("strong",{parentName:"li"},"ENTITIES, "),"DATASET.")),(0,n.kt)("p",null,"Ver ",(0,n.kt)("a",r({parentName:"p"},{href:"#request-receiving-an-entity-as-parameter"}),"este exemplo")," e ",(0,n.kt)("a",r({parentName:"p"},{href:"#request-receiving-an-entity-selection-as-parameter"}),"este exemplo"),"."),(0,n.kt)("h3",r({},{id:"par\xe2metro-de-valor-escalar"}),"Par\xe2metro de valor escalar"),(0,n.kt)("p",null,"Os par\xe2metros devem ser simplesmente inclu\xeddos numa cole\xe7\xe3o definida no corpo. Por exemplo, com uma fun\xe7\xe3o de classe de dados ",(0,n.kt)("inlineCode",{parentName:"p"},"getCities()")," que recebe par\xe2metros de texto: ",(0,n.kt)("inlineCode",{parentName:"p"},"/rest/City/getCities")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Par\xe2metros no corpo:")," ",'["Aguada", "Paris"]'),(0,n.kt)("p",null,'Todos os tipos de dados JSON s\xe3o suportados nos par\xe2metros, incluindo os ponteiros JSON. As datas podem ser transmitidas como cadeias de caracteres no formato de data ISO 8601 (por exemplo, "2020-08-22T22:00:000Z").'),(0,n.kt)("h3",r({},{id:"par\xe2metro-da-entidade"}),"Par\xe2metro da entidade"),(0,n.kt)("p",null,"As entidades passadas nos par\xe2metros s\xe3o referenciadas no servidor atrav\xe9s da sua chave (",(0,n.kt)("em",{parentName:"p"},", ou seja, a propriedade")," __KEY). Se o par\xe2metro chave for omitido num pedido, \xe9 carregada uma nova entidade na mem\xf3ria do servidor. Tamb\xe9m \xe9 poss\xedvel transmitir valores para quaisquer atributos da entidade. Estes valores ser\xe3o automaticamente utilizados para a entidade tratada no servidor."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Se o pedido enviar valores de atributos modificados para uma entidade existente no servidor, a fun\xe7\xe3o de modelo de dados ORDA chamada ser\xe1 automaticamente executada no servidor com valores modificados. Esta carater\xedstica permite-lhe, por exemplo, verificar o resultado de uma opera\xe7\xe3o numa entidade, depois de aplicar todas as regras de neg\xf3cio, a partir da aplica\xe7\xe3o cliente. O usu\xe1rio pode ent\xe3o decidir guardar ou n\xe3o a entidade no servidor.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Propriedades"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Atributos da entidade"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"misto"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Opcional - Valores a modificar")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"__DATACLASS"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Obrigat\xf3rio - Indica a Dataclass da entidade")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"__ENTITY"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Obrigat\xf3rio - Verdadeiro para indicar ao servidor que o par\xe2metro \xe9 uma entidade")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"__KEY"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"misto (do mesmo tipo que a chave prim\xe1ria)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Facultativo - Chave prim\xe1ria da entidade")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Se __KEY n\xe3o for fornecido, uma nova entidade \xe9 criada no servidor com os atributos fornecidos."),(0,n.kt)("li",{parentName:"ul"},"Se ",(0,n.kt)("strong",{parentName:"li"},"KEY for fornecido, a entidade correspondente a "),"KEY \xe9 carregada no servidor com os atributos fornecidos")),(0,n.kt)("p",null,"Ver exemplos para ",(0,n.kt)("a",r({parentName:"p"},{href:"#creating-an-entity"}),"criar")," ou ",(0,n.kt)("a",r({parentName:"p"},{href:"#updating-an-entity"}),"atualizar")," entidades."),(0,n.kt)("h4",r({},{id:"par\xe2metro-de-entidade-relacionada"}),"Par\xe2metro de entidade relacionada"),(0,n.kt)("p",null,"Propriedades id\xeanticas \xe0s de um par\xe2metro de entidade ",(0,n.kt)("a",r({parentName:"p"},{href:"#entity-parameter"})),". Al\xe9m disso, a entidade relacionada deve existir e ser referenciada por __KEY que cont\xe9m a sua chave prim\xe1ria."),(0,n.kt)("p",null,"Ver exemplos para ",(0,n.kt)("a",r({parentName:"p"},{href:"#creating-an-entity-with-a-related-entity"}),"criar")," ou ",(0,n.kt)("a",r({parentName:"p"},{href:"#updating-an-entity-with-a-related-entity"}),"atualizar")," entidades com entidades relacionadas."),(0,n.kt)("h3",r({},{id:"par\xe2metro-de-sele\xe7\xe3o-da-entidade"}),"Par\xe2metro de sele\xe7\xe3o da entidade"),(0,n.kt)("p",null,"A sele\xe7\xe3o da entidade deve ter sido previamente definida utilizando ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/REST/method#methodentityset"}),"$method=entityset"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Se o pedido enviar uma sele\xe7\xe3o de entidade modificada para o servidor, a fun\xe7\xe3o de modelo de dados ORDA chamada ser\xe1 automaticamente executada no servidor com a sele\xe7\xe3o de entidade modificada.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Propriedades"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Atributos da entidade"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"misto"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Opcional - Valores a modificar")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"__DATASET"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Obrigat\xf3rio - entitySetID (UUID) da sele\xe7\xe3o de entidades")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"__ENTITIES"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Obrigat\xf3rio - Verdadeiro para indicar ao servidor que o par\xe2metro \xe9 uma sele\xe7\xe3o de entidade")))),(0,n.kt)("p",null,"Ver exemplo de",(0,n.kt)("a",r({parentName:"p"},{href:"#receiving-an-entity-selection-as-parameter"}),"recep\xe7\xe3o de uma sele\xe7\xe3o de entidade"),"."),(0,n.kt)("h2",r({},{id:"exemplos-de-peti\xe7\xf5es"}),"Exemplos de peti\xe7\xf5es"),(0,n.kt)("p",null,"Esta base de dados \xe9 exposta como um datastore remoto no localhost (porta 8111):"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt-text",src:a(516438).Z,width:"882",height:"599"})),(0,n.kt)("h3",r({},{id:"utilizar-uma-fun\xe7\xe3o-de-classe-do-datastore"}),"Utilizar uma fun\xe7\xe3o de classe do datastore"),(0,n.kt)("p",null,"A classe de ",(0,n.kt)("inlineCode",{parentName:"p"},"DataStore")," US_Cities fornece uma API:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'// DataStore class Class extends DataStoreImplementation\n\nexposed Function getName()\n    $0:="US cities and zip codes manager" \n')),(0,n.kt)("p",null,"Pode ent\xe3o executar este pedido:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"POST")," ",(0,n.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8111/rest/$catalog/getName")),(0,n.kt)("h4",r({},{id:"resultados"}),"Resultados"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'{\n"result": "US cities and zip codes manager" \n}\n')),(0,n.kt)("h3",r({},{id:"utiliza\xe7\xe3o-de-uma-fun\xe7\xe3o-de-classe-de-dataclass"}),"Utiliza\xe7\xe3o de uma fun\xe7\xe3o de classe de dataclass"),(0,n.kt)("p",null,"A classe Dataclass ",(0,n.kt)("inlineCode",{parentName:"p"},"City")," fornece uma API que devolve uma entidade cidade a partir de um nome passado como par\xe2metro:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'// City class Class extends DataClass\n\nexposed Function getCity()\n var $0 : cs. CityEntity\n var $1,$nameParam : text\n $nameParam:=$1\n $0:=This.query("name = :1";$nameParam).first()\n')),(0,n.kt)("p",null,"Pode ent\xe3o executar este pedido:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"POST")," ",(0,n.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8111/rest/City/getCity")),(0,n.kt)("p",null,"Corpo do pedido: ",'["Aguada"]'),(0,n.kt)("h4",r({},{id:"resultados-1"}),"Resultados"),(0,n.kt)("p",null,"Le r\xe9sultat est une entit\xe9:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'{\n    "__entityModel": "City",\n    "__DATACLASS": "City",\n    "__KEY": "1",\n    "__TIMESTAMP": "2020-03-09T08:03:19.923Z",\n    "__STAMP": 1,\n    "ID": 1,\n    "name": "Aguada",\n    "countyFIPS": 72003,\n    "county": {\n        "__deferred": {\n            "uri": "/rest/County(72003)",\n            "__KEY": "72003" \n        }\n    },\n    "zips": {\n        "__deferred": {\n            "uri": "/rest/City(1)/zips?$expand=zips" \n        }\n    }\n}\n')),(0,n.kt)("h3",r({},{id:"utiliza\xe7\xe3o-de-uma-fun\xe7\xe3o-de-classe-de-uma-entidade"}),"Utiliza\xe7\xe3o de uma fun\xe7\xe3o de classe de uma entidade"),(0,n.kt)("p",null,"A classe de entidade ",(0,n.kt)("inlineCode",{parentName:"p"},"CityEntity")," fornece uma API:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'// CityEntity class Class extends Entity\n\nexposed Function getPopulation()\n    $0:=This.zips.sum("population")\n')),(0,n.kt)("p",null,"Pode ent\xe3o executar este pedido:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"POST")," ",(0,n.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8111/rest/City(2)/getPopulation")),(0,n.kt)("h4",r({},{id:"resultados-2"}),"Resultados"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'{\n    "result": 48814\n}\n')),(0,n.kt)("h3",r({},{id:"usar-uma-fun\xe7\xe3o-de-classe-de-uma-sele\xe7\xe3o-de-entidade"}),"Usar uma fun\xe7\xe3o de classe de uma sele\xe7\xe3o de entidade"),(0,n.kt)("p",null,"A classe de selection de entidade ",(0,n.kt)("inlineCode",{parentName:"p"},"CitySelection")," fornece uma API:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'// CitySelection class Class extends EntitySelection\n\nexposed Function getPopulation()\n    $0:=This.zips.sum("population")\n')),(0,n.kt)("p",null,"Pode ent\xe3o executar este pedido:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"POST")," ",(0,n.kt)("inlineCode",{parentName:"p"},'127.0.0.1:8111/rest/City/getPopulation/?$filter="ID<3"')),(0,n.kt)("h4",r({},{id:"resultados-3"}),"Resultados"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'{\n    "result": 87256\n}\n')),(0,n.kt)("h3",r({},{id:"usando-uma-fun\xe7\xe3o-de-classe-entityselection-e-um-entityset"}),"Usando uma fun\xe7\xe3o de classe entitySelection e um entitySet"),(0,n.kt)("p",null,"A classe ",(0,n.kt)("inlineCode",{parentName:"p"},"StudentsSelection")," tem uma fun\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},"getAgeAverage"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),"// StudentsSelection Class Class extends EntitySelection\n\nexposed Function getAgeAverage\n C_LONGINT($sum;$0)\n C_OBJECT($s)\n\n $sum:=0\n For each ($s;This)\n     $sum:=$sum+$s.age()\n End for each \n $0:=$sum/This.length\n")),(0,n.kt)("p",null,"Uma vez criado um conjunto de entidades, \xe9 poss\xedvel executar este pedido:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"POST")," ",(0,n.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8044/rest/Students/getAgeAverage/$entityset/17E83633FFB54ECDBF947E5C620BB532")),(0,n.kt)("h4",r({},{id:"resultados-4"}),"Resultados"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'{\n    "result": 34\n}\n')),(0,n.kt)("h3",r({},{id:"usando-uma-fun\xe7\xe3o-de-classe-de-sele\xe7\xe3o-de-entidades-e-um-orderby"}),"Usando uma fun\xe7\xe3o de classe de sele\xe7\xe3o de entidades e um orderBy"),(0,n.kt)("p",null,"A classe ",(0,n.kt)("inlineCode",{parentName:"p"},"StudentsSelection")," tem uma fun\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},"getLastSummary"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'// StudentsSelection Class Class extends EntitySelection\n\nexposed Function getLastSummary\n C_TEXT($0)\n C_OBJECT($last)\n\n $last:=This.last()\n $0:=$last.firstname+" - "+$last.lastname+" is ... "+String($last.age())\n')),(0,n.kt)("p",null,"Pode ent\xe3o executar este pedido:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"POST")," ",(0,n.kt)("inlineCode",{parentName:"p"},'127.0.0.1:8044/rest/Students/getLastSummary/$entityset/?$filter="lastname=b@"&$orderby="lastname"')),(0,n.kt)("h4",r({},{id:"resultados-5"}),"Resultados"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'{\n    "result": "Wilbert - Bull is ... 21" \n}\n')),(0,n.kt)("h3",r({},{id:"utilizar-uma-entidade-a-ser-criada-no-servidor"}),"Utilizar uma entidade a ser criada no servidor"),(0,n.kt)("p",null,"A classe de Dataclass ",(0,n.kt)("inlineCode",{parentName:"p"},"Students")," tem a fun\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},"pushData()")," que recebe uma entidade que cont\xe9m dados do cliente. O m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},"checkData()")," executa alguns controlos. Se estiverem corretas, a entidade \xe9 guardada e devolvida."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),"// Students Class Class extends DataClass\n\nexposed Function pushData\n var $1, $entity, $status, $0 : Object\n\n $entity:=$1\n\n $status:=checkData($entity) // $status is an object with a success boolean property\n\n $0:=$status\n\n If ($status.success)\n     $status:=$entity.save()\n     If ($status.success)\n         $0:=$entity\n     End if \n End if\n\n")),(0,n.kt)("p",null,"Executa-se este pedido:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"POST")," ",(0,n.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8044/rest/Students/pushData")),(0,n.kt)("p",null,"Corpo do pedido:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'[{\n"__DATACLASS":"Students",\n"__ENTITY":true,\n"firstname":"Ann",\n"lastname":"Brown" \n}]\n')),(0,n.kt)("p",null,"J\xe1 que n\xe3o \xe9 dada nenhuma ",(0,n.kt)("inlineCode",{parentName:"p"},"__KEY")," , \xe9 carregada uma nova entidade Estudantes no servidor ",(0,n.kt)("strong",{parentName:"p"},"com os atributos recebidos do cliente"),". Como a fun\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},"pushData()")," executa uma a\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},"save()")," , a nova entidade \xe9 criada."),(0,n.kt)("h4",r({},{id:"resultados-6"}),"Resultados"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'{\n    "__entityModel": "Students",\n    "__DATACLASS": "Students",\n    "__KEY": "55",\n    "__TIMESTAMP": "2020-06-16T10:54:41.805Z",\n    "__STAMP": 1,\n    "ID": 55,\n    "firstname": "Ann",\n    "lastname": "BROWN",\n    "schoolID": null,\n    "school": null\n}\n')),(0,n.kt)("h3",r({},{id:"utilizar-uma-entidade-a-atualizar-no-servidor"}),"Utilizar uma entidade a atualizar no servidor"),(0,n.kt)("p",null,"O mesmo que acima, mas com um atributo __KEY"),(0,n.kt)("p",null,"Executa-se este pedido:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"POST:"),(0,n.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8044/rest/Students/pushData")),(0,n.kt)("p",null,"Corpo do pedido:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'[{\n"__DATACLASS":"Students",\n"__ENTITY":true,\n"lastname":"Brownie",\n"__KEY":55\n}]\n')),(0,n.kt)("p",null,"Uma vez que ",(0,n.kt)("inlineCode",{parentName:"p"},"__KEY")," \xe9 fornecido, a entidade Estudantes com a chave prim\xe1ria 55 \xe9 carregada ",(0,n.kt)("strong",{parentName:"p"},"com o valor do sobrenome recebido do cliente"),". Como a fun\xe7\xe3o executa uma a\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},"save()")," , a entidade \xe9 atualizada."),(0,n.kt)("h4",r({},{id:"resultados-7"}),"Resultados"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'{\n    "__entityModel": "Students",\n    "__DATACLASS": "Students",\n    "__KEY": "55",\n    "__TIMESTAMP": "2020-06-16T11:10:21.679Z",\n    "__STAMP": 3,\n    "ID": 55,\n    "firstname": "Ann",\n    "lastname": "BROWNIE",\n    "schoolID": null,\n    "school": null \n}\n')),(0,n.kt)("h3",r({},{id:"cria\xe7\xe3o-de-uma-entidade-com-uma-entidade-relacionada"}),"Cria\xe7\xe3o de uma entidade com uma entidade relacionada"),(0,n.kt)("p",null,"Neste exemplo, criamos uma nova entidade Estudantes com a entidade Escolas com a chave prim\xe1ria 2."),(0,n.kt)("p",null,"Executa-se este pedido:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"POST:"),(0,n.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8044/rest/Students/pushData")),(0,n.kt)("p",null,"Corpo do pedido:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'[{\n"__DATACLASS":"Students",\n"__ENTITY":true,\n"firstname":"John",\n"lastname":"Smith",\n"school":{"__KEY":2}\n}]\n')),(0,n.kt)("h4",r({},{id:"resultados-8"}),"Resultados"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'{\n    "__entityModel": "Students",\n    "__DATACLASS": "Students",\n    "__KEY": "56",\n    "__TIMESTAMP": "2020-06-16T11:16:47.601Z",\n    "__STAMP": 1,\n    "ID": 56,\n    "firstname": "John",\n    "lastname": "SMITH",\n    "schoolID": 2,\n       "school": {\n        "__deferred": {\n            "uri": "/rest/Schools(2)",\n            "__KEY": "2" \n        }\n    }\n}\n')),(0,n.kt)("h3",r({},{id:"atualiza\xe7\xe3o-de-uma-entidade-com-uma-entidade-relacionada"}),"Atualiza\xe7\xe3o de uma entidade com uma entidade relacionada"),(0,n.kt)("p",null,"Neste exemplo, associamos uma escola existente a uma entidade Students. A classe ",(0,n.kt)("inlineCode",{parentName:"p"},"StudentEntity")," tem um API:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),"// StudentsEntity class Class extends Entity\n\nexposed Function putToSchool()\n var $1, $school , $0, $status : Object\n\n  //$1 is a Schools entity\n $school:=$1\n  //Associate the related entity school to the current Students entity\n This.school:=$school\n\n $status:=This.save()\n\n $0:=$status\n")),(0,n.kt)("p",null,"You run this request, called on a Students entity : ",(0,n.kt)("strong",{parentName:"p"},"POST")," ",(0,n.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8044/rest/Students(1)/putToSchool")," Body of the request:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'[{\n"__DATACLASS":"Schools",\n"__ENTITY":true,\n"__KEY":2\n}]\n')),(0,n.kt)("h4",r({},{id:"resultados-9"}),"Resultados"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'{\n    "result": {\n        "success": true\n    }\n}\n')),(0,n.kt)("h3",r({},{id:"receber-uma-sele\xe7\xe3o-de-entidade-como-par\xe2metro"}),"Receber uma sele\xe7\xe3o de entidade como par\xe2metro"),(0,n.kt)("p",null,"Na classe ",(0,n.kt)("inlineCode",{parentName:"p"},"Students")," Dataclass, a fun\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},"setFinalExam()")," atualiza uma sele\xe7\xe3o de entidade recebida ($1). Na realidade, atualiza o atributo ",(0,n.kt)("em",{parentName:"p"},"finalExam")," com o valor recebido ($2). Devolve as chaves prim\xe1rias das entidades atualizadas."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),"// Students class Class extends DataClass\n\nexposed Function setFinalExam()\n\n    var $1, $es, $student, $status : Object\n    var $2, $examResult : Text\n\n    var $keys, $0 : Collection\n\n      //Entity selection\n    $es:=$1\n\n    $examResult:=$2\n\n    $keys:=New collection()\n\n      //Loop on the entity selection\n    For each ($student;$es)\n        $student.finalExam:=$examResult\n        $status:=$student.save()\n        If ($status.success)\n            $keys.push($student.ID)\n        End if \n    End for each \n\n    $0:=$keys\n")),(0,n.kt)("p",null,"Um conjunto de entidades \xe9 criado primeiro com este pedido:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'http://127.0.0.1:8044/rest/Students/?$filter="ID<3"&$method=entityset')),(0,n.kt)("p",null,"Em seguida, pode executar este pedido:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"POST")," ",(0,n.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8044/rest/Students/setFinalExam")),(0,n.kt)("p",null,"Corpo do pedido:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'[\n{\n"__ENTITIES":true,\n"__DATASET":"9B9C053A111E4A288E9C1E48965FE671" \n},\n"Passed" \n]\n\n')),(0,n.kt)("h4",r({},{id:"resultados-10"}),"Resultados"),(0,n.kt)("p",null,"As entidades com chaves prim\xe1rias 1 e 2 foram atualizadas."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'{\n    "result": [\n        1,\n        2\n    ]\n}\n')),(0,n.kt)("h3",r({},{id:"utilizar-uma-sele\xe7\xe3o-de-entidade-actualizada-no-cliente"}),"Utilizar uma sele\xe7\xe3o de entidade actualizada no cliente"),(0,n.kt)("p",null,"Utilizando a fun\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},"getAgeAverage()")," ",(0,n.kt)("a",r({parentName:"p"},{href:"#using-an-entityselection-class-function-and-an-entityset"}),"definida acima"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'var $remoteDS, $newStudent, $students : Object\nvar $ageAverage : Integer\n\n$remoteDS:=Open datastore(New object("hostname";"127.0.0.1:8044");"students")\n\n// $newStudent is a student entity to procees\n$newStudent:=...\n$students:=$remoteDS. Students.query("school.name = :1";"Math school")\n// We add an entity to the $students entity selection on the client\n$students.add($newStudent) \n\n// We call a function on the StudentsSelection class returning the age average of the students in the entity selection\n// The function is executed on the server on the updated $students entity selection which included the student added from the client\n$ageAverage:=$students.getAgeAverage()\n')))}m.isMDXComponent=!0},516438:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ordastructure-64d64d76ce9764a2365629e381bde282.png"}}]);