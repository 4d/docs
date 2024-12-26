"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["15280"],{90285:function(e,n,s){s.r(n),s.d(n,{metadata:()=>o,contentTitle:()=>d,default:()=>m,assets:()=>t,toc:()=>c,frontMatter:()=>r});var o=JSON.parse('{"id":"commands-legacy/notify-resources-folder-modification","title":"NOTIFY RESOURCES FOLDER MODIFICATION","description":"NOTIFY RESOURCES FOLDER MODIFICATION","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/notify-resources-folder-modification.md","sourceDirName":"commands-legacy","slug":"/commands/notify-resources-folder-modification","permalink":"/docs/es/commands/notify-resources-folder-modification","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fnotify-resources-folder-modification.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"notify-resources-folder-modification","title":"NOTIFY RESOURCES FOLDER MODIFICATION","slug":"/commands/notify-resources-folder-modification","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is data file locked","permalink":"/docs/es/commands/is-data-file-locked"},"next":{"title":"OPEN ADMINISTRATION WINDOW","permalink":"/docs/es/commands/open-administration-window"}}'),i=s("785893"),a=s("250065");let r={id:"notify-resources-folder-modification",title:"NOTIFY RESOURCES FOLDER MODIFICATION",slug:"/commands/notify-resources-folder-modification",displayed_sidebar:"docs"},d=void 0,t={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"NOTIFY RESOURCES FOLDER MODIFICATION"})}),"\n\n\n\n\n\n\n\n",(0,i.jsx)(n.table,{children:(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Este comando no requiere par\xe1metros"}),(0,i.jsx)(n.th,{})]})})}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:['El comando NOTIFY RESOURCES FOLDER MODIFICATION permite "forzar" el env\xedo por 4D Server de una notificaci\xf3n indicando a todos los puestos 4D conectados que el contenido de la carpeta Resources de la base ha sido modificado, de manera que puedan sincronizar su carpeta Resources local.',(0,i.jsx)(n.br,{}),"\nEste comando puede utilizarse particularmente para administrar la sincronizaci\xf3n de las carpetas ",(0,i.jsx)(n.em,{children:"Resources"})," de los equipos remotos despu\xe9s de que esta carpeta haya sido modificada por un procedimiento almacenado en el servidor."]}),"\n",(0,i.jsxs)(n.p,{children:["Para mayor informaci\xf3n sobre la administraci\xf3n de la carpeta ",(0,i.jsx)(n.em,{children:"Resources"})," en modo remoto, consulte la Gu\xeda de referencia de 4D Server."]}),"\n",(0,i.jsx)(n.p,{children:"S\xf3lo la informaci\xf3n de modificaci\xf3n es enviada por este comando. Las m\xe1quinaa remotas reaccionar\xe1n en funci\xf3n del par\xe1metro actual. Las opciones son:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["no sincronizaci\xf3n de la carpeta ",(0,i.jsx)(n.em,{children:"Resources"})," local durante la sesi\xf3n,"]}),"\n",(0,i.jsxs)(n.li,{children:["sincronizaci\xf3n autom\xe1tica de la carpeta ",(0,i.jsx)(n.em,{children:"Resources"})," local durante la sesi\xf3n,"]}),"\n",(0,i.jsx)(n.li,{children:"mostrar una alerta con el fin de que el usuario efect\xfae una sincronizaci\xf3n si lo desea."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"El par\xe1metro actual puede estar definido:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"a nivel global de la base v\xeda el par\xe1metro de las Propiedades de la base. En este caso, se aplica a todos los equipos remotos;"}),"\n",(0,i.jsxs)(n.li,{children:["localmente, utilizando el comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),' ejecutado en el equipo remoto (selector Auto Synchro Resources Folder). En este caso, "invalida" el de la base y se aplica \xfanicamente al equipo remoto para la sesi\xf3n.']}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/es/commands/get-4d-folder",children:"Get 4D folder"})}),"\n",(0,i.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"1052"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return r}});var o=s(667294);let i={},a=o.createContext(i);function r(e){let n=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);