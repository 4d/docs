"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26593"],{750533:function(e,o,d){d.r(o),d.d(o,{default:()=>l,frontMatter:()=>n,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>t});var r=JSON.parse('{"id":"commands-legacy/quit-4d","title":"QUIT 4D","description":"QUIT 4D {( tempo )}","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/quit-4d.md","sourceDirName":"commands-legacy","slug":"/commands/quit-4d","permalink":"/docs/pt/20-R7/commands/quit-4d","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fquit-4d.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"quit-4d","title":"QUIT 4D","slug":"/commands/quit-4d","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PLUGIN LIST","permalink":"/docs/pt/20-R7/commands/plugin-list"},"next":{"title":"REJECT NEW REMOTE CONNECTIONS","permalink":"/docs/pt/20-R7/commands/reject-new-remote-connections"}}'),a=d("785893"),s=d("250065");let n={id:"quit-4d",title:"QUIT 4D",slug:"/commands/quit-4d",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Com o modo local 4D e modo remoto",id:"com-o-modo-local-4d-e-modo-remoto",level:3},{value:"Com 4D Server (Stored procedure)",id:"com-4d-server-stored-procedure",level:3},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function m(e){let o={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"QUIT 4D"})," {( ",(0,a.jsx)(o.em,{children:"tempo"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Par\xe2metro"}),(0,a.jsx)(o.th,{children:"Tipo"}),(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsx)(o.tbody,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"tempo"}),(0,a.jsx)(o.td,{children:"Integer"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Tempo (em seg) antes de sair do servidor"})]})})]}),"\n",(0,a.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsx)(o.p,{children:"O comando QUIT 4Dfinaliza a aplica\xe7\xe3o 4D atual e retorna para o Desktop."}),"\n",(0,a.jsx)(o.p,{children:"O processamento de comando \xe9 diferente se for executado em 4D (modo local ou remoto) ou em 4D Server."}),"\n",(0,a.jsx)(o.h3,{id:"com-o-modo-local-4d-e-modo-remoto",children:"Com o modo local 4D e modo remoto"}),"\n",(0,a.jsx)(o.p,{children:"Depois que voc\xea chamar QUIT 4D, o atual processo p\xe1ra a sua execu\xe7\xe3o, em seguida, 4D atua da seguinte forma:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["Se houver um m\xe9todo ",(0,a.jsx)(o.a,{href:"metodo-banco-de-dados-on-exit.md",children:"M\xe9todo banco de dados On Exit"}),", 4D come\xe7a a executar esse m\xe9todo dentro de um processo local rec\xe9m-criado. Por exemplo, voc\xea pode usar esse m\xe9todo de banco de dados para informar os outros processos, por meio da comunica\xe7\xe3o entre processos, que eles devem fechar (entrada de dados) ou interromper a execu\xe7\xe3o das opera\xe7\xf5es iniciadas no m\xe9todo ",(0,a.jsx)(o.a,{href:"metodo-banco-de-dados-on-startup.md",children:"M\xe9todo banco de dados On Startup"})," (conex\xe3o de 4D para outro servidor de banco de dados). Note que 4D poder\xe1 eventualmente fechar, o m\xe9todo ",(0,a.jsx)(o.a,{href:"metodo-banco-de-dados-on-exit.md",children:"M\xe9todo banco de dados On Exit"})," pode realizar todas as opera\xe7\xf5es de limpeza ou o fechamento quiser, mas n\xe3o pode recusar a sair e ir\xe1 faz\xea-lo, em algum ponto final."]}),"\n",(0,a.jsxs)(o.li,{children:["Se n\xe3o houver nenhum m\xe9todo ",(0,a.jsx)(o.a,{href:"metodo-banco-de-dados-on-exit.md",children:"M\xe9todo banco de dados On Exit"}),", 4D anula processo em execu\xe7\xe3o um por um, sem distin\xe7\xe3o."]}),"\n"]}),"\n",(0,a.jsxs)(o.p,{children:["Se o usu\xe1rio estiver realizando uma entrada de dados, os registros ser\xe3o cancelados e n\xe3o ser\xe3o salvos.",(0,a.jsx)(o.br,{}),"\nSe voc\xea quiser deixar o usu\xe1rio salvar as modifica\xe7\xf5es de entrada de dados feitas nas janelas abertas, voc\xea pode usar a comunica\xe7\xe3o entre processos para sinalizar todos os outros processos de usu\xe1rio que o banco ser\xe1 fechado. Para fazer isso, voc\xea pode adotar duas estrat\xe9gias:"]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"A realiza\xe7\xe3o das opera\xe7\xf5es de dentro do processo atual antes de chamar QUIT 4D."}),"\n",(0,a.jsxs)(o.li,{children:["Lidar com essas opera\xe7\xf5es a partir do banco no m\xe9todo ",(0,a.jsx)(o.a,{href:"metodo-banco-de-dados-on-exit.md",children:"M\xe9todo banco de dados On Exit"}),"."]}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:"Uma terceira estrat\xe9gia tamb\xe9m \xe9 poss\xedvel. Antes de chamar QUIT 4D, voc\xea verifica se uma janela vai precisar de valida\xe7\xe3o, se for esse o caso, voc\xea pode pedir ao usu\xe1rio para validar ou anular as janelas e, em seguida, escolher Quit de novo. No entanto, do ponto de vista da interface do usu\xe1rio, as duas primeiras estrat\xe9gias s\xe3o prefer\xedveis."}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Nota:"})," O par\xe2metro ",(0,a.jsx)(o.em,{children:"tempo"})," n\xe3o pode ser usado com 4D."]}),"\n",(0,a.jsx)(o.h3,{id:"com-4d-server-stored-procedure",children:"Com 4D Server (Stored procedure)"}),"\n",(0,a.jsxs)(o.p,{children:["O comando QUIT 4D pode ser executado na m\xe1quina do servidor, em um procedimento armazenado. Neste caso, ele aceita o par\xe2metro de ",(0,a.jsx)(o.em,{children:"tempo"})," opcional."]}),"\n",(0,a.jsxs)(o.p,{children:["O par\xe2metro ",(0,a.jsx)(o.em,{children:"tempo"})," permite estabelecer um tempo limite para o 4D Server antes da aplica\xe7\xe3o, na verdade fecha, permitindo as m\xe1quinas clientes o tempo para desligar. Voc\xea deve passar um valor em segundos no ",(0,a.jsx)(o.em,{children:"tempo"}),". Este par\xe2metro s\xf3 \xe9 tido em considera\xe7\xe3o durante uma execu\xe7\xe3o na m\xe1quina do servidor. Ele \xe9 ignorado em 4D."]}),"\n",(0,a.jsxs)(o.p,{children:["Se voc\xea n\xe3o passar um par\xe2metro para o ",(0,a.jsx)(o.em,{children:"tempo"}),", 4D Server ir\xe1 esperar at\xe9 que todas as m\xe1quinas clientes sejam desligadas antes de sair."]}),"\n",(0,a.jsx)(o.p,{children:"Ao contr\xe1rio de 4D, o processamento de QUIT 4D por 4D Server \xe9 ass\xedncrono: o m\xe9todo em que o comando \xe9 chamado n\xe3o \xe9 interrompido depois de terem sido executados."}),"\n",(0,a.jsxs)(o.p,{children:["Se houver um m\xe9todo ",(0,a.jsx)(o.em,{children:"M\xe9todo banco de dados On Server Shutdown"}),", ele \xe9 executado depois do atraso definido pelo par\xe2metro de tempo, ou depois de ter desligado todos os clientes, em fun\xe7\xe3o de seus par\xe2metros."]}),"\n",(0,a.jsxs)(o.p,{children:["A a\xe7\xe3o do comando ",(0,a.jsx)(o.em,{children:"M\xe9todo banco de dados On Server Shutdown"})," utilizado em um procedimento armazenado \xe9 o mesmo que o outro para o comando Sair do menu Arquivo 4D Server: faz com que uma caixa de di\xe1logo aparecer em cada m\xe1quina cliente indicando que o servidor est\xe1 prestes a sair."]}),"\n",(0,a.jsx)(o.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,a.jsx)(o.p,{children:"O m\xe9todo de projeto listado aqui est\xe1 associado com o item Quit ou Exit do menu no menu Arquivo."}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de projeto M_SALIR\n\xa0\n\xa0CONFIRM("Tem certeza que voc\xea quer sair?")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0QUIT 4D\n\xa0End if\n'})}),"\n",(0,a.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.a,{href:"metodo-banco-de-dados-on-exit.md",children:"M\xe9todo banco de dados On Exit"})}),"\n",(0,a.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"N\xfamero do comando"}),(0,a.jsx)(o.td,{children:"291"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Thread-seguro"}),(0,a.jsx)(o.td,{children:"\u2713"})]})]})]})]})}function l(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},250065:function(e,o,d){d.d(o,{Z:function(){return t},a:function(){return n}});var r=d(667294);let a={},s=r.createContext(a);function n(e){let o=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);