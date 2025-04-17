"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["98156"],{832849:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>a,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/object-get-resizing-options","title":"OBJECT GET RESIZING OPTIONS","description":"OBJECT GET RESIZING OPTIONS ( { ;} objeto ; horizontal ; vertical* )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/object-get-resizing-options.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-resizing-options","permalink":"/docs/es/commands/object-get-resizing-options","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-resizing-options.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"object-get-resizing-options","title":"OBJECT GET RESIZING OPTIONS","slug":"/commands/object-get-resizing-options","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT GET PRINT VARIABLE FRAME","permalink":"/docs/es/commands/object-get-print-variable-frame"},"next":{"title":"OBJECT GET RGB COLORS","permalink":"/docs/es/commands/object-get-rgb-colors"}}'),t=i("785893"),r=i("250065");let o={id:"object-get-resizing-options",title:"OBJECT GET RESIZING OPTIONS",slug:"/commands/object-get-resizing-options",displayed_sidebar:"docs"},d=void 0,a={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OBJECT GET RESIZING OPTIONS"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objeto"})," ; ",(0,t.jsx)(n.em,{children:"horizontal"})," ; ",(0,t.jsx)(n.em,{children:"vertical"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objeto"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre de objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"horizontal"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Opci\xf3n de redimensionamiento horizontal"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vertical"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Opci\xf3n de redimensionamiento vertical"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.strong,{children:"OBJECT GET RESIZING OPTIONS"})," devuelve las opciones de redimensionamiento actuales del o de los objetos designados por los par\xe1metros ",(0,t.jsx)(n.em,{children:"objeto"})," y ",(0,t.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,t.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,t.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (una cadena). Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,t.jsx)(n.em,{children:"objeto"})," es una variable. En este caso, pase una referencia de variable en lugar de una cadena."]}),"\n",(0,t.jsxs)(n.p,{children:["El comando devuelve las opciones de redimensionamiento actuales, como se definieron en el modo Dise\xf1o o para el proceso utilizando el comando ",(0,t.jsx)(n.a,{href:"/docs/es/commands/object-set-resizing-options",children:"OBJECT SET RESIZING OPTIONS"}),". Estas opciones definen la visualizaci\xf3n del objeto en caso de redimensionamiento de la ventana del formulario."]}),"\n",(0,t.jsxs)(n.p,{children:["El par\xe1metro ",(0,t.jsx)(n.em,{children:"horizontal"})," devuelve un valor indicando la opci\xf3n de redimensionamiento horizontal definido para el objeto. Puede comparar el valor recibido con las siguientes constantes, del tema ",(0,t.jsx)(n.em,{children:"Propiedades de los objetos"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Valor"}),(0,t.jsx)(n.th,{children:"Comentario"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resize horizontal grow"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"Si la ventana se agranda un 50% de ancho, el objeto se agranda 50% a la derecha"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resize horizontal move"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"Si la ventana se agranda 100 p\xedxeles de ancho, el objeto se mueve 100 p\xedxeles a la derecha"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resize horizontal none"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"Si la ventana se agranda de ancho, ni el largo ni la posici\xf3n del objeto var\xedan"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["El par\xe1metro ",(0,t.jsx)(n.em,{children:"vertical"})," devuelve un valor indicando la opci\xf3n de redimensionamiento vertical definido para el objeto. Puede comparar el valor recibido con las siguientes constantes, del tema ",(0,t.jsx)(n.em,{children:"Propiedades de los objetos"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Valor"}),(0,t.jsx)(n.th,{children:"Comentario"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resize vertical grow"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"Si la ventana se agranda un 50% de alto, el objeto se alarga 50% hacia abajo"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resize vertical move"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"Si la ventana se agranda 100 p\xedxeles de alto, el objeto se mueve 100 p\xedxeles hacia abajo"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resize vertical none"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"Si la ventana se agranda de alto, ni el ancho ni la posici\xf3n del objeto var\xedan"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/es/commands/object-set-resizing-options",children:"OBJECT SET RESIZING OPTIONS"})}),"\n",(0,t.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"1176"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return o}});var s=i(667294);let t={},r=s.createContext(t);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);