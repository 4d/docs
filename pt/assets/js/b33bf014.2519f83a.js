"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74681"],{426652:function(e,a,o){o.r(a),o.d(a,{default:()=>l,frontMatter:()=>n,metadata:()=>s,assets:()=>t,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"Backup/settings","title":"Backups peri\xf3dicos","description":"As configura\xe7\xf5es de backup s\xe3o definidas atrav\xe9s de tr\xeas p\xe1ginas na caixa de di\xe1logo Configura\xe7\xf5es. Pode estabelecer:","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/Backup/settings.md","sourceDirName":"Backup","slug":"/Backup/settings","permalink":"/docs/pt/20-R7/Backup/settings","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Backup%2Fsettings.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"settings","title":"Backups peri\xf3dicos"},"sidebar":"docs","previous":{"title":"P\xe1gina de Backup","permalink":"/docs/pt/20-R7/Backup/backup"},"next":{"title":"Arquivo de Log (.journal)","permalink":"/docs/pt/20-R7/Backup/log"}}'),i=o("785893"),r=o("250065");let n={id:"settings",title:"Backups peri\xf3dicos"},d=void 0,t={},c=[{value:"Backups peri\xf3dicos",id:"backups-peri\xf3dicos",level:2},{value:"Configura\xe7\xe3o",id:"configura\xe7\xe3o",level:2},{value:"Conte\xfado",id:"conte\xfado",level:3},{value:"Pasta de destino de arquivo de c\xf3pia de seguran\xe7a",id:"pasta-de-destino-de-arquivo-de-c\xf3pia-de-seguran\xe7a",level:3},{value:"Gest\xe3o do arquivo de hist\xf3rico",id:"gest\xe3o-do-arquivo-de-hist\xf3rico",level:3},{value:"Backup e Restaura\xe7\xe3o",id:"backup-e-restaura\xe7\xe3o",level:2},{value:"Par\xe2metros gerais",id:"par\xe2metros-gerais",level:3},{value:"Arquivo",id:"arquivo",level:3},{value:"Restauro autom\xe1tico e integra\xe7\xe3o de registos",id:"restauro-autom\xe1tico-e-integra\xe7\xe3o-de-registos",level:3},{value:"Restaurar o \xfaltimo backup se o banco de dados estiver danificado",id:"restaurar-o-\xfaltimo-backup-se-o-banco-de-dados-estiver-danificado",level:4},{value:"Integrate the latest logs if the database is incomplete",id:"integrate-the-latest-logs-if-the-database-is-incomplete",level:4}];function u(e){let a={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.p,{children:["As configura\xe7\xf5es de backup s\xe3o definidas atrav\xe9s de tr\xeas p\xe1ginas na ",(0,i.jsx)(a.a,{href:"/docs/pt/20-R7/settings/overview",children:"caixa de di\xe1logo Configura\xe7\xf5es"}),". Pode estabelecer:"]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"a periodicidade das c\xf3pias de seguran\xe7a autom\xe1ticas"}),"\n",(0,i.jsx)(a.li,{children:"os arquivos a incluir em cada backup"}),"\n",(0,i.jsx)(a.li,{children:"as funcionalidades avan\xe7adas que permitem executar tarefas autom\xe1ticas"}),"\n"]}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsxs)(a.p,{children:["Settings defined in this dialog box are written in the ",(0,i.jsx)(a.em,{children:"Backup.4DSettings"})," file, stored in the ",(0,i.jsx)(a.a,{href:"/docs/pt/20-R7/Project/architecture#settings-user",children:"Settings folder"}),"."]}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"backups-peri\xf3dicos",children:"Backups peri\xf3dicos"}),"\n",(0,i.jsx)(a.p,{children:"Pode automatizar a c\xf3pia de seguran\xe7a dos bancos de dados abertos com 4D ou 4D Server (mesmo quando n\xe3o houver m\xe1quinas cliente conectadas). Isso implica definir uma frequ\xeancia de c\xf3pia de seguran\xe7a (horas, dias, semanas ou meses): para cada sess\xe3o, 4D automaticamente inicia uma c\xf3pia de seguran\xe7a usando as configura\xe7\xf5es atuais de backup."}),"\n",(0,i.jsxs)(a.p,{children:["Se esta aplica\xe7\xe3o n\xe3o foi lan\xe7ada no momento te\xf3rico do backup, na pr\xf3xima vez que o 4D for lan\xe7ado, considera o backup como tendo falhado e continua conforme definido nas Configura\xe7\xf5es (consulte ",(0,i.jsx)(a.a,{href:"/docs/pt/20-R7/Backup/backup#handling-backup-issues",children:"Manejo de problemas da c\xf3pia de seguran\xe7a"}),")."]}),"\n",(0,i.jsxs)(a.p,{children:["As configura\xe7\xf5es de backup do agendador s\xe3o definidas na p\xe1gina ",(0,i.jsx)(a.strong,{children:"Backup/Periodicidade"})," das Configura\xe7\xf5es da Estrutura:"]}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{src:o(575025).Z+"",width:"862",height:"293"})}),"\n",(0,i.jsxs)(a.p,{children:["As op\xe7\xf5es encontradas nessa aba permitem estabelecer e  configurar as c\xf3pias de seguran\xe7a autom\xe1ticas programadas do banco de dados. Pode escolher uma configura\xe7\xe3o r\xe1pida padr\xe3o ou pode personaliz\xe1-la completamente. V\xe1rias op\xe7\xf5es aparecem dependendo da escolha feita no menu ",(0,i.jsx)(a.strong,{children:"Backup autom\xe1tico"}),":"]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Nunca"}),": A fun\xe7\xe3o de c\xf3pia de seguran\xe7a agendada est\xe1 inativa."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Cada hora"}),": Programa um backup autom\xe1tico a cada hora, come\xe7ando com a pr\xf3xima hora."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Todos os dias"}),": Programa um backup autom\xe1tico todo dia. Pode ent\xe3o digitar a hora quando o backup deve come\xe7ar."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Toda semana"}),": Programa um backup autom\xe1tico toda semana. Duas \xe1reas de entrada adicionais lhe permitem indicar o dia e a hora em que deve come\xe7ar a c\xf3pia de seguran\xe7a."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Todos os meses"}),": Programa uma c\xf3pia de seguran\xe7a autom\xe1tica todos os meses. Duas \xe1reas de entrada adicionais lhe permitem indicar o dia do m\xeas e a hora em que deve come\xe7ar a c\xf3pia de seguran\xe7a."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Personalizado"}),': sirve para configurar las copias de seguridad autom\xe1ticas "a medida". Quando selecionar esta op\xe7\xe3o, v\xe1rias \xe1reas de entradas aparecem:\n',(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Cada X hora(s)"}),": Permite programar as c\xf3pias de seguran\xe7a com frequ\xeancia hor\xe1ria. Pode digitar um valor entre 1 e 24."]}),"\n"]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Todos os X dia(s) no x"}),": permite backups de programa\xe7\xe3o diariamente. Por exemplo, introduza 1 se quiser realizar uma c\xf3pia de seguran\xe7a di\xe1ria. Quando esta op\xe7\xe3o estiver marcada, deve digitar a hora quando o backup deve come\xe7ar."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"A cada X semana(s) no x"}),": permite backups de programa\xe7\xe3o semanais. Digite 1 se quiser realizar o backup 1 vez por semana. Quando essa op\xe7\xe3o estiver marcada, deve digitar o dia da semana e a hora em que quer come\xe7ar o backup. Pode selecionar v\xe1rios dias da semana se quiser. Por exemplo. pode usar essa op\xe7\xe3o para estabelecer dois backups por semana: um nas quartas feiras e outro nas sextas."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Cada X mes(es), X d\xeda a x"}),": Permite programar copias de seguridad de forma mensual. Digite 1 se quiser realizar uma c\xf3pia de seguran\xe7a mensal. Quando essa op\xe7\xe3o estiver marcada, tem que indicar o dia do m\xeas e a hora em que o backup deve come\xe7ar."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsx)(a.p,{children:"As mudan\xe7as de hora padr\xe3o para hora de ver\xe3o podem afetar temporariamente ao programador autom\xe1tico e ativar a pr\xf3xima c\xf3pia de seguran\xe7a com uma diferen\xe7a de uma hora. Isso acontece s\xf3 uma vez e os pr\xf3ximos backups rodam na hora prevista."}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"configura\xe7\xe3o",children:"Configura\xe7\xe3o"}),"\n",(0,i.jsx)(a.p,{children:"A p\xe1gina C\xf3pia de seguran\xe7a| Configura\xe7\xe3o das propriedades do banco de dados permite determinar os arquivos de c\xf3pia de seguran\xe7a e sua localiza\xe7\xe3o, assim como a do arquivo de hist\xf3rico. Esses par\xe2metros s\xe3o espec\xedficos para cada banco de dados abertos pela aplica\xe7\xe3o 4D."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{src:o(745795).Z+"",width:"862",height:"722"})}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"4D Server:"})," Estes par\xe2metros s\xf3 podem ser configurados desde a m\xe1quina 4D Server."]}),"\n"]}),"\n",(0,i.jsx)(a.h3,{id:"conte\xfado",children:"Conte\xfado"}),"\n",(0,i.jsx)(a.p,{children:"Essa \xe1rea lhe permite determinar quais os arquivos ou pastas que devem ser copiados durante o backup."}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Dados"}),": Arquivo de dados do aplicativo. Quando esta op\xe7\xe3o for marcada, o arquivo de hist\xf3rico do banco de dados, se existir, recebe um backup na mesma hora que os dados.\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"o arquivo de hist\xf3rico atual da aplica\xe7\xe3o (se houver),"}),"\n",(0,i.jsxs)(a.li,{children:["the full ",(0,i.jsx)(a.code,{children:"Settings"})," folder located ",(0,i.jsx)(a.a,{href:"/docs/pt/20-R7/Project/architecture#settings-user-data",children:"next to the data file"})," (if it exists), i.e. the ",(0,i.jsx)(a.em,{children:"user settings for data"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Estrutura"}),": Pastas e arquivos do projeto da aplica\xe7\xe3o. No caso de bancos de dados compilados, essa op\xe7\xe3o permite fazer o backup do arquivo .4dz. When this option is checked, the full ",(0,i.jsx)(a.code,{children:"Settings"})," folder located ",(0,i.jsx)(a.a,{href:"/docs/pt/20-R7/Project/architecture#settings-user",children:"at the same level as the Project folder"}),", i.e. the ",(0,i.jsx)(a.em,{children:"user settings"}),", is automatically backed up."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Arquivo de estrutura usu\xe1rio (s\xf3 para bancos bin\xe1rios)"}),": ",(0,i.jsx)(a.em,{children:"funcionalidade obsoleta"})]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Arquivos anexos"}),': Esta \xe1rea permite especificar um conjunto de arquivos e/ou pastas para serem copiados em backup ao mesmo tempo que o aplicativo. Esses arquivos podem ser de qualquer tipo (documentos ou modelos de plug-ins, etiquetas, relat\xf3rios, imagens, etc). Pode estabelecer arquivos ou pastas individuais cujos conte\xfados ser\xe3o respaldados completamente. Cada elemento anexado \xe9 listado com sua rota de acesso completa na \xe1rea "Anexos".\n',(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Eliminar"}),": retira o arquivo selecionado da lista de arquivos anexos."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Adicionar pasta..."}),": Mostra uma caixa de di\xe1logo que permite selecionar uma pasta para adicionar \xe0 c\xf3pia de seguran\xe7a. No caso de uma restaura\xe7\xe3o, a pasta vai recuperar sua estrutura interna. Pode selecionar toda pasta ou volume conectado \xe0 m\xe1quina, exceto a pasta que conter os arquivos do banco de dados."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Adicionar pasta..."}),": Mostra uma caixa de di\xe1logo que permite selecionar um arquivo para adicionar \xe0 c\xf3pia de seguran\xe7a."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(a.h3,{id:"pasta-de-destino-de-arquivo-de-c\xf3pia-de-seguran\xe7a",children:"Pasta de destino de arquivo de c\xf3pia de seguran\xe7a"}),"\n",(0,i.jsx)(a.p,{children:"Esta \xe1rea lhe permite visualizar e mudar o local na que se armazenar\xe3o os arquivos de c\xf3pia de seguran\xe7a, assim como os arquivos de c\xf3pia de seguran\xe7a do arquivo historial (se aplic\xe1vel)."}),"\n",(0,i.jsx)(a.p,{children:"Para ver o local dos arquivos, clique na \xe1rea para que apare\xe7a sua rota de acesso no menu emergente."}),"\n",(0,i.jsxs)(a.p,{children:["Para modificar o local onde esses arquivos s\xe3o armazenados, clique no bot\xe3o ",(0,i.jsx)(a.strong,{children:"..."}),'. Uma caixa de sele\xe7\xe3o aparece, que permite selecionar uma pasta ou disco onde os backups s\xe3o colocados. As \xe1reas "Espa\xe7o utilizado" e "Espa\xe7o livre" s\xe3o atualizadas automaticamente e indicam o espa\xe7o restante no disco da pasta selecionada.']}),"\n",(0,i.jsx)(a.h3,{id:"gest\xe3o-do-arquivo-de-hist\xf3rico",children:"Gest\xe3o do arquivo de hist\xf3rico"}),"\n",(0,i.jsxs)(a.p,{children:["A op\xe7\xe3o ",(0,i.jsx)(a.strong,{children:"Utilizar arquivo de hist\xf3rico"}),", quando estiver marcada, indica que a aplica\xe7\xe3o utiliza um arquivo de hist\xf3rico. O nome do caminho do arquivo de hist\xf3rico do arquivo de dados atual \xe9 especificado abaixo da op\xe7\xe3o. Quando essa op\xe7\xe3o for marcada, n\xe3o \xe9 poss\xedvel abrir o banco de dados sem um arquivo de hist\xf3rico. Para obter mais informa\xe7\xf5es sobre o arquivo de hist\xf3rico, consulte ",(0,i.jsx)(a.a,{href:"/docs/pt/20-R7/Backup/log",children:"log file"})]}),"\n",(0,i.jsxs)(a.p,{children:["Por padr\xe3o, qualquer projeto criado com o 4D utiliza um arquivo de log (op\xe7\xe3o ",(0,i.jsx)(a.strong,{children:"Use Log File"})," marcada na p\xe1gina ",(0,i.jsx)(a.strong,{children:"General Page"})," das ",(0,i.jsx)(a.strong,{children:"Preferences"}),"). El archivo de historial se llama ",(0,i.jsx)(a.em,{children:"data.journal"})," y se coloca en la carpeta Data."]}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsx)(a.p,{children:"Ativar um novo arquivo de hist\xf3rico exige que tenha sido feita anteriormente uma c\xf3pia de seguran\xe7a dos dados. Quando voc\xea marcar essa op\xe7\xe3o para o arquivo de dados usado no momento, uma mensagem de aviso informar\xe1 ser necess\xe1rio fazer um backup. A cria\xe7\xe3o dos arquivos de hist\xf3rico \xe9 adiada e ser\xe1 feita somente depois do pr\xf3ximo backup do banco de dados."}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"backup-e-restaura\xe7\xe3o",children:"Backup e Restaura\xe7\xe3o"}),"\n",(0,i.jsx)(a.p,{children:"Modificar as op\xe7\xf5es de c\xf3pia de seguran\xe7a e restaura\xe7\xe3o \xe9 opcional. Seus valores padr\xe3o correspondem ao uso padr\xe3o da fun\xe7\xe3o."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{src:o(143819).Z+"",width:"862",height:"644"})}),"\n",(0,i.jsx)(a.h3,{id:"par\xe2metros-gerais",children:"Par\xe2metros gerais"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Mantenha apenas os \xfaltimos arquivos de backup X"}),": Este par\xe2metro ativa e configura o mecanismo usado para excluir os arquivos de backup mais antigos. que evita o risco de saturar a unidade de disco. Esta funcionalidade opera da seguinte maneira: uma vez finalizado o backup atual, 4D elimina o arquivo mais antigo se for encontrado no mesmo local que o arquivo do qual se est\xe1 fazendo o backup e tiver o mesmo nome (pode solicitar que o arquivo mais antigo se elimine antes do backup para poupar espa\xe7o).\nSe, por exemplo, o n\xfamero de conjuntos se definir como 3, as tr\xeas primeiras c\xf3pias de seguran\xe7a criam os arquivos MyBase-0001, MyBase-0002 e MyBase-0003 respectivamente. Durante o quarto backup, o arquivo MyBase-0004 \xe9 criado e MyBase-0001 \xe9 apagado. Como padr\xe3o, o mecanismo de elimina\xe7\xe3o de conjuntos est\xe1 ativado e 4D salva 3 conjuntos de c\xf3pias de seguran\xe7a.\nPara desativar o mecanismo, simplesmente desmarque a op\xe7\xe3o."]}),"\n"]}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsx)(a.p,{children:"Esse par\xe2metro se refere tanto a aplica\xe7\xf5es quanto aos arquivos de registro."}),"\n"]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Fazer C\xf3pia de seguran\xe7a s\xf3 se o arquivo de dados tiver sido modificado"}),": Quando marcar esta op\xe7\xe3o, 4D inicia as c\xf3pias de seguran\xe7a programadas apenas se os dados tiverem sido adicionados, modificados ou exclu\xeddos desde a \xfaltima c\xf3pia de seguran\xe7a. Sen\xe3o, o backup programado \xe9 cancelado e abandonado at\xe9 o pr\xf3ximo backup programado. Nenhum erro \xe9 gerado, entretanto o di\xe1rio de c\xf3pias de seguran\xe7a assinala que a c\xf3pia de seguran\xe7a foi adiada. Otherwise, the scheduled backup is cancelled and put off until the next scheduled backup. Lembre que ao ativar esta op\xe7\xe3o n\xe3o se levam em considera\xe7\xe3o as modifica\xe7\xf5es realizadas nos arquivos de estrutura ou nos arquivos anexos."]}),"\n"]}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsx)(a.p,{children:"Esse par\xe2metro se refere tanto a aplica\xe7\xf5es quanto aos arquivos de registro."}),"\n"]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"Excluir arquivo de backup mais antigo antes de/ap\xf3s backup"}),': Esta op\xe7\xe3o s\xf3 \xe9 usada se a op\xe7\xe3o "Manter apenas os \xfaltimos X arquivos de backup" estiver marcada. Especifica se o 4D deve come\xe7ar apagando o arquivo mais antigo antes de iniciar o backup (op\xe7\xe3o ',(0,i.jsx)(a.strong,{children:"before"}),") ou se a exclus\xe3o deve ocorrer ap\xf3s a conclus\xe3o do backup (op\xe7\xe3o ",(0,i.jsx)(a.strong,{children:"after"}),"). Para que os mecanismos funcionem, o arquivo mais velho n\xe3o deve ser renomeado nem movido."]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"Se a c\xf3pia de seguran\xe7a falhar"}),": Esta op\xe7\xe3o permite definir o mecanismo usado para lidar com c\xf3pias de seguran\xe7a falhadas (c\xf3pia de seguran\xe7a imposs\xedvel). Quando uma c\xf3pia de seguran\xe7a n\xe3o puder ser realizada, 4D deixa que realize uma nova tentativa."]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Tente novamente na pr\xf3xima data e hora agendadas"}),": essa op\xe7\xe3o s\xf3 faz sentido quando trabalhar com backups autom\xe1ticos programados. Equivale a anular a c\xf3pia de seguran\xe7a que falhou. Um erro \xe9 gerado."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Tentar novamente ap\xf3s X segundo(s), minuto(s) ou hora(s)"}),": Quando esta op\xe7\xe3o \xe9 marcada, uma nova tentativa de backup \xe9 executada ap\xf3s o per\xedodo de espera. Este mecanismo permite antecipar certas circunstancias que possam bloquear a c\xf3pia de seguran\xe7a. Pode estabelecer um per\xedodo de espera em segundos, minutos ou horas utilizando o menu correspondente. Se a nova tentativa tamb\xe9m falhar, um erro \xe9 gerado e a falha \xe9 notada na \xe1rea de status do \xfaltimo backup e no arquivo de hist\xf3rico de backup."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Cancele a opera\xe7\xe3o ap\xf3s X tentativas"}),': Este par\xe2metro \xe9 usado para definir o n\xfamero m\xe1ximo de tentativas de backup falhadas. Se o backup n\xe3o tiver sido realizado com sucesso depois do n\xfamero m\xe1ximo de tentativas estabelecido tiver sido alcan\xe7ado, ele ser\xe1 cancelado e o erro 1401 \xe9 gerado ("N\xfamero m\xe1ximo de tentativas de backup foi alcan\xe7ado; backup autom\xe1tico foi desativado temporariamente"). Nesse caso, n\xe3o se far\xe1 mais backups autom\xe1ticos at\xe9 que a aplica\xe7\xe3o seja reiniciada ou um backup manual se realize com sucesso.\nEste par\xe2metro \xe9 \xfatil para evitar um caso em que um problema prolongado (que exija a interven\xe7\xe3o humana) que impedisse a realiza\xe7\xe3o de uma c\xf3pia de seguran\xe7a levasse a aplica\xe7\xe3o a tentar repetidamente a c\xf3pia de seguran\xe7a, comprometendo seu rendimento geral. Como padr\xe3o, esse par\xe2metro n\xe3o \xe9 marcado.']}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsx)(a.p,{children:"4D considera um backup como tendo falhado se o banco de dados n\xe3o tiver sido lan\xe7ado na hora que estava programada o backup autom\xe1tico."}),"\n"]}),"\n",(0,i.jsx)(a.h3,{id:"arquivo",children:"Arquivo"}),"\n",(0,i.jsx)(a.p,{children:"Essas op\xe7\xf5es se aplicam aos arquivos de c\xf3pia de seguran\xe7a principais e aos arquivos de c\xf3pia de seguran\xe7a do hist\xf3rico."}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"Tamanho do Segmento (Mb)"}),"\n4D permite que voc\xea segmente arquivos, ou seja, para cort\xe1-lo em tamanhos menores. Esse funcionamento permite, por exemplo, armazenar uma c\xf3pia de seguran\xe7a em v\xe1rios discos diferentes (DVD, dispositivos usb pendrive, etc). Durante a restaura\xe7\xe3o, 4D vai fusionar automaticamente os segmentos. ",(0,i.jsx)(a.strong,{"x-id":"1",children:"Segment Size (Mb)"})," 4D allows you to segment archives, i.e., to cut it up into smaller sizes. This behavior allows, for example, the storing of a backup on several different disks (DVDs, usb devices, etc.).\nO menu ",(0,i.jsx)(a.strong,{children:"Tamanho do Segmento"})," \xe9 uma caixa de combina\xe7\xe3o que permite que voc\xea defina o tamanho em MB para cada segmento do backup. Pode escolher um dos tamanhos pr\xe9-estabelecidos ou digitar um tamanho espec\xedfico entre 0 e 2048. Se voc\xea passar 0, nenhum segmento ocorre (isso \xe9 o equivalente a passar ",(0,i.jsx)(a.strong,{children:"Nenhum"}),")."]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"Taxa de Compress\xe3o"}),"\nPor padr\xe3o, o 4D comprime os backups para ajudar a economizar espa\xe7o em disco. Entretanto, a fase de compress\xe3o de arquivo pode retardar o processo de backup quando lidar com grandes volumes de dados. A op\xe7\xe3o ",(0,i.jsx)(a.strong,{children:"Taxa de Compress\xe3o"})," permite ajustar a compress\xe3o de arquivo:"]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Nenhum:"})," N\xe3o se aplica compress\xe3o de arquivos. O backup \xe9 mais r\xe1pido, mas os arquivos s\xe3o bem maiores."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"R\xe1pido"})," (padr\xe3o): Essa op\xe7\xe3o \xe9 um compromisso entre a velocidade de backup e tamanho de arquivo."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Compact"}),": A taxa m\xe1xima de compress\xe3o \xe9 aplicada aos arquivos. Os arquivos ocupam o m\xednimo espa\xe7o poss\xedvel no disco, mas o backup \xe9 mais lento."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"Taxa de Interl\xfa\xe7\xe3o e Taxa de Redund\xe2ncia"}),"\n4D gera arquivos usando algoritmos espec\xedficos que s\xe3o baseados nos mecanismos de otimiza\xe7\xe3o (intercri\xe7\xe3o) e seguran\xe7a (redund\xe2ncia). Pode estabelecer esses mecanismos de acordo com suas necessidades. Os menus para essas op\xe7\xf5es cont\xeam as taxas ",(0,i.jsx)(a.strong,{children:"Baixo"}),", ",(0,i.jsx)(a.strong,{children:"M\xe9dio"}),", ",(0,i.jsx)(a.strong,{children:"Alto"})," e ",(0,i.jsx)(a.strong,{children:"Nenhum"})," (padr\xe3o)."]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Taxa de Entrela\xe7amento"}),": O Interlacing consiste de armazenar dados em setores n\xe3o adjacentes para limitar riscos no caso de danos de setor. Quanto maior a taxa, maior a seguran\xe7a; entretanto, o processamento de dados usa mais mem\xf3ria."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Taxa de redund\xe2ncia"}),": Redund\xe2ncia permite a seguran\xe7a de dados presentes em um arquivo ao repetir a mesma informa\xe7\xe3o v\xe1rias vezes. Quanto maior a taxa de redund\xe2ncia, melhor a seguran\xe7a, mas o armazenamento \xe9 mais lento e o tamanho dos arquivos aumenta."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(a.h3,{id:"restauro-autom\xe1tico-e-integra\xe7\xe3o-de-registos",children:"Restauro autom\xe1tico e integra\xe7\xe3o de registos"}),"\n",(0,i.jsx)(a.h4,{id:"restaurar-o-\xfaltimo-backup-se-o-banco-de-dados-estiver-danificado",children:"Restaurar o \xfaltimo backup se o banco de dados estiver danificado"}),"\n",(0,i.jsx)(a.p,{children:"When this option is checked, the program automatically starts the restore of the data file of the last valid backup of the application, if an anomaly is detected (corrupted file, for example) during application launch. Nenhuma interven\xe7\xe3o do usu\xe1rio \xe9 necess\xe1ria, mas a opera\xe7\xe3o \xe9 gravada no di\xe1rio da c\xf3pia de seguran\xe7a."}),"\n",(0,i.jsx)(a.h4,{id:"integrate-the-latest-logs-if-the-database-is-incomplete",children:"Integrate the latest logs if the database is incomplete"}),"\n",(0,i.jsx)(a.p,{children:"When this option is checked, the program automatically integrates the current log file if it contains operations that are not present in the data file. Se existir uma sequ\xeancia v\xe1lida de ficheiros .journal no mesmo reposit\xf3rio, o programa integra previamente todos os ficheiros .journal necess\xe1rios, do mais antigo ao mais actual. Esta situa\xe7\xe3o surge, por exemplo, se ocorrer uma falha de energia quando existem opera\xe7\xf5es na cache de dados que ainda n\xe3o foram escritas no disco, ou depois de ter sido detectada uma anomalia ao abrir o ficheiro de dados e ter ocorrido um restauro."}),"\n",(0,i.jsx)(a.admonition,{type:"note",children:(0,i.jsx)(a.p,{children:"Esta funcionalidade implica que o programa analise todos os ficheiros de registo na pasta de ficheiros de registo actual no arranque. Por conseguinte, por raz\xf5es de desempenho, certifique-se de que n\xe3o s\xe3o armazenados arquivos de registo in\xfateis na pasta."})}),"\n",(0,i.jsx)(a.p,{children:"O usu\xe1rio n\xe3o v\xea uma caixa de di\xe1logo, a opera\xe7\xe3o \xe9 autom\xe1tica. O objetivo \xe9 fazer com que seja t\xe3o f\xe1cil quanto poss\xedvel. A opera\xe7\xe3o \xe9 registrada no di\xe1rio de c\xf3pias de backup."}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsx)(a.p,{children:"No caso de uma restaura\xe7\xe3o autom\xe1tica, somente os seguintes elementos s\xe3o restaurados:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"ficheiro .4DD"}),"\n",(0,i.jsx)(a.li,{children:"ficheiro .4DIndx"}),"\n",(0,i.jsx)(a.li,{children:".4DSyncData file"}),"\n",(0,i.jsx)(a.li,{children:"ficheiro .4DSyncHeader"}),"\n",(0,i.jsx)(a.li,{children:"Pasta External Data"}),"\n"]}),"\n",(0,i.jsxs)(a.p,{children:["Se quiser obter os arquivos anexados ou os arquivos do projeto, voc\xea deve realizar uma ",(0,i.jsx)(a.a,{href:"/docs/pt/20-R7/Backup/restore#manually-restoring-a-backup-standard-dialog",children:"restaura\xe7\xe3o manual"}),"."]}),"\n"]}),"\n",(0,i.jsx)(a.admonition,{type:"caution",children:(0,i.jsxs)(a.p,{children:["Se o ",(0,i.jsx)(a.a,{href:"/docs/pt/20-R7/MSC/encrypt",children:"arquivo de dados for criptografado"}),", certifique-se de que voc\xea ",(0,i.jsx)(a.a,{href:"../MSC/encrypt#saving-the-encryption-key",children:"salvou a chave de criptografia de dados"})," em um ",(0,i.jsx)(a.code,{children:". Arquivo DKeyChain"})," armazenado no primeiro n\xedvel da unidade, para que 4D possa acess\xe1-lo se o recurso de restaura\xe7\xe3o autom\xe1tica for ativado. Caso contr\xe1rio, ser\xe1 devolvido um erro durante a sequ\xeancia de restauro."]})})]})}function l(e={}){let{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},575025:function(e,a,o){o.d(a,{Z:function(){return s}});let s=o.p+"assets/images/backup02-e31f4a2c8017e49094f31304dbdec2a9.png"},745795:function(e,a,o){o.d(a,{Z:function(){return s}});let s=o.p+"assets/images/backup032-7ee9866f79fb676400133c5d3a13b660.png"},143819:function(e,a,o){o.d(a,{Z:function(){return s}});let s=o.p+"assets/images/backup04-5934a7d8b0c0514cdd2804ba485708a2.png"},250065:function(e,a,o){o.d(a,{Z:function(){return d},a:function(){return n}});var s=o(667294);let i={},r=s.createContext(i);function n(e){let a=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);