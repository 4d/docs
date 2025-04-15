"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72488"],{211026:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>o,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/get-style-sheet-info","title":"GET STYLE SHEET INFO","description":"GET STYLE SHEET INFO ( nomHojaEstilo ; fuente ; tam ; estilos )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-style-sheet-info.md","sourceDirName":"commands-legacy","slug":"/commands/get-style-sheet-info","permalink":"/docs/es/commands/get-style-sheet-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-style-sheet-info.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-style-sheet-info","title":"GET STYLE SHEET INFO","slug":"/commands/get-style-sheet-info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Objetos (formularios)","permalink":"/docs/es/commands/theme/Objects-Forms"},"next":{"title":"LIST OF STYLE SHEETS","permalink":"/docs/es/commands/list-of-style-sheets"}}'),d=t("785893"),l=t("250065");let i={id:"get-style-sheet-info",title:"GET STYLE SHEET INFO",slug:"/commands/get-style-sheet-info",displayed_sidebar:"docs"},r=void 0,a={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Nota de compatibilidad",id:"nota-de-compatibilidad",level:3},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"GET STYLE SHEET INFO"})," ( ",(0,d.jsx)(n.em,{children:"nomHojaEstilo"})," ; ",(0,d.jsx)(n.em,{children:"fuente"})," ; ",(0,d.jsx)(n.em,{children:"tam"})," ; ",(0,d.jsx)(n.em,{children:"estilos"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"nomHojaEstilo"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Nombre de la hoja de estilo"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"fuente"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Tipo de fuente"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tam"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Tama\xf1o de fuente"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"estilos"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Valor del estilo"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando ",(0,d.jsx)(n.strong,{children:"GET STYLE SHEET INFO"})," devuelve la configuraci\xf3n actual de la hoja de estilo ",(0,d.jsx)(n.em,{children:"nomHojaEstilo"})," ."]}),"\n",(0,d.jsxs)(n.p,{children:["Pase en ",(0,d.jsx)(n.em,{children:"nomHojaEstilo"}),', el nombre de la hoja de estilo definida en modo Dise\xf1o. Para designar una hoja de estilo Autom\xe1tica, utilice una de las siguientes constantes, ubicadas en el tema "',(0,d.jsx)(n.em,{children:"Estilos de fuente"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Valor"}),(0,d.jsx)(n.th,{children:"Comentario"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Automatic style sheet"}),(0,d.jsx)(n.td,{children:"Cadena"}),(0,d.jsx)(n.td,{children:"__automatic__"}),(0,d.jsx)(n.td,{children:"Se utiliza de forma predeterminada para todos los objetos"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Automatic style sheet_additional"}),(0,d.jsx)(n.td,{children:"Cadena"}),(0,d.jsx)(n.td,{children:"__automatic_additional_text__"}),(0,d.jsx)(n.td,{children:"Soportado por los textos est\xe1ticos, campos y variables solamente. Se utiliza para texto adicional en las cajas de di\xe1logo."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Automatic style sheet_main"}),(0,d.jsx)(n.td,{children:"Cadena"}),(0,d.jsx)(n.td,{children:"__automatic_main_text__"}),(0,d.jsx)(n.td,{children:"Soportado por los textos est\xe1ticos, campos y variables solamente. Se utiliza para texto principal en las cajas de di\xe1logo."})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["El comando devuelve en ",(0,d.jsx)(n.em,{children:"fuente"}),", el nombre de la fuente de caracteres asociada a la hoja de estilo para la plataforma actual."]}),"\n",(0,d.jsxs)(n.p,{children:["El comando devuelve en ",(0,d.jsx)(n.em,{children:"tam"}),", el tama\xf1o en puntos de la fuente asociada a la hoja de estilo para la plataforma actual."]}),"\n",(0,d.jsxs)(n.p,{children:["El comando devuelve en ",(0,d.jsx)(n.em,{children:"estilos"}),', un valor que corresponde al estilo(s) asociado(s) a la hoja de estilo para la plataforma actual. Puede comparar el valor recibido con las siguientes constantes, que se encuentran en el tema "',(0,d.jsx)(n.em,{children:"Estilos de fuente"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Valor"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Bold"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"1"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Bold and Italic"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"3"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Bold and Underline"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"5"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Italic"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"2"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Italic and Underline"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"6"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Plain"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"0"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Underline"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"4"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1. De lo contrario (por ejemplo, si ",(0,d.jsx)(n.em,{children:"nomHojaEstilo"})," no existe), toma el valor 0."]}),"\n",(0,d.jsx)(n.h3,{id:"nota-de-compatibilidad",children:"Nota de compatibilidad"}),"\n",(0,d.jsxs)(n.p,{children:["En la ",(0,d.jsx)(n.strong,{children:"arquitectura proyecto"}),", este comando s\xf3lo soporta las tres hojas de estilo autom\xe1ticas."]}),"\n",(0,d.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsx)(n.p,{children:'Si quiere conocer la configuraci\xf3n actual de la hoja de estilo "Automatic"'}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0var $size;$style : Integer\n\xa0var $font : Text\n\xa0GET STYLE SHEET INFO(Automatic style sheet;$font;$size;$style)\n"})}),"\n",(0,d.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/commands/list-of-style-sheets",children:"LIST OF STYLE SHEETS"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/object-set-style-sheet",children:"OBJECT SET STYLE SHEET"})]}),"\n",(0,d.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"1256"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modifica variables"}),(0,d.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let d={},l=s.createContext(d);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);