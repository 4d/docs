"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97659],{599951:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>c});var r=a(474848),s=a(28453);const d={id:"adjust-table-cache-priority",title:"ADJUST TABLE CACHE PRIORITY",slug:"/commands/adjust-table-cache-priority",displayed_sidebar:"docs"},t=void 0,i={id:"commands-legacy/adjust-table-cache-priority",title:"ADJUST TABLE CACHE PRIORITY",description:"ADJUST TABLE CACHE PRIORITY ( tabla ; prioridad )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/adjust-table-cache-priority.md",sourceDirName:"commands-legacy",slug:"/commands/adjust-table-cache-priority",permalink:"/docs/es/commands/adjust-table-cache-priority",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fadjust-table-cache-priority.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"adjust-table-cache-priority",title:"ADJUST TABLE CACHE PRIORITY",slug:"/commands/adjust-table-cache-priority",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"ADJUST INDEX CACHE PRIORITY",permalink:"/docs/es/commands/adjust-index-cache-priority"},next:{title:"Cache info",permalink:"/docs/es/commands/cache-info"}},o={},c=[{value:"Modo experto",id:"modo-experto",level:4},{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ADJUST TABLE CACHE PRIORITY"})," ( ",(0,r.jsx)(n.em,{children:"tabla"})," ; ",(0,r.jsx)(n.em,{children:"prioridad"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tabla"}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Tabla cuyo valor de prioridad de datos escalar tiene que ser ajustado"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"prioridad"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Valor de prioridad de la cach\xe9 para la tabla"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"modo-experto",children:"Modo experto"}),"\n",(0,r.jsx)(n.p,{children:"Este comando est\xe1 reservado para necesidades espec\xedficas. Debe utilizarse con cuidado, ya que puede afectar el rendimiento de la base."}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"ADJUST TABLE CACHE PRIORITY"})," modifica el valor de ",(0,r.jsx)(n.em,{children:"prioridad"})," de los datos relacionados con ",(0,r.jsx)(n.em,{children:"tabla"})," en la cach\xe9 para el proceso actual.",(0,r.jsx)(n.br,{}),"\nUna llamada a este comando reemplaza cualquier valor de prioridad previamente ajustado a trav\xe9s del mismo comando en el mismo proceso. Este comando ajusta la prioridad de las necesidades temporales, por ejemplo durante una b\xfasqueda o una importaci\xf3n."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," este comando s\xf3lo funciona en modo local (4D Server y 4D); No se puede utilizar en modo remoto 4D."]}),"\n",(0,r.jsxs)(n.p,{children:["Este comando controla la prioridad de los datos s\xf3lo en los campos escalares (tipos fecha, n\xfamero o cadena). La prioridad para campos de tipo binario (Blobs, textos, im\xe1genes y objetos) es manejada por el comando ",(0,r.jsx)(n.a,{href:"/docs/es/commands/adjust-blobs-cache-priority",children:"ADJUST BLOBS CACHE PRIORITY"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Pase en ",(0,r.jsx)(n.em,{children:"prioridad"}),' una de las siguientes constantes del tema "',(0,r.jsx)(n.em,{children:"Gesti\xf3n"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Comentario"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cache priority low"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cache priority very low"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cache priority normal"}),(0,r.jsx)(n.td,{children:"Define la prioridad de la cach\xe9 a su valor por defecto"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cache priority high"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cache priority very high"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"Usted desea cambiar temporalmente la prioridad de la cach\xe9 de los campos escalares [Docs]:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ADJUST TABLE CACHE PRIORITY([Docs];Cache priority low)\n\xa0\xa0// ... hacer alguna operaci\xf3n espec\xedfica\n\xa0ADJUST TABLE CACHE PRIORITY([Docs];Cache priority normal)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/get-adjusted-table-cache-priority",children:"Get adjusted table cache priority"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/set-table-cache-priority",children:"SET TABLE CACHE PRIORITY"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>i});var r=a(296540);const s={},d=r.createContext(s);function t(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);