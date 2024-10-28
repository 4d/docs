"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91481],{214876:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>t,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var o=a(474848),n=a(28453);const s={id:"unload-record",title:"UNLOAD RECORD",slug:"/commands/unload-record",displayed_sidebar:"docs"},t=void 0,c={id:"commands-legacy/unload-record",title:"UNLOAD RECORD",description:"UNLOAD RECORD {( tabla )}",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/unload-record.md",sourceDirName:"commands-legacy",slug:"/commands/unload-record",permalink:"/docs/es/commands/unload-record",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Funload-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"unload-record",title:"UNLOAD RECORD",slug:"/commands/unload-record",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"READ WRITE",permalink:"/docs/es/commands/read-write"},next:{title:"CREATE RECORD",permalink:"/docs/es/commands/create-record"}},d={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const r={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"UNLOAD RECORD"})," {( ",(0,o.jsx)(r.em,{children:"tabla"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Par\xe1metro"}),(0,o.jsx)(r.th,{children:"Tipo"}),(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"tabla"}),(0,o.jsx)(r.td,{children:"Table"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"Tabla de la cual descargar el registro o Tabla por defecto, si se omite"})]})})]}),"\n",(0,o.jsx)(r.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(r.p,{children:["UNLOAD RECORD descarga el registro actual de ",(0,o.jsx)(r.em,{children:"tabla"}),"."]}),"\n",(0,o.jsx)(r.p,{children:"Si el registro no est\xe1 bloqueado para el usuario local (bloqueado para los otros usuarios), UNLOAD RECORD desbloquea el registro para los otros usuarios."}),"\n",(0,o.jsx)(r.p,{children:"Aunque UNLOAD RECORD descarga el registro de la memoria, el registro permanece como registro actual. Cuando otro registro se convierte en el registro actual, el registro actual anterior se descarga autom\xe1ticamente y se desbloquea para los otros usuarios. Siempre ejecute este comando cuando haya terminado de modificar un registro y quiera que est\xe9 disponible para otros usuarios, mientras permanece el registro como su registro actual."}),"\n",(0,o.jsxs)(r.p,{children:["Si un registro tiene una cantidad importante de datos, de campos de imagen, o de documentos externos (tales como documentos 4D Write Pro), es preferible no almacenar el registro actual en memoria a menos que necesite modificarlo. En ese caso, utilice el comando UNLOAD RECORD, de esta manera, puede conservar el registro actual sin que est\xe9 en memoria. De esta forma libera la memoria ocupada por el registro, pero no tiene acceso a los valores almacenados en los campos. Si m\xe1s adelante necesita acceder a los valores del registro, utilice el comando ",(0,o.jsx)(r.a,{href:"/docs/es/commands/load-record",title:"LOAD RECORD",children:"LOAD RECORD"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Nota:"})," cuando se utiliza en una transacci\xf3n, el comando UNLOAD RECORD descarga el registro actual \xfanicamente para el proceso que genera la transacci\xf3n. Para otros procesos, el registro permanece bloqueado siempre que la transacci\xf3n no hay sido validada (o cancelada)."]}),"\n",(0,o.jsx)(r.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/es/commands/load-record",children:"LOAD RECORD"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.em,{children:"Record Locking"})]})]})}function m(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,r,a)=>{a.d(r,{R:()=>t,x:()=>c});var o=a(296540);const n={},s=o.createContext(n);function t(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);