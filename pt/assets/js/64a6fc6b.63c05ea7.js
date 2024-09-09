/*! For license information please see 64a6fc6b.63c05ea7.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44153],{974204:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>n,metadata:()=>t,toc:()=>c});var s=r(474848),i=r(28453);const n={id:"clientServer",title:"Gest\xe3o Cliente/Servidor"},a=void 0,t={id:"Desktop/clientServer",title:"Gest\xe3o Cliente/Servidor",description:"As aplica\xe7\xf5es 4D desktop podem ser utilizadas numa configura\xe7\xe3o Cliente/Servidor, quer como aplica\xe7\xf5es cliente/servidor fundidas, quer como projectos remotos.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/Desktop/clientServer.md",sourceDirName:"Desktop",slug:"/Desktop/clientServer",permalink:"/docs/pt/Desktop/clientServer",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Desktop%2FclientServer.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"clientServer",title:"Gest\xe3o Cliente/Servidor"},sidebar:"docs",previous:{title:"Desktop Applications",permalink:"/docs/pt/category/desktop-applications"},next:{title:"Access Rights",permalink:"/docs/pt/category/access-rights"}},d={},c=[{value:"Abrir uma aplica\xe7\xe3o cliente/servidor fundida",id:"abrir-uma-aplica\xe7\xe3o-clienteservidor-fundida",level:2},{value:"Abrir um projecto remoto",id:"abrir-um-projecto-remoto",level:2},{value:"Atualizar ficheiros de projeto no servidor",id:"atualizar-ficheiros-de-projeto-no-servidor",level:3},{value:"Atualizar ficheiros de projeto em m\xe1quinas remotas",id:"atualizar-ficheiros-de-projeto-em-m\xe1quinas-remotas",level:3},{value:"Utiliza\xe7\xe3o de 4D e 4D Server na mesma m\xe1quina",id:"utiliza\xe7\xe3o-de-4d-e-4d-server-na-mesma-m\xe1quina",level:2},{value:"Sess\xf5es de usu\xe1rio remoto",id:"sess\xf5es-de-usu\xe1rio-remoto",level:2},{value:"Utiliza\xe7\xe3o",id:"utiliza\xe7\xe3o",level:3},{value:"Disponibilidade",id:"disponibilidade",level:3},{value:"Ver tamb\xe9m (post do blog)",id:"ver-tamb\xe9m-post-do-blog",level:3}];function l(e){const o={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.p,{children:"As aplica\xe7\xf5es 4D desktop podem ser utilizadas numa configura\xe7\xe3o Cliente/Servidor, quer como aplica\xe7\xf5es cliente/servidor fundidas, quer como projectos remotos."}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:["Os ",(0,s.jsx)(o.strong,{children:"aplicativos cliente/servidor mesclados"})," s\xe3o gerados pelo [Gerenciador de aplicativos de compila\xe7\xe3o] (building.md#clientserver-page). S\xe3o utilizados para implementa\xe7\xf5es de aplica\xe7\xf5es."]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Projetos remotos"})," s\xe3o arquivos [.4DProject] (Project/architecture.md) abertos pelo 4D Server e acessados com o 4D em modo remoto. O servidor envia uma vers\xe3o .4dz do projeto (",(0,s.jsx)(o.a,{href:"/docs/pt/Desktop/building#build-compiled-structure",children:"formato comprimido"}),") para o 4D remoto, assim os arquivos de estrutura s\xe3o apenas de leitura. Esta configura\xe7\xe3o \xe9 normalmente utilizada para testar aplica\xe7\xf5es."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:r(925860).A+"",width:"581",height:"249"})}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsxs)(o.p,{children:["Conectar a um projeto remoto da ",(0,s.jsx)(o.strong,{children:"mesma m\xe1quina que o 4D Server"})," permite modificar os arquivos do projeto. Esta ",(0,s.jsx)(o.a,{href:"#using-4d-and-4d-server-on-the-same-machine",children:"funcionalidade espec\xedfica"})," permite desenvolver uma aplica\xe7\xe3o cliente/servidor no mesmo contexto do contexto de implanta\xe7\xe3o."]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"abrir-uma-aplica\xe7\xe3o-clienteservidor-fundida",children:"Abrir uma aplica\xe7\xe3o cliente/servidor fundida"}),"\n",(0,s.jsx)(o.p,{children:"A merged client/server application is customized and its starting is simplified:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Para iniciar a parte do servidor, o usu\xe1rio simplesmente clica duas vezes no aplicativo do servidor. The database does not need to be selected."}),"\n",(0,s.jsx)(o.li,{children:"Para iniciar a parte do cliente, o usu\xe1rio simplesmente clica duas vezes no aplicativo cliente, que se conecta diretamente ao aplicativo do servidor."}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["Esses princ\xedpios s\xe3o detalhados na p\xe1gina ",(0,s.jsx)(o.a,{href:"/docs/pt/Desktop/building#what-is-a-clientserver-application",children:"Criar Aplicativo"}),"."]}),"\n",(0,s.jsx)(o.h2,{id:"abrir-um-projecto-remoto",children:"Abrir um projecto remoto"}),"\n",(0,s.jsxs)(o.p,{children:["A primeira vez que se liga a um projecto 4D Server atrav\xe9s de um 4D remoto, normalmente utilizar\xe1 o di\xe1logo de liga\xe7\xe3o padr\xe3o. Em seguida, voc\xea poder\xe1 se conectar diretamente usando o menu ",(0,s.jsx)(o.strong,{children:"Abrir Projetos Recentes"})," ou um arquivo de atalho 4DLink."]}),"\n",(0,s.jsx)(o.p,{children:"Para conectar remotamente a um projeto 4D Server:"}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:["Fa\xe7a uma das seguintes op\xe7\xf5es:\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["Selecione ",(0,s.jsx)(o.strong,{children:"Conectar ao 4D Server"})," no di\xe1logo Assistente de Boas Vindas"]}),"\n",(0,s.jsxs)(o.li,{children:["Selecione ",(0,s.jsx)(o.strong,{children:"Abrir/Projeto Remoto..."})," no menu ",(0,s.jsx)(o.strong,{children:"Arquivo"})," ou no bot\xe3o de ferramentas ",(0,s.jsx)(o.strong,{children:"Abrir"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["Aparece o di\xe1logo de liga\xe7\xe3o do 4D Server. Este di\xe1logo possui tr\xeas guias: ",(0,s.jsx)(o.strong,{children:"Recente"}),", ",(0,s.jsx)(o.strong,{children:"Dispon\xedvel"})," e ",(0,s.jsx)(o.strong,{children:"Personalizado"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Se o 4D Server estiver conectado \xe0 mesma sub-rede que o 4D remoto, selecione ",(0,s.jsx)(o.strong,{children:"Dispon\xedvel"}),". O servidor 4D inclui um sistema de transmiss\xe3o integrado que, por padr\xe3o, publica o nome dos projetos 4D Server dispon\xedveis na rede. A lista \xe9 classificada por ordem de aparecimento e atualizada dinamicamente."]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:r(718746).A+"",width:"522",height:"482"})}),"\n",(0,s.jsxs)(o.p,{children:["Para conectar a um servidor da lista, clique duas vezes no seu nome ou selecione-o e clique no bot\xe3o ",(0,s.jsx)(o.strong,{children:"OK"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Se o projeto publicado n\xe3o for exibido na lista ",(0,s.jsx)(o.strong,{children:"Dispon\xedvel"}),", selecione ",(0,s.jsx)(o.strong,{children:"Personalizado"}),". The Custom page allows you to connect to a published server on the network using its network address and assigning it a customized name."]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:r(505540).A+"",width:"522",height:"482"})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Nome do projeto"}),": Define o nome local do projeto no servidor 4D. Este nome ser\xe1 usado na p\xe1gina ",(0,s.jsx)(o.strong,{children:"Recente"})," quando referente ao projeto."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Endere\xe7o de rede"}),": O endere\xe7o IP da m\xe1quina onde o 4D Server foi lan\xe7ado.\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["Se dois servidores forem executados simultaneamente na mesma m\xe1quina, o endere\xe7o IP deve ser seguido por dois pontos e o n\xfamero da porta, por exemplo: ",(0,s.jsx)(o.code,{children:"192.168.92.104:19814"}),"."]}),"\n",(0,s.jsx)(o.li,{children:"Por padr\xe3o, a porta de publica\xe7\xe3o de um 4D Server \xe9 19813. Este n\xfamero pode ser modificado nas defini\xe7\xf5es do Projecto."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsxs)(o.p,{children:["A op\xe7\xe3o ",(0,s.jsx)(o.strong,{children:"Ativar modo de desenvolvimento"})," abre a conex\xe3o remota em um modo especial de leitura/escrita e requer acessar a pasta do projeto a partir do 4D remoto (op\xe7\xe3o de compatibilidade)."]}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["Uma vez que esta p\xe1gina atribui um servidor, ao clicar no bot\xe3o ",(0,s.jsx)(o.strong,{children:"OK"}),", voc\xea poder\xe1 se conectar ao servidor."]}),"\n",(0,s.jsxs)(o.p,{children:["Uma vez que a conex\xe3o com o servidor tenha sido estabelecida, o projeto remoto ser\xe1 listado na guia ",(0,s.jsx)(o.strong,{children:"Recentes"}),"."]}),"\n",(0,s.jsx)(o.h3,{id:"atualizar-ficheiros-de-projeto-no-servidor",children:"Atualizar ficheiros de projeto no servidor"}),"\n",(0,s.jsxs)(o.p,{children:["O 4D Server cria e envia automaticamente para as m\xe1quinas remotas uma vers\xe3o ",(0,s.jsx)(o.a,{href:"/docs/pt/Desktop/building#build-compiled-structure",children:".4dz"})," do arquivo de projeto ",(0,s.jsx)(o.em,{children:".4DProject"})," (n\xe3o compactado) em modo interpretado."]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["Uma vers\xe3o .4dz atualizada do projeto \xe9 automaticamente produzida quando necess\xe1rio, ",(0,s.jsx)(o.em,{children:"ou seja"}),", quando o projeto foi modificado e recarregado pelo 4D Server. O projecto \xe9 recarregado:\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"automatically, when the 4D Server application window comes to the front of the OS or when the 4D application on the same machine saves a modification (see below)."}),"\n",(0,s.jsxs)(o.li,{children:["quando o comando ",(0,s.jsx)(o.code,{children:"RELOAD PROJECT"})," \xe9 executado. Calling this command is necessary for example when you have pulled a new version of the project from the source control platform."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(o.h3,{id:"atualizar-ficheiros-de-projeto-em-m\xe1quinas-remotas",children:"Atualizar ficheiros de projeto em m\xe1quinas remotas"}),"\n",(0,s.jsx)(o.p,{children:"When an updated .4dz version of the project has been produced on 4D Server, connected remote 4D machines must log out and reconnect to 4D Server in order to benefit from the updated version."}),"\n",(0,s.jsx)(o.h2,{id:"utiliza\xe7\xe3o-de-4d-e-4d-server-na-mesma-m\xe1quina",children:"Utiliza\xe7\xe3o de 4D e 4D Server na mesma m\xe1quina"}),"\n",(0,s.jsx)(o.p,{children:"When 4D connects to a 4D Server on the same machine, the application behaves as 4D in single user mode and the design environment allows you to edit project files. This feature allows you to develop a client/server application in the same context as the deployment context."}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsxs)(o.p,{children:["Quando o 4D se conecta a um 4D Server na mesma m\xe1quina, o ",(0,s.jsx)(o.strong,{children:"modo de desenvolvimento"})," \xe9 ativado automaticamente, independentemente do status da ",(0,s.jsx)(o.a,{href:"#opening-a-remote-project",children:"op\xe7\xe3o de abertura"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["Cada vez que o 4D realiza uma a\xe7\xe3o ",(0,s.jsx)(o.strong,{children:"Salvar tudo"})," no ambiente de design (explicitamente no menu ",(0,s.jsx)(o.strong,{children:"Arquivo"})," ou implicitamente ao alternar para o modo de aplicativo, por exemplo), o 4D Server recarrega sincronizadamente os arquivos do projeto. 4D waits for 4D Server to finish reloading the project files before it continues."]}),"\n",(0,s.jsxs)(o.p,{children:["No entanto, voc\xea precisa prestar aten\xe7\xe3o \xe0s seguintes diferen\xe7as de comportamento em compara\xe7\xe3o com ",(0,s.jsx)(o.a,{href:"/docs/pt/Project/architecture",children:"a arquitetura padr\xe3o do projeto"}),":"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:'the userPreferences.{username} folder used by 4D is not the same folder used by 4D Server in the project folder. Instead, it is a dedicated folder, named "userPreferences", stored in the project system folder (i.e., the same location as when opening a .4dz project).'}),"\n",(0,s.jsx)(o.li,{children:'the folder used by 4D for derived data is not the folder named "DerivedData" in the project folder. Instead it is a dedicated folder named "DerivedDataRemote" located in the project system folder.'}),"\n",(0,s.jsx)(o.li,{children:"o ficheiro catalog.4DCatalog n\xe3o \xe9 editado por 4D, mas pelo 4D Server. As informa\xe7\xf5es do cat\xe1logo s\xe3o sincronizadas atrav\xe9s de pedidos cliente/servidor"}),"\n",(0,s.jsx)(o.li,{children:"o ficheiro directory.json n\xe3o \xe9 editado por 4D, mas pelo 4D Server. As informa\xe7\xf5es do diret\xf3rio s\xe3o sincronizadas atrav\xe9s de pedidos cliente/servidor"}),"\n",(0,s.jsx)(o.li,{children:"4D utiliza os seus pr\xf3prios componentes internos e plug-ins em vez dos do 4D Server."}),"\n"]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"N\xe3o \xe9 recomendado instalar plug-ins ou componentes no n\xedvel da aplica\xe7\xe3o 4D, ou 4D Server."}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"sess\xf5es-de-usu\xe1rio-remoto",children:"Sess\xf5es de usu\xe1rio remoto"}),"\n",(0,s.jsxs)(o.p,{children:["No servidor, o comando ",(0,s.jsx)(o.a,{href:"/docs/pt/API/SessionClass#session",children:(0,s.jsx)(o.code,{children:"Session"})})," retorna um objeto ",(0,s.jsx)(o.code,{children:"session"})," descrevendo a sess\xe3o atual do usu\xe1rio. Este objeto \xe9 tratado atrav\xe9s das fun\xe7\xf5es e propriedades da ",(0,s.jsxs)(o.a,{href:"/docs/pt/API/SessionClass",children:["classe ",(0,s.jsx)(o.code,{children:"sess\xe3o"})]}),"."]}),"\n",(0,s.jsx)(o.h3,{id:"utiliza\xe7\xe3o",children:"Utiliza\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["O objeto ",(0,s.jsx)(o.code,{children:"sess\xe3o"})," permite que voc\xea obtenha informa\xe7\xf5es sobre a sess\xe3o remota do usu\xe1rio. Voc\xea pode compartilhar dados entre todos os processos da sess\xe3o do usu\xe1rio usando o objeto compartilhado ",(0,s.jsx)(o.a,{href:"/docs/pt/API/SessionClass#storage",children:(0,s.jsx)(o.code,{children:"session.storage"})}),"."]}),"\n",(0,s.jsx)(o.p,{children:"Por exemplo, voc\xea pode iniciar um procedimento de autentica\xe7\xe3o e verifica\xe7\xe3o do usu\xe1rio quando um cliente se conecta ao servidor, envolvendo a inser\xe7\xe3o de um c\xf3digo enviado por e-mail ou SMS no aplicativo. Em seguida, voc\xea adiciona as informa\xe7\xf5es do usu\xe1rio ao armazenamento de sess\xe3o, permitindo que o servidor identifique o usu\xe1rio. Dessa forma, o servidor 4D pode acessar as informa\xe7\xf5es do usu\xe1rio para todos os processos do cliente, permitindo a escrita de c\xf3digo personalizado de acordo com o papel do usu\xe1rio."}),"\n",(0,s.jsx)(o.h3,{id:"disponibilidade",children:"Disponibilidade"}),"\n",(0,s.jsxs)(o.p,{children:["O objeto ",(0,s.jsx)(o.code,{children:"session"})," do usu\xe1rio remoto est\xe1 dispon\xedvel em:"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["M\xe9todos de projeto que t\xeam o atributo ",(0,s.jsx)(o.a,{href:"/docs/pt/Project/code-overview#execute-on-server",children:"Execute on Server"}),' (s\xe3o executados no processo "geminado" do processo do cliente),']}),"\n",(0,s.jsx)(o.li,{children:"Triggers,"}),"\n",(0,s.jsx)(o.li,{children:"'Conex\xe3o aberta com o servidor' e 'Conex\xe3o com o servidor' m\xe9todos de banco de dados."}),"\n"]}),"\n",(0,s.jsx)(o.admonition,{type:"info",children:(0,s.jsxs)(o.p,{children:["Todos os procedimentos armazenados no servidor compartilham a mesma sess\xe3o do usu\xe1rio virtual. Para obter mais informa\xe7\xf5es, consulte ",(0,s.jsx)(o.a,{href:"https://doc.4d.com/4Dv20R5/4D/20-R5/4D-Server-and-the-4D-Language.300-6932726.en.html",children:"esta p\xe1gina em doc.4d.com"}),"."]})}),"\n",(0,s.jsx)(o.h3,{id:"ver-tamb\xe9m-post-do-blog",children:"Ver tamb\xe9m (post do blog)"}),"\n",(0,s.jsxs)(o.p,{children:["[Objeto de sess\xe3o remota 4D com conex\xe3o de Cliente/Servidor e procedimento armazenado](",(0,s.jsx)(o.a,{href:"https://blog.4d.com/new-4D-remote-session-object-with-client-server-connection-and-stored-procedure",children:"https://blog.4d.com/new-4D-remote-session-object-with-client-server-connection-and-stored-procedure"})," re)."]})]})}function m(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,o,r)=>{var s=r(296540),i=Symbol.for("react.element"),n=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,t=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,o,r){var s,n={},c=null,l=null;for(s in void 0!==r&&(c=""+r),void 0!==o.key&&(c=""+o.key),void 0!==o.ref&&(l=o.ref),o)a.call(o,s)&&!d.hasOwnProperty(s)&&(n[s]=o[s]);if(e&&e.defaultProps)for(s in o=e.defaultProps)void 0===n[s]&&(n[s]=o[s]);return{$$typeof:i,type:e,key:c,ref:l,props:n,_owner:t.current}}o.Fragment=n,o.jsx=c,o.jsxs=c},474848:(e,o,r)=>{e.exports=r(221020)},505540:(e,o,r)=>{r.d(o,{A:()=>s});const s=r.p+"assets/images/serverConnect2-9dc60df13672f8189273aec3efcab19d.png"},925860:(e,o,r)=>{r.d(o,{A:()=>s});const s=r.p+"assets/images/localremote-5c33fe5479db4c271ef3a6dabde98395.png"},718746:(e,o,r)=>{r.d(o,{A:()=>s});const s=r.p+"assets/images/serverConnect-cb74aeff8307fbc27a084e5c6ec84144.png"},28453:(e,o,r)=>{r.d(o,{R:()=>a,x:()=>t});var s=r(296540);const i={},n=s.createContext(i);function a(e){const o=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(n.Provider,{value:o},e.children)}}}]);