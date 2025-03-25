"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22772"],{796003:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>a,assets:()=>d,toc:()=>l,contentTitle:()=>t});var a=JSON.parse('{"id":"commands-legacy/page-break","title":"PAGE BREAK","description":"PAGE BREAK {(  )}PAGE BREAK* {( > )}","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/page-break.md","sourceDirName":"commands-legacy","slug":"/commands/page-break","permalink":"/docs/es/commands/page-break","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fpage-break.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"page-break","title":"PAGE BREAK","slug":"/commands/page-break","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OPEN PRINTING JOB","permalink":"/docs/es/commands/open-printing-job"},"next":{"title":"Print form","permalink":"/docs/es/commands/print-form"}}'),i=r("785893"),s=r("250065");let o={id:"page-break",title:"PAGE BREAK",slug:"/commands/page-break",displayed_sidebar:"docs"},t=void 0,d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"PAGE BREAK"})," {( * )}",(0,i.jsx)(n.br,{}),(0,i.jsx)(n.strong,{children:"PAGE BREAK"})," {( > )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"* | >"}),(0,i.jsx)(n.td,{children:"Operator"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"* Cancela la impresi\xf3n iniciada por Print form, o > Manda un trabajo de impresi\xf3n"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["PAGE BREAK dispara la impresi\xf3n de datos enviados a la impresora y provocar un salto de p\xe1gina. PAGE BREAK se utiliza conjuntamente con ",(0,i.jsx)(n.em,{children:"form"})," (en el contexto del evento de formulario On Printing Detail) para forzar saltos de p\xe1gina e imprimir la \xfaltima p\xe1gina creada en memoria. No utilice PAGE BREAK con el comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/print-selection",title:"PRINT SELECTION",children:"PRINT SELECTION"}),". Es mejor utilizar ",(0,i.jsx)(n.a,{href:"/docs/es/commands/subtotal",title:"Subtotal",children:"Subtotal"})," o ",(0,i.jsx)(n.a,{href:"/docs/es/commands/break-level",title:"BREAK LEVEL",children:"BREAK LEVEL"})," con el par\xe1metro opcional para generar saltos de p\xe1gina."]}),"\n",(0,i.jsxs)(n.p,{children:["Los par\xe1metros ",(0,i.jsx)(n.em,{children:"*"})," y ",(0,i.jsx)(n.em,{children:">"})," son opcionales."]}),"\n",(0,i.jsxs)(n.p,{children:["El par\xe1metro ",(0,i.jsx)(n.em,{children:"*"})," le permite cancelar un trabajo de impresi\xf3n iniciado por el comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/print-form",title:"Print form",children:"Print form"}),". La ejecuci\xf3n de este comando detiene inmediatamente los trabajos de impresi\xf3n en progreso."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"}),' bajo Windows, este mecanismo puede ser trastornado por las propiedades de cola de espera del servidor de impresi\xf3n. Si la impresora se configura para comenzar la impresi\xf3n de inmediatamente, la cancelaci\xf3n no ser\xe1 efectiva. Para que el comando PAGE BREAK(*) funcione correctamente, es preferible elegir la propiedad "Iniciar impresi\xf3n cuando la \xfaltima p\xe1gina haya entrado en la cola" de la impresora.']}),"\n",(0,i.jsxs)(n.p,{children:["El par\xe1metro ",(0,i.jsx)(n.em,{children:">"})," modifica el funcionamiento del comando PAGE BREAK. Esta sintaxis tiene dos efectos:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Mantiene la impresi\xf3n abierta hasta que el comando PAGE BREAK se ejecuta nuevamente sin un par\xe1metro."}),"\n",(0,i.jsxs)(n.li,{children:["Da prioridad al trabajo de impresi\xf3n. Ninguna otra impresi\xf3n puede llevarse a cabo hasta que el trabajo de impresi\xf3n haya terminado.",(0,i.jsx)(n.br,{}),"\nLa segunda opci\xf3n es particularmente \xfatil cuando se utiliza con un trabajo de impresi\xf3n en cola. El par\xe1metro > garantiza que el trabajo de impresi\xf3n ser\xe1 realizado a partir de un solo archivo. Esto reducir\xe1 el tiempo de impresi\xf3n."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," durante una impresi\xf3n de pantalla, si el usuario hace clic en Cancelar en la caja de di\xe1logo de previsualizaci\xf3n, el comando PAGE BREAK define la variable sistema OK en 0."]}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,i.jsxs)(n.p,{children:["Ver el ejemplo del comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/print-form",title:"Print form",children:"Print form"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,i.jsxs)(n.p,{children:["Consulte el ejemplo del comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/set-print-marker",title:"SET PRINT MARKER",children:"SET PRINT MARKER"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/commands/cancel",children:"CANCEL"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/print-form",children:"Print form"})]}),"\n",(0,i.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"6"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifica variables"}),(0,i.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return o}});var a=r(667294);let i={},s=a.createContext(i);function o(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);