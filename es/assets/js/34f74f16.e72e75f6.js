"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10664],{824175:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>i});var r=o(474848),s=o(28453);const a={id:"save-set",title:"SAVE SET",slug:"/commands/save-set",displayed_sidebar:"docs"},c=void 0,t={id:"commands-legacy/save-set",title:"SAVE SET",description:"SAVE SET ( conjunto ; doc )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/save-set.md",sourceDirName:"commands-legacy",slug:"/commands/save-set",permalink:"/docs/es/commands/save-set",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsave-set.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"save-set",title:"SAVE SET",slug:"/commands/save-set",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"REMOVE FROM SET",permalink:"/docs/es/commands/remove-from-set"},next:{title:"UNION",permalink:"/docs/es/commands/union"}},d={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SAVE SET"})," ( ",(0,r.jsx)(n.em,{children:"conjunto"})," ; ",(0,r.jsx)(n.em,{children:"doc"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"conjunto"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre del conjunto a guardar"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"doc"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre del archivo en el cual guardar el conjunto"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["SAVE SET guarda ",(0,r.jsx)(n.em,{children:"conjunto"})," en el archivo ",(0,r.jsx)(n.em,{children:"documento"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["No es necesario que ",(0,r.jsx)(n.em,{children:"documento"})," tenga el mismo nombre que el conjunto. Si pasa una cadena vac\xeda en ",(0,r.jsx)(n.em,{children:"documento"}),", aparece una caja de di\xe1logo de guardar archivos de manera que el usuario pueda introducir el nombre del documento. Con el comando LOAD SET puede cargar un conjunto guardado."]}),"\n",(0,r.jsx)(n.p,{children:"Si el usuario hace clic en Cancelar en la caja de di\xe1logo de guardar archivo, o si se presenta un error durante la operaci\xf3n de guardar, la variable sistema OK toma el valor 0. De lo contrario, toma el valor 1."}),"\n",(0,r.jsx)(n.p,{children:"SAVE SET con frecuencia se utiliza para guardar en disco los resultados de una b\xfasqueda larga."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Advertencia:"})," recuerde que un conjunto es una representaci\xf3n de una selecci\xf3n de registros en el momento en que se crea el conjunto. Si los registros representados por el conjunto cambian, el conjunto podr\xeda volverse inv\xe1lido. Por lo tanto, un conjunto guardado en disco debe representar a un grupo de registros que no cambia con frecuencia. M\xfaltiples eventos pueden volver un conjunto inv\xe1lido: modificaci\xf3n o eliminaci\xf3n de un registro del conjunto, o modificaci\xf3n de los criterios que determinan la creaci\xf3n del conjunto. Igualmente recuerde que los conjuntos no guardan valores de campos."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"El siguiente ejemplo muestra la caja de di\xe1logo est\xe1ndar de guardar archivos con el fin de permitir al usuario introducir el nombre del documento que contiene el conjunto:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0SAVE SET("UnConjunto";"")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,r.jsx)(n.p,{children:"Si el usuario hace clic en el bot\xf3n Cancelar en la caja de di\xe1logo de guardar archivos, o si hay un error durante la operaci\xf3n de carga, la variable sistema OK toma el valor 0. De lo contrario, toma el valor 1."}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/es/commands/load-set",children:"LOAD SET"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>t});var r=o(296540);const s={},a=r.createContext(s);function c(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);