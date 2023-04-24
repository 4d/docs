"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3141],{3905:(e,r,o)=>{o.d(r,{Zo:()=>c,kt:()=>m});var n=o(67294);function a(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function t(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?t(Object(o),!0).forEach((function(r){a(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function d(e,r){if(null==e)return{};var o,n,a=function(e,r){if(null==e)return{};var o,n,a={},t=Object.keys(e);for(n=0;n<t.length;n++)o=t[n],r.indexOf(o)>=0||(a[o]=e[o]);return a}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)o=t[n],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),i=function(e){var r=n.useContext(s),o=r;return e&&(o="function"==typeof e?e(r):l(l({},r),e)),o},c=function(e){var r=i(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var o=e.components,a=e.mdxType,t=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=i(o),m=a,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||t;return o?n.createElement(g,l(l({ref:r},c),{},{components:o})):n.createElement(g,l({ref:r},c))}));function m(e,r){var o=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var t=o.length,l=new Array(t);l[0]=u;var d={};for(var s in r)hasOwnProperty.call(r,s)&&(d[s]=r[s]);d.originalType=e,d.mdxType="string"==typeof e?e:a,l[1]=d;for(var i=2;i<t;i++)l[i]=o[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},85952:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});o(67294);var n=o(3905);function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},a.apply(this,arguments)}function t(e,r){if(null==e)return{};var o,n,a=function(e,r){if(null==e)return{};var o,n,a={},t=Object.keys(e);for(n=0;n<t.length;n++)o=t[n],r.indexOf(o)>=0||(a[o]=e[o]);return a}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)o=t[n],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}const l={id:"error-handling",title:"Gesti\xf3n de errores"},d=void 0,s={unversionedId:"Concepts/error-handling",id:"version-20/Concepts/error-handling",title:"Gesti\xf3n de errores",description:"El manejo de errores es el proceso de anticipar y responder a los errores que puedan ocurrir en su aplicaci\xf3n. 4D soporta de forma completa la detecci\xf3n y notificaci\xf3n de errores en tiempo de ejecuci\xf3n, as\xed como el an\xe1lisis de sus condiciones.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/Concepts/error-handling.md",sourceDirName:"Concepts",slug:"/Concepts/error-handling",permalink:"/docs/es/Concepts/error-handling",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Ferror-handling.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"error-handling",title:"Gesti\xf3n de errores"},sidebar:"docs",previous:{title:"Flujo de control",permalink:"/docs/es/Concepts/control-flow"},next:{title:"Modos interpretado y compilado",permalink:"/docs/es/Concepts/interpreted-compiled"}},i={},c=[{value:"Error o estado",id:"error-o-estado",level:2},{value:"Instalaci\xf3n de un m\xe9todo de gesti\xf3n de errores",id:"instalaci\xf3n-de-un-m\xe9todo-de-gesti\xf3n-de-errores",level:2},{value:"Alcance y componentes",id:"alcance-y-componentes",level:3},{value:"Manejo de errores e el m\xe9todo",id:"manejo-de-errores-e-el-m\xe9todo",level:3},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Utilizar un m\xe9todo de gesti\xf3n de errores vac\xedo",id:"utilizar-un-m\xe9todo-de-gesti\xf3n-de-errores-vac\xedo",level:3}],p={toc:c};function u(e){var{components:r}=e,l=t(e,["components"]);return(0,n.kt)("wrapper",a({},p,l,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"El manejo de errores es el proceso de anticipar y responder a los errores que puedan ocurrir en su aplicaci\xf3n. 4D soporta de forma completa la detecci\xf3n y notificaci\xf3n de errores en tiempo de ejecuci\xf3n, as\xed como el an\xe1lisis de sus condiciones."),(0,n.kt)("p",null,"La gesti\xf3n de errores responde a dos necesidades principales:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"descubrir y corregir posibles errores y fallos en el c\xf3digo durante la fase de desarrollo,"),(0,n.kt)("li",{parentName:"ul"},"detectar y recuperar errores inesperados en las aplicaciones desplegadas; en particular, puede sustituir los di\xe1logos de error del sistema (disco lleno, archivo perdido, etc.) por su propia interfaz.")),(0,n.kt)("admonition",a({},{title:"Buenas pr\xe1cticas",type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"Es muy recomendable instalar un m\xe9todo global de gesti\xf3n de errores en 4D Server, para todo el c\xf3digo que se ejecute en el servidor. Cuando 4D Server no se ejecuta ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/es/Admin/cli"}),"headless")," (es decir, se lanza con su ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/es/ServerWindow/overview"}),"ventana de administraci\xf3n"),"), este m\xe9todo evitar\xeda que se mostraran cajas de di\xe1logo inesperadas en la m\xe1quina servidor. En modo sin interfaz, los errores se registran en el archivo ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/es/Debugging/debugLogFiles#4ddebuglogtxt-standard"}),"4DDebugLog")," para su posterior an\xe1lisis.")),(0,n.kt)("h2",a({},{id:"error-o-estado"}),"Error o estado"),(0,n.kt)("p",null,"Muchas funciones de clase 4D, como ",(0,n.kt)("inlineCode",{parentName:"p"},"entity.save()")," o ",(0,n.kt)("inlineCode",{parentName:"p"},"transporter.send()"),", devuelven un objeto ",(0,n.kt)("em",{parentName:"p"},"status"),'. Este objeto se utiliza para almacenar errores "predecibles" en el contexto de ejecuci\xf3n, por ejemplo, una contrase\xf1a no v\xe1lida, una entidad bloqueada, etc., que no detienen la ejecuci\xf3n del programa. Esta categor\xeda de errores puede ser manejada por el c\xf3digo habitual.'),(0,n.kt)("p",null,'Otros errores "imprevisibles" son el error de escritura en el disco, el fallo de la red o, en general, cualquier interrupci\xf3n inesperada. Esta categor\xeda de errores genera excepciones y necesita ser manejada a trav\xe9s de un m\xe9todo de gesti\xf3n de errores.'),(0,n.kt)("h2",a({},{id:"instalaci\xf3n-de-un-m\xe9todo-de-gesti\xf3n-de-errores"}),"Instalaci\xf3n de un m\xe9todo de gesti\xf3n de errores"),(0,n.kt)("p",null,"En 4D, todos los errores pueden ser detectados y manejados por m\xe9todos proyecto espec\xedficos, llamados ",(0,n.kt)("strong",{parentName:"p"},"m\xe9todos de gesti\xf3n de errores")," (o ",(0,n.kt)("strong",{parentName:"p"},"m\xe9todos de intercepci\xf3n de errores"),")."),(0,n.kt)("p",null,"Una vez instalados, los manejadores de errores son llamados autom\xe1ticamente en modo interpretado o compilado en caso de error en la aplicaci\xf3n 4D o en uno de sus componentes. Se puede llamar a un manejador de errores diferente en funci\xf3n del contexto de ejecuci\xf3n (ver abajo)."),(0,n.kt)("p",null,"Para ",(0,n.kt)("em",{parentName:"p"},"instalar")," un m\xe9todo proyecto de gesti\xf3n de errores, basta con llamar al comando ",(0,n.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page155.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"ON ERR CALL"))," con el nombre del m\xe9todo proyecto y (opcionalmente) el \xe1lcance como par\xe1metros. Por ejemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("IO_Errors";ek local) //Instala un m\xe9todo local de gesti\xf3n de errores\n')),(0,n.kt)("p",null,"Para dejar de interceptar los errores en un contexto de ejecuci\xf3n y devolver la mano, llame ",(0,n.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," con una cadena vac\xeda:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("";ek local) //devuelve el control al proceso local\n')),(0,n.kt)("p",null,"El comando ",(0,n.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page704.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"Method called on error"))," permite conocer el nombre del m\xe9todo instalado por ",(0,n.kt)("inlineCode",{parentName:"p"},"ON ERR CALL")," para el proceso actual. Es particularmente \xfatil en el contexto de c\xf3digo gen\xe9rico porque permite cambiar temporalmente y luego restaurar el m\xe9todo de captura de error:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),' $methCurrent:=Method called on error(ek local)\n ON ERR CALL("NewMethod";ek local)\n  //Si no se puede abrir el documento, se genera un error\n $ref:=Open document("MyDocument")\n  //Reinstalaci\xf3n del m\xe9todo anterior\n ON ERR CALL($methCurrent;ek local)\n\n')),(0,n.kt)("h3",a({},{id:"alcance-y-componentes"}),"Alcance y componentes"),(0,n.kt)("p",null,"Se puede definir un m\xe9todo de gesti\xf3n de errores para diferentes contextos de ejecuci\xf3n:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"para el ",(0,n.kt)("strong",{parentName:"li"},"proceso actual"),"- s\xf3lo se llamar\xe1 a un gestor de errores local para los errores ocurridos en el proceso actual del proyecto actual,"),(0,n.kt)("li",{parentName:"ul"},"para ",(0,n.kt)("strong",{parentName:"li"},"toda la aplicaci\xf3n"),"- se llamar\xe1 a un gestor de errores global para todos los errores que se produzcan en el contexto de ejecuci\xf3n de la aplicaci\xf3n del proyecto actual,"),(0,n.kt)("li",{parentName:"ul"},"desde los ",(0,n.kt)("strong",{parentName:"li"},"componentes"),"- este manejador de errores se define en un proyecto local y ser\xe1 llamado para todos los errores que ocurran en los componentes cuando no hayan sido ya interceptados por un manejador de componentes.")),(0,n.kt)("p",null,"Ejemplos:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("IO_Errors";ek local) //Instala un m\xe9todo de gesti\xf3n de errores local \nON ERR CALL("globalHandler";ek global) //Instala un m\xe9todo de gesti\xf3n de errores global \nON ERR CALL("componentHandler";ek errors from components) //Instala un m\xe9todo de gesti\xf3n de errores para los componentes\n')),(0,n.kt)("p",null,'Puede instalar un gestor de errores global que servir\xe1 como "fallback" y gestores de errores locales espec\xedficos para determinados procesos. Un gestor de errores global tambi\xe9n es \xfatil en el servidor para evitar di\xe1logos de error en el servidor cuando se ejecuta con interfaz.'),(0,n.kt)("p",null,"Se puede definir un \xfanico m\xe9todo de captura de errores para toda la aplicaci\xf3n o diferentes m\xe9todos por m\xf3dulo de aplicaci\xf3n. Sin embargo, s\xf3lo se puede instalar un m\xe9todo por contexto de ejecuci\xf3n y por proyecto."),(0,n.kt)("p",null,"Cuando se produce un error, s\xf3lo se llama a un m\xe9todo, como se describe en el siguiente diagrama:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"gesti\xf3n de errores",src:o(88515).Z,width:"1195",height:"578"})),(0,n.kt)("h3",a({},{id:"manejo-de-errores-e-el-m\xe9todo"}),"Manejo de errores e el m\xe9todo"),(0,n.kt)("p",null,"Dentro de un m\xe9todo de gesti\xf3n de errores personalizado, tiene acceso a varios datos que le ayudar\xe1n a identificar el error:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"las variables sistema dedicadas:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Error")," (entero largo): c\xf3digo de error"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Error method"),"(texto): nombre del m\xe9todo que ha provocado el error"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Error line")," (entero largo): n\xfamero de l\xednea del m\xe9todo que ha provocado el error"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Error formula")," (texto): f\xf3rmula del c\xf3digo 4D (texto bruto) que est\xe1 en el origen del error.")))),(0,n.kt)("p",null,"|"),(0,n.kt)("p",null,"4D mantiene autom\xe1ticamente una serie de variables denominadas ",(0,n.kt)("strong",{parentName:"p"},"variables sistema"),", que responden a diferentes necesidades. Consulte el ",(0,n.kt)("em",{parentName:"p"},"manual de referencia del lenguaje 4D"),"."),(0,n.kt)("p",null,":::"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"el comando ",(0,n.kt)("a",a({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page1799.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"Last errors"))," que devuelve una colecci\xf3n de la pila actual de errores ocurridos en la aplicaci\xf3n 4D. Tambi\xe9n puede utilizar el comando ",(0,n.kt)("a",a({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/en/page1015.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"GET LAST ERROR STACK"))," que devuelve la misma informaci\xf3n que los arrays."),(0,n.kt)("li",{parentName:"ul"},"el comando ",(0,n.kt)("inlineCode",{parentName:"li"},"Get call chain")," que devuelve una colecci\xf3n de objetos que describen cada paso de la cadena de llamadas a m\xe9todos dentro del proceso actual.")),(0,n.kt)("h4",a({},{id:"ejemplo"}),"Ejemplo"),(0,n.kt)("p",null,"He aqu\xed un sistema de gesti\xf3n de errores sencillo:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'//instalar el m\xe9todo de gesti\xf3n de errores\n ON ERR CALL("errorMethod")\n //... ejecutar el c\xf3digo\n ON ERR CALL("") //giving control back to 4D\n')),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'// m\xe9todo proyecto errorMethod\n If(Error#1006) //esto no es una interrupci\xf3n del usuario\n    ALERT("Se ha producido el error "+String(Error)+". El c\xf3digo en cuesti\xf3n es: \\""+Error formula+"\\"")\n End if\n')),(0,n.kt)("h3",a({},{id:"utilizar-un-m\xe9todo-de-gesti\xf3n-de-errores-vac\xedo"}),"Utilizar un m\xe9todo de gesti\xf3n de errores vac\xedo"),(0,n.kt)("p",null,"Si desea principalmente que la caja de di\xe1logo de error est\xe1ndar est\xe9 oculta, puede instalar un m\xe9todo de gesti\xf3n de errores vac\xedo. La variable sistema ",(0,n.kt)("inlineCode",{parentName:"p"},"Error")," puede ser probada en cualquier m\xe9todo, es decir, fuera del m\xe9todo de gesti\xf3n de errores:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'ON ERR CALL("emptyMethod") //emptyMethod exists but is empty\n$doc:=Open document( "myFile.txt")\nIf (Error=-43)\n    ALERT("File not found.")\nEnd if\nON ERR CALL("")\nEnd if\nON ERR CALL("")\n')))}u.isMDXComponent=!0},88515:(e,r,o)=>{o.d(r,{Z:()=>n});const n=o.p+"assets/images/error-schema-973d40c4618e79de87f884622e4e930f.png"}}]);