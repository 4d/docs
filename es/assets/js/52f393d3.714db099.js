"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65070"],{621057:function(e,n,r){r.r(n),r.d(n,{metadata:()=>a,contentTitle:()=>t,default:()=>u,assets:()=>s,toc:()=>o,frontMatter:()=>d});var a=JSON.parse('{"id":"commands-legacy/level","title":"Level","description":"Level  : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/level.md","sourceDirName":"commands-legacy","slug":"/commands/level","permalink":"/docs/es/commands/level","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flevel.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"level","title":"Level","slug":"/commands/level","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is in print preview","permalink":"/docs/es/commands/is-in-print-preview"},"next":{"title":"OPEN PRINTING JOB","permalink":"/docs/es/commands/open-printing-job"}}'),i=r("785893"),l=r("250065");let d={id:"level",title:"Level",slug:"/commands/level",displayed_sidebar:"docs"},t=void 0,s={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Level"}),"  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultado"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Nivel de ruptura o del encabezado actual"})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsx)(n.p,{children:"Level se utiliza para determinar el nivel de ruptura o del encabezado actual. Devuelve el nivel de ruptura durante los eventos On Header y On Printing Break."}),"\n",(0,i.jsx)(n.p,{children:"El nivel 0 es el \xfaltimo nivel a imprimir y es apropiado para la impresi\xf3n de un total general. Level devuelve 1 cuando 4D imprime una ruptura en el primer campo de ordenaci\xf3n, 2 cuando 4D imprime una ruptura en el segundo campo ordenado, y as\xed sucesivamente."}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(n.p,{children:"Este ejemplo es una plantilla para un m\xe9todo de formulario. Muestra cada evento posible mientras un informe utiliza un formulario como formulario de salida. Level se llama cuando un encabezado o una ruptura se est\xe1n imprimiendo:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo de formulario para un formulario de salida utilizado por un informe\n\xa0$vpFormTable:=Current form table\n\xa0Case of\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(FORM Event=On Header)\n\xa0\xa0// Se va a imprimir el \xe1rea de encabezado\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Before selection($vpFormTabla->))\n\xa0\xa0// El c\xf3digo para la primera ruptura del encabezado debe ir ac\xe1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Level=1)\n\xa0\xa0// El c\xf3digo para la ruptura del encabezado nivel 1 debe ir ac\xe1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Level=2)\n\xa0\xa0// El c\xf3digo para la ruptura del encabezado nivel 2 debe ir ac\xe1\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0:(FORM Event=On Printing Details)\n\xa0\xa0// Se va a imprimir un registro\n\xa0\xa0// El c\xf3digo para cada registro va ac\xe1\n\xa0\xa0\xa0\xa0:(FORM Event=On Printing Break)\n\xa0\xa0// Se va a imprimir un \xe1rea de ruptura\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Level=0)\n\xa0\xa0// El c\xf3digo para la ruptura 0 va ac\xe1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Level=1)\n\xa0\xa0// El c\xf3digo para la ruptura 1 va ac\xe1\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0:(FORM Event=On Printing Footer)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(End selection($vpFormTabla->))\n\xa0\xa0// El c\xf3digo para el \xfaltimo pie de p\xe1gina debe ir ac\xe1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// El c\xf3digo para un pie de p\xe1gina deber ir ac\xe1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n"})}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/commands/accumulate",children:"ACCUMULATE"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/break-level",children:"BREAK LEVEL"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"form-event-code.md",children:"Form event code"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/print-selection",children:"PRINT SELECTION"})]}),"\n",(0,i.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"101"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return d}});var a=r(667294);let i={},l=a.createContext(i);function d(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);