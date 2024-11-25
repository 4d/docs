"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87196"],{67667:function(e,s,o){o.r(s),o.d(s,{metadata:()=>a,contentTitle:()=>i,default:()=>m,assets:()=>d,toc:()=>c,frontMatter:()=>t});var a=JSON.parse('{"id":"ORDA/datastores","title":"Utilizar um datastore remoto","description":"Um datastore exposto em uma aplica\xe7\xe3o 4D pode ser acessado simultaneamente atrav\xe9s de diferentes clientes:","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/ORDA/remoteDatastores.md","sourceDirName":"ORDA","slug":"/ORDA/datastores","permalink":"/docs/pt/19/ORDA/datastores","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2FremoteDatastores.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"datastores","title":"Utilizar um datastore remoto"},"sidebar":"docs","previous":{"title":"Trabalhar com dados","permalink":"/docs/pt/19/ORDA/entities"},"next":{"title":"Glossary","permalink":"/docs/pt/19/ORDA/glossary"}}'),n=o("785893"),r=o("250065");let t={id:"datastores",title:"Utilizar um datastore remoto"},i=void 0,d={},c=[{value:"Abertura de sess\xf5es",id:"abertura-de-sess\xf5es",level:2},{value:"Visionamento de sess\xf5es",id:"visionamento-de-sess\xf5es",level:2},{value:"Bloqueio e transac\xe7\xf5es",id:"bloqueio-e-transac\xe7\xf5es",level:2},{value:"Fechamento das sess\xf5es",id:"fechamento-das-sess\xf5es",level:2}];function l(e){let s={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["Um ",(0,n.jsx)(s.a,{href:"/docs/pt/19/ORDA/dsmapping#datastore",children:"datastore"})," exposto em uma aplica\xe7\xe3o 4D pode ser acessado simultaneamente atrav\xe9s de diferentes clientes:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["As aplica\xe7\xf5es 4D remotas usando ORDA para acessar o datastore principal com o comando ",(0,n.jsx)(s.code,{children:"ds"}),". Note que a aplica\xe7\xe3o 4D remota ainda pode acessar o banco de dados no modo cl\xe1ssico. Esses acessos s\xe3o tratados pelo ",(0,n.jsx)(s.strong,{children:"servidor de aplica\xe7\xf5es 4D"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Other 4D applications (4D remote, 4D Server) opening a session on the remote datastore through the ",(0,n.jsx)(s.code,{children:"Open datastore"})," command. Esses acessos s\xe3o transmitidos pelo servidor ",(0,n.jsx)(s.strong,{children:"HTTP REST"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["As peti\xe7\xf5es 4D for iOS para atualizar aplica\xe7\xf5es iOS. Esses acessos s\xe3o transmitidos pelo ",(0,n.jsx)(s.strong,{children:"servidor HTTP"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Quando voc\xea trabalha com um datastore remoto referenciado por chamadas para o comando ",(0,n.jsx)(s.code,{children:"Open datastore"}),", a conex\xe3o entre os processos solicitantes e o datastore remoto \xe9 tratada por sess\xf5es."]}),"\n",(0,n.jsx)(s.h2,{id:"abertura-de-sess\xf5es",children:"Abertura de sess\xf5es"}),"\n",(0,n.jsxs)(s.p,{children:["When a 4D application (",(0,n.jsx)(s.em,{children:"i.e."})," a process) opens an external datastore using the ",(0,n.jsx)(s.code,{children:"Open datastore"})," command, a session in created on the remote datastore to handle the connection. This session is identified using a internal session ID which is associated to the ",(0,n.jsx)(s.code,{children:"localID"})," on the 4D application. Essa sess\xe3o gerencia automaticamente o acesso a dados, sele\xe7\xf5es de entidades ou entidades."]}),"\n",(0,n.jsxs)(s.p,{children:["O ",(0,n.jsx)(s.code,{children:"localID"})," \xe9 local para a m\xe1quina que conecta ao datastore remoto, o que significa:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Se outros processos da mesma aplica\xe7\xe3o precisam acessar o mesmo datastore remoto, eles podem usar o mesmo ",(0,n.jsx)(s.code,{children:"localID"})," e, assim, compartilhar a mesma sess\xe3o."]}),"\n",(0,n.jsxs)(s.li,{children:["Se outro processo da mesma aplica\xe7\xe3o abrir o mesmo datastore remoto, mas com outro ",(0,n.jsx)(s.code,{children:"localID"}),", ele criar\xe1 uma sess\xe3o no datastore remoto."]}),"\n",(0,n.jsxs)(s.li,{children:["Se outra m\xe1quina se conectar ao mesmo datastore remoto com o mesmo ",(0,n.jsx)(s.code,{children:"localID"}),", ela criar\xe1 outra sess\xe3o com outro cookie."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Estes princ\xedpios s\xe3o ilustrados nos gr\xe1ficos seguintes:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:o(498340).Z+"",width:"962",height:"719"})}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["Para sess\xf5es abertas por solicita\xe7\xf5es REST, consulte ",(0,n.jsx)(s.a,{href:"/docs/pt/19/REST/authUsers",children:"Usu\xe1rios e sess\xf5es"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"visionamento-de-sess\xf5es",children:"Visionamento de sess\xf5es"}),"\n",(0,n.jsx)(s.p,{children:"Os processos que gerenciam sess\xf5es para acesso ao armazenamento de dados s\xe3o mostrados na janela de administra\xe7\xe3o do 4D Server:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:'nome: "REST Handler: <process name>"'}),"\n",(0,n.jsx)(s.li,{children:"type: type Worker Server HTTP"}),"\n",(0,n.jsx)(s.li,{children:"session: o nome da sess\xe3o \xe9 o nome de usu\xe1rio passado para o comando Open datastore."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"No exemplo a seguir, dois processos est\xe3o sendo executados na mesma sess\xe3o:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:o(969191).Z+"",width:"1402",height:"708"})}),"\n",(0,n.jsx)(s.h2,{id:"bloqueio-e-transac\xe7\xf5es",children:"Bloqueio e transac\xe7\xf5es"}),"\n",(0,n.jsx)(s.p,{children:"Os recursos do ORDA relacionados ao bloqueio de entidades e \xe0 transa\xe7\xe3o s\xe3o gerenciados no n\xedvel do processo em reposit\xf3rios de dados remotos, assim como no modo cliente/servidor do ORDA:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Se um processo bloqueia uma entidade de um reposit\xf3rio de dados remoto, a entidade \xe9 bloqueada para todos os outros processos, mesmo quando esses processos compartilham a mesma sess\xe3o (consulte ",(0,n.jsx)(s.a,{href:"/docs/pt/19/ORDA/entities#entity-locking",children:"Bloqueio de entidades"}),"). Se v\xe1rias entidades que apontam para um mesmo registro tiverem sido bloqueadas em um processo, todas elas dever\xe3o ser desbloqueadas no processo para remover o bloqueio. Se um bloqueio tiver sido colocado em uma entidade, o bloqueio ser\xe1 removido quando n\xe3o houver mais refer\xeancia a essa entidade na mem\xf3ria."]}),"\n",(0,n.jsxs)(s.li,{children:["As transa\xe7\xf5es podem ser iniciadas, validadas ou canceladas separadamente em cada datastore remoto usando as fun\xe7\xf5es ",(0,n.jsx)(s.code,{children:"dataStore.startTransaction()"}),", ",(0,n.jsx)(s.code,{children:"dataStore.cancelTransaction()"}),"e ",(0,n.jsx)(s.code,{children:"dataStore.validateTransaction()"})," . N\xe3o t\xeam impacto noutros datastores."]}),"\n",(0,n.jsxs)(s.li,{children:["Os comandos cl\xe1ssicos da linguagem 4D (",(0,n.jsx)(s.code,{children:"START TRANSACTION"}),", ",(0,n.jsx)(s.code,{children:"VALIDATE TRANSACTION"}),", ",(0,n.jsx)(s.code,{children:"CANCEL TRANSACTION"}),") s\xf3 se aplicam ao datastore principal (retornado por ",(0,n.jsx)(s.code,{children:"ds"}),"). Se uma entidade de um datastore remoto \xe9 segurada por uma transa\xe7\xe3o em um processo, outros processos n\xe3o podem atualiz\xe1-lo, mesmo que esses processos compartilhem a mesma sess\xe3o."]}),"\n",(0,n.jsxs)(s.li,{children:["Os bloqueios nas entidades s\xe3o removidos e as transa\xe7\xf5es s\xe3o anuladas:\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"quando o processo \xe9 eliminado."}),"\n",(0,n.jsx)(s.li,{children:"quando a sess\xe3o \xe9 encerrada no servidor"}),"\n",(0,n.jsx)(s.li,{children:"quando a sess\xe3o \xe9 encerrada na janela de administra\xe7\xe3o do servidor."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"fechamento-das-sess\xf5es",children:"Fechamento das sess\xf5es"}),"\n",(0,n.jsxs)(s.p,{children:["Uma sess\xe3o \xe9 automaticamente encerrada por 4D quando n\xe3o h\xe1 atividade durante seu per\xedodo de tempo limite. O tempo limite padr\xe3o \xe9 de 60 minutos, mas esse valor pode ser modificado usando o par\xe2metro ",(0,n.jsx)(s.code,{children:"connectionInfo"})," do comando ",(0,n.jsx)(s.code,{children:"Open datastore"})," ."]}),"\n",(0,n.jsx)(s.p,{children:"Se uma solicita\xe7\xe3o for enviada ao reposit\xf3rio de dados remoto depois que a sess\xe3o tiver sido fechada, ela ser\xe1 recriada automaticamente, se poss\xedvel (licen\xe7a dispon\xedvel, servidor n\xe3o parado...). No entanto, lembre-se de que o contexto da sess\xe3o em rela\xe7\xe3o a bloqueios e transa\xe7\xf5es \xe9 perdido (veja acima)."})]})}function m(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},969191:function(e,s,o){o.d(s,{Z:function(){return a}});let a=o.p+"assets/images/sessionAdmin-fb7129cb6aaab939e9e8b20cb43bce8f.png"},498340:function(e,s,o){o.d(s,{Z:function(){return a}});let a=o.p+"assets/images/sessions-69775ca2d11bfdbc289284efe41c0b59.png"},250065:function(e,s,o){o.d(s,{Z:function(){return i},a:function(){return t}});var a=o(667294);let n={},r=a.createContext(n);function t(e){let s=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);