"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77275],{831068:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var t=o(474848),s=o(28453);const a={id:"object-get-action",title:"OBJECT Get action",slug:"/commands/object-get-action",displayed_sidebar:"docs"},c=void 0,i={id:"commands-legacy/object-get-action",title:"OBJECT Get action",description:"OBJECT Get action ( { ;} objeto* ) -> Resultado",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-action.md",sourceDirName:"commands-legacy",slug:"/commands/object-get-action",permalink:"/docs/es/commands/object-get-action",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-action.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"object-get-action",title:"OBJECT Get action",slug:"/commands/object-get-action",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"OBJECT DUPLICATE",permalink:"/docs/es/commands/object-duplicate"},next:{title:"OBJECT Get auto spellcheck",permalink:"/docs/es/commands/object-get-auto-spellcheck"}},r={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OBJECT Get action"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objeto"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es un campo o variable"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objeto"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsxs)(n.td,{children:["Nombre del objeto (si se especifica *) o ",(0,t.jsx)(n.br,{}),"Campo o variable (si se omite *)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Nombre de la acci\xf3n est\xe1ndar asociada y (si la hay) cadena de par\xe1metros"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.strong,{children:"OBJECT Get action"})," devuelve el nombre y (si es el caso) el par\xe1metro de la acci\xf3n est\xe1ndar asociada con el objeto designado por los par\xe1metros ",(0,t.jsx)(n.em,{children:"objeto"})," y ",(0,t.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Pasar el par\xe1metro opcional ",(0,t.jsx)(n.em,{children:"*"})," indica que el par\xe1metro ",(0,t.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,t.jsx)(n.em,{children:"objeto"})," es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (solo objeto campo o variable)."]}),"\n",(0,t.jsxs)(n.p,{children:["Puede establecer una acci\xf3n est\xe1ndar para un objeto en el Editor de formularios utilizando la lista de propiedades o utilizando el comando ",(0,t.jsx)(n.a,{href:"/docs/es/commands/object-set-action",children:"OBJECT SET ACTION"}),". ",(0,t.jsx)(n.strong,{children:"OBJECT Get action"})," devuelve una cadena que contiene el nombre de la acci\xf3n est\xe1ndar asociada al objeto (as\xed como su par\xe1metro, si existe)."]}),"\n",(0,t.jsxs)(n.p,{children:["Para obtener una lista completa de acciones est\xe1ndar, consulte la secci\xf3n ",(0,t.jsx)(n.em,{children:"Acciones est\xe1ndar"})," en el manual de ",(0,t.jsx)(n.em,{children:"Dise\xf1o"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:'Usted desea asociar la acci\xf3n "Cancelar" con todos los objetos en el formulario que a\xfan no tienen ninguna acci\xf3n asociada:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT($arrObjects;0)\n\xa0\n\xa0FORM GET OBJECTS($arrObjects)\n\xa0For($i;1;Size of array($arrObjects))\n\xa0\xa0\xa0\xa0If(OBJECT Get action(*;$arrObjects{$i})=ak none)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET ACTION(*;$arrObjects{$i};ak cancel)\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n"})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/es/commands/object-set-action",children:"OBJECT SET ACTION"})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>i});var t=o(296540);const s={},a=t.createContext(s);function c(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);