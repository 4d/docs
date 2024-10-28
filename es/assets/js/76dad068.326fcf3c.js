"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89175],{841552:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=a(474848),t=a(28453);const o={id:"truncate-table",title:"TRUNCATE TABLE",slug:"/commands/truncate-table",displayed_sidebar:"docs"},l=void 0,r={id:"commands-legacy/truncate-table",title:"TRUNCATE TABLE",description:"TRUNCATE TABLE {( tabla )}",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/truncate-table.md",sourceDirName:"commands-legacy",slug:"/commands/truncate-table",permalink:"/docs/es/commands/truncate-table",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftruncate-table.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"truncate-table",title:"TRUNCATE TABLE",slug:"/commands/truncate-table",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Selected record number",permalink:"/docs/es/commands/selected-record-number"},next:{title:"ADD TO SET",permalink:"/docs/es/commands/add-to-set"}},i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function d(e){const n={a:"a",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"TRUNCATE TABLE"})," {( ",(0,s.jsx)(n.em,{children:"tabla"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tabla"}),(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Tabla de la cual se borrar\xe1n todos los registros o tabla por defecto si se omite este par\xe1metro"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsx)(n.p,{children:"El comando TRUNCATE TABLE borra r\xe1pidamente todos los registros de tabla. Si tabla ya est\xe1 vac\xeda, TRUNCATE TABLE no hace nada. Despu\xe9s de llamar el comando, no hay una selecci\xf3n actual ni un registro actual."}),"\n",(0,s.jsxs)(n.p,{children:["El efecto de este comando es similar al de una secuencia ",(0,s.jsx)(n.a,{href:"/docs/es/commands/all-records",title:"ALL RECORDS",children:"ALL RECORDS"})," / ",(0,s.jsx)(n.a,{href:"/docs/es/commands/delete-selection",title:"DELETE SELECTION",children:"DELETE SELECTION"}),"; sin embargo, su funcionamiento difiere en los siguientes puntos:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No se llama el trigger"}),"\n",(0,s.jsx)(n.li,{children:"La integridad referencial de los datos no es controlada."}),"\n",(0,s.jsx)(n.li,{children:"Ninguna transacci\xf3n debe estar en curso en el proceso que ejecuta TRUNCATE TABLE. Si este es el caso, el comando no hace nada y la variable sistema OK toma el valor 0"}),"\n",(0,s.jsx)(n.li,{children:"Si uno o m\xe1s registros est\xe1n bloqueados por otro proceso, el comando falla: se genera un error y la variable sistema OK toma el valor 0. El conjunto sistema LockedSet no se crea."}),"\n",(0,s.jsxs)(n.li,{children:["Si ",(0,s.jsx)(n.em,{children:"tabla"})," ya est\xe1 vac\xeda, TRUNCATE TABLE no hace nada y la variable OK toma el valor 1."]}),"\n",(0,s.jsxs)(n.li,{children:["Si ",(0,s.jsx)(n.em,{children:"tabla est\xe1 en modo s\xf3lo lectura, TRUNCATE TABLE"})," no hace nada y la variable OK toma el valor 0."]}),"\n",(0,s.jsx)(n.li,{children:"La variable OK toma el valor 0 \xf3 1 dependiendo de si el comando fall\xf3 o fue exitoso."}),"\n",(0,s.jsx)(n.li,{children:"La operaci\xf3n se graba en el archivo de historial si lo hay."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"El comando TRUNCATE TABLE debe por lo tanto utilizarse con precauci\xf3n porque es muy efectivo en algunos casos, por ejemplo, para borrar r\xe1pidamente datos temporales."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," el concepto y funcionamiento de este comando es similar al del comando SQL TRUNCATE (TABLA)."]}),"\n",(0,s.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,s.jsx)(n.p,{children:"Si el comando se ha ejecutado correctamente, la variable sistema OK toma el valor 1. De lo contrario, toma el valor 0."}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/commands/delete-selection",children:"DELETE SELECTION"})})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>r});var s=a(296540);const t={},o=s.createContext(t);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);