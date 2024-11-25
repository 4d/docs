"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46168"],{722685:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>h,assets:()=>l,toc:()=>a,frontMatter:()=>o});var s=JSON.parse('{"id":"commands-legacy/listbox-get-auto-row-height","title":"LISTBOX Get auto row height","description":"LISTBOX Get auto row height  ( { ;} objeto ; selector {; unidad*} )  : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-auto-row-height.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-auto-row-height","permalink":"/docs/es/commands/listbox-get-auto-row-height","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-auto-row-height.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-auto-row-height","title":"LISTBOX Get auto row height","slug":"/commands/listbox-get-auto-row-height","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX GET ARRAYS","permalink":"/docs/es/commands/listbox-get-arrays"},"next":{"title":"LISTBOX GET CELL COORDINATES","permalink":"/docs/es/commands/listbox-get-cell-coordinates"}}'),r=t("785893"),i=t("250065");let o={id:"listbox-get-auto-row-height",title:"LISTBOX Get auto row height",slug:"/commands/listbox-get-auto-row-height",displayed_sidebar:"docs"},d=void 0,l={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LISTBOX Get auto row height"}),"  ( {* ;} ",(0,r.jsx)(n.em,{children:"objeto"})," ; ",(0,r.jsx)(n.em,{children:"selector"})," {; ",(0,r.jsx)(n.em,{children:"unidad"}),"} )  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena). Si se omite, objeto es una variable."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objeto"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre del objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"selector"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Valor altura a obtener: lk row min height o lk row max height"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"unidad"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Unidad de valor de altura: 0 = p\xedxeles, 1 = l\xedneas"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valor de altura de l\xednea seleccionado"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"LISTBOX Get auto row height"}),"  devuelve el valor de altura de fila m\xednimo o m\xe1ximo actual definido para el objeto list box designado utilizando los par\xe1metros ",(0,r.jsx)(n.em,{children:"objeto"})," y ",(0,r.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["El valor actual m\xednimo o m\xe1ximo de la altura de la fila puede definirse en la lista de propiedades (ver ",(0,r.jsx)(n.em,{children:"Altura autom\xe1tica de fila"}),") o en el proceso actual utilizando el comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/listbox-set-auto-row-height",children:"LISTBOX SET AUTO ROW HEIGHT"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),': este comando solo se puede usar con list boxes "collection o entity selection" y "array".']}),"\n",(0,r.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,r.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,r.jsx)(n.em,{children:"objeto"})," es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena. Para m\xe1s informaci\xf3n acerca de los nombres de objetos, consulte la secci\xf3n ",(0,r.jsx)(n.em,{children:"Propiedades de los objetos"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"selector"}),", pase el tipo de valor a obtener. Puede utilizar una de las siguientes constantes del tema ",(0,r.jsx)(n.em,{children:"Listbox"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lk row max height"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"33"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lk row min height"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"32"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["De forma predeterminada, el comando devuelve el valor en p\xedxeles. Puede pasar una de las siguientes constantes del tema ",(0,r.jsx)(n.em,{children:"Listbox"})," en el par\xe1metro ",(0,r.jsx)(n.em,{children:"unidad"})," para definir la unidad a utilizar:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Comentario"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lk lines"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"La altura designa un n\xfamero de l\xedneas. 4D calcula la altura de una l\xednea en funci\xf3n de la fuente."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lk pixels"}),(0,r.jsx)(n.td,{children:"Entero largo"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"La altura es un n\xfamero en p\xedxeles (por defecto)"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"Usted desea obtener el n\xfamero m\xe1ximo de l\xedneas para una l\xednea de list box:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var vhMaxInteger\n\xa0vhMax:=LISTBOX Get auto row height(*;"LB";lk row max height;lk lines)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/listbox-get-row-height",children:"LISTBOX Get row height "}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/listbox-get-rows-height",children:"LISTBOX Get rows height"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/listbox-set-auto-row-height",children:"LISTBOX SET AUTO ROW HEIGHT"})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var s=t(667294);let r={},i=s.createContext(r);function o(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);