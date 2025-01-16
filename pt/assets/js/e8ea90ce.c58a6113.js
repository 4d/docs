"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["32884"],{226322:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/execute-on-client","title":"EXECUTE ON CLIENT","description":"EXECUTE ON CLIENT ( nomeCliente ; nomeMetodo {; param}{; param2 ; ... ; paramN} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/execute-on-client.md","sourceDirName":"commands-legacy","slug":"/commands/execute-on-client","permalink":"/docs/pt/20-R7/commands/execute-on-client","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fexecute-on-client.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"execute-on-client","title":"EXECUTE ON CLIENT","slug":"/commands/execute-on-client","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DELAY PROCESS","permalink":"/docs/pt/20-R7/commands/delay-process"},"next":{"title":"Execute on server","permalink":"/docs/pt/20-R7/commands/execute-on-server"}}'),d=o("785893"),r=o("250065");let t={id:"execute-on-client",title:"EXECUTE ON CLIENT",slug:"/commands/execute-on-client",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"EXECUTE ON CLIENT"})," ( ",(0,d.jsx)(n.em,{children:"nomeCliente"})," ; ",(0,d.jsx)(n.em,{children:"nomeMetodo"})," {; ",(0,d.jsx)(n.em,{children:"param"}),"}{; ",(0,d.jsx)(n.em,{children:"param2"})," ; ... ; ",(0,d.jsx)(n.em,{children:"paramN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"nomeCliente"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Nome da sess\xe3o 4D Client"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"nomeMetodo"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Nome do m\xe9todo a ser executado"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"param"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Par\xe2metro(s) do m\xe9todo"}),(0,d.jsx)(n.td,{})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["O comando ",(0,d.jsx)(n.strong,{children:"EXECUTE ON CLIENT"})," \xe9 usado para for\xe7ar a execu\xe7\xe3o do m\xe9todo ",(0,d.jsx)(n.em,{children:"nomeMetodo"}),", com lo par\xe2metros ",(0,d.jsx)(n.em,{children:"param1... paramN"}),", se necess\xe1rio, no cliente 4D registrado de nome ",(0,d.jsx)(n.em,{children:"nomeCliente"}),".. O nome registrado do cliente 4D \xe9 definido pelo comando ",(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/register-client",children:"REGISTER CLIENT"}),"."]}),"\n",(0,d.jsx)(n.p,{children:"Este comando pode ser chamado desde um cliente 4D ou desde um procedimento armazenado em 4D Server."}),"\n",(0,d.jsx)(n.p,{children:"Se o m\xe9todo requer um ou mais par\xe2metros, passe-os depois do nome do m\xe9todo."}),"\n",(0,d.jsx)(n.p,{children:"A execu\xe7\xe3o do m\xe9todo no cliente 4D \xe9 efetuada num processo criado automaticamente na m\xe1quina cliente, e seu nome ser\xe1 o nome de registro de 4D Client."}),"\n",(0,d.jsxs)(n.p,{children:["Se este comando \xe9 chamado muitas vezes para o mesmo 4D Client, as ordens de execu\xe7\xe3o ser\xe3o empilhadas. Portanto, os m\xe9todos ser\xe3o tratados um depois do outro em modo ass\xedncrono. Quanto mais m\xe9todos estejam empilhados, maior ser\xe1 a carga de trabalho para o 4D Client. Agora voc\xea pode conhecer o estado da carga de trabalho de cada cliente utilizando o comando ",(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/get-registered-clients",children:"GET REGISTERED CLIENTS"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," O empilhamento de ordens de execu\xe7\xe3o n\xe3o pode ser modificado ou detido, a n\xe3o ser que o cliente 4D seja removido do registro com a ajuda do comando ",(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/unregister-client",children:"UNREGISTER CLIENT"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Pode executar simultaneamente o mesmo m\xe9todo em v\xe1rios ou em todos os 4D Clients registrados. Para faz\xea-lo, utilize o caractere arroba (@) no par\xe2metro ",(0,d.jsx)(n.em,{children:"nomeCliente"}),"."]}),"\n",(0,d.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,d.jsx)(n.p,{children:"Vamos supor que voc\xea quer executar o m\xe9todo \u201CGerarNums\u201D na m\xe1quina cliente \u201CClient1\u201D:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0EXECUTE ON CLIENT("Client1";"GerarNums";12;$a;"Text")\n'})}),"\n",(0,d.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,d.jsx)(n.p,{children:"Se voc\xea quiser que todos os clientes executem o m\xe9todo \u201CVazioTemp\u201D:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0EXECUTE ON CLIENT("@";"EmptyTemp")\n'})}),"\n",(0,d.jsx)(n.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,d.jsxs)(n.p,{children:["Consulte o exemplo do comando ",(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/register-client",children:"REGISTER CLIENT"}),"."]}),"\n",(0,d.jsx)(n.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,d.jsxs)(n.p,{children:["A vari\xe1vel do sistema ",(0,d.jsx)(n.strong,{children:"OK \xe9"})," igual a 1 se o 4D Server recebeu corretamente o pedido de execu\xe7\xe3o de um m\xe9todo; contudo, isto n\xe3o \xe9 garantia de que o m\xe9todo foi executado pelo 4D Client."]}),"\n",(0,d.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/execute-on-server",children:"Execute on server"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/get-registered-clients",children:"GET REGISTERED CLIENTS"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/register-client",children:"REGISTER CLIENT"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/unregister-client",children:"UNREGISTER CLIENT"})]}),"\n",(0,d.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"651"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,d.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return t}});var s=o(667294);let d={},r=s.createContext(d);function t(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);