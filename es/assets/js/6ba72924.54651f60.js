"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21973"],{611307:function(e,s,n){n.r(s),n.d(s,{default:()=>p,frontMatter:()=>o,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/get-process-variable","title":"GET PROCESS VARIABLE","description":"GET PROCESS VARIABLE ( proceso ; srcVar ; dstVar {; srcVar2 ; dstVar2 ; ... ; srcVarN ; dstVarN} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-process-variable.md","sourceDirName":"commands-legacy","slug":"/commands/get-process-variable","permalink":"/docs/es/20-R7/commands/get-process-variable","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-process-variable.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-process-variable","title":"GET PROCESS VARIABLE","slug":"/commands/get-process-variable","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CLEAR SEMAPHORE","permalink":"/docs/es/20-R7/commands/clear-semaphore"},"next":{"title":"KILL WORKER","permalink":"/docs/es/20-R7/commands/kill-worker"}}'),l=n("785893"),a=n("250065");let o={id:"get-process-variable",title:"GET PROCESS VARIABLE",slug:"/commands/get-process-variable",displayed_sidebar:"docs"},i=void 0,d={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Restricciones",id:"restricciones",level:3},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ejemplo 3",id:"ejemplo-3",level:2},{value:"Ejemplo 4",id:"ejemplo-4",level:2},{value:"Ejemplo 5",id:"ejemplo-5",level:2},{value:"Ejemplo 6",id:"ejemplo-6",level:2},{value:"Ejemplo 7",id:"ejemplo-7",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function t(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"GET PROCESS VARIABLE"})," ( ",(0,l.jsx)(s.em,{children:"proceso"})," ; ",(0,l.jsx)(s.em,{children:"srcVar"})," ; ",(0,l.jsx)(s.em,{children:"dstVar"})," {; ",(0,l.jsx)(s.em,{children:"srcVar2"})," ; ",(0,l.jsx)(s.em,{children:"dstVar2"})," ; ... ; ",(0,l.jsx)(s.em,{children:"srcVarN"})," ; ",(0,l.jsx)(s.em,{children:"dstVarN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Par\xe1metro"}),(0,l.jsx)(s.th,{children:"Tipo"}),(0,l.jsx)(s.th,{}),(0,l.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"proceso"}),(0,l.jsx)(s.td,{children:"Integer"}),(0,l.jsx)(s.td,{children:"\u2192"}),(0,l.jsx)(s.td,{children:"N\xfamero de proceso fuente"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"srcVar"}),(0,l.jsx)(s.td,{children:"Variable"}),(0,l.jsx)(s.td,{children:"\u2192"}),(0,l.jsx)(s.td,{children:"Variable fuente"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"dstVar"}),(0,l.jsx)(s.td,{children:"Variable"}),(0,l.jsx)(s.td,{children:"\u2190"}),(0,l.jsx)(s.td,{children:"Variable de destino"})]})]})]}),"\n",(0,l.jsx)(s.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsxs)(s.p,{children:["El comando GET PROCESS VARIABLE lee el valor de las variables proceso ",(0,l.jsx)(s.em,{children:"srcVar"})," (",(0,l.jsx)(s.em,{children:"srvVar2"}),", etc.) desde el proceso fuente cuyo n\xfamero se pasa en ",(0,l.jsx)(s.em,{children:"proceso"})," y devuelve sus valores actuales en las variables ",(0,l.jsx)(s.em,{children:"dstVar"})," (",(0,l.jsx)(s.em,{children:"dstVar2"}),", etc.) del proceso actual."]}),"\n",(0,l.jsx)(s.p,{children:"Cada variable fuente puede ser una variable, un array o un elemento de array. Sin embargo, tenga en cuenta las restricciones listadas m\xe1s adelante en esta secci\xf3n."}),"\n",(0,l.jsxs)(s.p,{children:["En cada pareja de variables ",(0,l.jsx)(s.em,{children:"srcVar;dstVar"}),", las dos variables deben ser de tipos compatibles, de lo contrario los valores que usted obtiene podr\xedan no ser significativos."]}),"\n",(0,l.jsx)(s.p,{children:"El proceso actual \u201Cojea\u201D las variables del proceso fuente, el proceso fuente no es advertido de ninguna manera de que otro proceso est\xe1 leyendo la instancia de sus variables."}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"4D Server:"})," utilizando 4D Client, puede leer las variables en un proceso de destino ejecutado en el equipo servidor (procedimiento almacenado). Para hacer esto, coloque un signo menos antes del n\xfamero de identificaci\xf3n del proceso en el par\xe1metro ",(0,l.jsx)(s.em,{children:"proceso"}),"."]}),"\n",(0,l.jsxs)(s.p,{children:["La comunicaci\xf3n proceso \u201CIntermachine\u201D, ofrecida por los comandos GET PROCESS VARIABLE, ",(0,l.jsx)(s.a,{href:"/docs/es/20-R7/commands/set-process-variable",title:"SET PROCESS VARIABLE",children:"SET PROCESS VARIABLE"})," y ",(0,l.jsx)(s.a,{href:"/docs/es/20-R7/commands/variable-to-variable",title:"VARIABLE TO VARIABLE",children:"VARIABLE TO VARIABLE"}),", es posible \xfanicamente desde el cliente al servidor. Siempre es un proceso cliente el que lee o escribe las variables de un procedimiento almacenado."]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"Tip:"})," si no conoce el n\xfamero de identificaci\xf3n del proceso servidor, a\xfan puede utilizar las variables interproceso del servidor. Para hacer esto, puede utilizar cualquier valor negativo en ",(0,l.jsx)(s.em,{children:"proceso"}),". En otras palabras, no es necesario conocer el n\xfamero de identificaci\xf3n del proceso para poder utilizar el comando GET PROCESS VARIABLE con las variables interproceso del servidor. Esta posibilidad es muy \xfatil particularmente cuando un procedimiento almacenado se lanza utilizando el m\xe9todo base On server startup. Como los equipos cliente no conocen autom\xe1ticamente el n\xfamero de identificaci\xf3n de ese proceso, todo valor negativo puede pasarse en el par\xe1metro ",(0,l.jsx)(s.em,{children:"proceso"}),"."]}),"\n",(0,l.jsx)(s.h3,{id:"restricciones",children:"Restricciones"}),"\n",(0,l.jsx)(s.p,{children:"GET PROCESS VARIABLE no acepta variables locales como variables fuente."}),"\n",(0,l.jsx)(s.p,{children:"Por otra parte, las variables de destino pueden ser interproceso, proceso o locales. Los valores se \u201Creciben\u201D \xfanicamente en las variables, no en los campos."}),"\n",(0,l.jsx)(s.p,{children:"GET PROCESS VARIABLE acepta todo tipo de variable fuente, proceso o interproceso, excepto:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Punteros"}),"\n",(0,l.jsx)(s.li,{children:"Array de punteros"}),"\n",(0,l.jsx)(s.li,{children:"Arrays de dos dimensiones"}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"El proceso fuente debe ser un proceso usuario; no puede ser un proceso kernel. Si el proceso fuente no existe, este comando no tiene efecto."}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"Nota:"})," en modo interpretado, si una variable fuente no existe, se devuelve el valor indefinido. Puede detectar esto utilizando la funci\xf3n ",(0,l.jsx)(s.a,{href:"/docs/es/20-R7/commands/type",title:"Type",children:"Type"})," para probar la variable de destino correspondiente."]}),"\n",(0,l.jsx)(s.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,l.jsxs)(s.p,{children:["Esta l\xednea de c\xf3digo lee el valor de la variable texto ",(0,l.jsx)(s.em,{children:"vtEstadoActual"})," en el proceso cuyo n\xfamero es ",(0,l.jsx)(s.em,{children:"$vlProceso"})," y devuelve el resultado en la variable proceso ",(0,l.jsx)(s.em,{children:"vtInfo"})," del proceso actual:"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:"\xa0GET PROCESS VARIABLE($vlProceso;vtEstadoActual;vtInfo)\n"})}),"\n",(0,l.jsx)(s.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,l.jsxs)(s.p,{children:["Esta l\xednea de c\xf3digo hace lo mismo, pero devuelve el valor en la variable local ",(0,l.jsx)(s.em,{children:"$vtInfo"})," de m\xe9todo que se est\xe1 ejecutando en el proceso actual:"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:"\xa0GET PROCESS VARIABLE($vlProceso;vtEstadoActual;$vtInfo)\n"})}),"\n",(0,l.jsx)(s.h2,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,l.jsxs)(s.p,{children:["Esta l\xednea de c\xf3digo hace lo mismo pero devuelve el valor en la variable ",(0,l.jsx)(s.em,{children:"vtEstadoActual"})," del proceso actual:"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:"\xa0GET PROCESS VARIABLE($vlProceso;vtEstadoActual;vtEstadoActual)\n"})}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"Nota:"})," el primer ",(0,l.jsx)(s.em,{children:"vtCurStatus"})," designa la instancia de la variable en el proceso fuente, el segundo ",(0,l.jsx)(s.em,{children:"vtCurStatus"})," designa la instancia de la variable en el proceso actual."]}),"\n",(0,l.jsx)(s.h2,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,l.jsxs)(s.p,{children:["Este ejemplo lee secuencialmente los elementos de un array proceso desde el proceso indicado por ",(0,l.jsx)(s.em,{children:"$vlProceso"}),":"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:"\xa0GET PROCESS VARIABLE($vlProceso;vl_IPCom_Array;$vlTam)\n\xa0For($vlElem;1;$vlTam)\n\xa0\xa0\xa0\xa0GET PROCESS VARIABLE($vlProceso;at_IPCom_Array{$vlElem};$vtElem)\n\xa0\xa0// Hacer algo con $vtElem\n\xa0End for\n"})}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"Nota:"})," en este ejemplo, la variable proceso ",(0,l.jsx)(s.em,{children:"vl_IPCom_Array"})," contiene el tama\xf1o del Array ",(0,l.jsx)(s.em,{children:"at_IPCom_Array"}),", y debe ser mantenida por el proceso fuente."]}),"\n",(0,l.jsx)(s.h2,{id:"ejemplo-5",children:"Ejemplo 5"}),"\n",(0,l.jsx)(s.p,{children:"Este ejemplo hace lo mismo que el anterior, pero lee el array como un todo, en lugar de leer los elementos de manera secuencial:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:"\xa0GET PROCESS VARIABLE($vlProceso;at_IPCom_Array;$anArray)\n\xa0For($vlElem;1;Size of array($anArray))\n\xa0\xa0// Hacer algo con $anArray{$vlElem}\n\xa0End for\n"})}),"\n",(0,l.jsx)(s.h2,{id:"ejemplo-6",children:"Ejemplo 6"}),"\n",(0,l.jsxs)(s.p,{children:["Este ejemplo lee las instancias de las variables ",(0,l.jsx)(s.em,{children:"v1"}),",",(0,l.jsx)(s.em,{children:"v2"}),",",(0,l.jsx)(s.em,{children:"v3"})," en el proceso fuente y devuelve sus valores en la instancia de las mismas variables del proceso actual:"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-4d",children:"\xa0GET PROCESS VARIABLE($vlProceso;v1;v1;v2;v2;v3;v3)\n"})}),"\n",(0,l.jsx)(s.h2,{id:"ejemplo-7",children:"Ejemplo 7"}),"\n",(0,l.jsx)(s.p,{children:"Ver el ejemplo del comando DRAG AND DROP PROPERTIES."}),"\n",(0,l.jsx)(s.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.em,{children:"Arrastrar y soltar"}),(0,l.jsx)(s.br,{}),"\n",(0,l.jsx)(s.a,{href:"/docs/es/20-R7/commands/post-outside-call",children:"POST OUTSIDE CALL"}),(0,l.jsx)(s.br,{}),"\n",(0,l.jsx)(s.em,{children:"Procesos"}),(0,l.jsx)(s.br,{}),"\n",(0,l.jsx)(s.a,{href:"/docs/es/20-R7/commands/set-process-variable",children:"SET PROCESS VARIABLE"}),(0,l.jsx)(s.br,{}),"\n",(0,l.jsx)(s.a,{href:"/docs/es/20-R7/commands/variable-to-variable",children:"VARIABLE TO VARIABLE"})]}),"\n",(0,l.jsx)(s.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{}),(0,l.jsx)(s.th,{})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"N\xfamero de comando"}),(0,l.jsx)(s.td,{children:"371"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Hilo seguro"}),(0,l.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function p(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return o}});var r=n(667294);let l={},a=r.createContext(l);function o(e){let s=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);