"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80434],{603905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>c});var n=t(667294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(t),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return t?n.createElement(k,i(i({ref:a},d),{},{components:t})):n.createElement(k,i({ref:a},d))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},978338:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});t(667294);var n=t(603905);function r(){return r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},r.apply(this,arguments)}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const i={id:"SignalClass",title:"Signal"},o=void 0,p={unversionedId:"API/SignalClass",id:"version-20-R4/API/SignalClass",title:"Signal",description:"Las se\xf1ales son herramientas que ofrece el lenguaje 4D para gestionar las interacciones y evitar conflictos entre procesos en una aplicaci\xf3n multiproceso. Las se\xf1ales le permiten asegurarse de que uno o m\xe1s procesos esperar\xe1n a que se complete una tarea espec\xedfica antes de continuar la ejecuci\xf3n. Todo proceso puede esperar y/o liberar una se\xf1al.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R4/API/SignalClass.md",sourceDirName:"API",slug:"/API/SignalClass",permalink:"/docs/es/API/SignalClass",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FSignalClass.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"SignalClass",title:"Signal"},sidebar:"docs",previous:{title:"Session",permalink:"/docs/es/API/SessionClass"},next:{title:"SMTPTransporter",permalink:"/docs/es/API/SMTPTransporterClass"}},s={},d=[{value:"Objeto signal",id:"objeto-signal",level:3},{value:"Trabajar con se\xf1ales",id:"trabajar-con-se\xf1ales",level:3},{value:"Ejemplo",id:"ejemplo",level:3},{value:"Resumen",id:"resumen",level:3},{value:"New signal",id:"new-signal",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo-1",level:4},{value:".description",id:"description",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-1",level:4},{value:".signaled",id:"signaled",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-2",level:4},{value:".trigger()",id:"trigger",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-3",level:4},{value:".wait()",id:"wait",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-4",level:4}],u={toc:d};function m(e){var{components:a}=e,i=l(e,["components"]);return(0,n.kt)("wrapper",r({},u,i,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Las se\xf1ales son herramientas que ofrece el lenguaje 4D para gestionar las interacciones y evitar conflictos entre procesos en una aplicaci\xf3n multiproceso. Las se\xf1ales le permiten asegurarse de que uno o m\xe1s procesos esperar\xe1n a que se complete una tarea espec\xedfica antes de continuar la ejecuci\xf3n. Todo proceso puede esperar y/o liberar una se\xf1al."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Los sem\xe1foros tambi\xe9n pueden utilizarse para gestionar las interacciones. Los sem\xe1foros permiten asegurarse de que dos o m\xe1s procesos no modifican el mismo recurso (archivo, registro...) al mismo tiempo. S\xf3lo el proceso que define el sem\xe1foro puede eliminarlo.")),(0,n.kt)("h3",r({},{id:"objeto-signal"}),"Objeto signal"),(0,n.kt)("p",null,"Una se\xf1al es un objeto compartido que debe ser pasado como par\xe1metro a los comandos que llaman o crean trabajadores o procesos."),(0,n.kt)("p",null,"Un objeto ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.Signal")," contiene los siguientes m\xe9todos y propiedades integrados:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"#wait"}),(0,n.kt)("inlineCode",{parentName:"a"},".wait()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"#trigger"}),(0,n.kt)("inlineCode",{parentName:"a"},".trigger()"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"#signaled"}),(0,n.kt)("inlineCode",{parentName:"a"},".signaled"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"#description"}),(0,n.kt)("inlineCode",{parentName:"a"},".description")),".")),(0,n.kt)("p",null,"Todo worker/proceso que llame al m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},".wait()")," suspender\xe1 su ejecuci\xf3n hasta que la propiedad ",(0,n.kt)("inlineCode",{parentName:"p"},".signaled")," sea verdadera. Mientras espera una se\xf1al, el proceso que llama no utiliza ninguna CPU. Esto puede ser muy interesante para el rendimiento en aplicaciones multiproceso. La propiedad ",(0,n.kt)("inlineCode",{parentName:"p"},".signaled")," se convierte en true cuando cualquier worker/proceso llama al m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"p"},".trigger()"),"."),(0,n.kt)("p",null,"Tenga en cuenta que para evitar situaciones de bloqueo, el ",(0,n.kt)("inlineCode",{parentName:"p"},".wait()")," tambi\xe9n puede regresar despu\xe9s de que se haya alcanzado un tiempo de espera definido."),(0,n.kt)("p",null,"Los objetos signal se crean con el comando ",(0,n.kt)("a",r({parentName:"p"},{href:"#new-signal"}),"New signal"),"."),(0,n.kt)("h3",r({},{id:"trabajar-con-se\xf1ales"}),"Trabajar con se\xf1ales"),(0,n.kt)("p",null,"En 4D, se crea un nuevo objeto signal llamando al comando ",(0,n.kt)("a",r({parentName:"p"},{href:"#new-signal"}),(0,n.kt)("inlineCode",{parentName:"a"},"New signal")),". Una vez creada, esta se\xf1al debe pasarse como par\xe1metro a los comandos ",(0,n.kt)("inlineCode",{parentName:"p"},"New process")," o ",(0,n.kt)("inlineCode",{parentName:"p"},"CALL WORKER")," para que la modifiquen cuando hayan terminado la tarea que quiere esperar."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"signal.wait()")," debe ser llamado desde el worker/proceso que necesita que otro worker/proceso termine una tarea para poder continuar."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"signal.trigger()")," debe llamarse desde el worker/proceso que termin\xf3 su ejecuci\xf3n para liberar a todos los dem\xe1s.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(693316).Z,width:"813",height:"324"})),(0,n.kt)("p",null,"Una vez que una se\xf1al ha sido liberada utilizando una llamada ",(0,n.kt)("inlineCode",{parentName:"p"},"signal.trigger()"),", no puede ser reutilizada de nuevo. Si desea definir otra se\xf1al, debe llamar de nuevo al comando ",(0,n.kt)("inlineCode",{parentName:"p"},"New signal"),"."),(0,n.kt)("p",null,"Dado que un objeto signal es un ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/Concepts/shared"}),"objeto compartido"),", puede utilizarlo para devolver resultados de los workers/procesos llamados, siempre que no olvide escribir los valores dentro de una estructura ",(0,n.kt)("inlineCode",{parentName:"p"},"Use...End use")," (ver ejemplo)."),(0,n.kt)("h3",r({},{id:"ejemplo"}),"Ejemplo"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' var $signal : 4D.Signal\n\n  // Creaci\xf3n de un signal\n $signal:=New signal\n\n  // llamar al proceso principal y ejecutar el m\xe9todo OpenForm\n CALL WORKER(1;"OpenForm";$signal)\n  // hacer otro c\xe1lculo\n ...\n  // Esperando el final del proceso\n $signaled:=$signal.wait()\n\n  // Procesamiento de los resultados\n $calc:=$signal.result+...\n')),(0,n.kt)("p",null,"M\xe9todo ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"OpenForm")),":"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' #DECLARE ($signal : 4D.Signal)  \n var $form : Object\n $form:=New object("value";0)\n\n  // Abrir el formulario\n $win:=Open form window("Information";Movable form dialog box)\n DIALOG("Information";$form)\n CLOSE WINDOW($win)\n\n  // A\xf1ade un nuevo atributo a su objeto compartido $signal para pasar su resultado al otro proceso:\n Use($signal)\n    $signal.result:=$form.value\n End use\n\n  //  Activar la se\xf1al al proceso de espera\n $signal.trigger()\n')),(0,n.kt)("h3",r({},{id:"resumen"}),"Resumen"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#description"}),(0,n.kt)("strong",{parentName:"a"},".description")," : Text"),"\xa0","\xa0","\xa0","\xa0","contiene una descripci\xf3n personalizada para el objeto ",(0,n.kt)("inlineCode",{parentName:"td"},"Signal"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#signaled"}),(0,n.kt)("strong",{parentName:"a"},".signaled"),": Boolean"),"\xa0","\xa0","\xa0","\xa0","contiene el estado actual del objeto ",(0,n.kt)("inlineCode",{parentName:"td"},"Signal"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#trigger"}),(0,n.kt)("strong",{parentName:"a"},".trigger( )")),"\xa0","\xa0","\xa0","\xa0","establece la propiedad ",(0,n.kt)("inlineCode",{parentName:"td"},"signaled")," del objeto signal como ",(0,n.kt)("strong",{parentName:"td"},"true"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#wait"}),(0,n.kt)("strong",{parentName:"a"},".wait"),"( { ",(0,n.kt)("em",{parentName:"a"},"timeout")," : Real } ) : Boolean "),"\xa0","\xa0","\xa0","\xa0","hace que el proceso actual espere hasta que la propiedad ",(0,n.kt)("inlineCode",{parentName:"td"},".signaled")," del objeto signal se convierta en ",(0,n.kt)("strong",{parentName:"td"},"true")," o que el ",(0,n.kt)("em",{parentName:"td"},"timeout")," termin\xe9")))),(0,n.kt)("h2",r({},{id:"new-signal"}),"New signal"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"New signal")," { ( ",(0,n.kt)("em",{parentName:"p"},"description")," : Text ) } : 4D.Signal"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"description"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Descripci\xf3n para la se\xf1al")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4D.Signal"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Objeto nativo que encapsula la se\xf1al")))),(0,n.kt)("p",null,"|"),(0,n.kt)("h4",r({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,n.kt)("p",null,"El comando ",(0,n.kt)("inlineCode",{parentName:"p"},"New signal")," crea un objeto ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.Signal"),"."),(0,n.kt)("p",null,"Una se\xf1al es un objeto compartido que puede ser pasado como par\xe1metro de un worker o proceso a otro worker o proceso, de manera que:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"el worker/proceso llamado puede actualizar el objeto de la se\xf1al despu\xe9s de que se haya completado el procesamiento espec\xedfico"),(0,n.kt)("li",{parentName:"ul"},"el worker/proceso que llama puede detener su ejecuci\xf3n y esperar hasta que se actualice la se\xf1al, sin consumir recursos de la CPU.")),(0,n.kt)("p",null,"Opcionalmente, en el par\xe1metro ",(0,n.kt)("em",{parentName:"p"},"description")," puede pasar un texto personalizado que describa la se\xf1al. Este texto tambi\xe9n puede definirse despu\xe9s de la creaci\xf3n de la se\xf1al."),(0,n.kt)("p",null,"Dado que el objeto se\xf1al es un objeto compartido, tambi\xe9n se puede utilizar para mantener las propiedades del usuario, incluyendo la propiedad ",(0,n.kt)("a",r({parentName:"p"},{href:"#description"}),(0,n.kt)("inlineCode",{parentName:"a"},".description")),", llamando a la estructura ",(0,n.kt)("inlineCode",{parentName:"p"},"Use...End use"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Valor devuelto")),(0,n.kt)("p",null,"Un nuevo objeto ",(0,n.kt)("a",r({parentName:"p"},{href:"#signal-object"}),(0,n.kt)("inlineCode",{parentName:"a"},"4D.Signal")),"."),(0,n.kt)("h4",r({},{id:"ejemplo-1"}),"Ejemplo"),(0,n.kt)("p",null,"Este es un ejemplo t\xedpico de un worker que fija una se\xf1al:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' var $signal : 4D.Signal\n $signal:=New signal("This is my first signal")\n\n CALL WORKER("myworker";"doSomething";$signal)\n $signaled:=$signal.wait(1) //espera 1 segundo como m\xe1ximo\n\n If($signaled)\n    ALERT("myworker finished the work. Result: "+$signal.myresult)\n Else\n    ALERT("myworker no ha terminado en menos de 1s")\n End if\n')),(0,n.kt)("p",null,"El m\xe9todo ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"doSomething"))," puede ser:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," #DECLARE ($signal : 4D.Signal)\n  //todo proceso\n  //...\n Use($signal)\n    $signal.myresult:=$processingResult  //devolver el resultado\n End use\n $signal.trigger() //La operaci\xf3n se ha terminado\n")),(0,n.kt)("h2",r({},{id:"description"}),".description"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".description")," : Text"),(0,n.kt)("h4",r({},{id:"descripci\xf3n-1"}),"Descripci\xf3n"),(0,n.kt)("p",null,"La propiedad ",(0,n.kt)("inlineCode",{parentName:"p"},".description")," contiene una descripci\xf3n personalizada para el objeto ",(0,n.kt)("inlineCode",{parentName:"p"},"Signal"),".."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},".description")," puede definirse al crear el objeto signal o en cualquier momento. Tenga en cuenta que, dado que el objeto ",(0,n.kt)("inlineCode",{parentName:"p"},"Signal")," es un objeto compartido, cualquier acceso en modo de escritura a la propiedad ",(0,n.kt)("inlineCode",{parentName:"p"},".description")," debe estar rodeado por una estructura ",(0,n.kt)("inlineCode",{parentName:"p"},"Use...End use"),"."),(0,n.kt)("p",null,"Esta propiedad es ",(0,n.kt)("strong",{parentName:"p"},"lectura-escritura"),"."),(0,n.kt)("h2",r({},{id:"signaled"}),".signaled"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".signaled"),": Boolean"),(0,n.kt)("h4",r({},{id:"descripci\xf3n-2"}),"Descripci\xf3n"),(0,n.kt)("p",null,"La propiedad ",(0,n.kt)("inlineCode",{parentName:"p"},".signaled")," contiene el estado actual del objeto ",(0,n.kt)("inlineCode",{parentName:"p"},"Signal"),". . When the signal is created, ",(0,n.kt)("inlineCode",{parentName:"p"},".signaled")," is ",(0,n.kt)("strong",{parentName:"p"},"False"),"."),(0,n.kt)("p",null,"Esta propiedad es ",(0,n.kt)("strong",{parentName:"p"},"de s\xf3lo lectura"),"."),(0,n.kt)("h2",r({},{id:"trigger"}),".trigger()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".trigger( )")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"No requiere ning\xfan par\xe1metro")))),(0,n.kt)("p",null,"|"),(0,n.kt)("h4",r({},{id:"descripci\xf3n-3"}),"Descripci\xf3n"),(0,n.kt)("p",null,"La funci\xf3n ",(0,n.kt)("inlineCode",{parentName:"p"},".trigger( )")," establece la propiedad ",(0,n.kt)("inlineCode",{parentName:"p"},"signaled")," del objeto signal como ",(0,n.kt)("strong",{parentName:"p"},"true")," y despierta a todos los workers o procesos que esperan esta se\xf1al."),(0,n.kt)("p",null,"Si la se\xf1al ya est\xe1 en el estado de se\xf1alizaci\xf3n (es decir, la propiedad ",(0,n.kt)("inlineCode",{parentName:"p"},"signaled")," ya es ",(0,n.kt)("strong",{parentName:"p"},"true"),"), la funci\xf3n no hace nada."),(0,n.kt)("h2",r({},{id:"wait"}),".wait()"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3rico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Versi\xf3n"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v17 R4"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".wait"),"( { ",(0,n.kt)("em",{parentName:"p"},"timeout")," : Real } ) : Boolean "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:null})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"timeout"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Real"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Tiempo m\xe1ximo de espera de la se\xf1al en segundos")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Estado de la propiedad ",(0,n.kt)("inlineCode",{parentName:"td"},".signaled"))))),(0,n.kt)("p",null,"|"),(0,n.kt)("h4",r({},{id:"descripci\xf3n-4"}),"Descripci\xf3n"),(0,n.kt)("p",null,"La funci\xf3n ",(0,n.kt)("inlineCode",{parentName:"p"},".wait( )")," hace que el proceso actual espere hasta que la propiedad ",(0,n.kt)("inlineCode",{parentName:"p"},".signaled")," del objeto signal se convierta en ",(0,n.kt)("strong",{parentName:"p"},"true")," o que el ",(0,n.kt)("em",{parentName:"p"},"timeout")," termin\xe9."),(0,n.kt)("p",null,"Para evitar que el c\xf3digo se bloquee, puede pasar un tiempo m\xe1ximo de espera en segundos en el par\xe1metro ",(0,n.kt)("em",{parentName:"p"},"timeout")," (se aceptan decimales)."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Atenci\xf3n"),": la llamada a ",(0,n.kt)("inlineCode",{parentName:"p"},".wait( )")," sin un ",(0,n.kt)("em",{parentName:"p"},"timeout")," en el proceso principal de 4D no es recomendable porque podr\xeda congelar toda la aplicaci\xf3n 4D.")),(0,n.kt)("p",null,"Si signal ya est\xe1 en el estado de se\xf1alizaci\xf3n (es decir, la propiedad ",(0,n.kt)("inlineCode",{parentName:"p"},".signaled")," ya es ",(0,n.kt)("strong",{parentName:"p"},"true"),"), la funci\xf3n devuelve inmediatamente, sin esperar."),(0,n.kt)("p",null,"La funci\xf3n devuelve el valor de la propiedad ",(0,n.kt)("inlineCode",{parentName:"p"},".signaled"),". La evaluaci\xf3n de este valor permite saber si la funci\xf3n devuelta porque el ",(0,n.kt)("inlineCode",{parentName:"p"},".trigger( )")," se ha llamado (",(0,n.kt)("inlineCode",{parentName:"p"},".signaled")," es ",(0,n.kt)("strong",{parentName:"p"},"true"),") o si el ",(0,n.kt)("em",{parentName:"p"},"timeout")," vencido (",(0,n.kt)("inlineCode",{parentName:"p"},".signaled")," es ",(0,n.kt)("strong",{parentName:"p"},"false"),")."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"El estado de un proceso que espera un signal es ",(0,n.kt)("inlineCode",{parentName:"p"},"Waiting for internal flag"),".")))}m.isMDXComponent=!0},693316:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/signal-f8f54304f438eaf43a007e7cd1be6f66.png"}}]);