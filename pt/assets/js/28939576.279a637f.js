"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31562"],{883957:function(e,o,n){n.r(o),n.d(o,{default:()=>m,frontMatter:()=>i,metadata:()=>a,assets:()=>t,toc:()=>c,contentTitle:()=>r});var a=JSON.parse('{"id":"Admin/cli","title":"Interface de linha de comando","description":"Voc\xea pode usar o Terminal do macOS ou o console do Windows para controlar seus aplicativos 4D (4D, 4D Server, aplicativo mesclado e tool4d) usando linhas de comando. Mais especificamente, essa funcionalidade permite que:","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/Admin/cli.md","sourceDirName":"Admin","slug":"/Admin/cli","permalink":"/docs/pt/20-R6/Admin/cli","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2Fcli.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"cli","title":"Interface de linha de comando"},"sidebar":"docs","previous":{"title":"Web Data Explorer","permalink":"/docs/pt/20-R6/Admin/dataExplorer"},"next":{"title":"TLS Protocol","permalink":"/docs/pt/20-R6/Admin/tls"}}'),d=n("785893"),s=n("250065");let i={id:"cli",title:"Interface de linha de comando"},r=void 0,t={},c=[{value:"Informa\xe7\xe3o b\xe1sica",id:"informa\xe7\xe3o-b\xe1sica",level:2},{value:"Lan\xe7ar uma aplica\xe7\xe3o 4D",id:"lan\xe7ar-uma-aplica\xe7\xe3o-4d",level:2},{value:"Exemplos",id:"exemplos",level:3},{value:"tool4d",id:"tool4d",level:2},{value:"Utilizar tool4d",id:"utilizar-tool4d",level:3},{value:"Funcionalidades 4D desativadas",id:"funcionalidades-4d-desativadas",level:3},{value:"4D Server em modo utilit\xe1rio",id:"4d-server-em-modo-utilit\xe1rio",level:2}];function l(e){let o={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(o.p,{children:["Voc\xea pode usar o Terminal do macOS ou o console do Windows para controlar seus aplicativos 4D (4D, 4D Server, aplicativo mesclado e ",(0,d.jsx)(o.a,{href:"#tool4d",children:"tool4d"}),") usando linhas de comando. Mais especificamente, essa funcionalidade permite que:"]}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"lance um banco de dados remotamente, que pode ser \xfatil especialmente para administrar servidores Web."}),"\n",(0,d.jsx)(o.li,{children:"roda automaticamente testes para suas aplica\xe7\xf5es."}),"\n"]}),"\n",(0,d.jsx)(o.h2,{id:"informa\xe7\xe3o-b\xe1sica",children:"Informa\xe7\xe3o b\xe1sica"}),"\n",(0,d.jsx)(o.p,{children:"Pode executar linhas de comando para aplica\xe7\xf5es 4D usando o terminal macOS ou o console Windows."}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsxs)(o.li,{children:["Em macOS, precisa usar o comando ",(0,d.jsx)(o.code,{children:"open"}),"."]}),"\n",(0,d.jsx)(o.li,{children:"Em Windows pode passar os argumentos diretamente."}),"\n"]}),"\n",(0,d.jsxs)(o.blockquote,{children:["\n",(0,d.jsxs)(o.p,{children:["Em macOS pode passar os argumentos diretamente indo \xe0 pasta onde est\xe1 a aplica\xe7\xe3o dentro do pacote (rota Contents/MacOS) que permite dirigir o stream stderr. Por exemplo, se o pacote 4D est\xe1 localizado na pasta ",(0,d.jsx)(o.code,{children:"MyFolder"}),", voc\xea deve escrever a linha de comando da seguinte forma: ",(0,d.jsx)(o.code,{children:"/MyFolder/4D.app/Contents/MacOS/4D"}),". Entretanto, recomendamos que voc\xea use o comando ",(0,d.jsx)(o.code,{children:"open"})," sempre que n\xe3o precisar acessar o fluxo stderr."]}),"\n"]}),"\n",(0,d.jsx)(o.h2,{id:"lan\xe7ar-uma-aplica\xe7\xe3o-4d",children:"Lan\xe7ar uma aplica\xe7\xe3o 4D"}),"\n",(0,d.jsx)(o.p,{children:"Aqui est\xe1 uma descri\xe7\xe3o das linhas de comando e os argumentos compat\xedveis com o lan\xe7amento de aplica\xe7\xf5es 4D."}),"\n",(0,d.jsx)(o.p,{children:"Sintaxe:"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{children:"<applicationPath> [--version] [--help] [--project] [<projectPath | packagePath | 4dlinkPath> [--data <dataPath>]]\n[--opening-mode interpreted | compiled] [--create-data] [--user-param <user string>] [--headless] [--dataless]  \n[--webadmin-settings-file] [--webadmin-access-key] [--webadmin-auto-start] [--webadmin-store-settings]  \n[--utility] [--skip-onstartup] [--startup-method <methodName string>]\n"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(o.table,{children:[(0,d.jsx)(o.thead,{children:(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.th,{style:{textAlign:"left"},children:"Argumento"}),(0,d.jsx)(o.th,{children:"Valor"}),(0,d.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(o.tbody,{children:[(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{style:{textAlign:"left"},children:(0,d.jsx)(o.code,{children:"applicationPath"})}),(0,d.jsx)(o.td,{children:"Rota de 4D, Servidor 4D ou da aplica\xe7\xe3o fusionada."}),(0,d.jsx)(o.td,{children:'Lan\xe7a a aplica\xe7\xe3o. Mesmo que dar um clique duplo na aplica\xe7\xe3o. Quando chamado sem um argumento de arquivo estrutura, a aplica\xe7\xe3o \xe9 executada e a caixa de di\xe1logo "selecionar banco de dados" aparece.'})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{style:{textAlign:"left"},children:(0,d.jsx)(o.code,{children:"--version"})}),(0,d.jsx)(o.td,{}),(0,d.jsx)(o.td,{children:"Exibe a vers\xe3o da aplica\xe7\xe3o e termina"})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{style:{textAlign:"left"},children:(0,d.jsx)(o.code,{children:"--help"})}),(0,d.jsx)(o.td,{}),(0,d.jsx)(o.td,{children:"Exibe ajuda e sai. Outros argumentos: -?, -h"})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{style:{textAlign:"left"},children:(0,d.jsx)(o.code,{children:"--project"})}),(0,d.jsx)(o.td,{children:"projectPath | packagePath | 4dlinkPath"}),(0,d.jsx)(o.td,{children:"Arquivo de projeto para abrir com o arquivo de dados atual. N\xe3o aparece nenhuma caixa de di\xe1logo."})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{style:{textAlign:"left"},children:(0,d.jsx)(o.code,{children:"--data"})}),(0,d.jsx)(o.td,{children:"dataPath"}),(0,d.jsx)(o.td,{children:"Arquivo de dados a abrir com o arquivo de projeto designado. Se n\xe3o for especificado, 4D usa o \xfaltimo arquivo aberto."})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{style:{textAlign:"left"},children:(0,d.jsx)(o.code,{children:"--opening-mode"})}),(0,d.jsx)(o.td,{children:"interpreted | compiled"}),(0,d.jsx)(o.td,{children:"Pede para o banco de dados abrir em modo interpretado ou compilado. Nenhum erro \xe9 gerado se o modo pedido estiver indispon\xedvel."})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{style:{textAlign:"left"},children:(0,d.jsx)(o.code,{children:"--create-data"})}),(0,d.jsx)(o.td,{}),(0,d.jsx)(o.td,{children:'Cria automaticamente um novo arquivo de dados se nenhum arquivo v\xe1lido for encontrado. N\xe3o aparece nenhuma caixa de di\xe1logo. 4D usa o nome de arquivo passado no argumento "--data" se houver (gera um erro se um arquivo com o mesmo nome j\xe1 existir).'})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{style:{textAlign:"left"},children:(0,d.jsx)(o.code,{children:"--user-param"})}),(0,d.jsx)(o.td,{children:"String usu\xe1rio personalizada"}),(0,d.jsxs)(o.td,{children:["Uma string que estar\xe1 dispon\xedvel na aplica\xe7\xe3o atrav\xe9s do comando ",(0,d.jsx)(o.a,{href:"https://doc.4d.com/4dv19R/help/command/pt/page643.html",children:(0,d.jsx)(o.code,{children:"Get database parameter"})}),' (a string n\xe3o deve come\xe7ar com um caractere "-", que est\xe1 reservado).']})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{style:{textAlign:"left"},children:(0,d.jsx)(o.code,{children:"--headless"})}),(0,d.jsx)(o.td,{}),(0,d.jsxs)(o.td,{children:["Lan\xe7a 4D, Servidor 4D, ou a aplica\xe7\xe3o fusionada, sem uma interface (modo headless). Nesse modo:",(0,d.jsx)(o.li,{children:" O modo Design n\xe3o est\xe1 dispon\xedvel, o banco de dados \xe9 iniciado no modo Aplicativo"}),(0,d.jsx)(o.li,{children:" Nenhuma barra de ferramentas, barra de menus, janela MDI ou tela inicial \xe9 exibidaNenhum"}),(0,d.jsx)(o.li,{children:"\xedcone \xe9 exibido no dock ou na barra de tarefasO"}),(0,d.jsx)(o.li,{children:'banco de dados aberto n\xe3o est\xe1 registrado no menu "Recent databases "O'}),(0,d.jsxs)(o.li,{children:["log de diagn\xf3stico \xe9 iniciado automaticamente (consulte ",(0,d.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page642.html",children:"SET DATABASE PARAMETER"}),", seletor 79)"]}),(0,d.jsxs)(o.li,{children:["Cada chamada a uma caixa de di\xe1logo \xe9 interceptada e uma resposta autom\xe1tica \xe9 fornecida (por exemplo, OK para o comando ",(0,d.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page41.html",children:"ALERT"}),", Abort para uma caixa de di\xe1logo de erro...). Todos os comandos interceptados(*) s\xe3o registrados no log de diagn\xf3stico."]}),(0,d.jsx)(o.br,{}),"Para necessidades de manuten\xe7\xe3o, voc\xea pode enviar qualquer texto para fluxos de sa\xedda padr\xe3o usando o comando ",(0,d.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/pt/page667.html",children:"LOG EVENT"}),". Note que aplica\xe7\xf5es headless 4D s\xf3 podem ser fechadas com uma chamada a ",(0,d.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page291.html",children:"QUIT 4D"})," ou usando o gerente de tarefas do OS."]})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{style:{textAlign:"left"},children:(0,d.jsx)(o.code,{children:"--dataless"})}),(0,d.jsx)(o.td,{}),(0,d.jsxs)(o.td,{children:["Lan\xe7a 4D, 4D Server, aplica\xe7\xe3o fundida ou tool4d em modo dataless. O modo sem dados \xe9 \xfatil quando 4D executa tarefas sem necessidade de dados (compila\xe7\xe3o de projetos, por exemplo). Nesse modo: ",(0,d.jsxs)(o.li,{children:["Nenhum arquivo contendo dados \xe9 aberto, mesmo se especificado na linha de comando ou no arquivo ",(0,d.jsx)(o.code,{children:".4DLink"}),", ou ao usar os comandos ",(0,d.jsx)(o.code,{children:"CREATE DATA FILE"})," e ",(0,d.jsx)(o.code,{children:"OPEN DATA FILE"}),"."]}),(0,d.jsxs)(o.li,{children:["Os comandos que manipulam dados geram um erro. For example, ",(0,d.jsx)(o.code,{children:"CREATE RECORD"})," throws \u201Cno table to apply the command to\u201D."]}),(0,d.jsx)(o.br,{}),(0,d.jsx)(o.strong,{children:"Note"}),":",(0,d.jsx)(o.li,{children:"If passed in the command line, dataless mode applies to all databases opened in 4D, as long as the application is not closed."}),(0,d.jsxs)(o.li,{children:["If passed using the ",(0,d.jsx)(o.code,{children:".4DLink"})," file, dataless mode only applies to the database specified in the ",(0,d.jsx)(o.code,{children:".4DLink"})," file. For more information on ",(0,d.jsx)(o.code,{children:".4DLink"})," files, see ",(0,d.jsx)(o.a,{href:"/docs/pt/20-R6/GettingStarted/creating#project-opening-shortcuts",children:"Project opening shortcuts"}),"."]})]})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{style:{textAlign:"left"},children:(0,d.jsx)(o.code,{children:"--webadmin-settings-file"})}),(0,d.jsx)(o.td,{children:"Rota do arquivo"}),(0,d.jsxs)(o.td,{children:["Rota do arquivo personalizado WebAdmin ",(0,d.jsx)(o.code,{children:".4DSettings"})," para o  ",(0,d.jsx)(o.a,{href:"/docs/pt/20-R6/Admin/webAdmin",children:"servidor WebAdmin"})," No disponible con ",(0,d.jsx)(o.a,{href:"#tool4d",children:"tool4d"}),"."]})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{style:{textAlign:"left"},children:(0,d.jsx)(o.code,{children:"--webadmin-access-key"})}),(0,d.jsx)(o.td,{children:"Text"}),(0,d.jsxs)(o.td,{children:["Chave de acesso para o servidor web ",(0,d.jsx)(o.a,{href:"/docs/pt/20-R6/Admin/webAdmin",children:"WebAdmin"})," No disponible con ",(0,d.jsx)(o.a,{href:"#tool4d",children:"tool4d"}),"."]})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{style:{textAlign:"left"},children:(0,d.jsx)(o.code,{children:"--webadmin-auto-start"})}),(0,d.jsx)(o.td,{children:"Par\xe2metros"}),(0,d.jsxs)(o.td,{children:["Estado do in\xedcio autom\xe1tico para o servidor ",(0,d.jsx)(o.a,{href:"/docs/pt/20-R6/Admin/webAdmin",children:"WebAdmin"})," No disponible con ",(0,d.jsx)(o.a,{href:"#tool4d",children:"tool4d"}),"."]})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{style:{textAlign:"left"},children:(0,d.jsx)(o.code,{children:"--webadmin-store-settings"})}),(0,d.jsx)(o.td,{}),(0,d.jsxs)(o.td,{children:["Armazene a chave de acesso e os par\xe2metros de inicializa\xe7\xe3o autom\xe1tica no arquivo de configura\xe7\xf5es usado no momento (ou seja, o arquivo padr\xe3o [",(0,d.jsx)(o.code,{children:"WebAdmin.4DSettings"}),"] (webAdmin.md#webadmin-settings) ou um arquivo personalizado designado com o par\xe2metro ",(0,d.jsx)(o.code,{children:"--webadmin-settings-path"}),"). Use o argumento ",(0,d.jsx)(o.code,{children:"--webadmin-store-settings"})," para salvar essas configura\xe7\xf5es se necess\xe1rio No disponible con ",(0,d.jsx)(o.a,{href:"#tool4d",children:"tool4d"}),"."]})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{style:{textAlign:"left"},children:(0,d.jsx)(o.code,{children:"--utility"})}),(0,d.jsx)(o.td,{}),(0,d.jsxs)(o.td,{children:["Apenas dispon\xedvel com 4D Server. Inicia ",(0,d.jsx)(o.a,{href:"#4d-server-in-utility-mode",children:"4D Server no modo utilit\xe1rio"}),"."]})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{style:{textAlign:"left"},children:(0,d.jsx)(o.code,{children:"--skip-onstartup"})}),(0,d.jsx)(o.td,{}),(0,d.jsxs)(o.td,{children:['Inicia o projecto sem executar quaisquer m\xe9todos "autom\xe1ticos", incluindo os m\xe9todos de base de dados ',(0,d.jsx)(o.code,{children:"On Startup"})," e ",(0,d.jsx)(o.code,{children:"On Exit"})]})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{style:{textAlign:"left"},children:(0,d.jsx)(o.code,{children:"--startup-method"})}),(0,d.jsx)(o.td,{children:"Nome do m\xe9todo projecto (string)"}),(0,d.jsxs)(o.td,{children:["M\xe9todo de projecto a executar imediatamente ap\xf3s o m\xe9todo de base ",(0,d.jsx)(o.code,{children:"On Startup"})," (se n\xe3o for ignorado com ",(0,d.jsx)(o.code,{children:"--skip-onstartup"}),")."]})]})]})]}),"\n",(0,d.jsx)(o.p,{children:"(*) Alguns di\xe1logos s\xe3o exibidos antes do banco de dados ser aberto, para que seja imposs\xedvel escrever no arquivo Diagn\xf3stico de log (alerta de licen\xe7a, di\xe1logo de convers\xe3o, sele\xe7\xe3o de banco de dados, sele\xe7\xe3o de arquivo de dados). Nesses casos, uma mensagem de erro \xe9 criada tanto no stream stderr e no arquivo de eventos do sistema, e ent\xe3o a aplica\xe7\xe3o fecha."}),"\n",(0,d.jsx)(o.h3,{id:"exemplos",children:"Exemplos"}),"\n",(0,d.jsxs)(o.blockquote,{children:["\n",(0,d.jsx)(o.p,{children:'A pasta atual do usu\xe1rio \xe9 alcan\xe7ada usando o comando  "~ " em macOS e o comando "%HOMEPATH%" em Windows.'}),"\n"]}),"\n",(0,d.jsx)(o.p,{children:"Lance uma aplica\xe7\xe3o 4D armazenada no desktop:"}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"macOS:"}),"\n"]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-bash",children:'open ~/Desktop/4D.app\nopen "~/Desktop/4D Server.app"\n'})}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"Windows:"}),"\n"]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-bash",children:'%HOMEPATH%\\Desktop\\4D\\4D.exe\n%HOMEPATH%\\Desktop\\"4D Server.exe"\n'})}),"\n",(0,d.jsx)(o.p,{children:"Abrir um ficheiro de pacote em macOS:"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-bash",children:"--args ~/Documents/myDB.4dbase\n"})}),"\n",(0,d.jsx)(o.p,{children:"Abrir um ficheiro de projecto:"}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"macOS:"}),"\n"]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-bash",children:"--args ~/Documentos/myProj/Projecto/myProj.4DProject\n"})}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"Windows:"}),"\n"]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-bash",children:"%HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject\n"})}),"\n",(0,d.jsx)(o.p,{children:"Abrir um ficheiro de projecto e um ficheiro de dados:"}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"macOS:"}),"\n"]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-bash",children:"--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD\n"})}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"Windows:"}),"\n"]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-bash",children:"--project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject --data %HOMEPATH%\\Documents\\data\\myData.4DD\nou:\n/project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject /data %HOMEPATH%\\Documents\\data\\myData.4DD\n"})}),"\n",(0,d.jsx)(o.p,{children:"Abrir um ficheiro .4DLink:"}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"macOS:"}),"\n"]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-bash",children:"~/Desktop/MyDatabase.4DLink\n"})}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"Windows:"}),"\n"]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-bash",children:"%HOMEPATH%\\Desktop\\MyDatabase.4DLink\n"})}),"\n",(0,d.jsx)(o.p,{children:"Abrir em modo compilado e criar um arquivo de dados se n\xe3o dispon\xedvel:"}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"macOS:"}),"\n"]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-bash",children:"~/Documents/myBase.4dbase --args --opening-mode compiled --create-data true\n"})}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"Windows:"}),"\n"]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-bash",children:"%HOMEPATH%\\Documents\\myBase.4dbase\\myDB.4db --opening-mode compiled --create-data true\n"})}),"\n",(0,d.jsx)(o.p,{children:"Abrir um ficheiro projeto e um arquivo de dados e passar uma \u201Cstring\u201D como par\xe2metro do usu\xe1rio:"}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"macOS:"}),"\n"]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-bash",children:'--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --user-param "Hello world"\n'})}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"Windows:"}),"\n"]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-bash",children:'--project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject --data %HOMEPATH%\\Documents\\data\\myData.4DD --user-param "Hello world"\n'})}),"\n",(0,d.jsx)(o.p,{children:"Aberto sem interface (modo headless):"}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"macOS:"}),"\n"]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-bash",children:"--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --headless  \n"})}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"Windows:"}),"\n"]}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-bash",children:"--project %HOMEPATH%\\Documents\\myProj\\Project\\myProj.4DProject --data %HOMEPATH%\\Documents\\data\\myData.4DD --headless\n"})}),"\n",(0,d.jsx)(o.h2,{id:"tool4d",children:"tool4d"}),"\n",(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.strong,{children:"tool4d"})," \xe9 uma aplica\xe7\xe3o gratuita, leve e aut\xf3noma que permite abrir um projeto 4D em modo headless e executar algum c\xf3digo 4D utilizando o CLI."]}),"\n",(0,d.jsx)(o.p,{children:"tool4d est\xe1 dispon\xedvel em Windows e macOS e est\xe1 sempre associado a uma vers\xe3o 4D (mesma vers\xe3o e n\xfamero de compila\xe7\xe3o). S\xf3 \xe9 fornecido na localiza\xe7\xe3o em ingl\xeas."}),"\n",(0,d.jsx)(o.p,{children:"tool4d \xe9 uma ferramenta perfeita para o fazer:"}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"implementar uma cadeia CI/CD para sua aplica\xe7\xe3o 4D,"}),"\n",(0,d.jsx)(o.li,{children:"usar um execut\xe1vel 4D leve para executar scripts 4D, por exemplo, para executar testes unit\xe1rios autom\xe1ticos."}),"\n"]}),"\n",(0,d.jsx)(o.h3,{id:"utilizar-tool4d",children:"Utilizar tool4d"}),"\n",(0,d.jsxs)(o.p,{children:["Voc\xea pode obter o tool4d na ",(0,d.jsx)(o.a,{href:"https://product-download.4d.com/",children:"p\xe1gina de download do produto"})," do 4D."]}),"\n",(0,d.jsxs)(o.p,{children:["Voc\xea usa o tool4d executando uma ",(0,d.jsx)(o.a,{href:"#launch-a-4d-application",children:"linha de comando"})," com um projeto 4D padr\xe3o. Voc\xea pode usar todos os argumentos descritos na tabela acima, exceto --",(0,d.jsx)(o.code,{children:"webadmin"})," j\xe1 que este componente est\xe1 ",(0,d.jsx)(o.a,{href:"#disabled-4d-features",children:"desativado no tool4d"}),". Com tool4d, \xe9 lan\xe7ada a seguinte sequ\xeancia espec\xedfica:"]}),"\n",(0,d.jsxs)(o.ol,{children:["\n",(0,d.jsxs)(o.li,{children:["tool4d executa o m\xe9todo da base de dados ",(0,d.jsx)(o.code,{children:"On Startup"}),' (e todos os m\xe9todos "autom\xe1ticos" como ',(0,d.jsx)(o.a,{href:"/docs/pt/20-R6/Users/editing#user-properties",children:"m\xe9todo do usu\xe1rio"}),"), exceto se o argumento ",(0,d.jsx)(o.code,{children:"--skip-onstartup"})," for passado."]}),"\n",(0,d.jsxs)(o.li,{children:["tool4d executa o m\xe9todo designado pelo argumento ",(0,d.jsx)(o.code,{children:"--startup-method"}),", se houver."]}),"\n",(0,d.jsxs)(o.li,{children:["tool4d executa o m\xe9todo ",(0,d.jsx)(o.code,{children:"On Exit"})," do banco de dados, exceto se o argumento ",(0,d.jsx)(o.code,{children:"--skip-onstartup"})," for passado."]}),"\n",(0,d.jsx)(o.li,{children:"tool4d desiste."}),"\n"]}),"\n",(0,d.jsxs)(o.p,{children:["No Windows, tool4d \xe9 uma aplica\xe7\xe3o de consola, pelo que o fluxo ",(0,d.jsx)(o.code,{children:"stdout"})," \xe9 apresentado no terminal (cmd, powershell...)."]}),"\n",(0,d.jsx)(o.admonition,{title:"Notas",type:"note",children:(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsxs)(o.li,{children:["tool4d \xe9 sempre executado sem \u2018interface\u2019 (a op\xe7\xe3o de linha de comando ",(0,d.jsx)(o.code,{children:"headless"})," \xe9 in\xfatil)."]}),"\n",(0,d.jsxs)(o.li,{children:["O comando ",(0,d.jsx)(o.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page494.html",children:(0,d.jsx)(o.code,{children:"Application type"})}),' devolve o valor 6 ("tool4d") quando chamado a partir da aplica\xe7\xe3o tool4d.']}),"\n",(0,d.jsxs)(o.li,{children:["o ",(0,d.jsx)(o.a,{href:"/docs/pt/20-R6/Debugging/debugLogFiles#4ddiagnosticlogtxt",children:"ficheiro de registo de diagn\xf3stico"}),' tem o prefixo "4DDiagnosticLogTool".']}),"\n"]})}),"\n",(0,d.jsx)(o.h3,{id:"funcionalidades-4d-desativadas",children:"Funcionalidades 4D desativadas"}),"\n",(0,d.jsxs)(o.p,{children:["Tenha em mente que tool4d roda automaticamente em ",(0,d.jsx)(o.strong,{children:"modo headless"})," (veja ",(0,d.jsx)(o.code,{children:"--headless"})," em ",(0,d.jsx)(o.a,{href:"#launch-a-4d-application",children:"esta tabela"}),"), e n\xe3o d\xe1 acesso ao IDE 4D nem a nenhum de seus servidores. Em particular, s\xe3o desactivadas as seguintes funcionalidades:"]}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"servidor de aplica\xe7\xf5es, servidor Web, servidor SQL,"}),"\n",(0,d.jsx)(o.li,{children:"programador de c\xf3pias de seguran\xe7a,"}),"\n",(0,d.jsx)(o.li,{children:"ODBC e SQL pass-through,"}),"\n",(0,d.jsx)(o.li,{children:"todos os componentes tais como 4D View Pro, 4D SVG, 4D NetKit...,"}),"\n",(0,d.jsx)(o.li,{children:"corrector ortogr\xe1fico hunspell,"}),"\n",(0,d.jsxs)(o.li,{children:["corrector ortogr\xe1fico japon\xe9s (librer\xeda ",(0,d.jsx)(o.em,{children:"mecab"}),"),"]}),"\n",(0,d.jsx)(o.li,{children:"WebAdmin,"}),"\n",(0,d.jsx)(o.li,{children:"CEF,"}),"\n",(0,d.jsx)(o.li,{children:"PHP,"}),"\n",(0,d.jsxs)(o.li,{children:["depurador remoto (depurador local, o comando ",(0,d.jsx)(o.code,{children:"TRACE"})," e os pontos de interrup\xe7\xe3o s\xe3o ignorados em aplica\xe7\xf5es sem interface)."]}),"\n"]}),"\n",(0,d.jsx)(o.h2,{id:"4d-server-em-modo-utilit\xe1rio",children:"4D Server em modo utilit\xe1rio"}),"\n",(0,d.jsxs)(o.p,{children:["Pode lan\xe7ar uma inst\xe2ncia 4D Server em modo utilit\xe1rio (sem interface) usando a op\xe7\xe3o CLI ",(0,d.jsx)(o.code,{children:"--utility"}),". Neste caso, \xe9 accionado o seguinte fluxo de trabalho:"]}),"\n",(0,d.jsxs)(o.ol,{children:["\n",(0,d.jsxs)(o.li,{children:["4D Server executa o m\xe9todo base ",(0,d.jsx)(o.code,{children:"On Startup"}),' (e todos os m\xe9todos "autom\xe1ticos" tais como ',(0,d.jsx)(o.a,{href:"/docs/pt/20-R6/Users/editing#user-properties",children:"m\xe9todo usu\xe1rio"}),"), excepto se o par\xe2metro ",(0,d.jsx)(o.code,{children:"--skip-onstartup"})," for passado."]}),"\n",(0,d.jsxs)(o.li,{children:["4D Server executa o m\xe9todo designado pelo ",(0,d.jsx)(o.code,{children:"--startup-method"}),", se houver."]}),"\n",(0,d.jsxs)(o.li,{children:["4D Server executa o m\xe9todo base ",(0,d.jsx)(o.code,{children:"On Exit"}),", excepto se o par\xe2metro ",(0,d.jsx)(o.code,{children:"--skip-onstartup"})," for passado."]}),"\n",(0,d.jsx)(o.li,{children:"4D Server \xe9 encerrado."}),"\n"]}),"\n",(0,d.jsx)(o.admonition,{type:"info",children:(0,d.jsx)(o.p,{children:"Ao contr\xe1rio de tool4d, 4D Server em modo utilit\xe1rio tem todas as suas funcionalidades ativadas. No entanto, o servidor de aplica\xe7\xf5es e todos os outros servidores n\xe3o s\xe3o iniciados."})}),"\n",(0,d.jsx)(o.admonition,{title:"Veja tamb\xe9m",type:"tip",children:(0,d.jsxs)(o.p,{children:["Veja ",(0,d.jsx)(o.a,{href:"https://blog.4d.com/a-tool-for-4d-code-execution-in-cli/",children:"este post do blog"})," para exemplos de como usar tool4d e 4D Server no modo utilit\xe1rio."]})})]})}function m(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,d.jsx)(o,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return r},a:function(){return i}});var a=n(667294);let d={},s=a.createContext(d);function i(e){let o=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),a.createElement(s.Provider,{value:o},e.children)}}}]);