"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["38096"],{897916:function(e,o,a){a.r(o),a.d(o,{default:()=>p,frontMatter:()=>s,metadata:()=>n,assets:()=>t,toc:()=>c,contentTitle:()=>d});var n=JSON.parse('{"id":"settings/client-server","title":"P\xe1gina Cliente/Servidor","description":"As p\xe1ginas Cliente-servidor agrupam par\xe2metros relacionados ao uso do banco de dados no modo cliente-servidor. Naturalmente, essas configura\xe7\xf5es s\xf3 s\xe3o levadas em conta quando o banco de dados \xe9 usado no modo remoto.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/settings/client-server.md","sourceDirName":"settings","slug":"/settings/client-server","permalink":"/docs/pt/settings/client-server","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20settings%2Fclient-server.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"client-server","title":"P\xe1gina Cliente/Servidor"},"sidebar":"docs","previous":{"title":"P\xe1gina Backup","permalink":"/docs/pt/settings/backup"},"next":{"title":"P\xe1gina da Web","permalink":"/docs/pt/settings/web"}}'),r=a("785893"),i=a("250065");let s={id:"client-server",title:"P\xe1gina Cliente/Servidor"},d=void 0,t={},c=[{value:"P\xe1gina Op\xe7\xf5es rede",id:"p\xe1gina-op\xe7\xf5es-rede",level:2},{value:"Rede",id:"rede",level:3},{value:"Publicar a base de dados no arranque",id:"publicar-a-base-de-dados-no-arranque",level:4},{value:"Nome da publica\xe7\xe3o",id:"nome-da-publica\xe7\xe3o",level:4},{value:"N\xfamero do porto",id:"n\xfamero-do-porto",level:4},{value:"4D Server e n\xfameros de portas",id:"4d-server-e-n\xfameros-de-portas",level:4},{value:"Autentica\xe7\xe3o do usu\xe1rio com o servidor de dom\xednio",id:"autentica\xe7\xe3o-do-usu\xe1rio-com-o-servidor-de-dom\xednio",level:4},{value:"Service Principal Name",id:"service-principal-name",level:4},{value:"Camada de rede",id:"camada-de-rede",level:4},{value:"Tempo para desconectar cliente-servidor",id:"tempo-para-desconectar-cliente-servidor",level:4},{value:"Comunica\xe7\xe3o cliente-servidor",id:"comunica\xe7\xe3o-cliente-servidor",level:3},{value:"Registrar clientes na inicializa\xe7\xe3o para Execute On Client",id:"registrar-clientes-na-inicializa\xe7\xe3o-para-execute-on-client",level:4},{value:"Encriptar as comunica\xe7\xf5es cliente-servidor",id:"encriptar-as-comunica\xe7\xf5es-cliente-servidor",level:4},{value:"Atualizar a pasta Resources durante uma sess\xe3o",id:"atualizar-a-pasta-resources-durante-uma-sess\xe3o",level:4},{value:"P\xe1gina Configura\xe7\xe3o IP",id:"p\xe1gina-configura\xe7\xe3o-ip",level:2},{value:"Tabela de configura\xe7\xe3o Autoriza\xe7\xe3o-Rejei\xe7\xe3o",id:"tabela-de-configura\xe7\xe3o-autoriza\xe7\xe3o-rejei\xe7\xe3o",level:3}];function l(e){let o={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.p,{children:"As p\xe1ginas Cliente-servidor agrupam par\xe2metros relacionados ao uso do banco de dados no modo cliente-servidor. Naturalmente, essas configura\xe7\xf5es s\xf3 s\xe3o levadas em conta quando o banco de dados \xe9 usado no modo remoto."}),"\n",(0,r.jsx)(o.h2,{id:"p\xe1gina-op\xe7\xf5es-rede",children:"P\xe1gina Op\xe7\xf5es rede"}),"\n",(0,r.jsx)(o.h3,{id:"rede",children:"Rede"}),"\n",(0,r.jsx)(o.h4,{id:"publicar-a-base-de-dados-no-arranque",children:"Publicar a base de dados no arranque"}),"\n",(0,r.jsx)(o.p,{children:"Essa op\xe7\xe3o permite que voc\xea indique se o banco de dados do 4D Server aparecer\xe1 ou n\xe3o na lista de bancos de dados publicados."}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["When this option is checked (default), the database is made public and appears in the list of published databases (",(0,r.jsx)(o.strong,{children:"Available"})," tab)."]}),"\n",(0,r.jsxs)(o.li,{children:["Quando a op\xe7\xe3o n\xe3o estiver marcada, o banco de dados n\xe3o ser\xe1 tornado p\xfablico e n\xe3o aparecer\xe1 na lista de bancos de dados publicados. To connect, users must manually enter the address of the database on the ",(0,r.jsx)(o.strong,{children:"Custom"})," tab of the connection dialog box."]}),"\n"]}),"\n",(0,r.jsx)(o.admonition,{type:"note",children:(0,r.jsx)(o.p,{children:"Se voc\xea modificar esse par\xe2metro, dever\xe1 reiniciar o banco de dados do servidor para que ele seja levado em considera\xe7\xe3o."})}),"\n",(0,r.jsx)(o.h4,{id:"nome-da-publica\xe7\xe3o",children:"Nome da publica\xe7\xe3o"}),"\n",(0,r.jsxs)(o.p,{children:["This option lets you change the publication name of a 4D Server database, ",(0,r.jsx)(o.em,{children:"i.e."}),", the name displayed on the dynamic ",(0,r.jsx)(o.strong,{children:"Available"})," tab of the connection dialog box (see the ",(0,r.jsx)(o.a,{href:"/docs/pt/Desktop/clientServer#opening-a-remote-project",children:"Opening a remote project"})," paragraph). Por padr\xe3o, 4D Server usa o nome do arquivo de projeto. Pode introduzir qualquer nome personalizado que pretenda."]}),"\n",(0,r.jsx)(o.admonition,{type:"note",children:(0,r.jsx)(o.p,{children:"Esse par\xe2metro n\xe3o \xe9 levado em conta em aplicativos cliente-servidor personalizados. Em teoria, o aplicativo cliente se conecta diretamente ao aplicativo servidor, sem passar pela caixa de di\xe1logo de conex\xe3o. No entanto, em caso de erro, essa caixa de di\xe1logo pode ser exibida; nesse caso, o nome de publica\xe7\xe3o do aplicativo do servidor \xe9 o nome do projeto compilado."})}),"\n",(0,r.jsx)(o.h4,{id:"n\xfamero-do-porto",children:"N\xfamero do porto"}),"\n",(0,r.jsx)(o.p,{children:"Essa op\xe7\xe3o permite mudar o n\xfamero da porta TCP na qual o 4D Server publica o banco de dados. Essas informa\xe7\xf5es s\xe3o armazenadas no projeto e em cada computador cliente. Por padr\xe3o, o n\xfamero da porta TCP usada pelo 4D Server e 4D no modo remoto \xe9 19813."}),"\n",(0,r.jsx)(o.p,{children:"A personaliza\xe7\xe3o desse valor \xe9 necess\xe1ria quando se deseja usar v\xe1rios aplicativos 4D na mesma m\xe1quina; nesse caso, \xe9 necess\xe1rio especificar um n\xfamero de porta diferente para cada aplicativo.\nQuando voc\xea modifica esse valor no 4D Server ou no 4D, ele \xe9 automaticamente transmitido a todas as m\xe1quinas 4D conectadas ao banco de dados."}),"\n",(0,r.jsxs)(o.p,{children:["Para actualizar las otras m\xe1quinas clientes que no est\xe9n conectadas, basta con introducir el nuevo n\xfamero de puerto (precedido de dos puntos) despu\xe9s de la direcci\xf3n IP del equipo servidor en la pesta\xf1a ",(0,r.jsx)(o.strong,{children:"Personalizado"})," de la caja de di\xe1logo de conexi\xf3n  Por exemplo, se o novo n\xfamero de porta \xe9 19888:"]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{src:a(973184).Z+"",width:"466",height:"488"})}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsx)(o.p,{children:"Somente os bancos de dados publicados na mesma porta que a definida no cliente 4D s\xe3o vis\xedveis na p\xe1gina de publica\xe7\xe3o din\xe2mica TCP/IP."}),"\n"]}),"\n",(0,r.jsx)(o.h4,{id:"4d-server-e-n\xfameros-de-portas",children:"4D Server e n\xfameros de portas"}),"\n",(0,r.jsx)(o.p,{children:"O 4D Server usa tr\xeas portas TCP para comunica\xe7\xf5es entre servidores internos e clientes:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"SQL Server"}),': 19812 por defecto (puede modificarse a trav\xe9s de la p\xe1gina "SQL/Configuraci\xf3n" de las Preferencias).']}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"Application Server"}),': 19813 by default (can be modified via the "Client-Server/Configuration" page of the Preferences, see above).']}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"DB4D Server"})," (servidor de banco de dados): 19814 por padr\xe3o. This port number cannot be modified directly but it always consists of the application server port number + 1.",(0,r.jsx)(o.br,{}),"\nWhen a 4D client connects to 4D Server, it uses the TCP port of the application server (19813 or the port indicated after the colon ':' in the IP address shown in the connection dialog box). Connection to other servers via their respective ports is then automatic; it is no longer necessary to specify them.",(0,r.jsx)(o.br,{}),"\nNote that in the case of access via a router or a firewall, the three TCP ports must be opened explicitly."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"/docs/pt/Debugging/debugging-remote",children:(0,r.jsx)(o.strong,{children:"Depurador remoto"})}),": 19815 por padr\xe3o. This port number cannot be modified directly but it always consists of the application server port number + 2."]}),"\n"]}),"\n",(0,r.jsx)(o.h4,{id:"autentica\xe7\xe3o-do-usu\xe1rio-com-o-servidor-de-dom\xednio",children:"Autentica\xe7\xe3o do usu\xe1rio com o servidor de dom\xednio"}),"\n",(0,r.jsxs)(o.p,{children:["Esta opci\xf3n le permite implementar las funcionalidades SSO (",(0,r.jsx)(o.em,{children:"Single Sign On"}),") en su base de datos 4D Server en Windows. Quando voc\xea marca essa op\xe7\xe3o, 4D se conecta de forma transparente ao Active Directory do servidor de dom\xednio do Windows e obt\xe9m os tokens de autentica\xe7\xe3o dispon\xedveis. This option is described in the ",(0,r.jsx)(o.a,{href:"https://doc.4d.com/4Dv20R5/4D/20-R5/Single-Sign-On-SSO-on-Windows.300-6932709.en.html",children:"Single Sign On (SSO) on Windows"})," section."]}),"\n",(0,r.jsx)(o.h4,{id:"service-principal-name",children:"Service Principal Name"}),"\n",(0,r.jsxs)(o.p,{children:["Quando o Single Sign On (SSO) estiver ativado (veja acima), voc\xea dever\xe1 preencher esse campo se quiser usar o Kerberos como protocolo de autentica\xe7\xe3o. This option is described in the ",(0,r.jsx)(o.a,{href:"https://doc.4d.com/4Dv20R5/4D/20-R5/Single-Sign-On-SSO-on-Windows.300-6932709.en.html",children:"Single Sign On (SSO) on Windows"})," section."]}),"\n",(0,r.jsx)(o.h4,{id:"camada-de-rede",children:"Camada de rede"}),"\n",(0,r.jsxs)(o.p,{children:["This drop-down box contains 3 network layer options to choose between: ",(0,r.jsx)(o.strong,{children:"legacy"}),", ",(0,r.jsx)(o.strong,{children:"ServerNet"})," and ",(0,r.jsx)(o.strong,{children:"QUIC"})," (only in project mode), which are used to handle communications between 4D Server and remote 4D machines (clients)."]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Legacy"}),': This former "legacy" network layer is still supported in order to ensure compatibility for databases created prior to v15. This network layer can also be enabled by programming using the ',(0,r.jsx)(o.a,{href:"https://doc.4d.com/4Dv20/help/command/page642.html",children:"SET DATABASE PARAMETER"})," command."]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"ServerNet"})," (por padr\xe3o): ativa a camada de rede ServerNet no servidor (dispon\xedvel desde 4D v15)."]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"QUIC"})," (disponible solo en modo proyecto): activa la capa de red QUIC en el servidor."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Notas"}),":"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["Al seleccionar esta opci\xf3n, se anula la opci\xf3n Utilizar capa de red heredada en caso de que se haya definido mediante el comando ",(0,r.jsx)(o.a,{href:"https://doc.4d.com/4Dv20/help/command/page642.html",children:"SET DATABASE PARAMETER"}),"."]}),"\n",(0,r.jsxs)(o.li,{children:["You can know if a 4D application is running with a QUIC network layer using the ",(0,r.jsx)(o.a,{href:"https://doc.4d.com/4Dv20/help/command/page1599.html",children:"Application info"})," command."]}),"\n",(0,r.jsx)(o.li,{children:"Como o QUIC usa o protocolo UDP, certifique-se de que o UDP seja permitido em suas configura\xe7\xf5es de seguran\xe7a de rede."}),"\n",(0,r.jsx)(o.li,{children:"O QUIC liga-se automaticamente \xe0 porta 19813 tanto para o servidor de aplica\xe7\xf5es como para o servidor DB4D."}),"\n",(0,r.jsxs)(o.li,{children:["Quando a op\xe7\xe3o de camada QUIC \xe9 selecionada:\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"Uma mensagem beta e um \xedcone de alerta s\xe3o exibidos perto do seletor."}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"#Client-Server-Connections-Timeout",children:"As configura\xe7\xf5es de tempo limite das conex\xf5es cliente-servidor"})," est\xe3o ocultas"]}),"\n",(0,r.jsxs)(o.li,{children:["The ",(0,r.jsx)(o.a,{href:"#Encrypt-Client-Server-Communications",children:"Encrypt Client-Server communication checkbox"})," is hidden (QUIC communications are always in TLS, whatever your secured mode is.)."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"Compatibility"}),": You need to deploy your client/server applications with 4D v20 or higher before switching to the QUIC network layer."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(o.admonition,{type:"note",children:(0,r.jsx)(o.p,{children:"No caso de uma modifica\xe7\xe3o, voc\xea precisa reiniciar o aplicativo para que a altera\xe7\xe3o seja levada em conta. Todos os aplicativos clientes que foram conectados tamb\xe9m devem ser reiniciados para poderem se conectar \xe0 nova camada de rede."})}),"\n",(0,r.jsx)(o.h4,{id:"tempo-para-desconectar-cliente-servidor",children:"Tempo para desconectar cliente-servidor"}),"\n",(0,r.jsx)(o.p,{children:"Esse dispositivo \xe9 usado para definir o tempo limite (per\xedodo de inatividade al\xe9m do qual a conex\xe3o \xe9 fechada) entre o 4D Server e as m\xe1quinas clientes que se conectam a ele. A op\xe7\xe3o Ilimitado remove o tempo limite. Quando essa op\xe7\xe3o \xe9 selecionada, o controle de atividade do cliente \xe9 eliminado."}),"\n",(0,r.jsx)(o.p,{children:"Quando um tempo limite for selecionado, o servidor fechar\xe1 a conex\xe3o de um cliente se n\xe3o receber nenhuma solicita\xe7\xe3o dele durante o tempo limite especificado."}),"\n",(0,r.jsx)(o.h3,{id:"comunica\xe7\xe3o-cliente-servidor",children:"Comunica\xe7\xe3o cliente-servidor"}),"\n",(0,r.jsx)(o.h4,{id:"registrar-clientes-na-inicializa\xe7\xe3o-para-execute-on-client",children:"Registrar clientes na inicializa\xe7\xe3o para Execute On Client"}),"\n",(0,r.jsxs)(o.p,{children:["Quando essa op\xe7\xe3o estiver marcada, todas as m\xe1quinas remotas 4D conectando \xe0 base de dados podem executar os m\xe9todos remotamente. This mechanism is detailed in the section ",(0,r.jsx)(o.a,{href:"https://doc.4d.com/4Dv19/4D/19/Stored-procedures-on-client-machines.300-5422461.en.html",children:"Stored procedures on client machines"}),"."]}),"\n",(0,r.jsx)(o.h4,{id:"encriptar-as-comunica\xe7\xf5es-cliente-servidor",children:"Encriptar as comunica\xe7\xf5es cliente-servidor"}),"\n",(0,r.jsxs)(o.p,{children:["Essa op\xe7\xe3o permite que voc\xea ative o modo seguro para comunica\xe7\xf5es entre a m\xe1quina do servidor e as m\xe1quinas remotas 4D. Esta opci\xf3n se detalla en la secci\xf3n ",(0,r.jsx)(o.a,{href:"https://doc.4d.com/4Dv19/4D/19/Encrypting-ClientServer-Connections.300-5422465.en.html",children:"Cifrar las de conexiones cliente/servidor"}),"."]}),"\n",(0,r.jsx)(o.h4,{id:"atualizar-a-pasta-resources-durante-uma-sess\xe3o",children:"Atualizar a pasta Resources durante uma sess\xe3o"}),"\n",(0,r.jsxs)(o.p,{children:["This setting can be used to globally set the updating mode for the local instance of the ",(0,r.jsx)(o.strong,{children:"Resources"})," folder on the connected 4D machines when the ",(0,r.jsx)(o.strong,{children:"Resources"})," folder of the database is modified during the session (the ",(0,r.jsx)(o.strong,{children:"Resources"})," folder is automatically synchronized on the remote machine each time a session is opened). Est\xe3o dispon\xedveis tr\xeas par\xe2metros:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"Never"}),": The local ",(0,r.jsx)(o.strong,{children:"Resources"})," folder is not updated during the session. A notifica\xe7\xe3o enviada pelo servidor \xe9 ignorada. The local ",(0,r.jsx)(o.strong,{children:"Resources"})," folder may be updated manually using the ",(0,r.jsx)(o.strong,{children:"Update Local Resources"})," action menu command (see ",(0,r.jsx)(o.a,{href:"https://doc.4d.com/4Dv19/4D/19/Using-the-Resources-explorer.300-5416788.en.html",children:"Using the Resources explorer"}),")."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"Always"}),": The synchronization of the local ",(0,r.jsx)(o.strong,{children:"Resources"})," folder is automatically carried out during the session whenever notification is sent by the server."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"Ask"}),": When the notification is sent by the server, a dialog box is displayed on the client machines, indicating the modification. The user can then accept or refuse the synchronization of the local ",(0,r.jsx)(o.strong,{children:"Resources"})," folder.",(0,r.jsx)(o.br,{}),"\nThe ",(0,r.jsx)(o.strong,{children:"Resources"})," folder centralizes the custom files required for the database interface (translation files, pictures, etc.). Mecanismos autom\xe1ticos ou manuais podem ser usados para notificar cada cliente quando o conte\xfado dessa pasta tiver sido modificado. For more information, please refer to the ",(0,r.jsx)(o.a,{href:"https://doc.4d.com/4Dv19/4D/19/Managing-the-Resources-folder.300-5422466.en.html",children:"Managing the Resources folder"})," section."]}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"p\xe1gina-configura\xe7\xe3o-ip",children:"P\xe1gina Configura\xe7\xe3o IP"}),"\n",(0,r.jsx)(o.h3,{id:"tabela-de-configura\xe7\xe3o-autoriza\xe7\xe3o-rejei\xe7\xe3o",children:"Tabela de configura\xe7\xe3o Autoriza\xe7\xe3o-Rejei\xe7\xe3o"}),"\n",(0,r.jsx)(o.p,{children:"Essa tabela permite definir regras de controle de acesso para o banco de dados, dependendo dos endere\xe7os IP da m\xe1quina remota 4D. Essa op\xe7\xe3o permite refor\xe7ar a seguran\xe7a, por exemplo, para aplicativos estrat\xe9gicos."}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsx)(o.p,{children:"Esta tabela de configura\xe7\xe3o n\xe3o controla as liga\xe7\xf5es Web."}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"O comportamento da tabela de configura\xe7\xe3o \xe9 o seguinte:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:['A coluna "Allow-Deny" permite selecionar o tipo de regra a ser aplicada (Allow ou Deny) usando um menu pop-up. Para adicionar uma regra, clique no bot\xe3o Adicionar. Aparece uma nova linha na tabela. The ',(0,r.jsx)(o.strong,{children:"Delete"})," button lets you remove the current row."]}),"\n",(0,r.jsx)(o.li,{children:'A coluna "IP Address" (Endere\xe7o IP) permite definir o(s) endere\xe7o(s) IP afetado(s) pela regra. Para especificar um endere\xe7o, clique na coluna e digite o endere\xe7o da seguinte forma: 123.45.67.89 (formato IPv4) ou 2001:0DB8:0000:85A3:0000:0000:AC1F:8001 (formato IPv6). Voc\xea pode usar um caractere * (asterisco) para especificar endere\xe7os do tipo "come\xe7a com". Por exemplo, 192.168.* indica todos os endere\xe7os que come\xe7am com 192.168.'}),"\n",(0,r.jsx)(o.li,{children:"A aplica\xe7\xe3o das regras \xe9 baseada na ordem de exibi\xe7\xe3o da tabela. Se duas regras forem contradit\xf3rias, a prioridade ser\xe1 dada \xe0 regra localizada na parte mais alta da tabela. Voc\xea pode reordenar as linhas modificando a classifica\xe7\xe3o atual (clique no cabe\xe7alho da coluna para alternar a dire\xe7\xe3o da classifica\xe7\xe3o). Voc\xea tamb\xe9m pode mover as linhas usando o recurso de arrastar e soltar."}),"\n",(0,r.jsxs)(o.li,{children:["Por motivos de seguran\xe7a, somente os endere\xe7os que realmente correspondem a uma regra ter\xe3o permiss\xe3o para se conectar. Em outras palavras, se a tabela contiver apenas uma ou mais regras Deny, todos os endere\xe7os ser\xe3o recusados porque nenhum corresponder\xe1 a pelo menos uma regra. Se voc\xea quiser negar apenas determinados endere\xe7os (e permitir outros), adicione uma regra Allow * no final da tabela. Por exemplo:\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"Negar 192.168.* (negar todos os endere\xe7os que comecem por 192.168)"}),"\n",(0,r.jsx)(o.li,{children:"Autorizar * (e autorizar outros)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Por padr\xe3o, nenhuma restri\xe7\xe3o de conex\xe3o \xe9 aplicada pelo 4D Server: a primeira linha da tabela cont\xe9m o r\xf3tulo Allow e o caractere * (todos os endere\xe7os)."})]})}function p(e={}){let{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},973184:function(e,o,a){a.d(o,{Z:function(){return n}});let n=a.p+"assets/images/client-server-network-2b3907f0e2e18d3fb768dafd1606ab20.png"},250065:function(e,o,a){a.d(o,{Z:function(){return d},a:function(){return s}});var n=a(667294);let r={},i=n.createContext(r);function s(e){let o=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);