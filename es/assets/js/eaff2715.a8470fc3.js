"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[60922],{537907:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>r});var o=s(474848),n=s(28453);const a={id:"object-get-style-sheet",title:"OBJECT Get style sheet",slug:"/commands/object-get-style-sheet",displayed_sidebar:"docs"},i=void 0,d={id:"commands-legacy/object-get-style-sheet",title:"OBJECT Get style sheet",description:"OBJECT Get style sheet ( { ;} objeto* ) -> Resultado",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-style-sheet.md",sourceDirName:"commands-legacy",slug:"/commands/object-get-style-sheet",permalink:"/docs/es/commands/object-get-style-sheet",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-style-sheet.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"object-get-style-sheet",title:"OBJECT Get style sheet",slug:"/commands/object-get-style-sheet",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"OBJECT GET SHORTCUT",permalink:"/docs/es/commands/object-get-shortcut"},next:{title:"OBJECT GET SUBFORM",permalink:"/docs/es/commands/object-get-subform"}},l={},r=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Nota de compatibilidad",id:"nota-de-compatibilidad",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){const t={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"OBJECT Get style sheet"})," ( {* ;} ",(0,o.jsx)(t.em,{children:"objeto"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Par\xe1metro"}),(0,o.jsx)(t.th,{children:"Tipo"}),(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"*"}),(0,o.jsx)(t.td,{children:"Operador"}),(0,o.jsx)(t.td,{children:"\u2192"}),(0,o.jsxs)(t.td,{children:["Si se especifica, objeto es un nombre de objeto (cadena)",(0,o.jsx)(t.br,{}),"Si se omite, objeto es un campo o una variable"]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"objeto"}),(0,o.jsx)(t.td,{children:"any"}),(0,o.jsx)(t.td,{children:"\u2192"}),(0,o.jsxs)(t.td,{children:["Nombre de objeto (si * se especifica) o ",(0,o.jsx)(t.br,{}),"Campo o variable (si * se omite)"]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Resultado"}),(0,o.jsx)(t.td,{children:"Text"}),(0,o.jsx)(t.td,{children:"\u2190"}),(0,o.jsx)(t.td,{children:"Nombre de la hoja de estilo"})]})]})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,o.jsx)(t.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(t.p,{children:["El comando ",(0,o.jsx)(t.strong,{children:"OBJECT Get style sheet"})," devuelve el nombre de la hoja de estilos asociada al objeto o a los objetos designado(s) por los par\xe1metros ",(0,o.jsx)(t.em,{children:"objeto"})," y ",(0,o.jsx)(t.em,{children:"*"})," ."]}),"\n",(0,o.jsxs)(t.p,{children:["La hoja de estilo puede haber sido asignada en modo Dise\xf1o utilizando la lista de propiedades o para el proceso actual usando el comando ",(0,o.jsx)(t.a,{href:"/docs/es/commands/object-set-style-sheet",children:"OBJECT SET STYLE SHEET"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Al pasar el par\xe1metro opcional ",(0,o.jsx)(t.em,{children:"*"})," indica que el par\xe1metro ",(0,o.jsx)(t.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no se pasa este par\xe1metro, indica que el par\xe1metro ",(0,o.jsx)(t.em,{children:"objeto"})," es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto \xfanicamente)."]}),"\n",(0,o.jsx)(t.p,{children:"El comando puede devolver:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"un nombre de hoja de estilos,"}),"\n",(0,o.jsx)(t.li,{children:'una cadena vac\xeda ("") si no se asigna ninguna hoja de estilos o'}),"\n",(0,o.jsxs)(t.li,{children:['si una hoja de estilo "Autom\xe1tico" est\xe1 asignada, una de las siguientes constantes que se encuentran en el tema "',(0,o.jsx)(t.em,{children:"Estilos de fuente"}),'":',(0,o.jsx)(t.br,{}),"\n| Constante                         | Tipo   | Valor                               | Comentario                                                                                                                 |",(0,o.jsx)(t.br,{}),"\n| --------------------------------- | ------ | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |",(0,o.jsx)(t.br,{}),"\n| Automatic style sheet             | Cadena | __automatic__                   | Se utiliza de forma predeterminada para todos los objetos                                                                  |",(0,o.jsx)(t.br,{}),"\n| Automatic style sheet_additional | Cadena | __automatic_additional_text__ | Soportado por los textos est\xe1ticos, campos y variables solamente. Se utiliza para texto adicional en las cajas de di\xe1logo. |",(0,o.jsx)(t.br,{}),"\n| Automatic style sheet_main       | Cadena | __automatic_main_text__       | Soportado por los textos est\xe1ticos, campos y variables solamente. Se utiliza para texto principal en las cajas de di\xe1logo. |"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Si el comando designa varios objetos, la hoja de estilo devuelta s\xf3lo tiene sentido si se asigna a todos los objetos."}),"\n",(0,o.jsx)(t.h4,{id:"nota-de-compatibilidad",children:"Nota de compatibilidad"}),"\n",(0,o.jsxs)(t.p,{children:["En la ",(0,o.jsx)(t.strong,{children:"arquitectura proyecto"}),", este comando s\xf3lo soporta las tres hojas de estilo autom\xe1ticas."]}),"\n",(0,o.jsx)(t.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"Estilos de fuente"}),(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.a,{href:"/docs/es/commands/object-set-style-sheet",children:"OBJECT SET STYLE SHEET"})]})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>d});var o=s(296540);const n={},a=o.createContext(n);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);