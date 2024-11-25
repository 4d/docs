"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50479"],{539976:function(e,s,d){d.r(s),d.d(s,{metadata:()=>i,contentTitle:()=>o,default:()=>A,assets:()=>t,toc:()=>c,frontMatter:()=>a});var i=JSON.parse('{"id":"Desktop/user-settings","title":"Propriedades usu\xe1rio","description":"4D oferece dois modos de opera\xe7\xe3o para as configura\xe7\xf5es dos projetos:","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/Desktop/user-settings.md","sourceDirName":"Desktop","slug":"/Desktop/user-settings","permalink":"/docs/pt/Desktop/user-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Desktop%2Fuser-settings.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"user-settings","title":"Propriedades usu\xe1rio"},"sidebar":"docs","previous":{"title":"Modo SDI em Windows","permalink":"/docs/pt/Menus/sdi"},"next":{"title":"Build Application","permalink":"/docs/pt/Desktop/building"}}'),r=d("785893"),n=d("250065");let a={id:"user-settings",title:"Propriedades usu\xe1rio"},o=void 0,t={},c=[{value:"Ativar as defini\xe7\xf5es do utilizador",id:"ativar-as-defini\xe7\xf5es-do-utilizador",level:2},{value:"Propriedades usu\xe1rio e defini\xe7\xf5es do usu\xe1rio para o ficheiro de dados",id:"propriedades-usu\xe1rio-e-defini\xe7\xf5es-do-usu\xe1rio-para-o-ficheiro-de-dados",level:2},{value:"<code>SET DATABASE PARAMETER</code> e configura\xe7\xf5es de usu\xe1rio",id:"set-database-parameter-e-configura\xe7\xf5es-de-usu\xe1rio",level:2},{value:"Arquivos settings.4DSettings",id:"arquivos-settings4dsettings",level:2},{value:"Propriedades usu\xe1rio",id:"propriedades-usu\xe1rio",level:3},{value:"Propriedades usu\xe1rio para arquivo de dados",id:"propriedades-usu\xe1rio-para-arquivo-de-dados",level:3},{value:"Prioridade dos par\xe2metros",id:"prioridade-dos-par\xe2metros",level:2}];function l(e){let s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"4D oferece dois modos de opera\xe7\xe3o para as configura\xe7\xf5es dos projetos:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Modo ",(0,r.jsx)(s.strong,{children:"Padr\xe3o"}),": todos os ",(0,r.jsx)(s.a,{href:"/docs/pt/settings/overview",children:"settings"})," s\xe3o armazenados no arquivo ",(0,r.jsxs)(s.a,{href:"/docs/pt/Project/architecture#sources",children:[(0,r.jsx)(s.em,{children:"settings.4DSettings"})," no n\xedvel do projeto"]})," e s\xe3o aplicados em todos os casos. Este \xe9 o modo predefinido, adequado para a fase de desenvolvimento (todas as aplica\xe7\xf5es)."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Modo ",(0,r.jsx)(s.strong,{children:"Configura\xe7\xf5es do Usu\xe1rio"}),": parte das configura\xe7\xf5es personalizadas s\xe3o armazenadas em um arquivo ",(0,r.jsx)(s.em,{children:"settings.4DSettings"})," [na pasta de configura\xe7\xf5es](../Project/architecture. d#settings-user) (para todos os arquivos de dado) ou ",(0,r.jsx)(s.a,{href:"/docs/pt/Project/architecture#settings-user-data",children:"na pasta de dados"})," (para este arquivo de dados) e s\xe3o usados em vez das configura\xe7\xf5es de estrutura. Este modo \xe9 adequado para a fase de implanta\xe7\xe3o de aplica\xe7\xf5es de ambiente de trabalho. Voc\xea ativa este modo usando uma op\xe7\xe3o localizada na ",(0,r.jsx)(s.a,{href:"/docs/pt/settings/security",children:"P\xe1gina de seguran\xe7a"})," das Configura\xe7\xf5es."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Ao definir as defini\xe7\xf5es do utilizador, pode manter as defini\xe7\xf5es personalizadas entre actualiza\xe7\xf5es das suas aplica\xe7\xf5es 4D, ou gerir diferentes defini\xe7\xf5es para a mesma aplica\xe7\xe3o 4D implementada em v\xe1rios sites diferentes. Permite igualmente utilizar a programa\xe7\xe3o para gerir os arquivos de configura\xe7\xe3o atrav\xe9s de XML."}),"\n",(0,r.jsx)(s.p,{children:"4D pode gerar e usar dois tipos de propriedades usu\xe1rio:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Defini\xe7\xf5es do usu\xe1rio"}),": S\xe3o utilizadas em vez das defini\xe7\xf5es de estrutura para qualquer arquivo de dados aberto com a aplica\xe7\xe3o."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Defini\xe7\xf5es do usu\xe1rio para o arquivo de dados"}),": Podem ser definidas especificamente para cada arquivo de dados utilizado com a sua aplica\xe7\xe3o, configurando, por exemplo, o ID da porta ou a cache do servidor."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Com esta op\xe7\xe3o, pode facilmente implementar e atualizar v\xe1rias c\xf3pias da mesma aplica\xe7\xe3o de ambiente de trabalho com v\xe1rios arquivos de dados, cada um contendo defini\xe7\xf5es diferentes."}),"\n",(0,r.jsx)(s.p,{children:"Considere, por exemplo, a seguinte configura\xe7\xe3o, em que uma aplica\xe7\xe3o \xe9 duplicada e cada c\xf3pia utiliza uma defini\xe7\xe3o de ID de porta diferente. Se esta defini\xe7\xe3o do usu\xe1rio estiver ligada ao arquivo de dados, ser\xe1 poss\xedvel atualizar a aplica\xe7\xe3o sem ter de alterar manualmente o ID do porto:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:d(354641).Z+"",width:"350",height:"228"})}),"\n",(0,r.jsx)(s.h2,{id:"ativar-as-defini\xe7\xf5es-do-utilizador",children:"Ativar as defini\xe7\xf5es do utilizador"}),"\n",(0,r.jsxs)(s.p,{children:["Para ativar as defini\xe7\xf5es do usu\xe1rio, voc\xea precisa verificar a op\xe7\xe3o ",(0,r.jsx)(s.strong,{children:"Configura\xe7\xf5es"})," > ",(0,r.jsx)(s.strong,{children:"Seguran\xe7a"})," > ",(0,r.jsx)(s.strong,{children:"Ativar Defini\xe7\xf5es do Usu\xe1rio"}),":"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:d(28709).Z+"",width:"822",height:"173"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"Defini\xe7\xf5es de estrutura"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"Propriedades usu\xe1rio"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"Propriedades usu\xe1rio para o arquivo de dados"})}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Voc\xea pode acessar essas caixas de di\xe1logo usando o menu ",(0,r.jsx)(s.strong,{children:"Design > Configura\xe7\xf5es..."})," ou o bot\xe3o ",(0,r.jsx)(s.strong,{children:"Configura\xe7\xf5es"})," na barra de ferramentas:"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:d(160609).Z+"",width:"233",height:"128"})}),"\n",(0,r.jsxs)(s.p,{children:["Voc\xea tamb\xe9m pode acessar essas caixas de di\xe1logo usando o comando ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page903.html",children:"OPEN SETTINGS WINDOW"})," com o seletor ",(0,r.jsx)(s.em,{children:"settingsType"})," apropriado."]}),"\n",(0,r.jsx)(s.p,{children:"A caixa de di\xe1logo Configura\xe7\xf5es da estrutura \xe9 id\xeantica \xe0s Configura\xe7\xf5es standard e d\xe1 acesso a todas as suas propriedades (que podem ser substitu\xeddas por configura\xe7\xf5es do utilizador)."}),"\n",(0,r.jsx)(s.h2,{id:"propriedades-usu\xe1rio-e-defini\xe7\xf5es-do-usu\xe1rio-para-o-ficheiro-de-dados",children:"Propriedades usu\xe1rio e defini\xe7\xf5es do usu\xe1rio para o ficheiro de dados"}),"\n",(0,r.jsxs)(s.p,{children:["As caixas de di\xe1logo ",(0,r.jsx)(s.strong,{children:"Configura\xe7\xf5es do Usu\xe1rio"})," e ",(0,r.jsx)(s.strong,{children:"Configura\xe7\xf5es do Usu\xe1rio para Arquivo de Dados"})," cont\xeam uma sele\xe7\xe3o de propriedades relevantes que podem ser definidas para todos os arquivos de dados ou para um \xfanico arquivo de dados:"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:d(436638).Z+"",width:"862",height:"722"})}),"\n",(0,r.jsx)(s.p,{children:"A tabela seguinte lista as p\xe1ginas das defini\xe7\xf5es encontradas nas caixas de di\xe1logo User Settings e User Settings for Data File e descreve as suas principais diferen\xe7as em rela\xe7\xe3o \xe0s defini\xe7\xf5es padr\xe3o:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"P\xe1gina de defini\xe7\xf5es de estrutura"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"P\xe1gina das defini\xe7\xf5es do usu\xe1rio"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"P\xe1gina de Propriedades do Usu\xe1rio para Arquivo de Dados"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/pt/settings/general",children:"P\xe1gina general"})}),(0,r.jsx)(s.td,{children:"N/a"}),(0,r.jsx)(s.td,{children:"N/a"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/pt/settings/interface",children:"P\xe1gina Interface"})}),(0,r.jsx)(s.td,{children:"Id\xeantico \xe0s propriedades padr\xe3o"}),(0,r.jsx)(s.td,{children:"Id\xeantico \xe0s propriedades padr\xe3o"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/pt/settings/compiler",children:"P\xe1gina Compilador"})}),(0,r.jsx)(s.td,{children:"N/a"}),(0,r.jsx)(s.td,{children:"N/a"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/pt/settings/database#data-storage",children:"P\xe1gina Banco de dados/Armazenamento de dados"})}),(0,r.jsx)(s.td,{children:"N/a"}),(0,r.jsx)(s.td,{children:"N/a"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/pt/settings/database#memory",children:"P\xe1gina Banco de dados/Mem\xf3ria"})}),(0,r.jsx)(s.td,{children:"Id\xeantico \xe0s propriedades padr\xe3o"}),(0,r.jsx)(s.td,{children:"Id\xeantico \xe0s propriedades padr\xe3o"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/pt/settings/backup#scheduler",children:"P\xe1gina Backup/Agendador"})}),(0,r.jsx)(s.td,{children:"N/a"}),(0,r.jsx)(s.td,{children:"Id\xeantico \xe0s propriedades padr\xe3o"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/pt/settings/backup#configuration",children:"P\xe1gina Backup/Configura\xe7\xe3o"})}),(0,r.jsx)(s.td,{children:"N/a"}),(0,r.jsx)(s.td,{children:"Id\xeantico \xe0s propriedades padr\xe3o"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/pt/settings/backup#backup-restore",children:"P\xe1gina de Backup/Backup e restaura\xe7\xe3o"})}),(0,r.jsx)(s.td,{children:"N/a"}),(0,r.jsx)(s.td,{children:"Id\xeantico \xe0s propriedades padr\xe3o"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/pt/settings/client-server#network-options",children:"P\xe1gina Cliente-Servidor/rede"})}),(0,r.jsx)(s.td,{children:"Id\xeantico \xe0s propriedades padr\xe3o"}),(0,r.jsx)(s.td,{children:"Id\xeantico \xe0s propriedades padr\xe3o"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/pt/settings/client-server#ip-configuration",children:"P\xe1gina Cliente-Servidor/Configura\xe7\xe3o IP"})}),(0,r.jsx)(s.td,{children:"Id\xeantico \xe0s propriedades padr\xe3o"}),(0,r.jsx)(s.td,{children:"Id\xeantico \xe0s propriedades padr\xe3o"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/pt/settings/web#configuration",children:"P\xe1gina Web/Configura\xe7\xe3o"})}),(0,r.jsx)(s.td,{children:"Id\xeantico \xe0s propriedades padr\xe3o"}),(0,r.jsx)(s.td,{children:"Id\xeantico \xe0s propriedades padr\xe3o"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/pt/settings/web#options",children:"P\xe1gina Web/Options (I)"})}),(0,r.jsx)(s.td,{children:"Id\xeantico \xe0s propriedades padr\xe3o"}),(0,r.jsx)(s.td,{children:"Id\xeantico \xe0s propriedades padr\xe3o"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/pt/settings/web#options-ii",children:"P\xe1gina Web/Op\xe7\xf5es (II)"})}),(0,r.jsx)(s.td,{children:"Id\xeantico \xe0s propriedades padr\xe3o"}),(0,r.jsx)(s.td,{children:"Id\xeantico \xe0s propriedades padr\xe3o"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/pt/settings/web#log",children:"P\xe1gina Web/Log (tipo)"})}),(0,r.jsx)(s.td,{children:"Id\xeantico \xe0s propriedades padr\xe3o"}),(0,r.jsx)(s.td,{children:"Id\xeantico \xe0s propriedades padr\xe3o"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/pt/settings/web#log",children:"P\xe1gina Web/Log (backup)"})}),(0,r.jsx)(s.td,{children:"Id\xeantico \xe0s propriedades padr\xe3o"}),(0,r.jsx)(s.td,{children:"Id\xeantico \xe0s propriedades padr\xe3o"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["P\xe1gina ",(0,r.jsx)(s.a,{href:"/docs/pt/settings/web#web-services",children:"Servi\xe7os Web"})]}),(0,r.jsx)(s.td,{children:"Op\xe7\xe3o de prefixa\xe7\xe3o do m\xe9todo n\xe3o dispon\xedvel"}),(0,r.jsx)(s.td,{children:"Op\xe7\xe3o de prefixa\xe7\xe3o do m\xe9todo n\xe3o dispon\xedvel"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/pt/settings/sql",children:"P\xe1gina SQL"})}),(0,r.jsx)(s.td,{children:"Id\xeantico \xe0s propriedades padr\xe3o"}),(0,r.jsx)(s.td,{children:"Id\xeantico \xe0s propriedades padr\xe3o"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/pt/settings/php",children:"P\xe1gina PHP"})}),(0,r.jsx)(s.td,{children:"Id\xeantico \xe0s propriedades padr\xe3o"}),(0,r.jsx)(s.td,{children:"Id\xeantico \xe0s propriedades padr\xe3o"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/pt/settings/security",children:"P\xe1gina Seguran\xe7a"})}),(0,r.jsx)(s.td,{children:"N/a"}),(0,r.jsx)(s.td,{children:"N/a"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/pt/settings/compatibility",children:"P\xe1gina Compatibilidade"})}),(0,r.jsx)(s.td,{children:"N/a"}),(0,r.jsx)(s.td,{children:"N/a"})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:["Quando voc\xea editar as configura\xe7\xf5es nesta caixa de di\xe1logo, elas s\xe3o automaticamente armazenadas nas ",(0,r.jsx)(s.em,{children:"configura\xe7\xf5es correspondentes. DConfigura\xe7\xf5es"})," arquivo (veja abaixo) ou o arquivo ",(0,r.jsx)(s.em,{children:"Backup.4DSettings"})," (confira as ",(0,r.jsx)(s.a,{href:"/docs/pt/Backup/settings",children:"configura\xe7\xf5es de backup"})," da p\xe1gina para obter mais informa\xe7\xf5es)."]}),"\n",(0,r.jsxs)(s.h2,{id:"set-database-parameter-e-configura\xe7\xf5es-de-usu\xe1rio",children:[(0,r.jsx)(s.code,{children:"SET DATABASE PARAMETER"})," e configura\xe7\xf5es de usu\xe1rio"]}),"\n",(0,r.jsxs)(s.p,{children:["Algumas das configura\xe7\xf5es do usu\xe1rio tamb\xe9m est\xe3o dispon\xedveis atrav\xe9s do comando ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page642.html",children:"SET DATABASE PARAMETER"}),". As defini\xe7\xf5es do utilizador s\xe3o par\xe2metros com a propriedade ",(0,r.jsx)(s.strong,{children:"Kept between two sessions"})," definida para ",(0,r.jsx)(s.strong,{children:"Yes"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Quando a fun\xe7\xe3o ",(0,r.jsx)(s.strong,{children:"Configura\xe7\xf5es do Usu\xe1rio"})," \xe9 ativada, as configura\xe7\xf5es do usu\xe1rio editadas pelo [SET DATABASE PARAMETER](",(0,r.jsx)(s.a,{href:"https://doc.4d",children:"https://doc.4d"}),". O comando om/4dv19R/help/command/en/page642.html) \xe9 salvo automaticamente nas configura\xe7\xf5es do usu\xe1rio do arquivo de dados."]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"'N\xfamero de seq\xfc\xeancia de tabela' \xe9 uma exce\xe7\xe3o; esse valor de configura\xe7\xe3o \xe9 sempre salvo no pr\xf3prio arquivo de dados."}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"arquivos-settings4dsettings",children:"Arquivos settings.4DSettings"}),"\n",(0,r.jsxs)(s.p,{children:["Ao ",(0,r.jsxs)(s.a,{href:"#enabling-user-settings",children:["verificar a op\xe7\xe3o ",(0,r.jsx)(s.strong,{children:"Ativar Configura\xe7\xf5es do Usu\xe1rio"})]}),", os arquivos de configura\xe7\xf5es de usu\xe1rio s\xe3o criados automaticamente. A sua localiza\xe7\xe3o depende do tipo de defini\xe7\xf5es do utilizador definidas."]}),"\n",(0,r.jsx)(s.h3,{id:"propriedades-usu\xe1rio",children:"Propriedades usu\xe1rio"}),"\n",(0,r.jsx)(s.p,{children:"O arquivo de defini\xe7\xf5es do utilizador padr\xe3o \xe9 criado automaticamente e colocado numa pasta de defini\xe7\xf5es na seguinte localiza\xe7\xe3o:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/pt/Project/architecture#settings-user",children:(0,r.jsx)(s.code,{children:"ProjectFolder/Settings/settings.4DSettings"})})}),"\n",(0,r.jsxs)(s.p,{children:["... onde ",(0,r.jsx)(s.em,{children:"ProjectFolder"})," \xe9 o nome da pasta que cont\xe9m o arquivo da estrutura do projeto."]}),"\n",(0,r.jsx)(s.p,{children:"Nas aplica\xe7\xf5es fusionadas, o arquivo de defini\xe7\xf5es do utilizador \xe9 colocado na seguinte localiza\xe7\xe3o:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Nas vers\xf5es de usu\xe1rio \xfanico: ProjectFolder/Database/Settings/settings.4DSettings"}),"\n",(0,r.jsx)(s.li,{children:"Em vers\xf5es cliente/servidor: ProjectFolder/Server Database/Settings/settings.4DSettings"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"propriedades-usu\xe1rio-para-arquivo-de-dados",children:"Propriedades usu\xe1rio para arquivo de dados"}),"\n",(0,r.jsx)(s.p,{children:"O arquivo de defini\xe7\xf5es do usu\xe1rio ligado ao arquivo de dados \xe9 automaticamente criado e colocado numa pasta de defini\xe7\xf5es na seguinte localiza\xe7\xe3o:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/pt/Project/architecture#settings-user-data",children:(0,r.jsx)(s.code,{children:"Data/Settings/settings.4DSettings"})})}),"\n",(0,r.jsxs)(s.p,{children:["... onde ",(0,r.jsx)(s.em,{children:"Dados"})," \xe9 o nome da pasta que cont\xe9m o arquivo de dados atual da aplica\xe7\xe3o."]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Quando o arquivo de dados estiver localizado ao mesmo n\xedvel que o arquivo da estrutura do projeto, os arquivos de defini\xe7\xf5es do utilizador baseados na estrutura e nos dados partilham a mesma localiza\xe7\xe3o e o mesmo arquivo. O comando de menu ",(0,r.jsx)(s.strong,{children:"Configura\xe7\xf5es do Usu\xe1rio para o Arquivo de Dados..."})," n\xe3o \xe9 proposto."]}),"\n"]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsx)(s.p,{children:"Os arquivos de defini\xe7\xf5es s\xe3o arquivos XML; podem ser lidos e modificados utilizando comandos XML 4D integrados ou utilizando um editor XML. Isto significa que pode gerir as defini\xe7\xf5es por programa\xe7\xe3o, particularmente no contexto de aplica\xe7\xf5es compiladas e fundidas com 4D Volume Desktop. Quando modificar este arquivo por programa\xe7\xe3o, as altera\xe7\xf5es s\xf3 s\xe3o consideradas na pr\xf3xima vez que a base de dados for aberta."})}),"\n",(0,r.jsx)(s.h2,{id:"prioridade-dos-par\xe2metros",children:"Prioridade dos par\xe2metros"}),"\n",(0,r.jsx)(s.p,{children:"As defini\xe7\xf5es podem ser guardadas em tr\xeas n\xedveis. Cada configura\xe7\xe3o definida num n\xedvel substitui a mesma configura\xe7\xe3o definida num n\xedvel anterior, caso exista:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"N\xedvel de prioridade"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Name"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Localiza\xe7\xe3o"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"Comments"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"3 (mais baixo)"}),(0,r.jsx)(s.td,{children:'Defini\xe7\xf5es de estrutura (ou Defini\xe7\xf5es quando a fun\xe7\xe3o "Defini\xe7\xf5es do utilizador" n\xe3o estiver ativada)'}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:(0,r.jsx)(s.strong,{children:"settings.4DSettings"})})," arquivo na pasta de Origem (bancos de dados do projeto) ou na pasta Settings como o mesmo n\xedvel do arquivo de estrutura (bancos de dados bin\xe1rios)"]}),(0,r.jsx)(s.td,{children:"Localiza\xe7\xe3o \xfanica quando as defini\xe7\xf5es do utilizador n\xe3o est\xe3o ativadas. Aplicado a todos os exemplares da aplica\xe7\xe3o."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"Propriedades usu\xe1rio (todos os ficheiros de dados)"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:(0,r.jsx)(s.strong,{children:"settings.4DSettings"})})," arquivo na pasta Settings no mesmo n\xedvel que a pasta do projeto"]}),(0,r.jsx)(s.td,{children:"Substitui as defini\xe7\xf5es da estrutura. Armazenado no pacote da aplica\xe7\xe3o."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1 (mais alto)"}),(0,r.jsx)(s.td,{children:"Propriedades usu\xe1rio (ficheiro de dados atual)"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.em,{children:(0,r.jsx)(s.strong,{children:"settings.4DSettings"})})," arquivo na pasta Settings ao mesmo n\xedvel que o arquivo de dados"]}),(0,r.jsx)(s.td,{children:"Substitui as propriedades de estrutura e as propriedades usu\xe1rio. Aplicado apenas quando o arquivo de dados linkado for utilizado com a aplica\xe7\xe3o."})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"Lembre que os arquivo de defini\xe7\xf5es do utilizador cont\xeam apenas um subconjunto de defini\xe7\xf5es relevantes, enquanto o arquivo de estrutura cont\xe9m todas as defini\xe7\xf5es personalizadas, incluindo as defini\xe7\xf5es principais."})]})}function A(e={}){let{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},436638:function(e,s,d){d.d(s,{Z:function(){return i}});let i=d.p+"assets/images/user-settings-2-d5bae457dfa8f5aba0868be2f2f312a4.png"},354641:function(e,s,d){d.d(s,{Z:function(){return i}});let i=d.p+"assets/images/user-settings-config-2056e51f0b96b9a9a0012d72010e05bb.png"},160609:function(e,s,d){d.d(s,{Z:function(){return i}});let i="data:image/png;base64,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"},28709:function(e,s,d){d.d(s,{Z:function(){return i}});let i="data:image/png;base64,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"},250065:function(e,s,d){d.d(s,{Z:function(){return o},a:function(){return a}});var i=d(667294);let r={},n=i.createContext(r);function a(e){let s=i.useContext(n);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);