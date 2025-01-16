"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["71084"],{968424:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>a,assets:()=>o,toc:()=>c,contentTitle:()=>i});var a=JSON.parse('{"id":"commands-legacy/restart-4d","title":"RESTART 4D","description":"RESTART 4D {( demora {; mensaje} )}","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/restart-4d.md","sourceDirName":"commands-legacy","slug":"/commands/restart-4d","permalink":"/docs/es/20-R7/commands/restart-4d","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frestart-4d.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"restart-4d","title":"RESTART 4D","slug":"/commands/restart-4d","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RELOAD PROJECT","permalink":"/docs/es/20-R7/commands/reload-project"},"next":{"title":"SEND MESSAGE TO REMOTE USER","permalink":"/docs/es/20-R7/commands/send-message-to-remote-user"}}'),r=s("785893"),t=s("250065");let d={id:"restart-4d",title:"RESTART 4D",slug:"/commands/restart-4d",displayed_sidebar:"docs"},i=void 0,o={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"RESTART 4D"})," {( ",(0,r.jsx)(n.em,{children:"demora"})," {; ",(0,r.jsx)(n.em,{children:"mensaje"}),"} )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"demora"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Tiempo de retardo (segundos) antes que 4D reinicie"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"mensaje"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Texto a mostrar en los equipos clientes"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"RESTART 4D"})," provoca el reinicio de la aplicaci\xf3n 4D actual."]}),"\n",(0,r.jsxs)(n.p,{children:["Este comando es para uso en el contexto de una aplicaci\xf3n fusionada (cliente/servidor o mono puesto) y debe ser utilizado en junto con el comando ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-update-folder",children:"SET UPDATE FOLDER"}),". En este caso , el proceso de actualizaci\xf3n autom\xe1tica se lanza: la nueva versi\xf3n de la aplicaci\xf3n designada por ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-update-folder",children:"SET UPDATE FOLDER"})," reemplaza autom\xe1ticamente la versi\xf3n actual en el momento del reinicio resultantes de ",(0,r.jsx)(n.strong,{children:"RESTART 4D"}),". La ruta de acceso al archivo de datos se guarda y se utiliza de forma autom\xe1tica."]}),"\n",(0,r.jsxs)(n.p,{children:["Si no se ha definido informaci\xf3n de actualizaci\xf3n utilizando el comando ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-update-folder",children:"SET UPDATE FOLDER"})," en la sesi\xf3n actual, el comando reinicia simplemente la aplicaci\xf3n 4D con los archivos de estructura y de datos actuales."]}),"\n",(0,r.jsxs)(n.p,{children:["Puede utilizar el par\xe1metro ",(0,r.jsx)(n.em,{children:"demora"})," para aplazar el reinicio de la aplicaci\xf3n con el fin de dar a los equipos cliente tiempo para desconectarse. Debe pasar un valor en segundos en ",(0,r.jsx)(n.em,{children:"demora"}),". Si omite este par\xe1metro, la aplicaci\xf3n servidor espera un m\xe1ximo de 10 minutos, para que todas las aplicaciones cliente se desconecten. Despu\xe9s de este tiempo, todas las aplicaciones cliente se desconectan autom\xe1ticamente."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),": los par\xe1metros ",(0,r.jsx)(n.em,{children:"demora"})," y ",(0,r.jsx)(n.em,{children:"mensaje"})," s\xf3lo se tienen en cuenta con las aplicaciones servidor (se ignoran en el caso de una aplicaci\xf3n monopuesto o en un 4D remoto)."]}),"\n",(0,r.jsxs)(n.p,{children:["El par\xe1metro opcional   ",(0,r.jsx)(n.em,{children:"mensaje"})," muestra un mensaje personalizado para las aplicaciones cliente conectadas."]}),"\n",(0,r.jsxs)(n.p,{children:["Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1, de lo contrario, toma el valor 0 y se reinicia la aplicaci\xf3n. Puede interceptar los errores generados por el comando utilizando un m\xe9todo instalado utilizando el comando ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/get-last-update-log-path",children:"Get last update log path"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-update-folder",children:"SET UPDATE FOLDER"})]}),"\n",(0,r.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"1292"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifica variables"}),(0,r.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var a=s(667294);let r={},t=a.createContext(r);function d(e){let n=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);