"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88513"],{830419:function(e,r,n){n.r(r),n.d(r,{default:()=>u,frontMatter:()=>s,metadata:()=>o,assets:()=>t,toc:()=>l,contentTitle:()=>d});var o=JSON.parse('{"id":"Debugging/basics","title":"Depuraci\xf3n","description":"Los errores son comunes. Ser\xeda inusual escribir un n\xfamero importante de l\xedneas de c\xf3digo sin generar errores. Por el contrario, tratar y/o corregir errores tambi\xe9n es normal.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20/Debugging/basics.md","sourceDirName":"Debugging","slug":"/Debugging/basics","permalink":"/docs/es/20/Debugging/basics","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Debugging%2Fbasics.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"basics","title":"Depuraci\xf3n"},"sidebar":"docs","previous":{"title":"Etiquetas de transformaci\xf3n","permalink":"/docs/es/20/Tags/tags"},"next":{"title":"Debugger","permalink":"/docs/es/20/Debugging/debugger"}}'),a=n("785893"),i=n("250065");let s={id:"basics",title:"Depuraci\xf3n"},d=void 0,t={},l=[{value:"Tipos de error",id:"tipos-de-error",level:2},{value:"Errores de digitaci\xf3n",id:"errores-de-digitaci\xf3n",level:3},{value:"Errores de sintaxis",id:"errores-de-sintaxis",level:3},{value:"Errores del entorno",id:"errores-del-entorno",level:3},{value:"Errores de dise\xf1o o de l\xf3gica",id:"errores-de-dise\xf1o-o-de-l\xf3gica",level:3},{value:"Errores de ejecuci\xf3n",id:"errores-de-ejecuci\xf3n",level:3},{value:"Ventana de error de sintaxis",id:"ventana-de-error-de-sintaxis",level:2},{value:"Debugger",id:"debugger",level:2},{value:"Rupturas",id:"rupturas",level:2}];function c(e){let r={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"Los errores son comunes. Ser\xeda inusual escribir un n\xfamero importante de l\xedneas de c\xf3digo sin generar errores. Por el contrario, tratar y/o corregir errores tambi\xe9n es normal."}),"\n",(0,a.jsx)(r.p,{children:"El entorno de desarrollo 4D ofrece varias herramientas de depuraci\xf3n para todo tipo de errores."}),"\n",(0,a.jsx)(r.h2,{id:"tipos-de-error",children:"Tipos de error"}),"\n",(0,a.jsx)(r.h3,{id:"errores-de-digitaci\xf3n",children:"Errores de digitaci\xf3n"}),"\n",(0,a.jsx)(r.p,{children:"Los errores de escritura son detectados por el Editor de c\xf3digo. Se muestran en rojo y se ofrece informaci\xf3n adicional en la parte inferior de la ventana. He aqu\xed un error de escritura:"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"punto de ruptura",src:n(308600).Z+"",width:"1824",height:"980"})}),"\n",(0,a.jsx)(r.p,{children:"Estos errores de escritura suelen causar errores de sintaxis (en la imagen anterior, el nombre de la tabla es desconocido). Se obtiene la descripci\xf3n del error cuando se valida la l\xednea de c\xf3digo. Cuando esto ocurre, corrija el error de digitaci\xf3n y escriba Enter para validar la soluci\xf3n."}),"\n",(0,a.jsx)(r.h3,{id:"errores-de-sintaxis",children:"Errores de sintaxis"}),"\n",(0,a.jsxs)(r.p,{children:["Algunos errores s\xf3lo se pueden capturar cuando se ejecuta el m\xe9todo. La ",(0,a.jsx)(r.a,{href:"#syntax-error-window",children:"ventana de error de sint\xe1xis"})," aparece cuando ocurre un error durante la ejecuci\xf3n del c\xf3digo. Por ejemplo:"]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"syntax-error",src:n(450271).Z+"",width:"642",height:"552"})}),"\n",(0,a.jsxs)(r.p,{children:["Expanda el \xe1rea ",(0,a.jsx)(r.strong,{children:"Detalles"})," para mostrar el \xfaltimo error y su n\xfamero."]}),"\n",(0,a.jsx)(r.h3,{id:"errores-del-entorno",children:"Errores del entorno"}),"\n",(0,a.jsxs)(r.p,{children:["Ocasionalmente, puede que no haya suficiente memoria para crear un BLOB. O, cuando acceda a un documento en el disco, el documento puede no existir o ya estar abierto por otra aplicaci\xf3n. Estos errores en el entorno no se producen directamente por su c\xf3digo o por la forma en que lo escribe. La mayor\xeda de las veces estos errores son f\xe1ciles de tratar con un ",(0,a.jsx)(r.a,{href:"/docs/es/20/Concepts/error-handling",children:"m\xe9todo de captura de errores"})," instalado utilizando el comando ",(0,a.jsx)(r.code,{children:"ON ERR CALL"}),"."]}),"\n",(0,a.jsx)(r.h3,{id:"errores-de-dise\xf1o-o-de-l\xf3gica",children:"Errores de dise\xf1o o de l\xf3gica"}),"\n",(0,a.jsxs)(r.p,{children:['Estos son generalmente los tipos de errores m\xe1s dif\xedciles de encontrar. A excepci\xf3n de los errores de digitaci\xf3n, todos los tipos de errores listados arriba est\xe1n cubiertos hasta cierto punto por la expresi\xf3n "error de dise\xf1o o de l\xf3gica". Utilice el ',(0,a.jsx)(r.a,{href:"/docs/es/20/Debugging/debugger",children:"depurador "})," para detectarlos. Por ejemplo:"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["Puede ocurrir un ",(0,a.jsx)(r.em,{children:"error de sintaxis"})," cuando intenta utilizar una variable que a\xfan no est\xe1 inicializada."]}),"\n",(0,a.jsxs)(r.li,{children:["Puede ocurrir un ",(0,a.jsx)(r.em,{children:"error de entorno"})," cuando intenta abrir un documento, porque el nombre de ese documento es recibido por una subrutina que no obtuvo el valor correcto como par\xe1metro."]}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"Los errores de dise\xf1o o de l\xf3gica tambi\xe9n incluyen situaciones como:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["Un registro no est\xe1 correctamente actualizado porque, mientras se llama a ",(0,a.jsx)(r.code,{children:"SAVE RECORD"}),", se olvid\xf3 de la primera prueba de si el registro estaba bloqueado o no."]}),"\n",(0,a.jsx)(r.li,{children:"Un m\xe9todo no hace exactamente lo que espera, ya que la presencia de un par\xe1metro opcional no est\xe1 probada."}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"A veces el c\xf3digo que muestra el error puede ser diferente al c\xf3digo que en realidad es el origen del problema."}),"\n",(0,a.jsx)(r.h3,{id:"errores-de-ejecuci\xf3n",children:"Errores de ejecuci\xf3n"}),"\n",(0,a.jsx)(r.p,{children:"En modo Aplicaci\xf3n, puede obtener errores que no ve en modo interpretado. Aqu\xed un ejemplo:"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"runtime-error",src:n(769609).Z+"",width:"662",height:"472"})}),"\n",(0,a.jsx)(r.p,{children:"Para encontrar r\xe1pidamente el origen del problema, vuelva a abrir la versi\xf3n interpretada del archivo de estructura, abra el m\xe9todo y vaya a la l\xednea correspondiente."}),"\n",(0,a.jsx)(r.h2,{id:"ventana-de-error-de-sintaxis",children:"Ventana de error de sintaxis"}),"\n",(0,a.jsx)(r.p,{children:"La ventana de error de sintaxis aparece autom\xe1ticamente cuando se interrumpe la ejecuci\xf3n de un m\xe9todo. Esto puede ocurrir cuando:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"un error impide que el c\xf3digo siga ejecut\xe1ndose"}),"\n",(0,a.jsxs)(r.li,{children:["el m\xe9todo produce una afirmaci\xf3n falsa (ver el comando ",(0,a.jsx)(r.code,{children:"ASSERT"}),")"]}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"syntax-error",src:n(450271).Z+"",width:"642",height:"552"})}),"\n",(0,a.jsx)(r.p,{children:'El \xe1rea de texto superior muestra un mensaje describiendo el error. El \xe1rea de texto inferior muestra la l\xednea que se estaba ejecutando cuando ocurri\xf3 el error; el \xe1rea donde ocurri\xf3 el error se resalta. La secci\xf3n Detalles extendida contiene la "pila" de errores relacionados con el proceso.'}),"\n",(0,a.jsx)(r.p,{children:"La ventana de error de sintaxis propone varias opciones:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Modificar"}),": detiene la ejecuci\xf3n de todos los m\xe9todos. 4D cambia al entorno de Dise\xf1o y el m\xe9todo con el error se abre en el editor de C\xf3digo, permiti\xe9ndole corregirlo. Utilice esta opci\xf3n cuando reconozca inmediatamente el error y pueda arreglarlo sin m\xe1s investigaci\xf3n."]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Rastrear"}),": entra en modo Rastrear/Depurador. Se muestra la ventana del ",(0,a.jsx)(r.a,{href:"/docs/es/20/Debugging/debugger",children:"Depurador"}),". Si la l\xednea actual solo se ha ejecutado parcialmente, es posible que tenga que hacer clic en el bot\xf3n ",(0,a.jsx)(r.strong,{children:"rastrear"})," varias veces."]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Continuar"}),": la ejecuci\xf3n continua. La l\xednea con el error puede ser parcialmente ejecutada, dependiendo de donde se encuentre el error. Contin\xfae con precauci\xf3n: el error puede impedir que el resto de su m\xe9todo se ejecute correctamente. Recomendamos hacer clic en ",(0,a.jsx)(r.strong,{children:"Continuar"})," s\xf3lo si el error est\xe1 en una llamada trivial (como ",(0,a.jsx)(r.code,{children:"SET WINDOW TITLE"}),") que no impide ejecutar y probar el resto de su c\xf3digo."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsxs)(r.p,{children:["Consejo: para ignorar un error que ocurre repetidamente (por ejemplo, en bucles), puede convertir el bot\xf3n ",(0,a.jsx)(r.strong,{children:"Continuar"})," en un bot\xf3n ",(0,a.jsx)(r.strong,{children:"Ignorar"}),". Mantenga presionada la tecla ",(0,a.jsx)(r.strong,{children:"Alt"})," (Windows) u ",(0,a.jsx)(r.strong,{children:"Opci\xf3n"})," (macOS) y haga clic en el bot\xf3n ",(0,a.jsx)(r.strong,{children:"Continuar"})," la primera vez que aparece. La etiqueta del bot\xf3n cambia a ",(0,a.jsx)(r.strong,{children:"Ignorar"})," si el di\xe1logo es llamado de nuevo por el mismo error."]}),"\n"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Abandonar"}),": detiene la ejecuci\xf3n del m\xe9todo y devuelve al estado antes del inicio de la ejecuci\xf3n del m\xe9todo:"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Si un m\xe9todo formulario o m\xe9todo objeto se est\xe1 ejecutando en respuesta a un evento, se detiene y se vuelve al formulario."}),"\n",(0,a.jsx)(r.li,{children:"Si el m\xe9todo se est\xe1 ejecutando desde dentro del entorno de la aplicaci\xf3n, volver\xe1 a ese entorno."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Copiar"}),": copia la informaci\xf3n de depuraci\xf3n en el portapapeles. La informaci\xf3n describe el entorno interno del error (n\xfamero, componente interno, etc.). Est\xe1 formateado como texto tabulado."]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Guardar..."}),": guarda el contenido de la ventana de error de sintaxis y la cadena de llamadas en un archivo ",(0,a.jsx)(r.code,{children:".txt"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"debugger",children:"Debugger"}),"\n",(0,a.jsxs)(r.p,{children:["Un error com\xfan de los principiantes al tratar con la detecci\xf3n de errores es hacer clic en ",(0,a.jsx)(r.strong,{children:"Abandonar"})," en la ventana de error de sintaxis, volver al editor de c\xf3digo, y tratar de averiguar lo que est\xe1 pasando mirando el c\xf3digo. \xa1No lo haga! Ahorrar\xe1 mucho tiempo y energ\xeda utilizando siempre el ",(0,a.jsx)(r.strong,{children:"Depurador"}),"."]}),"\n",(0,a.jsx)(r.p,{children:"El depurador le permite pasar lentamente por los m\xe9todos. Muestra toda la informaci\xf3n que necesita para entender por qu\xe9 ha ocurrido un error. Una vez que tiene esta informaci\xf3n, usted sabe c\xf3mo arreglar el error."}),"\n",(0,a.jsxs)(r.p,{children:['Otra raz\xf3n para usar el Depurador es el desarrollo del c\xf3digo. A veces se puede escribir un algoritmo que es m\xe1s complejo de lo habitual. A pesar de todos los sentimientos de cumplimiento, no puede estar totalmente seguro de que su codificaci\xf3n sea 100% correcta. En lugar de ejecutarlo "ciego", puede utilizar el comando ',(0,a.jsx)(r.code,{children:"TRACE"})," al comienzo de su c\xf3digo, luego ejecutarlo paso a paso para mantener un ojo en lo que sucede."]}),"\n",(0,a.jsx)(r.h2,{id:"rupturas",children:"Rupturas"}),"\n",(0,a.jsx)(r.p,{children:'En el proceso de depuraci\xf3n, puede que necesite saltar el seguimiento de algunas partes del c\xf3digo hasta una l\xednea determinada. O, puede querer rastrear el c\xf3digo cuando una expresi\xf3n dada tiene un determinado valor (e.. "$myVar > 1000"), o cada vez que se llama un comando 4D espec\xedfico.'}),"\n",(0,a.jsxs)(r.p,{children:["Estas necesidades est\xe1n cubiertas por ",(0,a.jsx)(r.strong,{children:"puntos de interrupci\xf3n"})," y las funciones de ",(0,a.jsx)(r.strong,{children:"captura de comando"}),". Pueden configurarse desde el editor de c\xf3digo, el depurador o el explorador de ejecuci\xf3n."]})]})}function u(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},769609:function(e,r,n){n.d(r,{Z:function(){return o}});let o=n.p+"assets/images/runtimeError-80c1fe83365744c8fbc4724923d8182e.png"},450271:function(e,r,n){n.d(r,{Z:function(){return o}});let o=n.p+"assets/images/syntax-error-c4e0d1c422e1b516cbdfd695e96bde32.png"},308600:function(e,r,n){n.d(r,{Z:function(){return o}});let o=n.p+"assets/images/typing-error-0347074dc677f0bc726a4aca19f3a787.png"},250065:function(e,r,n){n.d(r,{Z:function(){return d},a:function(){return s}});var o=n(667294);let a={},i=o.createContext(a);function s(e){let r=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);