"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95316],{906838:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>t,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var a=o(474848),n=o(28453);const s={id:"basics",title:"Depura\xe7\xe3o"},i=void 0,d={id:"Debugging/basics",title:"Depura\xe7\xe3o",description:"Os erros s\xe3o comuns. Seria incomum escrever um n\xfamero substancial de linhas de c\xf3digo sem gerar quaisquer erros. Por outro lado, tratar e/ou corrigir erros tamb\xe9m \xe9 normal!",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/Debugging/basics.md",sourceDirName:"Debugging",slug:"/Debugging/basics",permalink:"/docs/pt/Debugging/basics",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Debugging%2Fbasics.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"basics",title:"Depura\xe7\xe3o"},sidebar:"docs",previous:{title:"Compila\xe7\xe3o",permalink:"/docs/pt/Project/compiler"},next:{title:"Depurador",permalink:"/docs/pt/Debugging/debugger"}},t={},c=[{value:"Tipos de erro",id:"tipos-de-erro",level:2},{value:"Erros de dactilografia",id:"erros-de-dactilografia",level:3},{value:"Erros de sintaxe",id:"erros-de-sintaxe",level:3},{value:"Erros ambientais",id:"erros-ambientais",level:3},{value:"Erros de concep\xe7\xe3o ou de l\xf3gica",id:"erros-de-concep\xe7\xe3o-ou-de-l\xf3gica",level:3},{value:"Erros de execu\xe7\xe3o",id:"erros-de-execu\xe7\xe3o",level:3},{value:"Janela de erro sint\xe1ctico",id:"janela-de-erro-sint\xe1ctico",level:2},{value:"Depurador",id:"depurador",level:2},{value:"Rupturas",id:"rupturas",level:2}];function l(e){const r={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"Os erros s\xe3o comuns. Seria incomum escrever um n\xfamero substancial de linhas de c\xf3digo sem gerar quaisquer erros. Por outro lado, tratar e/ou corrigir erros tamb\xe9m \xe9 normal!"}),"\n",(0,a.jsx)(r.p,{children:"O ambiente de desenvolvimento 4D fornece v\xe1rias ferramentas de depura\xe7\xe3o para todos os tipos de erros."}),"\n",(0,a.jsx)(r.h2,{id:"tipos-de-erro",children:"Tipos de erro"}),"\n",(0,a.jsx)(r.h3,{id:"erros-de-dactilografia",children:"Erros de dactilografia"}),"\n",(0,a.jsx)(r.p,{children:"Os erros de digita\xe7\xe3o s\xe3o detectados pelo editor de c\xf3digo. S\xe3o exibidos em vermelho e s\xe3o fornecidas informa\xe7\xf5es adicionais na parte inferior da janela. Aqui est\xe1 um erro de dactilografia:"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"break-point",src:o(319266).A+"",width:"1824",height:"980"})}),"\n",(0,a.jsx)(r.p,{children:"Esses erros de digita\xe7\xe3o geralmente causam erros de sintaxe (na imagem acima, o nome da tabela \xe9 desconhecido). Obt\xe9m a descri\xe7\xe3o do erro quando validar a linha de c\xf3digo. Quando isso ocorrer, corrija o erro de digita\xe7\xe3o e digite Enter para validar a corre\xe7\xe3o."}),"\n",(0,a.jsx)(r.h3,{id:"erros-de-sintaxe",children:"Erros de sintaxe"}),"\n",(0,a.jsxs)(r.p,{children:["Alguns erros s\xf3 podem ser detectados quando o m\xe9todo for executado. La ",(0,a.jsx)(r.a,{href:"#syntax-error-window",children:"ventana de error de sint\xe1xis"})," aparece cuando ocurre un error durante la ejecuci\xf3n del c\xf3digo. Por exemplo:"]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"syntax-error",src:o(224494).A+"",width:"642",height:"552"})}),"\n",(0,a.jsxs)(r.p,{children:["Expanda el \xe1rea ",(0,a.jsx)(r.strong,{children:"Detalles"})," para mostrar el \xfaltimo error y su n\xfamero."]}),"\n",(0,a.jsx)(r.h3,{id:"erros-ambientais",children:"Erros ambientais"}),"\n",(0,a.jsxs)(r.p,{children:["Ocasionalmente, pode n\xe3o haver mem\xf3ria suficiente para criar um BLOB. Ou, quando se acede a um documento no disco, o documento pode n\xe3o existir ou pode j\xe1 estar aberto por outra aplica\xe7\xe3o. Estes erros ambientais n\xe3o ocorrem diretamente devido ao seu c\xf3digo ou \xe0 forma como o escreveu. La mayor\xeda de las veces estos errores son f\xe1ciles de tratar con un ",(0,a.jsx)(r.a,{href:"/docs/pt/Concepts/error-handling",children:"m\xe9todo de captura de errores"})," instalado utilizando el comando ",(0,a.jsx)(r.code,{children:"ON ERR CALL"}),"."]}),"\n",(0,a.jsx)(r.h3,{id:"erros-de-concep\xe7\xe3o-ou-de-l\xf3gica",children:"Erros de concep\xe7\xe3o ou de l\xf3gica"}),"\n",(0,a.jsxs)(r.p,{children:['Estes s\xe3o geralmente o tipo de erro mais dif\xedcil de encontrar. Com exce\xe7\xe3o dos erros de digita\xe7\xe3o, todos os tipos de erros acima enumerados s\xe3o, em certa medida, abrangidos pela express\xe3o "erro de conce\xe7\xe3o ou de l\xf3gica". Utilice el ',(0,a.jsx)(r.a,{href:"/docs/pt/Debugging/debugger",children:"depurador "})," para detectarlos. Por exemplo:"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["Puede ocurrir un ",(0,a.jsx)(r.em,{children:"error de sintaxis"})," cuando intenta utilizar una variable que a\xfan no est\xe1 inicializada."]}),"\n",(0,a.jsxs)(r.li,{children:["Puede ocurrir un ",(0,a.jsx)(r.em,{children:"error de entorno"})," cuando intenta abrir un documento, porque el nombre de ese documento es recibido por una subrutina que no obtuvo el valor correcto como par\xe1metro."]}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"Os erros de concep\xe7\xe3o ou l\xf3gicos incluem tamb\xe9m situa\xe7\xf5es como:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["Un registro no est\xe1 correctamente actualizado porque, mientras se llama a ",(0,a.jsx)(r.code,{children:"SAVE RECORD"}),", se olvid\xf3 de la primera prueba de si el registro estaba bloqueado o no."]}),"\n",(0,a.jsx)(r.li,{children:"Um m\xe9todo n\xe3o faz exatamente o que se espera, porque a presen\xe7a de um par\xe2metro opcional n\xe3o \xe9 testada."}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"Por vezes, a parte do c\xf3digo que apresenta o erro pode ser diferente do c\xf3digo que est\xe1 efetivamente na origem do problema."}),"\n",(0,a.jsx)(r.h3,{id:"erros-de-execu\xe7\xe3o",children:"Erros de execu\xe7\xe3o"}),"\n",(0,a.jsx)(r.p,{children:"No modo Aplica\xe7\xe3o, pode obter erros que n\xe3o se v\xeaem no modo interpretado. Aqui est\xe1 um exemplo:"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"runtime-error",src:o(795240).A+"",width:"662",height:"472"})}),"\n",(0,a.jsx)(r.p,{children:"Para encontrar rapidamente a origem do problema, reabrir a vers\xe3o interpretada do ficheiro da estrutura, abrir o m\xe9todo e ir para a linha correspondente."}),"\n",(0,a.jsx)(r.h2,{id:"janela-de-erro-sint\xe1ctico",children:"Janela de erro sint\xe1ctico"}),"\n",(0,a.jsx)(r.p,{children:"A janela erro de sintaxe aparece automaticamente quando a execu\xe7\xe3o de um m\xe9todo \xe9 interrompida. Isto pode acontecer quando:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"um erro impede a continua\xe7\xe3o da execu\xe7\xe3o do c\xf3digo"}),"\n",(0,a.jsxs)(r.li,{children:["el m\xe9todo produce una afirmaci\xf3n falsa (ver el comando ",(0,a.jsx)(r.code,{children:"ASSERT"}),")"]}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"syntax-error",src:o(224494).A+"",width:"642",height:"552"})}),"\n",(0,a.jsx)(r.p,{children:'A \xe1rea de texto superior apresenta uma mensagem que descreve o erro. A \xe1rea de texto inferior mostra a linha que estava a ser executada quando ocorreu o erro; a \xe1rea onde ocorreu o erro \xe9 real\xe7ada. A sec\xe7\xe3o Detalhes expandidos cont\xe9m a "pilha" de erros relacionados com o processo.'}),"\n",(0,a.jsx)(r.p,{children:"A janela de erro de sintaxe prop\xf5e v\xe1rias op\xe7\xf5es:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Modificar"}),": detiene la ejecuci\xf3n de todos los m\xe9todos. 4D muda para o ambiente de Design e o m\xe9todo com o erro \xe9 aberto no Editor de C\xf3digo, permitindo sua corre\xe7\xe3o. Utilize esta op\xe7\xe3o quando reconhecer imediatamente o erro e puder corrigi-lo sem mais investiga\xe7\xf5es."]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Rastrear"}),": entra en modo Rastrear/Depurador. Se muestra la ventana del ",(0,a.jsx)(r.a,{href:"/docs/pt/Debugging/debugger",children:"Depurador"}),". Si la l\xednea actual solo se ha ejecutado parcialmente, es posible que tenga que hacer clic en el bot\xf3n ",(0,a.jsx)(r.strong,{children:"rastrear"})," varias veces."]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Continuar"}),": la ejecuci\xf3n continua. A linha com o erro pode ser parcialmente executada, dependendo da localiza\xe7\xe3o do erro. Continue com cuidado: o erro pode impedir que o resto do seu m\xe9todo seja executado corretamente. Recomendamos hacer clic en ",(0,a.jsx)(r.strong,{children:"Continuar"})," s\xf3lo si el error est\xe1 en una llamada trivial (como ",(0,a.jsx)(r.code,{children:"SET WINDOW TITLE"}),") que no impide ejecutar y probar el resto de su c\xf3digo."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsxs)(r.p,{children:["Consejo: para ignorar un error que ocurre repetidamente (por ejemplo, en bucles), puede convertir el bot\xf3n ",(0,a.jsx)(r.strong,{children:"Continuar"})," en un bot\xf3n ",(0,a.jsx)(r.strong,{children:"Ignorar"}),". Mantenga presionada la tecla ",(0,a.jsx)(r.strong,{children:"Alt"})," (Windows) u ",(0,a.jsx)(r.strong,{children:"Opci\xf3n"})," (macOS) y haga clic en el bot\xf3n ",(0,a.jsx)(r.strong,{children:"Continuar"})," la primera vez que aparece. La etiqueta del bot\xf3n cambia a ",(0,a.jsx)(r.strong,{children:"Ignorar"})," si el di\xe1logo es llamado de nuevo por el mismo error."]}),"\n"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Abandonar"}),": detiene la ejecuci\xf3n del m\xe9todo y devuelve al estado antes del inicio de la ejecuci\xf3n del m\xe9todo:"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Se um m\xe9todo formul\xe1rio ou um m\xe9todo objeto estiver a ser executado em resposta a um evento, \xe9 interrompido e o usu\xe1rio regressa ao formul\xe1rio."}),"\n",(0,a.jsx)(r.li,{children:"Se o m\xe9todo estiver sendo executado a partir do ambiente Application, o usu\xe1rio regressa a esse ambiente."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Copiar"}),": copia la informaci\xf3n de depuraci\xf3n en el portapapeles. A informa\xe7\xe3o descreve o ambiente interno do erro (n\xfamero, componente interno, etc.). Eles s\xe3o formatados como texto tabulado."]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Guardar..."}),": guarda el contenido de la ventana de error de sintaxis y la cadena de llamadas en un archivo ",(0,a.jsx)(r.code,{children:".txt"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"depurador",children:"Depurador"}),"\n",(0,a.jsxs)(r.p,{children:["Un error com\xfan de los principiantes al tratar con la detecci\xf3n de errores es hacer clic en ",(0,a.jsx)(r.strong,{children:"Abandonar"})," en la ventana de error de sintaxis, volver al editor de c\xf3digo, y tratar de averiguar lo que est\xe1 pasando mirando el c\xf3digo. N\xe3o fa\xe7a isso! Ahorrar\xe1 mucho tiempo y energ\xeda utilizando siempre el ",(0,a.jsx)(r.strong,{children:"Depurador"}),"."]}),"\n",(0,a.jsx)(r.p,{children:"O depurador permite-lhe percorrer os m\xe9todos lentamente. Apresenta todas as informa\xe7\xf5es necess\xe1rias para compreender o motivo do erro. Assim que tiver esta informa\xe7\xe3o, saber\xe1 como corrigir o erro."}),"\n",(0,a.jsxs)(r.p,{children:['Outra raz\xe3o para utilizar o depurador \xe9 para desenvolver c\xf3digo. Por vezes, pode escrever um algoritmo que \xe9 mais complexo do que o habitual. Apesar de todos os sentimentos de realiza\xe7\xe3o, n\xe3o pode ter a certeza absoluta de que a sua codifica\xe7\xe3o est\xe1 100% correcta. En lugar de ejecutarlo "ciego", puede utilizar el comando ',(0,a.jsx)(r.code,{children:"TRACE"})," al comienzo de su c\xf3digo, luego ejecutarlo paso a paso para mantener un ojo en lo que sucede."]}),"\n",(0,a.jsx)(r.h2,{id:"rupturas",children:"Rupturas"}),"\n",(0,a.jsx)(r.p,{children:'No processo de depura\xe7\xe3o, pode ser necess\xe1rio saltar o rastreio de algumas partes do c\xf3digo at\xe9 uma determinada linha. O, puede querer rastrear el c\xf3digo cuando una expresi\xf3n dada tiene un determinado valor (e.. "$myVar > 1000"), o cada vez que se llama un comando 4D espec\xedfico.'}),"\n",(0,a.jsxs)(r.p,{children:["Estas necesidades est\xe1n cubiertas por ",(0,a.jsx)(r.strong,{children:"puntos de interrupci\xf3n"})," y las funciones de ",(0,a.jsx)(r.strong,{children:"captura de comando"}),". Podem ser configurados a partir do editor de c\xf3digo, do depurador ou do explorador de execu\xe7\xe3o."]})]})}function u(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},795240:(e,r,o)=>{o.d(r,{A:()=>a});const a=o.p+"assets/images/runtimeError-80c1fe83365744c8fbc4724923d8182e.png"},224494:(e,r,o)=>{o.d(r,{A:()=>a});const a=o.p+"assets/images/syntax-error-c4e0d1c422e1b516cbdfd695e96bde32.png"},319266:(e,r,o)=>{o.d(r,{A:()=>a});const a=o.p+"assets/images/typing-error-0347074dc677f0bc726a4aca19f3a787.png"},28453:(e,r,o)=>{o.d(r,{R:()=>i,x:()=>d});var a=o(296540);const n={},s=a.createContext(n);function i(e){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);