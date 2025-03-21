"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28923"],{757420:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>i,assets:()=>d,toc:()=>l,contentTitle:()=>o});var i=JSON.parse('{"id":"commands-legacy/object-get-print-variable-frame","title":"OBJECT GET PRINT VARIABLE FRAME","description":"OBJECT GET PRINT VARIABLE FRAME ( { ;} objeto ; tamVariable {; subformFijo*} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/object-get-print-variable-frame.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-print-variable-frame","permalink":"/docs/es/commands/object-get-print-variable-frame","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-print-variable-frame.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-get-print-variable-frame","title":"OBJECT GET PRINT VARIABLE FRAME","slug":"/commands/object-get-print-variable-frame","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get pointer","permalink":"/docs/es/commands/object-get-pointer"},"next":{"title":"OBJECT GET RESIZING OPTIONS","permalink":"/docs/es/commands/object-get-resizing-options"}}'),s=r("785893"),t=r("250065");let a={id:"object-get-print-variable-frame",title:"OBJECT GET PRINT VARIABLE FRAME",slug:"/commands/object-get-print-variable-frame",displayed_sidebar:"docs"},o=void 0,d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OBJECT GET PRINT VARIABLE FRAME"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"objeto"})," ; ",(0,s.jsx)(n.em,{children:"tamVariable"})," {; ",(0,s.jsx)(n.em,{children:"subformFijo"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operador"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["Si se especifica, objeto es un nombre de objeto (cadena)",(0,s.jsx)(n.br,{}),"Si se omite, objeto es un campo o una variable"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objeto"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["Nombre de objeto (si * se especifica) o ",(0,s.jsx)(n.br,{}),"Campo o variable (si * se omite)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tamVariable"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"True = Impresi\xf3n tama\xf1o variable, False = impresi\xf3n tama\xf1o fijo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"subformFijo"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Opci\xf3n para impresi\xf3n de subformularios de tama\xf1o fijo"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"OBJECT GET PRINT VARIABLE FRAME"})," obtiene la configuraci\xf3n actual de las opciones de impresi\xf3n en tama\xf1o variable del objeto o de los objetos designado(s) por los par\xe1metros ",(0,s.jsx)(n.em,{children:"objeto"})," y ",(0,s.jsx)(n.em,{children:"*"})," ."]}),"\n",(0,s.jsxs)(n.p,{children:["Las propiedades de impresi\xf3n de tama\xf1o variable se pueden definir utilizando la lista de propiedades o el comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/object-set-print-variable-frame",children:"OBJECT SET PRINT VARIABLE FRAME"}),".",(0,s.jsx)(n.br,{}),"\nSi pasa el par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"*"})," indica que el par\xe1metro ",(0,s.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no se pasa este par\xe1metro, indica que el par\xe1metro ",(0,s.jsx)(n.em,{children:"objeto"})," es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto \xfanicamente)."]}),"\n",(0,s.jsxs)(n.p,{children:["En el par\xe1metro ",(0,s.jsx)(n.em,{children:"tamVariable"}),", el comando devuelve una variable booleana cuyo valor indica el estado activo (",(0,s.jsx)(n.strong,{children:"True"}),") o inactivo (",(0,s.jsx)(n.strong,{children:"False"}),") de la impresi\xf3n en tama\xf1o variable."]}),"\n",(0,s.jsxs)(n.p,{children:["Si el ",(0,s.jsx)(n.em,{children:"objeto"})," es un subformulario y si la impresi\xf3n en tama\xf1o variable est\xe1 desactivada (",(0,s.jsx)(n.strong,{children:"False"}),"), el comando tambi\xe9n devuelve en el par\xe1metro ",(0,s.jsx)(n.em,{children:"subformFijo"}),', la opci\xf3n de impresi\xf3n en tama\xf1o fijo del subformulario. Puede comparar el valor devuelto con las siguientes constantes, del tema "',(0,s.jsx)(n.em,{children:"Propiedades de los objetos"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"}),(0,s.jsx)(n.th,{children:"Comentario"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Print Frame fixed with multiple records"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"El tama\xf1o inicial del marco permanece del mismo tama\xf1o, 4D imprime el formulario varias veces para incluir todos los registros."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Print Frame fixed with truncation"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"4D imprime s\xf3lo los registros que aparecen en el \xe1rea del subformulario. El formulario se imprime s\xf3lo una vez y los registros que no se imprimen se ignoran."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/commands/object-set-print-variable-frame",children:"OBJECT SET PRINT VARIABLE FRAME"})}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"1241"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return a}});var i=r(667294);let s={},t=i.createContext(s);function a(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);