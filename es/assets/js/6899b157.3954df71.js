"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3782],{603905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var r=t(667294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(t),u=o,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||a;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},922098:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});t(667294);var r=t(603905);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={id:"error-handling",title:"Gesti\xf3n de errores"},l=void 0,s={unversionedId:"Concepts/error-handling",id:"version-20-R5/Concepts/error-handling",title:"Gesti\xf3n de errores",description:"El manejo de errores es el proceso de anticipar y responder a los errores que puedan ocurrir en su aplicaci\xf3n. 4D soporta de forma completa la detecci\xf3n y notificaci\xf3n de errores en tiempo de ejecuci\xf3n, as\xed como el an\xe1lisis de sus condiciones.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/Concepts/error-handling.md",sourceDirName:"Concepts",slug:"/Concepts/error-handling",permalink:"/docs/es/Concepts/error-handling",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Ferror-handling.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"error-handling",title:"Gesti\xf3n de errores"},sidebar:"docs",previous:{title:"Flujo de control",permalink:"/docs/es/Concepts/control-flow"},next:{title:"Modos interpretado y compilado",permalink:"/docs/es/Concepts/interpreted-compiled"}},d={},c=[{value:"Error o estado",id:"error-o-estado",level:2},{value:"Instalaci\xf3n de un m\xe9todo de gesti\xf3n de errores",id:"instalaci\xf3n-de-un-m\xe9todo-de-gesti\xf3n-de-errores",level:2},{value:"Alcance y componentes",id:"alcance-y-componentes",level:3},{value:"Manejo de errores e el m\xe9todo",id:"manejo-de-errores-e-el-m\xe9todo",level:3},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Utilizar un m\xe9todo de gesti\xf3n de errores vac\xedo",id:"utilizar-un-m\xe9todo-de-gesti\xf3n-de-errores-vac\xedo",level:3},{value:"Try(expression)",id:"tryexpression",level:2},{value:"Ejemplos",id:"ejemplos",level:3},{value:"Try...Catch...End try",id:"trycatchend-try",level:2},{value:"Ejemplo",id:"ejemplo-1",level:3}],p={toc:c};function m(e){var{components:n}=e,i=a(e,["components"]);return(0,r.kt)("wrapper",o({},p,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"El manejo de errores es el proceso de anticipar y responder a los errores que puedan ocurrir en su aplicaci\xf3n. 4D soporta de forma completa la detecci\xf3n y notificaci\xf3n de errores en tiempo de ejecuci\xf3n, as\xed como el an\xe1lisis de sus condiciones."),(0,r.kt)("p",null,"La gesti\xf3n de errores responde a dos necesidades principales:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"descubrir y corregir posibles errores y fallos en el c\xf3digo durante la fase de desarrollo,"),(0,r.kt)("li",{parentName:"ul"},"catching and recovering from unexpected errors in deployed applications; in particular, you can replace system error dialogs (disk full, missing file, etc.) con su propia interfaz.")),(0,r.kt)("p",null,"B\xe1sicamente, hay dos maneras de manejar los errores en 4D. Puede:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",o({parentName:"li"},{href:"#installing-an-error-handling-method"}),"install an error-handling method"),", or"),(0,r.kt)("li",{parentName:"ul"},"use a ",(0,r.kt)("a",o({parentName:"li"},{href:"#tryexpression"}),(0,r.kt)("inlineCode",{parentName:"a"},"Try()")," keyword")," or a ",(0,r.kt)("a",o({parentName:"li"},{href:"#trycatchend-try"}),(0,r.kt)("inlineCode",{parentName:"a"},"Try/Catch")," structure")," before pieces of code that call a function, method, or expression that can throw an error.")),(0,r.kt)("admonition",o({},{title:"Buenas pr\xe1cticas",type:"tip"}),(0,r.kt)("p",{parentName:"admonition"},"Es muy recomendable instalar un m\xe9todo global de gesti\xf3n de errores en 4D Server, para todo el c\xf3digo que se ejecute en el servidor. When 4D Server is not running ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/es/Admin/cli"}),"headless")," (i.e. launched with its ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/es/ServerWindow/overview"}),"administration window"),"), this method would avoid unexpected dialog boxes to be displayed on the server machine. In headless mode, errors are logged in the ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/es/Debugging/debugLogFiles#4ddebuglogtxt-standard"}),"4DDebugLog file")," for further analysis.")),(0,r.kt)("h2",o({},{id:"error-o-estado"}),"Error o estado"),(0,r.kt)("p",null,"Many 4D class functions, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"entity.save()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"transporter.send()"),", return a ",(0,r.kt)("em",{parentName:"p"},"status"),' object. Este objeto se utiliza para almacenar errores "predecibles" en el contexto de ejecuci\xf3n, por ejemplo, una contrase\xf1a no v\xe1lida, una entidad bloqueada, etc., que no detienen la ejecuci\xf3n del programa. Esta categor\xeda de errores puede ser manejada por el c\xf3digo habitual.'),(0,r.kt)("p",null,'Otros errores "imprevisibles" son el error de escritura en el disco, el fallo de la red o, en general, cualquier interrupci\xf3n inesperada. This category of errors generates exceptions and needs to be handled through an error-handling method or a ',(0,r.kt)("inlineCode",{parentName:"p"},"Try()")," keyword."),(0,r.kt)("h2",o({},{id:"instalaci\xf3n-de-un-m\xe9todo-de-gesti\xf3n-de-errores"}),"Instalaci\xf3n de un m\xe9todo de gesti\xf3n de errores"),(0,r.kt)("p",null,"In 4D, all errors can be caught and handled by specific project methods, named ",(0,r.kt)("strong",{parentName:"p"},"error-handling")," (or ",(0,r.kt)("strong",{parentName:"p"},"error-catching"),") methods."),(0,r.kt)("p",null,"Una vez instalados, los manejadores de errores son llamados autom\xe1ticamente en modo interpretado o compilado en caso de error en la aplicaci\xf3n 4D o en uno de sus componentes. Se puede llamar a un manejador de errores diferente en funci\xf3n del contexto de ejecuci\xf3n (ver abajo)."),(0,r.kt)("p",null,"To ",(0,r.kt)("em",{parentName:"p"},"install")," an error-handling project method, you just need to call the ",(0,r.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page155.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"ON ERR CALL"))," command with the project method name and (optionnally) scope as parameters. Por ejemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("IO_Errors";ek local) //Instala un m\xe9todo local de gesti\xf3n de errores\n')),(0,r.kt)("p",null,"To stop catching errors for an execution context and give back hand, call ",(0,r.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," with an empty string:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("";ek local) //devuelve el control al proceso local\n')),(0,r.kt)("p",null,"The  ",(0,r.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com/4dv20/help/command/en/page704.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"Method called on error"))," command allows you to know the name of the method installed by ",(0,r.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," for the current process. Es particularmente \xfatil en el contexto de c\xf3digo gen\xe9rico porque permite cambiar temporalmente y luego restaurar el m\xe9todo de captura de error:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),' $methCurrent:=Method called on error(ek local)\n ON ERR CALL("NewMethod";ek local)\n  //If the document cannot be opened, an error is generated\n $ref:=Open document("MyDocument")\n  //Reinstallation of previous method\n ON ERR CALL($methCurrent;ek local)\n\n')),(0,r.kt)("h3",o({},{id:"alcance-y-componentes"}),"Alcance y componentes"),(0,r.kt)("p",null,"Se puede definir un m\xe9todo de gesti\xf3n de errores para diferentes contextos de ejecuci\xf3n:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"for the ",(0,r.kt)("strong",{parentName:"li"},"current process"),"- a local error handler will be only called for errors that occurred in the current process of the current project,"),(0,r.kt)("li",{parentName:"ul"},"for the ",(0,r.kt)("strong",{parentName:"li"},"whole application"),"- a global error handler will be called for all errors that occurred in the application execution context of the current project,"),(0,r.kt)("li",{parentName:"ul"},"from the ",(0,r.kt)("strong",{parentName:"li"},"components"),"- this error handler is defined in a host project and will be called for all errors that occurred in the components when they were not already caught by a component handler.")),(0,r.kt)("p",null,"Ejemplos:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("IO_Errors";ek local) //Instala un m\xe9todo de gesti\xf3n de errores local \nON ERR CALL("globalHandler";ek global) //Instala un m\xe9todo de gesti\xf3n de errores global \nON ERR CALL("componentHandler";ek errors from components) //Instala un m\xe9todo de gesti\xf3n de errores para los componentes\n')),(0,r.kt)("p",null,'Puede instalar un gestor de errores global que servir\xe1 como "fallback" y gestores de errores locales espec\xedficos para determinados procesos. Un gestor de errores global tambi\xe9n es \xfatil en el servidor para evitar di\xe1logos de error en el servidor cuando se ejecuta con interfaz.'),(0,r.kt)("p",null,"Se puede definir un \xfanico m\xe9todo de captura de errores para toda la aplicaci\xf3n o diferentes m\xe9todos por m\xf3dulo de aplicaci\xf3n. Sin embargo, s\xf3lo se puede instalar un m\xe9todo por contexto de ejecuci\xf3n y por proyecto."),(0,r.kt)("p",null,"Cuando se produce un error, s\xf3lo se llama a un m\xe9todo, como se describe en el siguiente diagrama:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"error management",src:t(295198).Z,width:"1195",height:"578"})),(0,r.kt)("h3",o({},{id:"manejo-de-errores-e-el-m\xe9todo"}),"Manejo de errores e el m\xe9todo"),(0,r.kt)("p",null,"Dentro de un m\xe9todo de gesti\xf3n de errores personalizado, tiene acceso a varios datos que le ayudar\xe1n a identificar el error:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"las variables sistema dedicadas:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Error")," (longint): error code"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Error method")," (text): name of the method that triggered the error"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Error line")," (longint): line number in the method that triggered the error"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Error formula")," (text): formula of the 4D code (raw text) which is at the origin of the error.")))),(0,r.kt)("admonition",o({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"4D automatically maintains a number of variables called ",(0,r.kt)("strong",{parentName:"p"},"system variables"),", meeting different needs. Consulte el ",(0,r.kt)("em",{parentName:"p"},"Manual del lenguaje de 4D"),".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("a",o({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page1799.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"Last errors"))," command that returns a collection of the current stack of errors that occurred in the 4D application. You can also use the ",(0,r.kt)("a",o({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page1015.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"GET LAST ERROR STACK"))," command that returns the same information as arrays."),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"Get call chain")," command that returns a collection of objects describing each step of the method call chain within the current process.")),(0,r.kt)("h4",o({},{id:"ejemplo"}),"Ejemplo"),(0,r.kt)("p",null,"He aqu\xed un sistema de gesti\xf3n de errores sencillo:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'//instalar el m\xe9todo de gesti\xf3n de errores\n ON ERR CALL("errorMethod")\n //... ejecutar el c\xf3digo\n ON ERR CALL("") //giving control back to 4D\n')),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'// errorMethod project method\n If(Error#1006) //this is not a user interruption\n    ALERT("The error "+String(Error)+" occurred". The code in question is: \\""+Error formula+"\\"")\n End if\n')),(0,r.kt)("h3",o({},{id:"utilizar-un-m\xe9todo-de-gesti\xf3n-de-errores-vac\xedo"}),"Utilizar un m\xe9todo de gesti\xf3n de errores vac\xedo"),(0,r.kt)("p",null,"Si desea principalmente que la caja de di\xe1logo de error est\xe1ndar est\xe9 oculta, puede instalar un m\xe9todo de gesti\xf3n de errores vac\xedo. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Error")," system variable can be tested in any method, i.e. outside of the error-handling method:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("emptyMethod") //emptyMethod exists but is empty\n$doc:=Open document( "myFile.txt")\nIf (Error=-43)\n    ALERT("File not found.")\nEnd if\nON ERR CALL("")\n')),(0,r.kt)("h2",o({},{id:"tryexpression"}),"Try(expression)"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Try(expression)")," statement allows you to test a single-line expression in its actual execution context (including, in particular, local variable values) and to intercept errors it throws so that the 4D error dialog box is not displayed. Using ",(0,r.kt)("inlineCode",{parentName:"p"},"Try(expression)")," provides an easy way to handle simple error cases with a very low number of code lines, and without requiring an error-handling method."),(0,r.kt)("admonition",o({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"If you want to try a more complex code than a single-line expression, you might consider using a ",(0,r.kt)("a",o({parentName:"p"},{href:"#trycatchend-try"}),(0,r.kt)("inlineCode",{parentName:"a"},"Try/Catch")," structure"),".")),(0,r.kt)("p",null,"The formal syntax of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Try(expression)")," statement is:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"\nTry (expression) : any | Undefined\n\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"expression")," can be any valid expression."),(0,r.kt)("p",null,"If an error occurred during its execution, it is intercepted and no error dialog is displayed, whether an ",(0,r.kt)("a",o({parentName:"p"},{href:"#installing-an-error-handling-method"}),"error-handling method")," was installed or not before the call to ",(0,r.kt)("inlineCode",{parentName:"p"},"Try()"),". If ",(0,r.kt)("em",{parentName:"p"},"expression")," returns a value, ",(0,r.kt)("inlineCode",{parentName:"p"},"Try()")," returns the last evaluated value, otherwise it returns ",(0,r.kt)("inlineCode",{parentName:"p"},"Undefined"),"."),(0,r.kt)("p",null,"You can handle the error(s) using the ",(0,r.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com/4dv20/help/command/en/page1799.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"Last errors"))," command. If ",(0,r.kt)("em",{parentName:"p"},"expression")," throws an error within a stack of ",(0,r.kt)("inlineCode",{parentName:"p"},"Try()")," calls, the execution flow stops and returns to the latest executed ",(0,r.kt)("inlineCode",{parentName:"p"},"Try()")," (the first found back in the call stack)."),(0,r.kt)("admonition",o({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"If an ",(0,r.kt)("a",o({parentName:"p"},{href:"#installing-an-error-handling-method"}),"error-handling method")," is installed by ",(0,r.kt)("em",{parentName:"p"},"expression"),", it is called in case of error.")),(0,r.kt)("h3",o({},{id:"ejemplos"}),"Ejemplos"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Quiere mostrar el contenido de un archivo si el archivo se puede abrir sin errores y si su contenido se puede leer. Puede escribir:")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'var $text : Text\nvar $file : 4D.File := File("/RESOURCES/myFile.txt")\nvar $fileHandle : 4D.FileHandle := Try($file.open())\nIf ($fileHandle # Null)\n  $text:=Try($fileHandle.readText()) || "Error al leer el archivo"\nEnd if\n')),(0,r.kt)("ol",o({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Quiere manejar el error de dividir por cero. En este caso, se desea devolver 0 y lanzar un error:")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'function divide( $p1: real; $p2: real)-> $result: real\n  if ($p2=0)\n     $result:=0 //only for clarity (0 is the default for reals)\n     throw(-12345; "Division by zero")\n  else\n    $result:=$p1/$p2\n  end if\n\nfunction test()\n  $result:=Try(divide($p1;$p2))\n  If (Last errors # null)\n    ALERT("Error")\n  End if\n\n')),(0,r.kt)("ol",o({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"You want to handle both ",(0,r.kt)("a",o({parentName:"li"},{href:"#error-or-status"}),"predictable and non-predictable")," errors:")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),'var $e:=ds.Employee.new()\n$e.name:="Smith"\n$status:=Try($e.save()) //catch predictable and non-predictable errors\nIf ($status.success)\n   ALERT( "Success")\nElse\n   ALERT( "Error: "+JSON Stringify($status.errors))\nEnd if\n\n')),(0,r.kt)("h2",o({},{id:"trycatchend-try"}),"Try...Catch...End try"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Try...Catch...End try")," structure allows you to test a block code in its actual execution context (including, in particular, local variable values) and to intercept errors it throws so that the 4D error dialog box is not displayed."),(0,r.kt)("p",null,"Unlike the ",(0,r.kt)("inlineCode",{parentName:"p"},"Try(expression)")," keyword that evaluates a single-line expression, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Try...Catch...End try")," structure allows you to evaluate any code block, from the most simple to the most complex, without requiring an error-handling method. In addition, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Catch")," block can be used to handle the error in any custom way."),(0,r.kt)("p",null,"The formal syntax of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Try...Catch...End try")," structure is:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"\nTry \n    statement(s) // Code to evaluate\nCatch\n    statement(s) // Code to execute in case of error\nEnd try\n\n")),(0,r.kt)("p",null,"The code placed between the ",(0,r.kt)("inlineCode",{parentName:"p"},"Try")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Catch")," keywords is first executed, then the flow depends on the error(s) encountered during this execution."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If no error is thrown, the code execution continues after the corresponding ",(0,r.kt)("inlineCode",{parentName:"li"},"End try")," keyword. The code placed between the ",(0,r.kt)("inlineCode",{parentName:"li"},"Catch")," and the ",(0,r.kt)("inlineCode",{parentName:"li"},"End try")," keywords is not executed."),(0,r.kt)("li",{parentName:"ul"},"If the code block execution throws a ",(0,r.kt)("em",{parentName:"li"},"non-deferred error"),", the execution flow stops and executes the corresponding ",(0,r.kt)("inlineCode",{parentName:"li"},"Catch")," code block."),(0,r.kt)("li",{parentName:"ul"},"If the code block execution throws a ",(0,r.kt)("em",{parentName:"li"},"deferred error"),", the execution flow continues until the end of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Try")," block and then executes the corresponding ",(0,r.kt)("inlineCode",{parentName:"li"},"Catch")," code block.")),(0,r.kt)("admonition",o({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"If a ",(0,r.kt)("em",{parentName:"p"},"deferred")," error is thrown outside of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Try")," block, the code execution continues until the end of the method or function.")),(0,r.kt)("admonition",o({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"For more information on ",(0,r.kt)("em",{parentName:"p"},"deferred")," and ",(0,r.kt)("em",{parentName:"p"},"non-deferred")," errors, please refer to the ",(0,r.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com/4dv20R/help/command/en/page1805.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"throw"))," command description.")),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Catch")," code block, you can handle the error(s) using standard error handling commands. The ",(0,r.kt)("a",o({parentName:"p"},{href:"https://doc.4d.com/4dv20/help/command/en/page1799.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"Last errors"))," function contains the last errors collection. You can ",(0,r.kt)("a",o({parentName:"p"},{href:"#installing-an-error-handling-method"}),"declare an error-handling method")," in this code block, in which case it is called in case of error (otherwise the 4D error dialog box is displayed)."),(0,r.kt)("admonition",o({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"If an ",(0,r.kt)("a",o({parentName:"p"},{href:"#installing-an-error-handling-method"}),"error-handling method")," is installed in the code placed between the ",(0,r.kt)("inlineCode",{parentName:"p"},"Try")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Catch")," keywords, it is called in case of error.")),(0,r.kt)("h3",o({},{id:"ejemplo-1"}),"Ejemplo"),(0,r.kt)("p",null,"Combining transactions and ",(0,r.kt)("inlineCode",{parentName:"p"},"Try...Catch...End try")," structures allows writing secured code for critical features."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-4d"}),"Function createInvoice($customer : cs.customerEntity; $items : Collection; $invoiceRef : Text) : cs.invoiceEntity\n    var $newInvoice : cs.invoiceEntity\n    var $newInvoiceLine : cs.invoiceLineEntity\n    var $item : Object\n    ds.startTransaction()\n    Try\n        $newInvoice:=This.new()\n        $newInvoice.customer:=$customer\n        $newInvoice.invoiceRef:=$invoiceRef\n        For each ($item; $items)\n            $newInvoiceLine:=ds.invoiceLine.new()\n            $newInvoiceLine.item:=$item.item\n            $newInvoiceLine.amount:=$item.amount\n            $newInvoiceLine.invoice:=$newInvoice\n            //call other specific functions to validate invoiceline\n            $newInvoiceLine.save()\n        End for each \n        $newInvoice.save()\n        ds.validateTransaction()\n    Catch\n        ds.cancelTransaction()\n        ds.logErrors(Last errors)\n        $newInvoice:=Null\n    End try\n    return $newInvoice\n\n")))}m.isMDXComponent=!0},295198:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/error-schema-973d40c4618e79de87f884622e4e930f.png"}}]);