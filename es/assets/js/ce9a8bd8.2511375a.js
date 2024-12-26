"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24368"],{195531:function(e,n,a){a.r(n),a.d(n,{metadata:()=>s,contentTitle:()=>t,default:()=>u,assets:()=>i,toc:()=>c,frontMatter:()=>o});var s=JSON.parse('{"id":"commands-legacy/backup","title":"BACKUP","description":"BACKUP","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/backup.md","sourceDirName":"commands-legacy","slug":"/commands/backup","permalink":"/docs/es/commands/backup","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fbackup.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"backup","title":"BACKUP","slug":"/commands/backup","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Backup","permalink":"/docs/es/category/backup"},"next":{"title":"BACKUP INFO","permalink":"/docs/es/commands/backup-info"}}'),r=a("785893"),d=a("250065");let o={id:"backup",title:"BACKUP",slug:"/commands/backup",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Gesti\xf3n de errores",id:"gesti\xf3n-de-errores",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"BACKUP"})}),"\n\n\n\n\n\n\n\n",(0,r.jsx)(n.table,{children:(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Este comando no requiere par\xe1metros"}),(0,r.jsx)(n.th,{})]})})}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsx)(n.p,{children:"El comando BACKUP inicia el backup de la base de datos utilizando los par\xe1metros de copia de seguridad actuales. No aparece una caja de di\xe1logo de confirmaci\xf3n; sin embargo, aparece una barra de progreso en la pantalla."}),"\n",(0,r.jsxs)(n.p,{children:["Los par\xe1metros de backup se definen en las Propiedades de la base. Son almacenados en el archivo ",(0,r.jsx)(n.em,{children:"backup.4DSettings"})," ubicado en la carpeta Settings de la base o en la carpeta Data (ver ",(0,r.jsx)(n.em,{children:"Configuraci\xf3n y archivos de seguimiento"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["El comando BACKUP llama al ",(0,r.jsx)(n.em,{children:"M\xe9todo de base de datos On Backup Startup"})," al comienzo de su ejecuci\xf3n y al ",(0,r.jsx)(n.em,{children:"M\xe9todo de base de datos On Backup Shutdown"})," al final de su ejecuci\xf3n."]}),"\n",(0,r.jsx)(n.p,{children:"Por este mecanismo, el comando no debe llamarse desde uno de estos m\xe9todos base."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"4D Server:"})," cuando se llama desde un equipo cliente, el comando BACKUP se considera como un procedimiento almacenado; siempre ejecutado en el servidor."]}),"\n",(0,r.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,r.jsx)(n.p,{children:"Si el backup se realiza correctamente, la variable del sistema OK toma el valor 1; de lo contrario, toma el valor 0."}),"\n",(0,r.jsx)(n.h4,{id:"gesti\xf3n-de-errores",children:"Gesti\xf3n de errores"}),"\n",(0,r.jsxs)(n.p,{children:["En caso de que se presenten incidentes durante el backup, la informaci\xf3n relativa al incidente se escribe en el diario de backup y el error de m\xe1s alto nivel se env\xeda \xfanicamente al ",(0,r.jsx)(n.a,{href:"metodo-base-on-backup-shutdown.md",children:"M\xe9todo base On Backup Shutdown"}),". Por lo tanto es importante utilizar este m\xe9todo base para poder administrar por programaci\xf3n los errores relacionados con el backup."]}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/commands/backup-info",children:"BACKUP INFO"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"M\xe9todo de base de datos On Backup Startup"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/commands/restore",children:"RESTORE"})]}),"\n",(0,r.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"887"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifica variables"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return t},a:function(){return o}});var s=a(667294);let r={},d=s.createContext(r);function o(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);