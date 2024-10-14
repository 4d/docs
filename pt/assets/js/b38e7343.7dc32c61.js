"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57206],{879205:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var i=r(474848),n=r(28453);const t={id:"clientServer",title:"Gest\xe3o Cliente/Servidor"},s=void 0,a={id:"Desktop/clientServer",title:"Gest\xe3o Cliente/Servidor",description:"As aplica\xe7\xf5es 4D desktop podem ser utilizadas numa configura\xe7\xe3o Cliente/Servidor, quer como aplica\xe7\xf5es cliente/servidor fundidas, quer como projectos remotos.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Desktop/clientServer.md",sourceDirName:"Desktop",slug:"/Desktop/clientServer",permalink:"/docs/pt/19/Desktop/clientServer",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Desktop%2FclientServer.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"clientServer",title:"Gest\xe3o Cliente/Servidor"},sidebar:"docs",previous:{title:"$version",permalink:"/docs/pt/19/REST/version"},next:{title:"Sobre os formul\xe1rios 4D",permalink:"/docs/pt/19/FormEditor/forms"}},c={},d=[{value:"Abrir uma aplica\xe7\xe3o cliente/servidor fundida",id:"abrir-uma-aplica\xe7\xe3o-clienteservidor-fundida",level:2},{value:"Abrir um projecto remoto",id:"abrir-um-projecto-remoto",level:2},{value:"Atualizar ficheiros de projeto no servidor",id:"atualizar-ficheiros-de-projeto-no-servidor",level:3},{value:"Atualizar ficheiros de projeto em m\xe1quinas remotas",id:"atualizar-ficheiros-de-projeto-em-m\xe1quinas-remotas",level:3},{value:"Utiliza\xe7\xe3o de 4D e 4D Server na mesma m\xe1quina",id:"utiliza\xe7\xe3o-de-4d-e-4d-server-na-mesma-m\xe1quina",level:2}];function l(e){const o={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.p,{children:"As aplica\xe7\xf5es 4D desktop podem ser utilizadas numa configura\xe7\xe3o Cliente/Servidor, quer como aplica\xe7\xf5es cliente/servidor fundidas, quer como projectos remotos."}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.strong,{children:"merged client/server applications"})," are generated by the ",(0,i.jsx)(o.a,{href:"/docs/pt/19/Desktop/building#clientserver-page",children:"Build Application manager"}),". S\xe3o utilizados para implementa\xe7\xf5es de aplica\xe7\xf5es."]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:["Os ",(0,i.jsx)(o.strong,{children:"projectos remotos"})," s\xe3o ficheiros ",(0,i.jsx)(o.a,{href:"/docs/pt/19/Project/architecture",children:".4DProject"})," abertos pelo 4D Server e acedidos com 4D em modo remoto. O servidor envia uma vers\xe3o .4dz do projecto (",(0,i.jsx)(o.a,{href:"/docs/pt/19/Desktop/building#build-compiled-structure",children:"formato comprimido"}),") para o 4D remoto, assim os ficheiros de estrutura s\xe3o apenas de leitura. Esta configura\xe7\xe3o \xe9 normalmente utilizada para testar aplica\xe7\xf5es."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{src:r(253725).A+"",width:"581",height:"249"})}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsxs)(o.p,{children:["Connecting to a remote projet from the ",(0,i.jsx)(o.strong,{children:"same machine as 4D Server"})," allows modifying the project files. This ",(0,i.jsx)(o.a,{href:"#using-4d-and-4d-server-on-the-same-machine",children:"specific feature"})," allows to develop a client/server application in the same context as the deployment context."]}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"abrir-uma-aplica\xe7\xe3o-clienteservidor-fundida",children:"Abrir uma aplica\xe7\xe3o cliente/servidor fundida"}),"\n",(0,i.jsx)(o.p,{children:"A merged client/server application is customized and its starting is simplified:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Para iniciar a parte do servidor, o usu\xe1rio simplesmente clica duas vezes no aplicativo do servidor. The database does not need to be selected."}),"\n",(0,i.jsx)(o.li,{children:"Para iniciar a parte do cliente, o usu\xe1rio simplesmente clica duas vezes no aplicativo cliente, que se conecta diretamente ao aplicativo do servidor."}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["These principles are detailed in the ",(0,i.jsx)(o.a,{href:"/docs/pt/19/Desktop/building#what-is-a-clientserver-application",children:"Build Application"})," page."]}),"\n",(0,i.jsx)(o.h2,{id:"abrir-um-projecto-remoto",children:"Abrir um projecto remoto"}),"\n",(0,i.jsxs)(o.p,{children:["A primeira vez que se liga a um projecto 4D Server atrav\xe9s de um 4D remoto, normalmente utilizar\xe1 o di\xe1logo de liga\xe7\xe3o padr\xe3o. Thereafter, you will be able to connect directly using the ",(0,i.jsx)(o.strong,{children:"Open Recent Projects"})," menu or a 4DLink shortcut file."]}),"\n",(0,i.jsx)(o.p,{children:"Para conectar remotamente a um projeto 4D Server:"}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsxs)(o.li,{children:["Select ",(0,i.jsx)(o.strong,{children:"Connect to 4D Server"})," in the Welcome Wizard dialog, OR Select ",(0,i.jsx)(o.strong,{children:"Open/Remote Project..."})," from the ",(0,i.jsx)(o.strong,{children:"File"})," menu or the ",(0,i.jsx)(o.strong,{children:"Open"})," toolbar button."]}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["Aparece o di\xe1logo de liga\xe7\xe3o do 4D Server. This dialog has three tabs: ",(0,i.jsx)(o.strong,{children:"Recent"}),", ",(0,i.jsx)(o.strong,{children:"Available"}),", and ",(0,i.jsx)(o.strong,{children:"Custom"}),"."]}),"\n",(0,i.jsxs)(o.p,{children:["If 4D Server is connected to the same network as the remote 4D, select ",(0,i.jsx)(o.strong,{children:"Available"}),". 4D Server includes a built-in TCP/IP broadcasting system that, by default, publishes the name of the 4D Server projects available over the network. A lista \xe9 classificada por ordem de aparecimento e atualizada dinamicamente."]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{src:r(913047).A+"",width:"522",height:"482"})}),"\n",(0,i.jsxs)(o.p,{children:["To connect to a server from the list, double-click on its name or select it and click the ",(0,i.jsx)(o.strong,{children:"OK"})," button."]}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsx)(o.p,{children:"A circumflex accent (^) is placed before the name of projects published with the encryption option enabled."}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["If the published project is not displayed in the ",(0,i.jsx)(o.strong,{children:"Available"})," list, select ",(0,i.jsx)(o.strong,{children:"Custom"}),". The Custom page allows you to connect to a published server on the network using its network address and assigning it a customized name."]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{src:r(187397).A+"",width:"522",height:"482"})}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Project name"}),": Defines the local name of the 4D Server project. This name will be used in the ",(0,i.jsx)(o.strong,{children:"Recent"})," page when referring to the project."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Network address"}),": The IP address of the machine where the 4D Server was launched. If two servers are executed simultaneously on the same machine, the IP address must be followed by a colon and port number, for example: ",(0,i.jsx)(o.code,{children:"192.168.92.104:19814"}),". Por padr\xe3o, a porta de publica\xe7\xe3o de um 4D Server \xe9 19813. Este n\xfamero pode ser modificado nas defini\xe7\xf5es do Projecto."]}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["Once this page assigns a server, clicking the ",(0,i.jsx)(o.strong,{children:"OK"})," button will allow you to connect to the server."]}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsx)(o.p,{children:"If the project is published with the encryption option enabled, you must add a circumflex accent (^) before the name, otherwise the connection will be refused. For more information, refer to the Encrypting Client/Server Connections section."}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["Once a connection to the server has been established, the remote project will be listed on the ",(0,i.jsx)(o.strong,{children:"Recent"})," tab."]}),"\n",(0,i.jsx)(o.h3,{id:"atualizar-ficheiros-de-projeto-no-servidor",children:"Atualizar ficheiros de projeto no servidor"}),"\n",(0,i.jsxs)(o.p,{children:["4D Server automatically creates and sends the remote machines a ",(0,i.jsx)(o.a,{href:"/docs/pt/19/Desktop/building#build-compiled-structure",children:".4dz version"})," of the ",(0,i.jsx)(o.em,{children:".4DProject"})," project file (not compressed) in interpreted mode."]}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["An updated .4dz version of the project is automatically produced when necessary, ",(0,i.jsx)(o.em,{children:"i.e."})," when the project has been modified and reloaded by 4D Server. O projecto \xe9 recarregado:\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"automatically, when the 4D Server application window comes to the front of the OS or when the 4D application on the same machine saves a modification (see below)."}),"\n",(0,i.jsxs)(o.li,{children:["quando o comando ",(0,i.jsx)(o.code,{children:"RELOAD PROJECT"})," \xe9 executado. Calling this command is necessary for example when you have pulled a new version of the project from the source control platform."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(o.h3,{id:"atualizar-ficheiros-de-projeto-em-m\xe1quinas-remotas",children:"Atualizar ficheiros de projeto em m\xe1quinas remotas"}),"\n",(0,i.jsx)(o.p,{children:"When an updated .4dz version of the project has been produced on 4D Server, connected remote 4D machines must log out and reconnect to 4D Server in order to benefit from the updated version."}),"\n",(0,i.jsx)(o.h2,{id:"utiliza\xe7\xe3o-de-4d-e-4d-server-na-mesma-m\xe1quina",children:"Utiliza\xe7\xe3o de 4D e 4D Server na mesma m\xe1quina"}),"\n",(0,i.jsx)(o.p,{children:"When 4D connects to a 4D Server on the same machine, the application behaves as 4D in single user mode and the design environment allows you to edit project files. This feature allows you to develop a client/server application in the same context as the deployment context."}),"\n",(0,i.jsxs)(o.p,{children:["Each time 4D performs a ",(0,i.jsx)(o.strong,{children:"Save all"})," action from the design environment (explicitly from ",(0,i.jsx)(o.strong,{children:"File"})," menu or implicitly by switching to application mode for example), 4D Server synchronously reloads project files. 4D waits for 4D Server to finish reloading the project files before it continues."]}),"\n",(0,i.jsxs)(o.p,{children:["However, you need to pay attention to the following behavior differences compared to ",(0,i.jsx)(o.a,{href:"/docs/pt/19/Project/architecture",children:"standard project architecture"}),":"]}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:'the userPreferences.{username} folder used by 4D is not the same folder used by 4D Server in the project folder. Instead, it is a dedicated folder, named "userPreferences", stored in the project system folder (i.e., the same location as when opening a .4dz project).'}),"\n",(0,i.jsx)(o.li,{children:'the folder used by 4D for derived data is not the folder named "DerivedData" in the project folder. Instead it is a dedicated folder named "DerivedDataRemote" located in the project system folder.'}),"\n",(0,i.jsx)(o.li,{children:"o ficheiro catalog.4DCatalog n\xe3o \xe9 editado por 4D, mas pelo 4D Server. As informa\xe7\xf5es do cat\xe1logo s\xe3o sincronizadas atrav\xe9s de pedidos cliente/servidor"}),"\n",(0,i.jsx)(o.li,{children:"o ficheiro directory.json n\xe3o \xe9 editado por 4D, mas pelo 4D Server. As informa\xe7\xf5es do diret\xf3rio s\xe3o sincronizadas atrav\xe9s de pedidos cliente/servidor"}),"\n",(0,i.jsx)(o.li,{children:"4D utiliza os seus pr\xf3prios componentes internos e plug-ins em vez dos do 4D Server."}),"\n"]}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsx)(o.p,{children:"N\xe3o \xe9 recomendado instalar plug-ins ou componentes no n\xedvel da aplica\xe7\xe3o 4D, ou 4D Server."}),"\n"]})]})}function h(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},253725:(e,o,r)=>{r.d(o,{A:()=>i});const i=r.p+"assets/images/localremote-5c33fe5479db4c271ef3a6dabde98395.png"},913047:(e,o,r)=>{r.d(o,{A:()=>i});const i=r.p+"assets/images/serverConnect-cb74aeff8307fbc27a084e5c6ec84144.png"},187397:(e,o,r)=>{r.d(o,{A:()=>i});const i=r.p+"assets/images/serverConnect2-9dc60df13672f8189273aec3efcab19d.png"},28453:(e,o,r)=>{r.d(o,{R:()=>s,x:()=>a});var i=r(296540);const n={},t=i.createContext(n);function s(e){const o=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(t.Provider,{value:o},e.children)}}}]);