"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25293],{589873:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>n,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>t,toc:()=>c});var a=s(474848),d=s(28453);const r={id:"overview",title:"Gerenciamento do c\xf3digo"},i=void 0,t={id:"code-editor/overview",title:"Gerenciamento do c\xf3digo",description:"O c\xf3digo 4D utilizado na sua aplica\xe7\xe3o est\xe1 escrito nos m\xe9todos  e nas classes.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/code-editor/overview.md",sourceDirName:"code-editor",slug:"/code-editor/overview",permalink:"/docs/pt/20/code-editor/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20code-editor%2Foverview.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"overview",title:"Gerenciamento do c\xf3digo"},sidebar:"docs",previous:{title:"ZIPFolder",permalink:"/docs/pt/20/API/ZipFolderClass"},next:{title:"Editor de m\xe9todo",permalink:"/docs/pt/20/code-editor/write-class-method"}},n={},c=[{value:"Cria\xe7\xe3o de m\xe9todos",id:"cria\xe7\xe3o-de-m\xe9todos",level:2},{value:"Cria\xe7\xe3o de classes",id:"cria\xe7\xe3o-de-classes",level:2},{value:"Excluir os m\xe9todos ou as classes",id:"excluir-os-m\xe9todos-ou-as-classes",level:2},{value:"Importa\xe7\xe3o e exporta\xe7\xe3o de c\xf3digo",id:"importa\xe7\xe3o-e-exporta\xe7\xe3o-de-c\xf3digo",level:2},{value:"Propriedades do m\xe9todo projeto",id:"propriedades-do-m\xe9todo-projeto",level:2},{value:"Nome",id:"nome",level:3},{value:"Atributos",id:"atributos",level:3},{value:"Invis\xedvel",id:"invis\xedvel",level:4},{value:"Partilhada pelos componentes e pela base de dados host",id:"partilhada-pelos-componentes-e-pela-base-de-dados-host",level:4},{value:"Executar no servidor",id:"executar-no-servidor",level:4},{value:"Modo Execu\xe7\xe3o",id:"modo-execu\xe7\xe3o",level:3},{value:"Dispon\xedvel atrav\xe9s de",id:"dispon\xedvel-atrav\xe9s-de",level:3},{value:"Servi\xe7os Web",id:"servi\xe7os-web",level:4},{value:"Publicado em WSDL",id:"publicado-em-wsdl",level:4},{value:"Etiquetas 4D e URLs (4DACTION...)",id:"etiquetas-4d-e-urls-4daction",level:4},{value:"SQL",id:"sql",level:4},{value:"Servidor REST",id:"servidor-rest",level:4},{value:"Defini\xe7\xe3o de lotes para atributos de m\xe9todos",id:"defini\xe7\xe3o-de-lotes-para-atributos-de-m\xe9todos",level:4}];function m(e){const o={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.p,{children:["O c\xf3digo 4D utilizado na sua aplica\xe7\xe3o est\xe1 escrito nos ",(0,a.jsx)(o.a,{href:"/docs/pt/20/Concepts/methods",children:"m\xe9todos "})," e nas classes",(0,a.jsx)(o.a,{href:"/docs/pt/20/Concepts/classes"}),"."]}),"\n",(0,a.jsxs)(o.p,{children:["O IDE 4D fornece v\xe1rios recursos para criar, editar, exportar ou excluir seu c\xf3digo. Normalmente utiliza o editor de c\xf3digo 4D ",(0,a.jsx)(o.a,{href:"/docs/pt/20/code-editor/write-class-method"})," para trabalhar com o seu c\xf3digo."]}),"\n",(0,a.jsx)(o.h2,{id:"cria\xe7\xe3o-de-m\xe9todos",children:"Cria\xe7\xe3o de m\xe9todos"}),"\n",(0,a.jsxs)(o.p,{children:["Um m\xe9todo em 4D \xe9 armazenado num ficheiro ",(0,a.jsx)(o.strong,{children:".4dm"})," localizado na pasta apropriada da pasta ",(0,a.jsx)(o.a,{href:"/docs/pt/20/Project/architecture#sources",children:(0,a.jsx)(o.code,{children:"/Project/Sources/"})}),"."]}),"\n",(0,a.jsxs)(o.p,{children:["\xc9 poss\xedvel criar ",(0,a.jsx)(o.a,{href:"/docs/pt/20/Concepts/methods",children:"v\xe1rios tipos de m\xe9todos"}),":"]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["Todos os tipos de m\xe9todos podem ser criados ou abertos a partir da janela ",(0,a.jsx)(o.strong,{children:"Explorer"})," (exceto os m\xe9todos Objeto que s\xe3o geridos a partir do ",(0,a.jsx)(o.a,{href:"/docs/pt/20/FormEditor/overview",children:"editor de formul\xe1rios"}),")."]}),"\n",(0,a.jsxs)(o.li,{children:["Os m\xe9todos projeto tamb\xe9m podem ser criados ou abertos a partir do menu ",(0,a.jsx)(o.strong,{children:"Ficheiro"})," ou da barra de ferramentas (",(0,a.jsx)(o.strong,{children:"Novo/M\xe9todo..."})," ou ",(0,a.jsx)(o.strong,{children:"Abrir/M\xe9todo..."}),") ou utilizando atalhos na janela do editor de c\xf3digo ",(0,a.jsx)(o.a,{href:"/docs/pt/20/code-editor/write-class-method#shortcuts"}),"."]}),"\n",(0,a.jsx)(o.li,{children:"Os triggers tamb\xe9m podem ser criados ou abertos a partir do editor de Estrutura."}),"\n",(0,a.jsxs)(o.li,{children:["Os m\xe9todos formul\xe1rio tamb\xe9m podem ser criados ou abertos a partir do ",(0,a.jsx)(o.a,{href:"/docs/pt/20/FormEditor/overview",children:"editor de formul\xe1rios"}),"."]}),"\n"]}),"\n",(0,a.jsx)(o.h2,{id:"cria\xe7\xe3o-de-classes",children:"Cria\xe7\xe3o de classes"}),"\n",(0,a.jsxs)(o.p,{children:["Uma classe usu\xe1rio em 4D \xe9 definida por um ficheiro de m\xe9todo espec\xedfico (",(0,a.jsx)(o.strong,{children:".4dm"}),"), armazenado na pasta ",(0,a.jsx)(o.a,{href:"/docs/pt/20/Project/architecture#sources",children:(0,a.jsx)(o.code,{children:"/Project/Sources/Classes/"})}),". O nome do arquivo \xe9 o nome da classe."]}),"\n",(0,a.jsxs)(o.p,{children:["Pode criar um ficheiro de classe a partir do menu ou da barra de ferramentas ",(0,a.jsx)(o.strong,{children:"Ficheiro"})," (",(0,a.jsx)(o.strong,{children:"Nova/Classe..."}),") ou na p\xe1gina ",(0,a.jsx)(o.strong,{children:"M\xe9todos"})," da janela ",(0,a.jsx)(o.strong,{children:"Explorer"}),"."]}),"\n",(0,a.jsxs)(o.p,{children:["Para mais informa\xe7\xf5es, consulte a sec\xe7\xe3o ",(0,a.jsx)(o.a,{href:"/docs/pt/20/Concepts/classes",children:"Classes"}),"."]}),"\n",(0,a.jsx)(o.h2,{id:"excluir-os-m\xe9todos-ou-as-classes",children:"Excluir os m\xe9todos ou as classes"}),"\n",(0,a.jsx)(o.p,{children:"Para eliminar um m\xe9todo ou classe existente, pode:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["no seu disco, remova o ficheiro ",(0,a.jsx)(o.em,{children:".4dm"}),' da pasta "Sources",']}),"\n",(0,a.jsxs)(o.li,{children:["no Explorador 4D, selecionar o m\xe9todo e clicar em ",(0,a.jsx)(o.img,{src:s(295949).A+"",width:"19",height:"18"})," ou escolher ",(0,a.jsx)(o.strong,{children:"Mover para Lixo"})," a partir do menu contextual."]}),"\n"]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsxs)(o.p,{children:["Para eliminar um m\xe9todo de objeto, selecione ",(0,a.jsx)(o.strong,{children:"Excluir o m\xe9todo objeto"})," no ",(0,a.jsx)(o.a,{href:"/docs/pt/20/FormEditor/overview",children:"editor de formul\xe1rios"})," (menu ",(0,a.jsx)(o.strong,{children:"Objeto"})," ou menu contextual)."]}),"\n"]}),"\n",(0,a.jsx)(o.h2,{id:"importa\xe7\xe3o-e-exporta\xe7\xe3o-de-c\xf3digo",children:"Importa\xe7\xe3o e exporta\xe7\xe3o de c\xf3digo"}),"\n",(0,a.jsxs)(o.p,{children:["\xc9 poss\xedvel importar e exportar um m\xe9todo ou o c\xf3digo de uma classe sob a forma de um ficheiro. Estes comandos encontram-se no menu ",(0,a.jsx)(o.strong,{children:"M\xe9todo"})," do editor de c\xf3digo."]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["Quando seleciona o comando ",(0,a.jsx)(o.strong,{children:"Exportar o m\xe9todo..."}),", aparece uma caixa de di\xe1logo padr\xe3o para guardar ficheiros, permitindo-lhe escolher o nome, a localiza\xe7\xe3o e o formato do ficheiro de exporta\xe7\xe3o (ver abaixo). Tal como acontece com a impress\xe3o, a exporta\xe7\xe3o n\xe3o tem em conta o estado colapsado das estruturas de c\xf3digo e todo o c\xf3digo \xe9 exportado."]}),"\n",(0,a.jsxs)(o.li,{children:["Quando seleciona o comando ",(0,a.jsx)(o.strong,{children:"Importar o m\xe9todo..."}),", aparece uma caixa de di\xe1logo padr\xe3o de abertura de ficheiros, que lhe permite designar o ficheiro a importar. A importa\xe7\xe3o substitui o texto selecionado no m\xe9todo. Para substituir um m\xe9todo existente por um m\xe9todo importado, selecionar todo o conte\xfado do m\xe9todo antes de efetuar a importa\xe7\xe3o."]}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:"A fun\xe7\xe3o de importa\xe7\xe3o/exporta\xe7\xe3o \xe9 multiplataforma: um m\xe9todo exportado para Mac OS pode ser importado para Windows e vice-versa; 4D lida com a convers\xe3o de caracteres quando necess\xe1rio."}),"\n",(0,a.jsx)(o.p,{children:"4D pode exportar e importar m\xe9todos em dois formatos:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["M\xe9todo 4D (extens\xe3o ",(0,a.jsx)(o.em,{children:".c4d"}),"): neste formato, os m\xe9todos s\xe3o exportados de forma codificada. Os nomes dos objectos s\xe3o tokenizados. Este formato \xe9 utilizado em particular para o interc\xe2mbio de m\xe9todos entre aplica\xe7\xf5es 4D e plug-ins em diferentes l\xednguas. Por outro lado, n\xe3o \xe9 poss\xedvel visualiz\xe1-los num editor de texto."]}),"\n",(0,a.jsxs)(o.li,{children:["Texto (extens\xe3o ",(0,a.jsx)(o.em,{children:".txt"}),"): neste formato, os m\xe9todos s\xe3o exportados apenas sob a forma de texto. Neste caso, os m\xe9todos podem ser lidos utilizando um editor de texto normal ou uma ferramenta de controlo da fonte."]}),"\n"]}),"\n",(0,a.jsx)(o.h2,{id:"propriedades-do-m\xe9todo-projeto",children:"Propriedades do m\xe9todo projeto"}),"\n",(0,a.jsx)(o.p,{children:"Ap\xf3s criar um m\xe9todo projeto, pode mudar-lhe o nome e modificar as suas propriedades. As propriedades dos m\xe9todos projeto referem-se principalmente \xe0s suas condi\xe7\xf5es de acesso e seguran\xe7a (acesso de usu\xe1rios, servidores integrados ou servi\xe7os), bem como ao seu modo de execu\xe7\xe3o."}),"\n",(0,a.jsx)(o.p,{children:"Os outros tipos de m\xe9todos n\xe3o t\xeam propriedades espec\xedficas. As suas propriedades est\xe3o relacionadas com as dos objetos a que est\xe3o ligados."}),"\n",(0,a.jsxs)(o.p,{children:["Para exibir a caixa de di\xe1logo ",(0,a.jsx)(o.strong,{children:"Propriedades do m\xe9todo"})," para um m\xe9todo projeto, \xe9 poss\xedvel:"]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["no ",(0,a.jsx)(o.a,{href:"/docs/pt/20/code-editor/write-class-method",children:"editor de c\xf3digo"}),", selecione o comando ",(0,a.jsx)(o.strong,{children:"Propriedades do m\xe9todo..."})," no menu ",(0,a.jsx)(o.strong,{children:"M\xe9todo"}),","]}),"\n",(0,a.jsxs)(o.li,{children:["ou na p\xe1gina ",(0,a.jsx)(o.strong,{children:"M\xe9todos"})," do Explorador, ",(0,a.jsx)(o.strong,{children:"clique com o bot\xe3o direito do rato"})," no m\xe9todo projeto e selecione ",(0,a.jsx)(o.strong,{children:"Propriedades do m\xe9todo..."})," no menu contextual ou no menu de op\xe7\xf5es."]}),"\n"]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsxs)(o.p,{children:["Uma fun\xe7\xe3o de defini\xe7\xe3o de par\xe2metros permite modificar uma propriedade para todos ou parte dos m\xe9todos do projeto de base de dados numa \xfanica opera\xe7\xe3o (ver ",(0,a.jsx)(o.a,{href:"#batch-setting-for-method-attributes",children:"Modificar atributos globalmente"}),")."]}),"\n"]}),"\n",(0,a.jsx)(o.h3,{id:"nome",children:"Nome"}),"\n",(0,a.jsxs)(o.p,{children:["\xc9 poss\xedvel alterar o nome de um m\xe9todo projeto na \xe1rea ",(0,a.jsx)(o.strong,{children:"Nome"})," da janela ",(0,a.jsx)(o.strong,{children:"Propriedades do m\xe9todo"})," ou no Explorer."]}),"\n",(0,a.jsxs)(o.p,{children:["O novo nome deve estar em conformidade com as regras de nomea\xe7\xe3o 4D (ver ",(0,a.jsx)(o.a,{href:"/docs/pt/20/Concepts/identifiers",children:"Identificadores"}),"). Se um m\xe9todo com o mesmo nome j\xe1 existe, 4D mostra uma mensagem dizendo que o nome do m\xe9todo j\xe1 foi usado. Se necess\xe1rio, 4D ordena a lista de m\xe9todos novamente."]}),"\n",(0,a.jsxs)(o.admonition,{type:"caution",children:[(0,a.jsxs)(o.p,{children:["Alterar o nome de um m\xe9todo j\xe1 utilizado na base de dados pode invalidar quaisquer m\xe9todos ou f\xf3rmulas que utilizem o nome do m\xe9todo antigo e arrisca perturbar o funcionamento da aplica\xe7\xe3o. \xc9 poss\xedvel renomear o m\xe9todo manualmente, mas recomenda-se vivamente a utiliza\xe7\xe3o da fun\xe7\xe3o de renomea\xe7\xe3o para m\xe9todos projeto, descrita em ",(0,a.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Renaming.300-5851389.en.html",children:"Renomear"}),". Com esta fun\xe7\xe3o, \xe9 poss\xedvel atualizar automaticamente o nome sempre que o m\xe9todo for chamado em todo o ambiente de Desenho."]}),(0,a.jsx)(o.p,{children:"Com 4D Server, o nome do m\xe9todo \xe9 alterado no servidor quando termina de o editar. Se mais do que um usu\xe1rio estiver a modificar o nome do m\xe9todo em simult\xe2neo, o nome final do m\xe9todo ser\xe1 o nome especificado pelo \xfaltimo usu\xe1rio a terminar a edi\xe7\xe3o. Pode ser necess\xe1rio especificar um propriet\xe1rio do m\xe9todo para que apenas determinados usu\xe1rios possam alterar o nome do m\xe9todo"})]}),"\n",(0,a.jsx)(o.admonition,{type:"info",children:(0,a.jsx)(o.p,{children:"Os m\xe9todos base de dados n\xe3o podem ser renomeados. O mesmo se aplica aos triggers, m\xe9todos formul\xe1rio e m\xe9todos objeto, que est\xe3o ligados a objetos e recebem os seus nomes do objeto em quest\xe3o."})}),"\n",(0,a.jsx)(o.h3,{id:"atributos",children:"Atributos"}),"\n",(0,a.jsx)(o.p,{children:"\xc9 poss\xedvel controlar como os m\xe9todos projeto s\xe3o utilizados e/ou chamados em diferentes contextos utilizando atributos. Note-se que \xe9 poss\xedvel definir atributos para toda uma sele\xe7\xe3o de m\xe9todos projeto utilizando o Explorador (ver sec\xe7\xe3o seguinte)."}),"\n",(0,a.jsx)(o.h4,{id:"invis\xedvel",children:"Invis\xedvel"}),"\n",(0,a.jsxs)(o.p,{children:["Se n\xe3o quiser que os usu\xe1rios possam executar um m\xe9todo projeto utilizando o comando ",(0,a.jsx)(o.strong,{children:"M\xe9todo..."})," do menu ",(0,a.jsx)(o.strong,{children:"Execu\xe7\xe3o"}),", pode torn\xe1-lo invis\xedvel assinalando esta op\xe7\xe3o. Um m\xe9todo invis\xedvel n\xe3o aparece na caixa de di\xe1logo de execu\xe7\xe3o do m\xe9todo."]}),"\n",(0,a.jsx)(o.p,{children:"Quando se torna invis\xedvel um m\xe9todo projeto, este continua a estar dispon\xedvel para os programadores da base de dados. Permanece listado na lista de m\xe9todos do Explorador e do Editor de C\xf3digo."}),"\n",(0,a.jsx)(o.h4,{id:"partilhada-pelos-componentes-e-pela-base-de-dados-host",children:"Partilhada pelos componentes e pela base de dados host"}),"\n",(0,a.jsx)(o.p,{children:"Este atributo \xe9 utilizado no \xe2mbito dos componentes. Quando estiver selecionada, indica que o m\xe9todo estar\xe1 dispon\xedvel para os componentes quando a aplica\xe7\xe3o for utilizada como base de dados do anfitri\xe3o. Por outro lado, quando a aplica\xe7\xe3o for utilizada como um componente, o m\xe9todo estar\xe1 dispon\xedvel para as bases de dados do anfitri\xe3o."}),"\n",(0,a.jsxs)(o.p,{children:["Para saber mais sobre componentes, consulte o cap\xedtulo ",(0,a.jsx)(o.a,{href:"/docs/pt/20/Extensions/develop-components",children:"Desenvolvimento e instala\xe7\xe3o de componentes 4D"})," ."]}),"\n",(0,a.jsx)(o.h4,{id:"executar-no-servidor",children:"Executar no servidor"}),"\n",(0,a.jsx)(o.p,{children:"Este atributo s\xf3 \xe9 levado em considera\xe7\xe3o para uma aplica\xe7\xe3o 4D em modo cliente-servidor. Quando esta op\xe7\xe3o estiver selecionada, o m\xe9todo do projeto \xe9 sempre executado no servidor, independentemente da forma como \xe9 chamado."}),"\n",(0,a.jsxs)(o.p,{children:["Para mais informa\xe7\xf5es sobre esta op\xe7\xe3o, consulte ",(0,a.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R6/4D/19-R6/Execute-on-Server-attribute.300-5941841.en.html",children:"Executar no atributo Servidor"}),"."]}),"\n",(0,a.jsx)(o.h3,{id:"modo-execu\xe7\xe3o",children:"Modo Execu\xe7\xe3o"}),"\n",(0,a.jsx)(o.p,{children:"Esta op\xe7\xe3o permite-lhe declarar o m\xe9todo eleg\xedvel para execu\xe7\xe3o em modo preemptivo. Por padr\xe3o, 4D executa todos os m\xe9todos de projeto de suas aplica\xe7\xf5es em modo cooperativo."}),"\n",(0,a.jsx)(o.p,{children:"Para se beneficiar da funcionalidade de modo preemptivo, \xe9 necess\xe1rio declarar explicitamente todos os m\xe9todos que deseja que sejam iniciados em modo preemptivo. O compilador verificar\xe1 ent\xe3o se estes m\xe9todos s\xe3o efetivamente seguros para as threads."}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Nota:"})," A execu\xe7\xe3o em modo preemptivo s\xf3 est\xe1 dispon\xedvel em modo compilado. Para mais informa\xe7\xf5es, consulte a se\xe7\xe3o ",(0,a.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R6/4D/19-R6/Preemptive-4D-processes.300-5911166.en.html",children:"Preemptive 4D processes"})," ."]}),"\n",(0,a.jsx)(o.p,{children:"S\xe3o fornecidas as seguintes op\xe7\xf5es:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"Pode ser executado em processos preemptivos"}),': Ao marcar esta op\xe7\xe3o, declara que o m\xe9todo pode ser executado num processo preemptivo e, por conseguinte, deve ser executado em modo preemptivo sempre que poss\xedvel. A propriedade "preemptive" do m\xe9todo \xe9 definida como "capable".']}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:"Quando essa op\xe7\xe3o estiver marcada, o compilador 4D verificar\xe1 se o m\xe9todo \xe9 realmente capaz e retornar\xe1 erros se esse n\xe3o for o caso -- por exemplo, se ele chama direta ou indiretamente comandos ou m\xe9todos que n\xe3o podem ser executados em modo preemptivo (toda a cadeia de chamadas \xe9 analisada, mas os erros s\xe3o reportados apenas ao primeiro subn\xedvel). Pode ent\xe3o editar o m\xe9todo para que se torne thread-safe, ou selecionar outra op\xe7\xe3o."}),"\n",(0,a.jsxs)(o.p,{children:['Se a capacidade preemptiva do m\xe9todo for aprovada, este \xe9 marcado internamente como "thread-safe" e ser\xe1 executado em modo preemptivo sempre que as condi\xe7\xf5es necess\xe1rias forem cumpridas. Esta propriedade define a sua elegibilidade para o modo preemptivo, mas n\xe3o garante que o m\xe9todo ser\xe1 efetivamente executado em modo preemptivo, uma vez que este modo de execu\xe7\xe3o requer um contexto espec\xedfico (ver ',(0,a.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Preemptive-4D-processes.300-5830919.en.html#2822148",children:"Quando \xe9 que um processo \xe9 iniciado de forma preemptiva?"}),")."]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"Cannot be run in preemptive processes"}),': Ao marcar esta op\xe7\xe3o, declara que o m\xe9todo nunca deve ser executado em modo preemptivo, e portanto deve ser sempre executado em modo cooperativo, como nas vers\xf5es 4D anteriores. A propriedade "preemptive" do m\xe9todo \xe9 definida como "incapable".']}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:'Quando esta op\xe7\xe3o estiver marcada, o compilador 4D n\xe3o verificar\xe1 a habilidade do m\xe9todo de executar preemptivamente; ele \xe9 automaticamente marcado como "thread-unsafe" internamente (mesmo que seja teoricamente capaz). Quando chamado em tempo de execu\xe7\xe3o, este m\xe9todo ir\xe1 "contaminar" quaisquer outros m\xe9todos na mesma thread, for\xe7ando assim esta thread a ser executada em modo cooperativo, mesmo que os outros m\xe9todos sejam thread-safe.'}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.strong,{children:"Indiferente"}),'(predefini\xe7\xe3o): Ao marcar esta op\xe7\xe3o, declara que n\xe3o pretende tratar a propriedade preemptiva do m\xe9todo. A propriedade "preemptiva" do m\xe9todo \xe9 definida como "indiferente".']}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:'Quando esta op\xe7\xe3o est\xe1 marcada, o compilador 4D avaliar\xe1 a capacidade preemptiva do m\xe9todo e o marcar\xe1 internamente como "thread-safe" ou "thread-unsafe". N\xe3o \xe9 devolvido qualquer erro relacionado com a execu\xe7\xe3o preemptiva. Se o m\xe9todo for avaliado como thread-safe, em tempo de execu\xe7\xe3o n\xe3o impedir\xe1 a execu\xe7\xe3o preemptiva de threads quando chamado num contexto preemptivo. Por outro lado, se o m\xe9todo for avaliado como "thread-unsafe", em tempo de execu\xe7\xe3o impedir\xe1 qualquer execu\xe7\xe3o de thread preemptiva quando for chamado.'}),"\n",(0,a.jsxs)(o.p,{children:["Note que com essa op\xe7\xe3o, qualquer que seja a avalia\xe7\xe3o interna de seguran\xe7a de thread, o m\xe9todo ser\xe1 sempre executado em modo cooperativo quando chamado diretamente por 4D como o primeiro m\xe9todo pai (por exemplo, atrav\xe9s do comando ",(0,a.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/New-process.301-5830903.en.html",children:"New process"}),'). Se for marcado internamente como "thread-safe", s\xf3 \xe9 tido em conta quando chamado a partir de outros m\xe9todos dentro de uma cadeia de chamadas.']}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsxs)(o.strong,{children:[(0,a.jsx)(o.em,{children:"Caso particular"}),":"]})," Se o m\xe9todo tiver tamb\xe9m a propriedade ",(0,a.jsx)(o.a,{href:"shared-by-components-and-host-database",children:(0,a.jsx)(o.strong,{children:"Shared by components and host database"})})," , a defini\xe7\xe3o da op\xe7\xe3o ",(0,a.jsx)(o.strong,{children:"Indifferent"})," marcar\xe1 automaticamente o m\xe9todo como thread-unsafe. Se pretender que um m\xe9todo de componente partilhado seja thread-safe, deve defini-lo explicitamente como ",(0,a.jsx)(o.strong,{children:"Pode ser executado em processos preemptivos"}),"."]}),"\n",(0,a.jsx)(o.h3,{id:"dispon\xedvel-atrav\xe9s-de",children:"Dispon\xedvel atrav\xe9s de"}),"\n",(0,a.jsx)(o.p,{children:"Os atributos de disponibilidade especificam os servi\xe7os externos que est\xe3o autorizados a chamar explicitamente o m\xe9todo."}),"\n",(0,a.jsx)(o.h4,{id:"servi\xe7os-web",children:"Servi\xe7os Web"}),"\n",(0,a.jsxs)(o.p,{children:["Este atributo permite-lhe publicar o m\xe9todo atual como um servi\xe7o Web acess\xedvel atrav\xe9s de pedidos SOAP. Para mais informa\xe7\xf5es, consulte o cap\xedtulo ",(0,a.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Publication-and-use-of-Web-Services.200-5851321.en.html",children:"Publica\xe7\xe3o e utiliza\xe7\xe3o de servi\xe7os Web"})," . Quando esta op\xe7\xe3o est\xe1 selecionada, a op\xe7\xe3o ",(0,a.jsx)(o.strong,{children:"Published in WSDL"})," est\xe1 activada."]}),"\n",(0,a.jsxs)(o.p,{children:["No Explorador, os m\xe9todos de projeto que s\xe3o oferecidos como um Servi\xe7o Web recebem um \xedcone espec\xedfico ",(0,a.jsx)(o.img,{src:"https://doc.4d.com/4Dv19R5/picture/440512/pict440512.fr.png",alt:""}),"."]}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Nota:"})," N\xe3o \xe9 poss\xedvel publicar um m\xe9todo como um servi\xe7o Web se o seu nome incluir caracteres que n\xe3o estejam em conformidade com a nomenclatura XML (por exemplo, contendo espa\xe7os). Se o nome do m\xe9todo n\xe3o estiver de acordo com isso, 4D n\xe3o atribui a propriedade."]}),"\n",(0,a.jsx)(o.h4,{id:"publicado-em-wsdl",children:"Publicado em WSDL"}),"\n",(0,a.jsxs)(o.p,{children:['Este atributo s\xf3 est\xe1 dispon\xedvel quando o atributo "Servi\xe7o Web" est\xe1 selecionado. Permite-lhe incluir o m\xe9todo atual no WSDL da aplica\xe7\xe3o 4D. Para mais informa\xe7\xf5es sobre este assunto, consulte ',(0,a.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Publishing-a-Web-Service-with-4D.300-5851558.en.html#502689",children:"Gera\xe7\xe3o do WSDL"}),"."]}),"\n",(0,a.jsxs)(o.p,{children:["No Explorador, os m\xe9todos de projeto que s\xe3o oferecidos como um Servi\xe7o Web e publicados em WSDL recebem um \xedcone espec\xedfico ",(0,a.jsx)(o.img,{src:"https://doc.4d.com/4Dv19R5/picture/440526/pict440526.fr.png",alt:""}),"."]}),"\n",(0,a.jsx)(o.h4,{id:"etiquetas-4d-e-urls-4daction",children:"Etiquetas 4D e URLs (4DACTION...)"}),"\n",(0,a.jsxs)(o.p,{children:["Esta op\xe7\xe3o \xe9 usada para refor\xe7ar a seguran\xe7a do servidor Web 4D: quando n\xe3o est\xe1 marcada, o m\xe9todo do projeto n\xe3o pode ser executado atrav\xe9s de um pedido HTTP que contenha o URL especial ",(0,a.jsx)(o.a,{href:"/docs/pt/20/WebServer/httpRequests#4daction",children:"4DACTION"})," usado para chamar m\xe9todos 4D, nem as etiquetas especiais ",(0,a.jsx)(o.a,{href:"/docs/pt/20/Tags/tags",children:"4DSCRIPT, 4DTEXT e 4DHTML"}),"."]}),"\n",(0,a.jsxs)(o.p,{children:["No Explorador, os m\xe9todos de projeto com este atributo recebem um \xedcone espec\xedfico ",(0,a.jsx)(o.img,{src:"https://doc.4d.com/4Dv19R5/picture/440496/pict440496.fr.png",alt:""}),"."]}),"\n",(0,a.jsx)(o.p,{children:"Por raz\xf5es de seguran\xe7a, esta op\xe7\xe3o est\xe1 desmarcada por padr\xe3o. Cada m\xe9todo que pode ser executado utilizando o URL ou as etiquetas especiais da Web deve ser indicado individualmente."}),"\n",(0,a.jsx)(o.h4,{id:"sql",children:"SQL"}),"\n",(0,a.jsx)(o.p,{children:"Quando est\xe1 marcada, esta op\xe7\xe3o permite que o m\xe9todo do projeto seja executado pelo motor SQL de 4D. Por padr\xe3o, n\xe3o est\xe1 selecionado, o que significa que, a menos que explicitamente autorizado, os m\xe9todos do projeto 4D s\xe3o protegidos e n\xe3o podem ser chamados pelo motor SQL de 4D."}),"\n",(0,a.jsxs)(o.p,{children:["Esta propriedade aplica-se a todas as consultas SQL internas e externas --- executadas atrav\xe9s do controlador ODBC, c\xf3digo SQL inserido entre as etiquetas ",(0,a.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Begin-SQL.301-5830074.en.html",children:"Begin SQL"}),"/",(0,a.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/End-SQL.301-5830073.en.html",children:"End SQL"}),"  ou o comando ",(0,a.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/QUERY-BY-SQL.301-5830079.en.html",children:"QUERY BY SQL"})," ."]}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.strong,{children:"Notas:"})}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:'Mesmo que um m\xe9todo tenha o atributo "SQL", os direitos de acesso definidos ao n\xedvel das defini\xe7\xf5es da base de dados e das propriedades do m\xe9todo s\xe3o tidos em conta para a execu\xe7\xe3o do m\xe9todo.'}),"\n",(0,a.jsxs)(o.li,{children:["A fun\xe7\xe3o ODBC ",(0,a.jsx)(o.strong,{children:"SQLProcedure"}),' s\xf3 devolve m\xe9todos de projeto com o atributo "SQL".']}),"\n"]}),"\n",(0,a.jsxs)(o.p,{children:["Para mais informa\xe7\xf5es, consulte ",(0,a.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/4D-SQL-engine-implementation.300-5871873.en.html",children:"4D SQL engine implementation"})," no manual 4D SQL."]}),"\n",(0,a.jsx)(o.h4,{id:"servidor-rest",children:"Servidor REST"}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsxs)(o.em,{children:["Esta op\xe7\xe3o est\xe1 obsoleta. O c\xf3digo de chamada atrav\xe9s de chamadas REST s\xf3 \xe9 compat\xedvel com as fun\xe7\xf5es de classe do modelo de dados ",(0,a.jsx)(o.a,{href:"/docs/pt/20/REST/classFunctions",children:"ORDA"}),"."]})}),"\n",(0,a.jsx)(o.h4,{id:"defini\xe7\xe3o-de-lotes-para-atributos-de-m\xe9todos",children:"Defini\xe7\xe3o de lotes para atributos de m\xe9todos"}),"\n",(0,a.jsx)(o.p,{children:'Utilizando a caixa de di\xe1logo "Atributos dos m\xe9todos", pode modificar um atributo (Invis\xedvel, Oferecido como servi\xe7o Web, etc.) para todos ou parte dos m\xe9todos do projeto de base de dados numa \xfanica opera\xe7\xe3o. Esta carater\xedstica \xe9 especialmente \xfatil para modificar os atributos de um grande n\xfamero de m\xe9todos de projeto. Tamb\xe9m pode ser utilizado durante o desenvolvimento para aplicar rapidamente atributos comuns a grupos de m\xe9todos semelhantes.'}),"\n",(0,a.jsx)(o.p,{children:"Para a defini\xe7\xe3o em lote dos atributos do m\xe9todo:"}),"\n",(0,a.jsxs)(o.ol,{children:["\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:["Na p\xe1gina ",(0,a.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Methods-Page.300-5851337.en.html",children:"Methods"})," do 4D Explorer, expanda o menu de op\xe7\xf5es, depois escolha o comando ",(0,a.jsx)(o.strong,{children:"Batch setting of attributes..."})," . \xc9 apresentada a caixa de di\xe1logo ",(0,a.jsx)(o.strong,{children:"Attributes for methods"})," ."]}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsx)(o.p,{children:'Na \xe1rea "Nome do m\xe9todo correspondente:", introduza uma string que lhe permita designar os m\xe9todos que pretende modificar como um lote. A cadeia de caracteres \xe9 utilizada como crit\xe9rio de pesquisa para os nomes dos m\xe9todos.'}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:"Utilize o car\xe1cter curinga @ para ajudar a definir grupos de m\xe9todos:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["Para designar m\xe9todos cujos nomes come\xe7am por..., digite @ no final da string. Por exemplo: ",(0,a.jsx)(o.code,{children:"web@"})]}),"\n",(0,a.jsxs)(o.li,{children:["Para designar m\xe9todos cujos nomes cont\xeam..., digite @ no meio da string. Por exemplo: ",(0,a.jsx)(o.code,{children:"web@write"})]}),"\n",(0,a.jsxs)(o.li,{children:["Para designar m\xe9todos cujos nomes terminam com..., digite @ no in\xedcio da string. Por exemplo: ",(0,a.jsx)(o.code,{children:"@write"})]}),"\n",(0,a.jsx)(o.li,{children:"Para designar todos os m\xe9todos, basta escrever @ na \xe1rea."}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.strong,{children:"Notas:"})}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"A pesquisa n\xe3o tem em conta as mai\xfasculas e min\xfasculas."}),"\n",(0,a.jsxs)(o.li,{children:["Pode introduzir v\xe1rios caracteres @ na cadeia, por exemplo ",(0,a.jsx)(o.code,{children:"dtro_@web@pro.@"})]}),"\n"]}),"\n",(0,a.jsxs)(o.ol,{start:"3",children:["\n",(0,a.jsxs)(o.li,{children:['Na \xe1rea "Attribute to Modify" (Atributo a modificar), seleccione um atributo na lista pendente e, em seguida, clique no bot\xe3o de r\xe1dio ',(0,a.jsx)(o.strong,{children:"True"})," ou ",(0,a.jsx)(o.strong,{children:"False"})," correspondente ao valor a aplicar."]}),"\n"]}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Nota:"}),' Se o atributo "Publicado em WSDL" for definido como Verdadeiro, s\xf3 ser\xe1 aplicado a m\xe9todos de projeto que j\xe1 contenham o atributo "Oferecido como um servi\xe7o Web".']}),"\n",(0,a.jsxs)(o.ol,{start:"4",children:["\n",(0,a.jsxs)(o.li,{children:["Clicar em ",(0,a.jsx)(o.strong,{children:"Aplicar"}),". A modifica\xe7\xe3o \xe9 aplicada instantaneamente a todos os m\xe9todos de projeto designados pela cadeia de caracteres introduzida."]}),"\n"]})]})}function l(e={}){const{wrapper:o}={...(0,d.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},295949:(e,o,s)=>{s.d(o,{A:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAIAAAA2bnI+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAACnSURBVDhP1ctPC4JAEAXw+YJlsML2dYMigkyDwIxAMkJz7Z9lZaceu7BevDSeGn6H3Zn3qKw+PB2a13vNQ+dbzdOhqS5vHjqeXjyUqicPHfLKSNJyqEdK6bpuXw8e+GKwR8CGoWlud0oIMdDjOE5PDx5mgxMCNgy0zx7GJs5ni/VoErTCCQEbBvJDZXirbOon43ncCicEbBia5q/+rBmEBQ8to4IjKr7x0nj9UM5kBgAAAABJRU5ErkJggg=="},28453:(e,o,s)=>{s.d(o,{R:()=>i,x:()=>t});var a=s(296540);const d={},r=a.createContext(d);function i(e){const o=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),a.createElement(r.Provider,{value:o},e.children)}}}]);