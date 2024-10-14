"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[24523],{381860:(a,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>d,metadata:()=>i,toc:()=>u});var s=o(474848),n=o(28453);const d={id:"backup",slug:"backup",title:"P\xe1gina de Backup"},r=void 0,i={id:"Backup/backup",title:"P\xe1gina de Backup",description:"Uma c\xf3pia de seguran\xe7a pode ser iniciada de tr\xeas maneiras:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/Backup/backup.md",sourceDirName:"Backup",slug:"/Backup/backup",permalink:"/docs/pt/Backup/backup",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Backup%2Fbackup.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"backup",slug:"backup",title:"P\xe1gina de Backup"},sidebar:"docs",previous:{title:"C\xf3pia de seguran\xe7a e restaura\xe7\xe3o",permalink:"/docs/pt/Backup/overview"},next:{title:"Backups peri\xf3dicos",permalink:"/docs/pt/Backup/settings"}},c={},u=[{value:"You can use the Backup page to view some backup parameters of the database and to launch a manual backup:",id:"you-can-use-the-backup-page-to-view-some-backup-parameters-of-the-database-and-to-launch-a-manual-backup",level:2},{value:"Backup autom\xe1tico peri\xf3dico",id:"backup-autom\xe1tico-peri\xf3dico",level:2},{value:"Comando BACKUP",id:"comando-backup",level:2},{value:"Gerenciar o processo de  backup",id:"gerenciar-o-processo-de--backup",level:2},{value:"Acesso do banco de dados durante o backup",id:"acesso-do-banco-de-dados-durante-o-backup",level:3},{value:"Gest\xe3o dos problemas das c\xf3pias de seguran\xe7a",id:"gest\xe3o-dos-problemas-das-c\xf3pias-de-seguran\xe7a",level:3},{value:"P\xe1gina de Backup",id:"p\xe1gina-de-backup",level:2},{value:"Gerenciamento do tamanho de hist\xf3rico de c\xf3pias de seguran\xe7a.",id:"gerenciamento-do-tamanho-de-hist\xf3rico-de-c\xf3pias-de-seguran\xe7a",level:4},{value:"backupHistory.json",id:"backuphistoryjson",level:2}];function t(a){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...a.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"Uma c\xf3pia de seguran\xe7a pode ser iniciada de tr\xeas maneiras:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Manualmente, utilizando el comando ",(0,s.jsx)(e.strong,{children:"Copia de seguridad..."})," del men\xfa 4D ",(0,s.jsx)(e.strong,{children:"Archivo"})," o el bot\xf3n ",(0,s.jsx)(e.strong,{children:"Copia de seguridad"})," del ",(0,s.jsx)(e.a,{href:"/docs/pt/MSC/backup",children:"Centro de mantenimiento y seguridad"}),"."]}),"\n",(0,s.jsx)(e.li,{children:"Automaticamente, usando o agendamento  que pode ser estabelecido em Configura\xe7\xf5es de Banco de Dados"}),"\n",(0,s.jsxs)(e.li,{children:["Por programa\xe7\xe3o, utilizando o comando ",(0,s.jsx)(e.code,{children:"BACKUP"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["4D Server: Um backup pode ser iniciado manualmente a partir de uma m\xe1quina remota usando um m\xe9todo que chama o comando ",(0,s.jsx)(e.code,{children:"BACKUP"}),". O comando ser\xe1 executado, em todos os casos, no servidor."]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"you-can-use-the-backup-page-to-view-some-backup-parameters-of-the-database-and-to-launch-a-manual-backup",children:"You can use the Backup page to view some backup parameters of the database and to launch a manual backup:"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["Selecione o comando ",(0,s.jsx)(e.strong,{children:"Backup..."})," no menu 4D ",(0,s.jsx)(e.strong,{children:"File"}),".\nA janela de backup \xe9 exibida:\n",(0,s.jsx)(e.img,{src:o(795938).A+"",width:"564",height:"192"}),'\nVoc\xea pode ver o local da pasta de backup usando o menu pop-up ao lado da \xe1rea "Backup destination". Essa localiza\xe7\xe3o \xe9 definida na p\xe1gina de ',(0,s.jsx)(e.strong,{children:"Backup/Configura\xe7\xe3o"})," das Configura\xe7\xf5es do Banco de Dados."]}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Voc\xea tamb\xe9m pode abrir o [Maintenance and Security Center] (MSC/overview.md) do 4D e exibir a [Backup page] (MSC/backup.md)."}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["O bot\xe3o ",(0,s.jsx)(e.strong,{children:"Database properties..."})," faz com que a p\xe1gina Backup/Configuration (Backup/Configura\xe7\xe3o) das Structure Settings (Configura\xe7\xf5es da estrutura) seja exibida."]}),"\n",(0,s.jsxs)(e.ol,{start:"2",children:["\n",(0,s.jsxs)(e.li,{children:["Clique em ",(0,s.jsx)(e.strong,{children:"Backup"})," para iniciar o backup usando os par\xe2metros atuais."]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"backup-autom\xe1tico-peri\xf3dico",children:"Backup autom\xe1tico peri\xf3dico"}),"\n",(0,s.jsxs)(e.p,{children:["As c\xf3pias de seguran\xe7a programadas s\xe3o iniciadas automaticamente. Se configuran en la p\xe1gina ",(0,s.jsx)(e.strong,{children:"Backup/Planificador"})," de las ** Propiedades**."]}),"\n",(0,s.jsx)(e.p,{children:"As c\xf3pias de seguran\xe7a s\xe3o feitas automaticamente na hora definida nessa p\xe1gina sem nenhum tipo de interven\xe7\xe3o do usu\xe1rio. Para obter mais informa\xe7\xf5es sobre como usar essa caixa de di\xe1logo, consulte [Agendador nas configura\xe7\xf5es de backup] (settings.md#scheduler)."}),"\n",(0,s.jsx)(e.h2,{id:"comando-backup",children:"Comando BACKUP"}),"\n",(0,s.jsxs)(e.p,{children:["Quando o comando de linguagem 4D ",(0,s.jsx)(e.code,{children:"BACKUP"})," \xe9 executado a partir de qualquer m\xe9todo, o backup come\xe7a a usar os par\xe2metros atuais conforme definido nas Configura\xe7\xf5es. Voc\xea pode usar os m\xe9todos de banco de dados ",(0,s.jsx)(e.code,{children:"On Backup Startup"})," e ",(0,s.jsx)(e.code,{children:"On Backup Shutdown"})," para lidar com o processo de backup (consulte o manual ",(0,s.jsx)(e.em,{children:"4D Language Reference"}),")."]}),"\n",(0,s.jsx)(e.h2,{id:"gerenciar-o-processo-de--backup",children:"Gerenciar o processo de  backup"}),"\n",(0,s.jsx)(e.p,{children:"Quando iniciar o backup, 4D exibe uma caixa de di\xe1logo com um term\xf4metro indicando o progresso da c\xf3pia de seguran\xe7a:"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:o(195834).A+"",width:"408",height:"168"})}),"\n",(0,s.jsxs)(e.p,{children:["Esse term\xf4metro tamb\xe9m \xe9 mostrado na ",(0,s.jsx)(e.a,{href:"/docs/pt/MSC/backup",children:"p\xe1gina Backup de CSM"})," se voc\xea utilizou essa caixa de di\xe1logo."]}),"\n",(0,s.jsxs)(e.p,{children:["O bot\xe3o ",(0,s.jsx)(e.strong,{children:"Parar"})," permite que o usu\xe1rio interrompa o backup a qualquer momento (consulte ",(0,s.jsx)(e.a,{href:"/docs/pt/Backup/backup#handling-backup-issues",children:"Manuseio de problemas de backup"})," abaixo)."]}),"\n",(0,s.jsxs)(e.p,{children:["O estado da \xfaltima c\xf3pia de seguran\xe7a (correta ou com erro) \xe9 armazenado na \xe1rea de Informa\xe7\xf5es da \xdaltima C\xf3pia de Seguran\xe7a da ",(0,s.jsx)(e.a,{href:"/docs/pt/MSC/backup",children:"p\xe1gina de C\xf3pias de Seguran\xe7a no MSC"})," ou na ",(0,s.jsx)(e.strong,{children:"p\xe1gina de Manuten\xe7\xe3o"})," do 4D Server. Tamb\xe9m se registra no banco de dados ",(0,s.jsx)(e.strong,{children:"Backup journal.txt"}),"."]}),"\n",(0,s.jsx)(e.h3,{id:"acesso-do-banco-de-dados-durante-o-backup",children:"Acesso do banco de dados durante o backup"}),"\n",(0,s.jsx)(e.p,{children:"Durante a c\xf3pia de seguran\xe7a, acesso ao banco de dados \xe9 restrito por 4D dependendo do contexto. 4D bloqueia os processos relacionados com os tipos de arquivos inclu\xeddos na c\xf3pia de seguran\xe7a: se s\xf3 fizer uma c\xf3pia de seguran\xe7a dos arquivos do projeto, n\xe3o se poder\xe1 acessar \xe0 estrutura mas sim aos dados."}),"\n",(0,s.jsx)(e.p,{children:"Pelo contr\xe1rio, se s\xf3 fizer uma c\xf3pia de seguran\xe7a do arquivo de dados, o acesso \xe0 estrutura continua sendo permitido. Nesse caso, as possibilidades de acesso ao banco de dados  s\xe3o as seguintes:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Com a vers\xe3o 4D monousu\xe1rio, o banco de dados \xe9 trancado tanto para leitura quanto escrita, todos os processos s\xe3o congelados. Nenhuma a\xe7\xe3o \xe9 realizada."}),"\n",(0,s.jsxs)(e.li,{children:["Com 4D Server, o banco de dados est\xe1 bloqueado s\xf3 para escrita; as m\xe1quinas clientes podem ver os dados. Se uma m\xe1quina cliente enviar uma peti\xe7\xe3o de adi\xe7\xe3o, elimina\xe7\xe3o ou mudan\xe7a ao servidor, uma janela aparece pedindo ao usu\xe1rio que espere at\xe9 o final da c\xf3pia de seguran\xe7a. Quando a aplica\xe7\xe3o for salva, a janela desaparece a a\xe7\xe3o \xe9 realizada. Para cancelar a solicita\xe7\xe3o em andamento e n\xe3o esperar pelo fim do backup, basta clicar no bot\xe3o ",(0,s.jsx)(e.strong,{children:"Cancelar opera\xe7\xe3o"}),". Entretanto, se a a\xe7\xe3o que espera ser executada vem de um m\xe9todo lan\xe7ado antes da c\xf3pia de seguran\xe7a, n\xe3o deve cancelar a a\xe7\xe3o porque s\xf3 s\xe3o canceladas as opera\xe7\xf5es restantes. Al\xe9m disso, um m\xe9todo parcialmente executado pode causar inconsist\xeancias l\xf3gicas no banco de dados."]}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["Quando a a\xe7\xe3o que est\xe1 esperando para ser executada vem de um m\xe9todo e o usu\xe1rio clica no bot\xe3o ",(0,s.jsx)(e.strong,{children:"Cancelar opera\xe7\xe3o"}),", o 4D Server retorna o erro -9976 (Esse comando n\xe3o pode ser executado porque o backup do banco de dados est\xe1 em andamento)."]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"gest\xe3o-dos-problemas-das-c\xf3pias-de-seguran\xe7a",children:"Gest\xe3o dos problemas das c\xf3pias de seguran\xe7a"}),"\n",(0,s.jsx)(e.p,{children:"Pode acontecer que uma c\xf3pia de seguran\xe7a n\xe3o seja executada corretamente. Pode haver v\xe1rias causas de falha na c\xf3pia de seguran\xe7a: interrup\xe7\xe3o do usu\xe1rio, arquivo adjunto n\xe3o encontrado, problemas no disco de destino, transa\xe7\xe3o incompleta, etc. 4D processa a incid\xeancia segundo a causa."}),"\n",(0,s.jsxs)(e.p,{children:["Em todos os casos tenha em mente que o status do \xfaltimo backup (bem sucedido ou falhado) \xe9 armazenado na \xfaltima \xe1rea de Informa\xe7\xf5es de Backup da p\xe1gina de [Backup na MSC](MSC/backup. d) ou na ",(0,s.jsx)(e.strong,{children:"p\xe1gina de manuten\xe7\xe3o"})," do servidor 4D, bem como no ",(0,s.jsx)(e.strong,{children:"Backup do journal.txt"}),"."]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["**Interrup\xe7\xe3o de Usu\xe1rio: The Bot\xe3o Parar na caixa de di\xe1logo de progresso permite aos usu\xe1rios interromper o processo de c\xf3pia de seguran\xe7a a qualquer momento. Nesse caso, a c\xf3pia de elementos para e \xe9 gerado o erro 1406. Voc\xea pode interceptar esse erro no m\xe9todo de banco de dados ",(0,s.jsx)(e.code,{children:"On Backup Shutdown"}),"."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Arquivo anexado n\xe3o encontrado"}),": Quando um arquivo anexado n\xe3o pode ser encontrado, 4D realiza um backup parcial (backup de arquivos de aplica\xe7\xe3o e arquivos anexados acess\xedveis) e retorna um erro."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Backup imposs\xedvel"})," (o disco est\xe1 cheio ou protegido contra grava\xe7\xe3o, falta de disco, falha de disco, transa\xe7\xe3o incompleta, aplicativo n\xe3o iniciado no momento do backup autom\xe1tico programado, etc.):\nSe esse for um erro de primeira vez, 4D far\xe1 uma segunda tentativa de realizar o backup. A espera entre as duas tentativas \xe9 definida na p\xe1gina ",(0,s.jsx)(e.strong,{children:"Backup/Backup & Restore"})," nas Configura\xe7\xf5es.\nSe a segunda tentativa falhar, um di\xe1logo de alerta de sistema \xe9 exibido e um erro \xe9 gerado. Voc\xea pode interceptar esse erro no m\xe9todo de banco de dados ",(0,s.jsx)(e.code,{children:"On Backup Shutdown"}),"."]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"p\xe1gina-de-backup",children:"P\xe1gina de Backup"}),"\n",(0,s.jsx)(e.p,{children:"Para facilitar o acompanhamento e a verifica\xe7\xe3o das c\xf3pias de seguran\xe7a ou backups do banco de dados, o m\xf3dulo de backup escreve um resumo em um arquivo especial de cada opera\xe7\xe3o, similar a um di\xe1rio de atividades. Da mesma forma que no manual de bordo, todas as opera\xe7\xf5es (backups, restaura\xe7\xf5es, integra\xe7\xf5es de hist\xf3rico) s\xe3o escritas nesse arquivo, n\xe3o importa se a opera\xe7\xe3o foi programada ou manual. A data e hora em que essas opera\xe7\xf5es acontecem tamb\xe9m \xe9 anotada no hist\xf3rico."}),"\n",(0,s.jsx)(e.p,{children:'O hist\xf3rico de c\xf3pia de seguran\xe7a \xe9 chamado "Backup Journal[001].txt" e fica na pasta "Logs" do banco de dados. O hist\xf3rico de c\xf3pias de seguran\xe7a pode ser aberto com o editor de texto.'}),"\n",(0,s.jsx)(e.h4,{id:"gerenciamento-do-tamanho-de-hist\xf3rico-de-c\xf3pias-de-seguran\xe7a",children:"Gerenciamento do tamanho de hist\xf3rico de c\xf3pias de seguran\xe7a."}),"\n",(0,s.jsx)(e.p,{children:"Em determinadas estrat\xe9gias de copia de seguran\xe7a (por exemplo, no caso de que se realizem copias de seguran\xe7a de numerosos arquivos anexos), o hist\xf3rico de c\xf3pias de seguran\xe7a pode alcan\xe7ar rapidamente um grande tamanho. Dois mecanismos podem ser usados para controlar este tamanho:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Backup autom\xe1tico"}),': Antes de cada backup, o aplicativo examina o tamanho do arquivo de di\xe1rio de backup atual. Se for superior a 10 MB, se arquiva o arquivo atual e \xe9 criado um arquivo com o n\xfamero [xxx] incrementado, por exemplo "Backup Journal[002].txt\u201d. Quando o arquivo n\xfamero 999 for alcan\xe7ado, a numera\xe7\xe3o volta para 1 e os arquivos existentes come\xe7am a ser substitu\xeddos.']}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Possibilidade de reduzir a quantidade de informa\xe7\xf5es registradas"}),": Para fazer isso, basta modificar o valor da chave ",(0,s.jsx)(e.code,{children:"VerboseMode"})," no arquivo ",(0,s.jsx)(e.em,{children:"Backup.4DSettings"})," do projeto. Como padr\xe3o, essa chave \xe9 definida como True. Se mudar o valor desta chave a False, s\xf3 se armazenar\xe1 no di\xe1rio de copias de seguran\xe7a a informa\xe7\xe3o principal: data e hora de inicio da opera\xe7\xe3o  e os erros encontrados. As chaves XML relativas \xe0 configura\xe7\xe3o de backup s\xe3o descritas no manual ",(0,s.jsx)(e.em,{children:"Backup das chaves XML 4D"}),"."]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"backuphistoryjson",children:"backupHistory.json"}),"\n",(0,s.jsxs)(e.p,{children:["Todas as informa\xe7\xf5es sobre as \xfaltimas opera\xe7\xf5es de backup e restaura\xe7\xe3o s\xe3o armazenadas no arquivo ",(0,s.jsx)(e.strong,{children:"backupHistory.json"}),' do aplicativo. Registra a rota de cada arquivo guardado (inclu\xeddos os anexos), assim como o n\xfamero, a data, a hora, a dura\xe7\xe3o e o estado de cada opera\xe7\xe3o. Para limitar o tamanho do arquivo, o n\xfamero de opera\xe7\xf5es registradas \xe9 o mesmo que o n\xfamero de backups dispon\xedveis ("Keep only the last X backup files") definido nas configura\xe7\xf5es de backup.']}),"\n",(0,s.jsxs)(e.p,{children:["O arquivo ",(0,s.jsx)(e.strong,{children:"backupHistory.json"})," foi criado na pasta de destino atual. Pode obter a rota para esse arquivo usando a declara\xe7\xe3o abaixo:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-4d",children:"$backupHistory:=Get 4D file(arquivo hist\xf3rico Backup)\n"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"AVISO"}),(0,s.jsx)(e.br,{}),"\nApagar ou mover o arquivo ",(0,s.jsx)(e.strong,{children:"backupHistory.json"})," faz com que o pr\xf3ximo n\xfamero de backup seja resetado."]}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["O arquivo ",(0,s.jsx)(e.strong,{children:"backupHistory.json"})," \xe9 formatado para ser usado pela aplica\xe7\xe3o 4D. Se estiver procurando por um relat\xf3rio que possa ser lido por olhos humanos, o di\xe1rio de Backup journal \xe9 mais preciso."]}),"\n"]})]})}function p(a={}){const{wrapper:e}={...(0,n.R)(),...a.components};return e?(0,s.jsx)(e,{...a,children:(0,s.jsx)(t,{...a})}):t(a)}},795938:(a,e,o)=>{o.d(e,{A:()=>s});const s="data:image/png;base64,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"},195834:(a,e,o)=>{o.d(e,{A:()=>s});const s="data:image/png;base64,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"},28453:(a,e,o)=>{o.d(e,{R:()=>r,x:()=>i});var s=o(296540);const n={},d=s.createContext(n);function r(a){const e=s.useContext(d);return s.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function i(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(n):a.components||n:r(a.components),s.createElement(d.Provider,{value:e},a.children)}}}]);