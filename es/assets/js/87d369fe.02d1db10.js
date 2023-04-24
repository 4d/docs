"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87027],{3905:(e,a,o)=>{o.d(a,{Zo:()=>u,kt:()=>p});var t=o(67294);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function l(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,t,n=function(e,a){if(null==e)return{};var o,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=t.createContext({}),d=function(e){var a=t.useContext(i),o=a;return e&&(o="function"==typeof e?e(a):l(l({},a),e)),o},u=function(e){var a=d(e.components);return t.createElement(i.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var o=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(o),p=n,g=c["".concat(i,".").concat(p)]||c[p]||m[p]||r;return o?t.createElement(g,l(l({ref:a},u),{},{components:o})):t.createElement(g,l({ref:a},u))}));function p(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=o.length,l=new Array(r);l[0]=c;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var d=2;d<r;d++)l[d]=o[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,o)}c.displayName="MDXCreateElement"},52501:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});o(67294);var t=o(3905);function n(){return n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},n.apply(this,arguments)}function r(e,a){if(null==e)return{};var o,t,n=function(e,a){if(null==e)return{};var o,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}const l={id:"methods",title:"M\xe9todos"},s=void 0,i={unversionedId:"Concepts/methods",id:"version-19-R8/Concepts/methods",title:"M\xe9todos",description:"Un m\xe9todo es b\xe1sicamente un trozo de c\xf3digo que ejecuta una o varias acciones. Un m\xe9todo se compone de instrucciones.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R8/Concepts/methods.md",sourceDirName:"Concepts",slug:"/Concepts/methods",permalink:"/docs/es/19-R8/Concepts/methods",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fmethods.md%20(19-R8)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R8",frontMatter:{id:"methods",title:"M\xe9todos"},sidebar:"docs",previous:{title:"Arrays",permalink:"/docs/es/19-R8/Concepts/arrays"},next:{title:"Par\xe1metros",permalink:"/docs/es/19-R8/Concepts/parameters"}},d={},u=[{value:"Tipos de m\xe9todos",id:"tipos-de-m\xe9todos",level:2},{value:"M\xe9todos proyecto",id:"m\xe9todos-proyecto",level:2},{value:"Subrutinas",id:"subrutinas",level:3},{value:"Objeto f\xf3rmula",id:"objeto-f\xf3rmula",level:3},{value:"M\xe9todos de men\xfa",id:"m\xe9todos-de-men\xfa",level:3},{value:"M\xe9todos de gesti\xf3n de proceso",id:"m\xe9todos-de-gesti\xf3n-de-proceso",level:3},{value:"M\xe9todos de gesti\xf3n de eventos y errores",id:"m\xe9todos-de-gesti\xf3n-de-eventos-y-errores",level:3},{value:"Execution mode",id:"execution-mode",level:3},{value:"Desde el Editor de c\xf3digo",id:"desde-el-editor-de-c\xf3digo",level:4},{value:"De la caja de di\xe1logo Ejecutar m\xe9todo",id:"de-la-caja-de-di\xe1logo-ejecutar-m\xe9todo",level:4},{value:"M\xe9todos proyecto recursivos",id:"m\xe9todos-proyecto-recursivos",level:2}],m={toc:u};function c(e){var{components:a}=e,o=r(e,["components"]);return(0,t.kt)("wrapper",n({},m,o,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Un m\xe9todo es b\xe1sicamente un trozo de c\xf3digo que ejecuta una o varias acciones. Un m\xe9todo se compone de instrucciones."),(0,t.kt)("p",null,"Una l\xednea de instrucci\xf3n realiza una acci\xf3n, y puede ser simple o compleja. Cada instrucci\xf3n suele constar de una l\xednea en el m\xe9todo (si es necesario, puede dividirse en ",(0,t.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/Concepts/quick-tour#code-on-several-lines"}),"utilizando el caracter ",(0,t.kt)("inlineCode",{parentName:"a"},"\\")),")."),(0,t.kt)("p",null,"El tama\xf1o m\xe1ximo de un m\xe9todo est\xe1 limitado a 2 GB de texto o 32.000 l\xedneas de c\xf3digo."),(0,t.kt)("h2",n({},{id:"tipos-de-m\xe9todos"}),"Tipos de m\xe9todos"),(0,t.kt)("p",null,"En el lenguaje 4D, hay varias categor\xedas de m\xe9todos. La categor\xeda depende de c\xf3mo se les pueda llamar:"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",n({parentName:"tr"},{align:null}),"Tipo"),(0,t.kt)("th",n({parentName:"tr"},{align:null}),"Contexto de llamada"),(0,t.kt)("th",n({parentName:"tr"},{align:null}),"Acepta los par\xe1metros"),(0,t.kt)("th",n({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",n({parentName:"tr"},{align:null}),(0,t.kt)("strong",{parentName:"td"},"M\xe9todos proyecto")),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Por demanda, cuando se llama al nombre del m\xe9todo proyecto (ver ",(0,t.kt)("a",n({parentName:"td"},{href:"#calling-project-methods"}),"Llamando a m\xe9todos proyecto"),")"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"S\xed"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Puede contener c\xf3digo para ejecutar acciones personalizadas. Una vez creado un m\xe9todo proyecto, pasa a formar parte del lenguaje del proyecto.")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",n({parentName:"tr"},{align:null}),(0,t.kt)("strong",{parentName:"td"},"M\xe9todo objeto (widget)")),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Autom\xe1tico, cuando un evento involucra al objeto al que se asocia el m\xe9todo"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"No"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Propiedad de un objeto formulario (tambi\xe9n llamado widget)")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",n({parentName:"tr"},{align:null}),(0,t.kt)("strong",{parentName:"td"},"M\xe9todo formulario")),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Autom\xe1tico, cuando un evento involucra al formulario al que se asocia el m\xe9todo"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"No"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Propiedad de un formulario. Puede utilizar un m\xe9todo formulario para gestionar datos y objetos, pero generalmente es m\xe1s sencillo y eficiente utilizar un m\xe9todo objeto para estos fines.")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",n({parentName:"tr"},{align:null}),(0,t.kt)("strong",{parentName:"td"},"Trigger")," (o ",(0,t.kt)("em",{parentName:"td"},"m\xe9todo tabla"),")"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Autom\xe1tico, cada vez que se manipulan los registros de una tabla (A\xf1adir, Eliminar y Modificar)"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"No"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),'Propiedad de una tabla. Los triggers son m\xe9todos que pueden evitar operaciones "ilegales" con los registros de su base.')),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",n({parentName:"tr"},{align:null}),(0,t.kt)("strong",{parentName:"td"},"M\xe9todo base")),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Autom\xe1tico, cuando se produce un evento de la sesi\xf3n de trabajo"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"S\xed (predefinido)"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Hay 16 m\xe9todos base en 4D.")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",n({parentName:"tr"},{align:null}),(0,t.kt)("strong",{parentName:"td"},"Class")),(0,t.kt)("td",n({parentName:"tr"},{align:null}),(0,t.kt)("a",n({parentName:"td"},{href:"/docs/es/19-R8/Concepts/classes#function"}),(0,t.kt)("strong",{parentName:"a"},"Las funciones de clases"))," se llaman en el contexto de una instancia de objeto"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"s\xed"),(0,t.kt)("td",n({parentName:"tr"},{align:null}),"Las funciones de clases pueden estar integradas (",(0,t.kt)("em",{parentName:"td"},"por ejemplo")," ",(0,t.kt)("inlineCode",{parentName:"td"},"collection.orderBy()")," o ",(0,t.kt)("inlineCode",{parentName:"td"},"entity.save()"),"), o creadas por el desarrollador 4D. Ver ",(0,t.kt)("a",n({parentName:"td"},{href:"/docs/es/19-R8/Concepts/classes"}),(0,t.kt)("strong",{parentName:"a"},"Clases")))))),(0,t.kt)("h2",n({},{id:"m\xe9todos-proyecto"}),"M\xe9todos proyecto"),(0,t.kt)("p",null,"Un m\xe9todo proyecto puede tener uno de los siguientes papeles, dependiendo de c\xf3mo se ejecute y utilice:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Subrutina"),(0,t.kt)("li",{parentName:"ul"},"Objeto f\xf3rmula"),(0,t.kt)("li",{parentName:"ul"},"M\xe9todo de men\xfa"),(0,t.kt)("li",{parentName:"ul"},"M\xe9todo de gesti\xf3n de proceso"),(0,t.kt)("li",{parentName:"ul"},"M\xe9todos de gesti\xf3n de eventos o errores")),(0,t.kt)("p",null,"Tambi\xe9n puede ejecutar los m\xe9todos de su proyecto manualmente, por ejemplo, para realizar pruebas."),(0,t.kt)("h3",n({},{id:"subrutinas"}),"Subrutinas"),(0,t.kt)("p",null,"Una subrutina es un m\xe9todo proyecto que puede considerarse como un ayudante. Realiza aquellas tareas que otros m\xe9todos le solicitan. Una funci\xf3n es una subrutina que devuelve un valor al m\xe9todo que la llam\xf3."),(0,t.kt)("p",null,"Cuando crea un m\xe9todo proyecto, \xe9ste pasa a formar parte del lenguaje del proyecto en el que lo crea. Entonces puede llamar al m\xe9todo proyecto desde otros m\xe9todos (m\xe9todo proyecto, m\xe9todo objeto, etc.), de la misma manera que llama a los comandos integrados de 4D. Un m\xe9todo proyecto utilizado de este manera se llama una subrutina."),(0,t.kt)("p",null,"Se utilizan subrutinas para:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Reducci\xf3n del c\xf3digo repetitivo"),(0,t.kt)("li",{parentName:"ul"},"Clarificaci\xf3n de los m\xe9todos"),(0,t.kt)("li",{parentName:"ul"},"Facilitar los cambios en sus m\xe9todos"),(0,t.kt)("li",{parentName:"ul"},"Modularizar el c\xf3digo")),(0,t.kt)("p",null,"Por ejemplo, supongamos que tiene un proyecto de clientes. Al personalizar el proyecto, se da cuenta de que hay algunas tareas que realiza reiteradamente, como la b\xfasqueda de un cliente y la modificaci\xf3n de su registro. El c\xf3digo para hacer esto podr\xeda ser:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'  // B\xfasqueda de un cliente\n QUERY BY EXAMPLE([Customers])\n  // Selecci\xf3n del formulario entrada\n FORM SET INPUT([Customers];"Data Entry")\n  // Modificaci\xf3n del registro del cliente\n MODIFY RECORD([Customers])\n')),(0,t.kt)("p",null,"Si no utiliza subrutinas, tendr\xe1 que escribir el c\xf3digo cada vez que quiera modificar el registro de un cliente. Si no utiliza subrutinas, tendr\xe1 que escribir el c\xf3digo cada vez que quiera modificar el registro de un cliente. Si utiliza subrutinas, s\xf3lo tendr\xe1 que escribirlas una vez. Esta es la primera ventaja de las subrutinas: reducir la cantidad de c\xf3digo."),(0,t.kt)("p",null,"Si el c\xf3digo descrito anteriormente fuera un m\xe9todo llamado ",(0,t.kt)("inlineCode",{parentName:"p"},"MODIFY_CUSTOMER"),", se ejecutar\xeda simplemente utilizando el nombre del m\xe9todo en otro m\xe9todo. Por ejemplo, para modificar el registro de un cliente y luego imprimir el registro, se escribir\xeda este m\xe9todo:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"})," MODIFY_CUSTOMER\n PRINT SELECTION([Customers])\n")),(0,t.kt)("p",null,"Esta posibilidad simplifica enormemente sus m\xe9todos. En el ejemplo, no es necesario saber c\xf3mo funciona el m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"MODIFY_CUSTOMER"),", s\xf3lo lo que hace. Esta es la segunda raz\xf3n para utilizar subrutinas: clarificar sus m\xe9todos. De este modo, sus m\xe9todos se convierten en extensiones del lenguaje 4D."),(0,t.kt)("p",null,"Si necesita cambiar su m\xe9todo de b\xfasqueda de clientes en este proyecto de ejemplo, tendr\xe1 que cambiar s\xf3lo un m\xe9todo, no diez. Esta es la siguiente raz\xf3n para utilizar subrutinas: facilitar los cambios en sus m\xe9todos."),(0,t.kt)("p",null,"Utilizando las subrutinas, hace que su c\xf3digo sea modular. Esto significa simplemente dividir el c\xf3digo en m\xf3dulos (subrutinas), cada una de las cuales realiza una tarea l\xf3gica. Considere el siguiente c\xf3digo de un proyecto de de cuentas corrientes:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"})," FIND_CLEARED_CHECKS //Buscar los cheques emitidos\n RECONCILE_ACCOUNT //Reconciliar la cuenta\n PRINT_CHECK_BOOK_REPORT //Imprimir un informe de la chequera\n")),(0,t.kt)("p",null,"Incluso para alguien que no conozca el proyecto, est\xe1 claro lo que hace este c\xf3digo. No es necesario examinar cada subrutina. Cada subrutina puede tener muchas l\xedneas y realizar algunas operaciones complejas, pero aqu\xed s\xf3lo es importante que realice su tarea. Le recomendamos que divida su c\xf3digo en tareas l\xf3gicas, o m\xf3dulos, siempre que sea posible."),(0,t.kt)("h3",n({},{id:"objeto-f\xf3rmula"}),"Objeto f\xf3rmula"),(0,t.kt)("p",null,"Puede encapsular los m\xe9todos de su proyecto en objetos ",(0,t.kt)("strong",{parentName:"p"},"f\xf3rmula")," y llamarlos desde sus objetos."),(0,t.kt)("p",null,"Los comandos ",(0,t.kt)("inlineCode",{parentName:"p"},"Formula")," o ",(0,t.kt)("inlineCode",{parentName:"p"},"Formula from string")," permiten crear objetos de f\xf3rmula nativos que se pueden encapsular en las propiedades de los objetos. Permite implementar m\xe9todos objetos personalizados."),(0,t.kt)("p",null,"Para ejecutar un m\xe9todo almacenado en una propiedad objeto, utilice el operador ",(0,t.kt)("strong",{parentName:"p"},"()")," despu\xe9s del nombre de la propiedad. Por ejemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'//myAlert\nALERT("Hello world!")\n')),(0,t.kt)("p",null,"Luego ",(0,t.kt)("inlineCode",{parentName:"p"},"myAlert")," puede encapsularse en cualquier objeto y llamarse:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'var $o : Object\n$o:=New object("custom_Alert";Formula(myAlert))\n$o.custom_Alert() //muestra "Hello world!"\n')),(0,t.kt)("p",null,"Tambi\xe9n se admite la sintaxis con par\xe9ntesis:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'$o["custom_Alert"]() //muestra "Hello world!"\n')),(0,t.kt)("p",null,"Tambi\xe9n puede ",(0,t.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/Concepts/parameters"}),"pasar par\xe1metros")," a su f\xf3rmula cuando la llame utilizando $1, $2... al igual que con los m\xe9todos proyecto 4D:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'//m\xe9todo fullName \nC_TEXT($0;$1;$2)\n$0:=$1+" "+$2\n')),(0,t.kt)("p",null,"Puede encapsular ",(0,t.kt)("inlineCode",{parentName:"p"},"fullName")," en un objeto:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'var $o : Object\n$o:=New object("full_name";Formula(fullName))\n$result:=$o.full_name("John";"Smith") \n//$result = "John Smith"\n//equivalente a $result:=fullName("param1";"param2")\n')),(0,t.kt)("p",null,"Combinados con la funci\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},"This"),", estos m\xe9todos objetos permiten escribir un c\xf3digo gen\xe9rico muy poderoso. Por ejemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'//m\xe9todo fullName2\nC_TEXT($0)\n$0:=This.firstName+" "+This.lastName\n')),(0,t.kt)("p",null,"Luego el m\xe9todo act\xfaa como un nuevo atributo calculado que se puede a\xf1adir a otros atributos:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'var $o : Object\n$o:=New object("firstName";"Jim";"lastName";"Wesson")\n$o.fullName:=Formula(fullName2) //a\xf1ade el m\xe9todo\n\n$result:=$o.fullName() \n//$result = "Jim Wesson"\n')),(0,t.kt)("p",null,"Tenga en cuenta que, aunque no tenga par\xe1metros, un m\xe9todo objeto que vaya a ejecutarse debe llamarse con par\xe9ntesis ",(0,t.kt)("inlineCode",{parentName:"p"},"()"),". Llamar s\xf3lo a la propiedad del objeto devolver\xe1 una nueva referencia a la f\xf3rmula (y no la ejecutar\xe1):"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"$o:=$f.message //devuelve el objeto f\xf3rmula en $o\n")),(0,t.kt)("h3",n({},{id:"m\xe9todos-de-men\xfa"}),"M\xe9todos de men\xfa"),(0,t.kt)("p",null,'Un m\xe9todo de men\xfa se llama cuando se selecciona el comando de men\xfa personalizado al que est\xe1 asociado. El m\xe9todo se asigna al comando del men\xfa utilizando el editor de men\xfas o un comando del tema "Men\xfas". El m\xe9todo se ejecuta cuando se elige el comando del men\xfa. Al crear men\xfas personalizados con m\xe9todos de men\xfa que realizan acciones espec\xedficas, usted crea interfaces personalizadas para sus aplicaciones de escritorio.'),(0,t.kt)("p",null,"Los comandos de men\xfa personalizados pueden hacer que se realicen una o varias actividades. Por ejemplo, un comando de men\xfa de entrada de registros puede llamar a un m\xe9todo que realice dos tareas: mostrar el formulario de entrada apropiado y llamar al comando ",(0,t.kt)("inlineCode",{parentName:"p"},"ADD RECORD")," hasta que el usuario cancele la actividad de entrada de datos."),(0,t.kt)("p",null,"La automatizaci\xf3n de secuencias de actividades es una capacidad muy poderosa del lenguaje de programaci\xf3n. Utilizando los men\xfas personalizados, se pueden automatizar las secuencias de tareas y, por lo tanto, ofrecer m\xe1s orientaci\xf3n a los usuarios de la aplicaci\xf3n."),(0,t.kt)("h3",n({},{id:"m\xe9todos-de-gesti\xf3n-de-proceso"}),"M\xe9todos de gesti\xf3n de proceso"),(0,t.kt)("p",null,"Un ",(0,t.kt)("strong",{parentName:"p"},"m\xe9todo proyecto")," es un m\xe9todo proyecto que se llama cuando se inicia un proceso. El proceso dura s\xf3lo mientras el m\xe9todo contin\xfaa ejecut\xe1ndose, excepto si se trata de un proceso Worker. Tenga en cuenta que un m\xe9todo de men\xfa asociado a un comando de men\xfa con la propiedad ",(0,t.kt)("em",{parentName:"p"},"Iniciar un nuevo proceso")," es tambi\xe9n el m\xe9todo de gesti\xf3n de proceso para el proceso reci\xe9n creado."),(0,t.kt)("h3",n({},{id:"m\xe9todos-de-gesti\xf3n-de-eventos-y-errores"}),"M\xe9todos de gesti\xf3n de eventos y errores"),(0,t.kt)("p",null,"Un ",(0,t.kt)("strong",{parentName:"p"},"m\xe9todo de gesti\xf3n de eventos")," es un m\xe9todo dedicado a la gesti\xf3n de eventos, que se ejecuta en un proceso diferente del m\xe9todo de gesti\xf3n de procesos. Generalmente, para la gesti\xf3n de eventos, 4D se encarga de la mayor parte. Por ejemplo, durante la entrada de datos, 4D detecta las pulsaciones de las teclas y los clics, y luego llama a los m\xe9todos objeto y formulario correspondientes para que usted pueda responder adecuadamente a los eventos desde estos m\xe9todos. Para m\xe1s informaci\xf3n, consulte la descripci\xf3n del comando ",(0,t.kt)("inlineCode",{parentName:"p"},"ON EVENT CALL"),"."),(0,t.kt)("p",null,"Un ",(0,t.kt)("strong",{parentName:"p"},"m\xe9todo de gesti\xf3n de errores")," es un m\xe9todo proyecto basado en interrupciones. Se llama cada vez que se produce un error o una excepci\xf3n. Para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,t.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/Concepts/error-handling"}),"Gesti\xf3n de errores"),"."),(0,t.kt)("h3",n({},{id:"execution-mode"}),"Execution mode"),(0,t.kt)("p",null,"Los m\xe9todos proyecto escritos en su aplicaci\xf3n suelen ser llamados autom\xe1ticamente durante el uso de la aplicaci\xf3n a trav\xe9s de comandos de men\xfa, botones, otros m\xe9todos, etc. En cuanto a los m\xe9todos base, se ejecutan en relaci\xf3n con eventos espec\xedficos que ocurren en la aplicaci\xf3n."),(0,t.kt)("p",null,"Sin embargo, para prop\xf3sitos de prueba y depuraci\xf3n, 4D le permite ejecutar manualmente los m\xe9todos proyecto y ciertos m\xe9todos de la base de datos en el modo Dise\xf1o. En este caso, es posible ejecutar el m\xe9todo en un nuevo proceso y/o directamente en modo Depuraci\xf3n, para comprobar su ejecuci\xf3n paso a paso."),(0,t.kt)("p",null,"Est\xe1n disponibles los siguientes modos de ejecuci\xf3n:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"El m\xe9todo A puede llamar al m\xe9todo B que puede llamar a A, por lo que A volver\xe1 a llamar a B y as\xed sucesivamente."),(0,t.kt)("li",{parentName:"ul"},"Un m\xe9todo puede llamarse a s\xed mismo.")),(0,t.kt)("h4",n({},{id:"desde-el-editor-de-c\xf3digo"}),"Desde el Editor de c\xf3digo"),(0,t.kt)("p",null,"Each ",(0,t.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/code-editor/overview"}),(0,t.kt)("strong",{parentName:"a"},"Code Editor"))," window has a button that can be used to run the current method. Mediante el men\xfa asociado a este bot\xf3n, se puede elegir el tipo de ejecuci\xf3n deseado."),(0,t.kt)("p",null,"Este bot\xf3n s\xf3lo est\xe1 activo para los m\xe9todos proyecto y para los siguientes m\xe9todos base de datos:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"On Startup"),(0,t.kt)("li",{parentName:"ul"},"On Exit"),(0,t.kt)("li",{parentName:"ul"},"On Server Startup"),(0,t.kt)("li",{parentName:"ul"},"On Server Shutdown")),(0,t.kt)("p",null,"Para m\xe1s informaci\xf3n, consulte ",(0,t.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/code-editor/write-class-method#toolbar"}),"Barra de herramientas"),"."),(0,t.kt)("h4",n({},{id:"de-la-caja-de-di\xe1logo-ejecutar-m\xe9todo"}),"De la caja de di\xe1logo Ejecutar m\xe9todo"),(0,t.kt)("p",null,"En 4D, algunos usos t\xedpicos de la recursividad son:"),(0,t.kt)("p",null,"Esta caja de di\xe1logo lista todos los m\xe9todos proyecto de la base de datos, incluyendo los m\xe9todos proyecto compartidos de los componentes. Por otra parte, los m\xe9todos proyecto que han sido declarados invisibles no aparecer\xe1n."),(0,t.kt)("p",null,"Para ejecutar un m\xe9todo proyecto, basta con seleccionar su nombre en la lista y hacer clic en ",(0,t.kt)("strong",{parentName:"p"},"Ejecutar"),". Para ejecutar un m\xe9todo paso a paso en modo Depuraci\xf3n, haga clic en ",(0,t.kt)("strong",{parentName:"p"},"Depuraci\xf3n"),". Para m\xe1s informaci\xf3n sobre el depurador de 4D, consulte la secci\xf3n ",(0,t.kt)("a",n({parentName:"p"},{href:"/docs/es/19-R8/Debugging/basics"}),"Depuraci\xf3n"),"."),(0,t.kt)("p",null,"Si marca la casilla ",(0,t.kt)("strong",{parentName:"p"},"Nuevo proceso"),", el m\xe9todo seleccionado se ejecuta en otro proceso. Si el m\xe9todo est\xe1 realizando una tarea que requiere mucho tiempo, como la impresi\xf3n de un gran conjunto de registros, puede seguir trabajando con su base de datos, a\xf1adiendo registros a una tabla, creando un gr\xe1fico para mostrar los datos, etc. Para m\xe1s informaci\xf3n sobre los procesos, consulte\xa0",(0,t.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/Processes.300-5830912.en.html"}),"Procesos"),"\xa0en el manual ",(0,t.kt)("em",{parentName:"p"},"Lenguaje"),"\xa04D."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Notas Servidor 4D"),":"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Si desea que el m\xe9todo se ejecute en el equipo servidor y no en el equipo cliente, seleccione la opci\xf3n ",(0,t.kt)("strong",{parentName:"li"},"En 4D Server")," en el men\xfa A ejecutar. En este caso, se crea un nuevo proceso, llamado ",(0,t.kt)("em",{parentName:"li"},"procedimiento almacenado"),", en la m\xe1quina servidor para ejecutar el m\xe9todo. Esta opci\xf3n puede utilizarse para reducir el tr\xe1fico de red y optimizar el funcionamiento de 4D Server, en particular para los m\xe9todos que llaman a los datos almacenados en el disco. Todos los tipos de m\xe9todos pueden ejecutarse en la m\xe1quina servidor o en otra m\xe1quina cliente, excepto los que modifican la interfaz de usuario. En este caso, los procedimientos almacenados son ineficaces."),(0,t.kt)("li",{parentName:"ul"},'Tambi\xe9n puede optar por ejecutar el m\xe9todo en otra estaci\xf3n de trabajo cliente. Otras estaciones de trabajo cliente no aparecer\xe1n en el men\xfa, a menos que hayan sido previamente "registradas" (para m\xe1s informaci\xf3n, consulte la descripci\xf3n de la opci\xf3n ',(0,t.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4Dv19R5/4D/19-R5/REGISTER-CLIENT.301-5830908.en.html"}),"REGISTRAR CLIENTE"),".")),(0,t.kt)("p",null,"Por defecto, est\xe1 seleccionada la opci\xf3n ",(0,t.kt)("strong",{parentName:"p"},"localmente"),". Con la versi\xf3n 4D monousuario, esta es la \xfanica opci\xf3n disponible."),(0,t.kt)("h2",n({},{id:"m\xe9todos-proyecto-recursivos"}),"M\xe9todos proyecto recursivos"),(0,t.kt)("p",null,"Los m\xe9todos proyecto pueden llamarse a s\xed mismos. Por ejemplo:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"El m\xe9todo A puede llamar al m\xe9todo B que puede llamar a A, por lo que A volver\xe1 a llamar a B y as\xed sucesivamente."),(0,t.kt)("li",{parentName:"ul"},"Un m\xe9todo puede llamarse a s\xed mismo.")),(0,t.kt)("p",null,"Esto se llama recursividad. El lenguaje 4D soporta totalmente la recursividad."),(0,t.kt)("p",null,"Aqu\xed un ejemplo. Digamos que tiene una tabla ",(0,t.kt)("inlineCode",{parentName:"p"},"[Friends and Relatives]")," compuesta por este conjunto de campos extremadamente simplificado:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"[Friends and Relatives]Name")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"[Friends and Relatives]ChildrensName"))),(0,t.kt)("p",null,'Para este ejemplo, suponemos que los valores de los campos son \xfanicos (no hay dos personas con el mismo nombre). A partir de un nombre, quiere escribir la frase "Un amigo m\xedo, Juan, que es hijo de Pablo, que es hijo de Juana, que es hijo de Roberto, que es hijo de Leonor, se gana la vida as\xed":'),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Puede proceder de esta manera:")),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),' $vsName:=Request("Enter the name:";"John")\n If(OK=1)\n    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)\n    If(Records in selection([Friends and Relatives])>0)\n       $vtTheWholeStory:="A friend of mine, "+$vsName\n       Repeat\n          QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$vsName)\n          $vlQueryResult:=Records in selection([Friends and Relatives])\n          If($vlQueryResult>0)\n             $vtTheWholeStory:=$vtTheWholeStory+" who is the child of "+[Friends and Relatives]Name\n             $vsName:=[Friends and Relatives]Name\n          End if\n       Until($vlQueryResult=0)\n       $vtTheWholeStory:=$vtTheWholeStory+", does this for a living!"\n       ALERT($vtTheWholeStory)\n    End if\n End if\n       ALERT($vtTheWholeStory)\n    End if\n End if\n')),(0,t.kt)("ol",n({},{start:2}),(0,t.kt)("li",{parentName:"ol"},"Tambi\xe9n puede proceder as\xed:")),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),' $vsName:=Request("Enter the name:";"John")\n If(OK=1)\n    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)\n    If(Records in selection([Friends and Relatives])>0)\n       ALERT("A friend of mine, "+Genealogy of($vsName)+", does this for a living!")\n    End if\n End if\n    End if\n End if\n')),(0,t.kt)("p",null,"con la funci\xf3n recursiva ",(0,t.kt)("inlineCode",{parentName:"p"},"Genealogy of")," siguiente:"),(0,t.kt)("pre",null,(0,t.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'  ` M\xe9todo proyecto Genealogy of\n  ` Genealogy of ( String ) -> Text\n  ` Genealogy of ( Name ) -> Part of sentence\n\n $0:=$1\n QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$1)\n If(Records in selection([Friends and Relatives])>0)\n    $0:=$0+" who is the child of "+Genealogy of([Friends and Relatives]Name)\n End if\n')),(0,t.kt)("p",null,"Note que el m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"Genealogy of")," se llama a s\xed mismo."),(0,t.kt)("p",null,"La primera forma es un ",(0,t.kt)("strong",{parentName:"p"},"algoritmo iterativo"),". La segunda forma es un ",(0,t.kt)("strong",{parentName:"p"},"algoritmo recursivo"),"."),(0,t.kt)("p",null,"Cuando implemente el c\xf3digo para casos como el del ejemplo anterior, es importante tener en cuenta que siempre puede escribir m\xe9todos utilizando los algoritmos iterativos o recursivos. Normalmente, la recursividad ofrece un c\xf3digo m\xe1s conciso, legible y mantenible, pero su uso no es obligatorio."),(0,t.kt)("p",null,"En 4D, algunos usos t\xedpicos de la recursividad son:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Tratar los registros dentro de las tablas que se relacionan entre s\xed de la misma manera que en el ejemplo."),(0,t.kt)("li",{parentName:"ul"},"Navegar por los documentos y las carpetas del disco, utilizando los comandos ",(0,t.kt)("inlineCode",{parentName:"li"},"FOLDER LIST")," y ",(0,t.kt)("inlineCode",{parentName:"li"},"DOCUMENT LIST"),". Una carpeta puede contener carpetas y documentos, las subcarpetas pueden a su vez contener carpetas y documentos, y as\xed sucesivamente.")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Importante:")," Las llamadas recursivas deben terminar siempre en alg\xfan punto. En el ejemplo, el m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"Genealogy of"),' deja de llamarse a s\xed mismo cuando la consulta no devuelve ning\xfan registro. Sin esta prueba condicional, el m\xe9todo se llamar\xeda a s\xed mismo indefinidamente; eventualmente, 4D devolver\xeda un error "Pila llena" porque ya no tendr\xeda espacio para "apilar" las llamadas (as\xed como los par\xe1metros y las variables locales utilizadas en el m\xe9todo).'))}c.isMDXComponent=!0}}]);