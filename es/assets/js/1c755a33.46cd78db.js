"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["36010"],{787175:function(e,n,d){d.r(n),d.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>c,toc:()=>t,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/adjust-index-cache-priority","title":"ADJUST INDEX CACHE PRIORITY","description":"ADJUST INDEX CACHE PRIORITY ( campo ; prioridad )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/adjust-index-cache-priority.md","sourceDirName":"commands-legacy","slug":"/commands/adjust-index-cache-priority","permalink":"/docs/es/20-R8/commands/adjust-index-cache-priority","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fadjust-index-cache-priority.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"adjust-index-cache-priority","title":"ADJUST INDEX CACHE PRIORITY","slug":"/commands/adjust-index-cache-priority","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ADJUST BLOBS CACHE PRIORITY","permalink":"/docs/es/20-R8/commands/adjust-blobs-cache-priority"},"next":{"title":"ADJUST TABLE CACHE PRIORITY","permalink":"/docs/es/20-R8/commands/adjust-table-cache-priority"}}'),s=d("785893"),i=d("250065");let a={id:"adjust-index-cache-priority",title:"ADJUST INDEX CACHE PRIORITY",slug:"/commands/adjust-index-cache-priority",displayed_sidebar:"docs"},o=void 0,c={},t=[{value:"Modo experto",id:"modo-experto",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ADJUST INDEX CACHE PRIORITY"})," ( ",(0,s.jsx)(n.em,{children:"campo"})," ; ",(0,s.jsx)(n.em,{children:"prioridad"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"campo"}),(0,s.jsx)(n.td,{children:"Field"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Campo cuyo valor de prioridad de \xedndice(s) debe ajustarse"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"prioridad"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Valor de prioridad de la cach\xe9 para los \xedndices de campo"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"modo-experto",children:"Modo experto"}),"\n",(0,s.jsx)(n.p,{children:"Este comando est\xe1 reservado para necesidades espec\xedficas. Debe utilizarse con cuidado, ya que puede afectar el rendimiento de la base."}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"ADJUST INDEX CACHE PRIORITY"})," modifica el valor de ",(0,s.jsx)(n.em,{children:"prioridad"})," de los \xedndices relacionados con campo en la cach\xe9 para el proceso actual. Una llamada a este comando reemplaza cualquier valor de prioridad previamente ajustado a trav\xe9s del mismo comando en el mismo proceso. Este comando ajusta la prioridad para necesidades temporales, por ejemplo durante una b\xfasqueda o una importaci\xf3n."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," este comando s\xf3lo funciona en modo local (4D Server y 4D); No se puede utilizar en modo remoto 4D."]}),"\n",(0,s.jsxs)(n.p,{children:["Este comando controla la prioridad para todos los \xedndices relacionados con ",(0,s.jsx)(n.em,{children:"campo"}),", incluyendo \xedndices de palabras claves. Sin embargo, no cambia la prioridad de los \xedndices compuestos."]}),"\n",(0,s.jsxs)(n.p,{children:["Pase en ",(0,s.jsx)(n.em,{children:"prioridad"}),' una de las siguientes constantes del tema "',(0,s.jsx)(n.em,{children:"Gesti\xf3n"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Comentario"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Cache priority low"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Cache priority very low"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Cache priority normal"}),(0,s.jsx)(n.td,{children:"Define la prioridad de la cach\xe9 a su valor por defecto"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Cache priority high"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Cache priority very high"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"Usted desea cambiar temporalmente la prioridad de la cach\xe9 para el \xedndice de campo [Docs]Comments:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ADJUST INDEX CACHE PRIORITY([Docs]Comments;Cache priority very high)\n\xa0QUERY([Docs];[Docs]Comments%"Extra")\xa0// b\xfasqueda de un campo indexado\n\xa0\xa0//... realizaci\xf3n de otras b\xfasquedas u ordenaciones en la misma tabla\n\xa0\xa0// al terminar, volver a la prioridad de cach\xe9 normal\n\xa0ADJUST INDEX CACHE PRIORITY([Docs]Comments;Cache priority normal)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/get-adjusted-index-cache-priority",children:"Get adjusted index cache priority"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/set-index-cache-priority",children:"SET INDEX CACHE PRIORITY"})]}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"1430"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return o},a:function(){return a}});var r=d(667294);let s={},i=r.createContext(s);function a(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);