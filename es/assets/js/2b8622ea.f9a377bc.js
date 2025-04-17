"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67741"],{867901:function(e,o,n){n.r(o),n.d(o,{default:()=>m,frontMatter:()=>t,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/listbox-get-row-color","title":"LISTBOX Get row color","description":"LISTBOX Get row color ( { ;} objeto ; fila {; tipoColor*} )  : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/listbox-get-row-color.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-row-color","permalink":"/docs/es/20-R8/commands/listbox-get-row-color","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-row-color.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-get-row-color","title":"LISTBOX Get row color","slug":"/commands/listbox-get-row-color","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX Get property","permalink":"/docs/es/20-R8/commands/listbox-get-property"},"next":{"title":"LISTBOX Get row color as number","permalink":"/docs/es/20-R8/commands/listbox-get-row-color-as-number"}}'),r=n("785893"),l=n("250065");let t={id:"listbox-get-row-color",title:"LISTBOX Get row color",slug:"/commands/listbox-get-row-color",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let o={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"LISTBOX Get row color"})," ( {* ;} ",(0,r.jsx)(o.em,{children:"objeto"})," ; ",(0,r.jsx)(o.em,{children:"fila"})," {; ",(0,r.jsx)(o.em,{children:"tipoColor"}),"} )  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Par\xe1metro"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"*"}),(0,r.jsx)(o.td,{children:"Operador"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Si se especifica, el objeto es un nombre de objeto (cadena) Si se omite, el objeto es una variable"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"objeto"}),(0,r.jsx)(o.td,{children:"any"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsxs)(o.td,{children:["Nombre del objeto (si se especifica *) o",(0,r.jsx)(o.br,{}),"Variable (si se omite *)"]})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"fila"}),(0,r.jsx)(o.td,{children:"Integer"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Numero de fila"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"tipoColor"}),(0,r.jsx)(o.td,{children:"Integer"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Color de fuente del list box (predeterminado) o color de fondo del list box"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Resultado"}),(0,r.jsx)(o.td,{children:"Text"}),(0,r.jsx)(o.td,{children:"\u2190"}),(0,r.jsx)(o.td,{children:"Valor del color"})]})]})]}),"\n",(0,r.jsx)(o.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota:"})," este comando solo funciona con list boxes de tipo array."]}),"\n",(0,r.jsxs)(o.p,{children:["El comando ",(0,r.jsx)(o.strong,{children:"LISTBOX Get row color"})," devuelve el color de una fila o celda en el list box designado por los par\xe1metros ",(0,r.jsx)(o.em,{children:"objeto"})," y ",(0,r.jsx)(o.em,{children:"*"})," como una cadena CSS."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota:"})," si desea obtener el color como un formato entero largo de 4 bytes, debe utilizar el comando ",(0,r.jsx)(o.a,{href:"/docs/es/20-R8/commands/object-set-rgb-colors",children:"OBJECT SET RGB COLORS"}),". Para m\xe1s informaci\xf3n sobre los formatos de color, consulte la descripci\xf3n del comando ",(0,r.jsx)(o.a,{href:"/docs/es/20-R8/commands/object-set-rgb-colors",children:"OBJECT SET RGB COLORS"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["Pasar el par\xe1metro opcional ",(0,r.jsx)(o.em,{children:"*"})," indica que el par\xe1metro ",(0,r.jsx)(o.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,r.jsx)(o.em,{children:"objeto"})," es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena. Puede designar un list box o una columna de list box en el par\xe1metro ",(0,r.jsx)(o.em,{children:"objeto"}),":"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["cuando ",(0,r.jsx)(o.em,{children:"objeto"})," designa un list box, el comando devuelve el color de la fila."]}),"\n",(0,r.jsxs)(o.li,{children:["cuando ",(0,r.jsx)(o.em,{children:"objeto"})," designa una columna de list box, el comando devuelve el color de la celda."]}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["En ",(0,r.jsx)(o.em,{children:"fila"}),", pase el n\xfamero de la fila cuyo color desea obtener."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota:"})," el comando no tiene en cuenta ning\xfan estado oculto/visible de las filas del list box."]}),"\n",(0,r.jsxs)(o.p,{children:["En el par\xe1metro ",(0,r.jsx)(o.em,{children:"tipoColor"}),', puede pasar la constante lk background color o lk font color (tema "',(0,r.jsx)(o.em,{children:"Listbox"}),'") para averiguar el color de fondo o fuente de la fila. Si omite este par\xe1metro, se devuelve el color de la fuente.']}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Advertencia"}),": el color asignado a una fila no se muestra necesariamente en cada celda de la fila (ver ejemplo). Si los valores de color en conflicto se establecen utilizando las propiedades de los list boxes o columnas de list box, se aplica un orden de prioridad. Para m\xe1s informaci\xf3n, consulte el manual de ",(0,r.jsx)(o.em,{children:"Dise\xf1o"}),"."]}),"\n",(0,r.jsx)(o.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(o.p,{children:"Dado el siguiente list box:"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{src:n(38597).Z+"",width:"363",height:"122"})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0var $vtColor;$vtColor2;$vtColor3 : Text\n\xa0$vtColor:=LISTBOX Get row color(*;"Col5";3)\n\xa0$vtColor2:=LISTBOX Get row color(*;"List Box";3)\n\xa0$vtColor3:=LISTBOX Get row color(*;"List Box";3;lk background color)\n\xa0\xa0// $vtColor contains "#FFFF00" (yellow)\n\xa0\xa0// $vtColor2 contains "#0000FF" (blue)\n\xa0\xa0// $vtColor3 contains "#FF0000" (red)\n'})}),"\n",(0,r.jsx)(o.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.a,{href:"/docs/es/20-R8/commands/listbox-set-row-color",children:"LISTBOX SET ROW COLOR"})}),"\n",(0,r.jsx)(o.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"N\xfamero de comando"}),(0,r.jsx)(o.td,{children:"1658"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Hilo seguro"}),(0,r.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,l.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},38597:function(e,o,n){n.d(o,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,o,n){n.d(o,{Z:function(){return d},a:function(){return t}});var s=n(667294);let r={},l=s.createContext(r);function t(e){let o=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(l.Provider,{value:o},e.children)}}}]);