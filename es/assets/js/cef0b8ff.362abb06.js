/*! For license information please see cef0b8ff.362abb06.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[98272],{733140:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=a(474848),r=a(28453);const i={id:"creating",title:"Creaci\xf3n de men\xfas y barras de men\xfas"},l=void 0,o={id:"Menus/creating",title:"Creaci\xf3n de men\xfas y barras de men\xfas",description:"Puede crear men\xfas y barras de men\xfas:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/Menus/creating.md",sourceDirName:"Menus",slug:"/Menus/creating",permalink:"/docs/es/20-R5/Menus/creating",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Menus%2Fcreating.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"creating",title:"Creaci\xf3n de men\xfas y barras de men\xfas"},sidebar:"docs",previous:{title:"Men\xfas",permalink:"/docs/es/20-R5/Menus/overview"},next:{title:"Propiedades de los men\xfas",permalink:"/docs/es/20-R5/Menus/properties"}},d={},c=[{value:"Barra de men\xfas por defecto",id:"barra-de-men\xfas-por-defecto",level:2},{value:"Crear men\xfas",id:"crear-men\xfas",level:2},{value:"Utilizando el editor de men\xfas",id:"utilizando-el-editor-de-men\xfas",level:3},{value:"Utilizando el lenguaje 4D",id:"utilizando-el-lenguaje-4d",level:3},{value:"A\xf1adir l\xedneas",id:"a\xf1adir-l\xedneas",level:2},{value:"Utilizando el editor de men\xfas",id:"utilizando-el-editor-de-men\xfas-1",level:3},{value:"Utilizando el lenguaje 4D",id:"utilizando-el-lenguaje-4d-1",level:3},{value:"Eliminar men\xfas y elementos de men\xfas",id:"eliminar-men\xfas-y-elementos-de-men\xfas",level:2},{value:"Utilizando el editor de men\xfas",id:"utilizando-el-editor-de-men\xfas-2",level:3},{value:"Utilizando el lenguaje 4D",id:"utilizando-el-lenguaje-4d-2",level:3},{value:"Adjuntar los men\xfas",id:"adjuntar-los-men\xfas",level:2},{value:"Utilizando el editor de men\xfas",id:"utilizando-el-editor-de-men\xfas-3",level:3},{value:"Quitar los men\xfas",id:"quitar-los-men\xfas",level:4},{value:"Utilizando el lenguaje 4D",id:"utilizando-el-lenguaje-4d-3",level:3}];function t(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Puede crear men\xfas y barras de men\xfas:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"utilizando el editor de men\xfas de la ventana de la caja de herramientas 4D. En este caso, los men\xfas y las barras de men\xfa se almacenan en la estructura de la aplicaci\xf3n."}),"\n",(0,s.jsx)(n.li,{children:'din\xe1micamente, utilizando los comandos del lenguaje del tema "Men\xfas". En este caso, los men\xfas y las barras de men\xfas no se almacenan, s\xf3lo existen en la memoria.'}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Puede combinar ambas funcionalidades y utilizar los men\xfas creados en la estructura como plantillas para definir los men\xfas en la memoria."}),"\n",(0,s.jsx)(n.h2,{id:"barra-de-men\xfas-por-defecto",children:"Barra de men\xfas por defecto"}),"\n",(0,s.jsx)(n.p,{children:"Una aplicaci\xf3n personalizada debe contener al menos una barra de men\xfas con un men\xfa. Una aplicaci\xf3n personalizada debe contener al menos una barra de men\xfas con un men\xfa. La barra de men\xfas por defecto incluye men\xfas est\xe1ndar y un comando para volver al modo Dise\xf1o."}),"\n",(0,s.jsxs)(n.p,{children:["Esto permite al usuario acceder al modo Aplicaci\xf3n tan pronto como se crea el proyecto. La barra de men\xfas n\xba 1 se llama autom\xe1ticamente cuando se elige el comando ",(0,s.jsx)(n.strong,{children:"Test Application"})," en el men\xfa ",(0,s.jsx)(n.strong,{children:"Ejecuci\xf3n"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"La barra de men\xfas por defecto incluye tres men\xfas:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Archivo"}),": s\xf3lo incluye el comando ",(0,s.jsx)(n.strong,{children:"Salir"}),". La acci\xf3n est\xe1ndar ",(0,s.jsx)(n.em,{children:"Salir"})," est\xe1 asociada al comando, que hace que la aplicaci\xf3n salga."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Editar"}),": men\xfa est\xe1ndar y totalmente editable. Las funciones de edici\xf3n, como copiar, pegar, etc., se definen mediante acciones est\xe1ndar."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Modo"}),": contiene, por defecto, el comando ",(0,s.jsx)(n.strong,{children:"Volver al modo Dise\xf1o"}),", que se utiliza para salir del modo Aplicaci\xf3n."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Menu items appear ",(0,s.jsx)(n.em,{children:"in italics"})," because they consist of references and not hard-coded text. Consulte ",(0,s.jsx)(n.a,{href:"/docs/es/20-R5/Menus/properties#title",children:"Propiedad T\xedtulo"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Puede modificar esta barra de men\xfa como desee o crear otras adicionales."}),"\n",(0,s.jsx)(n.h2,{id:"crear-men\xfas",children:"Crear men\xfas"}),"\n",(0,s.jsx)(n.h3,{id:"utilizando-el-editor-de-men\xfas",children:"Utilizando el editor de men\xfas"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Seleccione el elemento que desea crear y haga clic en el bot\xf3n A\xf1adir ",(0,s.jsx)(n.img,{src:a(532671).A+"",width:"20",height:"16"})," debajo del \xe1rea de la barra de men\xfas.\nO\nElija ",(0,s.jsx)(n.strong,{children:"Crear una nueva barra de men\xfas"})," o ",(0,s.jsx)(n.strong,{children:"Crear un nuevo men\xfa"})," en el men\xfa contextual de la lista o en el men\xfa de opciones situado debajo de la lista.\nSi ha creado una barra de men\xfas, aparece una nueva barra en la lista que contiene los men\xfas por defecto (Archivo y Edici\xf3n)."]}),"\n",(0,s.jsxs)(n.li,{children:['(opcional) Haga doble clic en el nombre de la barra de men\xfa/men\xfa para pasar al modo de edici\xf3n e introducir un nombre personalizado.\nOR Enter the custom name in the "Title" area.\nLos nombres de las barras de men\xfa deben ser \xfanicos. Pueden contener hasta 31 caracteres. Puede introducir el nombre como "hard coded" o introducir una referencia (ver ',(0,s.jsx)(n.a,{href:"/docs/es/20-R5/Menus/properties#title",children:"informaci\xf3n sobre la propiedad Title"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"utilizando-el-lenguaje-4d",children:"Utilizando el lenguaje 4D"}),"\n",(0,s.jsxs)(n.p,{children:["Utilice el comando ",(0,s.jsx)(n.code,{children:"Create menu"})," para crear una nueva barra de men\xfa o referencia de men\xfa (",(0,s.jsx)(n.em,{children:"MenuRef"}),") en la memoria."]}),"\n",(0,s.jsxs)(n.p,{children:["Cuando los men\xfas se manejan mediante referencias ",(0,s.jsx)(n.em,{children:"MenuRef"}),", no hay diferencia per se entre un men\xfa y una barra de men\xfas. En ambos casos, consiste en una lista de elementos. S\xf3lo difiere su uso. En el caso de una barra de men\xfas, cada elemento corresponde a un men\xfa que a su vez est\xe1 compuesto por elementos."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Create menu"})," puede crear men\xfas vac\xedos (para llenar utilizando ",(0,s.jsx)(n.code,{children:"APPEND MENU ITEM"})," o ",(0,s.jsx)(n.code,{children:"INSERT MENU ITEM"}),") o por men\xfas construidos sobre men\xfas dise\xf1ados en el editor de men\xfas."]}),"\n",(0,s.jsx)(n.h2,{id:"a\xf1adir-l\xedneas",children:"A\xf1adir l\xedneas"}),"\n",(0,s.jsx)(n.p,{children:"Para cada uno de los men\xfas, debe a\xf1adir los comandos que aparecen cuando el men\xfa se despliega. Puede insertar elementos que se asociar\xe1n a los m\xe9todos o a las acciones est\xe1ndar, o adjuntar otros men\xfas (submen\xfas)."}),"\n",(0,s.jsx)(n.h3,{id:"utilizando-el-editor-de-men\xfas-1",children:"Utilizando el editor de men\xfas"}),"\n",(0,s.jsx)(n.p,{children:"Para a\xf1adir un elemento de men\xfa:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"En la lista de men\xfas fuente, seleccione el men\xfa al que desea a\xf1adir un comando.\nSi el men\xfa ya tiene comandos, se mostrar\xe1n en la lista central. Si desea insertar el nuevo comando, seleccione el comando que desea que aparezca sobre \xe9l. Todav\xeda es posible reorganizar el men\xfa posteriormente utilizando la funci\xf3n de arrastrar y soltar."}),"\n",(0,s.jsxs)(n.li,{children:["Elija ",(0,s.jsx)(n.strong,{children:'A\xf1adir un elemento al men\xfa "NombreDelMen\xfa"'})," en el men\xfa de opciones del editor o desde el men\xfa contextual (clic derecho en la lista central).\nO\nHaga clic en el bot\xf3n a\xf1adir ",(0,s.jsx)(n.img,{src:a(532671).A+"",width:"20",height:"16"}),' ubicado debajo de la lista central.\n4D a\xf1ade un nuevo elemento con el nombre por defecto "Elemento X" donde X es el n\xfamero de elementos ya creados.']}),"\n",(0,s.jsx)(n.li,{children:'Haga doble clic en el nombre del comando para pasar al modo edici\xf3n e introducir un nombre personalizado.\nOR Enter the custom name in the "Title" area. Puede contener hasta 31 caracteres. Puede introducir el nombre como "codificado" o introducir una referencia (ver m\xe1s abajo).'}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"utilizando-el-lenguaje-4d-1",children:"Utilizando el lenguaje 4D"}),"\n",(0,s.jsxs)(n.p,{children:["Utilice ",(0,s.jsx)(n.code,{children:"INSERT MENU ITEM"})," o ",(0,s.jsx)(n.code,{children:"APPEND MENU ITEM"})," para insertar o a\xf1adir elementos de men\xfa en referencias de men\xfa existentes."]}),"\n",(0,s.jsx)(n.h2,{id:"eliminar-men\xfas-y-elementos-de-men\xfas",children:"Eliminar men\xfas y elementos de men\xfas"}),"\n",(0,s.jsx)(n.h3,{id:"utilizando-el-editor-de-men\xfas-2",children:"Utilizando el editor de men\xfas"}),"\n",(0,s.jsx)(n.p,{children:"Puede eliminar una barra de men\xfas, un men\xfa o un elemento de men\xfa en el editor de men\xfas en cualquier momento. Tenga en cuenta que cada men\xfa o barra de men\xfas s\xf3lo tiene una referencia. Cuando un men\xfa est\xe1 unido a diferentes barras o a diferentes men\xfas, cualquier modificaci\xf3n o supresi\xf3n realizada en el men\xfa se lleva a cabo inmediatamente en todas las dem\xe1s apariciones de este men\xfa. La eliminaci\xf3n de un men\xfa s\xf3lo borrar\xe1 una referencia. Cuando se borra la \xfaltima referencia de un men\xfa, 4D muestra una alerta."}),"\n",(0,s.jsx)(n.p,{children:"Para eliminar una barra de men\xfas, un men\xfa o un elemento de men\xfa:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Seleccione el elemento que desea eliminar y haga clic en el bot\xf3n ",(0,s.jsx)(n.img,{src:a(457133).A+"",width:"19",height:"18"})," situado debajo de la lista."]}),"\n",(0,s.jsxs)(n.li,{children:["o bien, utilice el comando apropiado ",(0,s.jsx)(n.strong,{children:"Eliminar..."})," del men\xfa contextual o del men\xfa de opciones del editor."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"No es posible eliminar Menu Bar #1."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"utilizando-el-lenguaje-4d-2",children:"Utilizando el lenguaje 4D"}),"\n",(0,s.jsxs)(n.p,{children:["Utilice ",(0,s.jsx)(n.code,{children:"DELETE MENU ITEM"})," para eliminar un elemento de una referencia de men\xfa. Utilice ",(0,s.jsx)(n.code,{children:"RELEASE MENU"})," para descargar la referencia del men\xfa de la memoria."]}),"\n",(0,s.jsx)(n.h2,{id:"adjuntar-los-men\xfas",children:"Adjuntar los men\xfas"}),"\n",(0,s.jsx)(n.p,{children:"Una vez creado un men\xfa, puede adjuntarlo a uno o a varios otros men\xfas (submen\xfas) o barras de men\xfas."}),"\n",(0,s.jsx)(n.p,{children:"Los submen\xfas pueden utilizarse para agrupar funciones organizadas por temas dentro del mismo men\xfa. Los submen\xfas y sus elementos pueden tener los mismos atributos que los propios men\xfas (acciones, m\xe9todos, accesos directos, iconos, etc.). Los elementos del submen\xfa conservan sus caracter\xedsticas y propiedades originales y el funcionamiento del submen\xfa es id\xe9ntico al de un men\xfa est\xe1ndar."}),"\n",(0,s.jsx)(n.p,{children:"Puede crear submen\xfas de submen\xfas hasta una profundidad pr\xe1cticamente ilimitada. Sin embargo, tenga en cuenta que, por razones de ergonom\xeda de la interfaz, en general no se recomienda superar los dos niveles de submen\xfas."}),"\n",(0,s.jsx)(n.p,{children:"En tiempo de ejecuci\xf3n, si un men\xfa adjunto se modifica por programaci\xf3n, todas las dem\xe1s instancias del men\xfa reflejar\xe1n estos cambios."}),"\n",(0,s.jsx)(n.h3,{id:"utilizando-el-editor-de-men\xfas-3",children:"Utilizando el editor de men\xfas"}),"\n",(0,s.jsx)(n.p,{children:"Un men\xfa puede estar unido a una barra de men\xfas o a otro men\xfa."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Para adjuntar un men\xfa a una barra de men\xfa: haga clic derecho en la barra de men\xfa y seleccione ",(0,s.jsx)(n.strong,{children:'Adjuntar un men\xfa a la barra de men\xfa "nombre de barra" >'}),", luego elija el men\xfa a adjuntar a la barra de men\xfa:\n! ](. /assets/en/Menus/attach.png)\nTambi\xe9n puede seleccionar una barra de men\xfa y luego hacer clic en el bot\xf3n de opciones que se encuentra debajo de la lista."]}),"\n",(0,s.jsxs)(n.li,{children:["Para adjuntar un men\xfa a otro men\xfa: seleccione el men\xfa en el \xe1rea de la izquierda, luego haga clic derecho en el elemento de men\xfa y seleccione ",(0,s.jsx)(n.strong,{children:'Adjuntar un submen\xfa al elemento "nombre del elemento">'}),", luego elija el men\xfa que desea utilizar como submen\xfa:",(0,s.jsx)(n.br,{}),"\n! ](. /assets/en/Menus/attach2.png)\nTambi\xe9n puede seleccionar un elemento de men\xfa y luego hacer clic en el bot\xf3n de opciones que se encuentra debajo de la lista.\nEl men\xfa que se adjunta se convierte as\xed en un submen\xfa. El t\xedtulo del elemento se mantiene (el nombre original del submen\xfa se ignora), pero este t\xedtulo puede modificarse."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"quitar-los-men\xfas",children:"Quitar los men\xfas"}),"\n",(0,s.jsx)(n.p,{children:"Puede separar un men\xfa de una barra de men\xfas o un submen\xfa de un men\xfa en cualquier momento. El men\xfa separado ya no est\xe1 disponible en la barra de men\xfas o en el submen\xfa, seg\xfan el caso, pero sigue estando presente en la lista de men\xfas."}),"\n",(0,s.jsxs)(n.p,{children:["Para desvincular un men\xfa, haga clic con el bot\xf3n derecho en el men\xfa o submen\xfa que desee desvincular en la lista central y, a continuaci\xf3n, elija la opci\xf3n ",(0,s.jsx)(n.strong,{children:"Desvincular el men\xfa(...)"})," o ",(0,s.jsx)(n.strong,{children:"Desvincular el submen\xfa(...)"})]}),"\n",(0,s.jsx)(n.h3,{id:"utilizando-el-lenguaje-4d-3",children:"Utilizando el lenguaje 4D"}),"\n",(0,s.jsxs)(n.p,{children:["Como no hay diferencia entre los men\xfas y las barras de men\xfas en el lenguaje de 4D, adjuntar men\xfas o submen\xfas se hace de la misma manera: utilice el par\xe1metro ",(0,s.jsx)(n.em,{children:"submen\xfa"})," del comando ",(0,s.jsx)(n.code,{children:"APPEND MENU ITEM"})," para adjuntar un men\xfa a una barra de men\xfas o a un men\xfa."]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},221020:(e,n,a)=>{var s=a(296540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,a){var s,i={},c=null,t=null;for(s in void 0!==a&&(c=""+a),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(t=n.ref),n)l.call(n,s)&&!d.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:r,type:e,key:c,ref:t,props:i,_owner:o.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},474848:(e,n,a)=>{e.exports=a(221020)},457133:(e,n,a)=>{a.d(n,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAIAAAA2bnI+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAACnSURBVDhP1ctPC4JAEAXw+YJlsML2dYMigkyDwIxAMkJz7Z9lZaceu7BevDSeGn6H3Zn3qKw+PB2a13vNQ+dbzdOhqS5vHjqeXjyUqicPHfLKSNJyqEdK6bpuXw8e+GKwR8CGoWlud0oIMdDjOE5PDx5mgxMCNgy0zx7GJs5ni/VoErTCCQEbBvJDZXirbOon43ncCicEbBia5q/+rBmEBQ8to4IjKr7x0nj9UM5kBgAAAABJRU5ErkJggg=="},532671:(e,n,a)=>{a.d(n,{A:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAADxSURBVDhPnY9Pa8JAFMTfF6wpTbS99HN6EhEVEbTmUEiplWBETbKatv6renJ4C491Gz3s8DsMOzPsLm32Z2foZ3tyhorfkzM3x6o4vLJgrEgg9X0sJVkUzywYKxIoW/+VMpnmQRD4vg9jRQIt1aGUcZzpMYwVCTTP90Ky3Lyw8FosKywY/X6co2D2r8ZfU4WrHlme5z2wYPQJIhTMPs3SnfAZ5/23j1Y3BM32ENdiCaNPEKFg9mkUKWH4nvZGSWcQg0YnemLB6BNEKJj9q7EJ2lUWjBUJ98Y1lssYj6w3QwBjRcLNsf7//3+aUBitHIlWFwd0H5oG1DOiAAAAAElFTkSuQmCC"},28453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>o});var s=a(296540);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);