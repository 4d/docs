"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[29438],{83289:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>d,contentTitle:()=>t,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=o(474848),n=o(28453);const a={id:"load-record",title:"LOAD RECORD",slug:"/commands/load-record",displayed_sidebar:"docs"},t=void 0,c={id:"commands-legacy/load-record",title:"LOAD RECORD",description:"LOAD RECORD {( tabla )}",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/load-record.md",sourceDirName:"commands-legacy",slug:"/commands/load-record",permalink:"/docs/es/commands/load-record",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fload-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"load-record",title:"LOAD RECORD",slug:"/commands/load-record",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"QR SET TOTALS SPACING",permalink:"/docs/es/commands/qr-set-totals-spacing"},next:{title:"Locked",permalink:"/docs/es/commands/locked"}},d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function i(e){const r={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"LOAD RECORD"})," {( ",(0,s.jsx)(r.em,{children:"tabla"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Par\xe1metro"}),(0,s.jsx)(r.th,{children:"Tipo"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"tabla"}),(0,s.jsx)(r.td,{children:"Table"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Tabla de la cual cargar el registro actual o Tabla por defecto si se omite"})]})})]}),"\n",(0,s.jsx)(r.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(r.p,{children:["LOAD RECORD carga el registro actual de ",(0,s.jsx)(r.em,{children:"tabla"}),". Si no hay registro actual, LOAD RECORD no tienen ning\xfan efecto."]}),"\n",(0,s.jsxs)(r.p,{children:["Puede utilizar la funci\xf3n ",(0,s.jsx)(r.a,{href:"/docs/es/commands/locked",title:"Locked",children:"Locked"})," para determinar si puede modificar el registro:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Si la tabla est\xe1 en modo s\xf3lo lectura, la funci\xf3n ",(0,s.jsx)(r.a,{href:"/docs/es/commands/locked",title:"Locked",children:"Locked"})," devuelve TRUE, y no es posible modificar el registro."]}),"\n",(0,s.jsx)(r.li,{children:"Si la tabla est\xe1 en modo lectura/escritura pero el registro ha sido bloqueado, el registro ser\xe1 s\xf3lo lectura, y no es posible modificar el registro."}),"\n",(0,s.jsxs)(r.li,{children:["Si la tabla est\xe1 en modo lectura/escritura y el registro no est\xe1 bloqueado, es posible modificar el registro en el proceso actual. La funci\xf3n ",(0,s.jsx)(r.a,{href:"/docs/es/commands/locked",title:"Locked",children:"Locked"})," devuelve TRUE para todos los otros usuarios y procesos."]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Nota:"})," si el comando LOAD RECORD se ejecuta despu\xe9s de un ",(0,s.jsx)(r.a,{href:"/docs/es/commands/read-only",title:"READ ONLY",children:"READ ONLY"}),", el registro se libera autom\xe1ticamente y se carga sin tener que utilizar el comando ",(0,s.jsx)(r.a,{href:"/docs/es/commands/unload-record",title:"UNLOAD RECORD",children:"UNLOAD RECORD"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["Generalmente, no es necesario utilizar el comando LOAD RECORD, porque los comandos como ",(0,s.jsx)(r.a,{href:"/docs/es/commands/query",title:"QUERY",children:"QUERY"}),", ",(0,s.jsx)(r.a,{href:"/docs/es/commands/next-record",title:"NEXT RECORD",children:"NEXT RECORD"}),", ",(0,s.jsx)(r.a,{href:"/docs/es/commands/previous-record",title:"PREVIOUS RECORD",children:"PREVIOUS RECORD"}),", etc., cargan autom\xe1ticamente el registro actual."]}),"\n",(0,s.jsx)(r.p,{children:"En entornos multiusuario y multiprocesos, cuando necesite modificar un registro existente, debe acceder a la tabla (a la cual pertenece el registro) en modo lectura/escritura. Si un registro est\xe1 bloqueado y no puede ser cargado, LOAD RECORD le permite intentar cargar el registro nuevamente m\xe1s tarde. Utilizando LOAD RECORD en un bucle, puede esperar hasta que el registro est\xe9 disponible en modo lectura/escritura."}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Consejo:"})," el comando LOAD RECORD puede ser utilizado para recargar el registro actual en el contexto de un formulario de entrada. Todos los datos modificados son reemplazados por los valores anteriores. En ese caso, el comando LOAD RECORD efect\xfaa en cierto modo una cancelaci\xf3n general de la entrada."]}),"\n",(0,s.jsx)(r.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/es/commands/locked",children:"Locked"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.em,{children:"Record Locking"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/es/commands/unload-record",children:"UNLOAD RECORD"})]})]})}function m(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},28453:(e,r,o)=>{o.d(r,{R:()=>t,x:()=>c});var s=o(296540);const n={},a=s.createContext(n);function t(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);