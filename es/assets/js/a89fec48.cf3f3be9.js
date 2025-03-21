"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["45549"],{712224:function(e,n,r){r.r(n),r.d(n,{default:()=>x,frontMatter:()=>o,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/listbox-get-array","title":"LISTBOX Get array","description":"LISTBOX Get array ( { ;} objeto ; tipoArray* ) : Pointer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/listbox-get-array.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-array","permalink":"/docs/es/commands/listbox-get-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-array.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-get-array","title":"LISTBOX Get array","slug":"/commands/listbox-get-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX EXPAND","permalink":"/docs/es/commands/listbox-expand"},"next":{"title":"LISTBOX GET ARRAYS","permalink":"/docs/es/commands/listbox-get-arrays"}}'),d=r("785893"),t=r("250065");let o={id:"listbox-get-array",title:"LISTBOX Get array",slug:"/commands/listbox-get-array",displayed_sidebar:"docs"},a=void 0,i={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"LISTBOX Get array"})," ( {* ;} ",(0,d.jsx)(n.em,{children:"objeto"})," ; ",(0,d.jsx)(n.em,{children:"tipoArray"})," ) : Pointer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Operador"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsxs)(n.td,{children:["Si se especifica, objeto es un nombre de objeto (cadena)",(0,d.jsx)(n.br,{}),"Si se omite, objeto es una variable"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"objeto"}),(0,d.jsx)(n.td,{children:"any"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsxs)(n.td,{children:["Nombre de objeto (si * se especifica) o",(0,d.jsx)(n.br,{}),"Variable (si * se omite)"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tipoArray"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Tipo de array"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Resultado"}),(0,d.jsx)(n.td,{children:"Pointer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Puntero al array asociado a la propiedad"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," este comando s\xf3lo funciona con los list box de tipo array."]}),"\n",(0,d.jsxs)(n.p,{children:["El comando ",(0,d.jsx)(n.strong,{children:"LISTBOX Get array"})," devuelve un puntero al array ",(0,d.jsx)(n.em,{children:"tipoArray"})," del list box o de la columna de list box designada por los par\xe1metros ",(0,d.jsx)(n.em,{children:"objeto"})," y ",(0,d.jsx)(n.em,{children:"*"})," ."]}),"\n",(0,d.jsxs)(n.p,{children:["Los arrays de estilo, de color, de color de fondo o de control de l\xedneas pueden estar asociados a los list box de tipo de array o (excepto el array de control de l\xedneas) a las columnas de list box array usando la lista de propiedades en modo ",(0,d.jsx)(n.em,{children:"Dise\xf1o"})," o el comando ",(0,d.jsx)(n.a,{href:"/docs/es/commands/listbox-set-array",children:"LISTBOX SET ARRAY"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,d.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,d.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no se pasa este par\xe1metro, indica que el par\xe1metro ",(0,d.jsx)(n.em,{children:"objeto"})," es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena. Puede designar un list box o una columna de list box como par\xe1metro ",(0,d.jsx)(n.em,{children:"objeto"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Pase en ",(0,d.jsx)(n.em,{children:"tipoArray"}),', el tipo de array de propiedad a obtener. Puede utilizar una de las siguientes constantes, del tema "',(0,d.jsx)(n.em,{children:"Listbox"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Valor"}),(0,d.jsx)(n.th,{children:"Comentario"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"lk background color array"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"lk control array"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"3"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"lk font color array"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"lk row height array"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"4"}),(0,d.jsx)(n.td,{children:"(Licencia 4D View Pro requerida)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"lk style array"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"2"}),(0,d.jsx)(n.td,{})]})]})]}),"\n",(0,d.jsx)(n.p,{children:"El comando devuelve uno de los siguientes valores:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"/docs/es/commands/is-nil-pointer",children:"Is nil pointer"})," si ning\xfan array de la propiedad solicitada est\xe1 asociado a la columna o al list box."]}),"\n",(0,d.jsx)(n.li,{children:"un puntero al array de la propiedad solicitada, definido por el usuario."}),"\n",(0,d.jsxs)(n.li,{children:["un puntero al array de la propiedad solicitada, definido din\xe1micamente cuando se llama al comando ",(0,d.jsx)(n.a,{href:"/docs/es/commands/listbox-set-row-color",children:"LISTBOX SET ROW COLOR"})," o ",(0,d.jsx)(n.a,{href:"/docs/es/commands/listbox-set-row-font-style",children:"LISTBOX SET ROW FONT STYLE"})]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsx)(n.p,{children:"Ejemplos t\xedpicos de uso:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0vPtr:=LISTBOX Get array(*;"MyLB";lk font color array)\n\xa0\xa0// devuelve un puntero al array de colores de fuente\n\xa0\xa0// asociado al list box "MyLB"\n\xa0\n\xa0vPtr:=LISTBOX Get array(*;"Col4";lk style array)\n\xa0\xa0// devuelve un puntero al array de estilos de fuente\n\xa0\xa0// asociado a la columna de list box "Col4"\n'})}),"\n",(0,d.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/commands/listbox-get-arrays",children:"LISTBOX GET ARRAYS"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/listbox-set-array",children:"LISTBOX SET ARRAY"})]}),"\n",(0,d.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"1278"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return o}});var s=r(667294);let d={},t=s.createContext(d);function o(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);