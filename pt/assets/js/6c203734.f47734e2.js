"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58667],{356301:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>i,contentTitle:()=>n,default:()=>l,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var s=o(474848),r=o(28453);const t={id:"restore",title:"RESTORE",slug:"/commands/restore",displayed_sidebar:"docs"},n=void 0,d={id:"commands-legacy/restore",title:"RESTORE",description:"RESTORE {( endArquivo {; endPastaDestino} )}",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/restore.md",sourceDirName:"commands-legacy",slug:"/commands/restore",permalink:"/docs/pt/commands/restore",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frestore.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"restore",title:"RESTORE",slug:"/commands/restore",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"New log file",permalink:"/docs/pt/commands/new-log-file"},next:{title:"RESTORE INFO",permalink:"/docs/pt/commands/restore-info"}},i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function m(e){const a={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"RESTORE"})," {( ",(0,s.jsx)(a.em,{children:"endArquivo"})," {; ",(0,s.jsx)(a.em,{children:"endPastaDestino"}),"} )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"Par\xe2metro"}),(0,s.jsx)(a.th,{children:"Tipo"}),(0,s.jsx)(a.th,{}),(0,s.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"endArquivo"}),(0,s.jsx)(a.td,{children:"Text"}),(0,s.jsx)(a.td,{children:"\u2192"}),(0,s.jsx)(a.td,{children:"Endere\xe7o de acesso do arquivo a ser restitu\xeddo"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"endPastaDestino"}),(0,s.jsx)(a.td,{children:"Text"}),(0,s.jsx)(a.td,{children:"\u2192"}),(0,s.jsx)(a.td,{children:"Endere\xe7o de acesso da pasta de destino"})]})]})]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,s.jsx)(a.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsx)(a.p,{children:"O comando RESTORE permite restaurar o ou os arquivos incluidos em um arquivo de 4D. Este comando \xe9 \xfatil com interfaces personalizadas para a gest\xe3o de backups."}),"\n",(0,s.jsxs)(a.p,{children:["Se o par\xe2metro ",(0,s.jsx)(a.em,{children:"endArquivo"})," n\xe3o passa, o comando mostra uma caixa de di\xe1logo de abertura para que o usu\xe1rio possa selecionar o arquivo a restaurar."]}),"\n",(0,s.jsxs)(a.p,{children:["O par\xe2metro ",(0,s.jsx)(a.em,{children:"endArquivo"})," permite indicar a rota de acesso do arquivo a restaurar. Esta rota deve ser expressa com a sintaxe do sistema. \xc9 poss\xedvel passar uma rota absoluta ou uma relativa ao arquivo de estrutura do banco de dados.",(0,s.jsx)(a.br,{}),"\nNeste caso (se \xe9 omitido o par\xe2metro ",(0,s.jsx)(a.em,{children:"endPastaDest"}),"), a caixa de di\xe1logo de restaura\xe7\xe3o padr\xe3o aparece com o arquivo pr\xe9-selecionado, de maneira que o usu\xe1rio possa nomear a pasta de destino. Quando se completa o procedimento, aparece uma caixa de di\xe1logo de alerta e mostra-se a pasta que cont\xe9m os elementos restaurados."]}),"\n",(0,s.jsxs)(a.p,{children:["Tamb\xe9m \xe9 poss\xedvel passar o par\xe2metro ",(0,s.jsx)(a.em,{children:"endPastaDest"})," com a rota de acesso da pasta de destino dos elementos restaurados. Esta rota deve ser expressa com a sintaxe do sistema. \xc9 poss\xedvel passar uma rota absoluta ou relativa para o arquivo de estrutura do banco de dados. Se voc\xea passa este par\xe2metro, aparece uma caixa de di\xe1logo de restaura\xe7\xe3o pr\xe9-configurada, permitindo somente ao usu\xe1rio lan\xe7ar ou cancelar a restaura\xe7\xe3o. Quando se completa o procedimento, a janela \xe9 fechada novamente sem mostrar informa\xe7\xe3o adicional."]}),"\n",(0,s.jsxs)(a.p,{children:["O comando RESTORE modifica o valor das vari\xe1veis OK e Document: se a restaura\xe7\xe3o \xe9 correta, OK toma o valor 1 e Document cont\xe9m a rota da pasta de restaura\xe7\xe3o. Se o usu\xe1rio cancela a caixa de restaura\xe7\xe3o, interrompe a restaura\xe7\xe3o ou se ocorre um erro, OK toma o valor 0 e Document cont\xe9m uma cadeia vazia. \xc9 poss\xedvel interceptar o erro utilizando um m\xe9todo instalado atrav\xe9s do comando ",(0,s.jsx)(a.em,{children:"ON ERR CALL"}),"."]}),"\n",(0,s.jsx)(a.p,{children:"Nota: em um aplicativo 4D compilado e fusionado com 4D Volume Desktop, o comando RESTORE produz a visualiza\xe7\xe3o de uma caixa de di\xe1logo padr\xe3o de abertura de arquivos que lista por padr\xe3o os arquivos de extens\xe3o \u201c4BK\u201d."}),"\n",(0,s.jsx)(a.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/docs/pt/commands/backup",children:"BACKUP"}),(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.a,{href:"/docs/pt/commands/restore-info",children:"RESTORE INFO"})]})]})}function l(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},28453:(e,a,o)=>{o.d(a,{R:()=>n,x:()=>d});var s=o(296540);const r={},t=s.createContext(r);function n(e){const a=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),s.createElement(t.Provider,{value:a},e.children)}}}]);