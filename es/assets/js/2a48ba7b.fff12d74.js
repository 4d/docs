"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50936"],{837292:function(e,r,s){s.r(r),s.d(r,{default:()=>p,frontMatter:()=>o,metadata:()=>n,assets:()=>l,toc:()=>c,contentTitle:()=>d});var n=JSON.parse('{"id":"commands-legacy/variable-to-variable","title":"VARIABLE TO VARIABLE","description":"VARIABLE TO VARIABLE ( proceso ; dstVar ; srcVar {; dstVar2 ; srcVar2 ; ... ; dstVarN ; srcVarN} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/variable-to-variable.md","sourceDirName":"commands-legacy","slug":"/commands/variable-to-variable","permalink":"/docs/es/commands/variable-to-variable","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fvariable-to-variable.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"variable-to-variable","title":"VARIABLE TO VARIABLE","slug":"/commands/variable-to-variable","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Test semaphore","permalink":"/docs/es/commands/test-semaphore"},"next":{"title":"Process (User Interface)","permalink":"/docs/es/category/process-user-interface"}}'),a=s("785893"),i=s("250065");let o={id:"variable-to-variable",title:"VARIABLE TO VARIABLE",slug:"/commands/variable-to-variable",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Restricciones",id:"restricciones",level:5},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function t(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"VARIABLE TO VARIABLE"})," ( ",(0,a.jsx)(r.em,{children:"proceso"})," ; ",(0,a.jsx)(r.em,{children:"dstVar"})," ; ",(0,a.jsx)(r.em,{children:"srcVar"})," {; ",(0,a.jsx)(r.em,{children:"dstVar2"})," ; ",(0,a.jsx)(r.em,{children:"srcVar2"})," ; ... ; ",(0,a.jsx)(r.em,{children:"dstVarN"})," ; ",(0,a.jsx)(r.em,{children:"srcVarN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Par\xe1metro"}),(0,a.jsx)(r.th,{children:"Tipo"}),(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"proceso"}),(0,a.jsx)(r.td,{children:"Integer"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"N\xfamero de proceso de destino"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"dstVar"}),(0,a.jsx)(r.td,{children:"Variable"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Variable de destino"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"srcVar"}),(0,a.jsx)(r.td,{children:"Variable"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Variable fuente"})]})]})]}),"\n",(0,a.jsx)(r.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(r.p,{children:["El comando VARIABLE TO VARIABLE escribe las variables proceso ",(0,a.jsx)(r.em,{children:"dstVar"})," (",(0,a.jsx)(r.em,{children:"dstVar2"}),", etc.) del proceso de destino cuyo n\xfamero se pasa en ",(0,a.jsx)(r.em,{children:"proceso"})," utilizando los valores de las variables ",(0,a.jsx)(r.em,{children:"srcVar1"})," ",(0,a.jsx)(r.em,{children:"srcVar2"}),", etc."]}),"\n",(0,a.jsxs)(r.p,{children:["VARIABLE TO VARIABLE tiene la misma acci\xf3n de ",(0,a.jsx)(r.a,{href:"/docs/es/commands/set-process-variable",title:"SET PROCESS VARIABLE",children:"SET PROCESS VARIABLE"}),", con las siguientes diferencias:",(0,a.jsx)(r.br,{}),"\n\u2022 Usted pasa expresiones fuente a ",(0,a.jsx)(r.a,{href:"/docs/es/commands/set-process-variable",title:"SET PROCESS VARIABLE",children:"SET PROCESS VARIABLE"})," y por lo tanto no puede pasar un array como un todo. Debe pasar exclusivamente variables fuente a VARIABLE TO VARIABLE y por lo tanto puede pasar un array como un todo.",(0,a.jsx)(r.br,{}),"\n\u2022 Cada variable de destino puede ser una variable o un elemento de un array, pero no puede ser un array como un todo. Cada variable de destino de VARIABLE TO VARIABLE puede ser una variable, un array o un elemento de array."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"4D Server:"})," la comunicaci\xf3n proceso \u201CIntermachine\u201D, ofrecida por los comandos ",(0,a.jsx)(r.a,{href:"/docs/es/commands/get-process-variable",title:"GET PROCESS VARIABLE",children:"GET PROCESS VARIABLE"}),", ",(0,a.jsx)(r.a,{href:"/docs/es/commands/set-process-variable",title:"SET PROCESS VARIABLE",children:"SET PROCESS VARIABLE"})," y VARIABLE TO VARIABLE, es posible \xfanicamente desde el cliente al servidor. Siempre es un proceso cliente el que lee o escribe las variables de un procedimiento almacenado."]}),"\n",(0,a.jsxs)(r.p,{children:["Para cada pareja de variables ",(0,a.jsx)(r.em,{children:"dstVar;expr"}),", la variable fuente debe ser de tipo compatible con la variable de destino, de lo contrario puede terminar con un valor en la variable que no tiene significado. En modo interpretado, si una variable de destino no existe, se crea y asigna con el tipo y valor de la variable fuente."]}),"\n",(0,a.jsx)(r.p,{children:"El proceso actual escribe las variables del proceso de destino, el proceso de destino no es advertido de ninguna manera de que otro proceso est\xe1 escribiendo la instancia de sus variables."}),"\n",(0,a.jsx)(r.h5,{id:"restricciones",children:"Restricciones"}),"\n",(0,a.jsx)(r.p,{children:"VARIABLE TO VARIABLE no acepta variables locales como variables de destino."}),"\n",(0,a.jsx)(r.p,{children:"VARIABLE TO VARIABLE acepta todo tipo de variable proceso o interproceso de destino, a excepci\xf3n de las variables de tipo:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Punteros"}),"\n",(0,a.jsx)(r.li,{children:"Arrays de punteros"}),"\n",(0,a.jsx)(r.li,{children:"Arrays de dos dimensiones"}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:["El proceso de destino debe ser un proceso usuario; no puede ser un proceso kernel. Si el proceso de destino no existe, se genera un error. Usted puede encontrar este error utilizando un m\xe9todo de gesti\xf3n de errores instalado con ",(0,a.jsx)(r.a,{href:"/docs/es/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"."]}),"\n",(0,a.jsx)(r.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsxs)(r.p,{children:["El siguiente ejemplo lee un array proceso desde el proceso indicado por ",(0,a.jsx)(r.em,{children:"$vlProceso"}),", secuencialmente convierte los elementos a may\xfasculas y luego escribe completamente el array:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:"\xa0GET PROCESS VARIABLE($vlProceso;at_IPCom_Array;$anArray)\n\xa0For($vlElem;1;Size of array($anArray))\n\xa0\xa0\xa0\xa0$anArray{$vlElem}:=Uppercase($anArray{$vlElem})\n\xa0End for\n\xa0VARIABLE TO VARIABLE($vlProceso;at_IPCom_Array;$anArray)\n"})}),"\n",(0,a.jsx)(r.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"/docs/es/commands/get-process-variable",children:"GET PROCESS VARIABLE"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.em,{children:"Procesos"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"/docs/es/commands/set-process-variable",children:"SET PROCESS VARIABLE"})]}),"\n",(0,a.jsx)(r.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"N\xfamero de comando"}),(0,a.jsx)(r.td,{children:"635"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Hilo seguro"}),(0,a.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function p(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return d},a:function(){return o}});var n=s(667294);let a={},i=n.createContext(a);function o(e){let r=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);