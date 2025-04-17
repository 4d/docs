"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42210"],{716748:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>o,toc:()=>a,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/listbox-set-auto-row-height","title":"LISTBOX SET AUTO ROW HEIGHT","description":"LISTBOX SET AUTO ROW HEIGHT ( { ;} objeto ; selector ; valor ; unidad* )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/listbox-set-auto-row-height.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-auto-row-height","permalink":"/docs/es/20-R8/commands/listbox-set-auto-row-height","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-auto-row-height.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-set-auto-row-height","title":"LISTBOX SET AUTO ROW HEIGHT","slug":"/commands/listbox-set-auto-row-height","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET ARRAY","permalink":"/docs/es/20-R8/commands/listbox-set-array"},"next":{"title":"LISTBOX SET COLUMN FORMULA","permalink":"/docs/es/20-R8/commands/listbox-set-column-formula"}}'),i=s("785893"),r=s("250065");let l={id:"listbox-set-auto-row-height",title:"LISTBOX SET AUTO ROW HEIGHT",slug:"/commands/listbox-set-auto-row-height",displayed_sidebar:"docs"},d=void 0,o={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"LISTBOX SET AUTO ROW HEIGHT"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objeto"})," ; ",(0,i.jsx)(n.em,{children:"selector"})," ; ",(0,i.jsx)(n.em,{children:"valor"})," ; ",(0,i.jsx)(n.em,{children:"unidad"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operador"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena). Si se omite, objeto es una variable."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objeto"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nombre del objeto (si se especifica *) o Variable (si se omite)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"selector"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Valor de la altura a definir: lk row min height o lk row max height"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"valor"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Valor m\xednimo o m\xe1ximo de la altura de la fila"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"unidad"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Unidad de valor de altura: 0 = p\xedxeles, 1 = l\xedneas"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando LISTBOX SET AUTO ROW HEIGHT le permite establecer el valor de altura de fila m\xednimo o m\xe1ximo en el objeto de list box designado utilizando los par\xe1metros ",(0,i.jsx)(n.em,{children:"objeto"})," y ",(0,i.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota"}),": este comando solo se tiene en cuenta si el list box est\xe1 definido en modo de altura autom\xe1tica de fila (ver ",(0,i.jsx)(n.em,{children:"Altura autom\xe1tica de fila"}),'), lo cual est\xe1 disponible s\xf3lo para listboxes "collection o entity selection" y "array". De lo contrario, no tiene ning\xfan efecto.']}),"\n",(0,i.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,i.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"})," es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena. Para m\xe1s informaci\xf3n acerca de los nombres de objetos, consulte la secci\xf3n ",(0,i.jsx)(n.em,{children:"Propiedades de los objetos"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["En ",(0,i.jsx)(n.em,{children:"selector"}),", pase el tipo de valor a definir. Puede utilizar una de las siguientes constantes del tema ",(0,i.jsx)(n.em,{children:"Listbox"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Valor"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lk row max height"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"33"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lk row min height"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"32"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["En ",(0,i.jsx)(n.em,{children:"valor"}),", pase el valor correspondiente en la ",(0,i.jsx)(n.em,{children:"unidad"})," apropiada."]}),"\n",(0,i.jsxs)(n.p,{children:["El par\xe1metro ",(0,i.jsx)(n.em,{children:"unidad"})," puede ajustarse utilizando una de las siguientes constantes del tema ",(0,i.jsx)(n.em,{children:"Listbox"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Valor"}),(0,i.jsx)(n.th,{children:"Comentario"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lk lines"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"La altura designa un n\xfamero de l\xedneas. 4D calcula la altura de una l\xednea en funci\xf3n de la fuente."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lk pixels"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"La altura es un n\xfamero en p\xedxeles (por defecto)"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," el comando no comprueba la consistencia de los valores. Sin embargo, en tiempo de ejecuci\xf3n, el valor m\xednimo se aplicar\xe1 a ambos valores en caso de conflicto. Por ejemplo, si el valor m\xednimo es 5 l\xedneas y el valor m\xe1ximo es de 3 l\xedneas (que es inconsistente), la altura m\xe1xima aplicada a las filas del list box ser\xe1 de 5 l\xedneas."]}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(n.p,{children:"Usted desea definir las alturas m\xednimas y m\xe1ximas para un list box con una altura de fila autom\xe1tica:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0LISTBOX SET AUTO ROW HEIGHT(*;"LB";lk row min height;60;lk pixels)\xa0// 60 p\xedxeles para el valor m\xednimo\n\xa0LISTBOX SET AUTO ROW HEIGHT(*;"LB";lk row max height;100;lk pixels)\xa0//y 100 p\xedxeles para el valor m\xe1ximo\n'})}),"\n",(0,i.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/20-R8/commands/listbox-get-auto-row-height",children:"LISTBOX Get auto row height "}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/20-R8/commands/listbox-set-row-height",children:"LISTBOX SET ROW HEIGHT"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/20-R8/commands/listbox-set-rows-height",children:"LISTBOX SET ROWS HEIGHT"})]}),"\n",(0,i.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"1501"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var t=s(667294);let i={},r=t.createContext(i);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);