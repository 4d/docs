"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31909],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>m});var o=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),c=function(e){var a=o.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=c(e.components);return o.createElement(u.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},l=o.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=c(t),m=r,k=l["".concat(u,".").concat(m)]||l[m]||p[m]||n;return t?o.createElement(k,s(s({ref:a},d),{},{components:t})):o.createElement(k,s({ref:a},d))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,s=new Array(n);s[0]=l;var i={};for(var u in a)hasOwnProperty.call(a,u)&&(i[u]=a[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<n;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}l.displayName="MDXCreateElement"},73830:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>u,toc:()=>d});t(67294);var o=t(3905);function r(){return r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r.apply(this,arguments)}function n(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const s={id:"backup",slug:"backup",title:"P\xe1gina de Backup"},i=void 0,u={unversionedId:"Backup/backup",id:"version-18/Backup/backup",title:"P\xe1gina de Backup",description:"Come\xe7ando um backup",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/Backup/backup.md",sourceDirName:"Backup",slug:"/Backup/backup",permalink:"/docs/pt/18/Backup/backup",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Backup%2Fbackup.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"backup",slug:"backup",title:"P\xe1gina de Backup"},sidebar:"docs",previous:{title:"Vis\xe3o Geral",permalink:"/docs/pt/18/Backup/overview"},next:{title:"Backups peri\xf3dicos",permalink:"/docs/pt/18/Backup/settings"}},c={},d=[{value:"Come\xe7ando um backup",id:"come\xe7ando-um-backup",level:2},{value:"You can use the Backup page to view some backup parameters of the database and to launch a manual backup:",id:"you-can-use-the-backup-page-to-view-some-backup-parameters-of-the-database-and-to-launch-a-manual-backup",level:3},{value:"Backup autom\xe1tico peri\xf3dico",id:"backup-autom\xe1tico-peri\xf3dico",level:3},{value:"Comando BACKUP",id:"comando-backup",level:3},{value:"Gerenciar o processo de  backup",id:"gerenciar-o-processo-de--backup",level:2},{value:"Acesso \xe0 base de dados durante a c\xf3pia de seguran\xe7a",id:"acesso-\xe0-base-de-dados-durante-a-c\xf3pia-de-seguran\xe7a",level:3},{value:"Gest\xe3o dos problemas das c\xf3pias de seguran\xe7a",id:"gest\xe3o-dos-problemas-das-c\xf3pias-de-seguran\xe7a",level:3},{value:"P\xe1gina de Backup",id:"p\xe1gina-de-backup",level:2},{value:"Gerenciamento do tamanho de hist\xf3rico de c\xf3pias de seguran\xe7a.",id:"gerenciamento-do-tamanho-de-hist\xf3rico-de-c\xf3pias-de-seguran\xe7a",level:4},{value:"backupHistory.json",id:"backuphistoryjson",level:2}],p={toc:d};function l(e){var{components:a}=e,s=n(e,["components"]);return(0,o.kt)("wrapper",r({},p,s,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",r({},{id:"come\xe7ando-um-backup"}),"Come\xe7ando um backup"),(0,o.kt)("p",null,"Uma c\xf3pia de seguran\xe7a pode ser iniciada de tr\xeas maneiras:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Last Backup Information"),": provides the date and time of the last backup (automatic or manual) carried out on the application."),(0,o.kt)("li",{parentName:"ul"},"Automatically, using the scheduler that can be set in the Database Settings,"),(0,o.kt)("li",{parentName:"ul"},"Por programa\xe7\xe3o, utilizando o comando ",(0,o.kt)("inlineCode",{parentName:"li"},"BACKUP"),".")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"4D Server: \xe9 poss\xedvel iniciar uma c\xf3pia de seguran\xe7a manualmente desde uma m\xe1quina remota mediante um m\xe9todo que chama ao comando ",(0,o.kt)("inlineCode",{parentName:"p"},"BACKUP"),". O comando ser\xe1 executado, em todos os casos, no servidor.")),(0,o.kt)("h3",r({},{id:"you-can-use-the-backup-page-to-view-some-backup-parameters-of-the-database-and-to-launch-a-manual-backup"}),"You can use the Backup page to view some backup parameters of the database and to launch a manual backup:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Seleccione o comando ",(0,o.kt)("strong",{parentName:"li"},"Backup...")," no menu 4D ",(0,o.kt)("strong",{parentName:"li"},"File")," . The backup window appears: ",(0,o.kt)("img",{src:t(74786).Z,width:"564",height:"192"}),' You can see the location of the backup folder using the pop-up menu next to the "Backup destination" area. Tamb\xe9m se registra no banco de dados ',(0,o.kt)("strong",{parentName:"li"},"Backup journal.txt"),".")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tamb\xe9m pode abrir o ",(0,o.kt)("a",r({parentName:"li"},{href:"/docs/pt/18/MSC/overview"}),"Centro de manuten\xe7\xe3o e seguran\xe7a")," de 4D e mostrar a ",(0,o.kt)("a",r({parentName:"li"},{href:"/docs/pt/18/MSC/backup"}),"p\xe1gina de c\xf3pias de seguran\xe7a"),".")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Database properties...")," button causes the Backup/Configuration page of the Database Settings to be displayed."),(0,o.kt)("ol",r({},{start:2}),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("strong",{parentName:"li"},"Backup")," button is used to launch a manual backup.")),(0,o.kt)("h3",r({},{id:"backup-autom\xe1tico-peri\xf3dico"}),"Backup autom\xe1tico peri\xf3dico"),(0,o.kt)("p",null,"As c\xf3pias de seguran\xe7a programadas s\xe3o iniciadas automaticamente. They are configured in the ",(0,o.kt)("strong",{parentName:"p"},"Backup/Scheduler")," page of the ",(0,o.kt)("strong",{parentName:"p"},"Database Settings"),"."),(0,o.kt)("p",null,"As c\xf3pias de seguran\xe7a s\xe3o feitas automaticamente na hora definida nessa p\xe1gina sem nenhum tipo de interven\xe7\xe3o do usu\xe1rio. Para saber mais sobre o uso desta caixa de di\xe1logo, consulte ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/Backup/settings#scheduler"}),"Definir as c\xf3pias de seguran\xe7a peri\xf3dicas"),"."),(0,o.kt)("h3",r({},{id:"comando-backup"}),"Comando BACKUP"),(0,o.kt)("p",null,"When the ",(0,o.kt)("inlineCode",{parentName:"p"},"BACKUP")," 4D language command is executed from any method, the backup starts using the current parameters as defined in the Database settings. Pode utilizar os m\xe9todos ",(0,o.kt)("inlineCode",{parentName:"p"},"On Backup Startup")," e ",(0,o.kt)("inlineCode",{parentName:"p"},"On Backup Shutdown")," para controlar o processo de c\xf3pia de seguran\xe7a (consulte o manual ",(0,o.kt)("em",{parentName:"p"},"Linguagem, de 4D"),")."),(0,o.kt)("h2",r({},{id:"gerenciar-o-processo-de--backup"}),"Gerenciar o processo de  backup"),(0,o.kt)("p",null,"Quando iniciar o backup, 4D exibe uma caixa de di\xe1logo com um term\xf4metro indicando o progresso da c\xf3pia de seguran\xe7a:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(87802).Z,width:"408",height:"168"})),(0,o.kt)("p",null,"Esse term\xf4metro tamb\xe9m \xe9 mostrado na p\xe1gina ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/MSC/backup"}),"Backup de CSM")," se utilizou esta caixa de di\xe1logo."),(0,o.kt)("p",null,"This page consists of the following three areas:"),(0,o.kt)("p",null,"O estado da \xfaltima c\xf3pia de seguran\xe7a (correta ou com erro) \xe9 armazenada na \xe1rea de informa\xe7\xe3o da ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/MSC/backup"}),"p\xe1gina de c\xf3pias de seguran\xe7a em CSM")," ou na ",(0,o.kt)("strong",{parentName:"p"},"p\xe1gina de manuten\xe7\xe3o")," de 4D Server. Tamb\xe9m se registra no banco de dados ",(0,o.kt)("strong",{parentName:"p"},"Backup journal.txt"),"."),(0,o.kt)("h3",r({},{id:"acesso-\xe0-base-de-dados-durante-a-c\xf3pia-de-seguran\xe7a"}),"Acesso \xe0 base de dados durante a c\xf3pia de seguran\xe7a"),(0,o.kt)("p",null,"During a backup, access to the database is restricted by 4D according to the context. 4D bloqueia os processos relacionados com os tipos de arquivos inclu\xeddos na c\xf3pia de seguran\xe7a: se s\xf3 fizer uma c\xf3pia de seguran\xe7a dos arquivos do projeto, n\xe3o se poder\xe1 acessar \xe0 estrutura mas sim aos dados."),(0,o.kt)("p",null,"Pelo contr\xe1rio, se s\xf3 fizer uma c\xf3pia de seguran\xe7a do arquivo de dados, o acesso \xe0 estrutura continua sendo permitido. In this case, the database access possibilities are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"With the 4D single-user version, the database is locked for both read and write; all processes are frozen. Nenhuma a\xe7\xe3o \xe9 realizada."),(0,o.kt)("li",{parentName:"ul"},"With 4D Server, the database is only write locked; client machines can view data. Se uma m\xe1quina cliente enviar uma peti\xe7\xe3o de adi\xe7\xe3o, elimina\xe7\xe3o ou mudan\xe7a ao servidor, uma janela aparece pedindo ao usu\xe1rio que espere at\xe9 o final da c\xf3pia de seguran\xe7a. Once the database is saved, the window disappears and the action is performed. Quando o banco de dados for salvo, a janela desaparece a a\xe7\xe3o \xe9 ralizada Quando o banco de dados for salvo, a janela desaparece a a\xe7\xe3o \xe9 ralizada Para cancelar a peti\xe7\xe3o em processo e n\xe3o esperar a que finalize a c\xf3pia de seguran\xe7a, basta dar um clique no bot\xe3o ",(0,o.kt)("strong",{parentName:"li"},"Cancelar a opera\xe7\xe3o"),". Entretanto, se a a\xe7\xe3o que espera ser executada vem de um m\xe9todo lan\xe7ado antes da c\xf3pia de seguran\xe7a, n\xe3o deve cancelar a a\xe7\xe3o porque s\xf3 s\xe3o canceladas as opera\xe7\xf5es restantes. Also, a partially executed method can cause logical inconsistencies in the database.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Quando a a\xe7\xe3o que espera ser executada vir de um m\xe9todo e o usu\xe1rio clicar no bot\xe3o ",(0,o.kt)("strong",{parentName:"p"},"Cancelar opera\xe7\xe3o"),", 4D Server devolve o erro -9976 (Este comando n\xe3o pode ser executardo porque a copia de seguran\xe7a est\xe1 em progresso).")),(0,o.kt)("h3",r({},{id:"gest\xe3o-dos-problemas-das-c\xf3pias-de-seguran\xe7a"}),"Gest\xe3o dos problemas das c\xf3pias de seguran\xe7a"),(0,o.kt)("p",null,"Pode acontecer que uma c\xf3pia de seguran\xe7a n\xe3o seja executada corretamente. Pode haver v\xe1rias causas de falha na c\xf3pia de seguran\xe7a: interrup\xe7\xe3o do usu\xe1rio, arquivo adjunto n\xe3o encontrado, problemas no disco de destino, transa\xe7\xe3o incompleta, etc. 4D processa a incid\xeancia segundo a causa."),(0,o.kt)("p",null,"In all cases, keep in mind that the status of the last backup (successful or failed) is stored in the Last Backup Information area of the ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/pt/18/MSC/backup"}),"Backup page in the MSC")," or in the ",(0,o.kt)("strong",{parentName:"p"},"Maintenance page")," of 4D Server, as well as in the database ",(0,o.kt)("strong",{parentName:"p"},"Backup journal.txt"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Interrup\xe7\xe3o de Usu\xe1rio"),": The ",(0,o.kt)("strong",{parentName:"li"},"Bot\xe3o Parar")," na caixa de di\xe1logo de progresso permite aos usu\xe1rios interromper o processo de c\xf3pia de seguran\xe7a a qualquer momento. Nesse caso, a c\xf3pia de elementos para e \xe9 gerado o erro 1406. Pode interceptar esse erro no m\xe9todo database ",(0,o.kt)("inlineCode",{parentName:"li"},"On Backup Shutdown"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Attached file not found"),": When an attached file cannot be found, 4D performs a partial backup (backup of database files and accessible attached files) and returns an error."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Backup impossible")," (disk is full or write-protected, missing disk, disk failure, incomplete transaction, database not launched at time of scheduled automatic backup, etc.): If this is a first-time error, 4D will then make a second attempt to perform the backup. The wait between the two attempts is defined on the ",(0,o.kt)("strong",{parentName:"li"},"Backup/Backup & Restore")," page of the Database Settings. Se a segunda tentativa falhar, um di\xe1logo de alerta de sistema \xe9 exibido e um erro \xe9 gerado. Pode interceptar esse erro no m\xe9todo database ",(0,o.kt)("inlineCode",{parentName:"li"},"On Backup Shutdown"),".")),(0,o.kt)("h2",r({},{id:"p\xe1gina-de-backup"}),"P\xe1gina de Backup"),(0,o.kt)("p",null,"To make following up and verifying database backups easier, the backup module writes a summary of each operation performed in a special file, which is similar to an activity journal. Da mesma forma que no manual de bordo, todas as opera\xe7\xf5es (backups, restaura\xe7\xf5es, integra\xe7\xf5es de hist\xf3rico) s\xe3o escritas nesse arquivo, n\xe3o importa se a opera\xe7\xe3o foi programada ou manual. A data e hora em que essas opera\xe7\xf5es acontecem tamb\xe9m \xe9 anotada no hist\xf3rico."),(0,o.kt)("p",null,'The backup journal is named "Backup Journal',"[001]",'.txt" and is placed in the "Logs" folder of the database. O hist\xf3rico de c\xf3pias de seguran\xe7a pode ser aberto com o editor de texto.'),(0,o.kt)("h4",r({},{id:"gerenciamento-do-tamanho-de-hist\xf3rico-de-c\xf3pias-de-seguran\xe7a"}),"Gerenciamento do tamanho de hist\xf3rico de c\xf3pias de seguran\xe7a."),(0,o.kt)("p",null,"Em determinadas estrat\xe9gias de copia de seguran\xe7a (por exemplo, no caso de que se realizem copias de seguran\xe7a de numerosos arquivos anexos), o hist\xf3rico de c\xf3pias de seguran\xe7a pode alcan\xe7ar rapidamente um grande tamanho. Dois mecanismos podem ser usados para controlar este tamanho:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Copia de seguran\xe7a autom\xe1tica"),": antes de cada copia de seguran\xe7a, a aplica\xe7\xe3o examina o tamanho do arquivo historial de c\xf3pia de seguran\xe7a atual. Se for superior a 10 MB, se arquiva o arquivo atual e \xe9 criado um arquivo com o n\xfamero ","[xxx]",' incrementado, por exemplo "Backup Journal',"[002]",".txt\u201d. Quando o arquivo n\xfamero 999 for alcan\xe7ado, a numera\xe7\xe3o volta para 1 e os arquivos existentes come\xe7am a ser substitu\xeddos."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Possibility of reducing the amount of information recorded"),": To do this, simply modify the value of the ",(0,o.kt)("inlineCode",{parentName:"li"},"VerboseMode")," key in the ",(0,o.kt)("em",{parentName:"li"},"Backup.4DSettings")," file of the database. Como padr\xe3o, essa chave \xe9 definida como True. Se mudar o valor desta chave a False, s\xf3 se armazenar\xe1 no di\xe1rio de copias de seguran\xe7a a informa\xe7\xe3o principal: data e hora de inicio da opera\xe7\xe3o  e os erros encontrados. As chaves XML relativas a configura\xe7\xe3o da c\xf3pia de seguran\xe7a s\xe3o descritos no manual ",(0,o.kt)("em",{parentName:"li"},"Backup das chaves XML 4D"),".")),(0,o.kt)("h2",r({},{id:"backuphistoryjson"}),"backupHistory.json"),(0,o.kt)("p",null,"All information regarding the latest backup and restore operations are stored in the database's ",(0,o.kt)("strong",{parentName:"p"},"backupHistory.json"),' file. Registra a rota de cada arquivo guardado (inclu\xeddos os anexos), assim como o n\xfamero, a data, a hora, a dura\xe7\xe3o e o estado de cada opera\xe7\xe3o. Para limitar o tamanho do arquivo, o n\xfamero de opera\xe7\xf5es registradas \xe9 o mesmo que o n\xfamero de backups dispon\xedveis ("Keep only the last X backup files") definido nas configura\xe7\xf5es de backup.'),(0,o.kt)("p",null,"O arquivo ",(0,o.kt)("strong",{parentName:"p"},"backupHistory.json")," \xe9 criado na pasta de destino do backup atual. Pode obter a rota para esse arquivo usando a declara\xe7\xe3o abaixo:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"$backupHistory:=Get 4D file(arquivo hist\xf3rico Backup)\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"AVISO"),(0,o.kt)("br",{parentName:"p"}),"\n","Apagar ou mover o arquivo ",(0,o.kt)("strong",{parentName:"p"},"backupHistory.json")," faz com que o pr\xf3ximo n\xfamero de backup seja resetado.\nO arquivo ",(0,o.kt)("strong",{parentName:"p"},"backupHistory.json")," \xe9 formatado para ser usado pela aplica\xe7\xe3o 4D. Se estiver procurando por um relat\xf3rio que possa ser lido por olhos humanos, o di\xe1rio de Backup journal \xe9 mais preciso.")))}l.isMDXComponent=!0},74786:(e,a,t)=>{t.d(a,{Z:()=>o});const o="data:image/png;base64,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"},87802:(e,a,t)=>{t.d(a,{Z:()=>o});const o="data:image/png;base64,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"}}]);