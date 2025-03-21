"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29660"],{696958:function(e,o,a){a.r(o),a.d(o,{default:()=>m,frontMatter:()=>t,metadata:()=>n,assets:()=>i,toc:()=>c,contentTitle:()=>r});var n=JSON.parse('{"id":"commands-legacy/on-exit-database-method","title":"On Exit database method","description":"M\xe9todo banco de dados On Exit","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/on-exit-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-exit-database-method","permalink":"/docs/pt/commands/on-exit-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-exit-database-method.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"on-exit-database-method","title":"On Exit database method","slug":"/commands/on-exit-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On Drop database method","permalink":"/docs/pt/commands/on-drop-database-method"},"next":{"title":"On Host Database Event database method","permalink":"/docs/pt/commands/on-host-database-event-database-method"}}'),d=a("785893"),s=a("250065");let t={id:"on-exit-database-method",title:"On Exit database method",slug:"/commands/on-exit-database-method",displayed_sidebar:"docs"},r=void 0,i={},c=[{value:"Nota",id:"nota",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2}];function l(e){let o={a:"a",br:"br",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.p,{children:(0,d.jsx)(o.strong,{children:"M\xe9todo banco de dados On Exit"})}),"\n\n\n\n\n\n\n\n",(0,d.jsx)(o.table,{children:(0,d.jsx)(o.thead,{children:(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.th,{children:"Este comando n\xe3o requer par\xe2metros"}),(0,d.jsx)(o.th,{})]})})}),"\n",(0,d.jsx)(o.h2,{id:""}),"\n",(0,d.jsx)(o.p,{children:"O M\xe9todo banco de dados On Exit \xe9 chamado quando se sai do banco."}),"\n",(0,d.jsx)(o.p,{children:"Este m\xe9todo \xe9 utilizado nos seguintes ambientes 4D:"}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"4D em modo local"}),"\n",(0,d.jsx)(o.li,{children:"4D em modo remoto (do lado do cliente)"}),"\n",(0,d.jsx)(o.li,{children:"Aplica\xe7\xe3o 4D compilada e fusionada com 4D Volume Desktop"}),"\n"]}),"\n",(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.strong,{children:"Nota"}),": o M\xe9todo banco de dados On Exit N\xc3O \xe9 invocado por 4D Server."]}),"\n",(0,d.jsx)(o.p,{children:"O M\xe9todo banco de dados On Exit \xe9 invocado automaticamente por 4D; diferentemente dos m\xe9todos de projeto, voc\xea n\xe3o pode chamar este m\xe9todo por programa\xe7\xe3o. Entretanto, pode ser executado desde o editor de m\xe9todos. Igualmente pode utilizar subrotinas."}),"\n",(0,d.jsx)(o.p,{children:"Voc\xea sai de um banco se:"}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsxs)(o.li,{children:["O usu\xe1rio seleciona o comando ",(0,d.jsx)(o.strong,{children:"Sair"})," do menu ",(0,d.jsx)(o.strong,{children:"Arquivo"})," no ambiente Desenho ou desde o ambiente Aplica\xe7\xe3o (Quit standard action)."]}),"\n",(0,d.jsxs)(o.li,{children:["Uma chamada \xe9 realizada ao comando ",(0,d.jsx)(o.a,{href:"/docs/pt/commands/quit-4d",children:"QUIT 4D"}),"."]}),"\n",(0,d.jsxs)(o.li,{children:["Um plug-in 4D faz uma chamada ao ponto de entrada ",(0,d.jsx)(o.a,{href:"/docs/pt/commands/quit-4d",children:"QUIT 4D"}),"."]}),"\n"]}),"\n",(0,d.jsx)(o.p,{children:"Sem importar como se inicie a sa\xedda do banco, 4D realiza as seguintes a\xe7\xf5es:"}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"Se n\xe3o existir um M\xe9todo banco de dados On Exit, 4D aborta cada processo em execu\xe7\xe3o um por um, sem distin\xe7\xe3o. Se o usu\xe1rio est\xe1 introduzindo dados, os registros n\xe3o ser\xe3o guardados."}),"\n",(0,d.jsx)(o.li,{children:"Se existir um M\xe9todo banco de dados On Exit , 4D come\xe7a a execu\xe7\xe3o deste m\xe9todo em um processo local criado recentemente. Observe que sair\xe1 eventualmente de 4D, o M\xe9todo banco de dados On Exit pode realizar toda a limpeza ou fechar as opera\xe7\xf5es que queira, mas n\xe3o pode ser negado a sair."}),"\n"]}),"\n",(0,d.jsx)(o.p,{children:"O M\xe9todo banco de dados On Exit \xe9 perfeito para:"}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"Salvar (localmente, no disco) prefer\xeancias ou par\xe2metros a reutilizar ao come\xe7o da seguinte sess\xe3o em ."}),"\n",(0,d.jsx)(o.li,{children:"Realizar outras a\xe7\xf5es automaticamente cada vez que se salga de la base."}),"\n"]}),"\n",(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.strong,{children:"Nota:"}),' n\xe3o esque\xe7a que o processo criado pelo M\xe9todo banco de dados On Exit \xe9 um processo local/cliente, portanto n\xe3o pode acessar ao arquivo de dados. Se o M\xe9todo banco de dados On Exit realiza uma consulta ou uma ordena\xe7\xe3o, um cliente 4D que est\xe1 a ponto de sair quedar\xe1 "congelado" e em realidade n\xe3o sair\xe1 da aplica\xe7\xe3o. Se necessita acessar a dados quando um cliente sai da aplica\xe7\xe3o, cria um novo processo global desde o qual o M\xe9todo banco de dados On Exit possa acessar ao arquivo de dados. Neste caso, tenha certeza de que o novo processo termine corretamente antes do final da execu\xe7\xe3o do M\xe9todo banco de dados On Exit (utilizando por exemplo vari\xe1veis interprocesso).']}),"\n",(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.strong,{children:"Nota"}),": em um ambiente cliente/servidor, M\xe9todo banco de dados On Exit se comporta de maneira diferente dependendo de se o usu\xe0rio sair manualmente (via o comando de menu Sair ou uma chamada ao comando ",(0,d.jsx)(o.a,{href:"/docs/pt/commands/quit-4d",children:"QUIT 4D"}),") ou que 4D Server se feche, o que obriga a todos os clientes a sair."]}),"\n",(0,d.jsx)(o.p,{children:"Quando sair de 4D Server e se d\xe1 um tempo de corte (por exemplo, 10 minutos), cada cliente conectado mostra uma mensagem de advert\xeancia e se o usu\xe1rio sair durante o per\xedodo de tempo determinado, o M\xe9todo banco de dados On Exit \xe9 executado normalmente. Entretanto, em outros casos (por exemplo, o usu\xe1rio n\xe3o responde a tempo, o servidor solicita sar imediatamente ou o administrador desconecta manualmente ao cliente), o M\xe9todo banco de dados On Exit se executa ao mesmo tempo que a conex\xe3o ao servidor se fecha. Como resultado, o c\xf3digo em M\xe9todo banco de dados On Exit n\xe3o pode iniciar outro processo local ou de servidor e n\xe3o pode esperar a que se cancelem outros processos (nem esses processos podem seguir acessando ao servidor). Se tentar fazer isso, um erro de rede \xe9 gerado (como 10001 ou 10002) j\xe1 que a conex\xe3o ao servidor j\xe1 est\xe1 fechada."}),"\n",(0,d.jsx)(o.h2,{id:"nota",children:"Nota"}),"\n",(0,d.jsxs)(o.p,{children:["O exemplo abaixo mostra um caso t\xedpico onde voc\xea lan\xe7a um ou mais processos no fundo fazendo trabalhos regulares, rodando sem parar em ",(0,d.jsx)(o.a,{href:"metodo-banco-de-dados-on-startup.md",children:"M\xe9todo banco de dados On Startup"})," (ou em ",(0,d.jsx)(o.a,{href:"/docs/pt/commands/on-server-startup-database-method",children:"On Server Startup database method"}),"). Uma flag no objeto da aplica\xe7\xe3o ",(0,d.jsx)(o.a,{href:"/docs/pt/commands/storage",children:"Storage"})," \xe9 usado para dizer para terminar - e marcar se terminaram."]}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsxs)(o.li,{children:["Em ",(0,d.jsx)(o.a,{href:"metodo-banco-de-dados-on-startup.md",children:"M\xe9todo banco de dados On Startup"})]}),"\n"]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-4d",children:'\xa0Use(Storage)\n\xa0\xa0\xa0\xa0Storage.global:=New shared object("ExitNow";False)\n\xa0End use\n\xa0$p:=New process("Serverjob";0;"Background job#1")\n\xa0$p1:=New process("Check_Invoices";0;"Background job#2")\n'})}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"Aqui est\xe1 um exemplo de um m\xe9todo de fundo:"}),"\n"]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-4d",children:"\xa0\xa0// fazer trabalhos regulares de fundo no servidor\n\xa0While(Not(Bool(Storage.global.ExitNow)))\n\xa0\xa0// rordar tarefas de contabilidade, calcular dados, etc\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0DELAY PROCESS(Current process;60*60)\xa0//hiberna por um minuto depois repete o loop\n\xa0End while\n"})}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsxs)(o.li,{children:["Em ",(0,d.jsx)(o.strong,{children:"M\xe9todo banco de dados On Exit"}),":"]}),"\n"]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-4d",children:"\xa0Use(Storage.global)\n\xa0\xa0\xa0\xa0Storage.global.ExitNow:=True\xa0//faz com que todos os trabalhadores parem\n\xa0End use\n\xa0\n\xa0$time:=Current time\n\xa0$finished:=False\n\xa0While((($time+10)>(Current time+0))&(Not($finished)))&NBSP;\xa0// max 10 seconds\n\xa0\xa0\xa0\xa0$list:=Get process activity(Processes only)\xa0// obt\xe9m a lista de todos os processos\n\xa0\xa0\xa0\xa0$sublist:=$list.processes.query(\"name='Background job@' and state >=0\")\xa0//ainda h\xe1 um trabalho no fundo rodando?\n\xa0\xa0\xa0\xa0$finished:=($sublist.length=0)\n\xa0\xa0\xa0\xa0If($sublist.length>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For each($job;$sublist)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RESUME PROCESS($job.number)\xa0//Tenha certeza que todos os processos est\xe3o acordados\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for each\n\xa0\xa0\xa0\xa0End if\n\xa0End while\n"})}),"\n",(0,d.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.a,{href:"metodo-banco-de-dados-on-startup.md",children:"M\xe9todo banco de dados On Startup"}),(0,d.jsx)(o.br,{}),"\n",(0,d.jsx)(o.a,{href:"/docs/pt/commands/quit-4d",children:"QUIT 4D"})]})]})}function m(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,d.jsx)(o,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,o,a){a.d(o,{Z:function(){return r},a:function(){return t}});var n=a(667294);let d={},s=n.createContext(d);function t(e){let o=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);