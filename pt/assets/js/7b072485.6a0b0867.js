"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93968],{108135:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>d,metadata:()=>n,toc:()=>t});var a=s(474848),r=s(28453);const d={id:"processes",title:"Processos e Workers"},c=void 0,n={id:"Develop/processes",title:"Processos e Workers",description:"Multi-tarefa no 4D \xe9 a habilidade de ter v\xe1rias opera\xe7\xf5es que s\xe3o executadas simultaneamente. Essas opera\xe7\xf5es s\xe3o chamadas processos. Processos m\xfaltiplos s\xe3o como m\xfaltiplos usu\xe1rios no mesmo computador, cada um trabalhando em sua pr\xf3pria tarefa. Isto significa, essencialmente, que cada m\xe9todo pode ser executado como uma tarefa distinta de base de dados.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/Develop/processes.md",sourceDirName:"Develop",slug:"/Develop/processes",permalink:"/docs/pt/20-R5/Develop/processes",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Develop%2Fprocesses.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"processes",title:"Processos e Workers"},sidebar:"docs",previous:{title:"ZIPFolder",permalink:"/docs/pt/20-R5/API/ZipFolderClass"},next:{title:"Processos preemptivos",permalink:"/docs/pt/20-R5/Develop/preemptive-processes"}},i={},t=[{value:"Criar e limpar processos",id:"criar-e-limpar-processos",level:2},{value:"Elementos de um processo",id:"elementos-de-um-processo",level:2},{value:"Elementos da linguagem",id:"elementos-da-linguagem",level:3},{value:"Elementos da interface",id:"elementos-da-interface",level:3},{value:"Processos globais e locais",id:"processos-globais-e-locais",level:2},{value:"4D Server",id:"4d-server",level:3},{value:"Processos Worker",id:"processos-worker",level:2},{value:"Usando workers",id:"usando-workers",level:3},{value:"Identifica\xe7\xe3o dos processos Worker",id:"identifica\xe7\xe3o-dos-processos-worker",level:3},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:3}];function p(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.p,{children:["Multi-tarefa no 4D \xe9 a habilidade de ter v\xe1rias opera\xe7\xf5es que s\xe3o executadas simultaneamente. Essas opera\xe7\xf5es s\xe3o chamadas ",(0,a.jsx)(o.strong,{children:"processos"}),". Processos m\xfaltiplos s\xe3o como m\xfaltiplos usu\xe1rios no mesmo computador, cada um trabalhando em sua pr\xf3pria tarefa. Isto significa, essencialmente, que cada m\xe9todo pode ser executado como uma tarefa distinta de base de dados."]}),"\n",(0,a.jsxs)(o.p,{children:["Se voc\xea escrever c\xf3digo seguro para threads, voc\xea pode criar ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R5/Develop/preemptive-processes",children:(0,a.jsx)(o.strong,{children:"processos preemptivos"})})," que ser\xe3o capazes de aproveitar o poder de processamento de computadores multi-core em suas aplica\xe7\xf5es compiladas, para execu\xe7\xe3o mais r\xe1pida."]}),"\n",(0,a.jsx)(o.admonition,{type:"note",children:(0,a.jsxs)(o.p,{children:["A aplica\xe7\xe3o 4D cria processos para suas pr\xf3prias necessidades, por exemplo, o processo Principal para gerenciar as janelas de exibi\xe7\xe3o da interface do usu\xe1rio, o processo Design para gerenciar as janelas e editores do ambiente de design (observe que ambos s\xe3o ",(0,a.jsx)(o.a,{href:"#worker-processes",children:"processos de trabalho"}),"), o processo Servidor Web, o processo Gerenciador de Cache, o processo de Indexa\xe7\xe3o ou o processo Gerenciador de Eventos."]})}),"\n",(0,a.jsx)(o.h2,{id:"criar-e-limpar-processos",children:"Criar e limpar processos"}),"\n",(0,a.jsx)(o.p,{children:"Existem v\xe1rias maneiras de criar um processo:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["Execute um m\xe9todo no ambiente de Design ap\xf3s marcar a caixa de sele\xe7\xe3o ",(0,a.jsx)(o.strong,{children:"Novo Processo"}),' na caixa de di\xe1logo "Executar M\xe9todo". O m\xe9todo escolhido na caixa de di\xe1logo Executar M\xe9todo \xe9 o m\xe9todo do processo.']}),"\n",(0,a.jsxs)(o.li,{children:["Use o comando [",(0,a.jsx)(o.code,{children:"New process"}),"] (",(0,a.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page317.html",children:"https://doc.4d.com/4dv20/help/command/en/page317.html"}),"). O m\xe9todo passado como par\xe2metro para o comando ",(0,a.jsx)(o.code,{children:"Novo processo"})," \xe9 o m\xe9todo de processo."]}),"\n",(0,a.jsxs)(o.li,{children:["Use o comando [",(0,a.jsx)(o.code,{children:"Execute on server"}),"] (",(0,a.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page373.html",children:"https://doc.4d.com/4dv20/help/command/en/page373.html"}),") para criar um procedimento armazenado no servidor. O m\xe9todo passado como par\xe2metro do comando \xe9 o m\xe9todo processo."]}),"\n",(0,a.jsxs)(o.li,{children:["Use o comando [",(0,a.jsx)(o.code,{children:"CALL WORKER"}),"] (",(0,a.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1389.html",children:"https://doc.4d.com/4dv20/help/command/en/page1389.html"}),"). Se o processo worker ainda n\xe3o existir, ser\xe1 criado."]}),"\n"]}),"\n",(0,a.jsx)(o.admonition,{type:"note",children:(0,a.jsxs)(o.p,{children:["Em aplicativos de desktop, os processos podem ser executados escolhendo comandos de menu. No ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R5/Menus/creating",children:"Editor de Barra de Menu"}),", selecione o comando de menu e marque a caixa de sele\xe7\xe3o ",(0,a.jsx)(o.strong,{children:"Iniciar um Novo Processo"}),". O m\xe9todo associado ao comando do menu \xe9 o m\xe9todo processo."]})}),"\n",(0,a.jsx)(o.p,{children:"Um processo pode ser liberado sob as seguintes condi\xe7\xf5es (as primeiras duas condi\xe7\xf5es s\xe3o autom\xe1ticas):"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"Quando o m\xe9todo processo termina de ser executado"}),"\n",(0,a.jsx)(o.li,{children:"Quando o usu\xe1rio sai da aplica\xe7\xe3o"}),"\n",(0,a.jsxs)(o.li,{children:["Se voc\xea parar o processo procedimentalmente ou usar o bot\xe3o ",(0,a.jsx)(o.strong,{children:"Abortar"})," no Depurador ou no Explorador de Tempo de Execu\xe7\xe3o"]}),"\n",(0,a.jsxs)(o.li,{children:["Se voc\xea chamar o comando ",(0,a.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1390.html",children:(0,a.jsx)(o.code,{children:"KILL WORKER"})})," (para excluir apenas um processo de trabalhador)."]}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:'Um processo pode criar outro processo. Os processos n\xe3o s\xe3o organizados hierarquicamente\u2014todos os processos s\xe3o iguais, independentemente do processo do qual foram criados. Uma vez que o processo "pai" cria um processo "filho", o processo filho continuar\xe1 independentemente de o processo pai ainda estar em execu\xe7\xe3o.'}),"\n",(0,a.jsx)(o.h2,{id:"elementos-de-um-processo",children:"Elementos de um processo"}),"\n",(0,a.jsx)(o.p,{children:"Cada processo cont\xe9m elementos espec\xedficos que podem ser tratados independentemente de outros processos."}),"\n",(0,a.jsx)(o.h3,{id:"elementos-da-linguagem",children:"Elementos da linguagem"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["Vari\xe1veis: Cada processo tem suas pr\xf3prias ",(0,a.jsx)(o.a,{href:"../Concepts/variables#process-variables",children:"vari\xe1veis de processo"}),". Vari\xe1veis de processo s\xe3o reconhecidas apenas dentro do dom\xednio de seu processo nativo."]}),"\n",(0,a.jsxs)(o.li,{children:["Conjuntos de processo: cada processo tem seus pr\xf3prios conjuntos de processos. ",(0,a.jsx)(o.code,{children:"LockedSet"})," \xe9 um conjunto de processos. Os conjuntos processo s\xe3o apagados assim que o m\xe9todo processo termina."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.a,{href:"../Concepts/error-handling#installing-an-error-handling-method",children:"M\xe9todo de tratamento de erros"}),": Cada processo pode ter seu pr\xf3prio m\xe9todo de tratamento de erros."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.a,{href:"../Depuring/debugger#calling-the-debugger",children:"Janela do Depurador"}),": Cada processo pode ter sua pr\xf3pria janela do Depurador."]}),"\n"]}),"\n",(0,a.jsx)(o.h3,{id:"elementos-da-interface",children:"Elementos da interface"}),"\n",(0,a.jsxs)(o.p,{children:["Elementos de interface s\xe3o usados em ",(0,a.jsx)(o.a,{href:"../category/desktop-applications",children:"Aplica\xe7\xf5es para Desktop"}),". Eles consistem nos seguintes:"]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.a,{href:"/docs/pt/20-R5/Menus/creating",children:"Barra de menus"}),": cada processo pode ter sua pr\xf3pria barra de menu atual. A barra de menu do processo ativo \xe9 a barra de menu atual para o aplicativo."]}),"\n",(0,a.jsx)(o.li,{children:"Um ou mais janelas: Cada processo pode ter mais de uma janela aberta simultaneamente. Por outro lado, alguns processos n\xe3o t\xeam nenhuma janela."}),"\n",(0,a.jsx)(o.li,{children:"Uma janela ativa (em primeiro plano): Mesmo que um processo possa ter v\xe1rias janelas abertas simultaneamente, cada processo tem apenas uma janela ativa. Para ter mais de uma janela ativa, voc\xea deve iniciar mais de um processo."}),"\n",(0,a.jsx)(o.li,{children:"Formul\xe1rios de entrada e sa\xedda: Os formul\xe1rios de entrada e sa\xedda padr\xe3o podem ser definidos processualmente para cada tabela em cada processo."}),"\n"]}),"\n",(0,a.jsx)(o.admonition,{type:"info",children:(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["Por padr\xe3o, os processos n\xe3o incluem barras de menu, o que significa que os atalhos do menu ",(0,a.jsx)(o.strong,{children:"Editar"})," (em particular, cortar/copiar/colar) n\xe3o est\xe3o dispon\xedveis nas janelas de processo. Quando voc\xea chama caixas de di\xe1logo ou editores do 4D (editor de formul\xe1rios, editor de consultas, Requisi\xe7\xe3o, etc.) de um processo, se voc\xea deseja que o usu\xe1rio possa se beneficiar de atalhos de teclado como copiar/colar, voc\xea precisa garantir que o equivalente a um menu ",(0,a.jsx)(o.strong,{children:"Editar"})," esteja instalado no processo."]}),"\n",(0,a.jsxs)(o.li,{children:[(0,a.jsx)(o.a,{href:"/docs/pt/20-R5/Develop/preemptive-processes",children:"Processos preemptivos"})," e processos executados no servidor (procedimentos armazenados) n\xe3o devem conter elementos da interface."]}),"\n"]})}),"\n",(0,a.jsx)(o.admonition,{type:"note",children:(0,a.jsxs)(o.p,{children:["Cada processo tamb\xe9m possui uma sele\xe7\xe3o atual e registro atual separados por tabela. Para obter mais informa\xe7\xf5es sobre esses conceitos, consulte [doc.4d.com] (",(0,a.jsx)(o.a,{href:"https://doc.4d.com/4Dv20/4D/20.1/Displaying-and-selecting-records.300-6602144.en.html",children:"https://doc.4d.com/4Dv20/4D/20.1/Displaying-and-selecting-records.300-6602144.en.html"}),")."]})}),"\n",(0,a.jsx)(o.h2,{id:"processos-globais-e-locais",children:"Processos globais e locais"}),"\n",(0,a.jsx)(o.p,{children:"Os processos podem ser globais ou locais em seu escopo. Por padr\xe3o, todos os processos s\xe3o globais."}),"\n",(0,a.jsx)(o.p,{children:"Processos globais podem realizar qualquer opera\xe7\xe3o, incluindo o acesso e manipula\xe7\xe3o de dados. Geralmente, voc\xea desejar\xe1 usar processos globais. Processos locais devem ser utilizados apenas para opera\xe7\xf5es que n\xe3o acessam dados. Por exemplo, voc\xea pode usar um processo local para executar um m\xe9todo de manipula\xe7\xe3o de eventos ou para controlar elementos da interface como janelas flutuantes."}),"\n",(0,a.jsx)(o.p,{children:"Voc\xea especifica que um processo tem escopo local atrav\xe9s de seu nome. O nome do processo local deve come\xe7ar com um sinal de d\xf3lar ($)."}),"\n",(0,a.jsx)(o.admonition,{type:"warning",children:(0,a.jsx)(o.p,{children:"Se voc\xea tentar acessar os dados de um processo local, acess\xe1-lo atrav\xe9s do processo principal (processo #1), risco entra em conflito com opera\xe7\xf5es realizadas dentro desse processo."})}),"\n",(0,a.jsx)(o.h3,{id:"4d-server",children:"4D Server"}),"\n",(0,a.jsxs)(o.p,{children:["Usar processos locais no lado remoto para opera\xe7\xf5es que n\xe3o requerem acesso a dados reserva mais tempo de processamento para tarefas intensivas do servidor. Quando voc\xea cria um processo local para o cliente (usando ",(0,a.jsx)(o.code,{children:"Novo processo"}),", por exemplo), ele s\xf3 existe no lado remoto."]}),"\n",(0,a.jsx)(o.p,{children:'Quando voc\xea cria um processo global no cliente, um processo "g\xeameo" \xe9 criado no servidor, consumindo assim recursos do servidor para lidar com o acesso aos dados e o contexto do banco de dados. No entanto, por motivo de otimiza\xe7\xe3o, o processo duplicado \xe9 criado apenas se necess\xe1rio, ou seja, na primeira vez em que o processo global precisa acessar dados.'}),"\n",(0,a.jsx)(o.h2,{id:"processos-worker",children:"Processos Worker"}),"\n",(0,a.jsx)(o.p,{children:"Usar um processo de trabalho \xe9 uma maneira simples e poderosa de trocar informa\xe7\xf5es entre processos. Esta funcionalidade \xe9 baseada em um sistema de mensagens ass\xedncrono que permite que processos e formul\xe1rios sejam chamados e solicitados a executar m\xe9todos com par\xe2metros em seu pr\xf3prio contexto."}),"\n",(0,a.jsxs)(o.p,{children:['Um trabalhador pode ser "contratado" por qualquer processo (usando o comando ',(0,a.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1389.html",children:(0,a.jsx)(o.code,{children:"CALL WORKER"})}),") para executar m\xe9todos do projeto com par\xe2metros em seu pr\xf3prio contexto, permitindo assim o acesso a informa\xe7\xf5es compartilhadas."]}),"\n",(0,a.jsx)(o.admonition,{type:"info",children:(0,a.jsxs)(o.p,{children:["No aplicativo Desktop, um m\xe9todo de projeto tamb\xe9m pode ser executado com par\xe2metros no contexto de qualquer forma usando o comando ",(0,a.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1391.html",children:(0,a.jsx)(o.code,{children:"CALL FORM"})}),"."]})}),"\n",(0,a.jsx)(o.p,{children:"Esta funcionalidade aborda as seguintes necessidades em rela\xe7\xe3o \xe0 comunica\xe7\xe3o de interprocessos 4D:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["Uma vez que s\xe3o suportados tanto por processos cooperativos quanto preemptivos, eles s\xe3o a solu\xe7\xe3o perfeita para comunica\xe7\xe3o entre processos em ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R5/Develop/preemptive-processes",children:"processos preemptivos"})," (",(0,a.jsx)(o.a,{href:"https://doc.4d.com/4Dv20/4D/20/Deprecated-or-Removed-Features.100-6259787.en.html#5868705",children:"vari\xe1veis entre processos est\xe3o obsoletas"})," e n\xe3o s\xe3o permitidas em processos preemptivos)."]}),"\n",(0,a.jsx)(o.li,{children:"Eles fornecem uma alternativa simples aos sem\xe1foros, que podem ser complicados de configurar e complexos de usar"}),"\n"]}),"\n",(0,a.jsx)(o.admonition,{type:"note",children:(0,a.jsxs)(o.p,{children:["Embora tenham sido projetados principalmente para comunica\xe7\xe3o entre processos no contexto de processos preemptivos, ",(0,a.jsx)(o.code,{children:"CALL WORKER"})," e ",(0,a.jsx)(o.code,{children:"CALL FORM"})," podem ser usados com processos cooperativos."]})}),"\n",(0,a.jsx)(o.h3,{id:"usando-workers",children:"Usando workers"}),"\n",(0,a.jsx)(o.p,{children:"Um worker \xe9 usado para solicitar a um processo que execute m\xe9todos projeto. Um worker consiste de:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["um nome \xfanico (",(0,a.jsx)(o.em,{children:"warning: o nome diferencia mai\xfasculas de min\xfasculas"}),"), tamb\xe9m usado para nomear seu processo associado"]}),"\n",(0,a.jsx)(o.li,{children:"um processo associado, que pode ou n\xe3o existir em um determinado momento"}),"\n",(0,a.jsx)(o.li,{children:"uma caixa de mensagem"}),"\n",(0,a.jsx)(o.li,{children:"um m\xe9todo de inicializa\xe7\xe3o (opcional)"}),"\n"]}),"\n",(0,a.jsxs)(o.p,{children:["Voc\xea pede a um trabalhador para executar um m\xe9todo de projeto chamando o comando ",(0,a.jsx)(o.code,{children:"CALL WORKER"}),". O trabalhador e sua caixa de mensagens s\xe3o criados no primeiro uso; seu processo associado tamb\xe9m \xe9 lan\xe7ado automaticamente no primeiro uso. Se o processo do trabalhador morrer em seguida, a caixa de mensagem permanece aberta e qualquer nova mensagem na caixa iniciar\xe1 um novo processo do trabalhador."]}),"\n",(0,a.jsx)(o.p,{children:"A anima\xe7\xe3o a seguir ilustra esta sequ\xeancia:"}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{src:s(60958).A+"",width:"1128",height:"684"})}),"\n",(0,a.jsxs)(o.p,{children:["Ao contr\xe1rio de um processo criado com o comando ",(0,a.jsx)(o.code,{children:"Novo processo"}),", um processo de trabalhador ",(0,a.jsx)(o.strong,{children:"permanece ativo ap\xf3s a conclus\xe3o do m\xe9todo de execu\xe7\xe3o do processo"}),". Isto significa que todas as execu\xe7\xf5es de m\xe9todos para o mesmo trabalhador ser\xe3o executadas no mesmo processo, que mant\xe9m todas as informa\xe7\xf5es do estado do processo (vari\xe1veis do processo, registro atual e sele\xe7\xe3o atual, etc.). Consequentemente, os m\xe9todos executados sucessivamente ter\xe3o acesso e compartilhar\xe3o as mesmas informa\xe7\xf5es, permitindo a comunica\xe7\xe3o entre os processos. A caixa de mensagens do worker lida com chamadas sucessivas de forma ass\xedncrona."]}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.code,{children:"CALL WORKER"})," encapsula tanto o nome do m\xe9todo quanto os argumentos de comando em uma mensagem que \xe9 postada na caixa de mensagem do worker. O processo do trabalhador \xe9 ent\xe3o iniciado, se j\xe1 n\xe3o existe e solicitado a executar a mensagem. Isso significa que ",(0,a.jsx)(o.code,{children:"CALL WORKER"})," geralmente retornar\xe1 antes que o m\xe9todo seja realmente executado (o processamento \xe9 ass\xedncrono). Por esse motivo, ",(0,a.jsx)(o.code,{children:"CALL WORKER"})," n\xe3o retorna nenhum valor. Se voc\xea precisa de um trabalhador para enviar informa\xe7\xf5es de volta para o processo que o chamou (callback), voc\xea precisa usar ",(0,a.jsx)(o.code,{children:"CALL WORKER"})," novamente para passar as informa\xe7\xf5es necess\xe1rias para o chamador. \xc9 claro que, nesse caso, o pr\xf3prio chamador deve ser um worker."]}),"\n",(0,a.jsxs)(o.p,{children:["N\xe3o \xe9 poss\xedvel usar ",(0,a.jsx)(o.code,{children:"CALL WORKER"})," para executar um m\xe9todo em um processo criado pelo comando ",(0,a.jsx)(o.code,{children:"Novo processo"}),". Apenas os processos trabalhadores possuem uma caixa de mensagens e podem, portanto, serem chamados pelo ",(0,a.jsx)(o.code,{children:"CALL WORKER"}),". Note that a process created by ",(0,a.jsx)(o.code,{children:"Novo processo"})," can call a worker, but cannot be called back."]}),"\n",(0,a.jsxs)(o.p,{children:["Os processos trabalhadores podem ser criados no 4D Server por meio de procedimentos armazenados: por exemplo, voc\xea pode usar o comando ",(0,a.jsx)(o.code,{children:"Executar no servidor"})," para executar um m\xe9todo que chama o comando ",(0,a.jsx)(o.code,{children:"CALL WORKER"}),"."]}),"\n",(0,a.jsxs)(o.p,{children:["Um processo de trabalho \xe9 encerrado por meio de uma chamada ao comando ",(0,a.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1390.html",children:(0,a.jsx)(o.code,{children:"KILL WORKER"})}),", que esvazia a caixa de mensagens do trabalhador e solicita ao processo associado que pare de processar mensagens e termine sua execu\xe7\xe3o atual assim que a tarefa atual for conclu\xedda."]}),"\n",(0,a.jsxs)(o.p,{children:["O m\xe9todo de inicializa\xe7\xe3o de um worker \xe9 o m\xe9todo usado para criar o trabalhador (na primeira utiliza\xe7\xe3o). Se ",(0,a.jsx)(o.code,{children:"CALL WORKER"})," for chamado com um par\xe2metro ",(0,a.jsx)(o.em,{children:"method"})," vazio, ent\xe3o o m\xe9todo de inicializa\xe7\xe3o \xe9 automaticamente reutilizado como m\xe9todo para executar."]}),"\n",(0,a.jsxs)(o.p,{children:["O processo principal criado pelo 4D ao abrir um banco de dados para os modos de usu\xe1rio e aplicativo \xe9 um processo de trabalhador e pode ser chamado usando ",(0,a.jsx)(o.code,{children:"CALL WORKER"}),". Observe que o nome do processo principal pode variar dependendo do idioma de localiza\xe7\xe3o do 4D, mas ele sempre tem o n\xfamero de processo 1; como resultado, \xe9 mais conveniente design\xe1-lo pelo n\xfamero de processo em vez do nome do processo ao chamar ",(0,a.jsx)(o.code,{children:"CALL WORKER"}),"."]}),"\n",(0,a.jsx)(o.h3,{id:"identifica\xe7\xe3o-dos-processos-worker",children:"Identifica\xe7\xe3o dos processos Worker"}),"\n",(0,a.jsxs)(o.p,{children:["Todos os processos trabalhadores, exceto o processo principal, t\xeam o tipo de processo ",(0,a.jsx)(o.code,{children:"processo trabalhador"})," (5) retornado pelo comando ",(0,a.jsx)(o.a,{href:"https://doc.4d.com/4dv20/help/command/en/page336.html",children:(0,a.jsx)(o.code,{children:"PROCESS PROPERTIES"})}),"."]}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.a,{href:"../ServerWindow/processes#process-type",children:"\xcdcones espec\xedficos"})," identificam os processos worker."]}),"\n",(0,a.jsx)(o.h3,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,a.jsxs)(o.p,{children:["Para obter mais informa\xe7\xf5es, consulte ",(0,a.jsx)(o.a,{href:"https://blog.4d.com/4d-summit-2016-laurent-esnault-presents-workers-and-ui-in-preemptive-mode/",children:"este post"})," sobre como usar os workers."]})]})}function m(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},60958:(e,o,s)=>{s.d(o,{A:()=>a});const a=s.p+"assets/images/WorkerAnimation-1bf9fb3826432ab21e7c2bec57036409.gif"},28453:(e,o,s)=>{s.d(o,{R:()=>c,x:()=>n});var a=s(296540);const r={},d=a.createContext(r);function c(e){const o=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function n(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),a.createElement(d.Provider,{value:o},e.children)}}}]);