"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["27167"],{33390:function(e,r,o){o.r(r),o.d(r,{metadata:()=>n,contentTitle:()=>i,default:()=>u,assets:()=>l,toc:()=>t,frontMatter:()=>a});var n=JSON.parse('{"id":"Concepts/error-handling","title":"Gesti\xf3n de errores","description":"El manejo de errores es el proceso de anticipar y responder a los errores que puedan ocurrir en su aplicaci\xf3n. 4D soporta de forma completa la detecci\xf3n y notificaci\xf3n de errores en tiempo de ejecuci\xf3n, as\xed como el an\xe1lisis de sus condiciones.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Concepts/error-handling.md","sourceDirName":"Concepts","slug":"/Concepts/error-handling","permalink":"/docs/es/19/Concepts/error-handling","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Ferror-handling.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"error-handling","title":"Gesti\xf3n de errores"},"sidebar":"docs","previous":{"title":"Etiquetas de transformaci\xf3n","permalink":"/docs/es/19/Tags/tags"},"next":{"title":"Modos interpretado y compilado","permalink":"/docs/es/19/Concepts/interpreted-compiled"}}'),d=o("785893"),s=o("250065");let a={id:"error-handling",title:"Gesti\xf3n de errores"},i=void 0,l={},t=[{value:"Error o estado",id:"error-o-estado",level:2},{value:"Instalaci\xf3n de un m\xe9todo de gesti\xf3n de errores",id:"instalaci\xf3n-de-un-m\xe9todo-de-gesti\xf3n-de-errores",level:2},{value:"Alcance y componentes",id:"alcance-y-componentes",level:3},{value:"Manejo de errores e el m\xe9todo",id:"manejo-de-errores-e-el-m\xe9todo",level:3},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Utilizar un m\xe9todo de gesti\xf3n de errores vac\xedo",id:"utilizar-un-m\xe9todo-de-gesti\xf3n-de-errores-vac\xedo",level:3}];function c(e){let r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.p,{children:"El manejo de errores es el proceso de anticipar y responder a los errores que puedan ocurrir en su aplicaci\xf3n. 4D soporta de forma completa la detecci\xf3n y notificaci\xf3n de errores en tiempo de ejecuci\xf3n, as\xed como el an\xe1lisis de sus condiciones."}),"\n",(0,d.jsx)(r.p,{children:"La gesti\xf3n de errores responde a dos necesidades principales:"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:"descubrir y corregir posibles errores y fallos en el c\xf3digo durante la fase de desarrollo,"}),"\n",(0,d.jsx)(r.li,{children:"detectar y recuperar errores inesperados en las aplicaciones desplegadas; en particular, puede sustituir los di\xe1logos de error del sistema (disco lleno, archivo perdido, etc.) por su propia interfaz."}),"\n"]}),"\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsxs)(r.blockquote,{children:["\n",(0,d.jsx)(r.p,{children:"It is highly recommended to install an error-handling method on 4D Server, for all code running on the server. Este m\xe9todo evitar\xeda la aparici\xf3n de cajas de di\xe1logo inesperadas en el servidor, y podr\xeda registrar los errores en un archivo espec\xedfico para su posterior an\xe1lisis."}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(r.h2,{id:"error-o-estado",children:"Error o estado"}),"\n",(0,d.jsxs)(r.p,{children:["Muchas funciones de clase 4D, como ",(0,d.jsx)(r.code,{children:"entity.save()"})," o ",(0,d.jsx)(r.code,{children:"transporter.send()"}),", devuelven un objeto ",(0,d.jsx)(r.em,{children:"status"}),'. Este objeto se utiliza para almacenar errores "predecibles" en el contexto de ejecuci\xf3n, por ejemplo, una contrase\xf1a no v\xe1lida, una entidad bloqueada, etc., que no detienen la ejecuci\xf3n del programa. Esta categor\xeda de errores puede ser manejada por el c\xf3digo habitual.']}),"\n",(0,d.jsx)(r.p,{children:'Otros errores "imprevisibles" son el error de escritura en el disco, el fallo de la red o, en general, cualquier interrupci\xf3n inesperada. Esta categor\xeda de errores genera excepciones y necesita ser manejada a trav\xe9s de un m\xe9todo de gesti\xf3n de errores.'}),"\n",(0,d.jsx)(r.h2,{id:"instalaci\xf3n-de-un-m\xe9todo-de-gesti\xf3n-de-errores",children:"Instalaci\xf3n de un m\xe9todo de gesti\xf3n de errores"}),"\n",(0,d.jsxs)(r.p,{children:["En 4D, todos los errores pueden ser captados y manejados en un m\xe9todo proyecto espec\xedfico, el m\xe9todo ",(0,d.jsx)(r.strong,{children:"gesti\xf3n de errores"})," (o ",(0,d.jsx)(r.strong,{children:"captura de errores"}),")."]}),"\n",(0,d.jsxs)(r.p,{children:["Este m\xe9todo proyecto se instala para el proceso actual y ser\xe1 llamado autom\xe1ticamente para cualquier error que se produzca en el proceso, en modo interpretado o compilado. Para ",(0,d.jsx)(r.em,{children:"instalar"})," este m\xe9todo proyecto, basta con llamar al comando ",(0,d.jsx)(r.code,{children:"ON ERR CALL"})," con el nombre del m\xe9todo proyecto como par\xe1metro. Por ejemplo:"]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-4d",children:'ON ERR CALL("IO_ERRORS") //Instala el m\xe9todo de gesti\xf3n de errores\n'})}),"\n",(0,d.jsxs)(r.p,{children:["Para dejar de detectar errores y devolver el control a 4D, llame a ",(0,d.jsx)(r.code,{children:"ON ERR CALL"})," con una cadena vac\xeda:"]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-4d",children:'ON ERR CALL("") //devuelve el control a 4D\n'})}),"\n",(0,d.jsxs)(r.p,{children:["El comando ",(0,d.jsx)(r.code,{children:"Method called on error"})," le permite conocer el nombre del m\xe9todo instalado por ",(0,d.jsx)(r.code,{children:"ON ERR CALL"})," para el proceso actual. Es particularmente \xfatil en el contexto de c\xf3digo gen\xe9rico porque permite cambiar temporalmente y luego restaurar el m\xe9todo de captura de error:"]}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-4d",children:' $methCurrent:=Method called on error\n ON ERR CALL("NewMethod")\n  //Si no se puede abrir el documento, se genera un error\n $ref:=Open document("MyDocument")\n  //Reinstalaci\xf3n del m\xe9todo anterior\n ON ERR CALL($methCurrent)\n\n'})}),"\n",(0,d.jsx)(r.h3,{id:"alcance-y-componentes",children:"Alcance y componentes"}),"\n",(0,d.jsx)(r.p,{children:"Se puede definir un \xfanico m\xe9todo de captura de errores para toda la aplicaci\xf3n o diferentes m\xe9todos por m\xf3dulo de aplicaci\xf3n. Sin embargo, s\xf3lo se puede instalar un m\xe9todo por proceso."}),"\n",(0,d.jsxs)(r.p,{children:["Un m\xe9todo de gesti\xf3n de errores instalado por el comando ",(0,d.jsx)(r.code,{children:"ON ERR CALL"})," s\xf3lo se aplica \xfanicamente a la aplicaci\xf3n en ejecuci\xf3n. En el caso de un error generado por un ",(0,d.jsx)(r.strong,{children:"componente"}),", no se llama al m\xe9todo ",(0,d.jsx)(r.code,{children:"ON ERR CALL"})," de gesti\xf3n de errores de la aplicaci\xf3n local, y viceversa."]}),"\n",(0,d.jsx)(r.h3,{id:"manejo-de-errores-e-el-m\xe9todo",children:"Manejo de errores e el m\xe9todo"}),"\n",(0,d.jsx)(r.p,{children:"Dentro del m\xe9todo de error personalizado, tiene acceso a varias piezas de informaci\xf3n que le ayudar\xe1n a identificar el error:"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["\n",(0,d.jsx)(r.p,{children:"las variables sistema dedicadas:"}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"Error"})," (entero largo): c\xf3digo de error"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"Error method"}),"(texto): nombre del m\xe9todo que ha provocado el error"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"Error line"})," (entero largo): n\xfamero de l\xednea del m\xe9todo que ha provocado el error"]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"Error formula"})," (texto): f\xf3rmula del c\xf3digo 4D (texto bruto) que est\xe1 en el origen del error."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(r.admonition,{type:"info",children:[(0,d.jsxs)(r.p,{children:["4D mantiene autom\xe1ticamente una serie de variables denominadas ",(0,d.jsx)(r.a,{href:"/docs/es/19/Concepts/variables#system-variables",children:(0,d.jsx)(r.strong,{children:"variables sistema"})}),", que responden a diferentes necesidades. :::"]}),(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:["el comando ",(0,d.jsx)(r.code,{children:"GET LAST ERROR STACK"})," que devuelve informaci\xf3n sobre la pila de errores actual de la aplicaci\xf3n 4D."]}),"\n",(0,d.jsxs)(r.li,{children:["el comando ",(0,d.jsx)(r.code,{children:"Get call chain"})," que devuelve una colecci\xf3n de objetos que describen cada paso de la cadena de llamadas a m\xe9todos dentro del proceso actual."]}),"\n"]}),(0,d.jsx)(r.h4,{id:"ejemplo",children:"Ejemplo"}),(0,d.jsx)(r.p,{children:"He aqu\xed un sistema de gesti\xf3n de errores sencillo:"}),(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-4d",children:'//instalar el m\xe9todo de gesti\xf3n de errores\n ON ERR CALL("errorMethod")\n //... ejecutar el c\xf3digo\n ON ERR CALL("") //giving control back to 4D\n'})}),(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-4d",children:'// m\xe9todo proyecto errorMethod\n If(Error#1006) //esto no es una interrupci\xf3n del usuario\n    ALERT("Se ha producido el error "+String(Error)+". El c\xf3digo en cuesti\xf3n es: \\""+Error formula+"\\"")\n End if\n'})}),(0,d.jsx)(r.h3,{id:"utilizar-un-m\xe9todo-de-gesti\xf3n-de-errores-vac\xedo",children:"Utilizar un m\xe9todo de gesti\xf3n de errores vac\xedo"}),(0,d.jsxs)(r.p,{children:["Si desea principalmente que la caja de di\xe1logo de error est\xe1ndar est\xe9 oculta, puede instalar un m\xe9todo de gesti\xf3n de errores vac\xedo. La variable sistema ",(0,d.jsx)(r.code,{children:"Error"})," puede ser probada en cualquier m\xe9todo, es decir, fuera del m\xe9todo de gesti\xf3n de errores:"]}),(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-4d",children:'ON ERR CALL("emptyMethod") //emptyMethod exists but is empty\n$doc:=Open document( "myFile.txt")\nIf (Error=-43)\n    ALERT("File not found.")\nEnd if\nON ERR CALL("")\nEnd if\nON ERR CALL("")\n'})})]})]})}function u(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,r,o){o.d(r,{Z:function(){return i},a:function(){return a}});var n=o(667294);let d={},s=n.createContext(d);function a(e){let r=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);