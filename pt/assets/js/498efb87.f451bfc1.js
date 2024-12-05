"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68140"],{338406:function(e,n,s){s.r(n),s.d(n,{metadata:()=>o,contentTitle:()=>t,default:()=>m,assets:()=>i,toc:()=>c,frontMatter:()=>a});var o=JSON.parse('{"id":"commands-legacy/log-event","title":"LOG EVENT","description":"LOG EVENT ( {tipoSaida ;} mensagem {; importancia} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/log-event.md","sourceDirName":"commands-legacy","slug":"/commands/log-event","permalink":"/docs/pt/commands/log-event","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flog-event.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"log-event","title":"LOG EVENT","slug":"/commands/log-event","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is Windows","permalink":"/docs/pt/commands/is-windows"},"next":{"title":"Menu bar height","permalink":"/docs/pt/commands/menu-bar-height"}}'),d=s("785893"),r=s("250065");let a={id:"log-event",title:"LOG EVENT",slug:"/commands/log-event",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let n={a:"a",br:"br",code:"code",div:"div",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"LOG EVENT"})," ( {",(0,d.jsx)(n.em,{children:"tipoSaida"})," ;} ",(0,d.jsx)(n.em,{children:"mensagem"})," {; ",(0,d.jsx)(n.em,{children:"importancia"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tipoSaida"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Message output type"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"mensagem"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Contents of the message"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"importancia"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Message\u2019s importance level"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["O comando ",(0,d.jsx)(n.strong,{children:"LOG EVENT"})," permite configurar um sistema personalizado de registro de eventos internos que ocorrem durante o uso de sua aplica\xe7\xe3o."]}),"\n",(0,d.jsxs)(n.p,{children:["Passe no par\xe2metro ",(0,d.jsx)(n.em,{children:"mensagem"})," a informa\xe7\xe3o personalizada a notar em fun\xe7\xe3o do evento."]}),"\n",(0,d.jsxs)(n.p,{children:["O par\xe2metro opcional ",(0,d.jsx)(n.em,{children:"tipoSaida"})," permite precisar o canal de saida tomado pela ",(0,d.jsx)(n.em,{children:"mensagem"}),". Pode passar neste par\xe2metro uma das constantes abaixo ubicadas no tema ",(0,d.jsx)(n.em,{children:"Historial de eventos"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Valor"}),(0,d.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Into 4D commands log"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"3"}),(0,d.jsxs)(n.td,{children:["Indica a 4D gravar a ",(0,d.jsx)(n.em,{children:"mensagem"})," no arquivo de hist\xf3rico dos comandos de 4D, se este arquivo foi ativado. O arquivo de hist\xf3rico de comandos de 4D pode ser ativado utilizando o comando ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," (seletor 34).",(0,d.jsx)(n.br,{}),(0,d.jsx)(n.strong,{children:"Nota:"})," os arquivos de hist\xf3rico de 4D se juntam na pasta ",(0,d.jsx)(n.strong,{children:"Logs"})," (ver o comando ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/get-4d-folder",children:"Get 4D folder"}),")."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Into 4D debug message"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsxs)(n.td,{children:["Indica a 4D enviar a ",(0,d.jsx)(n.em,{children:"mensagem"})," ao entorno de depura\xe7\xe3o do sistema. O resultado depende da plataforma:",(0,d.jsx)(n.br,{}),"Baixo Mac OS: o comando envia a mensagem \xe0 ConsolaBaixo Windows: o comando envia a mensagem como uma mensagem de depura\xe7\xe3o. Para poder ler este mensagem, deve ter Microsoft Visual Studio ou DebugView para Windows (",(0,d.jsx)(n.a,{href:"http://technet.microsoft.com/en-us/sysinternals/bb896647.aspx",children:"http://technet.microsoft.com/en-us/sysinternals/bb896647.aspx"}),")"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Into 4D diagnostic log"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"5"}),(0,d.jsxs)(n.td,{children:["Lhe indica a 4D colocar a mensagem no arquivo de diagn\xf3stico de 4D, se este arquivo est\xe1 ativo.",(0,d.jsx)(n.br,{}),"O arquivo de diagn\xf3stico pode ser ativado com ajuda do comando ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," (seletor 79)."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Into 4D request log"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"2"}),(0,d.jsxs)(n.td,{children:["Indica a 4D gravar a ",(0,d.jsx)(n.em,{children:"mensagem"})," no arquivo de hist\xf3rico de peti\xe7\xf5es de 4D, se este arquivo foi ativado"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Into system standard outputs"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"6"}),(0,d.jsxs)(n.td,{children:["Indica a 4D que deve enviar a ",(0,d.jsx)(n.em,{children:"mensagem"})," a um fluxo de sa\xedda padr\xe3o. A mensagem \xe9 enviada a: ",(0,d.jsx)(n.strong,{children:"stdout"})," se ",(0,d.jsx)(n.em,{children:"importance"})," = Information message ou Warning message ",(0,d.jsx)(n.strong,{children:"stderr"})," se ",(0,d.jsx)(n.em,{children:"importance"})," = Error message"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Into Windows log events"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsxs)(n.td,{children:["Indica a 4D enviar o ",(0,d.jsx)(n.em,{children:"mensagem"})," \u201CLog events\u201D de Windows. Este hist\xf3rico recebe e armazena as mensagens que vem das aplica\xe7\xf5es em execu\xe7\xe3o. Neste caso, pode definir o n\xedvel de import\xe2ncia da ",(0,d.jsx)(n.em,{children:"mensagem"})," via o par\xe2metro opcional ",(0,d.jsx)(n.em,{children:"import\xe2ncia"})," (ver a continua\xe7\xe3o).",(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.br,{}),"Notas:"]})," ",(0,d.jsx)(n.br,{}),"Para que esta funcionalidade esteja dispon\xedvel, o servi\xe7o Log Events de Windows deve estar em execu\xe7\xe3o.Baixo Mac OS, o comando n\xe3o faz nada com este tipo de sa\xedda"]})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Se omitir o par\xe2metro ",(0,d.jsx)(n.em,{children:"tipoSaida,"})," o valor 0 se utiliza como padr\xe3o (Into Windows Log Events)."]}),"\n",(0,d.jsxs)(n.p,{children:["Voc\xea pode atribuir um n\xedvel de import\xe2ncia \xe0 ",(0,d.jsx)(n.em,{children:"mensagem"})," por meio do par\xe2metro opcional ",(0,d.jsx)(n.em,{children:"importancia"}),", que o ajuda a ler e entender os eventos de registro. H\xe1 tr\xeas n\xedveis de import\xe2ncia: Informa\xe7\xe3o, Aviso e Erro.  4D lhe fornece as seguintes constantes predefinidas:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Valor"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Error message"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"2"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Information message"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"0"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Warning message"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Se n\xe3o passar nada no par\xe2metro ",(0,d.jsx)(n.em,{children:"importancia"})," ou se passar um valor inv\xe1lido, se utiliza o valor como padr\xe3o (0)."]}),"\n",(0,d.jsx)(n.div,{children:(0,d.jsxs)(n.p,{children:["O par\xe2metro ",(0,d.jsx)(n.em,{children:"importancia"})," s\xf3 \xe9 usado com ",(0,d.jsx)(n.em,{children:"tipoSaida"})," ",(0,d.jsx)(n.code,{children:"Into Windows log events"}),", ",(0,d.jsx)(n.code,{children:"Into 4D diagnostic log"})," e ",(0,d.jsx)(n.code,{children:"Into system standard outputs"}),"."]})}),"\n",(0,d.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsxs)(n.p,{children:["Caso queiras realizar um seguimento das aberturas de sua base baixo Windows, pode escrever a seguinte linha de c\xf3digo no ",(0,d.jsx)(n.a,{href:"metodo-banco-de-dados-on-startup.md",children:"M\xe9todo banco de dados On Startup"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0LOG EVENT(Into Windows log events;"The Invoice database was opened.")\n'})}),"\n",(0,d.jsx)(n.p,{children:"Cada vez que se abre o banco de dados, esta informa\xe7\xe3o ser\xe1 escrita no visor de eventos de Windows e seu n\xedvel de import\xe2ncia ser\xe1 0."}),"\n",(0,d.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/pt/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return a}});var o=s(667294);let d={},r=o.createContext(d);function a(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);