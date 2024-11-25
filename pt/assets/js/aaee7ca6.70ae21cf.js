"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68687"],{619469:function(e,o,n){n.r(o),n.d(o,{metadata:()=>r,contentTitle:()=>d,default:()=>p,assets:()=>i,toc:()=>c,frontMatter:()=>t});var r=JSON.parse('{"id":"commands-legacy/on-server-open-connection-database-method","title":"On Server Open Connection database method","description":"$1, $2, $3 -> On Server Open Connection database method -> $0","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/on-server-open-connection-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-server-open-connection-database-method","permalink":"/docs/pt/commands/on-server-open-connection-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-server-open-connection-database-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"on-server-open-connection-database-method","title":"On Server Open Connection database method","slug":"/commands/on-server-open-connection-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On Server Close Connection database method","permalink":"/docs/pt/commands/on-server-close-connection-database-method"},"next":{"title":"On Server Shutdown database method","permalink":"/docs/pt/commands/on-server-shutdown-database-method"}}'),s=n("785893"),a=n("250065");let t={id:"on-server-open-connection-database-method",title:"On Server Open Connection database method",slug:"/commands/on-server-open-connection-database-method",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Quando \xe9 chamado o m\xe9todo base On Server Open Connection?",id:"quando-\xe9-chamado-o-m\xe9todo-base-on-server-open-connection",level:4},{value:"Como se chama ao m\xe9todo base On Server Open Connection?",id:"como-se-chama-ao-m\xe9todo-base-on-server-open-connection",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4}];function m(e){let o={a:"a",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.p,{children:"$1, $2, $3 -> On Server Open Connection database method -> $0"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"$1"}),(0,s.jsx)(o.td,{children:"Integer"}),(0,s.jsx)(o.td,{children:"\u2190"}),(0,s.jsx)(o.td,{children:"N\xfamero de usu\xe1rio utilizado internamente por 4D Server para identificar os usu\xe1rios"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"$2"}),(0,s.jsx)(o.td,{children:"Integer"}),(0,s.jsx)(o.td,{children:"\u2190"}),(0,s.jsx)(o.td,{children:"N\xfamero de conex\xe3o utilizado internamente por 4D Server para identificar uma conex\xe3o"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"$3"}),(0,s.jsx)(o.td,{children:"Integer"}),(0,s.jsx)(o.td,{children:"\u2190"}),(0,s.jsx)(o.td,{children:"Obsoleto: devolve sempre 0 (mas deve ser declarado)"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"$0"}),(0,s.jsx)(o.td,{children:"Integer"}),(0,s.jsx)(o.td,{children:"\u2190"}),(0,s.jsx)(o.td,{children:"0 se omitido = conex\xe3o aceita; outro valor = conex\xe3o rejeitada"})]})]})]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,s.jsx)(o.h4,{id:"quando-\xe9-chamado-o-m\xe9todo-base-on-server-open-connection",children:"Quando \xe9 chamado o m\xe9todo base On Server Open Connection?"}),"\n",(0,s.jsxs)(o.p,{children:["O ",(0,s.jsx)(o.strong,{children:"On Server Open Connection database method"})," \xe9 chamado uma vez no equipo servidor cada vez que um equipo remoto 4D inicia um processo de conex\xe3o. O ",(0,s.jsx)(o.strong,{children:"On Server Open Connection database method"})," N\xc3O \xe9 invocado por outro entorno 4D diferente de 4D Server."]}),"\n",(0,s.jsxs)(o.p,{children:["O ",(0,s.jsx)(o.strong,{children:"On Server Open Connection database method"})," \xe9 chamado cada vez que:"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"um 4D remoto se conecta (inicio do processo principal)"}),"\n",(0,s.jsx)(o.li,{children:"um 4D remoto abre o entorno Desenho (inicio do processo de Desenho)"}),"\n",(0,s.jsxs)(o.li,{children:['um 4D remoto inicia um processo global, (cujo nome come\xe7a por "$") o qual necessita da cria\xe7\xe3o de um processo cooperativo no servidor ',(0,s.jsx)(o.strong,{children:"(*)"}),". Este processo pode ser criado utilizando o comando ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/new-process",children:"New process"}),', um comando de menu ou caixa de di\xe1logo "Executar um m\xe9todo".']}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["Em cada caso com um 4D remoto, tr\xeas processos s\xe3o iniciados. Um na m\xe1quina cliente e outros dois no equipo servidor. Na m\xe1quina cliente, o processo executa o c\xf3digo e envia as peti\xe7\xf5es a 4D Server. No equipo servidor, o ",(0,s.jsx)(o.strong,{children:"processo 4D Client"})," mant\xe9m o entorno da base de dados do processo cliente (as sele\xe7\xf5es atuais e o bloqueio de registros para o processo usu\xe1rio) e responde aos pedidos enviadas pelo processo executado na m\xe1quina cliente. O ",(0,s.jsx)(o.strong,{children:"processo base 4D Client"})," est\xe1 a cargo de controlar o processo 4D Client correspondente."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"(*)"})," A partir de 4D v13, por raz\xf5es de otimiza\xe7\xe3o os processos servidores (processo apropriado para os acessos ao motor da base e processo cooperativo para o acesso \xe0 linguagem) s\xf3 s\xe3o criadas durante a execu\xe7\xe3o do c\xf3digo do lado do cliente. Por exemplo, estes s\xe3o os detalhes de uma sequencia de c\xf3digo 4D que se executa em um novo processo cliente:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0// o processo global come\xe7a sem um novo processo no servidor, como um processo local.\n\xa0CREATE RECORD([Table_1])\n\xa0[Table_1])field1_1:="Hello world"\n\xa0SAVE RECORD([Table_1])\xa0// cria\xe7\xe3o aqui do processo apropriado no servidor\n'})}),"\n",(0,s.jsx)(o.h4,{id:"como-se-chama-ao-m\xe9todo-base-on-server-open-connection",children:"Como se chama ao m\xe9todo base On Server Open Connection?"}),"\n",(0,s.jsx)(o.p,{children:"O On Server Open Connection database method \xe9 executado no equipo servidor no processo 4D Client que provocou a chamada do m\xe9todo."}),"\n",(0,s.jsxs)(o.p,{children:["Por exemplo, se um 4D remoto se conecta a uma base 4D Server interpretada, \xe9 iniciado o processo usu\xe1rio, o processo de desenho e o processo de registro do cliente (por defeito). O On Server Open Connection database method se executa tr\xeas vezes seguidas. A primeira vez dentro do processo principal, a segunda vez no processo de inscri\xe7\xe3o do cliente e a terceira vez no processo de desenhoo. Se os tr\xeas processos s\xe3o respectivamente o sexto, s\xe9timo e oitavo processo a iniciar-se no equipo servidor, e \xe9 chamado ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/current-process",children:"Current process"})," desde o On Server Open Connection database method, a primeira vez ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/current-process",children:"Current process"})," devolve 6, a segunda vez 7 e a terceira 8."]}),"\n",(0,s.jsxs)(o.p,{children:["Observe que o On Server Open Connection database method se executa no equipo servidor, ao interior do processo 4D Client no servidor, independente do processo executado no cliente. Al\xe9m disso, no momento em que se invoca o m\xe9todo, o processo 4D Client ainda n\xe3o foi nomeado (",(0,s.jsx)(o.a,{href:"/docs/pt/commands/process-info",children:"Process info"})," n\xe3o devolver\xe1 neste momento o nome do processo 4D Client)."]}),"\n",(0,s.jsx)(o.p,{children:"O On Server Open Connection database method n\xe3o t\xeam acesso \xe0 tabela das vari\xe1veis processo do processo executado no client. Esta tabela reside no equipo client, n\xe3o no equipo servidor."}),"\n",(0,s.jsx)(o.p,{children:"Quando o On Server Open Connection database method acede a uma vari\xe1vel processo, trabalha com uma tabela de vari\xe1veis processo particular, criada dinamicamente pelo processo 4D Client."}),"\n",(0,s.jsx)(o.p,{children:"4D Server passa tr\xeas par\xe2metros de tipo Inteiro longo ao On Server Open Connection database method e espera um resultado Inteiro longo. O m\xe9todo deve portanto ser declarado explicitamente com tr\xeas par\xe2metros Inteiro longo assim tamb\xe9m como com um resultado de fun\xe7\xe3o Inteiro longo:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"\xa0var $0;$1;$2;$3 : Integer\n"})}),"\n",(0,s.jsxs)(o.p,{children:["Se n\xe3o devolve um valor em ",(0,s.jsx)(o.em,{children:"$0"}),", por conseguinte deixa a vari\xe1vel indefinida ou inicializada em zero, 4D Server considera que o m\xe9todo base aceita a conex\xe3o. Se n\xe3o \xe9 aceitada a conex\xe3o, devolve um valor n\xe3o nulo em ",(0,s.jsx)(o.em,{children:"$0"}),"."]}),"\n",(0,s.jsx)(o.p,{children:"Esta tabela detalha a informa\xe7\xe3o oferecida pelos tr\xeas par\xe2metros passados no m\xe9todo base:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:(0,s.jsx)(o.strong,{children:"Par\xe2metro"})}),(0,s.jsx)(o.th,{children:(0,s.jsx)(o.strong,{children:"Descri\xe7\xe3o"})})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"$1"}),(0,s.jsx)(o.td,{children:"N\xfamero de usu\xe1rio utilizado internamente por 4D Server para identific\xe1-los"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"$2"}),(0,s.jsx)(o.td,{children:"N\xfamero de conex\xe3o utilizado internamente por 4D Server para identific\xe1-la"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"$3"}),(0,s.jsx)(o.td,{children:"Obsoleto: sempre devolve 0 mas deve ser declarado"})]})]})]}),"\n",(0,s.jsxs)(o.p,{children:["Estes n\xfameros de referencia n\xe3o s\xe3o utilizados diretamente como fontes de informa\xe7\xe3o a passar, por exemplo, como par\xe2metros a um comando 4D. No entanto, oferecem uma maneira particular de identificar um processo 4D Client entre o On Server Open Connection database method e o ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/on-server-close-connection-database-method",children:"On Server Close Connection database method"}),". A combina\xe7\xe3o destes valores \xe9 \xfanico no momento de uma se\xe7\xe3o 4D Server. Ao guardar esta informa\xe7\xe3o em uma tabela ou em um array entre processos, os dois m\xe9todos base podem trocar informa\xe7\xf5es. No exemplo ao final desta sess\xe3o, os dois m\xe9todos base utilizam esta informa\xe7\xe3o para armazenar a data e hora de inicio e fim de uma conex\xe3o no mesmo registro de uma tabela."]}),"\n",(0,s.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsxs)(o.p,{children:["O seguinte exemplo mostra como manter um hist\xf3rico das conex\xf5es a base de dados utilizando o On Server Open Connection database method e utilizando o ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/on-server-close-connection-database-method",children:"On Server Close Connection database method"}),". A tabela ",(0,s.jsx)(o.em,{children:"[Server Log]"})," (mostrada a continua\xe7\xe3o) se utiliza para fazer seguimento aos processos de conex\xe3o:"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:n(714259).Z+"",width:"148",height:"239"})}),"\n",(0,s.jsxs)(o.p,{children:["A informa\xe7\xe3o armazenada nesta tabela \xe9 administrada pelo On Server Open Connection database method e o ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/on-server-close-connection-database-method",children:"On Server Close Connection database method"})," listado a continua\xe7\xe3o:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo base On Server Open Connection\n\xa0\n\xa0var $0;$1;$2;$3 : Integer\n\xa0\xa0// Criar um registro [Server Log]\n\xa0CREATE RECORD([Server Log])\n\xa0[Server Log]Log ID:=Sequence number([Server Log])\n\xa0\xa0// Guardar o hist\xf3rico Data e Hora\n\xa0[Server Log]Log Date:=Current date\n\xa0[Server Log]Log Time:=Current time\n\xa0\xa0// Guarda a informa\xe7\xe3o de conex\xe3o\n\xa0[Server Log]User ID:=$1\n\xa0[Server Log]Connection ID:=$2\n\xa0SAVE RECORD([Server Log])\n\xa0\xa0// N\xe3o devolve erro de maneira que a conex\xe3o pode continuar\n\xa0$0:=0\n\xa0\n\xa0\xa0// M\xe9todo base On Server Close Connection\n\xa0var $1;$2;$3 : Integer\n\xa0\xa0// Recuperar o registro [Server Log]\n\xa0QUERY([Server Log];[Server Log]User ID=$1;*)\n\xa0QUERY([Server Log];&;[Server Log]Connection ID=$2;*)\n\xa0QUERY([Server Log];&;[Server Log]Process ID=0)\n\xa0\xa0// Guardar data e hora de desconex\xe3o\n\xa0[Server Log]Exit Date:=Current date\n\xa0[Server Log]Exit Time:=Current time\n\xa0\xa0// Guardar informa\xe7\xe3o processo\n\xa0[Server Log]Process ID:=Current process\n\xa0PROCESS PROPERTIES([Server Log]Process ID;$vsProcName;$vlProcState;$vlProcTime)\n\xa0[Server Log]Process Name:=$vsProcName\n\xa0SAVE RECORD([Server Log])\n"})}),"\n",(0,s.jsx)(o.p,{children:"Estas s\xe3o algumas entradas em [Server Log] mostrando v\xe1rias conex\xf5es remotas:"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:n(273155).Z+"",width:"802",height:"502"})}),"\n",(0,s.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(o.p,{children:"O seguinte exemplo evita uma nova conex\xe3o entre as 2 e 4 A.M."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo base On Server Open Connection\n\xa0var $0;$1;$2;$3 : Integer\n\xa0\n\xa0If((?02:00:00?<=Current time)&(Current time\n"})})]})}function p(e={}){let{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},714259:function(e,o,n){n.d(o,{Z:function(){return r}});let r="data:image/png;base64,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"},273155:function(e,o,n){n.d(o,{Z:function(){return r}});let r=n.p+"assets/images/pict69174.en-2fc0c880c73989faead4f4d21f6c134c.png"},250065:function(e,o,n){n.d(o,{Z:function(){return d},a:function(){return t}});var r=n(667294);let s={},a=r.createContext(s);function t(e){let o=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(a.Provider,{value:o},e.children)}}}]);