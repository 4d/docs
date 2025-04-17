"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46756"],{868775:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/listbox-get-row-color-as-number","title":"LISTBOX Get row color as number","description":"LISTBOX Get row color as number ( { ;} objeto ; fila {; tipoColor*} )  : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/listbox-get-row-color-as-number.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-row-color-as-number","permalink":"/docs/es/commands/listbox-get-row-color-as-number","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-row-color-as-number.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"listbox-get-row-color-as-number","title":"LISTBOX Get row color as number","slug":"/commands/listbox-get-row-color-as-number","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX Get row color","permalink":"/docs/es/commands/listbox-get-row-color"},"next":{"title":"LISTBOX Get row font style","permalink":"/docs/es/commands/listbox-get-row-font-style"}}'),s=o("785893"),l=o("250065");let t={id:"listbox-get-row-color-as-number",title:"LISTBOX Get row color as number",slug:"/commands/listbox-get-row-color-as-number",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"LISTBOX Get row color as number"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"objeto"})," ; ",(0,s.jsx)(n.em,{children:"fila"})," {; ",(0,s.jsx)(n.em,{children:"tipoColor"}),"} )  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operador"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["Si se especifica, objeto es un nombre de objeto (cadena)",(0,s.jsx)(n.br,{}),"Si se omite, objeto es una variable"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objeto"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["Nombre de objeto (si * se especifica) o ",(0,s.jsx)(n.br,{}),"Variable (si * se omite)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"fila"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de fila"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tipoColor"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Listbox color de fuente (por defecto) o Listbox color de fondo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Valor de color"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," este comando s\xf3lo funciona con los list box de tipo array."]}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"LISTBOX Get row color as number"})," devuelve el color de una fila o de una celda del list box designado por los par\xe1metros ",(0,s.jsx)(n.em,{children:"objeto"})," y ",(0,s.jsx)(n.em,{children:"*"})," como un n\xfamero en formato 0x00rrggbb."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," si desea obtener el color como una cadena CSS, debe utilizar el comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/listbox-get-row-color",children:"LISTBOX Get row color"}),". Para m\xe1s informaci\xf3n sobre los formatos de color, consulte la descripci\xf3n del comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/object-set-rgb-colors",children:"OBJECT SET RGB COLORS"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"*"})," indica que el par\xe1metro ",(0,s.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,s.jsx)(n.em,{children:"objeto"})," es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena. Puede designar un list box o una columna del list box como par\xe1metro ",(0,s.jsx)(n.em,{children:"objeto"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["si ",(0,s.jsx)(n.em,{children:"objeto"})," designa un list box, el comando devuelve el color de la fila."]}),"\n",(0,s.jsxs)(n.li,{children:["si ",(0,s.jsx)(n.em,{children:"objeto"})," designa una columna list box, el comando devuelve el color de la celda."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["En ",(0,s.jsx)(n.em,{children:"fila"}),", pase el n\xfamero de la fila cuyo color desea obtener."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," el comando no tiene en cuenta el posible estado oculto/visible de las filas del list box."]}),"\n",(0,s.jsxs)(n.p,{children:["En el par\xe1metro ",(0,s.jsx)(n.em,{children:"tipoColor"}),', puede pasar o la constante lk background color o lk font color (tema "',(0,s.jsx)(n.em,{children:"Listbox"}),'" ) con el fin de averiguar el color de fondo o el color de la fuente de la fila. Si omite este par\xe1metro, se devuelve el color de la fuente.']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Advertencia:"})," un color asignado a una fila no se muestra necesariamente en cada celda de la fila (ver el ejemplo). Si los valores de color en conflicto se definen v\xeda las propiedades del list box o de la columna list box, se aplica un orden de prioridad. Para obtener m\xe1s informaci\xf3n, consulte el manual de ",(0,s.jsx)(n.em,{children:"Dise\xf1o"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"Dado el siguiente list box:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:o(172298).Z+"",width:"363",height:"122"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0vColor:=LISTBOX Get row color(*;"Col5";3)\n\xa0vColor2:=LISTBOX Get row color(*;"List Box";3)\n\xa0vColor3:=LISTBOX Get row color(*;"List Box";lk background color)\n\xa0\xa0// vColor contiene 0xFFFF00 (amarillo)\n\xa0\xa0// vColor2 contiene 0x00FF (azul)\n\xa0\xa0// vColor3 contiene 0x00FF0000 (rojo)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Listbox"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/listbox-get-row-color",children:"LISTBOX Get row color"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/listbox-set-row-color",children:"LISTBOX SET ROW COLOR"})]}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"1271"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},172298:function(e,n,o){o.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},250065:function(e,n,o){o.d(n,{Z:function(){return d},a:function(){return t}});var r=o(667294);let s={},l=r.createContext(s);function t(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);