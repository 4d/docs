/*! For license information please see 13973aef.b093e6e0.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47190],{978784:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=i(474848),n=i(28453);const o={id:"web",title:"P\xe1gina da Web"},t=void 0,a={id:"settings/web",title:"P\xe1gina da Web",description:"Using the tabs on the Web page, you can configure various aspects of the integrated Web server of 4D (security, startup, connections, Web services, etc.). For more information about how the 4D Web server works, see Web server. Para obter mais informa\xe7\xf5es sobre os servi\xe7os Web 4D, consulte o cap\xedtulo Publica\xe7\xe3o e uso de Servi\xe7os Web.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/settings/web.md",sourceDirName:"settings",slug:"/settings/web",permalink:"/docs/pt/20/settings/web",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20settings%2Fweb.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"web",title:"P\xe1gina da Web"},sidebar:"docs",previous:{title:"P\xe1gina Cliente/Servidor",permalink:"/docs/pt/20/settings/client-server"},next:{title:"P\xe1gina SQL",permalink:"/docs/pt/20/settings/sql"}},d={},c=[{value:"Configura\xe7\xe3o",id:"Configura\xe7\xe3o",level:2},{value:"Informa\xe7\xf5es de publica\xe7\xe3o",id:"Informa\xe7\xf5es-de-publica\xe7\xe3o",level:3},{value:"Iniciar o servidor Web no arranque",id:"Iniciar-o-servidor-Web-no-arranque",level:4},{value:"Ativar HTTP",id:"Ativar-HTTP",level:4},{value:"Porta HTTP",id:"Porta-HTTP",level:4},{value:"Endere\xe7o IP",id:"Endere\xe7o-IP",level:4},{value:"Ativar HTTPS",id:"Ativar-HTTPS",level:4},{value:"Porta HTTPS",id:"Porta-HTTPS",level:4},{value:"Allow database Access through 4DSYNC URLs",id:"Allow-database-Access-through-4DSYNC-URLs",level:4},{value:"Caminhos",id:"Caminhos",level:3},{value:"Raiz HTML predefinida",id:"Raiz-HTML-predefinida",level:4},{value:"P\xe1gina inicial predefinida",id:"P\xe1gina-inicial-predefinida",level:4},{value:"Options (I)",id:"Options-I",level:2},{value:"Cache",id:"Cache",level:3},{value:"Usar o cache Web 4D",id:"Usar-o-cache-Web-4D",level:4},{value:"Tamanho da cache das P\xe1ginas",id:"Tamanho-da-cache-das-P\xe1ginas",level:4},{value:"Limpar cache",id:"Limpar-cache",level:4},{value:"Processo Web",id:"Processo-Web",level:3},{value:"Sess\xf5es escal\xe1veis (sess\xf5es multi-processo)",id:"Sess\xf5es-escal\xe1veis-sess\xf5es-multi-processo",level:4},{value:"Sem sess\xf5es",id:"Sem-sess\xf5es",level:4},{value:"Sess\xf5es herdadas (sess\xf5es de processo \xfanico)",id:"Sess\xf5es-herdadas-sess\xf5es-de-processo-\xfanico",level:4},{value:"Processos Web em simult\xe2neo m\xe1ximo",id:"Processos-Web-em-simult\xe2neo-m\xe1ximo",level:4},{value:"Reutiliza\xe7\xe3o de contextos tempor\xe1rios",id:"Reutiliza\xe7\xe3o-de-contextos-tempor\xe1rios",level:4},{value:"Utilizar processos preemptivos",id:"Utilizar-processos-preemptivos",level:4},{value:"Tempo limite do processo inativo",id:"Tempo-limite-do-processo-inativo",level:4},{value:"Palavras-passe Web",id:"Palavras-passe-Web",level:3},{value:"Op\xe7\xf5es (II)",id:"Op\xe7\xf5es-II",level:2},{value:"Convers\xe3o texto",id:"Convers\xe3o-texto",level:3},{value:"Enviar diretamente caracteres expandidos",id:"Enviar-diretamente-caracteres-expandidos",level:4},{value:"Standard Set",id:"Standard-Set",level:4},{value:"Liga\xe7\xf5es Keep-Alive",id:"Liga\xe7\xf5es-Keep-Alive",level:3},{value:"Par\xe2metros CORS",id:"Par\xe2metros-CORS",level:3},{value:"Ativar CORS",id:"Ativar-CORS",level:4},{value:"Nomes de dom\xednio/M\xe9todos HTTP permitidos",id:"Nomes-de-dom\xednioM\xe9todos-HTTP-permitidos",level:4},{value:"Registo (tipo)",id:"Registo-tipo",level:2},{value:"Formato do hist\xf3rico",id:"Formato-do-hist\xf3rico",level:3},{value:"Hist\xf3rico (backup)",id:"Hist\xf3rico-backup",level:2},{value:"Servi\xe7os Web",id:"Servi\xe7os-Web",level:2},{value:"Servidor",id:"Servidor",level:3},{value:"Cliente",id:"Cliente",level:3},{value:"Funcionalidades Web",id:"Funcionalidades-Web",level:2},{value:"Publica\xe7\xe3o",id:"Publica\xe7\xe3o",level:3},{value:"Expor como servidor REST",id:"Expor-como-servidor-REST",level:4},{value:"Acesso",id:"Acesso",level:3},{value:"Web Studio",id:"Web-Studio",level:3},{value:"Ativar o acesso ao est\xfadio Web",id:"Ativar-o-acesso-ao-est\xfadio-Web",level:4}];function l(e){const s={a:"a",blockquote:"blockquote",br:"br",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["Using the tabs on the ",(0,r.jsx)(s.strong,{children:"Web"})," page, you can configure various aspects of the integrated Web server of 4D (security, startup, connections, Web services, etc.). For more information about how the 4D Web server works, see ",(0,r.jsx)(s.a,{href:"/docs/pt/20/WebServer/overview",children:"Web server"}),". Para obter mais informa\xe7\xf5es sobre os servi\xe7os Web 4D, consulte o cap\xedtulo ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4Dv19/4D/19/Publication-and-use-of-Web-Services.200-5416624.en.html",children:"Publica\xe7\xe3o e uso de Servi\xe7os Web"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"Configura\xe7\xe3o",children:"Configura\xe7\xe3o"}),"\n",(0,r.jsx)(s.h3,{id:"Informa\xe7\xf5es-de-publica\xe7\xe3o",children:"Informa\xe7\xf5es de publica\xe7\xe3o"}),"\n",(0,r.jsx)(s.h4,{id:"Iniciar-o-servidor-Web-no-arranque",children:"Iniciar o servidor Web no arranque"}),"\n",(0,r.jsxs)(s.p,{children:["Indicates whether the Web server will be launched on startup of the 4D application. This option is described in the ",(0,r.jsx)(s.a,{href:"/docs/pt/20/WebServer/webServerAdmin#starting-the-4d-web-server",children:"Web server administration"})," section."]}),"\n",(0,r.jsx)(s.h4,{id:"Ativar-HTTP",children:"Ativar HTTP"}),"\n",(0,r.jsxs)(s.p,{children:["Indicates whether or not the Web server will accept non-secure connections. Ver ",(0,r.jsx)(s.a,{href:"/docs/pt/20/WebServer/webServerConfig#enable-http",children:"Ativar HTTP"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"Porta-HTTP",children:"Porta HTTP"}),"\n",(0,r.jsxs)(s.p,{children:["N\xfamero da porta IP (TCP) de escuta para HTTP. Ver ",(0,r.jsx)(s.a,{href:"/docs/pt/20/WebServer/webServerConfig#http-port",children:"Porta HTTP"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"Endere\xe7o-IP",children:"Endere\xe7o IP"}),"\n",(0,r.jsxs)(s.p,{children:["Endere\xe7o IP em que o servidor web 4D vai receber solicita\xe7\xf5es HTTP (4D local e 4D Server). See ",(0,r.jsx)(s.a,{href:"/docs/pt/20/WebServer/webServerConfig#ip-address-to-listen",children:"IP Address to listen"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"Ativar-HTTPS",children:"Ativar HTTPS"}),"\n",(0,r.jsxs)(s.p,{children:["Indicates whether or not the Web server will accept secure connections. Consulte ",(0,r.jsx)(s.a,{href:"/docs/pt/20/WebServer/webServerConfig#enable-https",children:"Habilitar HTTPS"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"Porta-HTTPS",children:"Porta HTTPS"}),"\n",(0,r.jsxs)(s.p,{children:["Permite modificar o n\xfamero da porta TCP/IP usada pelo servidor Web para as conex\xf5es HTTP seguras sobre TLS (protocolo HTTPS). Ver ",(0,r.jsx)(s.a,{href:"/docs/pt/20/WebServer/webServerConfig#https-port",children:"Porta HTTPS"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"Allow-database-Access-through-4DSYNC-URLs",children:"Allow database Access through 4DSYNC URLs"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"Compatibility Note"}),": This option is ",(0,r.jsx)(s.a,{href:"/docs/pt/20/WebServer/webServerConfig#deprecated-settings",children:"deprecated"}),". For database access through HTTP, it is now recommended to use ORDA remote datastore features and REST requests."]}),"\n",(0,r.jsx)(s.h3,{id:"Caminhos",children:"Caminhos"}),"\n",(0,r.jsx)(s.h4,{id:"Raiz-HTML-predefinida",children:"Raiz HTML predefinida"}),"\n",(0,r.jsxs)(s.p,{children:["Define the default location of the Web site files and to indicate the hierarchical level on the disk above which the files will not be accessible. Ver ",(0,r.jsx)(s.a,{href:"/docs/pt/20/WebServer/webServerConfig#root-folder",children:"Carpeta raiz"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"P\xe1gina-inicial-predefinida",children:"P\xe1gina inicial predefinida"}),"\n",(0,r.jsxs)(s.p,{children:["Designar uma p\xe1gina inicial padr\xe3o para o servidor Web. See ",(0,r.jsx)(s.a,{href:"/docs/pt/20/WebServer/webServerConfig#default-home-page",children:"Default Home page"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"Options-I",children:"Options (I)"}),"\n",(0,r.jsx)(s.h3,{id:"Cache",children:"Cache"}),"\n",(0,r.jsx)(s.h4,{id:"Usar-o-cache-Web-4D",children:"Usar o cache Web 4D"}),"\n",(0,r.jsxs)(s.p,{children:["Ativar o cache da p\xe1gina Web. Ver ",(0,r.jsx)(s.a,{href:"/docs/pt/20/WebServer/webServerConfig#cache",children:"Cache"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"Tamanho-da-cache-das-P\xe1ginas",children:"Tamanho da cache das P\xe1ginas"}),"\n",(0,r.jsxs)(s.p,{children:["Define o tamanho da cache. Ver ",(0,r.jsx)(s.a,{href:"/docs/pt/20/WebServer/webServerConfig#cache",children:"Cache"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"Limpar-cache",children:"Limpar cache"}),"\n",(0,r.jsx)(s.p,{children:"At any moment, you can clear the cache of the pages and images that it contains (if, for example, you have modified a static page and you want to reload it in the cache). At any moment, you can clear the cache of the pages and images that it contains (if, for example, you have modified a static page and you want to reload it in the cache). A cache \xe9 ent\xe3o imediatamente limpa."}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Tamb\xe9m pode utilizar o URL especial ",(0,r.jsx)(s.a,{href:"/docs/pt/20/WebServer/webServerAdmin#4dcacheclear",children:"/4DCACHECLEAR"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"Processo-Web",children:"Processo Web"}),"\n",(0,r.jsx)(s.p,{children:"This area allows you to configure how the web server will handle user sessions and their associated processes."}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.strong,{children:"Legacy sessions"})," option is only available for compatibility in databases/projects created with 4D versions prior to 4D v18 R6."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"Sess\xf5es-escal\xe1veis-sess\xf5es-multi-processo",children:"Sess\xf5es escal\xe1veis (sess\xf5es multi-processo)"}),"\n",(0,r.jsxs)(s.p,{children:["When you select this option (recommended), a user session is managed through a ",(0,r.jsx)(s.strong,{children:"Session"})," object. See the ",(0,r.jsx)(s.a,{href:"/docs/pt/20/WebServer/sessions#enabling-sessions",children:"User sessions page"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"Sem-sess\xf5es",children:"Sem sess\xf5es"}),"\n",(0,r.jsxs)(s.p,{children:["When this option is selected, the web server does not provide any specific support for ",(0,r.jsx)(s.a,{href:"/docs/pt/20/WebServer/sessions",children:"user sessions"}),". Successive requests from web clients are always independent and no context is maintained on the server."]}),"\n",(0,r.jsx)(s.p,{children:"Neste modo, pode configurar par\xe2metros do servidor Web adicionais:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"#maximum-concurrent-web-processes",children:"Processos Web em simult\xe2neo m\xe1ximo"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"#reuse-temporary-contexts",children:"Reutiliza\xe7\xe3o dos contextos tempor\xe1rios (4D em modo remoto)"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"#use-preemptive-web-processes",children:"Utilizar processos preemptivos"})}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"Sess\xf5es-herdadas-sess\xf5es-de-processo-\xfanico",children:"Sess\xf5es herdadas (sess\xf5es de processo \xfanico)"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"Compatibility Note:"})," This option is only available in databases/projects created with a 4D version prior to 4D v18 R6."]}),"\n",(0,r.jsxs)(s.p,{children:["Esta op\xe7\xe3o permite o gerenciamento de sess\xf5es de usu\xe1rio legadas pelo servidor 4D HTTP. Este mecanismo \xe9 descrito na sec\xe7\xe3o ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4Dv19/4D/19/Web-Sessions-Management-Legacy.300-5391806.en.html",children:"Gerenciamento de sess\xf5es Web (Legado)"}),". Veja ",(0,r.jsx)(s.a,{href:"/docs/pt/20/WebServer/webServerConfig#keep-session",children:"Manter Sess\xe3o"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["When selected, the ",(0,r.jsx)(s.a,{href:"#reuse-temporary-contexts",children:"Reuse Temporary Contexts (4D in remote mode)"})," option is automatically checked (and locked)."]}),"\n",(0,r.jsx)(s.h4,{id:"Processos-Web-em-simult\xe2neo-m\xe1ximo",children:"Processos Web em simult\xe2neo m\xe1ximo"}),"\n",(0,r.jsxs)(s.p,{children:["N\xe3o dispon\xedvel com ",(0,r.jsx)(s.a,{href:"/docs/pt/20/WebServer/sessions",children:"sess\xf5es expans\xedveis"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Limite estritamente superior de processos Web em simult\xe2neo. See ",(0,r.jsx)(s.a,{href:"/docs/pt/20/WebServer/webServerConfig#maximum-concurrent-web-processes",children:"Maximum Concurrent Web Processes"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"Reutiliza\xe7\xe3o-de-contextos-tempor\xe1rios",children:"Reutiliza\xe7\xe3o de contextos tempor\xe1rios"}),"\n",(0,r.jsxs)(s.p,{children:["N\xe3o dispon\xedvel com ",(0,r.jsx)(s.a,{href:"/docs/pt/20/WebServer/sessions",children:"sess\xf5es expans\xedveis"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Allows you to optimize the operation of the 4D Web server in remote mode. See ",(0,r.jsx)(s.a,{href:"/docs/pt/20/WebServer/webServerConfig#reuse-temporary-contexts-in-remote-mode",children:"Reuse temporary contexts in remote mode)"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"Utilizar-processos-preemptivos",children:"Utilizar processos preemptivos"}),"\n",(0,r.jsxs)(s.p,{children:["N\xe3o dispon\xedvel com ",(0,r.jsx)(s.a,{href:"/docs/pt/20/WebServer/sessions",children:"sess\xf5es expans\xedveis"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Permite processos web preemptivos nas suas aplica\xe7\xf5es compiladas. When ",(0,r.jsx)(s.strong,{children:"Use preemptive processes"})," is selected, the eligibility of your web-related code (including 4D tags and web database methods) to the preemptive execution will be evaluated during the compilation. For more information, see ",(0,r.jsx)(s.a,{href:"/docs/pt/20/WebServer/preemptiveWeb",children:"Using preemptive Web processes"}),"."]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["This option does not apply to scalable sessions, REST processes (compiled mode), and web service processes (server or client).  See ",(0,r.jsx)(s.a,{href:"/docs/pt/20/WebServer/preemptiveWeb#enabling-the-preemptive-mode-for-the-web-server",children:"Enabling the preemptive mode for the web server"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"Tempo-limite-do-processo-inativo",children:"Tempo limite do processo inativo"}),"\n",(0,r.jsxs)(s.p,{children:["N\xe3o dispon\xedvel com ",(0,r.jsx)(s.a,{href:"/docs/pt/20/WebServer/sessions",children:"sess\xf5es expans\xedveis"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Allows you to set the maximum timeout before closing for inactive Web processes on the server. See ",(0,r.jsx)(s.a,{href:"/docs/pt/20/WebServer/webServerConfig#inactive-process-timeout",children:"Inactive Process Timeout"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"Palavras-passe-Web",children:"Palavras-passe Web"}),"\n",(0,r.jsx)(s.p,{children:"Set the authentication system that you want to apply to your Web server. S\xe3o propostas tr\xeas op\xe7\xf5es:"}),"\n",(0,r.jsx)(s.p,{children:"Custom (default) Passwords with BASIC protocol Passwords with DIGEST protocol"}),"\n",(0,r.jsxs)(s.p,{children:["\xc9 recomendado usar a autentica\xe7\xe3o ",(0,r.jsx)(s.strong,{children:"personalizada"}),". See ",(0,r.jsx)(s.a,{href:"/docs/pt/20/WebServer/authentication",children:(0,r.jsx)(s.strong,{children:"Authentication"})})," chapter in the ",(0,r.jsx)(s.em,{children:"Web Development"})," documentation."]}),"\n",(0,r.jsx)(s.h2,{id:"Op\xe7\xf5es-II",children:"Op\xe7\xf5es (II)"}),"\n",(0,r.jsx)(s.h3,{id:"Convers\xe3o-texto",children:"Convers\xe3o texto"}),"\n",(0,r.jsx)(s.h4,{id:"Enviar-diretamente-caracteres-expandidos",children:"Enviar diretamente caracteres expandidos"}),"\n",(0,r.jsxs)(s.p,{children:["Ver ",(0,r.jsx)(s.a,{href:"/docs/pt/20/WebServer/webServerConfig#deprecated-settings",children:"Propriedades obsoletas"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"Standard-Set",children:"Standard Set"}),"\n",(0,r.jsxs)(s.p,{children:["Defina o conjunto de caracteres a serem usados pelo servidor Web 4D. Ver ",(0,r.jsx)(s.a,{href:"/docs/pt/20/WebServer/webServerConfig#character-set",children:"Conjunto de caracteres"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"Liga\xe7\xf5es-Keep-Alive",children:"Liga\xe7\xf5es Keep-Alive"}),"\n",(0,r.jsxs)(s.p,{children:["Ver ",(0,r.jsx)(s.a,{href:"/docs/pt/20/WebServer/webServerConfig#keep-alive-connections",children:"Propriedades obsoletas"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"Par\xe2metros-CORS",children:"Par\xe2metros CORS"}),"\n",(0,r.jsx)(s.h4,{id:"Ativar-CORS",children:"Ativar CORS"}),"\n",(0,r.jsxs)(s.p,{children:["Ativa o servi\xe7o Cross-origin resource sharing (CORS). Ver ",(0,r.jsx)(s.a,{href:"/docs/pt/20/WebServer/webServerConfig#enable-cors-service",children:"Ativar CORS"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"Nomes-de-dom\xednioM\xe9todos-HTTP-permitidos",children:"Nomes de dom\xednio/M\xe9todos HTTP permitidos"}),"\n",(0,r.jsxs)(s.p,{children:["Lista de hosts e m\xe9todos permitidos para o servi\xe7o CORS. Ver ",(0,r.jsx)(s.a,{href:"/docs/pt/20/WebServer/webServerConfig#cors-settings",children:"Par\xe2metros CORS"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"Registo-tipo",children:"Registo (tipo)"}),"\n",(0,r.jsx)(s.h3,{id:"Formato-do-hist\xf3rico",children:"Formato do hist\xf3rico"}),"\n",(0,r.jsxs)(s.p,{children:["Inicia ou interrompe o registro das solicita\xe7\xf5es recebidas pelo servidor da Web 4D no arquivo ",(0,r.jsx)(s.em,{children:"logweb.txt"})," e define seu formato. Consulte ",(0,r.jsx)(s.a,{href:"/docs/pt/20/WebServer/webServerConfig#log-recording",children:"Registro de logs"}),"."]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["A ativa\xe7\xe3o e a desativa\xe7\xe3o do arquivo de hist\xf3rico de solicita\xe7\xf5es tamb\xe9m podem ser realizadas por programa\xe7\xe3o usando o comando ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1210.html",children:"WEB SET OPTION"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"O menu de formato do hist\xf3rico oferece as seguintes op\xe7\xf5es:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"No Log File"}),": When this option is selected, 4D will not generate a log file of requests."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"CLF (Common Log Format)"}),": When this option is selected, the log of requests is generated in CLF format. With the CLF format, each line of the file represents a request, such as:",(0,r.jsx)(s.br,{}),'\nhost rfc931 user [DD/MMM/YYYY:HH:MM:SS] "request" state length',(0,r.jsx)(s.br,{}),"\nEach field is separated by a space and each line ends by the CR/LF sequence (character 13, character 10)."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"host: endere\xe7o IP do cliente (ex. 192.100.100.10)"}),"\n",(0,r.jsx)(s.li,{children:"rfc931: informa\xe7\xe3o n\xe3o \xe9 gerada por 4D, \xe9 sempre - (um sinal de menos)"}),"\n",(0,r.jsx)(s.li,{children:"usu\xe1rio: nome de usu\xe1rio como ele est\xe1 autenticado, ou ent\xe3o \xe9 - (um sinal menos). Se o nome de usu\xe1rio contiver espa\xe7os, eles ser\xe3o substitu\xeddos por _ (um sublinhado)."}),"\n",(0,r.jsx)(s.li,{children:"DD: day, MMM: a 3-letter abbreviation for the month name (Jan, Feb,...), YYYY: year, HH: hour, MM: minutes, SS: seconds"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"A data e a hora s\xe3o locais para o servidor."}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"peti\xe7\xe3o: peti\xe7\xe3o enviada pelo cliente (por exemplo, GET /index.htm HTTP/1.0)"}),"\n",(0,r.jsx)(s.li,{children:"estado: resposta dada pelo servidor."}),"\n",(0,r.jsx)(s.li,{children:"length: tamanho dos dados devolvidos (exceto o cabe\xe7alho HTTP) ou 0."}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note:"})," For performance reasons, the operations are saved in a memory buffer in packets of 1Kb before being written to disk. The operations are also written to disk if no request has been sent every 5 seconds. The possible values of state are as follows: 200: OK 204: No contents 302: Redirection 304: Not modified 400: Incorrect request 401: Authentication required 404: Not found 500: Internal error The CLF format cannot be customized."]}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"DLF (Combined Log Format)"}),": When this option is selected, the request log is generated in DLF format. DLF format is similar to CLF format and uses exactly the same structure. Simplesmente adiciona dois campos HTTP adicionais no final de cada solicita\xe7\xe3o: Referer e User-agent."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Referer: Contains the URL of the page pointing to the requested document."}),"\n",(0,r.jsx)(s.li,{children:"User-agent: Contains the name and version of the browser or software of the client at the origin of the request."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"O formato DLF n\xe3o pode ser personalizado."}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"ELF (Extended Log Format)"}),": When this option is selected, the request log is generated in ELF format. O formato ELF est\xe1 muito difundido no mundo dos navegadores HTTP. Ele pode ser usado para criar registros sofisticados que atendam a necessidades espec\xedficas. For this reason, the ELF format can be customized: it is possible to choose the fields to be recorded as well as their order of insertion into the file."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"WLF (WebStar Log Format)"}),": When this option is selected, the request log is generated in WLF format. O formato WLF foi desenvolvido especificamente para o servidor 4D WebSTAR. Ele \xe9 semelhante ao formato ELF, com apenas alguns campos adicionais. Tal como o formato ELF, pode ser personalizado."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Configuring the fields"}),' When you choose the ELF (Extended Log Format) or WLF (WebStar Log Format) format, the "Weg Log Token Selection" area displays the fields available for the chosen format. You will need to select each field to be included in the log. To do so, check the desired fields. You will need to select each field to be included in the log. To do so, check the desired fields.']}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Nota"}),": N\xe3o \xe9 poss\xedvel selecionar duas vezes o mesmo campo."]}),"\n",(0,r.jsx)(s.p,{children:"The following table lists the fields available for each format (in alphabetical order) and describes its contents:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Campo"}),(0,r.jsx)(s.th,{children:"ELF"}),(0,r.jsx)(s.th,{children:"WLF"}),(0,r.jsx)(s.th,{children:"Valor"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"BYTES_RECEIVED"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"N\xfamero de bytes recebidos pelo servidor"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"BYTES_SENT"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"N\xfamero de bytes enviados pelo servidor ao cliente"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"C_DNS"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"Endere\xe7o IP do DNS (ELF: campo id\xeantico ao campo C_IP)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"C_IP"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"Endere\xe7o IP do cliente (por exemplo, 192.100.100.10)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CONNECTION_ID"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"N\xfamero de identifica\xe7\xe3o da liga\xe7\xe3o"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CS(COOKIE)"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"Informa\xe7\xf5es sobre as cookies contidas na peti\xe7\xe3o HTTP"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CS(HOST)"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"Campo Host do pedido HTTP"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CS(REFERER)"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"URL da p\xe1gina que aponta para o documento solicitado"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CS(USER_AGENT)"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"Informa\xe7\xf5es sobre o software e o sistema operacional do cliente"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CS_SIP"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"Endere\xe7o IP do servidor"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CS_URI"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"URI onde o pedido \xe9 efectuado"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CS_URI_QUERY"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"Par\xe2metros da consulta"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CS_URI_STEM"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"Parte da solicita\xe7\xe3o sem par\xe2metros de consulta"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"DATE"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"DDD: dia, MMM: abrevia\xe7\xe3o de 3 letras por m\xeas (jan, fev, etc.), YYYY: ano"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"METHOD"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"M\xe9todo HTTP utilizado para o pedido enviado ao servidor"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"PATH_ARGS"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:'Par\xe2metros CGI: cadeia de caracteres localizada ap\xf3s o caractere "$"'})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"STATUS"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"Resposta fornecida pelo servidor"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"TIME"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"HH: hora, MM: minutos, SS: segundos"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"TRANSFER_TIME"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"Tempo solicitado pelo servidor para gerar a resposta"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"USER"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"Nome do usu\xe1rio se estiver autenticado; caso contr\xe1rio, - (sinal de menos)."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Se o nome do usu\xe1rio contiver espa\xe7os, eles ser\xe3o substitu\xeddos por _ (sublinhado)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"URL"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"URL solicitado pelo cliente"})]})]})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"As datas e horas s\xe3o indicadas em GMT."}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"Hist\xf3rico-backup",children:"Hist\xf3rico (backup)"}),"\n",(0,r.jsx)(s.p,{children:"Configure the automatic backup parameters for the request log. Configure the automatic backup parameters for the request log. First you must choose the frequency (days, weeks, etc.) or the file size limit criterion by clicking on the corresponding radio button. Configure the automatic backup parameters for the request log. First you must choose the frequency (days, weeks, etc.) or the file size limit criterion by clicking on the corresponding radio button. Voc\xea deve ent\xe3o especificar o momento exato do backup, se necess\xe1rio."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"No Backup"}),": The scheduled backup function is deactivated."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Every X hour(s)"}),": This option is used to program backups on an hourly basis. Pode digitar um valor entre 1 e 24."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"starting at"}),": Used to set the time at which the first back up will begin."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Every X day(s) at X"}),": This option is used to program backups on a daily basis. Introduza 1 se pretender efetuar uma c\xf3pia de seguran\xe7a di\xe1ria. When this option is checked, you must indicate the time when the backup must be started."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Every X week(s), day at X"}),": This option is used to program backups on a weekly basis. Digite 1 se quiser realizar o backup 1 vez por semana. Digite 1 se quiser realizar o backup 1 vez por semana. Enter 1 if you want to perform a weekly backup. When this option is checked, you must indicate the day(s) of the week and the time when each backup must be started."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Every X month(s), Xth day at X"}),": This option is used to program backups on a monthly basis. Digite 1 se quiser realizar uma c\xf3pia de seguran\xe7a mensal. Digite 1 se quiser realizar uma c\xf3pia de seguran\xe7a mensal."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Every X MB"}),": This option is used to program backups based on the size of the current request log file. Um backup \xe9 acionado automaticamente quando o arquivo atinge o tamanho definido. Pode definir um limite de tamanho de 1, 10, 100 ou 1000 MB."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"In the case of scheduled backups, if the Web server was not launched when the backup was scheduled to occur, on the next startup 4D considers the backup as failed and applies the appropriate settings, set via the Database Settings."}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"Servi\xe7os-Web",children:"Servi\xe7os Web"}),"\n",(0,r.jsx)(s.p,{children:"You use the options on this tab to activate and configure Web services for the 4D project, both for their publishing (server side) and their subscription (client side)."}),"\n",(0,r.jsxs)(s.p,{children:["Para obter mais informa\xe7\xf5es sobre o suporte de servi\xe7os Web em 4D, consulte o cap\xedtulo ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/What-s-new/4D-Design-Reference-19-R4/Publication-and-use-of-Web-Services.200-5736722.en.html",children:"Publica\xe7\xe3o e uso de servi\xe7os Web"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"Servidor",children:"Servidor"}),"\n",(0,r.jsx)(s.p,{children:'This area contains various options related to the use of 4D as a Web Services "server" i.e., publishing project methods in the form of Web Services.'}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Allow Web Services Requests"}),": This option lets you initialize the publication of Web Services. If this option has not been checked, 4D refuses SOAP requests and does not generate a WSDL - even if methods have the ",(0,r.jsx)(s.em,{children:"Published in WSDL"})," attribute. Quando essa op\xe7\xe3o est\xe1 marcada, 4D cria o arquivo WSDL."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Web Service Name"}),': This area lets you change the "generic name" of the Web Service. This name is used to differentiate the services both at the SOAP server level (when the server publishes several different Web Services), as well as in the Web Services directories. Por padr\xe3o, 4D usa o nome A_WebService.']}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Web Services Namespace"}),": This area is used to change the namespace of the Web Services published by 4D. Cada servi\xe7o Web publicado na Internet deve ser \xfanico. The uniqueness of the names of Web Services is ensured by using XML namespaces. A namespace is an arbitrary character string used to identify a set of XML tags in a unique way. Normalmente, o namespace come\xe7a com a URL da empresa (",(0,r.jsx)(s.a,{href:"http://mycompany.com/mynamespace",children:"http://mycompany.com/mynamespace"}),"). In this case, it is not indispensable to have anything in particular at the URL indicated; what matters is that the character string used is unique. Por padr\xe3o, o 4D usa o seguinte namespace: ",(0,r.jsx)(s.a,{href:"http://www.4d.com/namespace/default",children:"http://www.4d.com/namespace/default"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"In conformity with the XML standard for tag names, the character strings used must not contain spaces nor start with a number. Moreover, to avoid any risk of incompatibility, we recommend that you do not use any extended characters (such as accented characters)."}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"Cliente",children:"Cliente"}),"\n",(0,r.jsx)(s.p,{children:'This area contains various options related to the use of 4D as a Web Services "client" i.e., subscribing to services published on the network.'}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Wizard Method Prefix"}),': This area lets you change the prefix that is added automatically by 4D to the name of proxy methods generated by the Web Services Wizard. Proxy project methods form a link between the 4D application and the Web Services server. Por padr\xe3o, 4D usa o prefixo "proxy_".']}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"Funcionalidades-Web",children:"Funcionalidades Web"}),"\n",(0,r.jsx)(s.p,{children:"This page contains the options used to enable and control advanced Web features such as the REST server."}),"\n",(0,r.jsx)(s.h3,{id:"Publica\xe7\xe3o",children:"Publica\xe7\xe3o"}),"\n",(0,r.jsx)(s.h4,{id:"Expor-como-servidor-REST",children:"Expor como servidor REST"}),"\n",(0,r.jsxs)(s.p,{children:["Inicia e p\xe1ra o servidor REST. Ver ",(0,r.jsx)(s.a,{href:"/docs/pt/20/REST/configuration",children:"Configura\xe7\xe3o do servidor REST"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"Acesso",children:"Acesso"}),"\n",(0,r.jsxs)(s.p,{children:["This option specifies a group of 4D users that is authorized to establish the link to the 4D database using REST requests. See ",(0,r.jsx)(s.a,{href:"/docs/pt/20/REST/configuration#configuring-rest-access",children:"Configuring REST access"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"Web-Studio",children:"Web Studio"}),"\n",(0,r.jsx)(s.h4,{id:"Ativar-o-acesso-ao-est\xfadio-Web",children:"Ativar o acesso ao est\xfadio Web"}),"\n",(0,r.jsx)(s.p,{children:"Ativa o acesso geral ao Web studio. Continua a ser necess\xe1rio configur\xe1-lo em cada n\xedvel de projeto."})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,s,i)=>{var r=i(296540),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,i){var r,o={},c=null,l=null;for(r in void 0!==i&&(c=""+i),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(l=s.ref),s)t.call(s,r)&&!d.hasOwnProperty(r)&&(o[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:n,type:e,key:c,ref:l,props:o,_owner:a.current}}s.Fragment=o,s.jsx=c,s.jsxs=c},474848:(e,s,i)=>{e.exports=i(221020)},28453:(e,s,i)=>{i.d(s,{R:()=>t,x:()=>a});var r=i(296540);const n={},o=r.createContext(n);function t(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);