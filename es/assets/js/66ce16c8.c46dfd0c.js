"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35839],{222938:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var r=s(474848),d=s(28453);const i={id:"set-index-cache-priority",title:"SET INDEX CACHE PRIORITY",slug:"/commands/set-index-cache-priority",displayed_sidebar:"docs"},t=void 0,c={id:"commands-legacy/set-index-cache-priority",title:"SET INDEX CACHE PRIORITY",description:"SET INDEX CACHE PRIORITY ( campo ; prioridad )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-index-cache-priority.md",sourceDirName:"commands-legacy",slug:"/commands/set-index-cache-priority",permalink:"/docs/es/commands/set-index-cache-priority",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-index-cache-priority.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"set-index-cache-priority",title:"SET INDEX CACHE PRIORITY",slug:"/commands/set-index-cache-priority",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SET CACHE SIZE",permalink:"/docs/es/commands/set-cache-size"},next:{title:"SET TABLE CACHE PRIORITY",permalink:"/docs/es/commands/set-table-cache-priority"}},o={},a=[{value:"Modo experto",id:"modo-experto",level:4},{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET INDEX CACHE PRIORITY"})," ( ",(0,r.jsx)(n.em,{children:"campo"})," ; ",(0,r.jsx)(n.em,{children:"prioridad"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"campo"}),(0,r.jsx)(n.td,{children:"Field"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Campo cuyo valor de prioridad de \xedndices debe ser configurado para la sesi\xf3n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"prioridad"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Valor de prioridad de la cach\xe9 para el(los) \xedndice(s) de campo"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"modo-experto",children:"Modo experto"}),"\n",(0,r.jsx)(n.p,{children:"Este comando est\xe1 reservado para necesidades espec\xedficas. Debe utilizarse con cuidado, ya que puede afectar el rendimiento de la base."}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"SET INDEX CACHE PRIORITY"})," define una prioridad espec\xedfica en los \xedndices relacionados con el campo en cach\xe9 para todos los procesos de la sesi\xf3n actual. Este comando debe llamarse en el m\xe9todo base ",(0,r.jsx)(n.strong,{children:"On Startup"})," u ",(0,r.jsx)(n.strong,{children:"On Server Startup"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," este comando s\xf3lo funciona en modo local (4D Server y 4D); No se puede utilizar en 4D modo remoto."]}),"\n",(0,r.jsxs)(n.p,{children:["Este comando maneja la prioridad para todos los \xedndices relacionados con el ",(0,r.jsx)(n.em,{children:"campo"}),", incluidos los \xedndices de palabras clave (la prioridad de los \xedndices compuestos no se puede personalizar)."]}),"\n",(0,r.jsxs)(n.p,{children:["Pase en ",(0,r.jsx)(n.em,{children:"prioridad"}),' una de las siguientes constantes del tema "',(0,r.jsx)(n.em,{children:"Gesti\xf3n"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Comentario"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cache priority low"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cache priority very low"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cache priority normal"}),(0,r.jsx)(n.td,{children:"Define la prioridad de la cach\xe9 a su valor por defecto"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cache priority high"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cache priority very high"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"En el , usted desea definir una alta prioridad para los \xedndices campo [Cliente]Apellido:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0SET INDEX CACHE PRIORITY([Customer]LastName;Cache priority very high)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/adjust-index-cache-priority",children:"ADJUST INDEX CACHE PRIORITY"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/get-adjusted-index-cache-priority",children:"Get adjusted index cache priority"})]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var r=s(296540);const d={},i=r.createContext(d);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);