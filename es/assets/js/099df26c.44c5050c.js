/*! For license information please see 099df26c.44c5050c.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74836],{573987:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var i=s(474848),r=s(28453);const t={id:"SignalClass",title:"Signal"},l=void 0,c={id:"API/SignalClass",title:"Signal",description:"Las se\xf1ales son herramientas que ofrece el lenguaje 4D para gestionar las interacciones y evitar conflictos entre procesos en una aplicaci\xf3n multiproceso. Las se\xf1ales le permiten asegurarse de que uno o m\xe1s procesos esperar\xe1n a que se complete una tarea espec\xedfica antes de continuar la ejecuci\xf3n. Todo proceso puede esperar y/o liberar una se\xf1al.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/API/SignalClass.md",sourceDirName:"API",slug:"/API/SignalClass",permalink:"/docs/es/API/SignalClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FSignalClass.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"SignalClass",title:"Signal"},sidebar:"docs",previous:{title:"Session",permalink:"/docs/es/API/SessionClass"},next:{title:"SMTPTransporter",permalink:"/docs/es/API/SMTPTransporterClass"}},a={},d=[{value:"Objeto signal",id:"Objeto-signal",level:3},{value:"Trabajar con se\xf1ales",id:"Trabajar-con-se\xf1ales",level:3},{value:"Ejemplo",id:"Ejemplo",level:3},{value:"Resumen",id:"Resumen",level:3},{value:"New signal",id:"New-signal",level:2},{value:"Descripci\xf3n",id:"Descripci\xf3n",level:4},{value:"Ejemplo",id:"Ejemplo-1",level:4},{value:".description",id:"description",level:2},{value:"Descripci\xf3n",id:"Descripci\xf3n-1",level:4},{value:".signaled",id:"signaled",level:2},{value:"Descripci\xf3n",id:"Descripci\xf3n-2",level:4},{value:".trigger()",id:"trigger",level:2},{value:"Descripci\xf3n",id:"Descripci\xf3n-3",level:4},{value:".wait()",id:"wait",level:2},{value:"Descripci\xf3n",id:"Descripci\xf3n-4",level:4}];function o(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Las se\xf1ales son herramientas que ofrece el lenguaje 4D para gestionar las interacciones y evitar conflictos entre procesos en una aplicaci\xf3n multiproceso. Las se\xf1ales le permiten asegurarse de que uno o m\xe1s procesos esperar\xe1n a que se complete una tarea espec\xedfica antes de continuar la ejecuci\xf3n. Todo proceso puede esperar y/o liberar una se\xf1al."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Los sem\xe1foros tambi\xe9n pueden utilizarse para gestionar las interacciones. Semaphores allow you to make sure that two or more processes do not modify the same resource (file, record...) al mismo tiempo. S\xf3lo el proceso que define el sem\xe1foro puede eliminarlo."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"Objeto-signal",children:"Objeto signal"}),"\n",(0,i.jsx)(n.p,{children:"Una se\xf1al es un objeto compartido que debe ser pasado como par\xe1metro a los comandos que llaman o crean trabajadores o procesos."}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.code,{children:"4D.Signal"})," object contains the following built-in methods and properties:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#wait",children:(0,i.jsx)(n.code,{children:".wait()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#trigger",children:(0,i.jsx)(n.code,{children:".trigger()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#signaled",children:(0,i.jsx)(n.code,{children:".signaled"})})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#description",children:(0,i.jsx)(n.code,{children:".description"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Any worker/process calling the ",(0,i.jsx)(n.code,{children:".wait()"})," method will suspend its execution until the ",(0,i.jsx)(n.code,{children:".signaled"})," property is true. Mientras espera una se\xf1al, el proceso que llama no utiliza ninguna CPU. Esto puede ser muy interesante para el rendimiento en aplicaciones multiproceso. The ",(0,i.jsx)(n.code,{children:".signaled"})," property becomes true when any worker/process calls the ",(0,i.jsx)(n.code,{children:".trigger()"})," method."]}),"\n",(0,i.jsxs)(n.p,{children:["Note that to avoid blocking situations, the ",(0,i.jsx)(n.code,{children:".wait()"})," can also return after a defined timeout has been reached."]}),"\n",(0,i.jsxs)(n.p,{children:["Signal objects are created with the ",(0,i.jsx)(n.a,{href:"#new-signal",children:"New signal"})," command."]}),"\n",(0,i.jsx)(n.h3,{id:"Trabajar-con-se\xf1ales",children:"Trabajar con se\xf1ales"}),"\n",(0,i.jsxs)(n.p,{children:["In 4D, you create a new signal object by calling the ",(0,i.jsx)(n.a,{href:"#new-signal",children:(0,i.jsx)(n.code,{children:"New signal"})})," command. Once created, this signal must be passed as a parameter to the ",(0,i.jsx)(n.code,{children:"New process"})," or ",(0,i.jsx)(n.code,{children:"CALL WORKER"})," commands so that they can modify it when they have finished the task you want to wait for."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"signal.wait()"})," must be called from the worker/process that needs another worker/process to finish a task in order to continue."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"signal.trigger()"})," must be called from the worker/process that finished its execution in order to release all others."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(239476).A+"",width:"813",height:"324"})}),"\n",(0,i.jsxs)(n.p,{children:["Once a signal has been released using a ",(0,i.jsx)(n.code,{children:"signal.trigger()"})," call, it cannot be reused again. If you want to set another signal, you need to call the ",(0,i.jsx)(n.code,{children:"New signal"})," command again."]}),"\n",(0,i.jsxs)(n.p,{children:["Since a signal object is a ",(0,i.jsx)(n.a,{href:"/docs/es/Concepts/shared",children:"shared object"}),", you can use it to return results from called workers/processes, provided that you do not forget to write values within a ",(0,i.jsx)(n.code,{children:"Use...End use"})," structure (see example)."]}),"\n",(0,i.jsx)(n.h3,{id:"Ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' var $signal : 4D.Signal\n\n  // Creation of a signal\n $signal:=New signal\n\n  // call main process and execute OpenForm method\n CALL WORKER(1;"OpenForm";$signal)\n  // do another calculation\n ...\n  // Waiting for the end of the process\n $signaled:=$signal.wait()\n\n  // Processing of the results\n $calc:=$signal.result+...\n'})}),"\n",(0,i.jsxs)(n.p,{children:["M\xe9todo ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"OpenForm"})})," :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' #DECLARE ($signal : 4D.Signal)  \n var $form : Object\n $form:=New object("value";0)\n\n  // Abrir el formulario\n $win:=Open form window("Information";Movable form dialog box)\n DIALOG("Information";$form)\n CLOSE WINDOW($win)\n\n  // A\xf1ade un nuevo atributo a su objeto compartido $signal para pasar su resultado al otro proceso:\n Use($signal)\n    $signal.result:=$form.value\n End use\n\n  //  Activar la se\xf1al al proceso de espera\n $signal.trigger()\n'})}),"\n",(0,i.jsx)(n.h3,{id:"Resumen",children:"Resumen"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{})})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#description",children:[(0,i.jsx)(n.strong,{children:".description"})," : Text"]}),(0,i.jsx)(n.br,{}),"contains a custom description for the ",(0,i.jsx)(n.code,{children:"Signal"})," object."]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#signaled",children:[(0,i.jsx)(n.strong,{children:".signaled"})," : Boolean"]}),(0,i.jsx)(n.br,{}),"contains the current state of the ",(0,i.jsx)(n.code,{children:"Signal"})," object"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"#trigger",children:(0,i.jsx)(n.strong,{children:".trigger( )"})}),(0,i.jsx)(n.br,{}),"sets the ",(0,i.jsx)(n.code,{children:"signaled"})," property of the signal object to ",(0,i.jsx)(n.strong,{children:"true"})]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#wait",children:[(0,i.jsx)(n.strong,{children:".wait"}),"( { ",(0,i.jsx)(n.em,{children:"timeout"})," : Real } ) : Boolean "]}),(0,i.jsx)(n.br,{}),"makes the current process wait until the ",(0,i.jsx)(n.code,{children:".signaled"})," property of the signal object to become ",(0,i.jsx)(n.strong,{children:"true"})," or the optional ",(0,i.jsx)(n.em,{children:"timeout"})," to expire"]})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"New-signal",children:"New signal"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Lanzamiento"}),(0,i.jsx)(n.th,{children:"Modificaciones"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R4"}),(0,i.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"New signal"})," { ( ",(0,i.jsx)(n.em,{children:"description"})," : Text ) } : 4D.Signal"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metros"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"description"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,i.jsx)(n.td,{children:"Descripci\xf3n para la se\xf1al"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Result"}),(0,i.jsx)(n.td,{children:"4D.Signal"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,i.jsx)(n.td,{children:"Objeto nativo que encapsula la se\xf1al"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"Descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"New signal"})," command creates a ",(0,i.jsx)(n.code,{children:"4D.Signal"})," object."]}),"\n",(0,i.jsx)(n.p,{children:"Una se\xf1al es un objeto compartido que puede ser pasado como par\xe1metro de un worker o proceso a otro worker o proceso, de manera que:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"el worker/proceso llamado puede actualizar el objeto de la se\xf1al despu\xe9s de que se haya completado el procesamiento espec\xedfico"}),"\n",(0,i.jsx)(n.li,{children:"el worker/proceso que llama puede detener su ejecuci\xf3n y esperar hasta que se actualice la se\xf1al, sin consumir recursos de la CPU."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Optionally, in the ",(0,i.jsx)(n.em,{children:"description"})," parameter you can pass a custom text describing the signal. Este texto tambi\xe9n puede definirse despu\xe9s de la creaci\xf3n de la se\xf1al."]}),"\n",(0,i.jsxs)(n.p,{children:["Since the signal object is a shared object, it can also be used to maintain user properties, including the ",(0,i.jsx)(n.a,{href:"#description",children:(0,i.jsx)(n.code,{children:".description"})})," property, by calling the ",(0,i.jsx)(n.code,{children:"Use...End use"})," structure."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Valor devuelto"})}),"\n",(0,i.jsxs)(n.p,{children:["Un nuevo objeto ",(0,i.jsx)(n.a,{href:"#signal-object",children:(0,i.jsx)(n.code,{children:"4D.Signal"})}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"Ejemplo-1",children:"Ejemplo"}),"\n",(0,i.jsx)(n.p,{children:"Este es un ejemplo t\xedpico de un worker que fija una se\xf1al:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' var $signal : 4D.Signal\n $signal:=New signal("This is my first signal")\n\n CALL WORKER("myworker";"doSomething";$signal)\n $signaled:=$signal.wait(1) //wait for 1 second max\n\n If($signaled)\n    ALERT("myworker finished the work. Result: "+$signal.myresult)\n Else\n    ALERT("myworker has not finished in less than 1s")\n End if\n'})}),"\n",(0,i.jsxs)(n.p,{children:["El m\xe9todo ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"doSomething"})})," puede ser como:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:" #DECLARE ($signal : 4D.Signal)\n  //any processing\n  //...\n Use($signal)\n    $signal.myresult:=$processingResult  //return the result\n End use\n $signal.trigger() // The work is finished\n"})}),"\n",(0,i.jsx)(n.h2,{id:"description",children:".description"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Lanzamiento"}),(0,i.jsx)(n.th,{children:"Modificaciones"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R4"}),(0,i.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".description"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"Descripci\xf3n-1",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".description"})," property contains a custom description for the ",(0,i.jsx)(n.code,{children:"Signal"})," object.."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:".description"})," can be set at the creation of the signal object or at any moment. Note that since the ",(0,i.jsx)(n.code,{children:"Signal"})," object is a shared object, any write-mode access to the ",(0,i.jsx)(n.code,{children:".description"})," property must be surrounded by a ",(0,i.jsx)(n.code,{children:"Use...End use"})," structure."]}),"\n",(0,i.jsxs)(n.p,{children:["Esta propiedad est\xe1 en ",(0,i.jsx)(n.strong,{children:"lectura-escritura"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"signaled",children:".signaled"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Lanzamiento"}),(0,i.jsx)(n.th,{children:"Modificaciones"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R4"}),(0,i.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".signaled"})," : Boolean"]}),"\n",(0,i.jsx)(n.h4,{id:"Descripci\xf3n-2",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".signaled"})," property contains the current state of the ",(0,i.jsx)(n.code,{children:"Signal"})," object. Cuando se crea la se\xf1al, ",(0,i.jsx)(n.code,{children:".signaled"})," es ",(0,i.jsx)(n.strong,{children:"False"}),". Se convierte en ",(0,i.jsx)(n.strong,{children:"True"})," cuando la funci\xf3n ",(0,i.jsx)(n.code,{children:".trigger( )"})," se llama en el objeto."]}),"\n",(0,i.jsxs)(n.p,{children:["Esta propiedad es de ",(0,i.jsx)(n.strong,{children:"solo lectura"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"trigger",children:".trigger()"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Lanzamiento"}),(0,i.jsx)(n.th,{children:"Modificaciones"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R4"}),(0,i.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:".trigger( )"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metros"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{style:{textAlign:"center"}}),(0,i.jsx)(n.td,{children:"No requiere ning\xfan par\xe1metro"})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"Descripci\xf3n-3",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".trigger( )"})," function sets the ",(0,i.jsx)(n.code,{children:"signaled"})," property of the signal object to ",(0,i.jsx)(n.strong,{children:"true"})," and awakens all workers or processes waiting for this signal."]}),"\n",(0,i.jsxs)(n.p,{children:["If the signal is already in the signaled state (i.e., the ",(0,i.jsx)(n.code,{children:"signaled"})," property is already ",(0,i.jsx)(n.strong,{children:"true"}),"), the function does nothing."]}),"\n",(0,i.jsx)(n.h2,{id:"wait",children:".wait()"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Lanzamiento"}),(0,i.jsx)(n.th,{children:"Modificaciones"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"17 R4"}),(0,i.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".wait"}),"( { ",(0,i.jsx)(n.em,{children:"timeout"})," : Real } ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metros"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"timeout"}),(0,i.jsx)(n.td,{children:"Real"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"Tiempo m\xe1ximo de espera de la se\xf1al en segundos"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Result"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"<-"}),(0,i.jsxs)(n.td,{children:["Estado de la propiedad ",(0,i.jsx)(n.code,{children:".signaled"})]})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"Descripci\xf3n-4",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".wait( )"})," function makes the current process wait until the ",(0,i.jsx)(n.code,{children:".signaled"})," property of the signal object to become ",(0,i.jsx)(n.strong,{children:"true"})," or the optional ",(0,i.jsx)(n.em,{children:"timeout"})," to expire."]}),"\n",(0,i.jsxs)(n.p,{children:["To prevent blocking code, you can pass a maximum waiting time in seconds in the ",(0,i.jsx)(n.em,{children:"timeout"})," parameter (decimals are accepted)."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Warning"}),": Calling ",(0,i.jsx)(n.code,{children:".wait( )"})," without a ",(0,i.jsx)(n.em,{children:"timeout"})," in the 4D main process is not recommended because it could freeze the whole 4D application."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If the signal is already in the signaled state (i.e. the ",(0,i.jsx)(n.code,{children:".signaled"})," property is already ",(0,i.jsx)(n.strong,{children:"true"}),"), the function returns immediately, without waiting."]}),"\n",(0,i.jsxs)(n.p,{children:["The function returns the value of the ",(0,i.jsx)(n.code,{children:".signaled"})," property. Evaluating this value allows knowing if the function returned because the ",(0,i.jsx)(n.code,{children:".trigger( )"})," has been called (",(0,i.jsx)(n.code,{children:".signaled"})," is ",(0,i.jsx)(n.strong,{children:"true"}),") or if the ",(0,i.jsx)(n.em,{children:"timeout"})," expired (",(0,i.jsx)(n.code,{children:".signaled"})," is ",(0,i.jsx)(n.strong,{children:"false"}),")."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["The state of a process that waits for a signal is ",(0,i.jsx)(n.code,{children:"Waiting for internal flag"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},221020:(e,n,s)=>{var i=s(296540),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var i,t={},d=null,o=null;for(i in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(o=n.ref),n)l.call(n,i)&&!a.hasOwnProperty(i)&&(t[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===t[i]&&(t[i]=n[i]);return{$$typeof:r,type:e,key:d,ref:o,props:t,_owner:c.current}}n.Fragment=t,n.jsx=d,n.jsxs=d},474848:(e,n,s)=>{e.exports=s(221020)},239476:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/signal-f8f54304f438eaf43a007e7cd1be6f66.png"},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var i=s(296540);const r={},t=i.createContext(r);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);