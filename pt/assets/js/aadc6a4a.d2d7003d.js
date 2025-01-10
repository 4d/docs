"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41474"],{736124:function(e,a,o){o.r(a),o.d(a,{default:()=>m,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>t,contentTitle:()=>d});var r=JSON.parse('{"id":"settings/client-server","title":"P\xe1gina Cliente/Servidor","description":"As p\xe1ginas Cliente-servidor agrupam par\xe2metros relacionados ao uso do banco de dados no modo cliente-servidor. Naturalmente, essas configura\xe7\xf5es s\xf3 s\xe3o levadas em conta quando o banco de dados \xe9 usado no modo remoto.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/settings/client-server.md","sourceDirName":"settings","slug":"/settings/client-server","permalink":"/docs/pt/20-R6/settings/client-server","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20settings%2Fclient-server.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"client-server","title":"P\xe1gina Cliente/Servidor"},"sidebar":"docs","previous":{"title":"P\xe1gina Backup","permalink":"/docs/pt/20-R6/settings/backup"},"next":{"title":"P\xe1gina da Web","permalink":"/docs/pt/20-R6/settings/web"}}'),s=o("785893"),n=o("250065");let i={id:"client-server",title:"P\xe1gina Cliente/Servidor"},d=void 0,c={},t=[{value:"P\xe1gina Op\xe7\xf5es rede",id:"p\xe1gina-op\xe7\xf5es-rede",level:2},{value:"Rede",id:"rede",level:3},{value:"Publicar a base de dados no arranque",id:"publicar-a-base-de-dados-no-arranque",level:4},{value:"Nome da publica\xe7\xe3o",id:"nome-da-publica\xe7\xe3o",level:4},{value:"N\xfamero do porto",id:"n\xfamero-do-porto",level:4},{value:"4D Server e n\xfameros de portas",id:"4d-server-e-n\xfameros-de-portas",level:4},{value:"Autentica\xe7\xe3o do usu\xe1rio com o servidor de dom\xednio",id:"autentica\xe7\xe3o-do-usu\xe1rio-com-o-servidor-de-dom\xednio",level:4},{value:"Service Principal Name",id:"service-principal-name",level:4},{value:"Camada de rede",id:"camada-de-rede",level:4},{value:"Tempo para desconectar cliente-servidor",id:"tempo-para-desconectar-cliente-servidor",level:4},{value:"Comunica\xe7\xe3o cliente-servidor",id:"comunica\xe7\xe3o-cliente-servidor",level:3},{value:"Registrar clientes na inicializa\xe7\xe3o para Execute On Client",id:"registrar-clientes-na-inicializa\xe7\xe3o-para-execute-on-client",level:4},{value:"Encriptar as comunica\xe7\xf5es cliente-servidor",id:"encriptar-as-comunica\xe7\xf5es-cliente-servidor",level:4},{value:"Atualizar a pasta Resources durante uma sess\xe3o",id:"atualizar-a-pasta-resources-durante-uma-sess\xe3o",level:4},{value:"P\xe1gina Configura\xe7\xe3o IP",id:"p\xe1gina-configura\xe7\xe3o-ip",level:2},{value:"Tabela de configura\xe7\xe3o Autoriza\xe7\xe3o-Rejei\xe7\xe3o",id:"tabela-de-configura\xe7\xe3o-autoriza\xe7\xe3o-rejei\xe7\xe3o",level:3}];function l(e){let a={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"As p\xe1ginas Cliente-servidor agrupam par\xe2metros relacionados ao uso do banco de dados no modo cliente-servidor. Naturalmente, essas configura\xe7\xf5es s\xf3 s\xe3o levadas em conta quando o banco de dados \xe9 usado no modo remoto."}),"\n",(0,s.jsx)(a.h2,{id:"p\xe1gina-op\xe7\xf5es-rede",children:"P\xe1gina Op\xe7\xf5es rede"}),"\n",(0,s.jsx)(a.h3,{id:"rede",children:"Rede"}),"\n",(0,s.jsx)(a.h4,{id:"publicar-a-base-de-dados-no-arranque",children:"Publicar a base de dados no arranque"}),"\n",(0,s.jsx)(a.p,{children:"Essa op\xe7\xe3o permite que voc\xea indique se o banco de dados do 4D Server aparecer\xe1 ou n\xe3o na lista de bancos de dados publicados."}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Quando essa op\xe7\xe3o est\xe1 marcada (padr\xe3o), o banco de dados \xe9 tornado p\xfablico e aparece na lista de bancos de dados publicados (guia ",(0,s.jsx)(a.strong,{children:"Dispon\xedvel"}),")."]}),"\n",(0,s.jsxs)(a.li,{children:["Quando a op\xe7\xe3o n\xe3o estiver marcada, o banco de dados n\xe3o ser\xe1 tornado p\xfablico e n\xe3o aparecer\xe1 na lista de bancos de dados publicados. Para se conectar, os usu\xe1rios devem inserir manualmente o endere\xe7o do banco de dados na guia ",(0,s.jsx)(a.strong,{children:"Personalizado"})," da caixa de di\xe1logo de conex\xe3o."]}),"\n"]}),"\n",(0,s.jsx)(a.admonition,{type:"note",children:(0,s.jsx)(a.p,{children:"Se voc\xea modificar esse par\xe2metro, dever\xe1 reiniciar o banco de dados do servidor para que ele seja levado em considera\xe7\xe3o."})}),"\n",(0,s.jsx)(a.h4,{id:"nome-da-publica\xe7\xe3o",children:"Nome da publica\xe7\xe3o"}),"\n",(0,s.jsxs)(a.p,{children:["Essa op\xe7\xe3o permite alterar o nome de publica\xe7\xe3o de um banco de dados do 4D Server, ",(0,s.jsx)(a.em,{children:"ou seja"}),", o nome exibido na guia din\xe2mica ",(0,s.jsx)(a.strong,{children:"Dispon\xedvel"})," da caixa de di\xe1logo de conex\xe3o (consulte o par\xe1grafo ",(0,s.jsx)(a.a,{href:"../Desktop/clientServer/md#opening-a-remote-project",children:"Abrindo um projeto remoto"}),"). Por padr\xe3o, 4D Server usa o nome do arquivo de projeto. Pode introduzir qualquer nome personalizado que pretenda."]}),"\n",(0,s.jsx)(a.admonition,{type:"note",children:(0,s.jsx)(a.p,{children:"Esse par\xe2metro n\xe3o \xe9 levado em conta em aplicativos cliente-servidor personalizados. Em teoria, o aplicativo cliente se conecta diretamente ao aplicativo servidor, sem passar pela caixa de di\xe1logo de conex\xe3o. No entanto, em caso de erro, essa caixa de di\xe1logo pode ser exibida; nesse caso, o nome de publica\xe7\xe3o do aplicativo do servidor \xe9 o nome do projeto compilado."})}),"\n",(0,s.jsx)(a.h4,{id:"n\xfamero-do-porto",children:"N\xfamero do porto"}),"\n",(0,s.jsx)(a.p,{children:"Essa op\xe7\xe3o permite mudar o n\xfamero da porta TCP na qual o 4D Server publica o banco de dados. Essas informa\xe7\xf5es s\xe3o armazenadas no projeto e em cada computador cliente. Por padr\xe3o, o n\xfamero da porta TCP usada pelo 4D Server e 4D no modo remoto \xe9 19813."}),"\n",(0,s.jsx)(a.p,{children:"A personaliza\xe7\xe3o desse valor \xe9 necess\xe1ria quando se deseja usar v\xe1rios aplicativos 4D na mesma m\xe1quina; nesse caso, \xe9 necess\xe1rio especificar um n\xfamero de porta diferente para cada aplicativo.\nQuando voc\xea modifica esse valor no 4D Server ou no 4D, ele \xe9 automaticamente transmitido a todas as m\xe1quinas 4D conectadas ao banco de dados."}),"\n",(0,s.jsxs)(a.p,{children:["Para actualizar las otras m\xe1quinas clientes que no est\xe9n conectadas, basta con introducir el nuevo n\xfamero de puerto (precedido de dos puntos) despu\xe9s de la direcci\xf3n IP del equipo servidor en la pesta\xf1a ",(0,s.jsx)(a.strong,{children:"Personalizado"})," de la caja de di\xe1logo de conexi\xf3n  Por exemplo, se o novo n\xfamero de porta \xe9 19888:"]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{src:o(40884).Z+"",width:"466",height:"488"})}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Somente os bancos de dados publicados na mesma porta que a definida no cliente 4D s\xe3o vis\xedveis na p\xe1gina de publica\xe7\xe3o din\xe2mica TCP/IP."}),"\n"]}),"\n",(0,s.jsx)(a.h4,{id:"4d-server-e-n\xfameros-de-portas",children:"4D Server e n\xfameros de portas"}),"\n",(0,s.jsx)(a.p,{children:"4D Server usa v\xe1rias portas TCP para comunica\xe7\xf5es entre servidores internos e clientes:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"SQL Server"}),': 19812 por defecto (puede modificarse a trav\xe9s de la p\xe1gina "SQL/Configuraci\xf3n" de las Preferencias).']}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Servidor de aplica\xe7\xf5es"}),': 19813 por padr\xe3o (pode ser modificado atrav\xe9s da p\xe1gina "Servidor/Configura\xe7\xe3o" das Prefer\xeancias, veja acima).']}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"DB4D Server"})," (servidor de banco de dados): 19814 por padr\xe3o. Esse n\xfamero de porta n\xe3o pode ser modificado diretamente, mas sempre consiste no n\xfamero da porta do servidor de aplica\xe7\xe3o + 1.",(0,s.jsx)(a.br,{}),"\nQuando um cliente 4D se conecta ao 4D Server, ele usa a porta TCP do servidor de aplica\xe7\xe3o (19813 ou a porta indicada ap\xf3s os dois pontos ':' no endere\xe7o IP mostrado na caixa de di\xe1logo de conex\xe3o). A conex\xe3o com outros servidores atrav\xe9s de suas respectivas portas \xe9 ent\xe3o automaticamente; n\xe3o \xe9 mais necess\xe1rio especific\xe1-los.",(0,s.jsx)(a.br,{}),"\nNote que, no caso de acesso via um roteador ou um firewall, as tr\xeas portas TCP devem ser abertas explicitamente."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"/docs/pt/20-R6/Debugging/debugging-remote",children:(0,s.jsx)(a.strong,{children:"Depurador remoto"})}),": 19815 por padr\xe3o. Esse n\xfamero de porta n\xe3o pode ser modificado diretamente, mas sempre consiste no n\xfamero da porta do servidor de aplicativos + 2."]}),"\n"]}),"\n",(0,s.jsx)(a.h4,{id:"autentica\xe7\xe3o-do-usu\xe1rio-com-o-servidor-de-dom\xednio",children:"Autentica\xe7\xe3o do usu\xe1rio com o servidor de dom\xednio"}),"\n",(0,s.jsxs)(a.p,{children:["Esta opci\xf3n le permite implementar las funcionalidades SSO (",(0,s.jsx)(a.em,{children:"Single Sign On"}),") en su base de datos 4D Server en Windows. Quando voc\xea marca essa op\xe7\xe3o, 4D se conecta de forma transparente ao Active Directory do servidor de dom\xednio do Windows e obt\xe9m os tokens de autentica\xe7\xe3o dispon\xedveis. Essa op\xe7\xe3o \xe9 descrita na se\xe7\xe3o ",(0,s.jsx)(a.a,{href:"https://doc.4d.com/4Dv20R5/4D/20-R5/Single-Sign-On-SSO-on-Windows.300-6932709.en.html",children:"Single Sign On (SSO) on Windows"}),"."]}),"\n",(0,s.jsx)(a.h4,{id:"service-principal-name",children:"Service Principal Name"}),"\n",(0,s.jsxs)(a.p,{children:["Quando o Single Sign On (SSO) estiver ativado (veja acima), voc\xea dever\xe1 preencher esse campo se quiser usar o Kerberos como protocolo de autentica\xe7\xe3o. Essa op\xe7\xe3o \xe9 descrita na se\xe7\xe3o ",(0,s.jsx)(a.a,{href:"https://doc.4d.com/4Dv20R5/4D/20-R5/Single-Sign-On-SSO-on-Windows.300-6932709.en.html",children:"Single Sign On (SSO) on Windows"}),"."]}),"\n",(0,s.jsx)(a.h4,{id:"camada-de-rede",children:"Camada de rede"}),"\n",(0,s.jsxs)(a.p,{children:["Essa caixa suspensa cont\xe9m 3 op\xe7\xf5es de camada de rede para escolher entre: ",(0,s.jsx)(a.strong,{children:"legacy"}),", ",(0,s.jsx)(a.strong,{children:"ServerNet"})," e ",(0,s.jsx)(a.strong,{children:"QUIC"})," (somente no modo de projeto), usadas para lidar com comunica\xe7\xf5es entre o 4D Server e m\xe1quinas 4D remotas (clientes)."]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Hist\xf3rico"}),': essa antiga camada de rede "legado" ainda \xe9 mantida para garantir a compatibilidade com bancos de dados criados antes da vers\xe3o 15. Essa camada de rede tamb\xe9m pode ser ativada por programa\xe7\xe3o usando o comando ',(0,s.jsx)(a.a,{href:"https://doc.4d.com/4Dv20/help/command/page642.html",children:"SET DATABASE PARAMETER"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"ServerNet"})," (por padr\xe3o): ativa a camada de rede ServerNet no servidor (dispon\xedvel desde 4D v15)."]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"QUIC"})," (disponible solo en modo proyecto): activa la capa de red QUIC en el servidor."]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Notas"}),":"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Al seleccionar esta opci\xf3n, se anula la opci\xf3n Utilizar capa de red heredada en caso de que se haya definido mediante el comando ",(0,s.jsx)(a.a,{href:"https://doc.4d.com/4Dv20/help/command/page642.html",children:"SET DATABASE PARAMETER"}),"."]}),"\n",(0,s.jsxs)(a.li,{children:["Voc\xea pode saber se um aplica\xe7\xe3o 4D est\xe1 sendo executado com uma camada de rede QUIC usando o comando ",(0,s.jsx)(a.a,{href:"https://doc.4d.com/4Dv20/help/command/page1599.html",children:"Get application info"}),"."]}),"\n",(0,s.jsx)(a.li,{children:"Como o QUIC usa o protocolo UDP, certifique-se de que o UDP seja permitido em suas configura\xe7\xf5es de seguran\xe7a de rede."}),"\n",(0,s.jsx)(a.li,{children:"O QUIC liga-se automaticamente \xe0 porta 19813 tanto para o servidor de aplica\xe7\xf5es como para o servidor DB4D."}),"\n",(0,s.jsxs)(a.li,{children:["Quando a op\xe7\xe3o de camada QUIC \xe9 selecionada:\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Uma mensagem beta e um \xedcone de alerta s\xe3o exibidos perto do seletor."}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.a,{href:"#Client-Server-Connections-Timeout",children:"As configura\xe7\xf5es de tempo limite das conex\xf5es cliente-servidor"})," est\xe3o ocultas"]}),"\n",(0,s.jsxs)(a.li,{children:["A caixa de sele\xe7\xe3o ",(0,s.jsx)(a.a,{href:"#Encrypt-Client-Server-Communications",children:"Criptografar a comunica\xe7\xe3o entre cliente e servidor"})," est\xe1 oculta (as comunica\xe7\xf5es QUIC s\xe3o sempre em TLS, seja qual for o seu modo de seguran\xe7a)."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Compatibilidade"}),": voc\xea precisa implementar seus aplicativos cliente/servidor com 4D v20 ou superior antes de mudar para a camada de rede QUIC."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.admonition,{type:"note",children:(0,s.jsx)(a.p,{children:"No caso de uma modifica\xe7\xe3o, voc\xea precisa reiniciar o aplicativo para que a altera\xe7\xe3o seja levada em conta. Toda aplica\xe7\xe3o cliente conectada tamb\xe9m devem ser reiniciada para poderem se conectar \xe0 nova camada de rede."})}),"\n",(0,s.jsx)(a.h4,{id:"tempo-para-desconectar-cliente-servidor",children:"Tempo para desconectar cliente-servidor"}),"\n",(0,s.jsx)(a.p,{children:"Esse dispositivo \xe9 usado para definir o tempo limite (per\xedodo de inatividade al\xe9m do qual a conex\xe3o \xe9 fechada) entre o 4D Server e as m\xe1quinas clientes que se conectam a ele. A op\xe7\xe3o Ilimitado remove o tempo limite. Quando essa op\xe7\xe3o \xe9 selecionada, o controle de atividade do cliente \xe9 eliminado."}),"\n",(0,s.jsx)(a.p,{children:"Quando um tempo limite for selecionado, o servidor fechar\xe1 a conex\xe3o de um cliente se n\xe3o receber nenhuma solicita\xe7\xe3o dele durante o tempo limite especificado."}),"\n",(0,s.jsx)(a.h3,{id:"comunica\xe7\xe3o-cliente-servidor",children:"Comunica\xe7\xe3o cliente-servidor"}),"\n",(0,s.jsx)(a.h4,{id:"registrar-clientes-na-inicializa\xe7\xe3o-para-execute-on-client",children:"Registrar clientes na inicializa\xe7\xe3o para Execute On Client"}),"\n",(0,s.jsxs)(a.p,{children:["Quando essa op\xe7\xe3o estiver marcada, todas as m\xe1quinas remotas 4D conectando \xe0 base de dados podem executar os m\xe9todos remotamente. Este mecanismo \xe9 detalhado na se\xe7\xe3o [procedimentos armazenados em m\xe1quinas clientes](",(0,s.jsx)(a.a,{href:"https://doc.4d.com/4Dv19/4D/19/Stored-procedure",children:"https://doc.4d.com/4Dv19/4D/19/Stored-procedure"})," res-on-client-machines.300-5422461.en.html)."]}),"\n",(0,s.jsx)(a.h4,{id:"encriptar-as-comunica\xe7\xf5es-cliente-servidor",children:"Encriptar as comunica\xe7\xf5es cliente-servidor"}),"\n",(0,s.jsxs)(a.p,{children:["Essa op\xe7\xe3o permite que voc\xea ative o modo seguro para comunica\xe7\xf5es entre a m\xe1quina do servidor e as m\xe1quinas remotas 4D. Esta opci\xf3n se detalla en la secci\xf3n ",(0,s.jsx)(a.a,{href:"https://doc.4d.com/4Dv19/4D/19/Encrypting-ClientServer-Connections.300-5422465.en.html",children:"Cifrar las de conexiones cliente/servidor"}),"."]}),"\n",(0,s.jsx)(a.h4,{id:"atualizar-a-pasta-resources-durante-uma-sess\xe3o",children:"Atualizar a pasta Resources durante uma sess\xe3o"}),"\n",(0,s.jsxs)(a.p,{children:["Essa configura\xe7\xe3o pode ser usada para definir globalmente o modo de atualiza\xe7\xe3o da inst\xe2ncia local da pasta ",(0,s.jsx)(a.strong,{children:"Resources"})," nas m\xe1quinas 4D conectadas quando a pasta ",(0,s.jsx)(a.strong,{children:"Resources"})," do banco de dados for modificada durante a sess\xe3o (a pasta ",(0,s.jsx)(a.strong,{children:"Resources"})," \xe9 sincronizada automaticamente na m\xe1quina remota sempre que uma sess\xe3o for aberta). Est\xe3o dispon\xedveis tr\xeas par\xe2metros:"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Nunca"}),": a pasta local ",(0,s.jsx)(a.strong,{children:"Resources"})," n\xe3o \xe9 atualizada durante a sess\xe3o. A notifica\xe7\xe3o enviada pelo servidor \xe9 ignorada. A pasta local ",(0,s.jsx)(a.strong,{children:"Resources"})," pode ser atualizada manualmente com o comando do menu de a\xe7\xe3o ",(0,s.jsx)(a.strong,{children:"Update Local Resources"})," (consulte ",(0,s.jsx)(a.a,{href:"https://doc.4d.com/4Dv19/4D/19/Using-the-Resources-explorer.300-5416788.en.html",children:"Usando o explorador de recursos"}),")."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Sempre"}),": a sincroniza\xe7\xe3o da pasta ",(0,s.jsx)(a.strong,{children:"Resources"})," local \xe9 realizada automaticamente durante a sess\xe3o sempre que a notifica\xe7\xe3o \xe9 enviada pelo servidor."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Perguntar"}),": quando a notifica\xe7\xe3o for enviada pelo servidor, uma caixa de di\xe1logo \xe9 exibida nas m\xe1quinas de cliente, indicando a modifica\xe7\xe3o. O usu\xe1rio pode ent\xe3o aceitar ou recusar a sincroniza\xe7\xe3o da pasta local ",(0,s.jsx)(a.strong,{children:"Resources"}),".",(0,s.jsx)(a.br,{}),"\nA pasta ",(0,s.jsx)(a.strong,{children:"Resources"})," centraliza os arquivos personalizados necess\xe1rios para a interface do banco de dados (arquivos de tradu\xe7\xe3o, imagens, etc.). Mecanismos autom\xe1ticos ou manuais podem ser usados para notificar cada cliente quando o conte\xfado dessa pasta tiver sido modificado. Para mais informa\xe7\xf5es, por favor consulte a se\xe7\xe3o ",(0,s.jsx)(a.a,{href:"https://doc.4d.com/4Dv19/4D/19/Managing-the-Resources-folder.300-5422466.en.html",children:"Gerenciando da pasta Resources"}),"."]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"p\xe1gina-configura\xe7\xe3o-ip",children:"P\xe1gina Configura\xe7\xe3o IP"}),"\n",(0,s.jsx)(a.h3,{id:"tabela-de-configura\xe7\xe3o-autoriza\xe7\xe3o-rejei\xe7\xe3o",children:"Tabela de configura\xe7\xe3o Autoriza\xe7\xe3o-Rejei\xe7\xe3o"}),"\n",(0,s.jsx)(a.p,{children:"Essa tabela permite definir regras de controle de acesso para o banco de dados, dependendo dos endere\xe7os IP da m\xe1quina remota 4D. Essa op\xe7\xe3o permite refor\xe7ar a seguran\xe7a, por exemplo, para aplicativos estrat\xe9gicos."}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Esta tabela de configura\xe7\xe3o n\xe3o controla as liga\xe7\xf5es Web."}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"O comportamento da tabela de configura\xe7\xe3o \xe9 o seguinte:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:['A coluna "Allow-Deny" permite selecionar o tipo de regra a ser aplicada (Allow ou Deny) usando um menu pop-up. Para adicionar uma regra, clique no bot\xe3o Adicionar. Aparece uma nova linha na tabela. O bot\xe3o ',(0,s.jsx)(a.strong,{children:"Excluir"})," permite que voc\xea remova a linha atual."]}),"\n",(0,s.jsx)(a.li,{children:'A coluna "IP Address" (Endere\xe7o IP) permite definir o(s) endere\xe7o(s) IP afetado(s) pela regra. Para especificar um endere\xe7o, clique na coluna e digite o endere\xe7o da seguinte forma: 123.45.67.89 (formato IPv4) ou 2001:0DB8:0000:85A3:0000:0000:AC1F:8001 (formato IPv6). Voc\xea pode usar um caractere * (asterisco) para especificar endere\xe7os do tipo "come\xe7a com". Por exemplo, 192.168.* indica todos os endere\xe7os que come\xe7am com 192.168.'}),"\n",(0,s.jsx)(a.li,{children:"A aplica\xe7\xe3o das regras \xe9 baseada na ordem de exibi\xe7\xe3o da tabela. Se duas regras forem contradit\xf3rias, a prioridade ser\xe1 dada \xe0 regra localizada na parte mais alta da tabela. Voc\xea pode reordenar as linhas modificando a classifica\xe7\xe3o atual (clique no cabe\xe7alho da coluna para alternar a dire\xe7\xe3o da classifica\xe7\xe3o). Voc\xea tamb\xe9m pode mover as linhas usando o recurso de arrastar e soltar."}),"\n",(0,s.jsxs)(a.li,{children:["Por motivos de seguran\xe7a, somente os endere\xe7os que realmente correspondem a uma regra ter\xe3o permiss\xe3o para se conectar. Em outras palavras, se a tabela contiver apenas uma ou mais regras Deny, todos os endere\xe7os ser\xe3o recusados porque nenhum corresponder\xe1 a pelo menos uma regra. Se voc\xea quiser negar apenas determinados endere\xe7os (e permitir outros), adicione uma regra Allow * no final da tabela. Por exemplo:\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Negar 192.168.* (negar todos os endere\xe7os que comecem por 192.168)"}),"\n",(0,s.jsx)(a.li,{children:"Autorizar * (e autorizar outros)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"Por padr\xe3o, nenhuma restri\xe7\xe3o de conex\xe3o \xe9 aplicada pelo 4D Server: a primeira linha da tabela cont\xe9m o r\xf3tulo Allow e o caractere * (todos os endere\xe7os)."})]})}function m(e={}){let{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},40884:function(e,a,o){o.d(a,{Z:function(){return r}});let r=o.p+"assets/images/client-server-network-2b3907f0e2e18d3fb768dafd1606ab20.png"},250065:function(e,a,o){o.d(a,{Z:function(){return d},a:function(){return i}});var r=o(667294);let s={},n=r.createContext(s);function i(e){let a=r.useContext(n);return r.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(n.Provider,{value:a},e.children)}}}]);