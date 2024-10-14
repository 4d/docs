"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46402],{117850:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>t});var s=n(474848),a=n(28453);const r={id:"methods",title:"M\xe9todos"},d=void 0,i={id:"Concepts/methods",title:"M\xe9todos",description:"Un m\xe9todo es b\xe1sicamente un trozo de c\xf3digo que ejecuta una o varias acciones. Un m\xe9todo se compone de instrucciones.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/Concepts/methods.md",sourceDirName:"Concepts",slug:"/Concepts/methods",permalink:"/docs/es/20-R5/Concepts/methods",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fmethods.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"methods",title:"M\xe9todos"},sidebar:"docs",previous:{title:"Arrays",permalink:"/docs/es/20-R5/Concepts/arrays"},next:{title:"Par\xe1metros",permalink:"/docs/es/20-R5/Concepts/parameters"}},l={},t=[{value:"Tipos de m\xe9todos",id:"tipos-de-m\xe9todos",level:2},{value:"M\xe9todos proyecto",id:"m\xe9todos-proyecto",level:2},{value:"Subrutinas",id:"subrutinas",level:3},{value:"Objeto f\xf3rmula",id:"objeto-f\xf3rmula",level:3},{value:"M\xe9todos de men\xfa",id:"m\xe9todos-de-men\xfa",level:3},{value:"M\xe9todos de gesti\xf3n de proceso",id:"m\xe9todos-de-gesti\xf3n-de-proceso",level:3},{value:"M\xe9todos de gesti\xf3n de eventos y errores",id:"m\xe9todos-de-gesti\xf3n-de-eventos-y-errores",level:3},{value:"Execution mode",id:"execution-mode",level:3},{value:"Desde el Editor de c\xf3digo",id:"desde-el-editor-de-c\xf3digo",level:4},{value:"De la caja de di\xe1logo Ejecutar m\xe9todo",id:"de-la-caja-de-di\xe1logo-ejecutar-m\xe9todo",level:4},{value:"M\xe9todos proyecto recursivos",id:"m\xe9todos-proyecto-recursivos",level:2}];function c(e){const o={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.p,{children:"Un m\xe9todo es b\xe1sicamente un trozo de c\xf3digo que ejecuta una o varias acciones. Un m\xe9todo se compone de instrucciones."}),"\n",(0,s.jsxs)(o.p,{children:["Una l\xednea de instrucci\xf3n realiza una acci\xf3n, y puede ser simple o compleja. Cada instrucci\xf3n generalmente consiste en una l\xednea en el m\xe9todo (si es necesario, puede ser ",(0,s.jsxs)(o.a,{href:"/docs/es/20-R5/Concepts/quick-tour#codigo-en-varias-lineas",children:["dividida utilizando el car\xe1cter ",(0,s.jsx)(o.code,{children:"\\"})]}),")."]}),"\n",(0,s.jsx)(o.p,{children:"El tama\xf1o m\xe1ximo de un m\xe9todo est\xe1 limitado a 2 GB de texto o 32.000 l\xedneas de c\xf3digo."}),"\n",(0,s.jsx)(o.h2,{id:"tipos-de-m\xe9todos",children:"Tipos de m\xe9todos"}),"\n",(0,s.jsx)(o.p,{children:"En el lenguaje 4D, hay varias categor\xedas de m\xe9todos. La categor\xeda depende de c\xf3mo se les pueda llamar:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{children:"Contexto de llamada"}),(0,s.jsx)(o.th,{children:"Acepta los par\xe1metros"}),(0,s.jsx)(o.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:(0,s.jsx)(o.strong,{children:"M\xe9todos proyecto"})}),(0,s.jsxs)(o.td,{children:["Por demanda, cuando se llama al nombre del m\xe9todo proyecto (ver ",(0,s.jsx)(o.a,{href:"#calling-project-methods",children:"Llamando a m\xe9todos proyecto"}),")"]}),(0,s.jsx)(o.td,{children:"S\xed"}),(0,s.jsx)(o.td,{children:"Puede contener c\xf3digo para ejecutar acciones personalizadas. Una vez creado un m\xe9todo proyecto, pasa a formar parte del lenguaje del proyecto."})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:(0,s.jsx)(o.strong,{children:"M\xe9todo objeto (widget)"})}),(0,s.jsx)(o.td,{children:"Autom\xe1tico, cuando un evento involucra al objeto al que se asocia el m\xe9todo"}),(0,s.jsx)(o.td,{children:"No"}),(0,s.jsx)(o.td,{children:"Propiedad de un objeto formulario (tambi\xe9n llamado widget)"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:(0,s.jsx)(o.strong,{children:"M\xe9todo formulario"})}),(0,s.jsx)(o.td,{children:"Autom\xe1tico, cuando un evento involucra al formulario al que se asocia el m\xe9todo"}),(0,s.jsx)(o.td,{children:"No"}),(0,s.jsx)(o.td,{children:"Propiedad de un formulario. Puede utilizar un m\xe9todo formulario para gestionar datos y objetos, pero generalmente es m\xe1s sencillo y eficiente utilizar un m\xe9todo objeto para estos fines."})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsxs)(o.td,{children:[(0,s.jsx)(o.strong,{children:"Trigger"})," (o ",(0,s.jsx)(o.em,{children:"m\xe9todo tabla"}),")"]}),(0,s.jsx)(o.td,{children:"Autom\xe1tico, cada vez que se manipulan los registros de una tabla (A\xf1adir, Eliminar y Modificar)"}),(0,s.jsx)(o.td,{children:"No"}),(0,s.jsx)(o.td,{children:'Propiedad de una tabla. Los triggers son m\xe9todos que pueden evitar operaciones "ilegales" con los registros de su base.'})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:(0,s.jsx)(o.strong,{children:"M\xe9todo base"})}),(0,s.jsx)(o.td,{children:"Autom\xe1tico, cuando se produce un evento de la sesi\xf3n de trabajo"}),(0,s.jsx)(o.td,{children:"S\xed (predefinido)"}),(0,s.jsx)(o.td,{children:"Hay 16 m\xe9todos base en 4D."})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:(0,s.jsx)(o.strong,{children:"Class"})}),(0,s.jsxs)(o.td,{children:[(0,s.jsx)(o.a,{href:"/docs/es/20-R5/Concepts/classes#function",children:(0,s.jsx)(o.strong,{children:"Las funciones de clases"})})," se llaman en el contexto de una instancia de objeto"]}),(0,s.jsx)(o.td,{children:"S\xed"}),(0,s.jsxs)(o.td,{children:["Las funciones de clases pueden estar integradas (",(0,s.jsx)(o.em,{children:"por ejemplo"})," ",(0,s.jsx)(o.code,{children:"collection.orderBy()"})," o ",(0,s.jsx)(o.code,{children:"entity.save()"}),"), o creadas por el desarrollador 4D. Ver ",(0,s.jsx)(o.a,{href:"/docs/es/20-R5/Concepts/classes",children:(0,s.jsx)(o.strong,{children:"Clases"})})]})]})]})]}),"\n",(0,s.jsx)(o.h2,{id:"m\xe9todos-proyecto",children:"M\xe9todos proyecto"}),"\n",(0,s.jsx)(o.p,{children:"Un m\xe9todo proyecto puede tener uno de los siguientes papeles, dependiendo de c\xf3mo se ejecute y utilice:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Subrutina"}),"\n",(0,s.jsx)(o.li,{children:"Objeto f\xf3rmula"}),"\n",(0,s.jsx)(o.li,{children:"M\xe9todo de men\xfa"}),"\n",(0,s.jsx)(o.li,{children:"M\xe9todo de gesti\xf3n de proceso"}),"\n",(0,s.jsx)(o.li,{children:"M\xe9todos de gesti\xf3n de eventos o errores"}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"Tambi\xe9n puede ejecutar los m\xe9todos de su proyecto manualmente, por ejemplo, para realizar pruebas."}),"\n",(0,s.jsx)(o.h3,{id:"subrutinas",children:"Subrutinas"}),"\n",(0,s.jsx)(o.p,{children:"Una subrutina es un m\xe9todo proyecto que puede considerarse como un ayudante. Realiza aquellas tareas que otros m\xe9todos le solicitan. Una funci\xf3n es una subrutina que devuelve un valor al m\xe9todo que la llam\xf3."}),"\n",(0,s.jsx)(o.p,{children:"Cuando crea un m\xe9todo proyecto, \xe9ste pasa a formar parte del lenguaje del proyecto en el que lo crea. Luego puede llamar al m\xe9todo proyecto desde otro m\xe9todo (m\xe9todo proyecto, m\xe9todo objeto...) de la misma manera que llama a los comandos integrados de 4D. Un m\xe9todo proyecto utilizado de este manera se llama una subrutina."}),"\n",(0,s.jsx)(o.p,{children:"Se utilizan subrutinas para:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Reducci\xf3n del c\xf3digo repetitivo"}),"\n",(0,s.jsx)(o.li,{children:"Clarificaci\xf3n de los m\xe9todos"}),"\n",(0,s.jsx)(o.li,{children:"Facilitar los cambios en sus m\xe9todos"}),"\n",(0,s.jsx)(o.li,{children:"Modularizar el c\xf3digo"}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"Por ejemplo, supongamos que tiene un proyecto de clientes. Al personalizar el proyecto, se da cuenta de que hay algunas tareas que realiza reiteradamente, como la b\xfasqueda de un cliente y la modificaci\xf3n de su registro. El c\xf3digo para hacer esto podr\xeda ser:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'  // B\xfasqueda de un cliente\n QUERY BY EXAMPLE([Customers])\n  // Selecci\xf3n del formulario entrada\n FORM SET INPUT([Customers];"Data Entry")\n  // Modificaci\xf3n del registro del cliente\n MODIFY RECORD([Customers])\n'})}),"\n",(0,s.jsx)(o.p,{children:"Si no utiliza subrutinas, tendr\xe1 que escribir el c\xf3digo cada vez que quiera modificar el registro de un cliente. Si no utiliza subrutinas, tendr\xe1 que escribir el c\xf3digo cada vez que quiera modificar el registro de un cliente. Si utiliza subrutinas, s\xf3lo tendr\xe1 que escribirlas una vez. Esta es la primera ventaja de las subrutinas: reducir la cantidad de c\xf3digo."}),"\n",(0,s.jsxs)(o.p,{children:["Si el c\xf3digo descrito anteriormente fuera un m\xe9todo llamado ",(0,s.jsx)(o.code,{children:"MODIFY_CUSTOMER"}),", se ejecutar\xeda simplemente utilizando el nombre del m\xe9todo en otro m\xe9todo. Por ejemplo, para modificar el registro de un cliente y luego imprimir el registro, se escribir\xeda este m\xe9todo:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" MODIFY_CUSTOMER\n PRINT SELECTION([Customers])\n"})}),"\n",(0,s.jsxs)(o.p,{children:["Esta posibilidad simplifica enormemente sus m\xe9todos. En el ejemplo, no es necesario saber c\xf3mo funciona el m\xe9todo ",(0,s.jsx)(o.code,{children:"MODIFY_CUSTOMER"}),", s\xf3lo lo que hace. Esta es la segunda raz\xf3n para utilizar subrutinas: clarificar sus m\xe9todos. De este modo, sus m\xe9todos se convierten en extensiones del lenguaje 4D."]}),"\n",(0,s.jsx)(o.p,{children:"Si necesita cambiar su m\xe9todo de b\xfasqueda de clientes en este proyecto de ejemplo, tendr\xe1 que cambiar s\xf3lo un m\xe9todo, no diez. Esta es la siguiente raz\xf3n para utilizar subrutinas: facilitar los cambios en sus m\xe9todos."}),"\n",(0,s.jsx)(o.p,{children:"Utilizando las subrutinas, hace que su c\xf3digo sea modular. Esto significa simplemente dividir el c\xf3digo en m\xf3dulos (subrutinas), cada una de las cuales realiza una tarea l\xf3gica. Considere el siguiente c\xf3digo de un proyecto de de cuentas corrientes:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" FIND_CLEARED_CHECKS //Buscar los cheques emitidos\n RECONCILE_ACCOUNT //Reconciliar la cuenta\n PRINT_CHECK_BOOK_REPORT //Imprimir un informe de la chequera\n"})}),"\n",(0,s.jsx)(o.p,{children:"Incluso para alguien que no conozca el proyecto, est\xe1 claro lo que hace este c\xf3digo. No es necesario examinar cada subrutina. Cada subrutina puede tener muchas l\xedneas y realizar algunas operaciones complejas, pero aqu\xed s\xf3lo es importante que realice su tarea. Le recomendamos que divida su c\xf3digo en tareas l\xf3gicas, o m\xf3dulos, siempre que sea posible."}),"\n",(0,s.jsx)(o.h3,{id:"objeto-f\xf3rmula",children:"Objeto f\xf3rmula"}),"\n",(0,s.jsxs)(o.p,{children:["Puede encapsular los m\xe9todos de su proyecto en objetos ",(0,s.jsx)(o.strong,{children:"f\xf3rmula"})," y llamarlos desde sus objetos."]}),"\n",(0,s.jsxs)(o.p,{children:["Los comandos ",(0,s.jsx)(o.code,{children:"Formula"})," o ",(0,s.jsx)(o.code,{children:"Formula from string"})," permiten crear objetos de f\xf3rmula nativos que se pueden encapsular en las propiedades de los objetos. Permite implementar m\xe9todos objetos personalizados."]}),"\n",(0,s.jsxs)(o.p,{children:["Para ejecutar un m\xe9todo almacenado en una propiedad objeto, utilice el operador ",(0,s.jsx)(o.strong,{children:"()"})," despu\xe9s del nombre de la propiedad. Por ejemplo:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'//myAlert\nALERT("Hello world!")\n'})}),"\n",(0,s.jsxs)(o.p,{children:["Luego ",(0,s.jsx)(o.code,{children:"myAlert"})," puede encapsularse en cualquier objeto y llamarse:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'var $o : Object\n$o:=New object("custom_Alert";Formula(myAlert))\n$o.custom_Alert() //muestra "Hello world!"\n'})}),"\n",(0,s.jsx)(o.p,{children:"Tambi\xe9n se admite la sintaxis con par\xe9ntesis:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'$o["custom_Alert"]() //muestra "Hello world!"\n'})}),"\n",(0,s.jsxs)(o.p,{children:["Tambi\xe9n puede ",(0,s.jsx)(o.a,{href:"/docs/es/20-R5/Concepts/parameters",children:"pasar par\xe1metros"})," a su f\xf3rmula cuando la llame utilizando $1, $2\u2026 al igual que con los m\xe9todos de proyecto 4D:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'//m\xe9todo fullName \nC_TEXT($0;$1;$2)\n$0:=$1+" "+$2\n'})}),"\n",(0,s.jsxs)(o.p,{children:["Puede encapsular ",(0,s.jsx)(o.code,{children:"fullName"})," en un objeto:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'var $o : Object\n$o:=New object("full_name";Formula(fullName))\n$result:=$o.full_name("John";"Smith") \n//$result = "John Smith"\n//equivalente a $result:=fullName("param1";"param2")\n'})}),"\n",(0,s.jsxs)(o.p,{children:["Combinados con la funci\xf3n ",(0,s.jsx)(o.code,{children:"This"}),", estos m\xe9todos objetos permiten escribir un c\xf3digo gen\xe9rico muy poderoso. Por ejemplo:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'//m\xe9todo fullName2\nC_TEXT($0)\n$0:=This.firstName+" "+This.lastName\n'})}),"\n",(0,s.jsx)(o.p,{children:"Luego el m\xe9todo act\xfaa como un nuevo atributo calculado que se puede a\xf1adir a otros atributos:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'var $o : Object\n$o:=New object("firstName";"Jim";"lastName";"Wesson")\n$o.fullName:=Formula(fullName2) //a\xf1ade el m\xe9todo\n\n$result:=$o.fullName() \n//$result = "Jim Wesson"\n'})}),"\n",(0,s.jsxs)(o.p,{children:["Tenga en cuenta que, aunque no tenga par\xe1metros, un m\xe9todo objeto que vaya a ejecutarse debe llamarse con par\xe9ntesis ",(0,s.jsx)(o.code,{children:"()"}),". Llamar s\xf3lo a la propiedad del objeto devolver\xe1 una nueva referencia a la f\xf3rmula (y no la ejecutar\xe1):"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"$o:=$f.message //devuelve el objeto f\xf3rmula en $o\n"})}),"\n",(0,s.jsx)(o.h3,{id:"m\xe9todos-de-men\xfa",children:"M\xe9todos de men\xfa"}),"\n",(0,s.jsx)(o.p,{children:'Un m\xe9todo de men\xfa se llama cuando se selecciona el comando de men\xfa personalizado al que est\xe1 asociado. El m\xe9todo se asigna al comando del men\xfa utilizando el editor de men\xfas o un comando del tema "Men\xfas". El m\xe9todo se ejecuta cuando se elige el comando del men\xfa. Al crear men\xfas personalizados con m\xe9todos de men\xfa que realizan acciones espec\xedficas, usted crea interfaces personalizadas para sus aplicaciones de escritorio.'}),"\n",(0,s.jsxs)(o.p,{children:["Los comandos de men\xfa personalizados pueden hacer que se realicen una o varias actividades. Por ejemplo, un comando de men\xfa de entrada de registros puede llamar a un m\xe9todo que realice dos tareas: mostrar el formulario de entrada apropiado y llamar al comando ",(0,s.jsx)(o.code,{children:"ADD RECORD"})," hasta que el usuario cancele la actividad de entrada de datos."]}),"\n",(0,s.jsx)(o.p,{children:"La automatizaci\xf3n de secuencias de actividades es una capacidad muy poderosa del lenguaje de programaci\xf3n. Utilizando los men\xfas personalizados, se pueden automatizar las secuencias de tareas y, por lo tanto, ofrecer m\xe1s orientaci\xf3n a los usuarios de la aplicaci\xf3n."}),"\n",(0,s.jsx)(o.h3,{id:"m\xe9todos-de-gesti\xf3n-de-proceso",children:"M\xe9todos de gesti\xf3n de proceso"}),"\n",(0,s.jsxs)(o.p,{children:["Un ",(0,s.jsx)(o.strong,{children:"m\xe9todo proyecto"})," es un m\xe9todo proyecto que se llama cuando se inicia un proceso. El proceso dura s\xf3lo mientras el m\xe9todo contin\xfaa ejecut\xe1ndose, excepto si se trata de un proceso Worker. Tenga en cuenta que un m\xe9todo de men\xfa asociado a un comando de men\xfa con la propiedad ",(0,s.jsx)(o.em,{children:"Iniciar un nuevo proceso"})," es tambi\xe9n el m\xe9todo de gesti\xf3n de proceso para el proceso reci\xe9n creado."]}),"\n",(0,s.jsx)(o.h3,{id:"m\xe9todos-de-gesti\xf3n-de-eventos-y-errores",children:"M\xe9todos de gesti\xf3n de eventos y errores"}),"\n",(0,s.jsxs)(o.p,{children:["Un ",(0,s.jsx)(o.strong,{children:"m\xe9todo de gesti\xf3n de eventos"})," es un m\xe9todo dedicado a la gesti\xf3n de eventos, que se ejecuta en un proceso diferente del m\xe9todo de gesti\xf3n de procesos. Generalmente, para la gesti\xf3n de eventos, 4D se encarga de la mayor parte. Por ejemplo, durante la entrada de datos, 4D detecta las pulsaciones de las teclas y los clics, y luego llama a los m\xe9todos objeto y formulario correspondientes para que usted pueda responder adecuadamente a los eventos desde estos m\xe9todos. Para m\xe1s informaci\xf3n, consulte la descripci\xf3n del comando ",(0,s.jsx)(o.code,{children:"ON EVENT CALL"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Un ",(0,s.jsx)(o.strong,{children:"m\xe9todo de gesti\xf3n de errores"})," es un m\xe9todo proyecto basado en interrupciones. Se llama cada vez que se produce un error o una excepci\xf3n. Para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,s.jsx)(o.a,{href:"/docs/es/20-R5/Concepts/error-handling",children:"Gesti\xf3n de errores"}),"."]}),"\n",(0,s.jsx)(o.h3,{id:"execution-mode",children:"Execution mode"}),"\n",(0,s.jsx)(o.p,{children:"Los m\xe9todos proyecto escritos en su aplicaci\xf3n suelen ser llamados autom\xe1ticamente durante el uso de la aplicaci\xf3n a trav\xe9s de comandos de men\xfa, botones, otros m\xe9todos, etc. En cuanto a los m\xe9todos base, se ejecutan en relaci\xf3n con eventos espec\xedficos que ocurren en la aplicaci\xf3n."}),"\n",(0,s.jsx)(o.p,{children:"Sin embargo, para prop\xf3sitos de prueba y depuraci\xf3n, 4D le permite ejecutar manualmente los m\xe9todos proyecto y ciertos m\xe9todos de la base de datos en el modo Dise\xf1o. En este caso, es posible ejecutar el m\xe9todo en un nuevo proceso y/o directamente en modo Depuraci\xf3n, para comprobar su ejecuci\xf3n paso a paso."}),"\n",(0,s.jsx)(o.p,{children:"Est\xe1n disponibles los siguientes modos de ejecuci\xf3n:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"El m\xe9todo A puede llamar al m\xe9todo B que puede llamar a A, por lo que A volver\xe1 a llamar a B y as\xed sucesivamente."}),"\n",(0,s.jsx)(o.li,{children:"Un m\xe9todo puede llamarse a s\xed mismo."}),"\n"]}),"\n",(0,s.jsx)(o.h4,{id:"desde-el-editor-de-c\xf3digo",children:"Desde el Editor de c\xf3digo"}),"\n",(0,s.jsxs)(o.p,{children:["Cada ventana del ",(0,s.jsx)(o.a,{href:"/docs/es/20-R5/code-editor/write-class-method",children:(0,s.jsx)(o.strong,{children:"Editor de c\xf3digo"})})," tiene un bot\xf3n que se puede utilizar para ejecutar el m\xe9todo actual. Mediante el men\xfa asociado a este bot\xf3n, se puede elegir el tipo de ejecuci\xf3n deseado."]}),"\n",(0,s.jsx)(o.p,{children:"Este bot\xf3n s\xf3lo est\xe1 activo para los m\xe9todos proyecto y para los siguientes m\xe9todos base de datos:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"On Startup"}),"\n",(0,s.jsx)(o.li,{children:"On Exit"}),"\n",(0,s.jsx)(o.li,{children:"On Server Startup"}),"\n",(0,s.jsx)(o.li,{children:"On Server Shutdown"}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["Para m\xe1s informaci\xf3n, consulte ",(0,s.jsx)(o.a,{href:"/docs/es/20-R5/code-editor/write-class-method#toolbar",children:"Barra de herramientas"}),"."]}),"\n",(0,s.jsx)(o.h4,{id:"de-la-caja-de-di\xe1logo-ejecutar-m\xe9todo",children:"De la caja de di\xe1logo Ejecutar m\xe9todo"}),"\n",(0,s.jsx)(o.p,{children:"En 4D, algunos usos t\xedpicos de la recursividad son:"}),"\n",(0,s.jsx)(o.p,{children:"Esta caja de di\xe1logo lista todos los m\xe9todos proyecto de la base de datos, incluyendo los m\xe9todos proyecto compartidos de los componentes. Por otra parte, los m\xe9todos proyecto que han sido declarados invisibles no aparecer\xe1n."}),"\n",(0,s.jsxs)(o.p,{children:["Para ejecutar un m\xe9todo proyecto, basta con seleccionar su nombre en la lista y hacer clic en ",(0,s.jsx)(o.strong,{children:"Ejecutar"}),". Para ejecutar un m\xe9todo paso a paso en modo Depuraci\xf3n, haga clic en ",(0,s.jsx)(o.strong,{children:"Depuraci\xf3n"}),". Para m\xe1s informaci\xf3n sobre el depurador de 4D, consulte la secci\xf3n ",(0,s.jsx)(o.a,{href:"/docs/es/20-R5/Debugging/basics",children:"Depuraci\xf3n"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Si marca la casilla ",(0,s.jsx)(o.strong,{children:"Nuevo proceso"}),", el m\xe9todo seleccionado se ejecuta en otro proceso. Si el m\xe9todo est\xe1 realizando una tarea que requiere mucho tiempo, como la impresi\xf3n de un gran conjunto de registros, puede seguir trabajando con su base de datos, a\xf1adiendo registros a una tabla, creando un gr\xe1fico para mostrar los datos, etc. Para m\xe1s informaci\xf3n sobre los procesos, consulte\xa0",(0,s.jsx)(o.a,{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Processes.300-5830912.en.html",children:"Procesos"}),"\xa0en el manual ",(0,s.jsx)(o.em,{children:"Lenguaje"}),"\xa04D."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Notas Servidor 4D"}),":"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["Si desea que el m\xe9todo se ejecute en el equipo servidor y no en el equipo cliente, seleccione la opci\xf3n ",(0,s.jsx)(o.strong,{children:"En 4D Server"})," en el men\xfa A ejecutar. En este caso, se crea un nuevo proceso, llamado ",(0,s.jsx)(o.em,{children:"procedimiento almacenado"}),", en la m\xe1quina servidor para ejecutar el m\xe9todo. Esta opci\xf3n puede utilizarse para reducir el tr\xe1fico de red y optimizar el funcionamiento de 4D Server, en particular para los m\xe9todos que llaman a los datos almacenados en el disco. Todos los tipos de m\xe9todos pueden ejecutarse en la m\xe1quina servidor o en otra m\xe1quina cliente, excepto los que modifican la interfaz de usuario. En este caso, los procedimientos almacenados son ineficaces."]}),"\n",(0,s.jsxs)(o.li,{children:['Tambi\xe9n puede optar por ejecutar el m\xe9todo en otra estaci\xf3n de trabajo cliente. Otras estaciones de trabajo cliente no aparecer\xe1n en el men\xfa, a menos que hayan sido previamente "registradas" (para m\xe1s informaci\xf3n, consulte la descripci\xf3n de la opci\xf3n ',(0,s.jsx)(o.a,{href:"https://doc.4d.com/4dv19/help/command/en/page648.html",children:"REGISTER CLIENT"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["Por defecto, est\xe1 seleccionada la opci\xf3n ",(0,s.jsx)(o.strong,{children:"localmente"}),". Con la versi\xf3n 4D monousuario, esta es la \xfanica opci\xf3n disponible."]}),"\n",(0,s.jsx)(o.h2,{id:"m\xe9todos-proyecto-recursivos",children:"M\xe9todos proyecto recursivos"}),"\n",(0,s.jsx)(o.p,{children:"Los m\xe9todos proyecto pueden llamarse a s\xed mismos. Por ejemplo:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"El m\xe9todo A puede llamar al m\xe9todo B que puede llamar a A, por lo que A volver\xe1 a llamar a B y as\xed sucesivamente."}),"\n",(0,s.jsx)(o.li,{children:"Un m\xe9todo puede llamarse a s\xed mismo."}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"Esto se llama recursividad. El lenguaje 4D soporta totalmente la recursividad."}),"\n",(0,s.jsxs)(o.p,{children:["Aqu\xed un ejemplo. Digamos que tiene una tabla ",(0,s.jsx)(o.code,{children:"[Friends and Relatives]"})," compuesta por este conjunto de campos extremadamente simplificado:"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"[Friends and Relatives]Name"})}),"\n",(0,s.jsx)(o.li,{children:(0,s.jsx)(o.code,{children:"[Friends and Relatives]ChildrensName"})}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:'Para este ejemplo, suponemos que los valores de los campos son \xfanicos (no hay dos personas con el mismo nombre). A partir de un nombre, quiere escribir la frase "Un amigo m\xedo, Juan, que es hijo de Pablo, que es hijo de Juana, que es hijo de Roberto, que es hijo de Leonor, se gana la vida as\xed":'}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsx)(o.li,{children:"Puede proceder de esta manera:"}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:' $vsName:=Request("Enter the name:";"John")\n If(OK=1)\n    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)\n    If(Records in selection([Friends and Relatives])>0)\n       $vtTheWholeStory:="A friend of mine, "+$vsName\n       Repeat\n          QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$vsName)\n          $vlQueryResult:=Records in selection([Friends and Relatives])\n          If($vlQueryResult>0)\n             $vtTheWholeStory:=$vtTheWholeStory+" who is the child of "+[Friends and Relatives]Name\n             $vsName:=[Friends and Relatives]Name\n          End if\n       Until($vlQueryResult=0)\n       $vtTheWholeStory:=$vtTheWholeStory+", does this for a living!"\n       ALERT($vtTheWholeStory)\n    End if\n End if\n'})}),"\n",(0,s.jsxs)(o.ol,{start:"2",children:["\n",(0,s.jsx)(o.li,{children:"Tambi\xe9n puede proceder as\xed:"}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:' $vsName:=Request("Enter the name:";"John")\n If(OK=1)\n    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)\n    If(Records in selection([Friends and Relatives])>0)\n       ALERT("A friend of mine, "+Genealogy of($vsName)+", does this for a living!")\n    End if\n End if\n'})}),"\n",(0,s.jsxs)(o.p,{children:["con la funci\xf3n recursiva ",(0,s.jsx)(o.code,{children:"Genealogy of"})," siguiente:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'  ` Genealogy of project method\n  ` Genealogy of ( String ) -> Text\n  ` Genealogy of ( Name ) -> Part of sentence\n \n $0:=$1\n QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$1)\n If(Records in selection([Friends and Relatives])>0)\n    $0:=$0+" who is the child of "+Genealogy of([Friends and Relatives]Name)\n End if\n'})}),"\n",(0,s.jsxs)(o.p,{children:["Note que el m\xe9todo ",(0,s.jsx)(o.code,{children:"Genealogy of"})," se llama a s\xed mismo."]}),"\n",(0,s.jsxs)(o.p,{children:["La primera forma es un ",(0,s.jsx)(o.strong,{children:"algoritmo iterativo"}),". La segunda forma es un ",(0,s.jsx)(o.strong,{children:"algoritmo recursivo"}),"."]}),"\n",(0,s.jsx)(o.p,{children:"Cuando implemente el c\xf3digo para casos como el del ejemplo anterior, es importante tener en cuenta que siempre puede escribir m\xe9todos utilizando los algoritmos iterativos o recursivos. Normalmente, la recursividad ofrece un c\xf3digo m\xe1s conciso, legible y mantenible, pero su uso no es obligatorio."}),"\n",(0,s.jsx)(o.p,{children:"En 4D, algunos usos t\xedpicos de la recursividad son:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Tratar los registros dentro de las tablas que se relacionan entre s\xed de la misma manera que en el ejemplo."}),"\n",(0,s.jsxs)(o.li,{children:["Navegar por los documentos y las carpetas del disco, utilizando los comandos ",(0,s.jsx)(o.code,{children:"FOLDER LIST"})," y ",(0,s.jsx)(o.code,{children:"DOCUMENT LIST"}),". Una carpeta puede contener carpetas y documentos, las subcarpetas pueden a su vez contener carpetas y documentos, y as\xed sucesivamente."]}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Importante:"})," Las llamadas recursivas deben terminar siempre en alg\xfan punto. En el ejemplo, el m\xe9todo ",(0,s.jsx)(o.code,{children:"Genealogy of"}),' deja de llamarse a s\xed mismo cuando la consulta no devuelve ning\xfan registro. Sin esta prueba condicional, el m\xe9todo se llamar\xeda a s\xed mismo indefinidamente; eventualmente, 4D devolver\xeda un error "Pila llena" porque ya no tendr\xeda espacio para "apilar" las llamadas (as\xed como los par\xe1metros y las variables locales utilizadas en el m\xe9todo).']})]})}function u(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>d,x:()=>i});var s=n(296540);const a={},r=s.createContext(a);function d(e){const o=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);