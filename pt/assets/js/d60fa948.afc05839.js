"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49501],{947665:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=s(474848),i=s(28453);const o={id:"SignalClass",title:"Signal"},d=void 0,a={id:"API/SignalClass",title:"Signal",description:"Sinais s\xe3o ferramentas fornecidas pela linguagem 4D para gerenciar intera\xe7\xf5es e evitar conflitos entre processos em uma aplica\xe7\xe3o multiprocesso. Sinais permitem assegurar que um ou mais processos v\xe3o esperar por uma tarefa espec\xedfica a ser completada antes de continuar a execu\xe7\xe3o. Qualquer processo pode esperar ou liberar um sinal.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/API/SignalClass.md",sourceDirName:"API",slug:"/API/SignalClass",permalink:"/docs/pt/20/API/SignalClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FSignalClass.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"SignalClass",title:"Signal"},sidebar:"docs",previous:{title:"Session",permalink:"/docs/pt/20/API/SessionClass"},next:{title:"SMTPTransporter",permalink:"/docs/pt/20/API/SMTPTransporterClass"}},l={},c=[{value:"Objeto sinal",id:"objeto-sinal",level:3},{value:"Trabalhar com sinais",id:"trabalhar-com-sinais",level:3},{value:"Exemplo",id:"exemplo",level:3},{value:"Resumo",id:"resumo",level:3},{value:"New signal",id:"new-signal",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo-1",level:4},{value:".description",id:"description",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:4},{value:".signaled",id:"signaled",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-2",level:4},{value:".trigger()",id:"trigger",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-3",level:4},{value:".wait()",id:"wait",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-4",level:4}];function t(e){const n={a:"a",blockquote:"blockquote",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Sinais s\xe3o ferramentas fornecidas pela linguagem 4D para gerenciar intera\xe7\xf5es e evitar conflitos entre processos em uma aplica\xe7\xe3o multiprocesso. Sinais permitem assegurar que um ou mais processos v\xe3o esperar por uma tarefa espec\xedfica a ser completada antes de continuar a execu\xe7\xe3o. Qualquer processo pode esperar ou liberar um sinal."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Os sem\xe1foros podem ser usados para gerenciar intera\xe7\xf5es. Sem\xe1foros permitem ter certeza que dois ou mais processos n\xe3o modificam o mesmo recurso (arquivo, registro..) ao mesmo tempo. S\xf3 o processo que estabelece o sem\xe1foro pode remov\xea-lo."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"objeto-sinal",children:"Objeto sinal"}),"\n",(0,r.jsx)(n.p,{children:"Um sinal \xe9 um objeto partilhado que deve ser passado como par\xe2metro a comandos que chamam ou criam trabalhadores ou processo."}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.code,{children:"4D. Signal"})," object contains the following built-in methods and properties:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#wait",children:(0,r.jsx)(n.code,{children:".wait()"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#trigger",children:(0,r.jsx)(n.code,{children:".trigger()"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#signaled",children:(0,r.jsx)(n.code,{children:".signaled"})})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#description",children:(0,r.jsx)(n.code,{children:".description"})}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Qualquer worker/processo que chame ao m\xe9todo ",(0,r.jsx)(n.code,{children:".wait()"})," suspender\xe1 sua execu\xe7\xe3o at\xe9 que a propriedade ",(0,r.jsx)(n.code,{children:".signaled"})," seja verdaidera. Enquanto espera um sinal, o processo que chamar n\xe3o usa nenhuma CPU. Isso pode ser muito interessante para o rendimento nas aplica\xe7\xf5es multiprocesso. A propriedade ",(0,r.jsx)(n.code,{children:".signaled"})," se converte em true quando qualquer worker/processo chamar ao m\xe9todo ",(0,r.jsx)(n.code,{children:".trigger()"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Lembre que para evitar situa\xe7\xf5es de bloqueio, ",(0,r.jsx)(n.code,{children:".wait()"})," tamb\xe9m pode regrassar depois de que tenha alcan\xe7ado um tempo de espera definido."]}),"\n",(0,r.jsxs)(n.p,{children:["Os objetos sinal se criam com o comando ",(0,r.jsx)(n.a,{href:"#new-signal",children:"New signal"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"trabalhar-com-sinais",children:"Trabalhar com sinais"}),"\n",(0,r.jsxs)(n.p,{children:["Em 4D, se cria um novo objeto sinal chamando ao comando ",(0,r.jsx)(n.a,{href:"#new-signal",children:(0,r.jsx)(n.code,{children:"New signal"})}),". Quando tiver criado o sinal, deve ser passado como par\xe2metro a ",(0,r.jsx)(n.code,{children:"New process"})," ou ",(0,r.jsx)(n.code,{children:"CALL WORKER"})," para que a modifiquem quando terminem a tarefa que queira esperar."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"signal.wait()"})," deve ser chamado do worker/processo que precisa de outro worker/processo para terminar uma tarefa para poder continuar."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"signal.trigger()"})," deve ser chamado desde worker/processo que terminou sua execu\xe7\xe3o para liberar a todos os outros."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(868808).A+"",width:"813",height:"324"})}),"\n",(0,r.jsxs)(n.p,{children:["Quando um sinal tiver sido lan\xe7ado usando uma chamada ",(0,r.jsx)(n.code,{children:"signal.trigger()"}),", n\xe3o pode ser reutilizado. Se quiser estabelecer outro sinal, precisa chamar o comando ",(0,r.jsx)(n.code,{children:"New signal"})," novamente."]}),"\n",(0,r.jsxs)(n.p,{children:["Since a signal object is a ",(0,r.jsx)(n.a,{href:"/docs/pt/20/Concepts/shared",children:"shared object"}),", you can use it to return results from called workers/processes, provided that you do not forget to write values within a ",(0,r.jsx)(n.code,{children:"Use... End use"})," structure (see example)."]}),"\n",(0,r.jsx)(n.h3,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' #DECLARE ($signal : 4D.\n  Signal)  \n var $form : Object\n $form:=New object("value";0)\n\n  // Open the form\n $win:=Open form window("Information";Movable form dialog box)\n DIALOG("Information";$form)\n CLOSE WINDOW($win)\n\n  // Add a new attribute to your $signal shared object to pass your result to the other process:\n Use($signal)\n    $signal.result:=$form.value\n End use\n\n  // Trigger the signal to the waiting process\n $signal.trigger()\n'})}),"\n",(0,r.jsxs)(n.p,{children:["M\xe9todo ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"OpenForm"})}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' var $signal : 4D. Signal\n\n  // Creation of a signal\n $signal:=New signal\n\n  // call main process and execute OpenForm method\n CALL WORKER(1;"OpenForm";$signal)\n  // do another calculation\n ... // Waiting for the end of the process\n $signaled:=$signal.wait()\n\n  // Processing of the results\n $calc:=$signal.result+...\n'})}),"\n",(0,r.jsx)(n.h3,{id:"resumo",children:"Resumo"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#description",children:[(0,r.jsx)(n.strong,{children:".description"})," : Text"]}),"\xa0\xa0\xa0\xa0makes the current process wait until the ",(0,r.jsx)(n.code,{children:".signaled"})," property of the signal object to become ",(0,r.jsx)(n.strong,{children:"true"})," or the optional ",(0,r.jsx)(n.em,{children:"timeout"})," to expire"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#signaled",children:[(0,r.jsx)(n.strong,{children:".signaled"})," : Boolean"]}),"\xa0\xa0\xa0\xa0cont\xe9m o estado actual do objecto ",(0,r.jsx)(n.code,{children:"Sinal"})]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"#trigger",children:(0,r.jsx)(n.strong,{children:".trigger( )"})}),"\xa0\xa0\xa0\xa0coloca o ",(0,r.jsx)(n.code,{children:"sinalizado"})," propriedade do objecto de sinal em ",(0,r.jsx)(n.strong,{children:"verdadeiro"})]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#wait",children:[(0,r.jsx)(n.strong,{children:".wait"}),"( { ",(0,r.jsx)(n.em,{children:"timeout"})," : Real } ) : Boolean "]}),"\xa0\xa0\xa0\xa0faz com que o processo atual espere at\xe9 a propriedade ",(0,r.jsx)(n.code,{children:".signaled"})," do objeto sinal se tornar ",(0,r.jsx)(n.strong,{children:"true"})," ou expirar o opcional ",(0,r.jsx)(n.em,{children:"timeout"})]})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"new-signal",children:"New signal"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"|"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"description"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Descri\xe7\xe3o para o sinal"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultados"}),(0,r.jsx)(n.td,{children:"4D. Signal"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsx)(n.td,{children:"Objeto nativo encapsulando o sinal"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"|"}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".description"})," property contains a custom description for the ",(0,r.jsx)(n.code,{children:"Signal"})," object.."]}),"\n",(0,r.jsx)(n.p,{children:"Um sinal \xe9 um objeto partilhado que pode ser passado como par\xe2metro de um worker ou processo para outro worker ou processo, de forma que:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"o worker/processo chamado pode atualizar o objeto sinal depois de um processamento especifico ter terminado"}),"\n",(0,r.jsx)(n.li,{children:"o worker/processo chamado pode parar sua execu\xe7\xe3o e esperar at\xe9 que o sinal seja atualizado, sem consumir qualquer recurso de CPU."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Opcionalmente, no par\xe2metro ",(0,r.jsx)(n.em,{children:"description"})," pode passar um texto personalizado descrevendo o sinal. Esse texto pode tamb\xe9m ser definido depois da cria\xe7\xe3o do sinal."]}),"\n",(0,r.jsxs)(n.p,{children:["Since the signal object is a shared object, it can also be used to maintain user properties, including the ",(0,r.jsx)(n.a,{href:"#description",children:(0,r.jsx)(n.code,{children:".description"})})," property, by calling the ",(0,r.jsx)(n.code,{children:"Use... End use"})," structure."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Valor retornado"})}),"\n",(0,r.jsxs)(n.p,{children:["A new ",(0,r.jsxs)(n.a,{href:"#signal-object",children:[(0,r.jsx)(n.code,{children:"4D. Signal"})," object"]}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Este \xe9 um exemplo t\xedpico de um worker que fixa um sinal:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' var $signal : 4D. Signal\n $signal:=New signal("This is my first signal")\n\n CALL WORKER("myworker";"doSomething";$signal)\n $signaled:=$signal.wait(1) //wait for 1 second max\n\n If($signaled)\n    ALERT("myworker finished the work. Result: "+$signal.myresult)\n Else\n    ALERT("myworker no ha terminado en menos de 1s")\n End if\n'})}),"\n",(0,r.jsxs)(n.p,{children:["O m\xe9todo ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"doSomething"})})," poderia ser algo como:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" #DECLARE ($signal : 4D. Signal)\n  //any processing\n  //...\n Use($signal)\n    $signal.myresult:=$processingResult  //retorna o resultado\n End use\n $signal.trigger() // O trabalho terminou\n"})}),"\n",(0,r.jsx)(n.h2,{id:"description",children:".description"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".description"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-1",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:".wait( )"})," function makes the current process wait until the ",(0,r.jsx)(n.code,{children:".signaled"})," property of the signal object to become ",(0,r.jsx)(n.strong,{children:"true"})," or the optional ",(0,r.jsx)(n.em,{children:"timeout"})," to expire."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:".description"})," pode ser definida ao criar o objeto signal ou a qualquer momento. Note that since the ",(0,r.jsx)(n.code,{children:"Signal"})," object is a shared object, any write-mode access to the ",(0,r.jsx)(n.code,{children:".description"})," property must be surrounded by a ",(0,r.jsx)(n.code,{children:"Use... End use"})," structure."]}),"\n",(0,r.jsxs)(n.p,{children:["Essa propriedade \xe9",(0,r.jsx)(n.strong,{children:"apenas escrita"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"signaled",children:".signaled"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".signaled"})," : Boolean"]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-2",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["A propriedade ",(0,r.jsx)(n.code,{children:".signaled"})," cont\xe9m o estado actual do objecto ",(0,r.jsx)(n.code,{children:"Sinal"}),". . Quando se cria um sinal, ",(0,r.jsx)(n.code,{children:".signaled"})," \xe9 ",(0,r.jsx)(n.strong,{children:"False"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Essa propriedade \xe9 ",(0,r.jsx)(n.strong,{children:"apenas leitura"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"trigger",children:".trigger()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:".trigger( )"})}),"\n",(0,r.jsx)(n.p,{children:"| Par\xe2metro | Tipo |  | Descri\xe7\xe3o                                             |\n| --------- | ---- |::| ----------------------------------------------------- |\n|           |      |  | N\xe3o exige nenhum par\xe2metro|"}),"\n",(0,r.jsx)(n.p,{children:"|"}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-3",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["A fun\xe7\xe3o ",(0,r.jsx)(n.code,{children:".trigger()"})," coloca o ",(0,r.jsx)(n.code,{children:"sinalizado"})," propriedade do objecto de sinal em ",(0,r.jsx)(n.strong,{children:"verdadeiro"})," e desperta todos os trabalhadores ou processos que esperam por este sinal."]}),"\n",(0,r.jsxs)(n.p,{children:["Se o sinal j\xe1 estiver no estado de sinaliza\xe7\xe3o (ou seja, a propriedade ",(0,r.jsx)(n.code,{children:"signaled"})," j\xe1 for ",(0,r.jsx)(n.strong,{children:"true"}),"), a fun\xe7\xe3o n\xe3o faz nada."]}),"\n",(0,r.jsx)(n.h2,{id:"wait",children:".wait()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".wait"}),"( { ",(0,r.jsx)(n.em,{children:"timeout"})," : Real } ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"timeout"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Tempo m\xe1ximo de espera do sinal em segundos"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultados"}),(0,r.jsx)(n.td,{children:"Par\xe2metros"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsxs)(n.td,{children:["Estado da propriedade ",(0,r.jsx)(n.code,{children:".signaled"})]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"|"}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o-4",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["A fun\xe7\xe3o ",(0,r.jsx)(n.code,{children:".wait()"})," faz com que o processo atual espere at\xe9 a propriedade ",(0,r.jsx)(n.code,{children:".signaled"})," do objeto sinal se tornar ",(0,r.jsx)(n.strong,{children:"true"})," ou expirar o opcional ",(0,r.jsx)(n.em,{children:"timeout"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Para evitar que o c\xf3digo se bloqueie, pode passar um tempo m\xe1ximo de espera em segundos no par\xe2metro ",(0,r.jsx)(n.em,{children:"timeout"})," (se aceitam decimais)."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Atenci\xf3n"}),": A chamada a ",(0,r.jsx)(n.code,{children:".wait( )"})," sem um ",(0,r.jsx)(n.em,{children:"timeout"})," no processo principal de 4D n\xe3o \xe9 recomend\xe1vel porque poderia congelar toda a aplica\xe7\xe3o 4D."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Se o sinal j\xe1 estiver no estado de sinaliza\xe7\xe3o (ou seja, a propriedade",(0,r.jsx)(n.code,{children:".signaled"})," j\xe1 \xe9 ",(0,r.jsx)(n.strong,{children:"true"}),"), a fun\xe7\xe3o devolve imediatamente, sem esperar."]}),"\n",(0,r.jsxs)(n.p,{children:["A fun\xe7\xe3o devolve o valor da propriedade ",(0,r.jsx)(n.code,{children:".signaled"}),". Avaliar esse valor permite saber se a fun\xe7\xe3o retornou porque ",(0,r.jsx)(n.code,{children:".trigger( )"})," foi chamado (",(0,r.jsx)(n.code,{children:".signaled"})," \xe9 ",(0,r.jsx)(n.strong,{children:"true"}),") ou se o ",(0,r.jsx)(n.em,{children:"timeout"})," expirou (",(0,r.jsx)(n.code,{children:".signaled"})," \xe9 ",(0,r.jsx)(n.strong,{children:"false"}),")."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["O estado de um processo que espera um signal \xe9 ",(0,r.jsx)(n.code,{children:"Waiting for internal flag"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},868808:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/signal-f8f54304f438eaf43a007e7cd1be6f66.png"},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>a});var r=s(296540);const i={},o=r.createContext(i);function d(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);