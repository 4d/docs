"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21833"],{427692:function(e,o,r){r.r(o),r.d(o,{default:()=>u,frontMatter:()=>s,metadata:()=>a,assets:()=>t,toc:()=>c,contentTitle:()=>d});var a=JSON.parse('{"id":"Desktop/clientServer","title":"Gest\xe3o Cliente/Servidor","description":"As aplica\xe7\xf5es 4D desktop podem ser utilizadas numa configura\xe7\xe3o Cliente/Servidor, quer como aplica\xe7\xf5es cliente/servidor fundidas, quer como projectos remotos.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/Desktop/clientServer.md","sourceDirName":"Desktop","slug":"/Desktop/clientServer","permalink":"/docs/pt/20/Desktop/clientServer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Desktop%2FclientServer.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"clientServer","title":"Gest\xe3o Cliente/Servidor"},"sidebar":"docs","previous":{"title":"Desktop Applications","permalink":"/docs/pt/20/category/desktop-applications"},"next":{"title":"Access Rights","permalink":"/docs/pt/20/category/access-rights"}}'),i=r("785893"),n=r("250065");let s={id:"clientServer",title:"Gest\xe3o Cliente/Servidor"},d=void 0,t={},c=[{value:"Abrir uma aplica\xe7\xe3o cliente/servidor fundida",id:"abrir-uma-aplica\xe7\xe3o-clienteservidor-fundida",level:2},{value:"Abrir um projecto remoto",id:"abrir-um-projecto-remoto",level:2},{value:"Atualizando arquivos do projeto no servidor",id:"atualizando-arquivos-do-projeto-no-servidor",level:3},{value:"Atualizando arquivos do projeto em m\xe1quinas remotas",id:"atualizando-arquivos-do-projeto-em-m\xe1quinas-remotas",level:3},{value:"Utiliza\xe7\xe3o de 4D e 4D Server na mesma m\xe1quina",id:"utiliza\xe7\xe3o-de-4d-e-4d-server-na-mesma-m\xe1quina",level:2}];function l(e){let o={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.p,{children:"As aplica\xe7\xf5es 4D desktop podem ser utilizadas numa configura\xe7\xe3o Cliente/Servidor, quer como aplica\xe7\xf5es cliente/servidor fundidas, quer como projectos remotos."}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.strong,{children:"Os aplicativos cliente/servidor fusionados"})," s\xe3o gerados pelo ",(0,i.jsx)(o.a,{href:"/docs/pt/20/Desktop/building#clientserver-page",children:"gerenciador Build Application"}),". S\xe3o utilizados para implementa\xe7\xf5es de aplica\xe7\xf5es."]}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsxs)(o.p,{children:["Os ",(0,i.jsx)(o.strong,{children:"projectos remotos"})," s\xe3o arquivos ",(0,i.jsx)(o.a,{href:"/docs/pt/20/Project/architecture",children:".4DProject"})," abertos pelo 4D Server e acessados com 4D em modo remoto. O servidor envia uma vers\xe3o .4dz do projeto (",(0,i.jsx)(o.a,{href:"/docs/pt/20/Desktop/building#build-compiled-structure",children:"comprimido formato"}),") para a 4D remota, portanto arquivos de estrutura s\xe3o somente leitura. Esta configura\xe7\xe3o \xe9 normalmente utilizada para testar aplica\xe7\xf5es."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{src:r(924199).Z+"",width:"581",height:"249"})}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsxs)(o.p,{children:["Conectar a um projeto remoto da ",(0,i.jsx)(o.strong,{children:"mesma m\xe1quina que o 4D Server"})," permite modificar os arquivos do projeto. Esse ",(0,i.jsx)(o.a,{href:"#using-4d-and-4d-server-on-the-same-machine",children:"recurso espec\xedfico"})," permite desenvolver uma aplica\xe7\xe3o cliente/servidor no mesmo contexto que o contexto de implementa\xe7\xe3o."]}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"abrir-uma-aplica\xe7\xe3o-clienteservidor-fundida",children:"Abrir uma aplica\xe7\xe3o cliente/servidor fundida"}),"\n",(0,i.jsx)(o.p,{children:"Uma aplica\xe7\xe3o cliente/servidor mesclada \xe9 personalizada e seu in\xedcio \xe9 simplificado:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Para iniciar a parte do servidor, o usu\xe1rio simplesmente clica duas vezes no aplicativo do servidor. The database does not need to be selected."}),"\n",(0,i.jsx)(o.li,{children:"Para iniciar a parte do cliente, o usu\xe1rio simplesmente clica duas vezes no aplicativo cliente, que se conecta diretamente ao aplicativo do servidor."}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["Estes princ\xedpios s\xe3o detalhados na p\xe1gina ",(0,i.jsx)(o.a,{href:"/docs/pt/20/Desktop/building#what-is-a-clientserver-application",children:"Build Application"}),"."]}),"\n",(0,i.jsx)(o.h2,{id:"abrir-um-projecto-remoto",children:"Abrir um projecto remoto"}),"\n",(0,i.jsxs)(o.p,{children:["A primeira vez que se liga a um projecto 4D Server atrav\xe9s de um 4D remoto, normalmente utilizar\xe1 o di\xe1logo de liga\xe7\xe3o padr\xe3o. Depois disso, voc\xea poder\xe1 se conectar diretamente usando o menu ",(0,i.jsx)(o.strong,{children:"Abrir Projetos Recentes"})," ou um arquivo de atalho 4DLink."]}),"\n",(0,i.jsx)(o.p,{children:"Para conectar remotamente a um projeto 4D Server:"}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsxs)(o.li,{children:["Fa\xe7a uma das seguintes op\xe7\xf5es:\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["Selecione ",(0,i.jsx)(o.strong,{children:"Connect to 4D Server"})," na caixa de di\xe1logo Welcome Wizard (Assistente de boas-vindas)"]}),"\n",(0,i.jsxs)(o.li,{children:["Selecione ",(0,i.jsx)(o.strong,{children:"Abrir/Projeto remoto..."})," no menu ",(0,i.jsx)(o.strong,{children:"Arquivo"})," ou no bot\xe3o da barra de ferramentas ",(0,i.jsx)(o.strong,{children:"Abrir"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["Aparece o di\xe1logo de liga\xe7\xe3o do 4D Server. Esta caixa de di\xe1logo tem tr\xeas abas: ",(0,i.jsx)(o.strong,{children:"Recentes"}),", ",(0,i.jsx)(o.strong,{children:"Dispon\xedvel"}),"e ",(0,i.jsx)(o.strong,{children:"Personalizado"}),"."]}),"\n",(0,i.jsxs)(o.p,{children:["Se o Servidor 4D estiver conectado \xe0 mesma rede que a 4D remota, selecione ",(0,i.jsx)(o.strong,{children:"Dispon\xedvel"}),". O servidor 4D inclui um sistema interno de transmiss\xe3o TCP/IP que, por padr\xe3o, publica o nome dos projetos 4D Server dispon\xedveis na rede. A lista \xe9 classificada por ordem de aparecimento e atualizada dinamicamente."]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{src:r(780995).Z+"",width:"522",height:"482"})}),"\n",(0,i.jsxs)(o.p,{children:["Para conectar a um servidor a partir da lista, clique duas vezes no seu nome ou selecione-o e clique no bot\xe3o ",(0,i.jsx)(o.strong,{children:"OK"}),"."]}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsx)(o.p,{children:"Um acento circunflexo (^) \xe9 colocado antes do nome dos projetos publicados com a op\xe7\xe3o de criptografia ativada."}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["Se o projeto publicado n\xe3o for exibido na lista ",(0,i.jsx)(o.strong,{children:"Dispon\xedvel"})," , selecione ",(0,i.jsx)(o.strong,{children:"Personalizado"}),". A p\xe1gina personalizada permite que voc\xea se conecte a um servidor publicado na rede usando seu endere\xe7o de rede e atribuindo-lhe um nome personalizado."]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{src:r(714013).Z+"",width:"522",height:"482"})}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Nome do projeto"}),": Define o nome local do projeto no servidor 4D. Este nome ser\xe1 usado na p\xe1gina ",(0,i.jsx)(o.strong,{children:"Recentes"})," quando referente ao projeto."]}),"\n",(0,i.jsxs)(o.li,{children:["Endere\xe7o de rede ****: O endere\xe7o IP da m\xe1quina onde o servidor 4D foi iniciado.\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["Se dois servidores forem executados simultaneamente na mesma m\xe1quina, o endere\xe7o IP deve ser seguido por um dobro e n\xfamero da porta, por exemplo: ",(0,i.jsx)(o.code,{children:"192. 68.92.104:19814"}),"."]}),"\n",(0,i.jsx)(o.li,{children:"Por padr\xe3o, a porta de publica\xe7\xe3o de um 4D Server \xe9 19813. Este n\xfamero pode ser modificado nas defini\xe7\xf5es do Projecto."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsxs)(o.p,{children:["A op\xe7\xe3o ",(0,i.jsx)(o.strong,{children:"Ativar modo de desenvolvimento"})," abre a conex\xe3o remota em um modo especial de leitura/grava\xe7\xe3o e requer o acesso \xe0 pasta do projeto a partir do 4D remoto (op\xe7\xe3o de compatibilidade)."]}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["Quando essa p\xe1gina atribuir um servidor, clicar no bot\xe3o ",(0,i.jsx)(o.strong,{children:"OK"})," permitir\xe1 que voc\xea se conecte ao servidor."]}),"\n",(0,i.jsxs)(o.p,{children:["Uma vez que uma conex\xe3o com o servidor foi estabelecida, o projeto remoto ser\xe1 listado na guia ",(0,i.jsx)(o.strong,{children:"Recentes"}),"."]}),"\n",(0,i.jsx)(o.h3,{id:"atualizando-arquivos-do-projeto-no-servidor",children:"Atualizando arquivos do projeto no servidor"}),"\n",(0,i.jsxs)(o.p,{children:["O servidor 4D cria automaticamente e envia as m\xe1quinas remotas um ",(0,i.jsx)(o.a,{href:"/docs/pt/20/Desktop/building#build-compiled-structure",children:". dz version"})," do arquivo de projeto ",(0,i.jsx)(o.em,{children:".4DProject"})," (n\xe3o comprimido) no modo interpretado."]}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["Uma vers\xe3o .4dz atualizada do projeto \xe9 automaticamente produzida quando necess\xe1rio, ",(0,i.jsx)(o.em,{children:"i. ."})," quando o projeto for modificado e recarregado pelo Servidor 4D. O projeto foi recarregado:\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"automaticamente quando a janela de aplica\xe7\xe3o do Servidor 4D chega \xe0 frente do sistema operacional ou quando o aplicativo 4D na mesma m\xe1quina salva uma modifica\xe7\xe3o (veja abaixo)."}),"\n",(0,i.jsxs)(o.li,{children:["quando o comando ",(0,i.jsx)(o.code,{children:"RELOAD PROJET"})," for executado. Chamar este comando \xe9 necess\xe1rio, por exemplo, quando voc\xea puxou uma nova vers\xe3o do projeto a partir da plataforma de controle de origem."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(o.h3,{id:"atualizando-arquivos-do-projeto-em-m\xe1quinas-remotas",children:"Atualizando arquivos do projeto em m\xe1quinas remotas"}),"\n",(0,i.jsx)(o.p,{children:"Quando uma atualiza\xe7\xe3o . vers\xe3o dz do projeto foi produzida em 4D Server, m\xe1quinas remotas 4D conectadas devem sair e reconectar ao 4D Server para se beneficiar da vers\xe3o atualizada."}),"\n",(0,i.jsx)(o.h2,{id:"utiliza\xe7\xe3o-de-4d-e-4d-server-na-mesma-m\xe1quina",children:"Utiliza\xe7\xe3o de 4D e 4D Server na mesma m\xe1quina"}),"\n",(0,i.jsx)(o.p,{children:"Quando o 4D se conectar a um Servidor 4D na mesma m\xe1quina, a aplica\xe7\xe3o se comporta como 4D em modo de usu\xe1rio \xfanico e o ambiente de design permite que voc\xea edite os arquivos do projeto. Esse recurso permite que voc\xea desenvolva uma aplica\xe7\xe3o de cliente/servidor no mesmo contexto que o contexto de implanta\xe7\xe3o."}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsxs)(o.p,{children:["Quando o 4D se conectar a um 4D Server na mesma m\xe1quina, o ",(0,i.jsx)(o.strong,{children:"modo de desenvolvimento"})," ser\xe1 ativado automaticamente, independentemente do status ",(0,i.jsx)(o.a,{href:"#opening-a-remote-project",children:"da op\xe7\xe3o de abertura"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["Cada vez que o 4D executa uma a\xe7\xe3o ",(0,i.jsx)(o.strong,{children:"Salvar tudo"})," no ambiente de design (explicitamente no menu ",(0,i.jsx)(o.strong,{children:"Arquivo"})," ou implicitamente ao mudar para o modo de aplica\xe7\xe3o, por exemplo), o 4D Server recarrega sincronizadamente os arquivos de projeto. O 4D espera o servidor 4D terminar de recarregar os arquivos do projeto antes de continuar."]}),"\n",(0,i.jsxs)(o.p,{children:["No entanto, voc\xea precisa prestar aten\xe7\xe3o \xe0s seguintes diferen\xe7as de comportamento em compara\xe7\xe3o com a ",(0,i.jsx)(o.a,{href:"/docs/pt/20/Project/architecture",children:"arquitetura de projeto padr\xe3o"}),":"]}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:'the userPreferences.{username} folder used by 4D is not the same folder used by 4D Server in the project folder. Em vez disso, \xe9 uma pasta dedicada, denominada "userPreferences", armazenada na pasta do sistema do projeto (ou seja, o mesmo local em que se abre um projeto .4dz).'}),"\n",(0,i.jsx)(o.li,{children:'a pasta usada pelo 4D para dados derivados n\xe3o \xe9 a pasta chamada "DerivedData" na pasta do projeto. Em vez disso, \xe9 uma pasta dedicada chamada "DerivedDataRemote" localizada na pasta do sistema do projeto.'}),"\n",(0,i.jsx)(o.li,{children:"O arquivo catalog.4DCatalog n\xe3o \xe9 editado pela 4D, mas sim pelo 4D Server. As informa\xe7\xf5es do cat\xe1logo s\xe3o sincronizadas atrav\xe9s de pedidos cliente/servidor"}),"\n",(0,i.jsx)(o.li,{children:"o arquivo directory.json n\xe3o \xe9 editado por 4D, mas pelo servidor 4D. As informa\xe7\xf5es do diret\xf3rio s\xe3o sincronizadas atrav\xe9s de pedidos cliente/servidor"}),"\n",(0,i.jsx)(o.li,{children:"4D utiliza os seus pr\xf3prios componentes internos e plug-ins em vez dos do 4D Server."}),"\n"]}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsx)(o.p,{children:"N\xe3o \xe9 recomendado instalar plug-ins ou componentes no n\xedvel da aplica\xe7\xe3o 4D, ou 4D Server."}),"\n"]})]})}function u(e={}){let{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},714013:function(e,o,r){r.d(o,{Z:function(){return a}});let a=r.p+"assets/images/serverConnect2-9dc60df13672f8189273aec3efcab19d.png"},924199:function(e,o,r){r.d(o,{Z:function(){return a}});let a=r.p+"assets/images/localremote-5c33fe5479db4c271ef3a6dabde98395.png"},780995:function(e,o,r){r.d(o,{Z:function(){return a}});let a=r.p+"assets/images/serverConnect-cb74aeff8307fbc27a084e5c6ec84144.png"},250065:function(e,o,r){r.d(o,{Z:function(){return d},a:function(){return s}});var a=r(667294);let i={},n=a.createContext(i);function s(e){let o=a.useContext(n);return a.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(n.Provider,{value:o},e.children)}}}]);