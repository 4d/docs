"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24368"],{195531:function(e,n,a){a.r(n),a.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>t});var s=JSON.parse('{"id":"commands-legacy/backup","title":"BACKUP","description":"BACKUP","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/backup.md","sourceDirName":"commands-legacy","slug":"/commands/backup","permalink":"/docs/es/20-R7/commands/backup","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fbackup.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"backup","title":"BACKUP","slug":"/commands/backup","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Copia de seguridad","permalink":"/docs/es/20-R7/commands/theme/Backup"},"next":{"title":"BACKUP INFO","permalink":"/docs/es/20-R7/commands/backup-info"}}'),d=a("785893"),r=a("250065");let o={id:"backup",title:"BACKUP",slug:"/commands/backup",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:2},{value:"Gesti\xf3n de errores",id:"gesti\xf3n-de-errores",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"BACKUP"})}),"\n\n\n\n\n\n\n\n",(0,d.jsx)(n.table,{children:(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Este comando no requiere par\xe1metros"}),(0,d.jsx)(n.th,{})]})})}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsx)(n.p,{children:"El comando BACKUP inicia el backup de la base de datos utilizando los par\xe1metros de copia de seguridad actuales. No aparece una caja de di\xe1logo de confirmaci\xf3n; sin embargo, aparece una barra de progreso en la pantalla."}),"\n",(0,d.jsxs)(n.p,{children:["Los par\xe1metros de backup se definen en las Propiedades de la base. Son almacenados en el archivo ",(0,d.jsx)(n.em,{children:"backup.4DSettings"})," ubicado en la carpeta Settings de la base o en la carpeta Data (ver ",(0,d.jsx)(n.em,{children:"Configuraci\xf3n y archivos de seguimiento"}),")."]}),"\n",(0,d.jsxs)(n.p,{children:["El comando BACKUP llama al ",(0,d.jsx)(n.em,{children:"M\xe9todo de base de datos On Backup Startup"})," al comienzo de su ejecuci\xf3n y al ",(0,d.jsx)(n.em,{children:"M\xe9todo de base de datos On Backup Shutdown"})," al final de su ejecuci\xf3n."]}),"\n",(0,d.jsx)(n.p,{children:"Por este mecanismo, el comando no debe llamarse desde uno de estos m\xe9todos base."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"4D Server:"})," cuando se llama desde un equipo cliente, el comando BACKUP se considera como un procedimiento almacenado; siempre ejecutado en el servidor."]}),"\n",(0,d.jsx)(n.h2,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,d.jsx)(n.p,{children:"Si el backup se realiza correctamente, la variable del sistema OK toma el valor 1; de lo contrario, toma el valor 0."}),"\n",(0,d.jsx)(n.h2,{id:"gesti\xf3n-de-errores",children:"Gesti\xf3n de errores"}),"\n",(0,d.jsxs)(n.p,{children:["En caso de que se presenten incidentes durante el backup, la informaci\xf3n relativa al incidente se escribe en el diario de backup y el error de m\xe1s alto nivel se env\xeda \xfanicamente al ",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/on-backup-shutdown-database-method",children:"M\xe9todo base On Backup Shutdown"}),". Por lo tanto es importante utilizar este m\xe9todo base para poder administrar por programaci\xf3n los errores relacionados con el backup."]}),"\n",(0,d.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/backup-info",children:"BACKUP INFO"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/on-backup-startup-database-method",children:"M\xe9todo base On Backup Startup"}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/restore",children:"RESTORE"})]}),"\n",(0,d.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"887"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modifica variables"}),(0,d.jsx)(n.td,{children:"OK"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return t},a:function(){return o}});var s=a(667294);let d={},r=s.createContext(d);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);