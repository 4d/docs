"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47028],{441300:(a,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>n,default:()=>l,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var o=s(474848),r=s(28453);const i={id:"settings",title:"Backups peri\xf3dicos"},n=void 0,d={id:"Backup/settings",title:"Backups peri\xf3dicos",description:"Backup settings are defined through three pages in the Settings dialog box. Pode estabelecer:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Backup/settings.md",sourceDirName:"Backup",slug:"/Backup/settings",permalink:"/docs/pt/19/Backup/settings",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Backup%2Fsettings.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"settings",title:"Backups peri\xf3dicos"},sidebar:"docs",previous:{title:"P\xe1gina de Backup",permalink:"/docs/pt/19/Backup/backup"},next:{title:"Arquivo de Log (.journal)",permalink:"/docs/pt/19/Backup/log"}},t={},c=[{value:"Backups peri\xf3dicos",id:"backups-peri\xf3dicos",level:2},{value:"Configura\xe7\xe3o",id:"configura\xe7\xe3o",level:2},{value:"Conte\xfado",id:"conte\xfado",level:3},{value:"Pasta de destino de arquivo de c\xf3pia de seguran\xe7a",id:"pasta-de-destino-de-arquivo-de-c\xf3pia-de-seguran\xe7a",level:3},{value:"Gest\xe3o do arquivo de hist\xf3rico",id:"gest\xe3o-do-arquivo-de-hist\xf3rico",level:3},{value:"C\xf3pia de seguran\xe7a e restaura\xe7\xe3o",id:"c\xf3pia-de-seguran\xe7a-e-restaura\xe7\xe3o",level:2},{value:"Par\xe2metros gerais",id:"par\xe2metros-gerais",level:3},{value:"Arquivo",id:"arquivo",level:3},{value:"Restaura\xe7\xe3o autom\xe1tica",id:"restaura\xe7\xe3o-autom\xe1tica",level:3}];function u(a){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...a.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"Backup settings are defined through three pages in the Settings dialog box. Pode estabelecer:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"a periodicidade das c\xf3pias de seguran\xe7a autom\xe1ticas"}),"\n",(0,o.jsx)(e.li,{children:"os arquivos a incluir em cada backup"}),"\n",(0,o.jsx)(e.li,{children:"as funcionalidades avan\xe7adas que permitem executar tarefas autom\xe1ticas"}),"\n"]}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["As propriedades definidas nesta caixa de di\xe1logo s\xe3o escritas no arquivo ",(0,o.jsx)(e.em,{children:"Backup.4DSettings"}),", guardado na pasta ",(0,o.jsx)(e.a,{href:"/docs/pt/19/Project/architecture#settings-folder",children:"Settings"}),"."]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"backups-peri\xf3dicos",children:"Backups peri\xf3dicos"}),"\n",(0,o.jsx)(e.p,{children:"Pode automatizar a c\xf3pia de seguran\xe7a dos bancos de dados abertos com 4D ou 4D Server (mesmo quando n\xe3o houver m\xe1quinas cliente conectadas). Isso implica definir uma frequ\xeancia de c\xf3pia de seguran\xe7a (horas, dias, semanas ou meses): para cada sess\xe3o, 4D automaticamente inicia uma c\xf3pia de seguran\xe7a usando as configura\xe7\xf5es atuais de backup."}),"\n",(0,o.jsxs)(e.p,{children:["Se essa aplica\xe7\xe3o n\xe3o for lan\xe7ada no momento te\xf3rico do backup, na pr\xf3xima vez que 4D for lan\xe7ado, considera o backup como tendo falhado e continua como estabelecido nas propriedades do banco de dados (ver ",(0,o.jsx)(e.a,{href:"/docs/pt/19/Backup/backup#handling-backup-issues",children:"Manejo de problemas da c\xf3pia de seguran\xe7a"}),")."]}),"\n",(0,o.jsxs)(e.p,{children:["Os par\xe2metros da c\xf3pia de seguran\xe7a programador s\xe3o definidos na p\xe1gina ",(0,o.jsx)(e.strong,{children:"Backup/Periodicidade"})," das Propriedades do banco de dados:"]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{src:s(281878).A+"",width:"862",height:"293"})}),"\n",(0,o.jsxs)(e.p,{children:["As op\xe7\xf5es encontradas nessa aba permitem estabelecer e  configurar as c\xf3pias de seguran\xe7a autom\xe1ticas programadas do banco de dados. Pode escolher uma configura\xe7\xe3o r\xe1pida padr\xe3o ou pode personaliz\xe1-la completamente. Aparecem v\xe1rias op\xe7\xf5es em fun\xe7\xe3o da escolha realizada no menu ",(0,o.jsx)(e.strong,{children:"C\xf3pia de seguran\xe7a autom\xe1tica"}),":"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Nunca"}),": A fun\xe7\xe3o de c\xf3pia de seguran\xe7a est\xe1 inativa."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Cada hora"}),": programa uma c\xf3pia de seguran\xe7a autom\xe1tica a cada hora, a partir da hora seguinte."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Cada dia"}),": programa uma c\xf3pia de seguran\xe7a autom\xe1tica cada dia. Pode ent\xe3o digitar a hora quando o backup deve come\xe7ar."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Todas as semanas"}),": programa uma c\xf3pia de seguran\xe7a autom\xe1tica a cada semana. Duas \xe1reas de entrada adicionais lhe permitem indicar o dia e a hora em que deve come\xe7ar a c\xf3pia de seguran\xe7a."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Todos os meses"}),": programa uma c\xf3pia de seguran\xe7a todos os meses. Duas \xe1reas de entrada adicionais lhe permitem indicar o dia do m\xeas e a hora em que deve come\xe7ar a c\xf3pia de seguran\xe7a."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Personalizado"}),': serve para configurar as c\xf3pias de seguran\xe7a autom\xe1ticas "sob medida". Quando selecionar esta op\xe7\xe3o, v\xe1rias \xe1reas de entradas aparecem:\n',(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Cada X hora(s)"}),": permite programar as c\xf3pias de seguran\xe7a com frequ\xeancia hor\xe1ria. Pode digitar um valor entre 1 e 24."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Cada X dia(s) \xe0s x"}),": permite programar as copias de seguran\xe7a com frequ\xeancia di\xe1ria. Por exemplo, introduza 1 se quiser realizar uma c\xf3pia de seguran\xe7a di\xe1ria. Quando esta op\xe7\xe3o estiver marcada, deve digitar a hora quando o backup deve come\xe7ar."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Cada X semana(s) \xe0s x"}),": permite programar as copias de seguran\xe7a semanalmente. Digite 1 se quiser realizar o backup 1 vez por semana. Quando essa op\xe7\xe3o estiver marcada, deve digitar o dia da semana e a hora em que quer come\xe7ar o backup. Pode selecionar v\xe1rios dias da semana se quiser. Por exemplo. pode usar essa op\xe7\xe3o para estabelecer dois backups por semana: um nas quartas feiras e outro nas sextas."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Cada X mes(es), X dia \xe0s x"}),": Permite programar c\xf3pias de seguran\xe7a mensalmente. Digite 1 se quiser realizar uma c\xf3pia de seguran\xe7a mensal. Quando essa op\xe7\xe3o estiver marcada, tem que indicar o dia do m\xeas e a hora em que o backup deve come\xe7ar."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsx)(e.p,{children:"As mudan\xe7as de hora padr\xe3o para hora de ver\xe3o podem afetar temporariamente ao programador autom\xe1tico e ativar a pr\xf3xima c\xf3pia de seguran\xe7a com uma diferen\xe7a de uma hora. Isso acontece s\xf3 uma vez e os pr\xf3ximos backups rodam na hora prevista."}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"configura\xe7\xe3o",children:"Configura\xe7\xe3o"}),"\n",(0,o.jsx)(e.p,{children:"A p\xe1gina C\xf3pia de seguran\xe7a| Configura\xe7\xe3o das propriedades do banco de dados permite determinar os arquivos de c\xf3pia de seguran\xe7a e sua localiza\xe7\xe3o, assim como a do arquivo de hist\xf3rico. Esses par\xe2metros s\xe3o espec\xedficos para cada banco de dados abertos pela aplica\xe7\xe3o 4D."}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{src:s(695167).A+"",width:"862",height:"659"})}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"4D Server:"})," estes par\xe2metros s\xf3 podem ser configurados desde a m\xe1quina 4D Server."]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"conte\xfado",children:"Conte\xfado"}),"\n",(0,o.jsx)(e.p,{children:"Essa \xe1rea lhe permite determinar quais os arquivos ou pastas que devem ser copiados durante o backup."}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Data"}),": arquivo de dados do Banco. Quando esta op\xe7\xe3o for marcada, o arquivo de hist\xf3rico do banco de dados, se existir, recebe um backup na mesma hora que os dados.\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"o arquivo de hist\xf3rico atual da aplica\xe7\xe3o (se houver),"}),"\n",(0,o.jsxs)(e.li,{children:["a pasta ",(0,o.jsx)(e.code,{children:"Settings"})," situada ",(0,o.jsx)(e.a,{href:"/docs/pt/19/Project/architecture#settings-folder",children:"ao lado do arquivo de dados"})," (se existir), ou seja ",(0,o.jsx)(e.em,{children:"os par\xe2metros usu\xe1rio para os dados"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Arquivo de estrutura"}),": pastas e arquivos do banco de dados. No caso de bancos de dados compilados, essa op\xe7\xe3o permite fazer o backup do arquivo .4dz. Quando esta op\xe7\xe3o estiver marcada, uma c\xf3pia de seguran\xe7a \xe9 feita automaticamente da pasta completa ",(0,o.jsx)(e.code,{children:"Settings"})," situada ",(0,o.jsx)(e.a,{href:"/docs/pt/19/Project/architecture#settings-folder-1",children:"no mesmo n\xedvel que a pasta Project"}),", ou seja, os ",(0,o.jsx)(e.em,{children:"par\xe2metros usu\xe1rio"}),"."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Arquivo de estrutura usu\xe1rio (s\xf3 para bancos bin\xe1rios)"}),": ",(0,o.jsx)(e.em,{children:"funcionalidade obsoleta"})]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Arquivos anexos"}),': esta \xe1rea permite especificar um conjunto de arquivos ou pastas que sofrer\xe3o o backup no mesmo momento que o banco de dados. Esses arquivos podem ser de qualquer tipo (documentos ou modelos de plug-ins, etiquetas, relat\xf3rios, imagens, etc). Pode estabelecer arquivos ou pastas individuais cujos conte\xfados ser\xe3o respaldados completamente. Cada elemento anexado \xe9 listado com sua rota de acesso completa na \xe1rea "Anexos".\n',(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Eliminar"}),": retira o arquivo selecionado da lista de arquivos anexos."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Adicionar pasta..."}),": mostra uma caixa de di\xe1logo que permite selecionar uma pasta para adicionar \xe0 c\xf3pia de seguran\xe7a. No caso de uma restaura\xe7\xe3o, a pasta vai recuperar sua estrutura interna. Pode selecionar toda pasta ou volume conectado \xe0 m\xe1quina, exceto a pasta que conter os arquivos do banco de dados."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Adicionar pasta..."}),": mostra uma caixa de di\xe1logo que permite selecionar um arquivo para adicionar \xe0 c\xf3pia de seguran\xe7a."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"pasta-de-destino-de-arquivo-de-c\xf3pia-de-seguran\xe7a",children:"Pasta de destino de arquivo de c\xf3pia de seguran\xe7a"}),"\n",(0,o.jsx)(e.p,{children:"Esta \xe1rea lhe permite visualizar e mudar o local na que se armazenar\xe3o os arquivos de c\xf3pia de seguran\xe7a, assim como os arquivos de c\xf3pia de seguran\xe7a do arquivo historial (se aplic\xe1vel)."}),"\n",(0,o.jsx)(e.p,{children:"Para ver o local dos arquivos, clique na \xe1rea para que apare\xe7a sua rota de acesso no menu emergente."}),"\n",(0,o.jsxs)(e.p,{children:["Para modificar o local onde se armazenam esses arquivos, clique no bot\xe3o ",(0,o.jsx)(e.strong,{children:"..."}),'. Uma caixa de sele\xe7\xe3o aparece, que permite selecionar uma pasta ou disco onde os backups s\xe3o colocados. As \xe1reas "Espa\xe7o utilizado" e "Espa\xe7o livre" s\xe3o atualizadas automaticamente e indicam o espa\xe7o restante no disco da pasta selecionada.']}),"\n",(0,o.jsx)(e.h3,{id:"gest\xe3o-do-arquivo-de-hist\xf3rico",children:"Gest\xe3o do arquivo de hist\xf3rico"}),"\n",(0,o.jsxs)(e.p,{children:["A op\xe7\xe3o ",(0,o.jsx)(e.strong,{children:"Utilizar o arquivo de hist\xf3rico"}),", quando estiver marcada, indica que o banco de dados utiliza um arquivo de hist\xf3rico. Sua rota de acesso \xe9 especificada debaixo da op\xe7\xe3o. Quando essa op\xe7\xe3o for marcada, n\xe3o \xe9 poss\xedvel abrir o banco de dados sem um arquivo de hist\xf3rico."]}),"\n",(0,o.jsxs)(e.p,{children:["Como padr\xe3o, todo banco de dados criado com 4D usando um arquivo de hist\xf3rico (op\xe7\xe3o marcada na p\xe1gina ",(0,o.jsx)(e.strong,{children:"Geral"})," das ",(0,o.jsx)(e.strong,{children:"Prefer\xeancias"}),"). O arquivo de hist\xf3rico \xe9 chamado ",(0,o.jsx)(e.em,{children:"data.journal"})," e est\xe1 na pasta Data."]}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsx)(e.p,{children:"Ativar um novo arquivo de hist\xf3rico exige que tenha sido feita anteriormente uma c\xf3pia de seguran\xe7a dos dados. Quando voc\xea marcar esta op\xe7\xe3o, uma mensagem de aviso informa que um backup \xe9 necess\xe1rio. A cria\xe7\xe3o dos arquivos de hist\xf3rico \xe9 adiada e ser\xe1 feita somente depois do pr\xf3ximo backup do banco de dados."}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"c\xf3pia-de-seguran\xe7a-e-restaura\xe7\xe3o",children:"C\xf3pia de seguran\xe7a e restaura\xe7\xe3o"}),"\n",(0,o.jsx)(e.p,{children:"Modificar as op\xe7\xf5es de c\xf3pia de seguran\xe7a e restaura\xe7\xe3o \xe9 opcional. Seus valores padr\xe3o correspondem ao uso padr\xe3o da fun\xe7\xe3o."}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{src:s(743840).A+"",width:"862",height:"644"})}),"\n",(0,o.jsx)(e.h3,{id:"par\xe2metros-gerais",children:"Par\xe2metros gerais"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Conservar unicamente os \xfaltimos X arquivos de c\xf3pia de seguran\xe7a"}),": este par\xe2metro ativa e configura o mecanismo utilizado para eliminar os arquivos de c\xf3pia de seguran\xe7a mais antigos, o que evita o risco de saturar a unidade de disco. Esta funcionalidade opera da seguinte maneira: uma vez finalizado o backup atual, 4D elimina o arquivo mais antigo se for encontrado no mesmo local que o arquivo do qual se est\xe1 fazendo o backup e tiver o mesmo nome (pode solicitar que o arquivo mais antigo se elimine antes do backup para poupar espa\xe7o). Se, por exemplo, o n\xfamero de conjuntos se definir como 3, as tr\xeas primeiras c\xf3pias de seguran\xe7a criam os arquivos MyBase-0001, MyBase-0002 e MyBase-0003 respectivamente. Durante o quarto backup, o arquivo MyBase-0004 \xe9 criado e MyBase-0001 \xe9 apagado. Como padr\xe3o, o mecanismo de elimina\xe7\xe3o de conjuntos est\xe1 ativado e 4D salva 3 conjuntos de c\xf3pias de seguran\xe7a. Para desativar o mecanismo, simplesmente desmarque a op\xe7\xe3o."]}),"\n"]}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsx)(e.p,{children:"Esse par\xe2metro se refere tanto a aplica\xe7\xf5es quanto aos arquivos de registro."}),"\n"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Fazer C\xf3pia de seguran\xe7a s\xf3 se o arquivo de dados tiver sido modificado"}),": quando marcar esta op\xe7\xe3o, 4D inicia as c\xf3pias de seguran\xe7a programadas s\xf3 dados tiverem sido adicionados, modificados ou eliminados desde a \xfaltima c\xf3pia de seguran\xe7a. Sen\xe3o, o backup programado \xe9 cancelado e abandonado at\xe9 o pr\xf3ximo backup programado. Nenhum erro \xe9 gerado, entretanto o di\xe1rio de c\xf3pias de seguran\xe7a assinala que a c\xf3pia de seguran\xe7a foi adiada. Otherwise, the scheduled backup is cancelled and put off until the next scheduled backup. Lembre que ao ativar esta op\xe7\xe3o n\xe3o se levam em considera\xe7\xe3o as modifica\xe7\xf5es realizadas nos arquivos de estrutura ou nos arquivos anexos."]}),"\n"]}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsx)(e.p,{children:"Esse par\xe2metro se refere tanto a aplica\xe7\xf5es quanto aos arquivos de registro."}),"\n"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"Eliminar o arquivo de c\xf3pia de seguran\xe7a mais antigo antes/depois da c\xf3pia de seguran\xe7a"}),': esta op\xe7\xe3o s\xf3 se utiliza se a op\xe7\xe3o "Conservar s\xf3 os \xfaltimos X arquivos de c\xf3pia de seguran\xe7a" estiver marcada. Especifica se 4D deve come\xe7ar apagando o \xfaltimo arquivo antes de come\xe7ar o backup (op\xe7\xe3o',(0,o.jsx)(e.strong,{children:"antes"}),") ou se deve apagar depois que o backup tiver sido conclu\xeddo (op\xe7\xe3o",(0,o.jsx)(e.strong,{children:"depois"}),"). Para que os mecanismos funcionem, o arquivo mais velho n\xe3o deve ser renomeado nem movido."]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"Se a c\xf3pia de seguran\xe7a falhar"}),": Esta op\xe7\xe3o permite estabelecer o mecnaismo usado para manejar falhas no backup (c\xf3pia de seguran\xe7a imposs\xedvel. Quando uma c\xf3pia de seguran\xe7a n\xe3o puder ser realizada, 4D deixa que realize uma nova tentativa."]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Tentar novamente na pr\xf3xima data e hora programada"}),": esta op\xe7\xe3o s\xf3 tem sentido quando trabalhar com c\xf3pias de seguran\xe7a autom\xe1ticas programadas. Equivale a anular a c\xf3pia de seguran\xe7a que falhou. Um erro \xe9 gerado."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Tentar novamente depois de X segundo(s), minuto(s) ou hora(s)"}),": Quando essa op\xe7\xe3o for marcada, um nova tentativa de backup \xe9 executada depois do per\xedodo de espera. Este mecanismo permite antecipar certas circunstancias que possam bloquear a c\xf3pia de seguran\xe7a. Pode estabelecer um per\xedodo de espera em segundos, minutos ou horas utilizando o menu correspondente. Se a nova tentativa tamb\xe9m falhar, um erro \xe9 gerado e a falha \xe9 notada na \xe1rea de status do \xfaltimo backup e no arquivo de hist\xf3rico de backup."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Cancelar a opera\xe7\xe3o depois de X intentos"}),': este par\xe2metro se utiliza para definir o n\xfamero m\xe1ximo de tentativas de c\xf3pia de seguran\xe7a que falharam. Se o backup n\xe3o tiver sido realizado com sucesso depois do n\xfamero m\xe1ximo de tentativas estabelecido tiver sido alcan\xe7ado, ele ser\xe1 cancelado e o erro 1401 \xe9 gerado ("N\xfamero m\xe1ximo de tentativas de backup foi alcan\xe7ado; backup autom\xe1tico foi desativado temporariamente"). Nesse caso, n\xe3o se far\xe1 mais backups autom\xe1ticos at\xe9 que a aplica\xe7\xe3o seja reiniciada ou um backup manual se realize com sucesso. Este par\xe2metro \xe9 \xfatil para evitar um caso em que um problema prolongado (que exija a interven\xe7\xe3o humana) que impedisse a realiza\xe7\xe3o de uma c\xf3pia de seguran\xe7a levasse a aplica\xe7\xe3o a tentar repetidamente a c\xf3pia de seguran\xe7a, comprometendo seu rendimento geral. Como padr\xe3o, esse par\xe2metro n\xe3o \xe9 marcado.']}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsx)(e.p,{children:"4D considera um backup como tendo falhado se o banco de dados n\xe3o tiver sido lan\xe7ado na hora que estava programada o backup autom\xe1tico."}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"arquivo",children:"Arquivo"}),"\n",(0,o.jsx)(e.p,{children:"Essas op\xe7\xf5es se aplicam aos arquivos de c\xf3pia de seguran\xe7a principais e aos arquivos de c\xf3pia de seguran\xe7a do hist\xf3rico."}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"Segment Size (Mb)"})," 4D allows you to segment archives, i.e., to cut it up into smaller sizes. Esse funcionamento permite, por exemplo, armazenar uma c\xf3pia de seguran\xe7a em v\xe1rios discos diferentes (DVD, dispositivos usb pendrive, etc). Durante a restaura\xe7\xe3o, 4D vai fusionar automaticamente os segmentos. ",(0,o.jsx)(e.strong,{children:"Segment Size (Mb)"})," 4D allows you to segment archives, i.e., to cut it up into smaller sizes. This behavior allows, for example, the storing of a backup on several different disks (DVDs, usb devices, etc.). O menu ",(0,o.jsx)(e.strong,{children:"Tamanho do segmento"})," \xe9 um combo box que permite estabelecer o tamanho em MB de cada segmento da c\xf3pia de seguran\xe7a. Pode escolher um dos tamanhos pr\xe9-estabelecidos ou digitar um tamanho espec\xedfico entre 0 e 2048. Se passar 0, n\xe3o se produz nenhuma segmenta\xe7\xe3o (isso equivale a passar ",(0,o.jsx)(e.strong,{children:"Nenhum"}),")."]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"Compression Rate"})," By default, 4D compresses backups to help save disk space. Entretanto, a fase de compress\xe3o de arquivo pode retardar o processo de backup quando lidar com grandes volumes de dados. A op\xe7\xe3o ",(0,o.jsx)(e.strong,{children:"Compression Rate"})," permite ajustar a compress\xe3o de arquivo:"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"Nenhum:"})," N\xe3o se aplica compress\xe3o de arquivos. O backup \xe9 mais r\xe1pido, mas os arquivos s\xe3o bem maiores."]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"R\xe1pido"})," (padr\xe3o): Essa op\xe7\xe3o \xe9 um compromisso entre a velocidade de backup e tamanho de arquivo."]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"Compactar"})," : a taxa m\xe1xima de compress\xe3o \xe9 aplicada aos arquivos. Os arquivos ocupam o m\xednimo espa\xe7o poss\xedvel no disco, mas o backup \xe9 mais lento."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"Interlacing Rate and Redundancy Rate"})," 4D generates archives using specific algorithms that are based on optimization (interlacing) and security (redundancy) mechanisms. Pode estabelecer esses mecanismos de acordo com suas necessidades. Os menus cont\xe9m para essas op\xe7\xf5es as taxas ",(0,o.jsx)(e.strong,{children:"Baixo"}),", ",(0,o.jsx)(e.strong,{children:"M\xe9dio"}),", ",(0,o.jsx)(e.strong,{children:"Alto"})," e ",(0,o.jsx)(e.strong,{children:"Nenhum"})," (padr\xe3o)."]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Taxa de Entrela\xe7amento"}),": O Interlacing consiste de armazenar dados em setores n\xe3o adjacentes para limitar riscos no caso de danos de setor. Quanto maior a taxa, maior a seguran\xe7a; entretanto, o processamento de dados usa mais mem\xf3ria."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Taxa de redund\xe2ncia"}),": Redund\xe2ncia permite a seguran\xe7a de dados  em arquivos repetindo a mesma informa\xe7\xe3o v\xe1rias vezes. Quanto maior a taxa de redund\xe2ncia, melhor a seguran\xe7a, mas o armazenamento \xe9 mais lento e o tamanho dos arquivos aumenta."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"restaura\xe7\xe3o-autom\xe1tica",children:"Restaura\xe7\xe3o autom\xe1tica"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"Restaura a \xfaltima c\xf3pia de seguran\xe7a se o banco de dados for danificado"}),": Quando essa op\xe7\xe3o for marcada, o programa inicia automaticamente a restaura\xe7\xe3o do arquivo de dados do \xfaltimo backup v\xe1lido do banco, se uma anomalia for detectada (arquivo corrupto por exemplo) durante a o lan\xe7amento do banco de dados. Nenhuma interven\xe7\xe3o do usu\xe1rio \xe9 necess\xe1ria, mas a opera\xe7\xe3o \xe9 gravada no di\xe1rio da c\xf3pia de seguran\xe7a."]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"Integrate last log file if database is incomplete"}),": When this option is checked, the program automatically integrates the log file when opening or restoring the application."]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"When opening an application, the current log file is automatically integrated if 4D detects that there are operations stored in the log file that are not present in the data. This situation arises, for example, if a power outage occurs when there are operations in the data cache that have not yet been written to the disk."}),"\n",(0,o.jsx)(e.li,{children:"When restoring an application, if the current log file or a log backup file having the same number as the backup file is stored in the same folder, 4D examines its contents. If it contains operations not found in the data file, the program automatically integrates it."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"O usu\xe1rio n\xe3o v\xea uma caixa de di\xe1logo, a opera\xe7\xe3o \xe9 autom\xe1tica. O objetivo \xe9 fazer com que seja t\xe3o f\xe1cil quanto poss\xedvel. A opera\xe7\xe3o \xe9 registrada no di\xe1rio de c\xf3pias de backup."}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsx)(e.p,{children:"In the case of an automatic restore, only the following elements are restored:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"ficheiro .4DD"}),"\n",(0,o.jsx)(e.li,{children:"ficheiro .4DIndx"}),"\n",(0,o.jsx)(e.li,{children:".4DSyncData file"}),"\n",(0,o.jsx)(e.li,{children:"ficheiro .4DSyncHeader"}),"\n",(0,o.jsx)(e.li,{children:"Pasta External Data"}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"Se quiser os arquivos anexados ou os arquivos de projeto, precisa fazer uma restaura\xe7\xe3o  manual"}),"\n"]}),"\n",(0,o.jsx)(e.admonition,{type:"caution",children:(0,o.jsxs)(e.p,{children:["Se o ",(0,o.jsx)(e.a,{href:"/docs/pt/19/MSC/encrypt",children:"ficheiro de dados \xe9 encriptado"}),", certifique-se de que ",(0,o.jsx)(e.a,{href:"../MSC/encrypt#saving-the-encryption-key",children:"guardou a chave de encripta\xe7\xe3o de dados"})," num ficheiro ",(0,o.jsx)(e.code,{children:".4DKeyChain"})," armazenado no primeiro n\xedvel da unidade, para que 4D possa aceder-lhe se a funcionalidade de restaura\xe7\xe3o autom\xe1tica ativada. Caso contr\xe1rio, ser\xe1 devolvido um erro durante a sequ\xeancia de restauro."]})})]})}function l(a={}){const{wrapper:e}={...(0,r.R)(),...a.components};return e?(0,o.jsx)(e,{...a,children:(0,o.jsx)(u,{...a})}):u(a)}},281878:(a,e,s)=>{s.d(e,{A:()=>o});const o=s.p+"assets/images/backup02-e31f4a2c8017e49094f31304dbdec2a9.png"},695167:(a,e,s)=>{s.d(e,{A:()=>o});const o=s.p+"assets/images/backup03-49b5b70c7c84c962daad433a29bbc583.png"},743840:(a,e,s)=>{s.d(e,{A:()=>o});const o=s.p+"assets/images/backup04-5934a7d8b0c0514cdd2804ba485708a2.png"},28453:(a,e,s)=>{s.d(e,{R:()=>n,x:()=>d});var o=s(296540);const r={},i=o.createContext(r);function n(a){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function d(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(r):a.components||r:n(a.components),o.createElement(i.Provider,{value:e},a.children)}}}]);