"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["44979"],{289813:function(e,r,n){n.r(r),n.d(r,{default:()=>u,frontMatter:()=>d,metadata:()=>o,assets:()=>i,toc:()=>c,contentTitle:()=>l});var o=JSON.parse('{"id":"Concepts/error-handling","title":"Gesti\xf3n de errores","description":"El manejo de errores es el proceso de anticipar y responder a los errores que puedan ocurrir en su aplicaci\xf3n. 4D soporta de forma completa la detecci\xf3n y notificaci\xf3n de errores en tiempo de ejecuci\xf3n, as\xed como el an\xe1lisis de sus condiciones.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/Concepts/error-handling.md","sourceDirName":"Concepts","slug":"/Concepts/error-handling","permalink":"/docs/es/20-R8/Concepts/error-handling","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Ferror-handling.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"error-handling","title":"Gesti\xf3n de errores"},"sidebar":"docs","previous":{"title":"Flujo de control","permalink":"/docs/es/20-R8/Concepts/control-flow"},"next":{"title":"Modos interpretado y compilado","permalink":"/docs/es/20-R8/Concepts/interpreted-compiled"}}'),s=n("785893"),a=n("250065");let d={id:"error-handling",title:"Gesti\xf3n de errores"},l=void 0,i={},c=[{value:"Error o estado",id:"error-o-estado",level:2},{value:"Instalaci\xf3n de un m\xe9todo de gesti\xf3n de errores",id:"instalaci\xf3n-de-un-m\xe9todo-de-gesti\xf3n-de-errores",level:2},{value:"Alcance y componentes",id:"alcance-y-componentes",level:3},{value:"Manejo de errores e el m\xe9todo",id:"manejo-de-errores-e-el-m\xe9todo",level:3},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Utilizar un m\xe9todo de gesti\xf3n de errores vac\xedo",id:"utilizar-un-m\xe9todo-de-gesti\xf3n-de-errores-vac\xedo",level:3},{value:"Try(expression)",id:"tryexpression",level:2},{value:"Ejemplos",id:"ejemplos",level:3},{value:"Try...Catch...End try",id:"trycatchend-try",level:2},{value:"Ejemplo",id:"ejemplo-1",level:3}];function t(e){let r={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"El manejo de errores es el proceso de anticipar y responder a los errores que puedan ocurrir en su aplicaci\xf3n. 4D soporta de forma completa la detecci\xf3n y notificaci\xf3n de errores en tiempo de ejecuci\xf3n, as\xed como el an\xe1lisis de sus condiciones."}),"\n",(0,s.jsx)(r.p,{children:"La gesti\xf3n de errores responde a dos necesidades principales:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"descubrir y corregir posibles errores y fallos en el c\xf3digo durante la fase de desarrollo,"}),"\n",(0,s.jsx)(r.li,{children:"detectar y recuperar errores inesperados en las aplicaciones desplegadas; en particular, puede sustituir los di\xe1logos de error del sistema (disco lleno, archivo perdido, etc.) por su propia interfaz."}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"B\xe1sicamente, hay dos maneras de manejar los errores en 4D. Puede:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"#installing-an-error-handling-method",children:"instalar un m\xe9todo de gesti\xf3n de errores"}),", o"]}),"\n",(0,s.jsxs)(r.li,{children:["utilice una ",(0,s.jsxs)(r.a,{href:"#trycatchend-try",children:["palabra clave Try()",(0,s.jsx)(r.code,{children:"](#tryexpression) o una [estructura Try/Catch"})]})," antes de piezas de c\xf3digo que llaman a una funci\xf3n, m\xe9todo o expresi\xf3n que pueden arrojar un error."]}),"\n"]}),"\n",(0,s.jsx)(r.admonition,{title:"Buenas pr\xe1cticas",type:"tip",children:(0,s.jsxs)(r.p,{children:["Es muy recomendable instalar un m\xe9todo global de gesti\xf3n de errores en 4D Server, para todo el c\xf3digo que se ejecute en el servidor. Cuando 4D Server no se ejecuta ",(0,s.jsx)(r.a,{href:"/docs/es/20-R8/Admin/cli",children:"headless"})," (es decir, se lanza con su ",(0,s.jsx)(r.a,{href:"/docs/es/20-R8/ServerWindow/overview",children:"ventana de administraci\xf3n"}),"), este m\xe9todo evitar\xeda que se mostraran cajas de di\xe1logo inesperadas en la m\xe1quina servidor. En modo sin interfaz, los errores se registran en el archivo ",(0,s.jsx)(r.a,{href:"/docs/es/20-R8/Debugging/debugLogFiles#4ddebuglogtxt-standard",children:"4DDebugLog"})," para su posterior an\xe1lisis."]})}),"\n",(0,s.jsx)(r.h2,{id:"error-o-estado",children:"Error o estado"}),"\n",(0,s.jsxs)(r.p,{children:["Muchas funciones de clase 4D, como ",(0,s.jsx)(r.code,{children:"entity.save()"})," o ",(0,s.jsx)(r.code,{children:"transporter.send()"}),", devuelven un objeto ",(0,s.jsx)(r.em,{children:"status"}),'. Este objeto se utiliza para almacenar errores "predecibles" en el contexto de ejecuci\xf3n, por ejemplo, una contrase\xf1a no v\xe1lida, una entidad bloqueada, etc., que no detienen la ejecuci\xf3n del programa. Esta categor\xeda de errores puede ser manejada por el c\xf3digo habitual.']}),"\n",(0,s.jsxs)(r.p,{children:['Otros errores "imprevisibles" son el error de escritura en el disco, el fallo de la red o, en general, cualquier interrupci\xf3n inesperada. Esta categor\xeda de errores genera excepciones y debe gestionarse mediante un m\xe9todo de gesti\xf3n de errores o una palabra clave ',(0,s.jsx)(r.code,{children:"Try()"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"instalaci\xf3n-de-un-m\xe9todo-de-gesti\xf3n-de-errores",children:"Instalaci\xf3n de un m\xe9todo de gesti\xf3n de errores"}),"\n",(0,s.jsxs)(r.p,{children:["En 4D, todos los errores pueden ser detectados y manejados por m\xe9todos proyecto espec\xedficos, llamados ",(0,s.jsx)(r.strong,{children:"m\xe9todos de gesti\xf3n de errores"})," (o ",(0,s.jsx)(r.strong,{children:"m\xe9todos de intercepci\xf3n de errores"}),")."]}),"\n",(0,s.jsx)(r.p,{children:"Una vez instalados, los manejadores de errores son llamados autom\xe1ticamente en modo interpretado o compilado en caso de error en la aplicaci\xf3n 4D o en uno de sus componentes. Se puede llamar a un manejador de errores diferente en funci\xf3n del contexto de ejecuci\xf3n (ver abajo)."}),"\n",(0,s.jsxs)(r.p,{children:["Para ",(0,s.jsx)(r.em,{children:"instalar"})," un m\xe9todo proyecto de gesti\xf3n de errores, basta con llamar al comando ",(0,s.jsx)(r.a,{href:"https://doc.4d.com/4dv19/help/command/en/page155.html",children:(0,s.jsx)(r.code,{children:"ON ERR CALL"})})," con el nombre del m\xe9todo proyecto y (opcionalmente) el \xe1lcance como par\xe1metros. Por ejemplo:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'ON ERR CALL("IO_Errors";ek local) //Instala un m\xe9todo local de gesti\xf3n de errores\n'})}),"\n",(0,s.jsxs)(r.p,{children:["Para dejar de interceptar los errores en un contexto de ejecuci\xf3n y devolver la mano, llame ",(0,s.jsx)(r.code,{children:"ON ERR CALL"})," con una cadena vac\xeda:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'ON ERR CALL("";ek local) //devuelve el control al proceso local\n'})}),"\n",(0,s.jsxs)(r.p,{children:["El comando ",(0,s.jsx)(r.a,{href:"https://doc.4d.com/4dv20/help/command/en/page704.html",children:(0,s.jsx)(r.code,{children:"Method called on error"})})," le permite conocer el nombre del m\xe9todo instalado por ",(0,s.jsx)(r.code,{children:"ON ERR CALL"})," para el proceso actual. Es particularmente \xfatil en el contexto de c\xf3digo gen\xe9rico porque permite cambiar temporalmente y luego restaurar el m\xe9todo de captura de error:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:' $methCurrent:=Method called on error(ek local)\n ON ERR CALL("NewMethod";ek local)\n  //Si no se puede abrir el documento, se genera un error\n $ref:=Open document("MyDocument")\n  //Reinstalaci\xf3n del m\xe9todo anterior\n ON ERR CALL($methCurrent;ek local)\n\n'})}),"\n",(0,s.jsx)(r.h3,{id:"alcance-y-componentes",children:"Alcance y componentes"}),"\n",(0,s.jsx)(r.p,{children:"Se puede definir un m\xe9todo de gesti\xf3n de errores para diferentes contextos de ejecuci\xf3n:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["para el ",(0,s.jsx)(r.strong,{children:"proceso actual"}),"- s\xf3lo se llamar\xe1 a un gestor de errores local para los errores ocurridos en el proceso actual del proyecto actual,"]}),"\n",(0,s.jsxs)(r.li,{children:["para ",(0,s.jsx)(r.strong,{children:"toda la aplicaci\xf3n"}),"- se llamar\xe1 a un gestor de errores global para todos los errores que se produzcan en el contexto de ejecuci\xf3n de la aplicaci\xf3n del proyecto actual,"]}),"\n",(0,s.jsxs)(r.li,{children:["desde los ",(0,s.jsx)(r.strong,{children:"componentes"}),"- este manejador de errores se define en un proyecto local y ser\xe1 llamado para todos los errores que ocurran en los componentes cuando no hayan sido ya interceptados por un manejador de componentes."]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Ejemplos:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'ON ERR CALL("IO_Errors";ek local) //Instala un m\xe9todo de gesti\xf3n de errores local \nON ERR CALL("globalHandler";ek global) //Instala un m\xe9todo de gesti\xf3n de errores global \nON ERR CALL("componentHandler";ek errors from components) //Instala un m\xe9todo de gesti\xf3n de errores para los componentes\n'})}),"\n",(0,s.jsx)(r.p,{children:'Puede instalar un gestor de errores global que servir\xe1 como "fallback" y gestores de errores locales espec\xedficos para determinados procesos. Un gestor de errores global tambi\xe9n es \xfatil en el servidor para evitar di\xe1logos de error en el servidor cuando se ejecuta con interfaz.'}),"\n",(0,s.jsx)(r.p,{children:"Se puede definir un \xfanico m\xe9todo de captura de errores para toda la aplicaci\xf3n o diferentes m\xe9todos por m\xf3dulo de aplicaci\xf3n. Sin embargo, s\xf3lo se puede instalar un m\xe9todo por contexto de ejecuci\xf3n y por proyecto."}),"\n",(0,s.jsx)(r.p,{children:"Cuando se produce un error, s\xf3lo se llama a un m\xe9todo, como se describe en el siguiente diagrama:"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"error management",src:n(701581).Z+"",width:"1195",height:"578"})}),"\n",(0,s.jsx)(r.h3,{id:"manejo-de-errores-e-el-m\xe9todo",children:"Manejo de errores e el m\xe9todo"}),"\n",(0,s.jsx)(r.p,{children:"Dentro de un m\xe9todo de gesti\xf3n de errores personalizado, tiene acceso a varios datos que le ayudar\xe1n a identificar el error:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"las variables sistema dedicadas:"}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Error"})," (entero largo): c\xf3digo de error"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Error method"}),"(texto): nombre del m\xe9todo que ha provocado el error"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Error line"})," (entero largo): n\xfamero de l\xednea del m\xe9todo que ha provocado el error"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Error formula"})," (texto): f\xf3rmula del c\xf3digo 4D (texto bruto) que est\xe1 en el origen del error."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.admonition,{type:"info",children:(0,s.jsxs)(r.p,{children:["4D mantiene autom\xe1ticamente una serie de variables denominadas ",(0,s.jsx)(r.a,{href:"/docs/es/20-R8/Concepts/variables#system-variables",children:(0,s.jsx)(r.strong,{children:"variables sistema"})}),", que responden a diferentes necesidades."]})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["el comando ",(0,s.jsx)(r.a,{href:"/docs/es/20-R8/commands/last-errors",children:(0,s.jsx)(r.code,{children:"Last errors"})})," que devuelve una colecci\xf3n de la pila actual de errores ocurridos en la aplicaci\xf3n 4D. You can also use the ",(0,s.jsx)(r.a,{href:"/docs/es/20-R8/commands/last-errors",children:(0,s.jsx)(r.code,{children:"Last errors"})})," command that returns the same information as arrays."]}),"\n",(0,s.jsxs)(r.li,{children:["el comando ",(0,s.jsx)(r.code,{children:"Call chain"})," que devuelve una colecci\xf3n de objetos que describen cada paso de la cadena de llamadas a m\xe9todos dentro del proceso actual."]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(r.p,{children:"He aqu\xed un sistema de gesti\xf3n de errores sencillo:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'//instalar el m\xe9todo de gesti\xf3n de errores\n ON ERR CALL("errorMethod")\n //... ejecutar el c\xf3digo\n ON ERR CALL("") //giving control back to 4D\n'})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'// m\xe9todo proyecto errorMethod\n If (Error#1006) //este no es una interrupci\xf3n del usuario\n    ALERT("El error "+String(Error)+" ocurrido". El c\xf3digo en cuesti\xf3n es: \\""+Error formula+"\\"")\n  End if\n'})}),"\n",(0,s.jsx)(r.h3,{id:"utilizar-un-m\xe9todo-de-gesti\xf3n-de-errores-vac\xedo",children:"Utilizar un m\xe9todo de gesti\xf3n de errores vac\xedo"}),"\n",(0,s.jsxs)(r.p,{children:["Si desea principalmente que la caja de di\xe1logo de error est\xe1ndar est\xe9 oculta, puede instalar un m\xe9todo de gesti\xf3n de errores vac\xedo. La variable sistema ",(0,s.jsx)(r.code,{children:"Error"})," puede ser probada en cualquier m\xe9todo, es decir, fuera del m\xe9todo de gesti\xf3n de errores:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'ON ERR CALL("emptyMethod") //emptyMethod existe pero est\xe1 vac\xedo\n$doc:=Open document( "myFile.txt")\nIf (Error=-43)\n	ALERT("Archivo no encontrado.")\nEnd if\nON ERR CALL("")\n'})}),"\n",(0,s.jsx)(r.h2,{id:"tryexpression",children:"Try(expression)"}),"\n",(0,s.jsxs)(r.p,{children:["La sentencia ",(0,s.jsx)(r.code,{children:"Try(expression)"})," permite probar una expresi\xf3n de una sola l\xednea en su contexto de ejecuci\xf3n real (incluyendo, en particular, los valores de las variables locales) e interceptar los errores que arroje para que no se muestre el di\xe1logo de erro El uso de ",(0,s.jsx)(r.code,{children:"Try(expression)"})," ofrece una manera f\xe1cil de manejar casos de error simples con un n\xfamero muy bajo de l\xedneas de c\xf3digo, y sin requerir un m\xe9todo de gesti\xf3n de errores."]}),"\n",(0,s.jsx)(r.admonition,{type:"note",children:(0,s.jsxs)(r.p,{children:["Si desea probar un c\xf3digo m\xe1s complejo que una expresi\xf3n de una sola l\xednea, puede considerar la posibilidad de utilizar una estructura ",(0,s.jsx)(r.a,{href:"#trycatchend-try",children:(0,s.jsx)(r.code,{children:"Try/Catch"})}),"."]})}),"\n",(0,s.jsxs)(r.p,{children:["La sintaxis formal de la declaraci\xf3n ",(0,s.jsx)(r.code,{children:"Try(expresi\xf3n)"})," es:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:"\nTry (expression) : any | Undefined\n\n"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"expresion"})," puede ser toda expresi\xf3n v\xe1lida."]}),"\n",(0,s.jsxs)(r.p,{children:["Si se produce un error durante su ejecuci\xf3n, se intercepta y no se muestra ning\xfan di\xe1logo de error, si un ",(0,s.jsx)(r.a,{href:"#installing-an-error-handling-method",children:"m\xe9todo de gesti\xf3n de errores"})," fue instalado o no antes de la llamada a ",(0,s.jsx)(r.code,{children:"Try()"}),". Si ",(0,s.jsx)(r.em,{children:"expression"})," devuelve un valor, ",(0,s.jsx)(r.code,{children:"Try()"})," devuelve el \xfaltimo valor evaluado, en caso contrario devuelve ",(0,s.jsx)(r.code,{children:"Define"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["Puede manejar los errores utilizando el comando ",(0,s.jsx)(r.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1799.html",children:(0,s.jsx)(r.code,{children:"Last errors"})}),". Si ",(0,s.jsx)(r.em,{children:"expression"})," arroja un error dentro de una pila de llamadas ",(0,s.jsx)(r.code,{children:"Try()"}),", el flujo de ejecuci\xf3n se detiene y devuelve a la \xfaltima ejecuci\xf3n ",(0,s.jsx)(r.code,{children:"Try()"})," (la primera encontrada de nuevo en la pila de llamadas)."]}),"\n",(0,s.jsx)(r.admonition,{type:"note",children:(0,s.jsxs)(r.p,{children:["Si un ",(0,s.jsx)(r.a,{href:"#installing-an-error-handling-method",children:"m\xe9todo de gesti\xf3n de errores"})," es instalado por ",(0,s.jsx)(r.em,{children:"expression"}),", es llamado en caso de error."]})}),"\n",(0,s.jsx)(r.h3,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"Quiere mostrar el contenido de un archivo si el archivo se puede abrir sin errores y si su contenido se puede leer. Puede escribir:"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'var $text : Text\nvar $file : 4D.File := File("/RESOURCES/myFile.txt")\nvar $fileHandle : 4D.FileHandle := Try($file.open())\nIf ($fileHandle # Null)\n  $text:=Try($fileHandle.readText()) || "Error al leer el archivo"\nEnd if\n'})}),"\n",(0,s.jsxs)(r.ol,{start:"2",children:["\n",(0,s.jsx)(r.li,{children:"Quiere manejar el error de dividir por cero. En este caso, se desea devolver 0 y lanzar un error:"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'function divide( $p1: real; $p2: real)-> $result: real\n  if ($p2=0)\n     $result:=0 //s\xf3lo por claridad (0 es el valor por defecto para reales)\n     throw(-12345; "Divisi\xf3n por cero")\n  else\n    $result:=$p1/$p2\n  end if\n\nfunction test()\n  $result:=Try(divide($p1;$p2))\n  If (Last errors # null)\n    ALERT("Error")\n  End if\n\n'})}),"\n",(0,s.jsxs)(r.ol,{start:"3",children:["\n",(0,s.jsxs)(r.li,{children:["Desea gestionar tanto los errores ",(0,s.jsx)(r.a,{href:"#error-or-status",children:"previsibles como los no previsibles>"}),":"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'var $e:=ds.Employee.new()\n$e.name:="Smith"\n$status:=Try($e.save()) //Capturar errores predecibles y no predecibles\nIf ($status.success)\n   ALERT( "Success")\nElse\n   ALERT( "Error: "+JSON Stringify($status.errors))\nEnd if\n\n'})}),"\n",(0,s.jsx)(r.h2,{id:"trycatchend-try",children:"Try...Catch...End try"}),"\n",(0,s.jsxs)(r.p,{children:["La estructura ",(0,s.jsx)(r.code,{children:"Try...Catch...End try"})," permite probar el c\xf3digo de un bloque en su contexto de ejecuci\xf3n real (incluyendo, en particular, los valores de las variables locales) e interceptar los errores que lanza para que no se muestre el di\xe1logo de error d"]}),"\n",(0,s.jsxs)(r.p,{children:["A diferencia de la palabra clave ",(0,s.jsx)(r.code,{children:"Try(expression)"})," que eval\xfaa una expresi\xf3n de una sola l\xednea, la estructura ",(0,s.jsx)(r.code,{children:"Try...Catch...End try"})," permite evaluar cualquier bloque de c\xf3digo, desde el m\xe1s simple al m\xe1s complejo, sin necesidad de un m\xe9todo de gesti\xf3n de  Adem\xe1s, el bloque ",(0,s.jsx)(r.code,{children:"Catch"})," puede utilizarse para gestionar el error de forma personalizada."]}),"\n",(0,s.jsxs)(r.p,{children:["La sintaxis formal de la estructura ",(0,s.jsx)(r.code,{children:"Try...Catch...End try"})," es:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:"\nTry \n	statement(s) // C\xf3digo a evaluar\nCatch\n	statement(s) // C\xf3digo a ejecutar en caso de error\nEnd try\n\n"})}),"\n",(0,s.jsxs)(r.p,{children:["El c\xf3digo entre las palabras clave ",(0,s.jsx)(r.code,{children:"Try"})," y ",(0,s.jsx)(r.code,{children:"Catch"})," se ejecuta en primer lugar, luego el flujo depende del error o errores encontrados durante esta ejecuci\xf3n."]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Si no se lanza ning\xfan error, la ejecuci\xf3n del c\xf3digo contin\xfaa despu\xe9s de la palabra clave correspondiente ",(0,s.jsx)(r.code,{children:"End try"}),". El c\xf3digo situado entre las palabras clave ",(0,s.jsx)(r.code,{children:"Catch"})," y ",(0,s.jsx)(r.code,{children:"End try"})," no se ejecuta."]}),"\n",(0,s.jsxs)(r.li,{children:["Si la ejecuci\xf3n del bloque de c\xf3digo arroja un error no diferido **, el flujo de ejecuci\xf3n se detiene y ejecuta el bloque de c\xf3digo correspondiente ",(0,s.jsx)(r.code,{children:"Catch"}),"."]}),"\n",(0,s.jsxs)(r.li,{children:["If the code block calls a method that throws a ",(0,s.jsx)(r.em,{children:"deferred error"}),", the execution flow jumps directly to the corresponding ",(0,s.jsx)(r.code,{children:"Catch"})," code block."]}),"\n",(0,s.jsxs)(r.li,{children:["If a deferred error is directly thrown from the ",(0,s.jsx)(r.code,{children:"Try"})," block, the execution flow continues until the end of the ",(0,s.jsx)(r.code,{children:"Try"})," block and does not execute the corresponding ",(0,s.jsx)(r.code,{children:"Catch"})," block."]}),"\n"]}),"\n",(0,s.jsx)(r.admonition,{type:"note",children:(0,s.jsxs)(r.p,{children:["Si se lanza un error ",(0,s.jsx)(r.em,{children:"diferido"})," fuera del bloque ",(0,s.jsx)(r.code,{children:"Try"}),", la ejecuci\xf3n del c\xf3digo contin\xfaa hasta el final del m\xe9todo o funci\xf3n."]})}),"\n",(0,s.jsx)(r.admonition,{type:"info",children:(0,s.jsxs)(r.p,{children:["Para m\xe1s informaci\xf3n sobre errores ",(0,s.jsx)(r.em,{children:"diferidos"})," y ",(0,s.jsx)(r.em,{children:"no diferidos"}),", por favor consulte la descripci\xf3n del comando ",(0,s.jsx)(r.a,{href:"https://doc.4d.com/4dv20R/help/command/en/page1805.html",children:(0,s.jsx)(r.code,{children:"throw"})}),"."]})}),"\n",(0,s.jsxs)(r.p,{children:["En el bloque de c\xf3digo ",(0,s.jsx)(r.code,{children:"Catch"}),", puede gestionar los errores utilizando los comandos est\xe1ndar de gesti\xf3n de errores. La funci\xf3n ",(0,s.jsx)(r.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1799.html",children:(0,s.jsx)(r.code,{children:"Last errors"})})," contiene la colecci\xf3n de los \xfaltimos errores. En este bloque de c\xf3digo puede declarar ",(0,s.jsx)(r.a,{href:"#installing-an-error-handling-method",children:"un m\xe9todo de gesti\xf3n de errores"}),", en cuyo caso se llama en caso de error (de lo contrario se muestra el di\xe1logo de error de 4D)."]}),"\n",(0,s.jsx)(r.admonition,{type:"note",children:(0,s.jsxs)(r.p,{children:["Si se instala un ",(0,s.jsx)(r.a,{href:"#installing-an-error-handling-method",children:"m\xe9todo de gesti\xf3n de errores"})," en el c\xf3digo colocado entre las palabras clave ",(0,s.jsx)(r.code,{children:"Try"})," y ",(0,s.jsx)(r.code,{children:"Catch"}),", se llama en caso de error."]})}),"\n",(0,s.jsx)(r.h3,{id:"ejemplo-1",children:"Ejemplo"}),"\n",(0,s.jsxs)(r.p,{children:["La combinaci\xf3n de transacciones y estructuras ",(0,s.jsx)(r.code,{children:"Try...Catch...End try"})," permite escribir c\xf3digo seguro para funciones cr\xedticas."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:"Function createInvoice($customer : cs.customerEntity; $items : Collection; $invoiceRef : Text) : cs.invoiceEntity\n	var $newInvoice : cs.invoiceEntity\n	var $newInvoiceLine : cs.invoiceLineEntity\n	var $item : Object\n	ds.startTransaction()\n	Try\n		$newInvoice:=This.new()\n		$newInvoice.customer:=$customer\n		$newInvoice.invoiceRef:=$invoiceRef\n		For each ($item; $items)\n			$newInvoiceLine:=ds.invoiceLine.new()\n			$newInvoiceLine.item:=$item.item\n			$newInvoiceLine.amount:=$item.amount\n			$newInvoiceLine.invoice:=$newInvoice\n			//llamar a otras funciones espec\xedficas para validar la l\xednea de factura\n			$newInvoiceLine.save()\n		End for each \n		$newInvoice.save()\n		ds.validateTransaction()\n	Catch\n		ds.cancelTransaction()\n		ds.logErrors(Last errors)\n		$newInvoice:=Null\n	End try\n	return $newInvoice\n\n"})})]})}function u(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},701581:function(e,r,n){n.d(r,{Z:function(){return o}});let o=n.p+"assets/images/error-schema-973d40c4618e79de87f884622e4e930f.png"},250065:function(e,r,n){n.d(r,{Z:function(){return l},a:function(){return d}});var o=n(667294);let s={},a=o.createContext(s);function d(e){let r=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(a.Provider,{value:r},e.children)}}}]);