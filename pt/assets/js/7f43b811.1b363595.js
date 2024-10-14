"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40643],{779555:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>t,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(474848),r=a(28453);const s={id:"breakpoints",title:"Pontos de interrup\xe7\xe3o e captura de comandos"},d=void 0,i={id:"Debugging/breakpoints",title:"Pontos de interrup\xe7\xe3o e captura de comandos",description:"Vis\xe3o Geral",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/Debugging/breakpoints.md",sourceDirName:"Debugging",slug:"/Debugging/breakpoints",permalink:"/docs/pt/20-R5/Debugging/breakpoints",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Debugging%2Fbreakpoints.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"breakpoints",title:"Pontos de interrup\xe7\xe3o e captura de comandos"},sidebar:"docs",previous:{title:"Depurador",permalink:"/docs/pt/20-R5/Debugging/debugger"},next:{title:"Depura\xe7\xe3o a partir de m\xe1quinas remotas",permalink:"/docs/pt/20-R5/Debugging/debugging-remote"}},t={},c=[{value:"Vis\xe3o Geral",id:"vis\xe3o-geral",level:2},{value:"Breakpoints",id:"breakpoints",level:2},{value:"Propriedades do ponto de interrup\xe7\xe3o",id:"propriedades-do-ponto-de-interrup\xe7\xe3o",level:3},{value:"Pontos de interrup\xe7\xe3o na depura\xe7\xe3o remota",id:"pontos-de-interrup\xe7\xe3o-na-depura\xe7\xe3o-remota",level:3},{value:"Lista de pausas",id:"lista-de-pausas",level:3},{value:"Comandos de captura",id:"comandos-de-captura",level:2},{value:"Definir uma condi\xe7\xe3o para um ponto de interrup\xe7\xe3o no comando",id:"definir-uma-condi\xe7\xe3o-para-um-ponto-de-interrup\xe7\xe3o-no-comando",level:3}];function l(e){const o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"vis\xe3o-geral",children:"Vis\xe3o Geral"}),"\n",(0,n.jsx)(o.p,{children:"Os pontos de interrup\xe7\xe3o e a captura de comandos s\xe3o t\xe9cnicas de depura\xe7\xe3o muito eficientes. Ambas t\xeam o mesmo efeito: fazem uma pausa na execu\xe7\xe3o do c\xf3digo (e apresentam a janela do depurador, se ainda n\xe3o tiver sido apresentada) num passo pretendido."}),"\n",(0,n.jsx)(o.p,{children:"Os pontos de interrup\xe7\xe3o s\xe3o definidos em qualquer linha de c\xf3digo onde se pretenda que a execu\xe7\xe3o seja interrompida. \xc9 poss\xedvel associar uma condi\xe7\xe3o ao ponto de interrup\xe7\xe3o."}),"\n",(0,n.jsx)(o.p,{children:"A captura de um comando permite come\xe7ar a rastrear a execu\xe7\xe3o de qualquer processo assim que um comando for chamado por esse processo."}),"\n",(0,n.jsx)(o.h2,{id:"breakpoints",children:"Breakpoints"}),"\n",(0,n.jsx)(o.p,{children:"Para criar um ponto de interrup\xe7\xe3o, clique na margem esquerda do painel C\xf3digo-fonte no depurador ou no Editor de c\xf3digo."}),"\n",(0,n.jsxs)(o.p,{children:["En el siguiente ejemplo, se ha definido un punto de ruptura (la vi\xf1eta roja), en el depurador, en la l\xednea ",(0,n.jsx)(o.code,{children:"If ($in.dataClass#Null)"}),":"]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"break-point",src:a(935207).A+"",width:"672",height:"227"})}),"\n",(0,n.jsxs)(o.p,{children:["No exemplo acima, clicar no bot\xe3o ",(0,n.jsx)(o.a,{href:"./debugger.md/#no-trace",children:(0,n.jsx)(o.strong,{children:"No Trace"})})," retoma a execu\xe7\xe3o normal at\xe9 a linha marcada com o ponto de interrup\xe7\xe3o. Essa linha n\xe3o \xe9 executada - o usu\xe1rio \xe9 levado de volta ao modo de rastreio. Definir un punto de interrupci\xf3n m\xe1s all\xe1 del contador del programa y hacer clic en el bot\xf3n ",(0,n.jsx)(o.strong,{children:"No Trace"})," le permite saltar las partes del m\xe9todo que se est\xe1 rastreando."]}),"\n",(0,n.jsx)(o.p,{children:"Para remover um ponto de interrup\xe7\xe3o, clique no marcador correspondente."}),"\n",(0,n.jsx)(o.h3,{id:"propriedades-do-ponto-de-interrup\xe7\xe3o",children:"Propriedades do ponto de interrup\xe7\xe3o"}),"\n",(0,n.jsx)(o.p,{children:"Pode editar o comportamento de um ponto de interrup\xe7\xe3o utilizando a janela Propriedades do ponto de paragem:"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"breakpoint-properties",src:a(103935).A+"",width:"457",height:"337"})}),"\n",(0,n.jsxs)(o.p,{children:["Esta ventana est\xe1 disponible en el Editor de C\xf3digo o en la ",(0,n.jsx)(o.a,{href:"/docs/pt/20-R5/Debugging/debugger#source-code-pane",children:"ventana de c\xf3digo fuente"}),". Pode:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["haga clic derecho en una l\xednea y seleccione ",(0,n.jsx)(o.strong,{children:"Modificar el punto de interrupci\xf3n"})," en el men\xfa contextual, o"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"Alt+clic"})," (Windows) o ",(0,n.jsx)(o.code,{children:"Opci\xf3n+clic"})," (macOS) en el margen izquierdo."]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Se j\xe1 existir um ponto de paragem, a janela \xe9 apresentada para esse ponto de paragem. Caso contr\xe1rio, \xe9 criado um ponto de paragem e a janela \xe9 apresentada para o novo ponto de paragem criado."}),"\n",(0,n.jsx)(o.p,{children:"Segue-se uma descri\xe7\xe3o das propriedades:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Ubicaci\xf3n"}),": indica el nombre del m\xe9todo y el n\xfamero de l\xednea que se adjunta al punto de interrupci\xf3n."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Interrumpir cuando la siguiente expresi\xf3n es true"}),": puede crear los ",(0,n.jsx)(o.strong,{children:"puntos de interrupci\xf3n condicionales"})," introduciendo una f\xf3rmula 4D que devuelva ",(0,n.jsx)(o.code,{children:"True"})," o ",(0,n.jsx)(o.code,{children:"False"}),". Por ejemplo, inserte ",(0,n.jsx)(o.code,{children:"Records in selection(\\[aTable])=0"})," para asegurarse de que la ruptura se produce s\xf3lo si no hay ning\xfan registro seleccionado para la tabla [aTable]. Las condiciones de los puntos de interrupci\xf3n est\xe1n disponibles en la columna ",(0,n.jsx)(o.strong,{children:"Condici\xf3n"})," de la ",(0,n.jsx)(o.a,{href:"#break-list",children:"lista de interrupciones"}),"."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"N\xfamero de veces que hay que saltar antes de romper"}),": puede asociar un punto de ruptura a una l\xednea situada en una estructura de bucle (While, Repeat o For) o situada en una subrutina o funci\xf3n llamada desde dentro de un bucle."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Punto de ruptura desactivado"}),": si actualmente no necesita un punto de ruptura, pero podr\xeda necesitarlo m\xe1s adelante, puede desactivarlo temporalmente. Um ponto de interrup\xe7\xe3o desativado aparece como um tra\xe7o (-) em vez de um marcador (-)|."]}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"pontos-de-interrup\xe7\xe3o-na-depura\xe7\xe3o-remota",children:"Pontos de interrup\xe7\xe3o na depura\xe7\xe3o remota"}),"\n",(0,n.jsx)(o.p,{children:"A lista de pontos de paragem \xe9 armazenada localmente. No modo de depura\xe7\xe3o remota, se o depurador anexado for um 4D remoto, a lista de pontos de interrup\xe7\xe3o remota substitui temporariamente a lista de pontos de interrup\xe7\xe3o do servidor durante a sess\xe3o de depura\xe7\xe3o."}),"\n",(0,n.jsx)(o.p,{children:"A lista de pontos de paragem do servidor \xe9 automaticamente restaurada se voltar a ser o depurador ligado."}),"\n",(0,n.jsx)(o.h3,{id:"lista-de-pausas",children:"Lista de pausas"}),"\n",(0,n.jsxs)(o.p,{children:["A lista de interrup\xe7\xf5es \xe9 uma p\xe1gina do explorador do tempo de execu\xe7\xe3o que lhe permite gerir os pontos de interrup\xe7\xe3o criados na janela do depurador ou no editor de c\xf3digo. Para m\xe1s informaci\xf3n sobre el Explorador de ejecuci\xf3n, consulte su p\xe1gina dedicada en ",(0,n.jsx)(o.a,{href:"https://doc.4d.com/4Dv19/4D/19/Runtime-Explorer.200-5416614.en.html",children:"el manual de Dise\xf1o"}),"."]}),"\n",(0,n.jsx)(o.p,{children:"Para abrir a p\xe1gina da lista de pontos de interrup\xe7\xe3o:"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["En el ",(0,n.jsx)(o.strong,{children:"men\xfa Ejecutar"}),", haga clic en el ",(0,n.jsx)(o.strong,{children:"Explorador de ejecuci\xf3n..."})]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["Haga clic en la pesta\xf1a ",(0,n.jsx)(o.strong,{children:"Break"})," para mostrar la lista de pausas:"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"break-list-runtime-explorer",src:a(55866).A+"",width:"1928",height:"1160"})}),"\n",(0,n.jsx)(o.p,{children:"Usando esta janela, pode:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Definir las condiciones para los puntos de interrupci\xf3n en la columna ",(0,n.jsx)(o.strong,{children:"Condiciones"})]}),"\n",(0,n.jsx)(o.li,{children:"Ative ou desative os pontos de interrup\xe7\xe3o clicando nos marcadores na margem. Os pontos de interrup\xe7\xe3o desactivados apresentam marcadores transparentes"}),"\n",(0,n.jsxs)(o.li,{children:["Elimine los puntos de interrupci\xf3n presionando la tecla ",(0,n.jsx)(o.code,{children:"Delete"})," o ",(0,n.jsx)(o.code,{children:"Backspace"}),", o haciendo clic en el bot\xf3n ",(0,n.jsx)(o.strong,{children:"Delete"})," bajo la lista."]}),"\n",(0,n.jsx)(o.li,{children:"Abrir os m\xe9todos onde se encontram os pontos de interrup\xe7\xe3o fazendo duplo clique em qualquer linha da lista"}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"N\xe3o \xe9 poss\xedvel adicionar novos pontos de paragem a partir desta janela. Os pontos de paragem s\xf3 podem ser criados a partir da janela do depurador ou do editor de c\xf3digo."}),"\n",(0,n.jsx)(o.h2,{id:"comandos-de-captura",children:"Comandos de captura"}),"\n",(0,n.jsxs)(o.p,{children:["La pesta\xf1a ",(0,n.jsx)(o.strong,{children:"Catch"})," del Explorador de ejecuci\xf3n le permite a\xf1adir pausas adicionales a su c\xf3digo mediante la captura de llamadas a comandos 4D. Ao contr\xe1rio de um ponto de interrup\xe7\xe3o, que est\xe1 localizado em um m\xe9todo particular do projeto (e, portanto, desencadeia uma exce\xe7\xe3o de rastreamento apenas quando \xe9 alcan\xe7ado), o escopo de captura de um comando inclui todos os processos que executam o c\xf3digo 4D e chamam esse comando."]}),"\n",(0,n.jsxs)(o.p,{children:["A captura de um comando \xe9 uma forma conveniente de rastrear grandes por\xe7\xf5es de c\xf3digo sem definir pontos de interrup\xe7\xe3o em locais arbitr\xe1rios. Por ejemplo, si un registro que no deber\xeda ser eliminado se borra despu\xe9s de haber ejecutado uno o varios procesos, puede intentar reducir el campo de su investigaci\xf3n v\xeda puntos de interrupci\xf3n en los comandos como ",(0,n.jsx)(o.code,{children:"DELETE RECORD"})," and ",(0,n.jsx)(o.code,{children:"DELETE SELECTION"}),". Cada vez que estes comandos forem chamados, \xe9 poss\xedvel verificar se o registo em quest\xe3o foi eliminado e, assim, isolar a parte defeituosa do c\xf3digo."]}),"\n",(0,n.jsx)(o.p,{children:"Pode combinar pontos de interrup\xe7\xe3o e captura de comandos."}),"\n",(0,n.jsx)(o.p,{children:"Para abrir a p\xe1gina Comandos apanhados:"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["Elija ",(0,n.jsx)(o.strong,{children:"Ejecutar"})," > ",(0,n.jsx)(o.strong,{children:"Explorador de ejecuci\xf3n..."})," para abrir el Explorador de ejecuci\xf3n."]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["Haga clic en ",(0,n.jsx)(o.strong,{children:"Catch"})," para mostrar la lista de puntos de interrupci\xf3n en los comandos:"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"runtime-explorer-window",src:a(195231).A+"",width:"868",height:"479"})}),"\n",(0,n.jsx)(o.p,{children:"Esta p\xe1gina lista os comandos que devem ser capturados durante a execu\xe7\xe3o. \xc9 composto por duas colunas:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"A coluna da esquerda mostra o estado de ativa\xe7\xe3o/desativa\xe7\xe3o do ponto de interrup\xe7\xe3o no comando, seguido pelo nome do comando"}),"\n",(0,n.jsx)(o.li,{children:"A coluna da direita mostra a condi\xe7\xe3o associada ao ponto de interrup\xe7\xe3o do comando, se houver"}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Para adicionar um ponto de interrup\xe7\xe3o personalizado:"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["Haga clic en el bot\xf3n ",(0,n.jsx)(o.strong,{children:"Add New Catch"})," (en forma de +) situado debajo de la lista. Se a\xf1ade una nueva entrada a la lista con el comando ",(0,n.jsx)(o.code,{children:"ALERT"})," por defecto"]}),"\n",(0,n.jsxs)(o.li,{children:["Haga clic en la etiqueta ",(0,n.jsx)(o.strong,{children:"ALERT"}),", escriba el nombre del comando en el cual desea poner un punto de interrupci\xf3n y pulse ",(0,n.jsx)(o.strong,{children:"Enter"}),"."]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Para ativar ou desativar um ponto de interrup\xe7\xe3o de ordem, clique no ponto (-) na frente da etiqueta do comando.\nA bala \xe9 transparente quando o controle \xe9 desativado."}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"Desativar um ponto de interrup\xe7\xe3o no comando tem praticamente o mesmo efeito que exclu\xed-lo. Durante a execu\xe7\xe3o, o depurador quase n\xe3o passa tempo na entrada. A vantagem de desativar uma entrada \xe9 que n\xe3o tem de a recriar quando voltar a precisar dela."}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Para remover um ponto de interrup\xe7\xe3o no comando:"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsx)(o.li,{children:"Seleccione um comando na lista."}),"\n",(0,n.jsxs)(o.li,{children:["Presione la tecla ",(0,n.jsx)(o.strong,{children:"Backspace"})," o ",(0,n.jsx)(o.strong,{children:"Delete"})," en su teclado o haga clic en el bot\xf3n ",(0,n.jsx)(o.strong,{children:"Delete"})," bajo la lista (",(0,n.jsx)(o.strong,{children:"Delete All"})," elimina todos los comandos en la lista)."]}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"definir-uma-condi\xe7\xe3o-para-um-ponto-de-interrup\xe7\xe3o-no-comando",children:"Definir uma condi\xe7\xe3o para um ponto de interrup\xe7\xe3o no comando"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsx)(o.li,{children:"Clique na entrada na coluna da direita"}),"\n",(0,n.jsx)(o.li,{children:"Introduza uma f\xf3rmula 4D (express\xe3o, chamada comando ou m\xe9todo de projeto) que devolve um valor booleano."}),"\n"]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"Para remover uma condi\xe7\xe3o, elimine a sua f\xf3rmula."}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["A adi\xe7\xe3o de condi\xe7\xf5es permite-lhe parar a execu\xe7\xe3o quando o comando \xe9 invocado apenas se a condi\xe7\xe3o for cumprida. Por exemplo, se voc\xea associar a condi\xe7\xe3o ",(0,n.jsx)(o.code,{children:"Records in selection(\\[Emp]>10)"})," ao ponto de interrup\xe7\xe3o do comando ",(0,n.jsx)(o.code,{children:"DELETE SELECTION"}),", o c\xf3digo n\xe3o ser\xe1 interrompido durante a execu\xe7\xe3o do comando ",(0,n.jsx)(o.code,{children:"DELETE SELECTION"})," se a sele\xe7\xe3o atual da tabela [Emp] contiver apenas 9 registros (ou menos)."]}),"\n",(0,n.jsx)(o.p,{children:"A adi\xe7\xe3o de condi\xe7\xf5es a pontos de interrup\xe7\xe3o em comandos torna a execu\xe7\xe3o mais lenta, pois a condi\xe7\xe3o precisa ser avaliada toda vez que uma exce\xe7\xe3o \xe9 encontrada. Por outro lado, adicionar condi\xe7\xf5es acelera o processo de depura\xe7\xe3o, porque 4D automaticamente ignora ocorr\xeancias que n\xe3o correspondem \xe0s condi\xe7\xf5es."})]})}function u(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},55866:(e,o,a)=>{a.d(o,{A:()=>n});const n=a.p+"assets/images/break-list-b89efee46224eee9896fd3573d311ece.png"},935207:(e,o,a)=>{a.d(o,{A:()=>n});const n=a.p+"assets/images/break-dac3aff61c89edd51b1dc219bcce2aaa.png"},103935:(e,o,a)=>{a.d(o,{A:()=>n});const n="data:image/png;base64,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"},195231:(e,o,a)=>{a.d(o,{A:()=>n});const n=a.p+"assets/images/catch-command-fd399840ad542aad76ae489a5e9de658.png"},28453:(e,o,a)=>{a.d(o,{R:()=>d,x:()=>i});var n=a(296540);const r={},s=n.createContext(r);function d(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);