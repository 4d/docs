"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86439"],{235436:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>l,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/set-process-variable","title":"SET PROCESS VARIABLE","description":"SET PROCESS VARIABLE ( proceso ; dstVar ; expr {; dstVar2 ; expr2 ; ... ; dstVarN ; exprN} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-process-variable.md","sourceDirName":"commands-legacy","slug":"/commands/set-process-variable","permalink":"/docs/es/commands/set-process-variable","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-process-variable.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-process-variable","title":"SET PROCESS VARIABLE","slug":"/commands/set-process-variable","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Semaphore","permalink":"/docs/es/commands/semaphore"},"next":{"title":"Test semaphore","permalink":"/docs/es/commands/test-semaphore"}}'),o=n("785893"),a=n("250065");let l={id:"set-process-variable",title:"SET PROCESS VARIABLE",slug:"/commands/set-process-variable",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Restricciones",id:"restricciones",level:3},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ejemplo 3",id:"ejemplo-3",level:2},{value:"Ejemplo 4",id:"ejemplo-4",level:2},{value:"Ejemplo 5",id:"ejemplo-5",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function t(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"SET PROCESS VARIABLE"})," ( ",(0,o.jsx)(s.em,{children:"proceso"})," ; ",(0,o.jsx)(s.em,{children:"dstVar"})," ; ",(0,o.jsx)(s.em,{children:"expr"})," {; ",(0,o.jsx)(s.em,{children:"dstVar2"})," ; ",(0,o.jsx)(s.em,{children:"expr2"})," ; ... ; ",(0,o.jsx)(s.em,{children:"dstVarN"})," ; ",(0,o.jsx)(s.em,{children:"exprN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe1metro"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"proceso"}),(0,o.jsx)(s.td,{children:"Integer"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"N\xfamero de proceso de destino"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"dstVar"}),(0,o.jsx)(s.td,{children:"Variable"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Variable de destino"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"expr"}),(0,o.jsx)(s.td,{children:"Variable"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Expresi\xf3n fuente (o variable fuente)"})]})]})]}),"\n",(0,o.jsx)(s.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(s.p,{children:["El comando SET PROCESS VARIABLE escribe las variables proceso ",(0,o.jsx)(s.em,{children:"dstVar"})," (",(0,o.jsx)(s.em,{children:"dstVar2"}),", etc.) del proceso de destino cuyo n\xfamero se pasa en ",(0,o.jsx)(s.em,{children:"proceso"})," utilizando los valores pasados en ",(0,o.jsx)(s.em,{children:"expr1"})," (",(0,o.jsx)(s.em,{children:"expr2"}),", etc.)."]}),"\n",(0,o.jsx)(s.p,{children:"Cada variable de destino puede ser una variable o un elemento de array. Sin embargo, vea las restricciones listadas m\xe1s adelante en esta secci\xf3n."}),"\n",(0,o.jsxs)(s.p,{children:["Para cada pareja de variables ",(0,o.jsx)(s.em,{children:"dstVar;expr"}),", la expresi\xf3n debe ser compatible con la variable de destino, de lo contrario usted puede terminar con un valor en la variable que no tiene significado. En modo interpretado, si una variable de destino no existe, se crea y asigna con la expresi\xf3n."]}),"\n",(0,o.jsx)(s.p,{children:"El proceso actual escribe las variables del proceso de destino, el proceso de destino no es advertido de ninguna manera de que otro proceso est\xe1 escribiendo la instancia de sus variables."}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"4D Server:"})," utilizando 4D Client, puede escribir variables en un proceso de destino ejecutado en el equipo servidor (procedimiento almacenado). Para hacer esto, coloque un signo menos antes del n\xfamero de identificaci\xf3n del proceso en el par\xe1metro ",(0,o.jsx)(s.em,{children:"proceso"}),".",(0,o.jsx)(s.br,{}),"\nLa comunicaci\xf3n proceso \u201CIntermachine\u201D, ofrecida por los comandos ",(0,o.jsx)(s.a,{href:"/docs/es/commands/get-process-variable",title:"GET PROCESS VARIABLE",children:"GET PROCESS VARIABLE"}),", SET PROCESS VARIABLE y ",(0,o.jsx)(s.a,{href:"/docs/es/commands/variable-to-variable",title:"VARIABLE TO VARIABLE",children:"VARIABLE TO VARIABLE"}),", es posible \xfanicamente desde el cliente al servidor. Siempre es un proceso cliente el que lee o escribe las variables de un procedimiento almacenado."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Tip:"})," en otras palabras, no es necesario conocer el n\xfamero de identificaci\xf3n del proceso para poder utilizar el comando SET PROCESS VARIABLE con las variables interproceso del servidor. Esta posibilidad es muy \xfatil particularmente cuando un procedimiento almacenado se lanza utilizando el m\xe9todo base On server startup. Como los equipos cliente no conocen autom\xe1ticamente el n\xfamero de identificaci\xf3n de ese proceso, todo valor negativo puede pasarse en el par\xe1metro ",(0,o.jsx)(s.em,{children:"proceso"}),"."]}),"\n",(0,o.jsx)(s.h3,{id:"restricciones",children:"Restricciones"}),"\n",(0,o.jsx)(s.p,{children:"SET PROCESS VARIABLE no acepta variables locales como variables de destino."}),"\n",(0,o.jsx)(s.p,{children:"SET PROCESS VARIABLE acepta todo tipo de proceso de variable proceso o interproceso de destino, excepto:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Punteros"}),"\n",(0,o.jsxs)(s.li,{children:["Arrays de todo tipo. Para escribir un array como un todo de un proceso a otro, utilice el comando ",(0,o.jsx)(s.a,{href:"/docs/es/commands/variable-to-variable",title:"VARIABLE TO VARIABLE",children:"VARIABLE TO VARIABLE"}),". Nota, sin embargo, SET PROCESS VARIABLE le permite escribir el elemento de un array."]}),"\n",(0,o.jsx)(s.li,{children:"No es posible escribir el elemento de un array de punteros o el elemento de un array de dos dimensiones."}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["El proceso de destino debe ser un proceso usuario; no puede ser un proceso kernel. Si el proceso de destino no existe, se genera un error. Puede encontrar este error utilizando un m\xe9todo de gesti\xf3n de errores instalado con ",(0,o.jsx)(s.a,{href:"/docs/es/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,o.jsxs)(s.p,{children:["La siguiente l\xednea de c\xf3digo asigna (a la cadena vac\xeda) el texto de la variable ",(0,o.jsx)(s.em,{children:"vtEstadoActual"})," del proceso cuyo n\xfamero es ",(0,o.jsx)(s.em,{children:"$vlProceso"}),":"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'\xa0SET PROCESS VARIABLE($vlProceso;vtEstadoActual;"")\n'})}),"\n",(0,o.jsx)(s.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,o.jsxs)(s.p,{children:["Esta l\xednea de c\xf3digo asigna a la variable texto ",(0,o.jsx)(s.em,{children:"vtEstadoActual"})," del proceso cuyo n\xfamero es ",(0,o.jsx)(s.em,{children:"$vlProceso"})," el valor de la variable ",(0,o.jsx)(s.em,{children:"$vtInfo"})," desde el m\xe9todo de ejecuci\xf3n en el proceso actual:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:"\xa0SET PROCESS VARIABLE($vlProceso;vtEstadoActual;$vtInfo)\n"})}),"\n",(0,o.jsx)(s.h2,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,o.jsxs)(s.p,{children:["Esta l\xednea de c\xf3digo define el texto de la variable ",(0,o.jsx)(s.em,{children:"vtEstadoActual"})," del proceso cuyo n\xfamero es ",(0,o.jsx)(s.em,{children:"$vlProceso"})," al valor de la misma variable en el proceso actual:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:"\xa0SET PROCESS VARIABLE($vlProceso;vtEstadoActual;vtEstadoActual)\n"})}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Nota:"})," el primer ",(0,o.jsx)(s.em,{children:"vtEstadoActual"})," designa la instancia de la variable en el proceso de destino. El segundo ",(0,o.jsx)(s.em,{children:"vtEstadoActual"})," designa la instancia de la variable en el proceso actual."]}),"\n",(0,o.jsx)(s.h2,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,o.jsxs)(s.p,{children:["Este ejemplo vuelve may\xfasculas secuencialmente todos los elementos de un array proceso desde el proceso indicado por ",(0,o.jsx)(s.em,{children:"$vlProceso"}),":"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:"\xa0GET PROCESS VARIABLE($vlProceso;vl_IPCom_Array;$vlTam)\n\xa0For($vlElem;1;$vlSize)\n\xa0\xa0\xa0\xa0GET PROCESS VARIABLE($vlProceso;at_IPCom_Array{$vlElem};$vtElem)\n\xa0\xa0\xa0\xa0SET PROCESS VARIABLE($vlProceso;at_IPCom_Array{$vlElem};Uppercase($vtElem))\n\xa0End for\n"})}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Nota:"})," en este ejemplo, la variable proceso ",(0,o.jsx)(s.em,{children:"vl_IPCom_Array"})," contiene el tama\xf1o del array ",(0,o.jsx)(s.em,{children:"at_IPCom_Array"})," y debe ser mantenida por el proceso fuente/destino."]}),"\n",(0,o.jsx)(s.h2,{id:"ejemplo-5",children:"Ejemplo 5"}),"\n",(0,o.jsxs)(s.p,{children:["Este ejemplo escribe la instancia de las variables ",(0,o.jsx)(s.em,{children:"v1"}),", ",(0,o.jsx)(s.em,{children:"v2"})," y ",(0,o.jsx)(s.em,{children:"v3"})," utilizando la instancia de las mismas variables desde el proceso actual:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:"\xa0SET PROCESS VARIABLE($vlProceso;v1;v1;v2;v2;v3;v3)\n"})}),"\n",(0,o.jsx)(s.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/docs/es/commands/get-process-variable",children:"GET PROCESS VARIABLE"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/es/commands/post-outside-call",children:"POST OUTSIDE CALL"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.em,{children:"Procesos"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/es/commands/variable-to-variable",children:"VARIABLE TO VARIABLE"})]}),"\n",(0,o.jsx)(s.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"N\xfamero de comando"}),(0,o.jsx)(s.td,{children:"370"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Hilo seguro"}),(0,o.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(t,{...e})}):t(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return l}});var r=n(667294);let o={},a=r.createContext(o);function l(e){let s=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);