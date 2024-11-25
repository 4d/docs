"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["12647"],{996622:function(e,n,s){s.r(n),s.d(n,{metadata:()=>o,contentTitle:()=>l,default:()=>p,assets:()=>a,toc:()=>c,frontMatter:()=>r});var o=JSON.parse('{"id":"ViewPro/commands/vp-set-sheet-options","title":"VP SET SHEET OPTIONS","description":"VP SET SHEET OPTIONS ( vpAreaName Object { ; sheet : Integer}  )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-set-sheet-options.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-sheet-options","permalink":"/docs/es/20-R6/ViewPro/commands/vp-set-sheet-options","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-sheet-options.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-set-sheet-options","title":"VP SET SHEET OPTIONS"},"sidebar":"docs","previous":{"title":"VP SET SHEET NAME","permalink":"/docs/es/20-R6/ViewPro/commands/vp-set-sheet-name"},"next":{"title":"VP SET SHOW PRINT LINES","permalink":"/docs/es/20-R6/ViewPro/commands/vp-set-show-print-lines"}}'),i=s("785893"),t=s("250065");let r={id:"vp-set-sheet-options",title:"VP SET SHEET OPTIONS"},l=void 0,a={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function d(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"VP SET SHEET OPTIONS"})," ( ",(0,i.jsx)(n.em,{children:"vpAreaName"})," : Text; ",(0,i.jsx)(n.em,{children:"sheetOptions"})," : Object { ; ",(0,i.jsx)(n.em,{children:"sheet"})," : Integer}  )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metros"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"vpAreaName"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"Nombre del \xe1rea 4D View Pro"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sheetOptions"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"Opciones de la hoja a definir"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sheet"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"\xcdndice de la hoja (hoja actual si se omite)"}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.code,{children:"VP SET SHEET OPTIONS"})," permite definir varias opciones de hoja del \xe1rea ",(0,i.jsx)(n.em,{children:"vpAreaName"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Pase el nombre del \xe1rea de 4D View Pro en ",(0,i.jsx)(n.em,{children:"vpAreaName"}),". Si pasa un nombre que no existe, se devuelve un error."]}),"\n",(0,i.jsxs)(n.p,{children:["Pase un objeto que contenga las definiciones de las opciones a definir en el par\xe1metro ",(0,i.jsx)(n.em,{children:"sheetOptions"}),". Para ver la lista completa de las opciones disponibles, consulte el p\xe1rrafo ",(0,i.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/configuring#sheet-options",children:"Opciones de hoja"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["En el par\xe1metro opcional ",(0,i.jsx)(n.em,{children:"sheet"}),", puede designar una hoja espec\xedfica (la numeraci\xf3n comienza en 0). Si se omite, se utiliza por defecto la hoja de c\xe1lculo actual. Puede seleccionar expl\xedcitamente la hoja de c\xe1lculo actual con la siguiente constante:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk current sheet"})}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,i.jsx)(n.p,{children:"Quiere proteger todas las celdas excepto el rango C5:D10:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'// Activar la protecci\xf3n en la hoja actual\nvar $options : Object\n  \n$options:=New object\n$options.isProtected:=True\nVP SET SHEET OPTIONS("ViewProArea";$options)\n\n// marcar las celdas C5:D10 como "desbloqueadas"\nVP SET CELL STYLE(VP Cells("ViewProArea";2;4;2;6);New object("locked";False))\n'})}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,i.jsx)(n.p,{children:"Necesita proteger su documento mientras sus usuarios pueden redimensionar las l\xedneas y columnas:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'var $options : Object\n  \n$options:=New object\n// Activar la protecci\xf3n\n$options.isProtected:=True\n$options.protectionOptions:=New object\n// Permitir al usuario cambiar el tama\xf1o de las l\xedneas\n$options.protectionOptions.allowResizeRows=True;\n// Permitir al usuario cambiar el tama\xf1o de las columnas\n$options.protectionOptions.allowResizeColumns=True;\n\n// Aplicar la protecci\xf3n en la hoja actual\nVP SET SHEET OPTIONS("ViewProArea";$options)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,i.jsx)(n.p,{children:"Desea personalizar los colores de sus pesta\xf1as, l\xedneas congeladas, l\xedneas de cuadr\xedcula, fondo de selecci\xf3n y borde de selecci\xf3n:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'var $options : Object\n   \n$options:=New object\n// Personalizar el color de la pesta\xf1a de la hoja 1\n$options.sheetTabColor:="Black"\n$options.gridline:=New object("color";"Purple")\n$options.selectionBackColor:="rgb(255,128,0,0.4)"\n$options.selectionBorderColor:="Yellow"\n$options.frozenlineColor:="Gold"\n   \nVP SET SHEET OPTIONS("ViewProArea";$options;0)\n \n// Personaliza el color de la pesta\xf1a de la joja 2\n$options.sheetTabColor:="red"\n   \nVP SET SHEET OPTIONS("ViewProArea";$options;1)\n \n// Personalizar el color de la pesta\xf1a de la hoja 3\n$options.sheetTabColor:="blue"\n  \nVP SET SHEET OPTIONS("ViewProArea";$options;2)\n'})}),"\n",(0,i.jsx)(n.p,{children:"Resultado:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(348551).Z+"",width:"880",height:"274"})}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,i.jsx)(n.p,{children:"Quiere ocultar las l\xedneas de la cuadr\xedcula, as\xed como los encabezados de las l\xedneas y columnas."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'var $options : Object\n  \n$options:=New object\n$options.gridline:=New object()\n$options.gridline.showVerticalGridline:=False\n$options.gridline.showHorizontalGridline:=False\n$options.rowHeaderVisible:=False\n$options.colHeaderVisible:=False\n  \nVP SET SHEET OPTIONS("ViewProArea";$options)\n'})}),"\n",(0,i.jsx)(n.p,{children:"Resultado:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(881028).Z+"",width:"612",height:"422"})}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/configuring#sheet-options",children:"4D View Pro sheet options"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-get-sheet-options",children:"VP Get sheet options"})]})]})}function p(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},348551:function(e,n,s){s.d(n,{Z:function(){return o}});let o=s.p+"assets/images/cmd_vpSetSheetOptions1-96730ac48f5cd59db7184fac7e74ffe7.PNG"},881028:function(e,n,s){s.d(n,{Z:function(){return o}});let o=s.p+"assets/images/cmd_vpSetSheetOptions2-596c33f630f32c68dc3da440cbd1349f.PNG"},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return r}});var o=s(667294);let i={},t=o.createContext(i);function r(e){let n=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);