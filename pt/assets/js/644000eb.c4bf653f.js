"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78333"],{255090:function(e,o,n){n.r(o),n.d(o,{default:()=>h,frontMatter:()=>i,metadata:()=>d,assets:()=>t,toc:()=>c,contentTitle:()=>s});var d=JSON.parse('{"id":"commands-legacy/get-4d-file","title":"Get 4D file","description":"Get 4D file ( arquivo {; *} ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-4d-file.md","sourceDirName":"commands-legacy","slug":"/commands/get-4d-file","permalink":"/docs/pt/20-R8/commands/get-4d-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-4d-file.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-4d-file","title":"Get 4D file","slug":"/commands/get-4d-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Export structure file","permalink":"/docs/pt/20-R8/commands/export-structure-file"},"next":{"title":"Get 4D folder","permalink":"/docs/pt/20-R8/commands/get-4d-folder"}}'),r=n("785893"),a=n("250065");let i={id:"get-4d-file",title:"Get 4D file",slug:"/commands/get-4d-file",displayed_sidebar:"docs"},s=void 0,t={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h2:"h2",nomebanco:"nomebanco",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Get 4D file"})," ( ",(0,r.jsx)(o.em,{children:"arquivo"})," {; *} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Par\xe2metro"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"arquivo"}),(0,r.jsx)(o.td,{children:"Integer"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Tipo de arquivo"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"*"}),(0,r.jsx)(o.td,{children:"Operador"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Retorna arquivo do banco de dados host"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Resultado"}),(0,r.jsx)(o.td,{children:"Text"}),(0,r.jsx)(o.td,{children:"\u2190"}),(0,r.jsx)(o.td,{children:"Nome da rota do arquivo 4D"})]})]})]}),"\n",(0,r.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(o.p,{children:["O comando ",(0,r.jsx)(o.strong,{children:"Get 4D file"})," devolve a rota de acesso ao arquivo de ambiente 4D especificado pelo par\xe2metro ",(0,r.jsx)(o.em,{children:"arquivo"}),". A rota ser\xe1 devolvida utilizando a sintaxe de sistema."]}),"\n",(0,r.jsx)(o.p,{children:"Este comando lhe permite obter a rota de acesso real de arquivos espec\xedficos, cujo nome ou localiza\xe7\xe3o pode depender do contexto do banco de dados. Tamb\xe9m lhe ajuda a escrever c\xf3digo gen\xe9rico independente da vers\xe3o 4D ou o sistema operativo."}),"\n",(0,r.jsxs)(o.p,{children:["Passe em ",(0,r.jsx)(o.em,{children:"arquivo"}),' um valor para definir o arquivo que deseja obter o nome de rota completo. Pode utilizar uma das seguintes constantes, localizadas no tema "',(0,r.jsx)(o.em,{children:"Ambiente 4D"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Constante"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{children:"Valor"}),(0,r.jsx)(o.th,{children:"Coment\xe1rio"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Backup history file"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"19"}),(0,r.jsx)(o.td,{children:"Arquivo de hist\xf3rico da c\xf3pia de seguranca atual. Armazenado na pasta Logs do lado do arquivo de estrutura de banco de dados. Se nenhum arquivo de hist\xf3rico tiver sido criado ou existir, uma rota vazia \xe9 retornada. N\xe3o cria erros.."})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Backup log file"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"13"}),(0,r.jsx)(o.td,{children:"Arquivo de hist\xf3rico da c\xf3pia de seguranca atual. Armazenado na pasta Logs do lado do arquivo de estrutura de banco de dados. Se nenhum arquivo de hist\xf3rico tiver sido criado ou existir, uma rota vazia \xe9 retornada. N\xe3o cria erros.."})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Backup settings file"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"18"}),(0,r.jsx)(o.td,{children:"Arquivo Backup.xml, armazenado na pasta Preferencias/Backup junto ao arquivo de estrutura do banco de dados"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Backup settings file for data"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"17"}),(0,r.jsx)(o.td,{children:"Arquivo Backup.xml, armazenado na pasta Preferencias/Backup junto ao arquivo de estrutura do banco de dados"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Build application log file"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"14"}),(0,r.jsx)(o.td,{children:"Arquivo de hist\xf3rico atual em formato xml del gerador de aplicacoes. Armazenado na pasta Logs ao lado do arquivo de estrutura do banco de dados. Se nao tiver criado nenhum arquivo de hist\xf3rico ou nao existir, se devolver uma rota vazia. Nao sao gerados erros."})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Build application settings file"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"20"}),(0,r.jsx)(o.td,{children:'Arquivo de configura\xe7\xe3o predeterminado do gerador de aplica\xe7\xf5es ("buildApp.4DSettings"). Armazenado na pasta Configura\xe7\xe3o do banco de dados.'})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Compacting log file"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"6"}),(0,r.jsxs)(o.td,{children:["Arquivo de hist\xf3rico do compactamento mais recente criado pelo comando ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R8/commands/compact-data-file",children:"Compact data file"})," ou pelo Centro de seguranca e manuten\xe7\xe3o (CSM) Armazenado na pasta Logs do lado do arquivo de estrutura de banco de dados. Se nenhum arquivo de hist\xf3rico tiver sido criado ou existir, uma rota vazia \xe9 retornada. N\xe3o cria erros."]})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Current backup settings file"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"1"}),(0,r.jsx)(o.td,{children:"Arquivo Backup.xml, armazenado na pasta Preferencias/Backup junto ao arquivo de estrutura do banco de dados"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Debug log file"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"12"}),(0,r.jsxs)(o.td,{children:["Arquivo de hist\xf3rico criado pelo comando ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R8/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"(Debug log recording). Armazenado na pasta Logs ao lado do arquivo de estrutura de banco de dados. Se nenhum arquivo de hist\xf3rico tiver sido criado ou existir, uma rota vazia \xe9 retornada. N\xe3o cria erros.",(0,r.jsx)(o.br,{}),(0,r.jsx)(o.br,{})]})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Diagnostic log file"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"11"}),(0,r.jsxs)(o.td,{children:["Arquivo de hist\xf3rico criado pelo comando ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R8/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"(Diagnostic log recording).. Armazenado na pasta Logs ao lado do arquivo de estrutura de banco de dados. Se nenhum diagn\xf3stico tiver sido criado ou existir, uma rota vazia \xe9 retornada. N\xe3o cria erros."]})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Directory file"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"16"}),(0,r.jsx)(o.td,{children:"Arquivo diret\xf3rio.json, que cont\xe9m a descri\xe7\xe3o de usu\xe1rios e grupos (se houver) para o banco de dados projeto. Se puder localizar na pasta de configura\xe7\xe3o do banco de dados de usu\xe1rio (predeterminada, global para o projeto) ou na pasta de configura\xe7\xe3o de dados (espec\xedfica de um arquivo de dados)."})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"HTTP Client log file"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"24"}),(0,r.jsxs)(o.td,{children:["Arquivo hist\xf3rico criado pelo comando ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R8/commands/http-set-option",children:"HTTP SET OPTION"}),"(HTTP client log;value). Armazenado na pasta Logs."]})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"HTTP debug log file"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"9"}),(0,r.jsxs)(o.td,{children:["Arquivo de hist\xf3rico criado pelo comando ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R8/commands/web-set-option",children:"WEB SET OPTION"}),"(Web debug log).. Armazenado na pasta Logs ao lado do arquivo de estrutura de banco de dados. Se nenhum arquivo de debug tiver sido criado ou existir, uma rota vazia \xe9 retornada. N\xe3o cria erros."]})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"HTTP log file"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"8"}),(0,r.jsxs)(o.td,{children:["Arquivo de hist\xf3rico criado pelo comando ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R8/commands/web-set-option",children:"WEB SET OPTION"}),"(Web log recording). Armazenado na pasta Logs junto ao arquivo de estrutura do banco de dados. Se n\xe3o tiver criado nenhum arquivo de hist\xf3rico ou n\xe3o existir, se devolve uma rota vazia. N\xe3o gera erros"]})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"IMAP Log file"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"23"}),(0,r.jsxs)(o.td,{children:["Arquivo de hist\xf3rico criado pelo comando ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R8/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"(IMAP Log). Armazenado na pasta Logs do banco de dados"]})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Last backup file"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"2"}),(0,r.jsxs)(o.td,{children:["\xdaltimo arquivo de c\xf3pia de seguran\xe7a, chamado ",(0,r.jsx)(o.nomebanco,{children:"[bkpNum].4BK, armazenado em uma localiza\xe7\xe3o personalizada"})]})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Last journal integration log file"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"22"}),(0,r.jsx)(o.td,{children:"Rota completa do \xfaltimo arquivo de integra\xe7\xe3o do di\xe1rio (armazenado na pasta Logs da aplica\xe7\xe3o restaura), se houver. Esse arquivo \xe9 criado, em modo auto-reparo, logo que ocorrer uma integra\xe7\xe3o de arquivos log (ver )."})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"POP3 Log file"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"21"}),(0,r.jsxs)(o.td,{children:["Arquivo Log criado pelo comando ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R8/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"(POP3 Log) . Armazenado na pasta Logs do banco de dados."]})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Repair log file"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"7"}),(0,r.jsx)(o.td,{children:"Arquivo de hist\xf3rico de reparos realizados no banco de dados pelo Centor de manuten\xe7\xe3o e seguran\xe7a (CMS) Armazenado na pasta Logs ao lado do arquivo de estrutura de banco de dados. Se nenhum arquivo de hist\xf3rico existir, uma rota vazia \xe9 retornada. Nenhum erro \xe9 criado."})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Request log file"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"10"}),(0,r.jsxs)(o.td,{children:["Arquivo de peti\xe7\xf5es cliente\\servidor padr\xe3o (excluindo peti\xe7\xf5es web) criado pelos comandos ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R8/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"(4D Server log recording) ou ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R8/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"(Client log recording) . Se executado no servidor, o hist\xf3rico do servidor \xe9 retornado. Armazenado na pasta Logs no servidor. Se for executado no cliente, devolve o hist\xf3rico do cliente. Armazenado na pasta Logs no cliente. Se nenhum arquivo de hist\xf3rico tiver sido criado ou existir, uma rota vazia \xe9 retornada.",(0,r.jsx)(o.br,{})]})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"SMTP log file"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"15"}),(0,r.jsxs)(o.td,{children:["Arquivo de hist\xf3rico criados pelo comando ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R8/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"(SMTP Log) . Armazenado na pasta Logs ao lado do arquivo de estrutura de banco de dados. Se nenhum arquivo log SMTP foi criado ou n\xe3o existir, uma rota vazia \xe9 retornada. Nenhum erro \xe9 criado",(0,r.jsx)(o.br,{})]})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"User settings file"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"3"}),(0,r.jsx)(o.td,{children:"O arquivo settings.4DSettings para os arquivos de dados, armazenado na pasta Settings junto ao arquivo estrutura do banco de dados se for ativado"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"User settings file for data"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"4"}),(0,r.jsx)(o.td,{children:"settings.4DSettings para o arquivo de dados atual, armazenado na pasta Settings junto ao arquivo de dados."})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Verification log file"}),(0,r.jsx)(o.td,{children:"Inteiro longo"}),(0,r.jsx)(o.td,{children:"5"}),(0,r.jsxs)(o.td,{children:["Arquivos de hist\xf3rico criados pelos comandos ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R8/commands/verify-current-data-file",children:"VERIFY CURRENT DATA FILE"})," e ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R8/commands/verify-data-file",children:"VERIFY DATA FILE"})," ou o Centro de manuten\xe7\xe3o e segura\xe7a (CMS).. Armazenado na pasta Logs ao lado do arquivo de estrutura de banco de dados. Se nenhuma verifica\xe7\xe3o tiver sido feita ou nenhum arquivo de hist\xf3rico existir, uma rota vazia \xe9 retornada. Nenhum erro \xe9 criado."]})]})]})]}),"\n",(0,r.jsxs)(o.p,{children:["Se o ",(0,r.jsx)(o.em,{children:"arquivo"})," objetivo n\xe3o existir, se devolve uma rota vazia. N\xe3o s\xe3o gerados erros."]}),"\n",(0,r.jsxs)(o.p,{children:["Quando o comando for chamado desde um componente, passe o par\xe2metro opcional ",(0,r.jsx)(o.em,{children:"*"})," para obter a rota de ",(0,r.jsx)(o.em,{children:"arquivo"})," do banco de dados local. Neste caso, se for omitido o par\xe2metro ",(0,r.jsx)(o.em,{children:"*"}),", sempre se devolve uma string vazia."]}),"\n",(0,r.jsxs)(o.p,{children:["J\xe1 no caso de User settings file for data e User settings file, uma rota se devolve s\xf3 se a op\xe7\xe3o de seguran\xe7a ",(0,r.jsx)(o.strong,{children:"Ativar configura\xe7\xe3o de usu\xe1rio no arquivo externo"}),' for selecionada no di\xe1logo "Propriedades do banco de dados" (ver ).']}),"\n",(0,r.jsx)(o.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(o.p,{children:"Se quiser obter a rota do \xfaltimo arquivo de backup:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0var $path : Text\n\xa0$path:=Get 4D file(Last backup file)\n\xa0\xa0// $path = "C:\\Backups\\Countries\\Countries[0025].4BK" for example\n'})}),"\n",(0,r.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.a,{href:"/docs/pt/20-R8/commands/file",children:"File"})}),"\n",(0,r.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"N\xfamero do comando"}),(0,r.jsx)(o.td,{children:"1418"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Thread-seguro"}),(0,r.jsx)(o.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return s},a:function(){return i}});var d=n(667294);let r={},a=d.createContext(r);function i(e){let o=d.useContext(a);return d.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(a.Provider,{value:o},e.children)}}}]);