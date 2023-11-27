"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7743],{3905:(e,a,o)=>{o.d(a,{Zo:()=>l,kt:()=>m});var r=o(67294);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function t(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?t(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,r,n=function(e,a){if(null==e)return{};var o,r,n={},t=Object.keys(e);for(r=0;r<t.length;r++)o=t[r],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)o=t[r],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=r.createContext({}),c=function(e){var a=r.useContext(d),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},l=function(e){var a=c(e.components);return r.createElement(d.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var o=e.components,n=e.mdxType,t=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(o),m=n,v=u["".concat(d,".").concat(m)]||u[m]||p[m]||t;return o?r.createElement(v,i(i({ref:a},l),{},{components:o})):r.createElement(v,i({ref:a},l))}));function m(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var t=o.length,i=new Array(t);i[0]=u;var s={};for(var d in a)hasOwnProperty.call(a,d)&&(s[d]=a[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<t;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},3653:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>l});o(67294);var r=o(3905);function n(){return n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},n.apply(this,arguments)}function t(e,a){if(null==e)return{};var o,r,n=function(e,a){if(null==e)return{};var o,r,n={},t=Object.keys(e);for(r=0;r<t.length;r++)o=t[r],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)o=t[r],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}const i={id:"client-server",title:"P\xe1gina Cliente/Servidor"},s=void 0,d={unversionedId:"settings/client-server",id:"version-20/settings/client-server",title:"P\xe1gina Cliente/Servidor",description:"As p\xe1ginas Cliente-servidor agrupam par\xe2metros relacionados ao uso do banco de dados no modo cliente-servidor. Naturalmente, essas configura\xe7\xf5es s\xf3 s\xe3o levadas em conta quando o banco de dados \xe9 usado no modo remoto.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/settings/client-server.md",sourceDirName:"settings",slug:"/settings/client-server",permalink:"/docs/pt/20/settings/client-server",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20settings%2Fclient-server.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"client-server",title:"P\xe1gina Cliente/Servidor"},sidebar:"docs",previous:{title:"P\xe1gina Backup",permalink:"/docs/pt/20/settings/backup"},next:{title:"P\xe1gina da Web",permalink:"/docs/pt/20/settings/web"}},c={},l=[{value:"P\xe1gina Op\xe7\xf5es rede",id:"p\xe1gina-op\xe7\xf5es-rede",level:2},{value:"Rede",id:"rede",level:3},{value:"Publicar a base de dados no arranque",id:"publicar-a-base-de-dados-no-arranque",level:4},{value:"Nome da publica\xe7\xe3o",id:"nome-da-publica\xe7\xe3o",level:4},{value:"N\xfamero do porto",id:"n\xfamero-do-porto",level:4},{value:"4D Server e n\xfameros de portas",id:"4d-server-e-n\xfameros-de-portas",level:4},{value:"Autentica\xe7\xe3o do usu\xe1rio com o servidor de dom\xednio",id:"autentica\xe7\xe3o-do-usu\xe1rio-com-o-servidor-de-dom\xednio",level:4},{value:"Service Principal Name",id:"service-principal-name",level:4},{value:"Tempo para desconectar cliente-servidor",id:"tempo-para-desconectar-cliente-servidor",level:4},{value:"Comunica\xe7\xe3o cliente-servidor",id:"comunica\xe7\xe3o-cliente-servidor",level:3},{value:"Registrar clientes na inicializa\xe7\xe3o para Execute On Client",id:"registrar-clientes-na-inicializa\xe7\xe3o-para-execute-on-client",level:4},{value:"Encriptar as comunica\xe7\xf5es cliente-servidor",id:"encriptar-as-comunica\xe7\xf5es-cliente-servidor",level:4},{value:"Atualizar a pasta Resources durante uma sess\xe3o",id:"atualizar-a-pasta-resources-durante-uma-sess\xe3o",level:4},{value:"P\xe1gina Configura\xe7\xe3o IP",id:"p\xe1gina-configura\xe7\xe3o-ip",level:2},{value:"Tabela de configura\xe7\xe3o Autoriza\xe7\xe3o-Rejei\xe7\xe3o",id:"tabela-de-configura\xe7\xe3o-autoriza\xe7\xe3o-rejei\xe7\xe3o",level:3}],p={toc:l};function u(e){var{components:a}=e,i=t(e,["components"]);return(0,r.kt)("wrapper",n({},p,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As p\xe1ginas Cliente-servidor agrupam par\xe2metros relacionados ao uso do banco de dados no modo cliente-servidor. Naturalmente, essas configura\xe7\xf5es s\xf3 s\xe3o levadas em conta quando o banco de dados \xe9 usado no modo remoto."),(0,r.kt)("h2",n({},{id:"p\xe1gina-op\xe7\xf5es-rede"}),"P\xe1gina Op\xe7\xf5es rede"),(0,r.kt)("h3",n({},{id:"rede"}),"Rede"),(0,r.kt)("h4",n({},{id:"publicar-a-base-de-dados-no-arranque"}),"Publicar a base de dados no arranque"),(0,r.kt)("p",null,"Essa op\xe7\xe3o permite que voc\xea indique se o banco de dados do 4D Server aparecer\xe1 ou n\xe3o na lista de bancos de dados publicados."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Quando essa op\xe7\xe3o est\xe1 marcada (padr\xe3o), o banco de dados \xe9 tornado p\xfablico e aparece na lista de bancos de dados publicados (guia",(0,r.kt)("strong",{parentName:"li"},"Available"),")."),(0,r.kt)("li",{parentName:"ul"},"Quando a op\xe7\xe3o n\xe3o estiver marcada, o banco de dados n\xe3o ser\xe1 tornado p\xfablico e n\xe3o aparecer\xe1 na lista de bancos de dados publicados. Para se conectar, os usu\xe1rios devem inserir manualmente o endere\xe7o do banco de dados na guia ",(0,r.kt)("strong",{parentName:"li"},"Custom")," da caixa de di\xe1logo de conex\xe3o.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Se voc\xea modificar esse par\xe2metro, dever\xe1 reiniciar o banco de dados do servidor para que ele seja levado em considera\xe7\xe3o.")),(0,r.kt)("h4",n({},{id:"nome-da-publica\xe7\xe3o"}),"Nome da publica\xe7\xe3o"),(0,r.kt)("p",null,"Essa op\xe7\xe3o permite alterar o nome de publica\xe7\xe3o de um banco de dados do 4D Server, ",(0,r.kt)("em",{parentName:"p"},", ou seja,"),", o nome exibido na guia din\xe2mica ",(0,r.kt)("strong",{parentName:"p"},"Available")," da caixa de di\xe1logo de conex\xe3o (consulte a se\xe7\xe3o ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Connecting-to-a-4D-Server-Database.300-5422486.en.html"}),"Connecting to a 4D Server Database"),"). Por padr\xe3o, 4D Server usa o nome do arquivo de projeto. Pode introduzir qualquer nome personalizado que pretenda."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Esse par\xe2metro n\xe3o \xe9 levado em conta em aplicativos cliente-servidor personalizados. Em teoria, o aplicativo cliente se conecta diretamente ao aplicativo servidor, sem passar pela caixa de di\xe1logo de conex\xe3o. No entanto, em caso de erro, essa caixa de di\xe1logo pode ser exibida; nesse caso, o nome de publica\xe7\xe3o do aplicativo do servidor \xe9 o nome do projeto compilado.")),(0,r.kt)("h4",n({},{id:"n\xfamero-do-porto"}),"N\xfamero do porto"),(0,r.kt)("p",null,"Essa op\xe7\xe3o permite mudar o n\xfamero da porta TCP na qual o 4D Server publica o banco de dados. Essas informa\xe7\xf5es s\xe3o armazenadas no projeto e em cada computador cliente. Por padr\xe3o, o n\xfamero da porta TCP usada pelo 4D Server e 4D no modo remoto \xe9 19813."),(0,r.kt)("p",null,"A personaliza\xe7\xe3o desse valor \xe9 necess\xe1ria quando se deseja usar v\xe1rios aplicativos 4D na mesma m\xe1quina; nesse caso, \xe9 necess\xe1rio especificar um n\xfamero de porta diferente para cada aplicativo. Quando voc\xea modifica esse valor no 4D Server ou no 4D, ele \xe9 automaticamente transmitido a todas as m\xe1quinas 4D conectadas ao banco de dados."),(0,r.kt)("p",null,"Para atualizar qualquer outro computador cliente que n\xe3o estiver conectado, basta inserir o novo n\xfamero da porta (precedido por dois pontos) ap\xf3s o endere\xe7o IP do computador servidor na guia ",(0,r.kt)("strong",{parentName:"p"},"Custom")," da caixa de di\xe1logo de conex\xe3o no momento da pr\xf3xima conex\xe3o. Por exemplo, se o novo n\xfamero de porta \xe9 19888:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(67276).Z,width:"466",height:"488"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Somente os bancos de dados publicados na mesma porta que a definida no cliente 4D s\xe3o vis\xedveis na p\xe1gina de publica\xe7\xe3o din\xe2mica TCP/IP.")),(0,r.kt)("h4",n({},{id:"4d-server-e-n\xfameros-de-portas"}),"4D Server e n\xfameros de portas"),(0,r.kt)("p",null,"O 4D Server usa tr\xeas portas TCP para comunica\xe7\xf5es entre servidores internos e clientes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SQL Server"),': 19812 por padr\xe3o (pode ser modificado na p\xe1gina "SQL/Configuration" das Prefer\xeancias).'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Application Server"),': 19813 por padr\xe3o (pode ser modificado atrav\xe9s da p\xe1gina "Cliente/Configura\xe7\xe3o" das Prefer\xeancias, veja acima).'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DB4D Server")," (servidor de banco de dados): 19814 por padr\xe3o . Esse n\xfamero de porta n\xe3o pode ser modificado diretamente, mas sempre consiste no n\xfamero da porta do servidor de aplica\xe7\xe3o + 1.\\\nQuando um cliente 4D se conecta ao 4D Server, ele usa a porta TCP do servidor de aplica\xe7\xe3o (19813 ou a porta indicada ap\xf3s os dois pontos ':' no endere\xe7o IP mostrado na caixa de di\xe1logo de conex\xe3o). A conex\xe3o com outros servidores atrav\xe9s de suas respectivas portas \xe9 ent\xe3o automaticamente; n\xe3o \xe9 mais necess\xe1rio especific\xe1-los.\\\nNote que, no caso de acesso via um roteador ou um firewall, as tr\xeas portas TCP devem ser abertas explicitamente.")),(0,r.kt)("h4",n({},{id:"autentica\xe7\xe3o-do-usu\xe1rio-com-o-servidor-de-dom\xednio"}),"Autentica\xe7\xe3o do usu\xe1rio com o servidor de dom\xednio"),(0,r.kt)("p",null,"Essa op\xe7\xe3o permite que voc\xea implemente recursos de SSO (",(0,r.kt)("em",{parentName:"p"},"Single Sign On"),") em seu banco de dados 4D Server no Windows. Quando voc\xea marca essa op\xe7\xe3o, 4D se conecta de forma transparente ao Active Directory do servidor de dom\xednio do Windows e obt\xe9m os tokens de autentica\xe7\xe3o dispon\xedveis. Essa op\xe7\xe3o \xe9 descrita na se\xe7\xe3o ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Single-Sign-On-SSO-on-Windows.300-5422467.en.html"}),"Single Sign On (SSO) no Windows")," ."),(0,r.kt)("h4",n({},{id:"service-principal-name"}),"Service Principal Name"),(0,r.kt)("p",null,"Quando o Single Sign On (SSO) estiver ativado (veja acima), voc\xea dever\xe1 preencher esse campo se quiser usar o Kerberos como protocolo de autentica\xe7\xe3o. Essa op\xe7\xe3o \xe9 descrita na se\xe7\xe3o ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Single-Sign-On-SSO-on-Windows.300-5422467.en.html"}),"Single Sign On (SSO) no Windows")," ."),(0,r.kt)("h4",n({},{id:"tempo-para-desconectar-cliente-servidor"}),"Tempo para desconectar cliente-servidor"),(0,r.kt)("p",null,"Esse dispositivo \xe9 usado para definir o tempo limite (per\xedodo de inatividade al\xe9m do qual a conex\xe3o \xe9 fechada) entre o 4D Server e as m\xe1quinas clientes que se conectam a ele. A op\xe7\xe3o Ilimitado remove o tempo limite. Quando essa op\xe7\xe3o \xe9 selecionada, o controle de atividade do cliente \xe9 eliminado."),(0,r.kt)("p",null,"Quando um tempo limite for selecionado, o servidor fechar\xe1 a conex\xe3o de um cliente se n\xe3o receber nenhuma solicita\xe7\xe3o dele durante o tempo limite especificado."),(0,r.kt)("h3",n({},{id:"comunica\xe7\xe3o-cliente-servidor"}),"Comunica\xe7\xe3o cliente-servidor"),(0,r.kt)("h4",n({},{id:"registrar-clientes-na-inicializa\xe7\xe3o-para-execute-on-client"}),"Registrar clientes na inicializa\xe7\xe3o para Execute On Client"),(0,r.kt)("p",null,"Quando essa op\xe7\xe3o estiver marcada, todas as m\xe1quinas remotas 4D conectando \xe0 base de dados podem executar os m\xe9todos remotamente. Este mecanismo \xe9 detalhado na se\xe7\xe3o ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Stored-procedures-on-client-machines.300-5422461.en.html"}),"procedimentos armazenados em m\xe1quinas cliente"),"."),(0,r.kt)("h4",n({},{id:"encriptar-as-comunica\xe7\xf5es-cliente-servidor"}),"Encriptar as comunica\xe7\xf5es cliente-servidor"),(0,r.kt)("p",null,"Essa op\xe7\xe3o permite que voc\xea ative o modo seguro para comunica\xe7\xf5es entre a m\xe1quina do servidor e as m\xe1quinas remotas 4D. Esta op\xe7\xe3o \xe9 detalhada na se\xe7\xe3o ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv19/4D/19/Encrypting-ClientServer-Connections.300-5422465.en.html"}),"Criptografar Client/Server Connections"),"."),(0,r.kt)("h4",n({},{id:"atualizar-a-pasta-resources-durante-uma-sess\xe3o"}),"Atualizar a pasta Resources durante uma sess\xe3o"),(0,r.kt)("p",null,"Essa configura\xe7\xe3o pode ser usada para definir globalmente o modo de atualiza\xe7\xe3o da inst\xe2ncia local da pasta ",(0,r.kt)("strong",{parentName:"p"},"Resources")," nas m\xe1quinas 4D conectadas quando a pasta ",(0,r.kt)("strong",{parentName:"p"},"Resources")," do banco de dados for modificada durante a sess\xe3o (a pasta ",(0,r.kt)("strong",{parentName:"p"},"Resources")," \xe9 sincronizada automaticamente na m\xe1quina remota sempre que uma sess\xe3o for aberta). Est\xe3o dispon\xedveis tr\xeas par\xe2metros:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Nunca"),": A pasta ",(0,r.kt)("strong",{parentName:"li"},"Recursos")," local n\xe3o \xe9 atualizada durante a sess\xe3o. A notifica\xe7\xe3o enviada pelo servidor \xe9 ignorada. A pasta ",(0,r.kt)("strong",{parentName:"li"},"Recursos")," local pode ser atualizada manualmente usando o comando do menu de a\xe7\xe3o ",(0,r.kt)("strong",{parentName:"li"},"Atualizar Recursos Locais")," (veja ",(0,r.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4Dv19/4D/19/Using-the-Resources-explorer.300-5416788.en.html"}),"Usando o Explorador de Recursos"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sempre"),": A sincroniza\xe7\xe3o da pasta ",(0,r.kt)("strong",{parentName:"li"},"Recursos")," local \xe9 realizada automaticamente durante a sess\xe3o sempre que a notifica\xe7\xe3o \xe9 enviada pelo servidor."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Perguntar"),": Quando a notifica\xe7\xe3o for enviada pelo servidor, uma caixa de di\xe1logo \xe9 exibida nas m\xe1quinas de cliente, indicando a modifica\xe7\xe3o. O usu\xe1rio pode ent\xe3o aceitar ou recusar a sincroniza\xe7\xe3o da pasta local ",(0,r.kt)("strong",{parentName:"li"},"Resources")," .\\\nA pasta ",(0,r.kt)("strong",{parentName:"li"},"Resources")," centraliza os arquivos personalizados necess\xe1rios para a interface do banco de dados (arquivos de tradu\xe7\xe3o, imagens, etc.). Mecanismos autom\xe1ticos ou manuais podem ser usados para notificar cada cliente quando o conte\xfado dessa pasta tiver sido modificado. Para obter mais informa\xe7\xf5es, consulte a se\xe7\xe3o ",(0,r.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4Dv19/4D/19/Managing-the-Resources-folder.300-5422466.en.html"}),"Managing the Resources folder")," .")),(0,r.kt)("h2",n({},{id:"p\xe1gina-configura\xe7\xe3o-ip"}),"P\xe1gina Configura\xe7\xe3o IP"),(0,r.kt)("h3",n({},{id:"tabela-de-configura\xe7\xe3o-autoriza\xe7\xe3o-rejei\xe7\xe3o"}),"Tabela de configura\xe7\xe3o Autoriza\xe7\xe3o-Rejei\xe7\xe3o"),(0,r.kt)("p",null,"Essa tabela permite definir regras de controle de acesso para o banco de dados, dependendo dos endere\xe7os IP da m\xe1quina remota 4D. Essa op\xe7\xe3o permite refor\xe7ar a seguran\xe7a, por exemplo, para aplicativos estrat\xe9gicos."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Esta tabela de configura\xe7\xe3o n\xe3o controla as liga\xe7\xf5es Web.")),(0,r.kt)("p",null,"O comportamento da tabela de configura\xe7\xe3o \xe9 o seguinte:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'A coluna "Allow-Deny" permite selecionar o tipo de regra a ser aplicada (Allow ou Deny) usando um menu pop-up. Para adicionar uma regra, clique no bot\xe3o Adicionar. Aparece uma nova linha na tabela. O bot\xe3o ',(0,r.kt)("strong",{parentName:"li"},"Delete")," permite que voc\xea remova a linha atual."),(0,r.kt)("li",{parentName:"ul"},'A coluna "IP Address" (Endere\xe7o IP) permite definir o(s) endere\xe7o(s) IP afetado(s) pela regra. Para especificar um endere\xe7o, clique na coluna e digite o endere\xe7o da seguinte forma: 123.45.67.89 (formato IPv4) ou 2001:0DB8:0000:85A3:0000:0000:AC1F:8001 (formato IPv6). Voc\xea pode usar um caractere ',(0,r.kt)("em",{parentName:"li"},' (asterisco) para especificar endere\xe7os do tipo "come\xe7a com". Por exemplo, 192.168.')," indica todos os endere\xe7os que come\xe7am com 192.168."),(0,r.kt)("li",{parentName:"ul"},"A aplica\xe7\xe3o das regras \xe9 baseada na ordem de exibi\xe7\xe3o da tabela. Se duas regras forem contradit\xf3rias, a prioridade ser\xe1 dada \xe0 regra localizada na parte mais alta da tabela. Voc\xea pode reordenar as linhas modificando a classifica\xe7\xe3o atual (clique no cabe\xe7alho da coluna para alternar a dire\xe7\xe3o da classifica\xe7\xe3o). Voc\xea tamb\xe9m pode mover as linhas usando o recurso de arrastar e soltar."),(0,r.kt)("li",{parentName:"ul"},"Por motivos de seguran\xe7a, somente os endere\xe7os que realmente correspondem a uma regra ter\xe3o permiss\xe3o para se conectar. Em outras palavras, se a tabela contiver apenas uma ou mais regras Deny, todos os endere\xe7os ser\xe3o recusados porque nenhum corresponder\xe1 a pelo menos uma regra. Se voc\xea quiser negar apenas determinados endere\xe7os (e permitir outros), adicione uma regra Allow * no final da tabela. Por exemplo:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Negar 192.168.* (negar todos os endere\xe7os que comecem por 192.168)"),(0,r.kt)("li",{parentName:"ul"},"Autorizar * (e autorizar outros)")))),(0,r.kt)("p",null,"Por padr\xe3o, nenhuma restri\xe7\xe3o de conex\xe3o \xe9 aplicada pelo 4D Server: a primeira linha da tabela cont\xe9m o r\xf3tulo Allow e o caractere * (todos os endere\xe7os)."))}u.isMDXComponent=!0},67276:(e,a,o)=>{o.d(a,{Z:()=>r});const r=o.p+"assets/images/client-server-network-2b3907f0e2e18d3fb768dafd1606ab20.png"}}]);