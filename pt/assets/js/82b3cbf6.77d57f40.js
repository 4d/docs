"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62621"],{659869:function(e,o,a){a.r(o),a.d(o,{default:()=>m,frontMatter:()=>r,metadata:()=>n,assets:()=>i,toc:()=>c,contentTitle:()=>t});var n=JSON.parse('{"id":"commands-legacy/open-database","title":"OPEN DATABASE","description":"OPEN DATABASE ( filePath )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/open-database.md","sourceDirName":"commands-legacy","slug":"/commands/open-database","permalink":"/docs/pt/20-R7/commands/open-database","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fopen-database.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"open-database","title":"OPEN DATABASE","slug":"/commands/open-database","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OPEN DATA FILE","permalink":"/docs/pt/20-R7/commands/open-data-file"},"next":{"title":"Open datastore","permalink":"/docs/pt/20-R7/commands/open-datastore"}}'),d=a("785893"),s=a("250065");let r={id:"open-database",title:"OPEN DATABASE",slug:"/commands/open-database",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Nota",id:"nota",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.strong,{children:"OPEN DATABASE"})," ( ",(0,d.jsx)(o.em,{children:"filePath"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(o.table,{children:[(0,d.jsx)(o.thead,{children:(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.th,{children:"Par\xe2metro"}),(0,d.jsx)(o.th,{children:"Tipo"}),(0,d.jsx)(o.th,{}),(0,d.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsx)(o.tbody,{children:(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"filePath"}),(0,d.jsx)(o.td,{children:"Text"}),(0,d.jsx)(o.td,{children:"\u2192"}),(0,d.jsx)(o.td,{children:"Nome ou via de acesso completa do arquivo de base de dados a abrir (.4db, .4dc, .4dbase ou .4dlink)"})]})})]}),"\n",(0,d.jsx)(o.h4,{id:"nota",children:"Nota"}),"\n",(0,d.jsxs)(o.p,{children:["O comando ",(0,d.jsx)(o.strong,{children:"OPEN DATABASE"})," fecha o banco de dados 4D atual e abre, com o processo em andamento, o banco definido por ",(0,d.jsx)(o.em,{children:"rotaArquivo"}),". Este comando \xe9 \xfatil para realizar provas autom\xe1ticas ou para voltar a abrir uma base de forma autom\xe1tica depois de uma compila\xe7\xe3o, , ou para permitir fusionar uma aplica\xe7\xe3o remota 4D para selecionar o servidor do banco de dados ao qual vai conectar."]}),"\n",(0,d.jsxs)(o.p,{children:["No par\xe2metro ",(0,d.jsx)(o.em,{children:"rotaArquivo"}),", passe o nome ou a rota de acesso completa da base a abrir. Pode utilizar os arquivos com uma das seguintes extens\xf5es:"]}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:".4db (arquivo de estrutura interpretado),"}),"\n",(0,d.jsx)(o.li,{children:".4dc (arquivo de estrutura compilado),"}),"\n",(0,d.jsx)(o.li,{children:".4dbase (pacote OS X),"}),"\n",(0,d.jsx)(o.li,{children:"4dproject (arquivo do banco de dados projeto)"}),"\n",(0,d.jsx)(o.li,{children:".4dz (arquivo de lan\xe7amento dos bancos de dados projeto)"}),"\n",(0,d.jsx)(o.li,{children:".4dlink (arquivo de acesso direto)."}),"\n"]}),"\n",(0,d.jsx)(o.p,{children:"Se passar unicamente o nome de arquivo, deve ser colocado no mesmo n\xedvel que o arquivo de estrutura da base atual."}),"\n",(0,d.jsxs)(o.p,{children:["Se a rota de acesso estabelecer um banco de dados v\xe1lido, 4D fecha o banco em progresso e abre o banco de dados especificado. No modo monousu\xe1rio, o ",(0,d.jsx)(o.a,{href:"/docs/pt/20-R7/commands/semaphore",children:"Semaphore"})," do banco de dados fechado e o do banco aberto s\xe3o chamados sucessivamente."]}),"\n",(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.strong,{children:"Aten\xe7\xe3o:"})," dado que este comando faz que a aplica\xe7\xe3o se feche antes da reabertura do banco de dados especificado, n\xe3o se recomenda seu uso no ",(0,d.jsx)(o.a,{href:"metodo-banco-de-dados-on-startup.md",children:"M\xe9todo banco de dados On Startup"}),", ou em um m\xe9todo chamado por este m\xe9todo banco."]}),"\n",(0,d.jsxs)(o.p,{children:["O comando se executa de forma ass\xedncrona: depois de sua chamada, 4D continua executando o resto do m\xe9todo.",(0,d.jsx)(o.br,{}),"\nLogo, a aplica\xe7\xe3o se comporta como se o comando ",(0,d.jsx)(o.strong,{children:"Sair"})," do menu ",(0,d.jsx)(o.strong,{children:"Arquivo"})," estivesse selecionado: as caixas de di\xe1logo de abertura se cancelam, todos os processos abertos t\xeam 10 segundos para terminar antes de serem terminados, etc."]}),"\n",(0,d.jsx)(o.p,{children:"Se o arquivo da base objetivo n\xe3o se encontra ou \xe9 inv\xe1lido, se devolve um erro sistema estandarte do administrador de arquivos e 4D n\xe3o faz nada."}),"\n",(0,d.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-4d",children:'\xa0OPEN DATABASE("C:\\\\databases\\\\Invoices\\\\Invoices.4db")\n'})}),"\n",(0,d.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,d.jsxs)(o.p,{children:["Se quiser selecionar um servidor no in\xedcio desde uma aplica\xe7\xe3o monousu\xe1rio. Pode executar este c\xf3digo desde um processo lan\xe7ado por ",(0,d.jsx)(o.a,{href:"metodo-banco-de-dados-on-startup.md",children:"M\xe9todo banco de dados On Startup"}),":"]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-4d",children:'\xa0var $xml : Text\n\xa0$xml:=""\n\xa0$databaseName:="myServer"\n\xa0$IP:="192.168.6.7:19813"\n\xa0\n\xa0If(Shift down)\n\xa0\xa0\xa0\xa0$IP:=Request("IP address to connect to "+$databaseName;$IP)\n\xa0Else\n\xa0\xa0\xa0\xa0ok:=1\n\xa0End if\n\xa0\n\xa0If(ok=1)\n\xa0\xa0\xa0\xa0$xml:=Replace string($xml;"{databaseName}";$databaseName)\n\xa0\xa0\xa0\xa0$xml:=Replace string($xml;"{IP}";$IP)\n\xa0\xa0\xa0\xa0var $link : Object\n\xa0\xa0\xa0\xa0$link:=Folder(fk user preferences folder).file("server.4dlink")\n\xa0\xa0\xa0\xa0$link.setText($xml)\n\xa0\xa0\xa0\xa0OPEN DATABASE($link.platformPath)\n\xa0Else\n\xa0\xa0\xa0\xa0QUIT 4D\n\xa0End if\n'})}),"\n",(0,d.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(o.table,{children:[(0,d.jsx)(o.thead,{children:(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.th,{}),(0,d.jsx)(o.th,{})]})}),(0,d.jsxs)(o.tbody,{children:[(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"N\xfamero do comando"}),(0,d.jsx)(o.td,{children:"1321"})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"Thread-seguro"}),(0,d.jsx)(o.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,d.jsx)(o,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,o,a){a.d(o,{Z:function(){return t},a:function(){return r}});var n=a(667294);let d={},s=n.createContext(d);function r(e){let o=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);