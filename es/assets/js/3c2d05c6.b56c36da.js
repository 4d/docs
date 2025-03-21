"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78800"],{456306:function(e,r,n){n.r(r),n.d(r,{default:()=>m,frontMatter:()=>a,metadata:()=>i,assets:()=>l,toc:()=>t,contentTitle:()=>d});var i=JSON.parse('{"id":"commands-legacy/print-record","title":"PRINT RECORD","description":"PRINT RECORD ( {;}{* | >} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/print-record.md","sourceDirName":"commands-legacy","slug":"/commands/print-record","permalink":"/docs/es/20-R7/commands/print-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprint-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"print-record","title":"PRINT RECORD","slug":"/commands/print-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PRINT OPTION VALUES","permalink":"/docs/es/20-R7/commands/print-option-values"},"next":{"title":"PRINT SELECTION","permalink":"/docs/es/20-R7/commands/print-selection"}}'),s=n("785893"),o=n("250065");let a={id:"print-record",title:"PRINT RECORD",slug:"/commands/print-record",displayed_sidebar:"docs"},d=void 0,l={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"PRINT RECORD"})," ( {",(0,s.jsx)(r.em,{children:"tabla"}),"}{;}{* | >} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Par\xe1metro"}),(0,s.jsx)(r.th,{children:"Tipo"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"tabla"}),(0,s.jsx)(r.td,{children:"Table"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Tabla para la cual imprimir el registro actual o Tabla por defecto, si se omite"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"* | >"}),(0,s.jsx)(r.td,{children:"Operador"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"* para suprimir las cajas de di\xe1logo de impresi\xf3n, o > para no reiniciar los par\xe1metros de impresi\xf3n"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"PRINT RECORD"})," imprime el registro actual de ",(0,s.jsx)(r.em,{children:"tabla"}),", sin modificar la selecci\xf3n actual. El formulario de salida actual se utiliza para la impresi\xf3n. Si no hay registro actual para ",(0,s.jsx)(r.em,{children:"tabla"}),", ",(0,s.jsx)(r.strong,{children:"PRINT RECORD"})," no hace nada."]}),"\n",(0,s.jsxs)(r.p,{children:["Puede imprimir subformularios y objetos externos con el comando ",(0,s.jsx)(r.strong,{children:"PRINT RECORD"}),". Esto no es posible con ",(0,s.jsx)(r.a,{href:"/docs/es/20-R7/commands/print-form",children:"Print form"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Nota:"})," si hay modificaciones en el registro que no han sido guardadas, este comando imprime los valores de los campos modificados, no los valores en disco."]}),"\n",(0,s.jsxs)(r.p,{children:["Por defecto, ",(0,s.jsx)(r.strong,{children:"PRINT RECORD"})," muestra la caja de di\xe1logo de trabajos de impresi\xf3n antes de la impresi\xf3n. Si el usuario cancela la cajas de di\xe1logo, el comando se cancela y no se imprime el registro.",(0,s.jsx)(r.br,{}),"\nPuede suprimir esta caja de di\xe1logo utilizando el par\xe1metro opcional asterisco (",(0,s.jsx)(r.em,{children:"*"}),") o el par\xe1metro opcional \u201Cmayor que\u201D (",(0,s.jsx)(r.em,{children:">"}),"):"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["El par\xe1metro ",(0,s.jsx)(r.em,{children:"*"})," produce un trabajo de impresi\xf3n utilizando los par\xe1metros de impresi\xf3n actual (par\xe1metros por defecto o definidos por los comandos ",(0,s.jsx)(r.em,{children:"_o_PAGE SETUP"})," y/o ",(0,s.jsx)(r.a,{href:"/docs/es/20-R7/commands/set-print-option",children:"SET PRINT OPTION"}),")."]}),"\n",(0,s.jsxs)(r.li,{children:["Adem\xe1s, el par\xe1metro ",(0,s.jsx)(r.em,{children:">"})," produce un trabajo de impresi\xf3n sin reinicializar los par\xe1metros de impresi\xf3n actual. Este par\xe1metro es \xfatil para ejecutar varias llamadas consecutivas a ",(0,s.jsx)(r.strong,{children:"PRINT RECORD"})," (por ejemplo al interior de un bucle) mientras mantiene los par\xe1metros de impresi\xf3n personalizados definidos previamente."]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"4D Server:"})," este comando puede ejecutarse en 4D Server dentro del marco de un procedimiento almacenado. En este contexto:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Aseg\xfarese que ninguna caja de di\xe1logo aparezca en el equipo servidor (excepto para una necesidad espec\xedfica). Para hacer esto, es necesario llamar al comando con el par\xe1metro ",(0,s.jsx)(r.em,{children:"*"})," o ",(0,s.jsx)(r.em,{children:">"}),"."]}),"\n",(0,s.jsx)(r.li,{children:"En caso de un problema con la impresora (sin papel, impresora desconectada, etc.), no se genera mensaje de error."}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsxs)(r.p,{children:["El siguiente ejemplo imprime el registro actual de la tabla [Facturas]. El c\xf3digo est\xe1 en el m\xe9todo de objeto de un bot\xf3n ",(0,s.jsx)(r.strong,{children:"Imprimir"})," en el formulario de entrada. Cuando el usuario hace clic en el bot\xf3n, el registro se imprime utilizando un formulario de salida dise\xf1ado para este prop\xf3sito."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0FORM SET OUTPUT([Facturas];"Print One From Data Entry")\xa0// Selecci\xf3n del formulario para impresi\xf3n\n\xa0PRINT RECORD([Facturas];*)\xa0// Imprimir las facturas(sin mostrar di\xe1logos de impresi\xf3n)\n\xa0FORM SET OUTPUT([Facturas];"Standard Output")\xa0// Restauraci\xf3n del formulario de salida anterior\n'})}),"\n",(0,s.jsx)(r.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsxs)(r.p,{children:["El siguiente ejemplo imprime el mismo registro actual en dos formularios diferentes. El c\xf3digo est\xe1 en el m\xe9todo de objeto de un bot\xf3n ",(0,s.jsx)(r.strong,{children:"Imprimir"})," en el formulario de entrada. Usted quiere definir par\xe1metros de impresi\xf3n personalizados y luego utilizarlos en dos formularios."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0PRINT SETTINGS\xa0//El usuario define los par\xe1metros de impresi\xf3n\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0FORM SET OUTPUT([Empleados];"Detallado")\xa0//Usar el primer formulario de impresi\xf3n\n\xa0\xa0\xa0\xa0PRINT RECORD([Empleados];>)\xa0//Imprimir utilizando los par\xe1metros definidos por el usuario\n\xa0\xa0\xa0\xa0FORM SET OUTPUT([Empleados];"Simple")\xa0//Usar el segundo formulario de impresi\xf3n\n\xa0\xa0\xa0\xa0PRINT RECORD([Empleados];>)\xa0//Imprimir utilizando los par\xe1metros definidos por el usuario\n\xa0\xa0\xa0\xa0FORM SET OUTPUT([Empleados];"Output")\xa0//Restaurar el formulario de salida por defecto\n\xa0End if\n'})}),"\n",(0,s.jsx)(r.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/es/20-R7/commands/print-form",children:"Print form"})}),"\n",(0,s.jsx)(r.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"N\xfamero de comando"}),(0,s.jsx)(r.td,{children:"71"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Hilo seguro"}),(0,s.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return d},a:function(){return a}});var i=n(667294);let s={},o=i.createContext(s);function a(e){let r=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:r},e.children)}}}]);