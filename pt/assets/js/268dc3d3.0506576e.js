"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54797],{603905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>u});var o=t(667294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,o,s=function(e,a){if(null==e)return{};var t,o,s={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var d=o.createContext({}),l=function(e){var a=o.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},m=function(e){var a=l(e.components);return o.createElement(d.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},c=o.forwardRef((function(e,a){var t=e.components,s=e.mdxType,n=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=l(t),u=s,k=c["".concat(d,".").concat(u)]||c[u]||p[u]||n;return t?o.createElement(k,r(r({ref:a},m),{},{components:t})):o.createElement(k,r({ref:a},m))}));function u(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var n=t.length,r=new Array(n);r[0]=c;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var l=2;l<n;l++)r[l]=t[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},857283:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>m});t(667294);var o=t(603905);function s(){return s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s.apply(this,arguments)}function n(e,a){if(null==e)return{};var t,o,s=function(e,a){if(null==e)return{};var t,o,s={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}const r={id:"datastores",title:"Utilizar um datastore remoto"},i=void 0,d={unversionedId:"ORDA/datastores",id:"version-20/ORDA/datastores",title:"Utilizar um datastore remoto",description:"Um datastore exposto em uma aplica\xe7\xe3o 4D pode ser acessado simultaneamente atrav\xe9s de diferentes clientes:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/ORDA/remoteDatastores.md",sourceDirName:"ORDA",slug:"/ORDA/datastores",permalink:"/docs/pt/20/ORDA/datastores",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2FremoteDatastores.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"datastores",title:"Utilizar um datastore remoto"},sidebar:"docs",previous:{title:"Trabalhar com dados",permalink:"/docs/pt/20/ORDA/entities"},next:{title:"Privil\xe9gios",permalink:"/docs/pt/20/ORDA/privileges"}},l={},m=[{value:"Abertura de sess\xf5es",id:"abertura-de-sess\xf5es",level:2},{value:"Visionamento de sess\xf5es",id:"visionamento-de-sess\xf5es",level:3},{value:"Bloqueio e transac\xe7\xf5es",id:"bloqueio-e-transac\xe7\xf5es",level:3},{value:"Fechamento das sess\xf5es",id:"fechamento-das-sess\xf5es",level:3},{value:"Otimiza\xe7\xe3o cliente/servidor",id:"otimiza\xe7\xe3o-clienteservidor",level:2},{value:"Contexto",id:"contexto",level:3},{value:"Exemplo",id:"exemplo",level:4},{value:"Reutilizar a propriedade context",id:"reutilizar-a-propriedade-context",level:4},{value:"List box baseado em uma sele\xe7\xe3o de entidades",id:"list-box-baseado-em-uma-sele\xe7\xe3o-de-entidades",level:4},{value:"Pr\xe9-configura\xe7\xe3o de contextos",id:"pr\xe9-configura\xe7\xe3o-de-contextos",level:4},{value:"Cache ORDA",id:"cache-orda",level:3}],p={toc:m};function c(e){var{components:a}=e,r=n(e,["components"]);return(0,o.kt)("wrapper",s({},p,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Um ",(0,o.kt)("a",s({parentName:"p"},{href:"/docs/pt/20/ORDA/dsmapping#datastore"}),"datastore")," exposto em uma aplica\xe7\xe3o 4D pode ser acessado simultaneamente atrav\xe9s de diferentes clientes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As aplica\xe7\xf5es 4D remotas usando ORDA para acessar o datastore principal com o comando ",(0,o.kt)("inlineCode",{parentName:"li"},"ds"),". Note que a aplica\xe7\xe3o 4D remota ainda pode acessar o banco de dados no modo cl\xe1ssico. Esses acessos s\xe3o tratados pelo ",(0,o.kt)("strong",{parentName:"li"},"servidor de aplica\xe7\xf5es 4D"),"."),(0,o.kt)("li",{parentName:"ul"},"Outras aplica\xe7\xf5es 4D (4D remote, 4D Server) abrindo uma sess\xe3o no banco de dados remoto atrav\xe9s do comando ",(0,o.kt)("a",s({parentName:"li"},{href:"/docs/pt/20/API/DataStoreClass#open-datastore"}),(0,o.kt)("inlineCode",{parentName:"a"},"Open datastore")),". Esses acessos s\xe3o transmitidos pelo servidor ",(0,o.kt)("strong",{parentName:"li"},"HTTP REST"),"."),(0,o.kt)("li",{parentName:"ul"},"4D for iOS queries for updating iOS applications. Esses acessos s\xe3o transmitidos pelo ",(0,o.kt)("strong",{parentName:"li"},"servidor HTTP"),".")),(0,o.kt)("h2",s({},{id:"abertura-de-sess\xf5es"}),"Abertura de sess\xf5es"),(0,o.kt)("p",null,"Quando voc\xea trabalha com um datastore remoto referenciado por chamadas para o comando ",(0,o.kt)("inlineCode",{parentName:"p"},"Open datastore"),", a conex\xe3o entre os processos solicitantes e o datastore remoto \xe9 tratada por sess\xf5es."),(0,o.kt)("p",null,"Uma sess\xe3o criada no datastore remoto para lidar com a conex\xe3o. Esta sess\xe3o \xe9 identificada usando um ID de sess\xe3o interno associado ao ",(0,o.kt)("inlineCode",{parentName:"p"},"localID")," no lado da aplica\xe7\xe3o 4D. Essa sess\xe3o gerencia automaticamente o acesso a dados, sele\xe7\xf5es de entidades ou entidades."),(0,o.kt)("p",null,"O ",(0,o.kt)("inlineCode",{parentName:"p"},"localID")," \xe9 local para a m\xe1quina que conecta ao datastore remoto, o que significa:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Se outros processos da mesma aplica\xe7\xe3o precisam acessar o mesmo datastore remoto, eles podem usar o mesmo ",(0,o.kt)("inlineCode",{parentName:"li"},"localID")," e, assim, compartilhar a mesma sess\xe3o."),(0,o.kt)("li",{parentName:"ul"},"Se outro processo da mesma aplica\xe7\xe3o abrir o mesmo datastore remoto, mas com outro ",(0,o.kt)("inlineCode",{parentName:"li"},"localID"),", ele criar\xe1 uma sess\xe3o no datastore remoto."),(0,o.kt)("li",{parentName:"ul"},"Se outra m\xe1quina se conectar ao mesmo datastore remoto com o mesmo ",(0,o.kt)("inlineCode",{parentName:"li"},"localID"),", ela criar\xe1 outra sess\xe3o com outro cookie.")),(0,o.kt)("p",null,"Estes princ\xedpios s\xe3o ilustrados nos gr\xe1ficos seguintes:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(403605).Z,width:"962",height:"719"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Para sess\xf5es abertas por solicita\xe7\xf5es REST, consulte ",(0,o.kt)("a",s({parentName:"p"},{href:"/docs/pt/20/REST/authUsers"}),"Usu\xe1rios e sess\xf5es"),".")),(0,o.kt)("h3",s({},{id:"visionamento-de-sess\xf5es"}),"Visionamento de sess\xf5es"),(0,o.kt)("p",null,"Os processos que gerenciam sess\xf5es para acesso ao armazenamento de dados s\xe3o mostrados na janela de administra\xe7\xe3o do 4D Server:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'nome: "REST Handler: \\<process name',">",'"'),(0,o.kt)("li",{parentName:"ul"},"type: type Worker Server HTTP"),(0,o.kt)("li",{parentName:"ul"},"session: session name is the user name passed to the Open datastore command.")),(0,o.kt)("p",null,"No exemplo a seguir, dois processos est\xe3o sendo executados na mesma sess\xe3o:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(71594).Z,width:"1402",height:"708"})),(0,o.kt)("h3",s({},{id:"bloqueio-e-transac\xe7\xf5es"}),"Bloqueio e transac\xe7\xf5es"),(0,o.kt)("p",null,"Os recursos do ORDA relacionados ao bloqueio de entidades e \xe0 transa\xe7\xe3o s\xe3o gerenciados no n\xedvel do processo em reposit\xf3rios de dados remotos, assim como no modo cliente/servidor do ORDA:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Se um processo bloqueia uma entidade de um reposit\xf3rio de dados remoto, a entidade \xe9 bloqueada para todos os outros processos, mesmo quando esses processos compartilham a mesma sess\xe3o (consulte ",(0,o.kt)("a",s({parentName:"li"},{href:"/docs/pt/20/ORDA/entities#entity-locking"}),"Bloqueio de entidades"),"). Se v\xe1rias entidades que apontam para um mesmo registro tiverem sido bloqueadas em um processo, todas elas dever\xe3o ser desbloqueadas no processo para remover o bloqueio. Se um bloqueio tiver sido colocado em uma entidade, o bloqueio ser\xe1 removido quando n\xe3o houver mais refer\xeancia a essa entidade na mem\xf3ria."),(0,o.kt)("li",{parentName:"ul"},"As transa\xe7\xf5es podem ser iniciadas, validadas ou canceladas separadamente em cada datastore remoto usando as fun\xe7\xf5es ",(0,o.kt)("inlineCode",{parentName:"li"},"dataStore.startTransaction()"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"dataStore.cancelTransaction()"),"e ",(0,o.kt)("inlineCode",{parentName:"li"},"dataStore.validateTransaction()")," . N\xe3o t\xeam impacto noutros datastores."),(0,o.kt)("li",{parentName:"ul"},"Os comandos cl\xe1ssicos da linguagem 4D (",(0,o.kt)("inlineCode",{parentName:"li"},"START TRANSACTION"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"VALIDATE TRANSACTION"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"CANCEL TRANSACTION"),") s\xf3 se aplicam ao datastore principal (retornado por ",(0,o.kt)("inlineCode",{parentName:"li"},"ds"),"). Se uma entidade de um datastore remoto \xe9 segurada por uma transa\xe7\xe3o em um processo, outros processos n\xe3o podem atualiz\xe1-lo, mesmo que esses processos compartilhem a mesma sess\xe3o."),(0,o.kt)("li",{parentName:"ul"},"Os bloqueios nas entidades s\xe3o removidos e as transa\xe7\xf5es s\xe3o anuladas:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"quando o processo \xe9 eliminado."),(0,o.kt)("li",{parentName:"ul"},"quando a sess\xe3o \xe9 encerrada no servidor"),(0,o.kt)("li",{parentName:"ul"},"quando a sess\xe3o \xe9 encerrada na janela de administra\xe7\xe3o do servidor.")))),(0,o.kt)("h3",s({},{id:"fechamento-das-sess\xf5es"}),"Fechamento das sess\xf5es"),(0,o.kt)("p",null,"Uma sess\xe3o \xe9 automaticamente encerrada por 4D quando n\xe3o h\xe1 atividade durante seu per\xedodo de tempo limite. O tempo limite padr\xe3o \xe9 de 60 minutos, mas esse valor pode ser modificado usando o par\xe2metro ",(0,o.kt)("em",{parentName:"p"},"connectionInfo")," do comando ",(0,o.kt)("inlineCode",{parentName:"p"},"Open datastore")," ."),(0,o.kt)("p",null,"Se uma solicita\xe7\xe3o for enviada ao reposit\xf3rio de dados remoto depois que a sess\xe3o tiver sido fechada, ela ser\xe1 recriada automaticamente, se poss\xedvel (licen\xe7a dispon\xedvel, servidor n\xe3o parado...). No entanto, lembre-se de que o contexto da sess\xe3o em rela\xe7\xe3o a bloqueios e transa\xe7\xf5es \xe9 perdido (veja acima)."),(0,o.kt)("h2",s({},{id:"otimiza\xe7\xe3o-clienteservidor"}),"Otimiza\xe7\xe3o cliente/servidor"),(0,o.kt)("p",null,"4D oferece otimiza\xe7\xf5es para solicita\xe7\xf5es ORDA que usam sele\xe7\xf5es de entidades ou carregam entidades em configura\xe7\xf5es de cliente/servidor (datastore acessado remotamente por meio de ",(0,o.kt)("inlineCode",{parentName:"p"},"ds")," ou via ",(0,o.kt)("inlineCode",{parentName:"p"},"Open datastore"),"). Essas otimiza\xe7\xf5es aceleram a execu\xe7\xe3o de seu aplicativo 4D ao reduzir drasticamente o volume de informa\xe7\xf5es transmitidas pela rede. Estes incluem:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"o ",(0,o.kt)("strong",{parentName:"li"},"contexto de otimiza\xe7\xe3o")),(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("strong",{parentName:"li"},"cache ORDA"))),(0,o.kt)("h3",s({},{id:"contexto"}),"Contexto"),(0,o.kt)("p",null,"O contexto de otimiza\xe7\xe3o \xe9 baseado nas seguintes implementa\xe7\xf5es:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Quando um cliente solicita uma sele\xe7\xe3o de entidade do servidor, 4D "aprende" automaticamente quais atributos da sele\xe7\xe3o de entidade s\xe3o realmente usados no lado do cliente durante a execu\xe7\xe3o do c\xf3digo e constr\xf3i um "contexto de otimiza\xe7\xe3o" correspondente. Esse contexto \xe9 anexado \xe0 sele\xe7\xe3o da entidade e armazena os atributos usados. Ser\xe1 atualizado dinamicamente se outros atributos forem usados depois. Os seguintes m\xe9todos e fun\xe7\xf5es accionam a fase de aprendizagem:'),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",s({parentName:"li"},{href:"/docs/pt/20/API/EntitySelectionClass#create-entity-selection"}),(0,o.kt)("inlineCode",{parentName:"a"},"Criar uma sele\xe7\xe3o de entidades (entity selection)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",s({parentName:"li"},{href:"/docs/pt/20/API/DataClassClass#fromcollection"}),(0,o.kt)("inlineCode",{parentName:"a"},"dataClass.fromCollection()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",s({parentName:"li"},{href:"/docs/pt/20/API/DataClassClass#all"}),(0,o.kt)("inlineCode",{parentName:"a"},"dataClass.all()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",s({parentName:"li"},{href:"/docs/pt/20/API/DataClassClass#get"}),(0,o.kt)("inlineCode",{parentName:"a"},"dataClass.get()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",s({parentName:"li"},{href:"/docs/pt/20/API/DataClassClass#query"}),(0,o.kt)("inlineCode",{parentName:"a"},"dataClass.query()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",s({parentName:"li"},{href:"/docs/pt/20/API/EntitySelectionClass#query"}),(0,o.kt)("inlineCode",{parentName:"a"},"entitySelection.query()"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"As solicita\xe7\xf5es subsequentes enviadas ao servidor sobre a mesma sele\xe7\xe3o de entidade reutilizam automaticamente o contexto de otimiza\xe7\xe3o e obt\xeam apenas os atributos necess\xe1rios do servidor, o que acelera o processamento. Por exemplo, em uma caixa de listagem baseada em sele\xe7\xe3o de entidade ",(0,o.kt)("a",s({parentName:"p"},{href:"#entity-selection-based-list-box"})),", a fase de aprendizado ocorre durante a exibi\xe7\xe3o da primeira linha. a visualiza\xe7\xe3o das linhas seguintes \xe9 optimizada. As fun\xe7\xf5es a seguir associam automaticamente o contexto de otimiza\xe7\xe3o da sele\xe7\xe3o da entidade de origem \xe0 sele\xe7\xe3o da entidade retornada:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",s({parentName:"li"},{href:"/docs/pt/20/API/EntitySelectionClass#and"}),(0,o.kt)("inlineCode",{parentName:"a"},"entitySelection.and()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",s({parentName:"li"},{href:"/docs/pt/20/API/EntitySelectionClass#minus"}),(0,o.kt)("inlineCode",{parentName:"a"},"entitySelection.minus()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",s({parentName:"li"},{href:"/docs/pt/20/API/EntitySelectionClass#or"}),(0,o.kt)("inlineCode",{parentName:"a"},"entitySelection.or()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",s({parentName:"li"},{href:"/docs/pt/20/API/EntitySelectionClass#orderBy"}),(0,o.kt)("inlineCode",{parentName:"a"},"entitySelection.orderBy()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",s({parentName:"li"},{href:"/docs/pt/20/API/EntitySelectionClass#slice"}),(0,o.kt)("inlineCode",{parentName:"a"},"entitySelection.slice()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",s({parentName:"li"},{href:"/docs/pt/20/API/EntitySelectionClass#drop"}),(0,o.kt)("inlineCode",{parentName:"a"},"entitySelection.drop()"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Um contexto de otimiza\xe7\xe3o existente pode ser passado como uma propriedade para outra sele\xe7\xe3o de entidade da mesma classe de dados, ignorando assim a fase de aprendizado e acelerando o aplicativo (consulte ",(0,o.kt)("a",s({parentName:"p"},{href:"#reusing-the-context-property"}),"Usando a propriedade de contexto")," abaixo).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Voc\xea pode criar contextos de otimiza\xe7\xe3o manualmente usando a fun\xe7\xe3o ",(0,o.kt)("a",s({parentName:"p"},{href:"/docs/pt/20/API/DataStoreClass#setremotecontextinfo"}),(0,o.kt)("inlineCode",{parentName:"a"},"dataStore.setRemoteContextInfo()"))," (consulte ",(0,o.kt)("a",s({parentName:"p"},{href:"#preconfiguring-contexts"}),"Preconfiguring contexts"),")."))),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(711982).Z,width:"3439",height:"2018"})),(0,o.kt)("admonition",s({},{title:"Nota de compatibilidade",type:"warning"}),(0,o.kt)("p",{parentName:"admonition"},"Os contextos tratados em conex\xf5es estabelecidas por meio do ",(0,o.kt)("a",s({parentName:"p"},{href:"/docs/pt/20/API/DataStoreClass#open-datastore"}),(0,o.kt)("inlineCode",{parentName:"a"},"Open datastore"))," s\xf3 podem ser usados entre vers\xf5es principais semelhantes de 4D. Por exemplo, um aplicativo remoto 4D v20.x s\xf3 pode usar contextos de um datastore 4D Server v20.x.")),(0,o.kt)("h4",s({},{id:"exemplo"}),"Exemplo"),(0,o.kt)("p",null,"Dado o seguinte c\xf3digo:"),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-4d"}),' $sel:=$ds. Employee.query("firstname = ab@")\n For each($e;$sel)\n    $s:=$e.firstname+" "+$e.lastname+" works for "+$e.employer.name // $e.employer refers to Company table\n End for each\n')),(0,o.kt)("p",null,"Gra\xe7as \xe0 otimiza\xe7\xe3o, essa solicita\xe7\xe3o s\xf3 obter\xe1 dados dos atributos usados (firstname, lastname, employer, employer.name) em ",(0,o.kt)("em",{parentName:"p"},"$sel")," a partir da segunda itera\xe7\xe3o do loop."),(0,o.kt)("h4",s({},{id:"reutilizar-a-propriedade-context"}),"Reutilizar a propriedade context"),(0,o.kt)("p",null,"Voc\xea pode aumentar os benef\xedcios da otimiza\xe7\xe3o usando a propriedade ",(0,o.kt)("strong",{parentName:"p"},"context"),' . Essa propriedade faz refer\xeancia a um contexto de otimiza\xe7\xe3o "aprendido" para uma sele\xe7\xe3o de entidade. Ele pode ser passado como par\xe2metro para fun\xe7\xf5es ORDA que retornam novas sele\xe7\xf5es de entidades, de modo que as sele\xe7\xf5es de entidades solicitem diretamente os atributos usados ao servidor e ignorem a fase de aprendizado.'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Voc\xea tamb\xe9m pode criar contextos usando a fun\xe7\xe3o ",(0,o.kt)("a",s({parentName:"p"},{href:"/docs/pt/20/API/DataStoreClass#setremotecontextinfo"}),(0,o.kt)("inlineCode",{parentName:"a"},".setRemoteContextInfo()")),".")),(0,o.kt)("p",null,"A mesma propriedade de contexto de otimiza\xe7\xe3o pode ser passada para um n\xfamero ilimitado de sele\xe7\xf5es de entidades na mesma classe de dados. Todas as fun\xe7\xf5es ORDA que lidam com sele\xe7\xf5es de entidades suportam a propriedade ",(0,o.kt)("strong",{parentName:"p"},"context")," (por exemplo, ",(0,o.kt)("a",s({parentName:"p"},{href:"/docs/pt/20/API/DataClassClass#query"}),(0,o.kt)("inlineCode",{parentName:"a"},"dataClass.query()"))," ou ",(0,o.kt)("a",s({parentName:"p"},{href:"/docs/pt/20/API/DataClassClass#all"}),(0,o.kt)("inlineCode",{parentName:"a"},"dataClass.all()")),"). No entanto, lembre-se de que um contexto \xe9 atualizado automaticamente quando novos atributos s\xe3o usados em outras partes do c\xf3digo. A reutiliza\xe7\xe3o do mesmo contexto em c\xf3digos diferentes pode resultar em sobrecarga do contexto e, portanto, reduzir sua efici\xeancia."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Um mecanismo semelhante \xe9 implementado para entidades que s\xe3o carregadas, de modo que somente os atributos usados s\xe3o solicitados (consulte a fun\xe7\xe3o ",(0,o.kt)("a",s({parentName:"p"},{href:"/docs/pt/20/API/DataClassClass#get"}),(0,o.kt)("inlineCode",{parentName:"a"},"dataClass.get()")),").")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Exemplo com ",(0,o.kt)("inlineCode",{parentName:"strong"},"dataClass.query()"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-4d"}),' var $sel1; $sel2; $sel3; $sel4; $querysettings; $querysettings2 : Object\n var $data : Collection\n $querysettings:=New object("context";"shortList")\n $querysettings2:=New object("context";"longList")\n\n $sel1:=ds. Employee.query("lastname = S@";$querysettings)\n $data:=extractData($sel1) // In extractData method an optimization is triggered   \n // and associated to context "shortList"\n\n $sel2:=ds. Employee.query("lastname = Sm@";$querysettings)\n $data:=extractData($sel2) // In extractData method the optimization associated   \n // to context "shortList" is applied\n\n $sel3:=ds. Employee.query("lastname = Smith";$querysettings2)\n $data:=extractDetailedData($sel3) // In extractDetailedData method an optimization  \n // is triggered and associated to context "longList"\n\n $sel4:=ds. Employee.query("lastname = Brown";$querysettings2)\n $data:=extractDetailedData($sel4) // In extractDetailedData method the optimization  \n // associated to context "longList" is applied\n')),(0,o.kt)("h4",s({},{id:"list-box-baseado-em-uma-sele\xe7\xe3o-de-entidades"}),"List box baseado em uma sele\xe7\xe3o de entidades"),(0,o.kt)("p",null,"A otimiza\xe7\xe3o da sele\xe7\xe3o de entidades \xe9 aplicada automaticamente a caixas de listagem baseadas em sele\xe7\xe3o de entidades em configura\xe7\xf5es de cliente/servidor, ao exibir e rolar o conte\xfado de uma caixa de listagem: somente os atributos exibidos na caixa de listagem s\xe3o solicitados ao servidor."),(0,o.kt)("p",null,'Um contexto "modo de p\xe1gina" espec\xedfico tamb\xe9m \xe9 fornecido ao carregar a entidade atual atrav\xe9s do item ',(0,o.kt)("strong",{parentName:"p"},"Atual")," express\xe3o de propriedade da caixa de lista (consulte ",(0,o.kt)("a",s({parentName:"p"},{href:"/docs/pt/20/FormObjects/listboxOverview#list-box-types"}),"cole\xe7\xe3o ou caixas de lista de tipos de sele\xe7\xe3o de entidade"),'). Esse recurso permite que voc\xea n\xe3o sobrecarregue o contexto inicial da caixa de lista neste caso, especialmente se a "p\xe1gina" solicitar atributos adicionais. Observe que somente o uso da express\xe3o ',(0,o.kt)("strong",{parentName:"p"},"Current item")," criar\xe1/usar\xe1 o contexto da p\xe1gina (o acesso por meio de ",(0,o.kt)("inlineCode",{parentName:"p"},"entitySelection\\[index]")," alterar\xe1 o contexto de sele\xe7\xe3o da entidade)."),(0,o.kt)("p",null,"As solicita\xe7\xf5es subsequentes ao servidor enviadas pelas fun\xe7\xf5es de navega\xe7\xe3o da entidade tamb\xe9m dar\xe3o suporte a essa otimiza\xe7\xe3o. As fun\xe7\xf5es a seguir associam automaticamente o contexto de otimiza\xe7\xe3o da entidade de origem \xe0 entidade retornada:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",s({parentName:"li"},{href:"/docs/pt/20/API/EntityClass#next"}),(0,o.kt)("inlineCode",{parentName:"a"},"entity.next()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",s({parentName:"li"},{href:"/docs/pt/20/API/EntityClass#first"}),(0,o.kt)("inlineCode",{parentName:"a"},"entity.first()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",s({parentName:"li"},{href:"/docs/pt/20/API/EntityClass#last"}),(0,o.kt)("inlineCode",{parentName:"a"},"entity.last()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",s({parentName:"li"},{href:"/docs/pt/20/API/EntityClass#previous"}),(0,o.kt)("inlineCode",{parentName:"a"},"entity.previous()")))),(0,o.kt)("p",null,"Por exemplo, o c\xf3digo a seguir carrega a entidade selecionada e permite a navega\xe7\xe3o na sele\xe7\xe3o da entidade. As entidades s\xe3o carregadas em um contexto separado e o contexto inicial da caixa de listagem n\xe3o \xe9 alterado:"),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-4d"})," $myEntity:=Form.currentElement //express\xe3o do item atual\n  //... fazer algo\n $myEntity:=$myEntity.next() //carrega a pr\xf3xima entidade usando o mesmo contexto\n")),(0,o.kt)("h4",s({},{id:"pr\xe9-configura\xe7\xe3o-de-contextos"}),"Pr\xe9-configura\xe7\xe3o de contextos"),(0,o.kt)("p",null,"Um contexto de otimiza\xe7\xe3o deve ser definido para cada recurso ou algoritmo do seu aplicativo, a fim de obter os melhores desempenhos. Por exemplo, um contexto pode ser usado para consultas sobre clientes, outro contexto para consultas sobre produtos, etc."),(0,o.kt)("p",null,"Se quiser fornecer aplicativos finais com o mais alto n\xedvel de otimiza\xe7\xe3o, voc\xea pode pr\xe9-configurar seus contextos e, assim, economizar fases de aprendizado, seguindo estas etapas:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Projete seus algoritmos."),(0,o.kt)("li",{parentName:"ol"},"Execute seu aplicativo e deixe que o mecanismo de aprendizado autom\xe1tico preencha os contextos de otimiza\xe7\xe3o."),(0,o.kt)("li",{parentName:"ol"},"Chame a fun\xe7\xe3o ",(0,o.kt)("a",s({parentName:"li"},{href:"/docs/pt/20/API/DataStoreClass#getremotecontextinfo"}),(0,o.kt)("inlineCode",{parentName:"a"},"dataStore.getRemoteContextInfo()"))," ou ",(0,o.kt)("a",s({parentName:"li"},{href:"/docs/pt/20/API/DataStoreClass#getallremotecontexts"}),(0,o.kt)("inlineCode",{parentName:"a"},"dataStore.getAllRemoteContexts()"))," para coletar contextos. Voc\xea pode usar as fun\xe7\xf5es ",(0,o.kt)("a",s({parentName:"li"},{href:"/docs/pt/20/API/EntitySelectionClass#getremotecontextattributes"}),(0,o.kt)("inlineCode",{parentName:"a"},"entitySelection.getRemoteContextAttributes()"))," e ",(0,o.kt)("a",s({parentName:"li"},{href:"/docs/pt/20/API/EntityClass#getremotecontextattributes"}),(0,o.kt)("inlineCode",{parentName:"a"},"entity.getRemoteContextAttributes()"))," para analisar como seus algoritmos usam atributos."),(0,o.kt)("li",{parentName:"ol"},"Na etapa final, chame ",(0,o.kt)("a",s({parentName:"li"},{href:"/docs/pt/20/API/DataStoreClass#setremotecontextinfo"}),(0,o.kt)("inlineCode",{parentName:"a"},"dataStore. etRemoteContextInfo()"))," fun\xe7\xe3o para criar contextos na inicializa\xe7\xe3o do aplicativo e ",(0,o.kt)("a",s({parentName:"li"},{href:"#reusing-the-context-property"}),"us\xe1-los")," em seus algoritmos.")),(0,o.kt)("h3",s({},{id:"cache-orda"}),"Cache ORDA"),(0,o.kt)("p",null,"Por motivos de otimiza\xe7\xe3o, os dados solicitados do servidor por meio do ORDA s\xe3o carregados no cache remoto do ORDA (que \xe9 diferente do cache 4D). O cache do ORDA \xe9 organizado por classe de dados e expira ap\xf3s 30 segundos."),(0,o.kt)("p",null,"Os dados contidos no cache s\xe3o considerados expirados quando o tempo limite \xe9 atingido. Qualquer acesso a dados expirados enviar\xe1 um pedido ao servidor. Os dados expirados permanecem na cache at\xe9 que seja necess\xe1rio espa\xe7o."),(0,o.kt)("p",null,"Por padr\xe3o, o cache ORDA \xe9 tratado de forma transparente pelo 4D. No entanto, voc\xea pode controlar seu conte\xfado usando as seguintes fun\xe7\xf5es da classe ORDA:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",s({parentName:"li"},{href:"/docs/pt/20/API/DataClassClass#setremotecachesettings"}),"dataClass.setRemoteCacheSettings()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",s({parentName:"li"},{href:"/docs/pt/20/API/DataClassClass#getremotecache"}),"dataClass.getRemoteCache()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",s({parentName:"li"},{href:"/docs/pt/20/API/DataClassClass#clearremotecache"}),"dataClass.clearRemoteCache()"))))}c.isMDXComponent=!0},711982:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/cs-optimization-process-0810df7e186eabd072bc04a037744fb1.png"},71594:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/sessionAdmin-fb7129cb6aaab939e9e8b20cb43bce8f.png"},403605:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/sessions-69775ca2d11bfdbc289284efe41c0b59.png"}}]);