"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1383"],{968229:function(e,s,o){o.r(s),o.d(s,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>t,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/web-get-option","title":"WEB GET OPTION","description":"WEB GET OPTION ( seletor ; valor )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-get-option.md","sourceDirName":"commands-legacy","slug":"/commands/web-get-option","permalink":"/docs/pt/20-R7/commands/web-get-option","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-get-option.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-get-option","title":"WEB GET OPTION","slug":"/commands/web-get-option","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB GET HTTP HEADER","permalink":"/docs/pt/20-R7/commands/web-get-http-header"},"next":{"title":"WEB Get server info","permalink":"/docs/pt/20-R7/commands/web-get-server-info"}}'),a=o("785893"),n=o("250065");let d={id:"web-get-option",title:"WEB GET OPTION",slug:"/commands/web-get-option",displayed_sidebar:"docs"},i=void 0,t={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let s={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"WEB GET OPTION"})," ( ",(0,a.jsx)(s.em,{children:"seletor"})," ; ",(0,a.jsx)(s.em,{children:"valor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Par\xe2metro"}),(0,a.jsx)(s.th,{children:"Tipo"}),(0,a.jsx)(s.th,{}),(0,a.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"seletor"}),(0,a.jsx)(s.td,{children:"Integer"}),(0,a.jsx)(s.td,{children:"\u2192"}),(0,a.jsx)(s.td,{children:"C\xf3digo da op\xe7\xe3o a modificar"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"valor"}),(0,a.jsx)(s.td,{children:"Integer, Text, Collection"}),(0,a.jsx)(s.td,{children:"\u2190"}),(0,a.jsx)(s.td,{children:"Valor da op\xe7\xe3o"})]})]})]}),"\n",(0,a.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(s.p,{children:["O comando ",(0,a.jsx)(s.strong,{children:"WEB GET OPTION"})," permite ler o valor atual de uma op\xe7\xe3o de funcionamento do servidor web de 4D."]}),"\n",(0,a.jsxs)(s.p,{children:["O par\xe2metro ",(0,a.jsx)(s.em,{children:"seletor"})," indica a op\xe7\xe3o web a ler. Passe neste par\xe2metro uma constante do tema ",(0,a.jsx)(s.em,{children:"Web Server"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Constante"}),(0,a.jsx)(s.th,{children:"Valor"}),(0,a.jsx)(s.th,{children:"Coment\xe1rio"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Web character set"}),(0,a.jsx)(s.td,{children:"17"}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.strong,{children:"Alcance"}),": 4D local, 4D Server",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Descri\xe7\xe3o"}),": conjunto de caracteres que o servidor Web 4D (com 4D em modo local e 4D Server) utiliza para comunicar-se com os navegadores web que se conectam a base. O valor por defeito depende da linguagem do sistema operativo. Este par\xe2metro se define nas Propriedades da base.",(0,a.jsx)(s.br,{})," ",(0,a.jsx)(s.strong,{children:"Valores"}),": os valores poss\xedveis dependem do modo de execu\xe7\xe3o da base relativos ao conjunto de caracteres.",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.em,{children:"Modo Unicode"}),": quando a aplica\xe7\xe3o \xe9 executada em modo Unicode, os valores a ser passados para este par\xe2metro s\xe3o os identificadores de conjunto de caracteres (MIBEnum longint ou nome de cadeia de caracteres, identificadores definidos por IANA, consulte: ",(0,a.jsx)(s.a,{href:"http://www.iana.org/assignments/character-sets",children:"http://www.iana.org/assignments/character-sets"}),"). Est\xe1 \xe9 a lista dos identificadores correspondentes aos conjuntos de caracteres que admite o servidor Web de 4D:",(0,a.jsx)(s.br,{})," 4=ISO-8859-1",(0,a.jsx)(s.br,{}),"12=ISO-8859-9",(0,a.jsx)(s.br,{}),"13=ISO-8859-10",(0,a.jsx)(s.br,{}),"17=Shift-JIS",(0,a.jsx)(s.br,{}),"2024=Windows-31J",(0,a.jsx)(s.br,{}),"2026=Big5",(0,a.jsx)(s.br,{}),"38=euc-kr",(0,a.jsx)(s.br,{}),"106=UTF-8",(0,a.jsx)(s.br,{}),"2250=Windows-1250",(0,a.jsx)(s.br,{}),"2251=Windows-1251",(0,a.jsx)(s.br,{}),"2253=Windows-1253",(0,a.jsx)(s.br,{}),"2255=Windows-1255",(0,a.jsx)(s.br,{}),"2256=Windows-1256",(0,a.jsx)(s.em,{children:"Modo compatibilidade ASCII"}),":",(0,a.jsx)(s.br,{}),"0: Ocidental",(0,a.jsx)(s.br,{}),"1: Japon\xeas",(0,a.jsx)(s.br,{}),"2: Chin\xeas ",(0,a.jsx)(s.br,{}),"3: Coreano",(0,a.jsx)(s.br,{}),"4: Definido pelo usu\xe1rio",(0,a.jsx)(s.br,{}),"5: Reservado",(0,a.jsx)(s.br,{}),"6: Europa central",(0,a.jsx)(s.br,{}),"7: Cir\xedlico",(0,a.jsx)(s.br,{})," 8: \xc1rabe",(0,a.jsx)(s.br,{}),"9: Grego",(0,a.jsx)(s.br,{}),"10: Hebraico",(0,a.jsx)(s.br,{}),"11: Turco",(0,a.jsx)(s.br,{}),"12: N\xf3rdico"]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Web Client IP address to listen"}),(0,a.jsx)(s.td,{children:"23"}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.strong,{children:"Escopo"}),": Todas m\xe1quinas remotas 4D",(0,a.jsx)(s.br,{})," ",(0,a.jsx)(s.strong,{children:"Mantido entre duas sess\xf5es"}),": Sim",(0,a.jsx)(s.br,{})," ",(0,a.jsx)(s.strong,{children:"Valores poss\xedveis"}),": Ver seletor 16",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Descri\xe7\xe3o"}),": Usado para especificar este par\xe2metro para todas as m\xe1quinas remotas 4D usadas como servidores Web. Os valores definidos usando o seletor s\xe3o aplicadas a todas as m\xe1quinas remotas usadas como servidores WEb. Se quiser definir valores apenas para certas m\xe1quinas remotas, use a caixa de di\xe1logo Configura\xe7\xf5es de banco de dados de 4D em modo remoto."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Web CORS enabled"}),(0,a.jsx)(s.td,{children:"92"}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.strong,{children:"Escopo:"})," Servidor Web Local",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Description:"})," CORS (",(0,a.jsx)(s.em,{children:"Cross-origin resource sharing"}),") estado servi\xe7o para servidor Web. Se ativdo, XHR (por exemplo. REST) chamdas de p\xe1ginas Web de fora do dom\xednimo podem ser permitidas na aplica\xe7\xe3o. (",(0,a.jsx)(s.strong,{children:"Nota:"}),' uma lista de endere\xe7os e m\xe9todos permitidos para usar o servi\xe7o CORS tamb\xe9m deve ser definida, ver Web CORS settings). Quando o servi\xe7o CORS estiver desativado, peti\xe7\xf5es CORS s\xe3o ignoradas. Quando o servi\xe7o CORS estiver ativado e um dom\xednio ou m\xe9todo n\xe3o permitido enviar uma peti\xe7\xe3o crosssite, ser\xe1 rejeitada com uma respota de erro "403 - forbidden". ',(0,a.jsx)(s.strong,{children:"Valores poss\xedveis:"})," 0 (desativado, normal) ou 1 (ativado)"]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Web CORS settings"}),(0,a.jsx)(s.td,{children:"93"}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.strong,{children:"Escopo:"})," Servidor Web Local",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Descrip\xe7\xe3o:"})," Lista de hosts e m\xe9todos permitidos para o servi\xe7o CORS.",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Valores poss\xedveis:"})," Cole\xe7\xe3o d eobjetos CORS com as propriedades abaixo:                   ",(0,a.jsx)(s.table,{children:(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.strong,{children:"Propriedade"})}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.strong,{children:"Tipo"})}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.strong,{children:"Descri\xe7\xe3o"})})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"[ ].host"}),(0,a.jsx)(s.td,{children:"Texto"}),(0,a.jsxs)(s.td,{children:[(0,a.jsxs)(s.em,{children:[(0,a.jsx)(s.em,{children:"Obrigat\xf3rio"})," -- Se host n\xe3o estiver presente, ou vazio, o objeto \xe9 ignorado"]}),(0,a.jsx)(s.br,{}),"Nome de dom\xednio ou endere\xe7o IP do qual p\xe1ginas externas s\xe3o permitidas de enviar peti\xe7\xf5es de dados para o Servirdor via CORS. Atrib\xfatos m\xfaltiplos de dom\xednio podem ser adicionados para criar uma white list. V\xe1rias sintaxes s\xe3o compat\xedveis:",(0,a.jsx)(s.br,{}),"192.168.5.17:8081",(0,a.jsx)(s.br,{}),"192.168.5.17",(0,a.jsx)(s.br,{}),"192.168.*",(0,a.jsx)(s.br,{}),"192.168.*:8081",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.a,{href:"http://192.168.5.17:8081",children:"http://192.168.5.17:8081"}),(0,a.jsx)(s.br,{}),"http://*.myDomain.com",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.a,{href:"http://myProject.myDomain.com",children:"http://myProject.myDomain.com"}),(0,a.jsx)(s.br,{}),"*.myDomain.com",(0,a.jsx)(s.br,{}),"myProject.myDomain.com",(0,a.jsx)(s.br,{}),"*"]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"[ ].methods"}),(0,a.jsx)(s.td,{children:"Texto"}),(0,a.jsxs)(s.td,{children:["M\xe9todos de HTTP aceitos para o host CORS correspondente",(0,a.jsx)(s.br,{}),'Separe cada m\xe9todo com ";" (por exemplo.: "post;get")',(0,a.jsx)(s.br,{}),"Se ",(0,a.jsx)(s.em,{children:"m\xe9todos"})," for vazio, null, ou indefinido: todos os m\xe9todos est\xe3o ativados."]})]})]})})]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Web debug log"}),(0,a.jsx)(s.td,{children:"84"}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.strong,{children:"Alcance:"})," servidor web local",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Descri\xe7\xe3o:"}),' lhe permite obter ou definir o estado do arquivo de hist\xf3rico de peti\xe7\xf5es HTTP do servidor Web 4D. Quando for ativado, este arquivo, chamado "',(0,a.jsxs)(s.strong,{children:["HTTPDebugLog_",(0,a.jsx)(s.em,{children:"nn"}),".txt"]}),'", \xe9 guardado na pasta "Logs" do aplicativo (',(0,a.jsx)(s.em,{children:"nn"})," \xe9 o n\xfamero de arquivo). \xc9 \xfatil para problemas de depura\xe7\xe3o relacionados com o servidor web. Registra cada peti\xe7\xe3o e cada resposta em modo raw. A totalidade das peti\xe7\xf5es, cabe\xe7alhos, se registram; opcionalmente, tamb\xe9m se podemn registrar partes do corpo.Para maior informa\xe7\xe3o sobre arquivos HTTPDebugLog, consulte a se\xe7\xe3o ",(0,a.jsx)(s.em,{children:"Descri\xe7\xe3o de arquivos de log"}),".",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Valores"}),': uma das constantes com o prefixo "wdl" (consulte as descri\xe7\xf5es destas constantes neste tema).',(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Valor por padr\xe3o"}),": 0 (n\xe3o ativado)"]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Web HSTS enabled"}),(0,a.jsx)(s.td,{children:"86"}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.strong,{children:"Escopo"}),": 4D local, 4D Server. ",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Descri\xe7\xe3o"}),": status HTTP Strict Transport Security (HSTS). HSTS permite que 4D Web server declare que browsers devem interagir apenas com as conex\xf5es HTTPS seguras. Quando for ativado, o web server 4D vai adicionar automaticamente informa\xe7\xe3o HSTS-relacionada para todos os cabe\xe7alhos de resposta. Os navegadores v\xe3o gravar a informa\xe7\xe3o HSTS na primeiva vez que recebam a resposta do servidor 4D Web, ent\xe3o qualquer peti\xe7\xf5es futuras HTTP v\xe3o automaticamente ser transformadas em peti\xe7\xf5es HTTPS. O tamanho de tempo que essa informa\xe7\xe3o ser\xe1 armazenada pelo navegador est\xe1 especificada com o seletor Web HSTS max age. ",(0,a.jsx)(s.br,{}),"HSTS exige que HTTPS esteja ativado no servidor. HTTP tamb\xe9m deve estar ativado para permitir conex\xf5es iniciais do cliente.",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Valores poss\xedveis"}),": 0 (desativado, default) ou 1 (ativado)",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Nota:"})," o servidor 4D Web deve ser reiniciado para esta configura\xe7\xe3o ser aplicada"]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Web HSTS max age"}),(0,a.jsx)(s.td,{children:"87"}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.strong,{children:"EScopo"}),": 4D local, 4D Server",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Descri\xe7\xe3o"}),": Especifica o tamanho m\xe1ximo de tempo (em segundos) que HSTS est\xe1 ativado para cada nova conex\xe3o cliente. Essa informa\xe7\xe3o \xe9 armazenada no lado do cliente para a dura\xe7\xe3o especificada.",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Valores poss\xedveis"}),": Longint (segundos) ",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Valor Default"}),": 63072000 (2 anos)",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.br,{}),(0,a.jsxs)(s.em,{children:[(0,a.jsx)(s.em,{children:"Aviso:"})," Assim que HSTS for ativado, conex\xf5es cliente v\xe3o continuar a usar esse mecanismo para a dura\xe7\xe3o especificada. Quando estiver testando suas aplica\xe7\xf5es, \xe9 recomendado estabelecer uma dura\xe7\xe3o pequena para poder trocar entre modos de conex\xe3o seguro e n\xe3o seguro se necess\xe1rio."]})]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Web HTTP compression level"}),(0,a.jsx)(s.td,{children:"50"}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.strong,{children:"Alcance"}),": Servidor web local**",(0,a.jsx)(s.br,{}),"** ",(0,a.jsx)(s.strong,{children:"Descri\xe7\xe3o"}),": n\xedvel de compreens\xe3o para todos os interc\xe2mbios HTTP comprimidos efetuados para o servidor HTTP de 4D (pedidos cliente ou respostas servidor, Web e servi\xe7o web). Este seletor permite otimizar os interc\xe2mbios com um enfoque na velocidade de execu\xe7\xe3o (menor compreens\xe3o) ou a quantidade de compreens\xe3o (menor velocidade). A escolha de um valor depende do tamanho e a natureza dos dados trocados . Passe de 1 a 9 no par\xe2metro ",(0,a.jsx)(s.em,{children:"valor"}),", 1 \xe9 a compreens\xe3o mais r\xe1pida e 9 a mais alta. Tamb\xe9m pode passar -1 para obter um compromisso entre velocidade e taxas de compreens\xe3o. O n\xedvel de compreens\xe3o por padr\xe3o \xe9 1 (compreens\xe3o r\xe1pida).",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Valores poss\xedveis"}),": 1 a 9 (1 = mais r\xe1pido, mais comprimido = 9) o -1 = melhor compromisso."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Web HTTP compression threshold"}),(0,a.jsx)(s.td,{children:"51"}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.strong,{children:"Alcance"}),": Servidor HTTP local",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Descri\xe7\xe3o"}),": em interc\xe2mbios HTTP otimizados, limite de tamanho de peti\xe7\xe3o por debaixo do qual os interc\xe2mbios no devem comprimir-se. Esta op\xe7\xe3o \xe9 \xfatil para evitar perder tempo de m\xe1quina para comprimir interc\xe2mbios muito pequenos.",(0,a.jsx)(s.br,{}),"Passe em ",(0,a.jsx)(s.em,{children:"valor"})," um tamanho em bytes. Por defeito, o limite de compreens\xe3o \xe9 estabelecido em 1024 bytes.",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Valores poss\xedveis"}),": todo valor de tipo inteiro largo. O par\xe2metro ",(0,a.jsx)(s.em,{children:"valor"})," cont\xe9m um tamanho expressado em bytes. Por defeito, o limiar de compreens\xe3o est\xe1 definido em 1024 bytes."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Web HTTP enabled"}),(0,a.jsx)(s.td,{children:"88"}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.strong,{children:"Escopo"}),": 4D local, 4D Server",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Descri\xe7\xe3o"}),": Status para comunica\xe7\xe3o vai HTTP.",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Valores poss\xedveis"}),": 0 (desativado) ou 1 (ativado)"]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Web HTTP TRACE"}),(0,a.jsx)(s.td,{children:"85"}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.strong,{children:"Escopo"}),": Servidor Web Local",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Mantido entre duas sess\xf5es"}),": N\xe3o",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Descri\xe7\xe3o"}),": Permite que ative ou desative o m\xe9todo HTTP TRACE no 4D Web server. Por raz\xf5es de seguran\xe7a, a partir de 4D v15 R2, o servidor 4D Web rejeita, como padr\xe3o, resquisi\xe7\xf5es HTTP TRACE com um erro 405 (ver HTTP TRACE desativado). Se necess\xe1rio, pode ativar o m\xe9todo HTTP TRACE para a sess\xe3o passando a constante com valor 1. Quando esta op\xe7\xe3o estiver ativada, o servidor 4D Web responde \xe0s requisi\xe7\xf5es HTTP TRACE com a linha de requisi\xe7\xe3o, cabe\xe7alho e corpo.",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Poss\xedveis valores"}),": 0 (desativado) ou 1 (ativado)",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Valor padr\xe3o"}),": 0 (desativado)"]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Web HTTPS enabled"}),(0,a.jsx)(s.td,{children:"89"}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.strong,{children:"Alcance"}),": 4D local, 4D Server",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Descri\xe7\xe3o"}),": estado para comunica\xe7\xe3o sobre HTTPS.",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Valores poss\xedveis"}),": 0 (desativado) ou 1 (ativado)"]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Web HTTPS port ID"}),(0,a.jsx)(s.td,{children:"39"}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.strong,{children:"Alcance"}),": 4D local, 4D Server",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Valores poss\xedveis"}),": 0 a 65535",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Descri\xe7\xe3o"}),': n\xfamero da porta TCP utilizado pelo servidor web de 4D em modo local e de 4D Server para conex\xf5es seguras via TLS (protocolo HTTPS). O n\xfamero de porta HTTPS se define na p\xe1gina "Web/Configura\xe7\xe3o" da caixa de di\xe1logo Propriedades da base.',(0,a.jsx)(s.br,{}),"Por defeito, o valor \xe9 443 (valor padr\xe3o). Pode utilizar as constantes do tema ",(0,a.jsx)(s.em,{children:"N\xfameros de puerto TCP"})," para o par\xe2metro ",(0,a.jsx)(s.em,{children:"valor"}),"."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Web inactive process timeout"}),(0,a.jsx)(s.td,{children:"78"}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.strong,{children:"Alcance"}),": servidor web local",(0,a.jsx)(s.br,{})," ",(0,a.jsx)(s.strong,{children:"Descri\xe7\xe3o"}),": permite modificar o timeout do processo utilizado para la sess\xe3o (op\xe7\xe3o relativa ao processo). Depois do timeout, o processo se elimina no servidor, se chama ao ",(0,a.jsx)(s.em,{children:"M\xe9todo de banco de dados On Web Legacy Close Session"})," e logo o contexto da sess\xe3o \xe9 destru\xedda.",(0,a.jsx)(s.br,{})," ",(0,a.jsx)(s.strong,{children:"Valores"}),": Inteiro longo (minutos)",(0,a.jsx)(s.br,{})," ",(0,a.jsx)(s.strong,{children:"Valores por defeito"}),": 480 minutos (passe 0 para restabelecer o valor por defeito)"]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Web inactive session timeout"}),(0,a.jsx)(s.td,{children:"72"}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.strong,{children:"Alcance"}),": servidor web local",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Descri\xe7\xe3o"}),": permite modificar a dura\xe7\xe3o de vida das sess\xf5es inativas (dura\xe7\xe3o definida em cookie). Ao final de este per\xedodo, a cookie de sess\xe3o expira e n\xe3o se envia mais ao cliente HTTP.",(0,a.jsx)(s.br,{})," ",(0,a.jsx)(s.strong,{children:"Valores"}),": Inteiro longo (minutos)",(0,a.jsx)(s.br,{})," ",(0,a.jsx)(s.strong,{children:"Valores por defeito"}),": 480 minutos (passe 0 para restabelecer o valor por defeito)"]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Web IP address to listen"}),(0,a.jsx)(s.td,{children:"16"}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.strong,{children:"Escopo"}),": 4D local, 4D Server",(0,a.jsx)(s.br,{})," Mantido entre sess\xf5es: Sim",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Descri\xe7\xe3o"}),": endere\xe7os IP nos quais o servidor 4D Web vai receber peti\xe7\xf5es HTTP com 4D em modo local e Servidor 4D. Como padr\xe3o, nenhum endere\xe7o espec\xedfico \xe9 definido. Este par\xe2metro pode ser estabelecido nas configura\xe7\xf5es de Banco de Dados. Este seletor \xe9 \xfatil para servidores 4D Web compilados e fusionados com 4D Desktop (no qula n\xe3o h\xe1 acesso ao modo design ). ",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Valores poss\xedveis"}),': endere\xe7o IP em forma de string. Ambos formatos string IPv6 (por exemplo, "2001:0db8:0000:0000:0000:ff00:0042:8329") e os formatos string IPv4 (por exemplo, "123.45.67.89") s\xe3o compat\xedveis.',(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Nota:"})," por compatibilidade,os endere\xe7os IPv4 expressos como longitudes hexadecimais (obsoletas) ainda s\xe3o compat\xedveis"]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Web legacy session"}),(0,a.jsx)(s.td,{children:"70"}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.strong,{children:"Alcance"}),": servidor web local",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Descri\xe7\xe3o"}),": permite ativar ou desativar o modo de gest\xe3o das sess\xf5es (descrito na se\xe7\xe3o ",(0,a.jsx)(s.em,{children:"Web Sessions Management (Legacy)"}),"). ",(0,a.jsx)(s.br,{})," ",(0,a.jsx)(s.strong,{children:"Valores"}),": 1 (ativar modo) ou 0 (desativar modo)",(0,a.jsx)(s.br,{})," ",(0,a.jsx)(s.strong,{children:"Valor por defeito"}),": 1 para bases criadas na vers\xe3o 13, 0 para bases convertidas. Note que este modo ativa igualmente o mecanismo de reutilizar os contextos temporais em modo remoto. Para maior informa\xe7\xe3o sobre este mecanismo, consulte a descri\xe7\xe3o desta op\xe7\xe3o na se\xe7\xe3o ",(0,a.jsx)(s.em,{children:"Web Server Settings"}),"."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Web log recording"}),(0,a.jsx)(s.td,{children:"29"}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.strong,{children:"Alcance"}),": 4D local 4D Server",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Descri\xe7\xe3o"}),": inicia ou det\xe9m o registro de peti\xe7\xf5es solicita\xe7\xf5es Web recebida pelo servidor web de 4D em modo local ou 4D Server. Por defeito, o valor \xe9 0 (n\xe3o t\xeam registro de peti\xe7\xf5es).",(0,a.jsx)(s.br,{}),'O registro das peti\xe7\xf5es web \xe9 guardado em um arquivo texto chamado "logweb.txt" que encontra automaticamente na pasta Logs da base, junto ao arquivo de estrutura. O formato deste arquivo \xe9 determinado pelo valor que seja passado. Para mais informa\xe7\xe3o sobre os diferentes formatos de registro das peti\xe7\xf5es, consulte a se\xe7\xe3o [#title id= "2833"/]. A ativa\xe7\xe3o deste arquivo tamb\xe9m pode ser definido na p\xe1gina "Web/Avanzado" das Prefer\xeancias de 4D.',(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Valores poss\xedveis"}),": 0 = N\xe3o guardar (por defeito), 1 = Registrar em formato CLF, 2 = Registrar em formato DLF, 3 = Registrar em formato DLF, 4 = Guardar em formato WLF.",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Aten\xe7\xe3o"}),': os formatos 3 e 4 formatos s\xe3o formatos personalizados, os conte\xfados devem ser definidos de antem\xe3o nas Prefer\xeancias da aplica\xe7\xe3o, p\xe1gina "Web/Formato do registro". Se voc\xea utilizar um destes formatos sem que seus campos sejam selecionados, o arquivo das peti\xe7\xf5es n\xe3o ser\xe1 gerado.']})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Web max concurrent processes"}),(0,a.jsx)(s.td,{children:"18"}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.strong,{children:"Alcance"}),": 4D local, 4D Server",(0,a.jsx)(s.br,{})," ",(0,a.jsx)(s.strong,{children:"Descri\xe7\xe3o"}),': limite estritamente superior no n\xfamero de processos de web de todos os tipos aceitos pelo servidor web com o 4D Server e 4D em modo local. Quando o n\xfamero atinge limite (menos um), 4D n\xe3o cria um novo processo e retorna a mensagem "Servidor n\xe3o dispon\xedvel" (estado HTTP 503 - Servi\xe7o indispon\xedvel) para qualquer nova solicita\xe7\xe3o. ',(0,a.jsx)(s.br,{}),"Este par\xe2metro impede a satura\xe7\xe3o do servidor Web 4D que podem ocorrer durante um envio maci\xe7o de solicita\xe7\xf5es ou uma demanda excessiva para a cria\xe7\xe3o de contextos. Ele tamb\xe9m pode ser definido nas propriedades da caixa de di\xe1logo base.",(0,a.jsx)(s.br,{}),"Em teoria, o n\xfamero m\xe1ximo de processos de web \xe9 o resultado de dividir a mem\xf3ria dispon\xedvel / tamanho de um pilha de um processo web. Outra solu\xe7\xe3o \xe9 para exibir informa\xe7\xf5es sobre os processos de web mostrado no desempenho Explore: indica o n\xfamero atual de processos da web e o n\xfamero m\xe1ximo alcan\xe7ado desde o in\xedcio do servidor web. ",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Valores"}),": todo valor entre 10 y 32 000. O valor por defeito \xe9 100."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Web max sessions"}),(0,a.jsx)(s.td,{children:"71"}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.strong,{children:"Alcance"}),": servidor web local**",(0,a.jsx)(s.br,{}),"** ",(0,a.jsx)(s.strong,{children:"Descri\xe7\xe3o"}),": permite limitar o n\xfamero de sess\xf5es simult\xe2neas. Quando \xe9 alcan\xe7ado o n\xfamero definido, a se\xe7\xe3o mais antiga \xe9 fechada (e se chama ao ",(0,a.jsx)(s.em,{children:"M\xe9todo de banco de dados On Web Legacy Close Session"})," se o servidor web necessita criar uma nova.",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Valores poss\xedveis:"})," Intero longo.O n\xfamero de sess\xf5es simult\xe2neas n\xe3o pode superar o n\xfamero total de processos web (op\xe7\xe3o Web max concurrent processes, 100 por defeito)",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Valores por defeito"}),": 100 (passe 0 para restabelecer o valor por defeito)"]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Web maximum requests size"}),(0,a.jsx)(s.td,{children:"27"}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.strong,{children:"Alcance"}),": 4D local, 4D Server",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Descri\xe7\xe3o"}),": tamanho m\xe1ximo (em bytes) das peti\xe7\xf5es HTTP de entrada (POST) que o servidor web est\xe1 autorizado a tratar. Por padr\xe3o, o valor predeterminado \xe9 2 000 000, ou seja, um pouco menos de 2 MB. O valor m\xe1ximo (2 147 483 648) significa na pr\xe1tica que nenhum limite \xe9 estabelecido.",(0,a.jsx)(s.br,{}),"Esta configura\xe7\xe3o evita la satura\xe7\xe3o do servidor web, causadas por peti\xe7\xf5es de entrada muito grandes. Quando uma peti\xe7\xe3o chega ao limite, o servidor web de 4D recha\xe7a.",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Valores poss\xedveis"}),": 500 000 a 2 147 483 647."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Web port ID"}),(0,a.jsx)(s.td,{children:"15"}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.strong,{children:"Alcance"}),": 4D em modo local e 4D Server. ",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Descri\xe7\xe3o"}),': estabelece ou obt\xe9m o n\xfamero da porta TCP utilizado pelo servidor web 4D com 4D em modo local e 4D Server. Por padr\xe3o, o valor \xe9 80. O n\xfamero de porta TCP se define na p\xe1gina "Web/Configura\xe7\xe3o" da caixa de di\xe1logo Propriedades da base. Pode utilizar uma das constantes do tema ',(0,a.jsx)(s.em,{children:"N\xfameros de porta TCP"})," para o par\xe2metro ",(0,a.jsx)(s.em,{children:"valor"}),". Este seletor \xe9 \xfatil no marco de servidores web 4D que se compilam e fundem utilizando 4D de escrit\xf3rio (sem acesso ao ambiente Desenho). ",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Valores poss\xedveis"}),": para obter mais informa\xe7\xe3o sobre o n\xfamero de porta TCP, consulte a se\xe7\xe3o ",(0,a.jsx)(s.em,{children:"Web Server Settings"}),". ",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Valor por padr\xe3o"}),": 80"]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Web scalable session"}),(0,a.jsx)(s.td,{children:"90"}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.strong,{children:"Alcance"}),": servidor Web local",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Descripci\xf3n:"})," ativa ou desativa o modo de gest\xe3o de sess\xf5es escal\xe1vel (descrito na ",(0,a.jsx)(s.em,{children:"p\xe1gina Sess\xf5es de usu\xe1rio"})," em ",(0,a.jsx)(s.em,{children:"developer.4d.com"}),")",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Valores poss\xedveis"}),": 1 (modo de ativa\xe7\xe3o) ou 0 (modo de desativa\xe7\xe3o). Se modificar o valor, o servidor web deve ser reiniciado para que leve em considera\xe7\xe3o a mudan\xe7a. Quando se habilitar este modo, as op\xe7\xf5es a seguir s\xe3o ignoradas: Web inactive process timeout, Web max concurrent processes, Web session cookie name e Web inactive session timeout."]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Web session cookie domain"}),(0,a.jsx)(s.td,{children:"81"}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.strong,{children:"Alcance"}),": Servidor web local ",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Descri\xe7\xe3o"}),': define ou obt\xe9m o valor do campo "dom\xednio" da cookie de sess\xe3o. Este seletor (assim como o seletor 82) \xe9 \xfatil para controlar o alcance das cookies de sess\xe3o: se configura, por exemplo, o valor "/*.4d.fr" para este seletor, o cliente s\xf3 enviar\xe1 uma cookie quando a peti\xe7\xe3o se dirige ao dom\xednio ".4d.fr", que exclui os servidores que alojam os dados est\xe1ticos externos. ',(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Valores poss\xedveis"}),": Texto"]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Web session cookie name"}),(0,a.jsx)(s.td,{children:"73"}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.strong,{children:"Alcance"}),": servidor web local",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Descri\xe7\xe3o"}),": permite definir o nome da cookie utilizada para armazenar o ID da sess\xe3o. ",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Valores"}),": Texto",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Valores por defeito"}),': "4DSID" (passe uma cadeia vazia para restabelecer o valor por defeito)']})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Web session cookie path"}),(0,a.jsx)(s.td,{children:"82"}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.strong,{children:"Alcance"}),": Servidor web local ",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Descri\xe7\xe3o"}),': define ou obt\xe9m o valor do campo "path" da cookie de sess\xe3o. Este seletor (assim como o seletor 81) \xe9 \xfatil para controlar o alcance das cookies de sess\xe3o: se configura, por exemplo, o valor"/4DACTION" para este seletor, o cliente dever\xe1 enviar s\xf3 uma cookie para peti\xe7\xf5es din\xe2micas que comecem com 4DACTION, e n\xe3o para as imagens, p\xe1ginas est\xe1ticas, etc. ',(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Valores poss\xedveis"}),": Texto"]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Web session enable IP address validation"}),(0,a.jsx)(s.td,{children:"83"}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.strong,{children:"Alcance"}),": servidorWeb Local ",(0,a.jsx)(s.strong,{children:(0,a.jsx)(s.br,{})})," ",(0,a.jsx)(s.strong,{children:"Descri\xe7\xe3o"}),": Ativa ou desativa a valida\xe7\xe3o dos endere\xe7os IP para as cookies de sess\xe3o. Por raz\xf5es de seguran\xe7a, por padr\xe3o, o servidor web de 4D verifica o endere\xe7o IP de cada solicita\xe7\xe3o que cont\xe9m uma cookie de sess\xe3o e a rejeita se este endere\xe7o n\xe3o coincide com o endere\xe7o IP utilizado para criar a cookie. Em algumas aplica\xe7\xf5es espec\xedficas, \xe9 poss\xedvel que deseje desativar esta valida\xe7\xe3o e aceitar as cookies de sess\xe3o, inclusive quando seus endere\xe7os IP n\xe3o coincidam. Por exemplo, quando os dispositivos m\xf3veis mudam entre redes WiFi e 3G/4G, seu endere\xe7o IP muda. Neste caso, deve passar 0 nesta op\xe7\xe3o para permitir que os clientes podam seguir utilizando seus sess\xf5es web inclusive quando as endere\xe7os IP mudem. Tenha em conta que esta configura\xe7\xe3o reduz o n\xedvel de seguran\xe7a da aplica\xe7\xe3o. ",(0,a.jsx)(s.br,{}),"Quando se modifica, esta configura\xe7\xe3o \xe9 efetiva imediatamente (n\xe3o \xe9 necess\xe1rio reiniciar o servidor HTTP).",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Valores poss\xedveis"}),": 0 (desativado) ou 1 (ativado)",(0,a.jsx)(s.br,{}),(0,a.jsx)(s.strong,{children:"Valor por padr\xe3o"}),": 1 (os endere\xe7os IP s\xe3o verificados)"]})]})]})]}),"\n",(0,a.jsxs)(s.p,{children:["Quando usar o seletor web debug log, pode receber uma das constantes abaixo no par\xe2metro ",(0,a.jsx)(s.em,{children:"valor"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Constante"}),(0,a.jsx)(s.th,{children:"Tipo"}),(0,a.jsx)(s.th,{children:"Valor"}),(0,a.jsx)(s.th,{children:"Coment\xe1rio"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"wdl disable web log"}),(0,a.jsx)(s.td,{children:"Inteiro longo"}),(0,a.jsx)(s.td,{children:"0"}),(0,a.jsx)(s.td,{children:"O arquivo de hist\xf3rico de peti\xe7\xf5es HTTP Web est\xe1 desativado"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"wdl enable with all body parts"}),(0,a.jsx)(s.td,{children:"Inteiro longo"}),(0,a.jsx)(s.td,{children:"7"}),(0,a.jsx)(s.td,{children:"O arquivo de hist\xf3rico de peti\xe7\xf5es Web est\xe1 ativado com o corpo da resposta e a resposta"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"wdl enable with request body"}),(0,a.jsx)(s.td,{children:"Inteiro longo"}),(0,a.jsx)(s.td,{children:"5"}),(0,a.jsx)(s.td,{children:"O arquivo de hist\xf3rico de peti\xe7\xf5es Web est\xe1 ativado apenas com o corpo da resposta"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"wdl enable with response body"}),(0,a.jsx)(s.td,{children:"Inteiro longo"}),(0,a.jsx)(s.td,{children:"3"}),(0,a.jsx)(s.td,{children:"O arquivo de hist\xf3rico de peti\xe7\xf5es HTTP Web est\xe1 ativado com o corpo da resposta unicamente"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"wdl enable without body"}),(0,a.jsx)(s.td,{children:"Inteiro longo"}),(0,a.jsx)(s.td,{children:"1"}),(0,a.jsx)(s.td,{children:"O arquivo de hist\xf3rico de peti\xe7\xf5es Web est\xe1 desativado sem o corpo (o tamanho do corpo \xe9 entregue neste caso)"})]})]})]}),"\n",(0,a.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"/docs/pt/20-R7/commands/web-set-option",children:"WEB SET OPTION"})}),"\n",(0,a.jsx)(s.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{}),(0,a.jsx)(s.th,{})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"N\xfamero do comando"}),(0,a.jsx)(s.td,{children:"1209"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Thread-seguro"}),(0,a.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,s,o){o.d(s,{Z:function(){return i},a:function(){return d}});var r=o(667294);let a={},n=r.createContext(a);function d(e){let s=r.useContext(n);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);