"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31598"],{802857:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>o,assets:()=>a,toc:()=>t,contentTitle:()=>i});var o=JSON.parse('{"id":"commands-legacy/listbox-set-row-color","title":"LISTBOX SET ROW COLOR","description":"LISTBOX SET ROW COLOR ( { ;} objeto ; fila ; color {; tipoColor*} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/listbox-set-row-color.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-row-color","permalink":"/docs/es/commands/listbox-set-row-color","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-row-color.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-set-row-color","title":"LISTBOX SET ROW COLOR","slug":"/commands/listbox-set-row-color","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET PROPERTY","permalink":"/docs/es/commands/listbox-set-property"},"next":{"title":"LISTBOX SET ROW FONT STYLE","permalink":"/docs/es/commands/listbox-set-row-font-style"}}'),r=s("785893"),l=s("250065");let d={id:"listbox-set-row-color",title:"LISTBOX SET ROW COLOR",slug:"/commands/listbox-set-row-color",displayed_sidebar:"docs"},i=void 0,a={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LISTBOX SET ROW COLOR"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objeto"})," ; ",(0,r.jsx)(n.em,{children:"fila"})," ; ",(0,r.jsx)(n.em,{children:"color"})," {; ",(0,r.jsx)(n.em,{children:"tipoColor"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objeto"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre de objeto (si se especifica *) o  Variable (si se omite *)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fila"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Numero de fila"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"color"}),(0,r.jsx)(n.td,{children:"Text, Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Valor de color RGB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tipoColor"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"color de fuente del Listbox (por defecto) o color de fondo del Listbox"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," este comando s\xf3lo funciona con listboxes de tipo array."]}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"LISTBOX SET ROW COLOR"})," define el color de una fila o una celda en el listbox de tipo array designado por los par\xe1metros ",(0,r.jsx)(n.em,{children:"objeto"})," y ",(0,r.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"*"})," indica que el par\xe1metro ",(0,r.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no se pasa este par\xe1metro, indica que el par\xe1metro ",(0,r.jsx)(n.em,{children:"objeto"})," es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena."]}),"\n",(0,r.jsxs)(n.p,{children:["Puede designar un listbox o una columna del listbox en el par\xe1metro ",(0,r.jsx)(n.em,{children:"objeto"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Cuando el ",(0,r.jsx)(n.em,{children:"objeto"})," designa un listbox, el comando se aplica a la fila."]}),"\n",(0,r.jsxs)(n.li,{children:["Cuando el ",(0,r.jsx)(n.em,{children:"objeto"})," designa una columna del listbox, el comando se aplica a la celda localizada en la intersecci\xf3n de columna/fila."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"fila"}),", pase el n\xfamero de la fila en la que desea aplicar el nuevo color."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," El comando no tiene en cuenta ning\xfan estado oculto/visible de las filas del listbox."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"color"}),", pase un valor de color RGB. Para obtener m\xe1s informaci\xf3n acerca de los colores RGB, consulte la descripci\xf3n del comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/object-set-rgb-colors",children:"OBJECT SET RGB COLORS"}),". Si desea que la fila herede el conjunto de colores para el nivel m\xe1s alto, usted puede pasar la constante lk inherited en el par\xe1metro ",(0,r.jsx)(n.em,{children:"color"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["En el par\xe1metro ",(0,r.jsx)(n.em,{children:"tipoColor"}),", pase las constantes lk background color o lk font color para indicar si desea aplicar el color para el fondo o para el color de fuente de la fila. Si omite este par\xe1metro, el color se aplica para el color de fuente."]}),"\n",(0,r.jsxs)(n.p,{children:["Este comando modifica los valores que se encuentran en el array de colores que pueden haberse definido para la columna del listbox. Si estos arreglos no est\xe1n ya definidos, el comando crea din\xe1micamente arrays que puede acceder mediante el comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/listbox-get-array",children:"LISTBOX Get array"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si los valores de color en conflicto se definen usando las propiedades para los listboxes o columnas del listbox, se aplica un orden de prioridad. Para obtener m\xe1s informaci\xf3n, consulte el manual de ",(0,r.jsx)(n.em,{children:"Dise\xf1o"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"En un array de tipo list box, queremos establecer los colores de una fila y para una celda de esta fila:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Definici\xf3n de color de fuente para celda\n\xa0LISTBOX SET ROW COLOR(*;"Col5";3;"yellow")\n\xa0\n\xa0\xa0// Definici\xf3n de fondo y color de fuente para la fila 3\n\xa0LISTBOX SET ROW COLOR(*;"ListBox";3;"red";lk background color)\n\xa0LISTBOX SET ROW COLOR(*;"ListBox";3;"blue")\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(38597).Z+"",width:"363",height:"122"})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Listbox"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/listbox-get-row-color",children:"LISTBOX Get row color"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/listbox-get-row-color-as-number",children:"LISTBOX Get row color as number"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/listbox-set-row-font-style",children:"LISTBOX SET ROW FONT STYLE"})]}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"1270"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},38597:function(e,n,s){s.d(n,{Z:function(){return o}});let o="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var o=s(667294);let r={},l=o.createContext(r);function d(e){let n=o.useContext(l);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);