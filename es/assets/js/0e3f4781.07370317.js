"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90771],{444602:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var s=d(474848),t=d(28453);const i={id:"backup-info",title:"BACKUP INFO",slug:"/commands/backup-info",displayed_sidebar:"docs"},r=void 0,c={id:"commands-legacy/backup-info",title:"BACKUP INFO",description:"BACKUP INFO ( selector ; info1 ; info2 )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/backup-info.md",sourceDirName:"commands-legacy",slug:"/commands/backup-info",permalink:"/docs/es/commands/backup-info",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fbackup-info.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"backup-info",title:"BACKUP INFO",slug:"/commands/backup-info",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"BACKUP",permalink:"/docs/es/commands/backup"},next:{title:"CHECK LOG FILE",permalink:"/docs/es/commands/check-log-file"}},l={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){const n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"BACKUP INFO"})," ( ",(0,s.jsx)(n.em,{children:"selector"})," ; ",(0,s.jsx)(n.em,{children:"info1"})," ; ",(0,s.jsx)(n.em,{children:"info2"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"selector"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Tipo de informaci\xf3n a obtener"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"info1"}),(0,s.jsx)(n.td,{children:"Integer, Date"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Valor 1 del selector"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"info2"}),(0,s.jsx)(n.td,{children:"Time, Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Valor 2 del selector"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsx)(n.p,{children:"El comando BACKUP INFO permite obtener informaci\xf3n relacionada con el \xfaltimo backup efectuado en los datos de la base."}),"\n",(0,s.jsxs)(n.p,{children:["Pase el tipo de informaci\xf3n a obtener en ",(0,s.jsx)(n.em,{children:"selector"}),". El tipo y el contenido de los par\xe1metros ",(0,s.jsx)(n.em,{children:"info1"})," e ",(0,s.jsx)(n.em,{children:"info2"})," depende del valor del selector. Puede utilizar una de las siguientes constantes, ubicadas en el tema \u201c",(0,s.jsx)(n.em,{children:"Backup"}),"\u201d:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"}),(0,s.jsx)(n.th,{children:"Comentario"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Last backup date"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"info1"})," e ",(0,s.jsx)(n.em,{children:"info2"})," devuelven respectivamente la fecha y la hora del \xfaltimo backup."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Last backup information"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"5"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"info1"})," devuelve la duraci\xf3n de la \xfaltima copia de seguridad en milisegundos (entero largo) e ",(0,s.jsx)(n.em,{children:"info2"})," la \xfaltima estampa de tiempo de inicio de la copia de seguridad (cadena, ver los detalles de formato en el comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/timestamp",children:"Timestamp"}),")."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Last backup status"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"info1"})," devuelve el n\xfamero e ",(0,s.jsx)(n.em,{children:"info2"})," el texto del estado de la \xfaltima copia de seguridad"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Next backup date"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.em,{children:"info1"})," devuelve la fecha e ",(0,s.jsx)(n.em,{children:"info2"})," la hora de la pr\xf3xima copia de seguridad programada"]})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/commands/restore",children:"RESTORE"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>r,x:()=>c});var s=d(296540);const t={},i=s.createContext(t);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);