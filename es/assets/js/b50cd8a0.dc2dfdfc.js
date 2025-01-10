"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52514"],{584625:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>i,assets:()=>l,toc:()=>o,contentTitle:()=>a});var i=JSON.parse('{"id":"commands-legacy/print-settings","title":"PRINT SETTINGS","description":"PRINT SETTINGS {( dialType )}","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/print-settings.md","sourceDirName":"commands-legacy","slug":"/commands/print-settings","permalink":"/docs/es/commands/print-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprint-settings.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"print-settings","title":"PRINT SETTINGS","slug":"/commands/print-settings","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PRINT SELECTION","permalink":"/docs/es/commands/print-selection"},"next":{"title":"Print settings to BLOB","permalink":"/docs/es/commands/print-settings-to-blob"}}'),r=s("785893"),t=s("250065");let d={id:"print-settings",title:"PRINT SETTINGS",slug:"/commands/print-settings",displayed_sidebar:"docs"},a=void 0,l={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"PRINT SETTINGS"})," {( ",(0,r.jsx)(n.em,{children:"dialType"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dialType"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Cajas de di\xe1logo a mostrar"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["PRINT SETTINGS muestra una caja de di\xe1logo de impresi\xf3n. Este comando debe llamarse antes de una serie de comandos ",(0,r.jsx)(n.a,{href:"/docs/es/commands/print-form",children:"Print form"})," o el comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/open-printing-job",children:"OPEN PRINTING JOB"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"tipoDial"})," permite configurar la visualizaci\xf3n de las caja de di\xe1logo de impresi\xf3n. Puede utilizar una de las siguientes constantes del tema ",(0,r.jsx)(n.em,{children:"Opciones de impresi\xf3n"}),". Las cajas de di\xe1logo de impresi\xf3n que aparecen depender\xe1n de la versi\xf3n de 4D, como se muestra en la siguiente tabla:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Comentario"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Page setup dialog"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Visualizaci\xf3n del di\xe1logo de configuraci\xf3n de p\xe1gina"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Print dialog"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"Visualizaci\xf3n de la caja de di\xe1logo de Impresi\xf3n"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," la caja de di\xe1logo de impresi\xf3n contiene la opci\xf3n ",(0,r.jsx)(n.strong,{children:"Preview on Screen"})," que permite al usuario previsualizar su trabajo de impresi\xf3n. Puede preseleccionar o deseleccionar esta opci\xf3n llamando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/set-print-preview",children:"SET PRINT PREVIEW"})," antes de llamar PRINT SETTINGS."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsxs)(n.p,{children:["Ver ejemplo para el comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/print-form",title:"Print form",children:"Print form"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,r.jsx)(n.p,{children:"Si el usuario hace clic en OK en ambas cajas de di\xe1logo, la variable sistema OK toma el valor 1. De lo contrario, la variable sistema OK toma el valor 0."}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/open-printing-job",children:"OPEN PRINTING JOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/page-break",children:"PAGE BREAK"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/print-form",children:"Print form"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/set-print-preview",children:"SET PRINT PREVIEW"})]}),"\n",(0,r.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"106"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifica variables"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return d}});var i=s(667294);let r={},t=i.createContext(r);function d(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);