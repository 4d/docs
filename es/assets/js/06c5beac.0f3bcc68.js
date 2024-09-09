/*! For license information please see 06c5beac.0f3bcc68.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83518],{6836:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var n=o(474848),s=o(28453);const d={id:"error-handling",title:"Gesti\xf3n de errores"},a=void 0,l={id:"Concepts/error-handling",title:"Gesti\xf3n de errores",description:"El manejo de errores es el proceso de anticipar y responder a los errores que puedan ocurrir en su aplicaci\xf3n. 4D soporta de forma completa la detecci\xf3n y notificaci\xf3n de errores en tiempo de ejecuci\xf3n, as\xed como el an\xe1lisis de sus condiciones.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/Concepts/error-handling.md",sourceDirName:"Concepts",slug:"/Concepts/error-handling",permalink:"/docs/es/20/Concepts/error-handling",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Ferror-handling.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"error-handling",title:"Gesti\xf3n de errores"},sidebar:"docs",previous:{title:"Flujo de control",permalink:"/docs/es/20/Concepts/control-flow"},next:{title:"Modos interpretado y compilado",permalink:"/docs/es/20/Concepts/interpreted-compiled"}},i={},c=[{value:"Error o estado",id:"error-o-estado",level:2},{value:"Instalaci\xf3n de un m\xe9todo de gesti\xf3n de errores",id:"instalaci\xf3n-de-un-m\xe9todo-de-gesti\xf3n-de-errores",level:2},{value:"Alcance y componentes",id:"alcance-y-componentes",level:3},{value:"Manejo de errores e el m\xe9todo",id:"manejo-de-errores-e-el-m\xe9todo",level:3},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Utilizar un m\xe9todo de gesti\xf3n de errores vac\xedo",id:"utilizar-un-m\xe9todo-de-gesti\xf3n-de-errores-vac\xedo",level:3}];function t(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"El manejo de errores es el proceso de anticipar y responder a los errores que puedan ocurrir en su aplicaci\xf3n. 4D soporta de forma completa la detecci\xf3n y notificaci\xf3n de errores en tiempo de ejecuci\xf3n, as\xed como el an\xe1lisis de sus condiciones."}),"\n",(0,n.jsx)(r.p,{children:"La gesti\xf3n de errores responde a dos necesidades principales:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"descubrir y corregir posibles errores y fallos en el c\xf3digo durante la fase de desarrollo,"}),"\n",(0,n.jsx)(r.li,{children:"detectar y recuperar errores inesperados en las aplicaciones desplegadas; en particular, puede sustituir los di\xe1logos de error del sistema (disco lleno, archivo perdido, etc.) por su propia interfaz."}),"\n"]}),"\n",(0,n.jsx)(r.admonition,{title:"Buenas pr\xe1cticas",type:"tip",children:(0,n.jsxs)(r.p,{children:["Es muy recomendable instalar un m\xe9todo global de gesti\xf3n de errores en 4D Server, para todo el c\xf3digo que se ejecute en el servidor. Cuando 4D Server no se ejecuta ",(0,n.jsx)(r.a,{href:"/docs/es/20/Admin/cli",children:"headless"})," (es decir, se lanza con su ",(0,n.jsx)(r.a,{href:"/docs/es/20/ServerWindow/overview",children:"ventana de administraci\xf3n"}),"), este m\xe9todo evitar\xeda que se mostraran cajas de di\xe1logo inesperadas en la m\xe1quina servidor. En modo sin interfaz, los errores se registran en el archivo ",(0,n.jsx)(r.a,{href:"/docs/es/20/Debugging/debugLogFiles#4ddebuglogtxt-standard",children:"4DDebugLog"})," para su posterior an\xe1lisis."]})}),"\n",(0,n.jsx)(r.h2,{id:"error-o-estado",children:"Error o estado"}),"\n",(0,n.jsxs)(r.p,{children:["Muchas funciones de clase 4D, como ",(0,n.jsx)(r.code,{children:"entity.save()"})," o ",(0,n.jsx)(r.code,{children:"transporter.send()"}),", devuelven un objeto ",(0,n.jsx)(r.em,{children:"status"}),'. Este objeto se utiliza para almacenar errores "predecibles" en el contexto de ejecuci\xf3n, por ejemplo, una contrase\xf1a no v\xe1lida, una entidad bloqueada, etc., que no detienen la ejecuci\xf3n del programa. Esta categor\xeda de errores puede ser manejada por el c\xf3digo habitual.']}),"\n",(0,n.jsx)(r.p,{children:'Otros errores "imprevisibles" son el error de escritura en el disco, el fallo de la red o, en general, cualquier interrupci\xf3n inesperada. Esta categor\xeda de errores genera excepciones y necesita ser manejada a trav\xe9s de un m\xe9todo de gesti\xf3n de errores.'}),"\n",(0,n.jsx)(r.h2,{id:"instalaci\xf3n-de-un-m\xe9todo-de-gesti\xf3n-de-errores",children:"Instalaci\xf3n de un m\xe9todo de gesti\xf3n de errores"}),"\n",(0,n.jsxs)(r.p,{children:["En 4D, todos los errores pueden ser detectados y manejados por m\xe9todos proyecto espec\xedficos, llamados ",(0,n.jsx)(r.strong,{children:"m\xe9todos de gesti\xf3n de errores"})," (o ",(0,n.jsx)(r.strong,{children:"m\xe9todos de intercepci\xf3n de errores"}),")."]}),"\n",(0,n.jsx)(r.p,{children:"Una vez instalados, los manejadores de errores son llamados autom\xe1ticamente en modo interpretado o compilado en caso de error en la aplicaci\xf3n 4D o en uno de sus componentes. Se puede llamar a un manejador de errores diferente en funci\xf3n del contexto de ejecuci\xf3n (ver abajo)."}),"\n",(0,n.jsxs)(r.p,{children:["Para ",(0,n.jsx)(r.em,{children:"instalar"})," un m\xe9todo proyecto de gesti\xf3n de errores, basta con llamar al comando ",(0,n.jsx)(r.a,{href:"https://doc.4d.com/4dv19/help/command/en/page155.html",children:(0,n.jsx)(r.code,{children:"ON ERR CALL"})})," con el nombre del m\xe9todo proyecto y (opcionalmente) el \xe1lcance como par\xe1metros. Por ejemplo:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'ON ERR CALL("IO_Errors";ek local) //Instala un m\xe9todo local de gesti\xf3n de errores\n'})}),"\n",(0,n.jsxs)(r.p,{children:["Para dejar de interceptar los errores en un contexto de ejecuci\xf3n y devolver la mano, llame ",(0,n.jsx)(r.code,{children:"ON ERR CALL"})," con una cadena vac\xeda:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'ON ERR CALL("";ek local) //devuelve el control al proceso local\n'})}),"\n",(0,n.jsxs)(r.p,{children:["El comando ",(0,n.jsx)(r.a,{href:"https://doc.4d.com/4dv19/help/command/en/page704.html",children:(0,n.jsx)(r.code,{children:"Method called on error"})})," permite conocer el nombre del m\xe9todo instalado por ",(0,n.jsx)(r.code,{children:"ON ERR CALL"})," para el proceso actual. Es particularmente \xfatil en el contexto de c\xf3digo gen\xe9rico porque permite cambiar temporalmente y luego restaurar el m\xe9todo de captura de error:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:' $methCurrent:=Method called on error(ek local)\n ON ERR CALL("NewMethod";ek local)\n  //Si no se puede abrir el documento, se genera un error\n $ref:=Open document("MyDocument")\n  //Reinstalaci\xf3n del m\xe9todo anterior\n ON ERR CALL($methCurrent;ek local)\n\n'})}),"\n",(0,n.jsx)(r.h3,{id:"alcance-y-componentes",children:"Alcance y componentes"}),"\n",(0,n.jsx)(r.p,{children:"Se puede definir un m\xe9todo de gesti\xf3n de errores para diferentes contextos de ejecuci\xf3n:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["para el ",(0,n.jsx)(r.strong,{children:"proceso actual"}),"- s\xf3lo se llamar\xe1 a un gestor de errores local para los errores ocurridos en el proceso actual del proyecto actual,"]}),"\n",(0,n.jsxs)(r.li,{children:["para ",(0,n.jsx)(r.strong,{children:"toda la aplicaci\xf3n"}),"- se llamar\xe1 a un gestor de errores global para todos los errores que se produzcan en el contexto de ejecuci\xf3n de la aplicaci\xf3n del proyecto actual,"]}),"\n",(0,n.jsxs)(r.li,{children:["desde los ",(0,n.jsx)(r.strong,{children:"componentes"}),"- este manejador de errores se define en un proyecto local y ser\xe1 llamado para todos los errores que ocurran en los componentes cuando no hayan sido ya interceptados por un manejador de componentes."]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Ejemplos:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'ON ERR CALL("IO_Errors";ek local) //Instala un m\xe9todo de gesti\xf3n de errores local \nON ERR CALL("globalHandler";ek global) //Instala un m\xe9todo de gesti\xf3n de errores global \nON ERR CALL("componentHandler";ek errors from components) //Instala un m\xe9todo de gesti\xf3n de errores para los componentes\n'})}),"\n",(0,n.jsx)(r.p,{children:'Puede instalar un gestor de errores global que servir\xe1 como "fallback" y gestores de errores locales espec\xedficos para determinados procesos. Un gestor de errores global tambi\xe9n es \xfatil en el servidor para evitar di\xe1logos de error en el servidor cuando se ejecuta con interfaz.'}),"\n",(0,n.jsx)(r.p,{children:"Se puede definir un \xfanico m\xe9todo de captura de errores para toda la aplicaci\xf3n o diferentes m\xe9todos por m\xf3dulo de aplicaci\xf3n. Sin embargo, s\xf3lo se puede instalar un m\xe9todo por contexto de ejecuci\xf3n y por proyecto."}),"\n",(0,n.jsx)(r.p,{children:"Cuando se produce un error, s\xf3lo se llama a un m\xe9todo, como se describe en el siguiente diagrama:"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"gesti\xf3n de errores",src:o(823875).A+"",width:"1195",height:"578"})}),"\n",(0,n.jsx)(r.h3,{id:"manejo-de-errores-e-el-m\xe9todo",children:"Manejo de errores e el m\xe9todo"}),"\n",(0,n.jsx)(r.p,{children:"Dentro de un m\xe9todo de gesti\xf3n de errores personalizado, tiene acceso a varios datos que le ayudar\xe1n a identificar el error:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"las variables sistema dedicadas:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"Error"})," (entero largo): c\xf3digo de error"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"Error method"}),"(texto): nombre del m\xe9todo que ha provocado el error"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"Error line"})," (entero largo): n\xfamero de l\xednea del m\xe9todo que ha provocado el error"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"Error formula"})," (texto): f\xf3rmula del c\xf3digo 4D (texto bruto) que est\xe1 en el origen del error."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.admonition,{type:"info",children:(0,n.jsxs)(r.p,{children:["4D mantiene autom\xe1ticamente una serie de variables denominadas ",(0,n.jsx)(r.a,{href:"/docs/es/20/Concepts/variables#system-variables",children:(0,n.jsx)(r.strong,{children:"variables sistema"})}),", que responden a diferentes necesidades."]})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["el comando ",(0,n.jsx)(r.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1799.html",children:(0,n.jsx)(r.code,{children:"Last errors"})})," que devuelve una colecci\xf3n de la pila actual de errores ocurridos en la aplicaci\xf3n 4D. Tambi\xe9n puede utilizar el comando ",(0,n.jsx)(r.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1015.html",children:(0,n.jsx)(r.code,{children:"GET LAST ERROR STACK"})})," que devuelve la misma informaci\xf3n que los arrays."]}),"\n",(0,n.jsxs)(r.li,{children:["el comando ",(0,n.jsx)(r.code,{children:"Get call chain"})," que devuelve una colecci\xf3n de objetos que describen cada paso de la cadena de llamadas a m\xe9todos dentro del proceso actual."]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,n.jsx)(r.p,{children:"He aqu\xed un sistema de gesti\xf3n de errores sencillo:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'//instalar el m\xe9todo de gesti\xf3n de errores\n ON ERR CALL("errorMethod")\n //... ejecutar el c\xf3digo\n ON ERR CALL("") //giving control back to 4D\n'})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'// m\xe9todo proyecto errorMethod\n If(Error#1006) //esto no es una interrupci\xf3n del usuario\n    ALERT("Se ha producido el error "+String(Error)+". El c\xf3digo en cuesti\xf3n es: \\""+Error formula+"\\"")\n End if\n'})}),"\n",(0,n.jsx)(r.h3,{id:"utilizar-un-m\xe9todo-de-gesti\xf3n-de-errores-vac\xedo",children:"Utilizar un m\xe9todo de gesti\xf3n de errores vac\xedo"}),"\n",(0,n.jsxs)(r.p,{children:["Si desea principalmente que la caja de di\xe1logo de error est\xe1ndar est\xe9 oculta, puede instalar un m\xe9todo de gesti\xf3n de errores vac\xedo. La variable sistema ",(0,n.jsx)(r.code,{children:"Error"})," puede ser probada en cualquier m\xe9todo, es decir, fuera del m\xe9todo de gesti\xf3n de errores:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'ON ERR CALL("emptyMethod") //emptyMethod exists but is empty\n$doc:=Open document( "myFile.txt")\nIf (Error=-43)\n    ALERT("File not found.")\nEnd if\nON ERR CALL("")\nEnd if\nON ERR CALL("")\n'})})]})}function u(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(t,{...e})}):t(e)}},221020:(e,r,o)=>{var n=o(296540),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,o){var n,d={},c=null,t=null;for(n in void 0!==o&&(c=""+o),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(t=r.ref),r)a.call(r,n)&&!i.hasOwnProperty(n)&&(d[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===d[n]&&(d[n]=r[n]);return{$$typeof:s,type:e,key:c,ref:t,props:d,_owner:l.current}}r.Fragment=d,r.jsx=c,r.jsxs=c},474848:(e,r,o)=>{e.exports=o(221020)},823875:(e,r,o)=>{o.d(r,{A:()=>n});const n=o.p+"assets/images/error-schema-973d40c4618e79de87f884622e4e930f.png"},28453:(e,r,o)=>{o.d(r,{R:()=>a,x:()=>l});var n=o(296540);const s={},d=n.createContext(s);function a(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);