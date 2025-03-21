"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["27768"],{624958:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>d,assets:()=>o,toc:()=>l,contentTitle:()=>t});var d=JSON.parse('{"id":"commands-legacy/log-event","title":"LOG EVENT","description":"LOG EVENT ( {tipoSalida ;} mensaje {; importancia} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/log-event.md","sourceDirName":"commands-legacy","slug":"/commands/log-event","permalink":"/docs/es/20-R7/commands/log-event","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flog-event.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"log-event","title":"LOG EVENT","slug":"/commands/log-event","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is Windows","permalink":"/docs/es/20-R7/commands/is-windows"},"next":{"title":"Menu bar height","permalink":"/docs/es/20-R7/commands/menu-bar-height"}}'),r=s("785893"),i=s("250065");let a={id:"log-event",title:"LOG EVENT",slug:"/commands/log-event",displayed_sidebar:"docs"},t=void 0,o={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LOG EVENT"})," ( {",(0,r.jsx)(n.em,{children:"tipoSalida"})," ;} ",(0,r.jsx)(n.em,{children:"mensaje"})," {; ",(0,r.jsx)(n.em,{children:"importancia"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tipoSalida"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Tipo de salida del mensaje"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mensaje"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Contenido del mensaje"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"importancia"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nivel de importancia del mensaje (s\xf3lo para Windows)"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"LOG EVENT"})," permite configurar un sistema personalizado de registro de eventos internos que ocurren durante el uso de su aplicaci\xf3n."]}),"\n",(0,r.jsxs)(n.p,{children:["Pase en el par\xe1metro ",(0,r.jsx)(n.em,{children:"mensaje"})," la informaci\xf3n personalizada a notar en funci\xf3n del evento."]}),"\n",(0,r.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"tipoSalida"})," permite precisar el canal de salida tomado por el ",(0,r.jsx)(n.em,{children:"mensaje"}),". Puede pasar en este par\xe1metro una de las siguientes constantes, ubicadas en el tema ",(0,r.jsx)(n.em,{children:"Historial de eventos"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Comentario"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Into 4D commands log"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsxs)(n.td,{children:["Indica a 4D grabar el ",(0,r.jsx)(n.em,{children:"mensaje"})," en el archivo de historial de los comandos de 4D, si este archivo se ha activado. ",(0,r.jsxs)(n.em,{children:["El archivo de historial de comandos de 4D puede activarse utilizando el comando ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," (selector 34"]}),").",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"Nota:"})," los archivos de historial de 4D se agrupan en la carpeta ",(0,r.jsx)(n.strong,{children:"Logs"})," (ver el comando ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/get-4d-folder",children:"Get 4D folder"})}),")."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Into 4D debug message"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsxs)(n.td,{children:["Indica a 4D enviar el ",(0,r.jsx)(n.em,{children:"mensaje"})," al entorno de depuraci\xf3n del sistema. El resultado depende de la plataforma:",(0,r.jsx)(n.br,{}),"En macOS: el comando env\xeda el mensaje a la ConsolaBajo Windows: el comando env\xeda el mensaje como un mensaje de depuraci\xf3n. Para poder leer este mensaje, debe tener Microsoft Visual Studio o DebugView para Windows (",(0,r.jsx)(n.a,{href:"http://technet.microsoft.com/en-us/sysinternals/bb896647.aspx",children:"http://technet.microsoft.com/en-us/sysinternals/bb896647.aspx"}),")"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Into 4D diagnostic log"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"5"}),(0,r.jsxs)(n.td,{children:["Le indica a 4D poner el mensaje en el archivo de diagn\xf3stico de 4D, si este archivo est\xe1 activo.",(0,r.jsx)(n.br,{}),"El archivo de diagn\xf3stico puede activarse con ayuda del comando ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," (",(0,r.jsx)(n.em,{children:"selector 79"}),")."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Into 4D request log"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsxs)(n.td,{children:["Indica a 4D grabar el ",(0,r.jsx)(n.em,{children:"mensaje"})," en el archivo de historial de peticiones de 4D, si este archivo ha sido activado"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Into system standard outputs"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"6"}),(0,r.jsxs)(n.td,{children:["Indica a 4D enviar el ",(0,r.jsx)(n.em,{children:"mensaje"})," a un flujo de salida est\xe1ndar. El mensaje se env\xeda a: ",(0,r.jsx)(n.strong,{children:"stdout"})," si ",(0,r.jsx)(n.em,{children:"importance"})," = Information message o Warning message ",(0,r.jsx)(n.strong,{children:"stderr"})," si ",(0,r.jsx)(n.em,{children:"importance"})," = Error message"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Into Windows log events"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsxs)(n.td,{children:["Indica a 4D enviar el ",(0,r.jsx)(n.em,{children:"mensaje"})," \u201CLog events\u201D de Windows. Este historial recibe y almacena los mensajes que vienen de las aplicaciones en ejecuci\xf3n. En este caso, puede definir el nivel de importancia del ",(0,r.jsx)(n.em,{children:"mensaje"})," v\xeda el par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"importancia"})," (ver a continuaci\xf3n).",(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.br,{}),"Notas:"]})," ",(0,r.jsx)(n.br,{}),"para que esta funcionalidad est\xe9 disponible, el servicio Log Events de Windows debe estar en ejecuci\xf3n. Bajo macOS, el comando no hace nada con este tipo de salida"]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Si omite el par\xe1metro ",(0,r.jsx)(n.em,{children:"tipoSalida,"})," el valor 0 se utiliza por defecto (Into Windows Log Events)."]}),"\n",(0,r.jsxs)(n.p,{children:["Puede atribuir un nivel de importancia a ",(0,r.jsx)(n.em,{children:"mensaje"}),", mediante el par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"importancia"}),", que le ayuda a leer y comprender los eventos de registro. Hay tres niveles de importancia: Informaci\xf3n, Advertencia y Error.  4D le suministra las siguientes constantes predefinidas:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Error message"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Information message"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Warning message"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Si no pasa nada en el par\xe1metro ",(0,r.jsx)(n.em,{children:"importancia"})," o si pasa un valor invalido, se utiliza el valor por defecto (0)."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["El par\xe1metro ",(0,r.jsx)(n.em,{children:"importancia"})," s\xf3lo se utiliza con ",(0,r.jsx)(n.em,{children:"tipoSalida"})," ",(0,r.jsx)(n.code,{children:"Into Windows log events"}),", ",(0,r.jsx)(n.code,{children:"Into 4D diagnostic log"}),", y ",(0,r.jsx)(n.code,{children:"Into system standard outputs"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsxs)(n.p,{children:["Si quiere realizar un seguimiento de las aperturas de su base bajo Windows, puede escribir la siguiente l\xednea de c\xf3digo en el ",(0,r.jsx)(n.a,{href:"metodo-base-on-startup.md",children:"M\xe9todo base On Startup"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0LOG EVENT(Into Windows log events;"The Invoice database was opened.")\n'})}),"\n",(0,r.jsx)(n.p,{children:"Cada vez que se abre la base, esta informaci\xf3n se escribir\xe1 en el visor de eventos de Windows y su nivel de importancia ser\xe1 0."}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"667"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return a}});var d=s(667294);let r={},i=d.createContext(r);function a(e){let n=d.useContext(i);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);