"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77908"],{513714:function(e,o,a){a.r(o),a.d(o,{metadata:()=>d,contentTitle:()=>t,default:()=>m,assets:()=>i,toc:()=>c,frontMatter:()=>r});var d=JSON.parse('{"id":"commands-legacy/open-data-file","title":"OPEN DATA FILE","description":"OPEN DATA FILE ( endAcesso )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/open-data-file.md","sourceDirName":"commands-legacy","slug":"/commands/open-data-file","permalink":"/docs/pt/commands/open-data-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fopen-data-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"open-data-file","title":"OPEN DATA FILE","slug":"/commands/open-data-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OPEN ADMINISTRATION WINDOW","permalink":"/docs/pt/commands/open-administration-window"},"next":{"title":"OPEN DATABASE","permalink":"/docs/pt/commands/open-database"}}'),n=a("785893"),s=a("250065");let r={id:"open-data-file",title:"OPEN DATA FILE",slug:"/commands/open-data-file",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"OPEN DATA FILE"})," ( ",(0,n.jsx)(o.em,{children:"endAcesso"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Par\xe2metro"}),(0,n.jsx)(o.th,{children:"Tipo"}),(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsx)(o.tbody,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"endAcesso"}),(0,n.jsx)(o.td,{children:"Text"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Nome o endere\xe7o de acesso completo ao arquivo de dados a ser aberto"})]})})]}),"\n",(0,n.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(o.p,{children:["O comando ",(0,n.jsx)(o.strong,{children:"OPEN DATA FILE"})," permite alterar os dados do arquivo aberto pela aplica\xe7\xe3o 4D on-the-fly."]}),"\n",(0,n.jsxs)(o.p,{children:['Passe o nome ou o caminho de acesso completo do arquivo de dados a ser aberto (arquivo com extens\xe3o ".4DD") no par\xe2metro ',(0,n.jsx)(o.em,{children:"accessPath"}),". Se voc\xea passar somente o nome do arquivo, ele deve ser colocado ao lado da estrutura de arquivo do banco de dados."]}),"\n",(0,n.jsxs)(o.p,{children:["Se o caminho de acesso define um arquivo de dados v\xe1lido, 4D fecha o banco de dados em andamento e re-abre-o com o arquivo de dados especificado. Os m\xe9todos de banco de dados ",(0,n.jsx)(o.a,{href:"metodo-banco-de-dados-on-exit.md",children:"M\xe9todo banco de dados On Exit"})," e ",(0,n.jsx)(o.a,{href:"metodo-banco-de-dados-on-startup.md",children:"M\xe9todo banco de dados On Startup"})," s\xe3o sucessivamente chamados."]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Aten\xe7\xe3o:"})," Uma vez que este comando faz com que a aplica\xe7\xe3o seja fechada antes de abrir novamente com o arquivo de dados especificado, n\xe3o \xe9 poss\xedvel us\xe1-lo no m\xe9todo ",(0,n.jsx)(o.a,{href:"metodo-banco-de-dados-on-exit.md",children:"M\xe9todo banco de dados On Exit"})," ou em um m\xe9todo chamado por este m\xe9todo de banco de dados."]}),"\n",(0,n.jsxs)(o.p,{children:["O comando \xe9 executado de forma ass\xedncrona: ap\xf3s a sua chamada, 4D continua a executar o restante do m\xe9todo. Ent\xe3o, a aplica\xe7\xe3o se comporta como se o comando ",(0,n.jsx)(o.strong,{children:"Quit"})," tivesse sido selecionado no menu ",(0,n.jsx)(o.strong,{children:"Arquivo"}),": abrir caixas de di\xe1logo s\xe3o cancelados, todos os processos abertos tem 10 segundos para terminar antes de ser encerrado, etc."]}),"\n",(0,n.jsx)(o.p,{children:"Antes de lan\xe7ar a opera\xe7\xe3o, o comando verifica a validade do arquivo de dados especificado. Al\xe9m disso, se o arquivo j\xe1 foi aberto, o comando verifica se ele corresponde \xe0 estrutura atual."}),"\n",(0,n.jsxs)(o.p,{children:["Se voc\xea passar uma string vazia em ",(0,n.jsx)(o.em,{children:"accessPath"}),", o comando ir\xe1 reabrir o banco de dados sem alterar o arquivo de dados."]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"4D Server:"})," Come\xe7ando com 4D v13, este comando pode ser executado com o 4D Server. Neste contexto, o comando faz uma chamada interna ao comando ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/quit-4d",children:"QUIT 4D"})," no servidor (o qual faz que apare\xe7a uma caixa de di\xe1logo em cada computador remoto indicando que o servidor est\xe1 no processo de sa\xedda) antes de abrir o arquivo designado."]}),"\n",(0,n.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsxs)(o.p,{children:["No contexto de implementa\xe7\xe3o de uma aplica\xe7\xe3o fusionada, se quiser abrir ou criar o arquivo de dados de usu\xe1rio no m\xe9todo de banco de dados On Startup. Este exemplo usa o arquivo de dados padr\xe3o (ver ",(0,n.jsx)(o.em,{children:"Gerenciamento de arquivo de dados em aplicativos finais"}),"):"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'\xa0If(Data file="@default.4dd")\n\xa0\xa0\xa0\xa0If(Version type?? Merged application)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Is data file locked)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$dataPath:=Get 4D folder(Active 4D Folder)+"data.4dd"\n\xa0\xa0//se um arquivo local de dados j\xe1 existir\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Test path name($dataPath)=Is a document)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0OPEN DATA FILE($dataPath)\xa0//abre o arquivo\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CREATE DATA FILE($dataPath)\xa0//cria o arquivo\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,n.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.a,{href:"/docs/pt/commands/create-data-file",children:"CREATE DATA FILE"})}),"\n",(0,n.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"N\xfamero do comando"}),(0,n.jsx)(o.td,{children:"312"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Thread-seguro"}),(0,n.jsx)(o.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,o,a){a.d(o,{Z:function(){return t},a:function(){return r}});var d=a(667294);let n={},s=d.createContext(n);function r(e){let o=d.useContext(s);return d.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),d.createElement(s.Provider,{value:o},e.children)}}}]);