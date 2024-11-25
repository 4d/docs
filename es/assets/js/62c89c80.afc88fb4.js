"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10244"],{834700:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>d,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>a});var i=JSON.parse('{"id":"API/SignalClass","title":"Signal","description":"Las se\xf1ales son herramientas que ofrece el lenguaje 4D para gestionar las interacciones y evitar conflictos entre procesos en una aplicaci\xf3n multiproceso. Las se\xf1ales le permiten asegurarse de que uno o m\xe1s procesos esperar\xe1n a que se complete una tarea espec\xedfica antes de continuar la ejecuci\xf3n. Todo proceso puede esperar y/o liberar una se\xf1al.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/API/SignalClass.md","sourceDirName":"API","slug":"/API/SignalClass","permalink":"/docs/es/20-R6/API/SignalClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FSignalClass.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"SignalClass","title":"Signal"},"sidebar":"docs","previous":{"title":"Session","permalink":"/docs/es/20-R6/API/SessionClass"},"next":{"title":"SMTPTransporter","permalink":"/docs/es/20-R6/API/SMTPTransporterClass"}}'),r=s("785893"),l=s("250065");let a={id:"SignalClass",title:"Signal"},d=void 0,o={},c=[{value:"Objeto signal",id:"objeto-signal",level:3},{value:"Trabajar con se\xf1ales",id:"trabajar-con-se\xf1ales",level:3},{value:"Ejemplo",id:"ejemplo",level:3},{value:"Resumen",id:"resumen",level:3},{value:"New signal",id:"new-signal",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo-1",level:4},{value:".description",id:"description",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-1",level:4},{value:".signaled",id:"signaled",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-2",level:4},{value:".trigger()",id:"trigger",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-3",level:4},{value:".wait()",id:"wait",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-4",level:4}];function t(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Las se\xf1ales son herramientas que ofrece el lenguaje 4D para gestionar las interacciones y evitar conflictos entre procesos en una aplicaci\xf3n multiproceso. Las se\xf1ales le permiten asegurarse de que uno o m\xe1s procesos esperar\xe1n a que se complete una tarea espec\xedfica antes de continuar la ejecuci\xf3n. Todo proceso puede esperar y/o liberar una se\xf1al."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Los sem\xe1foros tambi\xe9n pueden utilizarse para gestionar las interacciones. Los sem\xe1foros permiten asegurarse de que dos o m\xe1s procesos no modifican el mismo recurso (archivo, registro...) al mismo tiempo. S\xf3lo el proceso que define el sem\xe1foro puede eliminarlo."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"objeto-signal",children:"Objeto signal"}),"\n",(0,r.jsx)(n.p,{children:"Una se\xf1al es un objeto compartido que debe ser pasado como par\xe1metro a los comandos que llaman o crean trabajadores o procesos."}),"\n",(0,r.jsxs)(n.p,{children:["Un objeto ",(0,r.jsx)(n.code,{children:"4D.Signal"})," contiene los siguientes m\xe9todos y propiedades integrados:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#wait",children:(0,r.jsx)(n.code,{children:".wait()"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#trigger",children:(0,r.jsx)(n.code,{children:".trigger()"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#signaled",children:(0,r.jsx)(n.code,{children:".signaled"})})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#description",children:(0,r.jsx)(n.code,{children:".description"})}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Todo worker/proceso que llame al m\xe9todo ",(0,r.jsx)(n.code,{children:".wait()"})," suspender\xe1 su ejecuci\xf3n hasta que la propiedad ",(0,r.jsx)(n.code,{children:".signaled"})," sea true. Mientras espera una se\xf1al, el proceso que llama no utiliza ninguna CPU. Esto puede ser muy interesante para el rendimiento en aplicaciones multiproceso. La propiedad ",(0,r.jsx)(n.code,{children:".signaled"})," se convierte en true cuando cualquier worker/proceso llama al m\xe9todo ",(0,r.jsx)(n.code,{children:".trigger()"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Tenga en cuenta que para evitar situaciones de bloqueo, el m\xe9todo ",(0,r.jsx)(n.code,{children:".wait()"})," tambi\xe9n puede regresar despu\xe9s de que se haya alcanzado un tiempo de espera definido."]}),"\n",(0,r.jsxs)(n.p,{children:["Los objetos signal se crean con el comando ",(0,r.jsx)(n.a,{href:"#new-signal",children:"New signal"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"trabajar-con-se\xf1ales",children:"Trabajar con se\xf1ales"}),"\n",(0,r.jsxs)(n.p,{children:["En 4D, se crea un nuevo objeto signal llamando al comando ",(0,r.jsx)(n.a,{href:"#new-signal",children:(0,r.jsx)(n.code,{children:"New signal"})}),". Una vez creada, esta se\xf1al debe pasarse como par\xe1metro a los comandos ",(0,r.jsx)(n.code,{children:"New process"})," o ",(0,r.jsx)(n.code,{children:"CALL WORKER"})," para que puedan modificarla cuando hayan terminado la tarea que se quiere esperar."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"signal.wait()"})," debe ser llamado desde el worker/proceso que necesita que otro worker/proceso termine una tarea para poder continuar."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"signal.trigger()"})," debe llamarse desde el worker/proceso que termin\xf3 su ejecuci\xf3n para liberar a todos los dem\xe1s."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(154919).Z+"",width:"813",height:"324"})}),"\n",(0,r.jsxs)(n.p,{children:["Una vez que una se\xf1al ha sido liberada utilizando una llamada ",(0,r.jsx)(n.code,{children:"signal.trigger()"}),", no puede ser reutilizada de nuevo. Si desea definir otra se\xf1al, debe llamar de nuevo al comando ",(0,r.jsx)(n.code,{children:"New signal"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Dado que un objeto signal es un ",(0,r.jsx)(n.a,{href:"/docs/es/20-R6/Concepts/shared",children:"objeto compartido"}),", puede utilizarlo para devolver resultados de los workers/procesos llamados, siempre que no olvide escribir los valores dentro de una estructura ",(0,r.jsx)(n.code,{children:"Use...End use"})," (ver ejemplo)."]}),"\n",(0,r.jsx)(n.h3,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' var $signal : 4D.Signal\n\n  // Creaci\xf3n de una signal\n $signal:=New signal\n\n  // llamar al proceso principal y ejecutar el m\xe9todo OpenForm\n CALL WORKER(1; "OpenForm";$signal)\n  // hacer otro c\xe1lculo\n ...\n  // Esperar el final del proceso\n $signaled:=$signal.wait()\n\n  // Procesar los resultados\n $calc:=$signal.result+...\n'})}),"\n",(0,r.jsxs)(n.p,{children:["M\xe9todo ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"OpenForm"})})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' #DECLARE ($signal : 4D.Signal)  \n var $form : Object\n $form:=New object("value";0)\n\n  // Abrir el formulario\n $win:=Open form window("Information";Movable form dialog box)\n DIALOG("Information";$form)\n CLOSE WINDOW($win)\n\n  // A\xf1ade un nuevo atributo a su objeto compartido $signal para pasar su resultado al otro proceso:\n Use($signal)\n    $signal.result:=$form.value\n End use\n\n  //  Activar la se\xf1al al proceso de espera\n $signal.trigger()\n'})}),"\n",(0,r.jsx)(n.h3,{id:"resumen",children:"Resumen"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#description",children:[(0,r.jsx)(n.strong,{children:".description"})," : Text"]}),(0,r.jsx)(n.br,{}),"contiene una descripci\xf3n personalizada para el objeto ",(0,r.jsx)(n.code,{children:"Signal"}),"."]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#signaled",children:[(0,r.jsx)(n.strong,{children:".signaled"})," : Boolean"]}),(0,r.jsx)(n.br,{}),"contiene el estado actual del objeto ",(0,r.jsx)(n.code,{children:"Signal"})]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"#trigger",children:(0,r.jsx)(n.strong,{children:".trigger( )"})}),(0,r.jsx)(n.br,{}),"define la propiedad ",(0,r.jsx)(n.code,{children:"signaled"})," del objeto signal como ",(0,r.jsx)(n.strong,{children:"true"})]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#wait",children:[(0,r.jsx)(n.strong,{children:".wait"}),"( { ",(0,r.jsx)(n.em,{children:"timeout"})," : Real } ) : Boolean "]}),(0,r.jsx)(n.br,{}),"hace que el proceso actual espere hasta que la propiedad ",(0,r.jsx)(n.code,{children:".signaled"})," del objeto signal se convierta en ",(0,r.jsx)(n.strong,{children:"true"})," o que el ",(0,r.jsx)(n.em,{children:"timeout"})," opcional expire"]})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"new-signal",children:"New signal"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R4"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"New signal"})," { ( ",(0,r.jsx)(n.em,{children:"description"})," : Text ) } : 4D.Signal"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"description"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Descripci\xf3n para la se\xf1al"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"4D.Signal"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsx)(n.td,{children:"Objeto nativo que encapsula la se\xf1al"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.code,{children:"New signal"})," crea un objeto ",(0,r.jsx)(n.code,{children:"4D.Signal"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Una se\xf1al es un objeto compartido que puede ser pasado como par\xe1metro de un worker o proceso a otro worker o proceso, de manera que:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"el worker/proceso llamado puede actualizar el objeto de la se\xf1al despu\xe9s de que se haya completado el procesamiento espec\xedfico"}),"\n",(0,r.jsx)(n.li,{children:"el worker/proceso que llama puede detener su ejecuci\xf3n y esperar hasta que se actualice la se\xf1al, sin consumir recursos de la CPU."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Opcionalmente, en el par\xe1metro ",(0,r.jsx)(n.em,{children:"description"})," puede pasar un texto personalizado que describa la se\xf1al. Este texto tambi\xe9n puede definirse despu\xe9s de la creaci\xf3n de la se\xf1al."]}),"\n",(0,r.jsxs)(n.p,{children:["Dado que el objeto signal es un objeto compartido, tambi\xe9n puede utilizarse para mantener propiedades de usuario, incluida la propiedad ",(0,r.jsx)(n.a,{href:"#description",children:(0,r.jsx)(n.code,{children:".description"})}),", llamando a la estructura ",(0,r.jsx)(n.code,{children:"Use...End use"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Valor devuelto"})}),"\n",(0,r.jsxs)(n.p,{children:["Un nuevo objeto ",(0,r.jsx)(n.a,{href:"#signal-object",children:(0,r.jsx)(n.code,{children:"4D.Signal"})}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"Este es un ejemplo t\xedpico de un worker que fija una se\xf1al:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' var $signal : 4D.Signal\n $signal:=New signal("Esta es mi primer signal")\n\n CALL WORKER("myworker"; "doSomething";$signal)\n $signaled:=$signal.wait(1) //espera 1 segundo m\xe1ximo\n\n If($signaled)\n    ALERT("myworker ha terminado el trabajo. Resultado: "+$signal.myresult)\n Else\n    ALERT("myworker no ha terminado en menos de 1s")\n End if\n'})}),"\n",(0,r.jsxs)(n.p,{children:["El m\xe9todo ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"doSomething"})})," puede ser como:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" #DECLARE ($signal : 4D.Signal)\n  //cualquier procesamiento\n  //...\n Use($signal)\n    $signal.myresult:=$processingResult  //devuelve el resultado\n End use\n $signal.trigger() // El trabajo ha terminado\n"})}),"\n",(0,r.jsx)(n.h2,{id:"description",children:".description"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R4"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".description"})," : Text"]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n-1",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["La propiedad ",(0,r.jsx)(n.code,{children:".description"})," contiene una descripci\xf3n personalizada para el objeto ",(0,r.jsx)(n.code,{children:"Signal"}),".."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:".description"})," puede definirse al crear el objeto signal o en cualquier momento. Tenga en cuenta que, dado que el objeto ",(0,r.jsx)(n.code,{children:"Signal"})," es un objeto compartido, cualquier acceso en modo escritura a la propiedad ",(0,r.jsx)(n.code,{children:".description"})," debe ir rodeado de una estructura ",(0,r.jsx)(n.code,{children:"Use...End use"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Esta propiedad est\xe1 en ",(0,r.jsx)(n.strong,{children:"lectura-escritura"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"signaled",children:".signaled"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R4"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".signaled"})," : Boolean"]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n-2",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["La propiedad ",(0,r.jsx)(n.code,{children:".signaled"})," contiene el estado actual del objeto ",(0,r.jsx)(n.code,{children:"Signal"}),". Cuando se crea la se\xf1al, ",(0,r.jsx)(n.code,{children:".signaled"})," es ",(0,r.jsx)(n.strong,{children:"False"}),". Se convierte en ",(0,r.jsx)(n.strong,{children:"True"})," cuando la funci\xf3n ",(0,r.jsx)(n.code,{children:".trigger( )"})," se llama en el objeto."]}),"\n",(0,r.jsxs)(n.p,{children:["Esta propiedad es de ",(0,r.jsx)(n.strong,{children:"solo lectura"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"trigger",children:".trigger()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R4"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:".trigger( )"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{style:{textAlign:"center"}}),(0,r.jsx)(n.td,{children:"No requiere ning\xfan par\xe1metro"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n-3",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["La funci\xf3n ",(0,r.jsx)(n.code,{children:".trigger( )"})," define la propiedad ",(0,r.jsx)(n.code,{children:"signaled"})," del objeto signal como ",(0,r.jsx)(n.strong,{children:"true"})," y despierta a todos los workers o procesos que esperan esta signal."]}),"\n",(0,r.jsxs)(n.p,{children:["Si la se\xf1al ya est\xe1 en el estado de se\xf1alizaci\xf3n (es decir, la propiedad signaled` ya es ",(0,r.jsx)(n.strong,{children:"true"}),"), la funci\xf3n no hace nada."]}),"\n",(0,r.jsx)(n.h2,{id:"wait",children:".wait()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"17 R4"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".wait"}),"( { ",(0,r.jsx)(n.em,{children:"timeout"})," : Real } ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"timeout"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Tiempo m\xe1ximo de espera de la se\xf1al en segundos"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsxs)(n.td,{children:["Estado de la propiedad ",(0,r.jsx)(n.code,{children:".signaled"})]})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n-4",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["La funci\xf3n ",(0,r.jsx)(n.code,{children:".wait( )"})," hace que el proceso actual espere hasta que la propiedad ",(0,r.jsx)(n.code,{children:".signaled"})," del objeto signal se convierta en ",(0,r.jsx)(n.strong,{children:"true"})," o que el ",(0,r.jsx)(n.em,{children:"timeout"})," opcional expire."]}),"\n",(0,r.jsxs)(n.p,{children:["Para evitar que el c\xf3digo se bloquee, puede pasar un tiempo m\xe1ximo de espera en segundos en el par\xe1metro ",(0,r.jsx)(n.em,{children:"timeout"})," (se aceptan decimales)."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Atenci\xf3n"}),": la llamada a ",(0,r.jsx)(n.code,{children:".wait( )"})," sin un ",(0,r.jsx)(n.em,{children:"timeout"})," en el proceso principal de 4D no es recomendable porque podr\xeda congelar toda la aplicaci\xf3n 4D."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Si la se\xf1al ya est\xe1 en estado de se\xf1alizaci\xf3n (es decir, la propiedad ",(0,r.jsx)(n.code,{children:".signaled"})," ya es ",(0,r.jsx)(n.strong,{children:"true"}),"), la funci\xf3n vuelve inmediatamente, sin esperar."]}),"\n",(0,r.jsxs)(n.p,{children:["La funci\xf3n devuelve el valor de la propiedad ",(0,r.jsx)(n.code,{children:".signaled"}),". Evaluar este valor permite saber si la funci\xf3n retorn\xf3 porque el ",(0,r.jsx)(n.code,{children:".trigger( )"})," ha sido llamado (",(0,r.jsx)(n.code,{children:".signaled"})," es ",(0,r.jsx)(n.strong,{children:"true"}),") o si el ",(0,r.jsx)(n.em,{children:"timeout"})," expir\xf3 (",(0,r.jsx)(n.code,{children:".signaled"})," es ",(0,r.jsx)(n.strong,{children:"false"}),")."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["El estado de un proceso que espera un signal es ",(0,r.jsx)(n.code,{children:"Waiting for internal flag"}),"."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},154919:function(e,n,s){s.d(n,{Z:function(){return i}});let i=s.p+"assets/images/signal-f8f54304f438eaf43a007e7cd1be6f66.png"},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return a}});var i=s(667294);let r={},l=i.createContext(r);function a(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);