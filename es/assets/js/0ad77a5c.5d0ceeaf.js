"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15065],{43963:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>m,frontMatter:()=>d,metadata:()=>o,toc:()=>a});var r=s(474848),i=s(28453);const d={id:"scan-index",title:"SCAN INDEX",slug:"/commands/scan-index",displayed_sidebar:"docs"},t=void 0,o={id:"commands-legacy/scan-index",title:"SCAN INDEX",description:"SCAN INDEX ( unCampo ; Numero {; > o <} )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/scan-index.md",sourceDirName:"commands-legacy",slug:"/commands/scan-index",permalink:"/docs/es/commands/scan-index",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fscan-index.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"scan-index",title:"SCAN INDEX",slug:"/commands/scan-index",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"REDUCE SELECTION",permalink:"/docs/es/commands/reduce-selection"},next:{title:"Selected record number",permalink:"/docs/es/commands/selected-record-number"}},c={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SCAN INDEX"})," ( ",(0,r.jsx)(n.em,{children:"unCampo"})," ; ",(0,r.jsx)(n.em,{children:"Numero"})," {; > o <} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"unField"}),(0,r.jsx)(n.td,{children:"Field"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Campo indexado con el cual escanear los registros"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Numero"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero de registros a devolver"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"> o <"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"> a partir del inicio del \xedndice < a partir del final del \xedndice"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["SCAN INDEX devuelve una selecci\xf3n de ",(0,r.jsx)(n.em,{children:"numero"})," de registros de la ",(0,r.jsx)(n.em,{children:"tabla"}),". Si pasa <, SCAN INDEX devuelve el ",(0,r.jsx)(n.em,{children:"n\xfamero"})," de registros a partir del final del \xedndice (valores superiores). Si pasa >, SCAN INDEX devuelve ",(0,r.jsx)(n.em,{children:"numero"})," de registros a partir del inicio del \xedndice (valores inferiores). Este comando es muy eficiente porque utiliza el \xedndice para realizar la operaci\xf3n."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," la selecci\xf3n que se obtiene no est\xe1 ordenada."]}),"\n",(0,r.jsx)(n.p,{children:"SCAN INDEX funciona \xfanicamente con campos indexados. Este comando modifica la selecci\xf3n actual de la tabla para el proceso actual, pero no hay registro actual."}),"\n",(0,r.jsx)(n.p,{children:"Si especifica un n\xfamero de registros superior al n\xfamero de registros presentes en la tabla, SCAN INDEX devolver\xe1 todos los registros."}),"\n",(0,r.jsx)(n.h5,{id:""}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," este comando no soporta campos de tipo Objeto."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"El siguiente ejemplo env\xeda cartas a los 50 peores clientes y 50 a los mejores clientes:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0SCAN INDEX([Clientes]TotalVencido;50;<)\xa0// Obtener la lista de los 50 peores clientes\n\xa0ORDER BY([Clientes]CodigoPostal;>)\xa0// Ordenar por c\xf3digo postal\n\xa0FORM SET OUTPUT([Clientes];"Advertencia")\n\xa0PRINT SELECTION([Clientes])\xa0// Imprimir las cartas\n\xa0SCAN INDEX([Clientes]TotalVencido;50;>)\xa0// Obtener la lista de los 50 mejores clientes\n\xa0ORDER BY([Clientes]CodigoPostal;>)\xa0// Ordenar por c\xf3digo postal\n\xa0FORM SET OUTPUT([Clientes];"Carta de agradecimiento")\n\xa0PRINT SELECTION([Clientes])\xa0// Imprimir las cartas\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/order-by",children:"ORDER BY"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/query",children:"QUERY"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/reduce-selection",children:"REDUCE SELECTION"})]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var r=s(296540);const i={},d=r.createContext(i);function t(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);