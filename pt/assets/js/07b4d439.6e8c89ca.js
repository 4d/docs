"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70152],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(a),c=o,k=u["".concat(l,".").concat(c)]||u[c]||p[c]||r;return a?n.createElement(k,d(d({ref:t},m),{},{components:a})):n.createElement(k,d({ref:t},m))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,d=new Array(r);d[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,d[1]=i;for(var s=2;s<r;s++)d[s]=a[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},15979:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>d,metadata:()=>l,toc:()=>m});a(67294);var n=a(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const d={id:"method",title:"$method"},i=void 0,l={unversionedId:"REST/method",id:"version-20-R2/REST/method",title:"$method",description:"Este par\xe2metro permite-lhe definir a opera\xe7\xe3o a executar com a entidade ou a sele\xe7\xe3o de entidades devolvida.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R2/REST/$method.md",sourceDirName:"REST",slug:"/REST/method",permalink:"/docs/pt/20-R2/REST/method",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24method.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"method",title:"$method"},sidebar:"docs",previous:{title:"$lock",permalink:"/docs/pt/20-R2/REST/lock"},next:{title:"$orderby",permalink:"/docs/pt/20-R2/REST/orderby"}},s={},m=[{value:"Sintaxe dispon\xedvel",id:"sintaxe-dispon\xedvel",level:2},{value:"$method=delete",id:"methoddelete",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:3},{value:"Exemplo",id:"exemplo",level:3},{value:"$method=entityset",id:"methodentityset",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:3},{value:"Exemplo",id:"exemplo-1",level:3},{value:"$method=release",id:"methodrelease",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-2",level:3},{value:"Exemplo",id:"exemplo-2",level:3},{value:"Responsa:",id:"responsa",level:4},{value:"$method=subentityset",id:"methodsubentityset",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-3",level:3},{value:"Exemplo",id:"exemplo-3",level:3},{value:"Responsa:",id:"responsa-1",level:4},{value:"$method=update",id:"methodupdate",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-4",level:3},{value:"Exemplo",id:"exemplo-4",level:3}],p={toc:m};function u(e){var{components:t}=e,a=r(e,["components"]);return(0,n.kt)("wrapper",o({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Este par\xe2metro permite-lhe definir a opera\xe7\xe3o a executar com a entidade ou a sele\xe7\xe3o de entidades devolvida."),(0,n.kt)("h2",o({},{id:"sintaxe-dispon\xedvel"}),"Sintaxe dispon\xedvel"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Sintaxe"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Exemplo"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"#methoddelete"}),(0,n.kt)("strong",{parentName:"a"},"$method=delete"))),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'POST /Employee?$filter="ID=11"& $method=delete')),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Elimina a entidade, cole\xe7\xe3o de entidades ou sele\xe7\xe3o de entidades atual")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"#methodentityset"}),(0,n.kt)("strong",{parentName:"a"},"$method=entityset"))),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'GET /People/?$filter="ID>320"& $method=entityset& $timeout=600')),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Cria um conjunto de entidades no cache do 4D Server baseado na cole\xe7\xe3o de entidades definidas no pedido REST")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"#methodrelease"}),(0,n.kt)("strong",{parentName:"a"},"$method=release"))),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"GET /Employee/$entityset/<entitySetID>?$method=release")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Libera um conjunto de entidades existente armazenado no cache do 4D Server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"#methodsubentityset"}),(0,n.kt)("strong",{parentName:"a"},"$method=subentityset"))),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"GET /Company(1)/staff?$expand=staff& $method=subentityset&   $subOrderby=lastName ASC")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Cria um conjunto de entidades com base na cole\xe7\xe3o de entidades relacionadas definidas no pedido REST")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"#methodupdate"}),(0,n.kt)("strong",{parentName:"a"},"$method=update"))),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"POST /Person/?$method=update")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Actualiza e/ou cria uma ou mais entidades")))),(0,n.kt)("h2",o({},{id:"methoddelete"}),"$method=delete"),(0,n.kt)("p",null,"Elimina a entidade, cole\xe7\xe3o de entidades ou sele\xe7\xe3o de entidades atual (criada atrav\xe9s de REST)"),(0,n.kt)("h3",o({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"Com ",(0,n.kt)("inlineCode",{parentName:"p"},"$method=delete"),", \xe9 poss\xedvel eliminar uma entidade ou toda uma cole\xe7\xe3o de entidades. Pode definir a cole\xe7\xe3o de entidades utilizando, por exemplo, ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R2/REST/filter"}),(0,n.kt)("inlineCode",{parentName:"a"},"$filter"))," ou especificando uma diretamente utilizando ",(0,n.kt)("a",o({parentName:"p"},{href:"%7BdataClass%7D.html#dataclasskey"}),(0,n.kt)("inlineCode",{parentName:"a"},"{dataClass}({key})"))," ",(0,n.kt)("em",{parentName:"p"},"(por exemplo,")," /Employee(22))."),(0,n.kt)("p",null,"Tamb\xe9m \xe9 poss\xedvel eliminar as entidades de um conjunto de entidades, chamando ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/20-R2/REST/entityset#entitysetentitysetid"}),(0,n.kt)("inlineCode",{parentName:"a"},"$entityset/{entitySetID}")),"."),(0,n.kt)("h3",o({},{id:"exemplo"}),"Exemplo"),(0,n.kt)("p",null,"Pode ent\xe3o escrever o seguinte pedido REST para eliminar a entidade cuja chave \xe9 22:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"POST  /rest/Employee(22)/?$method=delete")),(0,n.kt)("p",null,"Tamb\xe9m \xe9 poss\xedvel efetuar uma consulta utilizando $filter:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},'POST  /rest/Employee?$filter="ID=11"&$method=delete')),(0,n.kt)("p",null,"Tamb\xe9m \xe9 poss\xedvel eliminar um conjunto de entidades utilizando $entityset/{entitySetID}:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"POST  /rest/Employee/$entityset/73F46BE3A0734EAA9A33CA8B14433570?$method=delete")),(0,n.kt)("p",null,"Responsa:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-json"}),'{\n    "ok": true\n}\n')),(0,n.kt)("h2",o({},{id:"methodentityset"}),"$method=entityset"),(0,n.kt)("p",null,"Cria um conjunto de entidades no cache do 4D Server baseado na cole\xe7\xe3o de entidades definidas no pedido REST"),(0,n.kt)("h3",o({},{id:"descri\xe7\xe3o-1"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"Quando cria uma cole\xe7\xe3o de entidades em REST, pode tamb\xe9m criar um conjunto de entidades que ser\xe1 guardado na cache do 4D Server. O conjunto de entidades ter\xe1 um n\xfamero de refer\xeancia que pode ser passado para ",(0,n.kt)("inlineCode",{parentName:"p"},"$entityset/{entitySetID}")," para aceder ao mesmo. Por padr\xe3o, \xe9 v\xe1lido durante duas horas; no entanto, pode modificar esse tempo passando um valor (em segundos) para $timeout."),(0,n.kt)("p",null,"Se usou ",(0,n.kt)("inlineCode",{parentName:"p"},"$savedfilter")," e/ou ",(0,n.kt)("inlineCode",{parentName:"p"},"$savedorderby")," (em conjunto com ",(0,n.kt)("inlineCode",{parentName:"p"},"$filter")," e/ou ",(0,n.kt)("inlineCode",{parentName:"p"},"$orderby"),") quando criou seu conjunto de entidades, pode recri\xe1-lo com o mesmo ID de refer\xeancia mesmo que tenha sido removido do cache de 4D Server."),(0,n.kt)("h3",o({},{id:"exemplo-1"}),"Exemplo"),(0,n.kt)("p",null,"Para criar um conjunto de entidades, que ser\xe1 guardado no cache do 4D Server por duas horas, adicione ",(0,n.kt)("inlineCode",{parentName:"p"},"$method=entityset")," no final do seu pedido REST:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},'GET  /rest/People/?$filter="ID>320"&$method=entityset')),(0,n.kt)("p",null,"Pode criar um conjunto de entidades que ser\xe1 armazenado na cache do 4D Server por apenas dez minutos, passando um novo timeout para ",(0,n.kt)("inlineCode",{parentName:"p"},"$timeout"),":"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},'GET  /rest/People/?$filter="ID>320"&$method=entityset&$timeout=600')),(0,n.kt)("p",null,"Tamb\xe9m \xe9 poss\xedvel guardar o filtro e ordenar por, passando true para ",(0,n.kt)("inlineCode",{parentName:"p"},"$savedfilter")," e ",(0,n.kt)("inlineCode",{parentName:"p"},"$savedorderby"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"$skip")," e ",(0,n.kt)("inlineCode",{parentName:"p"},"$top/$limit")," n\xe3o s\xe3o tidos em considera\xe7\xe3o quando se guarda um conjunto de entidades.")),(0,n.kt)("p",null,"Ap\xf3s criar um conjunto de entidades, o primeiro elemento, ",(0,n.kt)("inlineCode",{parentName:"p"},"__ENTITYSET"),", \xe9 adicionado ao objeto devolvido e indica o URI a utilizar para aceder ao conjunto de entidades:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-json"}),'__ENTITYSET: "http://127.0.0.1:8081/rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7"`\n')),(0,n.kt)("h2",o({},{id:"methodrelease"}),"$method=release"),(0,n.kt)("p",null,"Libera um conjunto de entidades existente armazenado no cache do 4D Server."),(0,n.kt)("h3",o({},{id:"descri\xe7\xe3o-2"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"Voc\xea pode liberar um conjunto de entidades, que voc\xea criou usando ",(0,n.kt)("a",o({parentName:"p"},{href:"#methodentityset"}),(0,n.kt)("inlineCode",{parentName:"a"},"$method=entityset")),", do cache de 4D Server."),(0,n.kt)("h3",o({},{id:"exemplo-2"}),"Exemplo"),(0,n.kt)("p",null,"Mostra um conjunto de entidades existente:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Employee/$entityset/4C51204DD8184B65AC7D79F09A077F24?$method=release")),(0,n.kt)("h4",o({},{id:"responsa"}),"Responsa:"),(0,n.kt)("p",null,"Se o pedido for bem sucedido, \xe9 devolvida a seguinte resposta:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-json"}),'{\n    "ok": true\n} If the entity set wasn\'t found, an error is returned:\n\n{\n    "__ERROR": [\n        {\n            "message": "Error code: 1802\\nEntitySet  \\"4C51204DD8184B65AC7D79F09A077F24\\" cannot be found\\ncomponent:  \'dbmg\'\\ntask 22, name: \'HTTP connection handler\'\\n",\n            "componentSignature": "dbmg",\n            "errCode": 1802\n        }\n    ]\n}\n')),(0,n.kt)("h2",o({},{id:"methodsubentityset"}),"$method=subentityset"),(0,n.kt)("p",null,"Cria um conjunto de entidades no cache do 4D Server baseado na cole\xe7\xe3o de entidades relacionadas definidas no pedido REST"),(0,n.kt)("h3",o({},{id:"descri\xe7\xe3o-3"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$method=subentityset")," permite-lhe ordenar os dados devolvidos pelo atributo relacional definido no pedido REST."),(0,n.kt)("p",null,"Para ordenar os dados, utilize a propriedade ",(0,n.kt)("inlineCode",{parentName:"p"},"$subOrderby"),". Para cada atributo, especifica a ordem como ASC (ou asc) para ordem ascendente e DESC (desc) para ordem descendente. Por defeito, os dados s\xe3o ordenados por ordem ascendente."),(0,n.kt)("p",null,"Se pretender especificar v\xe1rios atributos, pode delimit\xe1-los com uma v\xedrgula, \xb5, ",(0,n.kt)("inlineCode",{parentName:"p"},'$subOrderby="lastName desc, firstName asc"'),"."),(0,n.kt)("h3",o({},{id:"exemplo-3"}),"Exemplo"),(0,n.kt)("p",null,"Se pretender recuperar apenas as entidades relacionadas para uma entidade espec\xedfica, pode efetuar o seguinte pedido REST em que staff \xe9 o atributo de rela\xe7\xe3o na dataclass Company ligada \xe0 dataclass Employee:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"GET  /rest/Company(1)/staff?$expand=staff&$method=subentityset&$subOrderby=lastName ASC")),(0,n.kt)("h4",o({},{id:"responsa-1"}),"Responsa:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-json"}),'{\n\n    "__ENTITYSET": "/rest/Employee/$entityset/FF625844008E430B9862E5FD41C741AB",\n    "__entityModel": "Employee",\n    "__COUNT": 2,\n    "__SENT": 2,\n    "__FIRST": 0,\n    "__ENTITIES": [\n        {\n            "__KEY": "4",\n            "__STAMP": 1,\n            "ID": 4,\n            "firstName": "Linda",\n            "lastName": "Jones",\n            "birthday": "1970-10-05T14:23:00Z",\n            "employer": {\n                "__deferred": {\n                    "uri": "/rest/Company(1)",\n                    "__KEY": "1"\n                }\n            }\n        },\n        {\n            "__KEY": "1",\n            "__STAMP": 3,\n            "ID": 1,\n            "firstName": "John",\n            "lastName": "Smith",\n            "birthday": "1985-11-01T15:23:00Z",\n            "employer": {\n                "__deferred": {\n                    "uri": "/rest/Company(1)",\n                    "__KEY": "1"\n                }\n            }\n        }\n    ]\n\n}\n')),(0,n.kt)("h2",o({},{id:"methodupdate"}),"$method=update"),(0,n.kt)("p",null,"Actualiza e/ou cria uma ou mais entidades"),(0,n.kt)("h3",o({},{id:"descri\xe7\xe3o-4"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$method=update")," permite-lhe atualizar e/ou criar uma ou mais entidades num \xfanico ",(0,n.kt)("strong",{parentName:"p"},"POST"),". Se atualizar e/ou criar uma entidade, isso \xe9 feito num objeto em que cada propriedade \xe9 um atributo com o respetivo valor, ",(0,n.kt)("em",{parentName:"p"},"por exemplo"),", ",(0,n.kt)("inlineCode",{parentName:"p"},'{ lastName: "Smith" }'),". Se forem atualizadas e/ou criadas v\xe1rias entidades, \xe9 necess\xe1rio criar uma cole\xe7\xe3o de objetos."),(0,n.kt)("p",null,"Em qualquer caso, \xe9 necess\xe1rio definir os dados ",(0,n.kt)("strong",{parentName:"p"},"POST")," no corpo **** do pedido."),(0,n.kt)("p",null,"Para atualizar uma entidade, \xe9 necess\xe1rio passar os par\xe2metros ",(0,n.kt)("inlineCode",{parentName:"p"},"__KEY")," e ",(0,n.kt)("inlineCode",{parentName:"p"},"__STAMP")," no objeto, com quaisquer atributos modificados. Se ambos os par\xe2metros estiverem em falta, ser\xe1 adicionada uma entidade com os valores do objeto que enviar no corpo do seu ",(0,n.kt)("strong",{parentName:"p"},"POST"),"."),(0,n.kt)("p",null,"Os triggers s\xe3o executados imediatamente ao guardar a entidade no servidor. A resposta cont\xe9m todos os dados tal como existem no servidor."),(0,n.kt)("p",null,"Tamb\xe9m \xe9 poss\xedvel colocar estes pedidos para criar ou atualizar entidades numa transa\xe7\xe3o, chamando ",(0,n.kt)("inlineCode",{parentName:"p"},"$atomic/$atOnce"),". Se ocorrerem erros durante a valida\xe7\xe3o de dados, nenhuma das entidades \xe9 guardada. Pode tamb\xe9m utilizar ",(0,n.kt)("inlineCode",{parentName:"p"},"$method=validate")," para validar as entidades antes de as criar ou atualizar."),(0,n.kt)("p",null,"Se surgir um problema ao adicionar ou modificar uma entidade, ser-lhe-\xe1 enviado um erro com essa informa\xe7\xe3o."),(0,n.kt)("admonition",o({},{type:"note"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"As datas"),' devem ser expressas no formato YYYY-MM-DDTHH:MM:SSZ (por exemplo, "2010-10-05T23:00:00Z"). Se tiver selecionado a propriedade Apenas data para o seu atributo Data, o fuso hor\xe1rio e a hora (hora, minutos e segundos) ser\xe3o removidos. Neste caso, tamb\xe9m pode enviar a data no formato que lhe \xe9 devolvido dd!mm!yyyy (por exemplo, 05!10!2013).'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Booleanos")," s\xe3o true ou false."),(0,n.kt)("li",{parentName:"ul"},"Os ficheiros carregados utilizando ",(0,n.kt)("inlineCode",{parentName:"li"},"$upload")," podem ser aplicados a um atributo do tipo Imagem ou BLOB passando o objecto devolvido no seguinte formato ",(0,n.kt)("inlineCode",{parentName:"li"},'{"ID": "D507BC03E613487E9B4C2F6A0512FE50"}')))),(0,n.kt)("h3",o({},{id:"exemplo-4"}),"Exemplo"),(0,n.kt)("p",null,"Para atualizar uma entidade espec\xedfica, utilizar o seguinte URL:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"POST  /rest/Person/?$method=update")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Dados POST:")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-json"}),'{\n    __KEY: "340",\n    __STAMP: 2,\n    firstName: "Pete",\n    lastName: "Miller"\n}\n')),(0,n.kt)("p",null,"Os atributos firstName e lastName na entidade indicada acima ser\xe3o modificados, deixando todos os outros atributos (exceto os calculados com base nestes atributos) inalterados."),(0,n.kt)("p",null,"Se voc\xea quiser criar uma entidade, poder\xe1 enviar os atributos via POST usando este URL:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"POST  /rest/Person/?$method=update")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Dados POST:")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-json"}),'{ \n    firstName: "John",\n    lastName: "Smith"\n}\n')),(0,n.kt)("p",null,"Tamb\xe9m \xe9 poss\xedvel criar e atualizar v\xe1rias entidades em simult\xe2neo, utilizando o mesmo URL acima, passando v\xe1rios objetos num array para o POST:"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"POST  /rest/Person/?$method=update")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Dados POST:")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-json"}),'[{ \n    "__KEY": "309",\n    "__STAMP": 5,\n    "ID": "309",\n    "firstName": "Penelope",\n    "lastName": "Miller"\n}, { \n    "firstName": "Ann",\n    "lastName": "Jones"\n}]\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Responsa:")),(0,n.kt)("p",null,"Quando se adiciona ou modifica uma entidade, esta \xe9-lhe devolvida com os atributos modificados. Por exemplo, se criar o novo empregado acima, ser-lhe-\xe1 devolvido o seguinte:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-json"}),'{\n    "__KEY": "622", \n    "__STAMP": 1, \n    "uri": "http://127.0.0.1:8081/rest/Employee(622)", \n    "__TIMESTAMP": "!!2020-04-03!!",\n    "ID": 622, \n    "firstName": "John", \n    "firstName": "Smith"\n}\n')),(0,n.kt)("p",null,"Se, por exemplo, o carimbo n\xe3o estiver correto, \xe9 apresentado o seguinte erro:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-json"}),'{\n    "__STATUS": {\n        "status": 2,\n        "statusText": "Stamp has changed",\n        "success": false\n    },\n    "__KEY": "1",\n    "__STAMP": 12,\n    "__TIMESTAMP": "!!2020-03-31!!",\n    "ID": 1,\n    "firstname": "Denise",\n    "lastname": "O\'Peters",\n    "isWoman": true,\n    "numberOfKids": 1,\n    "addressID": 1,\n    "gender": true,\n    "imageAtt": {\n        "__deferred": {\n            "uri": "/rest/Persons(1)/imageAtt?$imageformat=best&$version=12&$expand=imageAtt",\n            "image": true\n        }\n    },\n    "extra": {\n        "num": 1,\n        "alpha": "I am 1"\n    },\n    "address": {\n        "__deferred": {\n            "uri": "/rest/Address(1)",\n            "__KEY": "1"\n        }\n    },\n    "__ERROR": [\n        {\n            "message": "Given stamp does not match current one for record# 0 of table Persons",\n            "componentSignature": "dbmg",\n            "errCode": 1263\n        },\n        {\n            "message": "Cannot save record 0 in table Persons of database remote_dataStore",\n            "componentSignature": "dbmg",\n            "errCode": 1046\n        },\n        {\n            "message": "The entity# 1 in the \\"Persons\\" dataclass cannot be saved",\n            "componentSignature": "dbmg",\n            "errCode": 1517\n        }\n    ]\n}{}\n\n')))}u.isMDXComponent=!0}}]);