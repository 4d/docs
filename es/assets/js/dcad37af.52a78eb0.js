"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[13148],{62122:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=s(474848),t=s(28453);const r={id:"object-set-resizing-options",title:"OBJECT SET RESIZING OPTIONS",slug:"/commands/object-set-resizing-options",displayed_sidebar:"docs"},o=void 0,d={id:"commands-legacy/object-set-resizing-options",title:"OBJECT SET RESIZING OPTIONS",description:"OBJECT SET RESIZING OPTIONS ( { ;} objeto ; horizontal ; vertical* )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-resizing-options.md",sourceDirName:"commands-legacy",slug:"/commands/object-set-resizing-options",permalink:"/docs/es/commands/object-set-resizing-options",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-resizing-options.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"object-set-resizing-options",title:"OBJECT SET RESIZING OPTIONS",slug:"/commands/object-set-resizing-options",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"OBJECT SET PRINT VARIABLE FRAME",permalink:"/docs/es/commands/object-set-print-variable-frame"},next:{title:"OBJECT SET RGB COLORS",permalink:"/docs/es/commands/object-set-rgb-colors"}},a={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){const n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"OBJECT SET RESIZING OPTIONS"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objeto"})," ; ",(0,i.jsx)(n.em,{children:"horizontal"})," ; ",(0,i.jsx)(n.em,{children:"vertical"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operador"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable o un campo"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objeto"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nombre de objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"horizontal"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Opci\xf3n de redimensionamiento horizontal"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"vertical"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Opci\xf3n de redimensionamiento vertical"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.strong,{children:"OBJECT SET RESIZING OPTIONS"})," permite definir o modificar din\xe1micamente las opciones de redimensionamiento del objeto o de los objetos designados por los par\xe1metros ",(0,i.jsx)(n.em,{children:"objeto"})," y ",(0,i.jsx)(n.em,{children:"*"})," para el proceso actual. Estas opciones definen la visualizaci\xf3n del objeto en caso de redimensionamiento de la ventana del formulario."]}),"\n",(0,i.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,i.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (una cadena). Si no pasa este par\xe1metro, esto indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"})," es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena."]}),"\n",(0,i.jsxs)(n.p,{children:["En el par\xe1metro ",(0,i.jsx)(n.em,{children:"horizontal"}),", pase un valor que indique la opci\xf3n de redimensionamiento horizontal a definir para el ",(0,i.jsx)(n.em,{children:"objeto"}),". Puede pasar una de las siguientes constantes, del tema ",(0,i.jsx)(n.em,{children:"Propiedades de los objetos"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Valor"}),(0,i.jsx)(n.th,{children:"Comentario"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resize horizontal grow"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Si la ventana se agranda un 50% de ancho, el objeto se agranda 50% a la derecha"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resize horizontal move"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"Si la ventana se agranda 100 p\xedxeles de ancho, el objeto se mueve 100 p\xedxeles a la derecha"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resize horizontal none"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"Si la ventana se agranda de ancho, ni el largo ni la posici\xf3n del objeto var\xedan"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["En el par\xe1metro ",(0,i.jsx)(n.em,{children:"vertical"}),", pase un valor que indique la opci\xf3n de redimensionamiento vertical a definir para el ",(0,i.jsx)(n.em,{children:"objeto"}),". Puede pasar una de las siguientes constantes, del tema ",(0,i.jsx)(n.em,{children:"Propiedades de los objetos"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Valor"}),(0,i.jsx)(n.th,{children:"Comentario"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resize vertical grow"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Si la ventana se agranda un 50% de alto, el objeto se alarga 50% hacia abajo"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resize vertical move"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"Si la ventana se agranda 100 p\xedxeles de alto, el objeto se mueve 100 p\xedxeles hacia abajo"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resize vertical none"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"Si la ventana se agranda de alto, ni el ancho ni la posici\xf3n del objeto var\xedan"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/es/commands/object-get-resizing-options",children:"OBJECT GET RESIZING OPTIONS"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var i=s(296540);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);