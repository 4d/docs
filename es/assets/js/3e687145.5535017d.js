"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53624"],{145994:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/set-table-cache-priority","title":"SET TABLE CACHE PRIORITY","description":"SET TABLE CACHE PRIORITY ( tabla ; prioridad )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-table-cache-priority.md","sourceDirName":"commands-legacy","slug":"/commands/set-table-cache-priority","permalink":"/docs/es/20-R7/commands/set-table-cache-priority","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-table-cache-priority.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-table-cache-priority","title":"SET TABLE CACHE PRIORITY","slug":"/commands/set-table-cache-priority","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET INDEX CACHE PRIORITY","permalink":"/docs/es/20-R7/commands/set-index-cache-priority"},"next":{"title":"Collections","permalink":"/docs/es/20-R7/category/collections"}}'),d=r("785893"),t=r("250065");let i={id:"set-table-cache-priority",title:"SET TABLE CACHE PRIORITY",slug:"/commands/set-table-cache-priority",displayed_sidebar:"docs"},a=void 0,o={},c=[{value:"Modo experto",id:"modo-experto",level:4},{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SET TABLE CACHE PRIORITY"})," ( ",(0,d.jsx)(n.em,{children:"tabla"})," ; ",(0,d.jsx)(n.em,{children:"prioridad"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tabla"}),(0,d.jsx)(n.td,{children:"Table"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Tabla cuyo valor de prioridad de datos escalares tiene que ser definido para la sesi\xf3n"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"prioridad"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Valor de prioridad de cach\xe9 para valores escalares en la tabla"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"modo-experto",children:"Modo experto"}),"\n",(0,d.jsx)(n.p,{children:"Este comando est\xe1 reservado para necesidades espec\xedficas. Debe utilizarse con cuidado, ya que puede afectar el rendimiento de la base."}),"\n",(0,d.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando ",(0,d.jsx)(n.strong,{children:"SET TABLE CACHE PRIORITY"})," define una ",(0,d.jsx)(n.em,{children:"prioridad"})," espec\xedfica para los datos relacionados con ",(0,d.jsx)(n.em,{children:"tabla"})," en cach\xe9 para todos los procesos de la sesi\xf3n actual. Este comando debe llamarse en el m\xe9todo base ",(0,d.jsx)(n.strong,{children:"On Startup"})," u ",(0,d.jsx)(n.strong,{children:"On Server Startup"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," este comando s\xf3lo funciona en modo local (4D Server y 4D); No se puede utilizar en 4D modo remoto."]}),"\n",(0,d.jsxs)(n.p,{children:["Este comando controla la prioridad de los datos s\xf3lo en los campos escalares (fecha, n\xfamero o tipos de cadena). La prioridad para campos de tipo binario (Blobs, textos, im\xe1genes y objetos) es manejada por el comando ",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-blobs-cache-priority",children:"SET BLOBS CACHE PRIORITY"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Pase en ",(0,d.jsx)(n.em,{children:"prioridad"})," una de las siguientes constantes del tema:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Comentario"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Cache priority low"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Cache priority very low"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Cache priority normal"}),(0,d.jsx)(n.td,{children:"Define la prioridad de la cach\xe9 a su valor por defecto"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Cache priority high"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Cache priority very high"}),(0,d.jsx)(n.td,{})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsx)(n.p,{children:"En el , usted desea definir una prioridad alta para el dato escalar [Customer]:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0SET TABLE CACHE PRIORITY([Customer];Cache priority very high)\n"})}),"\n",(0,d.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/adjust-index-cache-priority",children:"ADJUST INDEX CACHE PRIORITY"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/adjust-table-cache-priority",children:"ADJUST TABLE CACHE PRIORITY"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/get-adjusted-table-cache-priority",children:"Get adjusted table cache priority"})]}),"\n",(0,d.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"1400"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return i}});var s=r(667294);let d={},t=s.createContext(d);function i(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);