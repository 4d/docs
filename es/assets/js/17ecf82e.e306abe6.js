"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["15823"],{897297:function(e,n,t){t.r(n),t.d(n,{default:()=>j,frontMatter:()=>o,metadata:()=>s,assets:()=>a,toc:()=>d,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/object-get-multiline","title":"OBJECT Get multiline","description":"OBJECT Get multiline ( { ;} objeto* ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/object-get-multiline.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-multiline","permalink":"/docs/es/commands/object-get-multiline","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-multiline.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"object-get-multiline","title":"OBJECT Get multiline","slug":"/commands/object-get-multiline","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT GET MINIMUM VALUE","permalink":"/docs/es/commands/object-get-minimum-value"},"next":{"title":"OBJECT Get name","permalink":"/docs/es/commands/object-get-name"}}'),l=t("785893"),i=t("250065");let o={id:"object-get-multiline",title:"OBJECT Get multiline",slug:"/commands/object-get-multiline",displayed_sidebar:"docs"},r=void 0,a={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"OBJECT Get multiline"})," ( {* ;} ",(0,l.jsx)(n.em,{children:"objeto"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Par\xe1metro"}),(0,l.jsx)(n.th,{children:"Tipo"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"*"}),(0,l.jsx)(n.td,{children:"Operador"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsxs)(n.td,{children:["Si se especifica, objeto es un nombre de objeto (cadena)",(0,l.jsx)(n.br,{}),"Si se omite, objeto es un campo o una variable"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"objeto"}),(0,l.jsx)(n.td,{children:"any"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsxs)(n.td,{children:["Nombre de objeto (si * se especifica) o ",(0,l.jsx)(n.br,{}),"Campo o variable (si * se omite)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Resultado"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Estado Multil\xednea del objeto"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsxs)(n.p,{children:["El comando ",(0,l.jsx)(n.strong,{children:"OBJECT Get multiline"}),' devuelve el estado actual de la opci\xf3n "Multil\xednea" del objeto o de los objetos designado(s) por los par\xe1metros ',(0,l.jsx)(n.em,{children:"objeto"})," y ",(0,l.jsx)(n.em,{children:"*"})," ."]}),"\n",(0,l.jsxs)(n.p,{children:['Puede definir la opci\xf3n "Multil\xednea" de un objeto utilizando la lista de propiedades o utilizando el comando ',(0,l.jsx)(n.a,{href:"/docs/es/commands/object-set-multiline",children:"OBJECT SET MULTILINE"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,l.jsx)(n.em,{children:"*"})," indica que el par\xe1metro ",(0,l.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,l.jsx)(n.em,{children:"objeto"})," es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto \xfanicamente)."]}),"\n",(0,l.jsxs)(n.p,{children:['El valor devuelto corresponde a una de las siguientes constantes del tema "',(0,l.jsx)(n.em,{children:"Propiedades de los objetos"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Constante"}),(0,l.jsx)(n.th,{children:"Tipo"}),(0,l.jsx)(n.th,{children:"Valor"}),(0,l.jsx)(n.th,{children:"Comentario"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Multiline Auto"}),(0,l.jsx)(n.td,{children:"Entero largo"}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsxs)(n.td,{children:["En las \xe1reas de una sola l\xednea, las palabras situadas al final de las l\xedneas se cortan y no hay retornos de l\xednea.",(0,l.jsx)(n.br,{}),"En las \xe1reas de varias l\xedneas, 4D efect\xfaa saltos de l\xednea autom\xe1ticos."]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Multiline No"}),(0,l.jsx)(n.td,{children:"Entero largo"}),(0,l.jsx)(n.td,{children:"2"}),(0,l.jsx)(n.td,{children:"Nunca hay vuelta de la l\xednea: el texto se muestra siempre en una sola l\xednea. Si el campo o la variable alfa o texto contiene retornos de carro, el texto situado despu\xe9s del primer retorno de carro se elimina tan pronto como se modifica el \xe1rea."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Multiline Yes"}),(0,l.jsx)(n.td,{children:"Entero largo"}),(0,l.jsx)(n.td,{children:"1"}),(0,l.jsxs)(n.td,{children:["En las \xe1reas de una sola l\xednea, el texto se muestra hasta el primer retorno de carro o hasta la \xfaltima palabra que se puede mostrar por completo. 4D inserta retornos de l\xednea, es posible desplazarse por el contenido del \xe1rea con la tecla de flecha hacia abajo.",(0,l.jsx)(n.br,{}),"En las \xe1reas de varias l\xedneas, 4D efect\xfaa los saltos de l\xednea autom\xe1ticos."]})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Nota:"})," si aplica el comando ",(0,l.jsx)(n.strong,{children:"OBJECT Get multiline"}),' a un objeto que no admite la opci\xf3n "Multil\xednea", devuelve el valor 0.']}),"\n",(0,l.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/es/commands/object-set-multiline",children:"OBJECT SET MULTILINE"})}),"\n",(0,l.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"N\xfamero de comando"}),(0,l.jsx)(n.td,{children:"1254"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Hilo seguro"}),(0,l.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return o}});var s=t(667294);let l={},i=s.createContext(l);function o(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);