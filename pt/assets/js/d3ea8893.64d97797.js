"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67708"],{72442:function(e,n,o){o.r(n),o.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"commands/open-datastore","title":"Open datastore","description":"Hist\xf3ria","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands/open-datastore.md","sourceDirName":"commands","slug":"/commands/open-datastore","permalink":"/docs/pt/commands/open-datastore","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fopen-datastore.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"open-datastore","title":"Open datastore","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OPEN DATABASE","permalink":"/docs/pt/commands/open-database"},"next":{"title":"OPEN RUNTIME EXPLORER","permalink":"/docs/pt/commands/open-runtime-explorer"}}'),t=o("785893"),r=o("250065");let d={id:"open-datastore",title:"Open datastore",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Exemplo 3",id:"exemplo-3",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Gest\xe3o de erros",id:"gest\xe3o-de-erros",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",admonition:"admonition",code:"code",details:"details",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"20 R6"}),(0,t.jsx)(n.td,{children:"Suporte ao acesso a inst\xe2ncias Qodly"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"20 R4"}),(0,t.jsxs)(n.td,{children:["Nova propriedade ",(0,t.jsx)(n.em,{children:"passwordAlgorithm"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"18"}),(0,t.jsx)(n.td,{children:"Adicionado"})]})]})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Open datastore"}),"( ",(0,t.jsx)(n.em,{children:"connectionInfo"})," : Object ; ",(0,t.jsx)(n.em,{children:"localID"})," : Text ) : cs.DataStore"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"connectionInfo"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Propriedades de conex\xe3o utilizadas para alcan\xe7ar o armaz\xe9m de datos remoto"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"localID"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Id para assignar ao armaz\xe9m de dados aberto na aplica\xe7\xe3o local (obrigatorio)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"cs. DataStore"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Objeto do armaz\xe9m de dados"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Open datastore"})," command connects the application to the remote datastore identified by the ",(0,t.jsx)(n.em,{children:"connectionInfo"})," parameter and returns a matching ",(0,t.jsx)(n.code,{children:"cs.DataStore"})," object associated with the ",(0,t.jsx)(n.em,{children:"localID"})," local alias."]}),"\n",(0,t.jsx)(n.p,{children:"Os seguintes datastores remotos s\xe3o compat\xedveis com o comando:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"tipo de datastore"}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Aplica\xe7\xe3o 4D remoto"}),(0,t.jsxs)(n.td,{children:["A 4D application available as a remote datastore, i.e.:",(0,t.jsx)(n.li,{children:"its web server is launched with http and/or https enabled,"}),(0,t.jsxs)(n.li,{children:["its datastore is exposed to REST (",(0,t.jsx)(n.a,{href:"/docs/pt/REST/configuration#starting-the-rest-server",children:(0,t.jsx)(n.strong,{children:"Expose as REST server"})})," option checked)."]}),"A license can be required (see note)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://developer.qodly.com/docs/cloud/getStarted",children:"Aplica\xe7\xe3o Qodly"})}),(0,t.jsxs)(n.td,{children:["Um aplicativo Qodly Server que forneceu a voc\xea um ",(0,t.jsx)(n.strong,{children:"api endpoint"})," e uma ",(0,t.jsx)(n.strong,{children:"api key"})," v\xe1lida associada a um cargo definido. You must pass the api key in the ",(0,t.jsx)(n.code,{children:"api-key"})," property of the ",(0,t.jsx)(n.em,{children:"connectionInfo"})," object. You can then work with the returned datastore object, with all privileges granted to the associated role."]})]})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Open datastore"})," requests rely on the 4D REST API and can require a 4D Client license to open the connection on a remote 4D Server. Consulte a se\xe7\xe3o ",(0,t.jsx)(n.a,{href:"/docs/pt/REST/authUsers#force-login-mode",children:"user login mode"})," para saber como configurar a autentica\xe7\xe3o dependendo do modo de login do usu\xe1rio atual selecionado."]})}),"\n",(0,t.jsxs)(n.p,{children:["Passe em connectionInfo um objeto que desceva o armaz\xe9m de dados remoto ao que quiser se conectar. Pode conter as propriedades abaixo (todas as propriedades s\xe3o opcionais menos ",(0,t.jsx)(n.em,{children:"hostname"}),"):"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propriedade"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Aplica\xe7\xe3o 4D remoto"}),(0,t.jsx)(n.th,{children:"Aplica\xe7\xe3o Qodly"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"hostname"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:'Nome ou endere\xe7o IP da database remota + ":" + n\xfamero de porta (o numero de porta \xe9 obrigat\xf3rio)'}),(0,t.jsx)(n.td,{children:"API Endpoint de inst\xe2ncia Qodly cloud"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"user"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Nome de usuario"}),(0,t.jsx)(n.td,{children:"- (ignorado)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"senha"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"senha de usuario"}),(0,t.jsx)(n.td,{children:"- (ignorado)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"idleTimeout"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsxs)(n.td,{children:["Tempo de espera da sess\xe3o de inatividade (em minutos) depois do qual a sess\xe3o \xe9 fechada automaticamente por 4D. Se omitido, o valor por defeito \xe9 60 (1h). O valor n\xe3o pode ser < 60 (se for passado um valor menor, o tempo limite ser\xe1 definido como 60). Para obter mais informa\xe7\xf5es, veja ",(0,t.jsx)(n.strong,{children:"Sess\xf5es de encerramento"}),"."]}),(0,t.jsx)(n.td,{children:"- (ignorado)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tls"}),(0,t.jsx)(n.td,{children:"Par\xe2metros"}),(0,t.jsx)(n.td,{children:"True para usar conex\xe3o segura(1). Se omitido, false por defeito. Se for omitido, o normal \xe9 falso Usar uma conex\xe3o segura \xe9 recomendado sempre que poss\xedvel."}),(0,t.jsx)(n.td,{children:"True para usar conex\xe3o segura. Se omitido, false por defeito"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"type"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:'deve ser "4D Server"'}),(0,t.jsx)(n.td,{children:"- (ignorado)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"api-key"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"- (ignorado)"}),(0,t.jsx)(n.td,{children:"API key da inst\xe2ncia Qodly cloud"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["(1) Se ",(0,t.jsx)(n.code,{children:"tls"})," for true, o protocolo HTTPS \xe9 utilizado se:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"HTTPS for ativado no armaz\xe9m de dados remoto"}),"\n",(0,t.jsx)(n.li,{children:"o n\xfamero de porto especificado coincide com o porto HTTPS configurado nos ajustes do banco de dados"}),"\n",(0,t.jsx)(n.li,{children:'a valid certificate and private encryption key are installed in the 4D application. Sen\xe3o \xe9 mostrado o erro "1610 - A remote request to host xxx has failed"'}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"localID"})," \xe9 um alias local para a sess\xe3o aberta no armazenamento de dados remoto. Se ",(0,t.jsx)(n.em,{children:"localID"})," j\xe1 existir no aplicativo, ele ser\xe1 usado. Caso contr\xe1rio, uma nova sess\xe3o ",(0,t.jsx)(n.em,{children:"localID"})," \xe9 criada quando o objeto de armazenamento de dados \xe9 usado."]}),"\n",(0,t.jsx)(n.p,{children:"Quando abrir a sess\xe3o, as senten\xe7as abaixo s\xe3o equivalentes e devolvem uma refer\xeancia sobre o mesmo objeto datastore:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' $myds:=Open datastore(connectionInfo;"myLocalId")\n $myds2:=ds("myLocalId")\n  //$myds e $myds2 s\xe3o equivalentes\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Objetos dispon\xedveis no ",(0,t.jsx)(n.code,{children:"cs.Datastore"})," s\xe3o mapeados em rela\xe7\xe3o \xe0s ",(0,t.jsx)(n.a,{href:"/docs/pt/ORDA/dsmapping#general-rules",children:"regras gerais ORDA"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Se n\xe3o for encontrado um datastore correspondente, ",(0,t.jsx)(n.code,{children:"Open datastore"})," retornar\xe1 ",(0,t.jsx)(n.strong,{children:"Null"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,t.jsx)(n.p,{children:"Conex\xe3o a uma datastore remota com usu\xe1rio/ senha/ timetou/ tls"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' var $connectTo : Object\n var $remoteDS : cs. DataStore\n $connectTo:=New object("type";"4D Server";"hostname";"192.168.18.11:8044")\n $remoteDS:=Open datastore($connectTo;"students")\n ALERT("This remote datastore contains "+String($remoteDS. Students.all().length)+" students")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,t.jsx)(n.p,{children:"Conex\xe3o a uma datastore remota sem usu\xe1rio ou senha:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' var $connectTo : Object\n var $remoteDS : cs. DataStore\n $connectTo:=New object("type";"4D Server";"hostname";\\"192.168.18.11:4443";\\  \n  "user";"marie";"password";$pwd;"idleTimeout";70;"tls";True)\n $remoteDS:=Open datastore($connectTo;"students")\n ALERT("This remote datastore contains "+String($remoteDS. Students.all().length)+" students")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,t.jsx)(n.p,{children:"Trabalhando com v\xe1rias datastores remotas:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' var $connectTo : Object\n var $frenchStudents; $foreignStudents : cs. DataStore\n $connectTo:=New object("hostname";"192.168.18.11:8044")\n $frenchStudents:=Open datastore($connectTo;"french")\n $connectTo.hostname:="192.168.18.11:8050"\n $foreignStudents:=Open datastore($connectTo;"foreign")\n ALERT("They are "+String($frenchStudents. Students.all().length)+" French students")\n ALERT("They are "+String($foreignStudents. Students.all().length)+" foreign students")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"Conex\xe3o com uma aplica\xe7\xe3o Qodly:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'var $connectTo : Object:={hostname: "https://xxx-x54xxx-xx-xxxxx-8xx5-xxxxxx.xx-api.cloud.com"; tls: True}\n\nvar $remoteDS : 4D.DataStoreImplementation\nvar $data : 4D.EntitySelection\n\n$connectTo["api-key"]:="fxxxx-xxxx-4xxx-txxx-xxxxxxxx0" //only for example purpose  \n  //it is recommended to store the API key in a secured place (e.g. a file)\n  //and to load it in the code\n\n$remoteDS:=Open datastore($connectTo; "remoteId")\n$data:=$remoteDS.item.all()\n\nALERT(String($data.length)+" items have been read")\n\n'})}),"\n",(0,t.jsx)(n.h2,{id:"gest\xe3o-de-erros",children:"Gest\xe3o de erros"}),"\n",(0,t.jsxs)(n.p,{children:["Em caso de erro, o comando retorna ",(0,t.jsx)(n.strong,{children:"Null"}),'. Se n\xe3o for poss\xedvel acessar o armazem de dados remotos (endere\xe7o incorreto, servidor web n\xe3o inciiado, http e https n\xe3o habilitados...), se produz o erro 1610 " Uma peti\xe7\xe3o remota ao host XXX falhou". Voc\xea pode interceptar esse erro com um m\xe9todo instalado por ',(0,t.jsx)(n.code,{children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/pt/commands/ds",children:"ds"})}),"\n",(0,t.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"1452"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifies variables"}),(0,t.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return d}});var s=o(667294);let t={},r=s.createContext(t);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);