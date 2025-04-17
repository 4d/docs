"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65089"],{400817:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>t,assets:()=>d,toc:()=>a,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/reject-new-remote-connections","title":"REJECT NEW REMOTE CONNECTIONS","description":"REJECT NEW REMOTE CONNECTIONS ( rejectStatus )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/reject-new-remote-connections.md","sourceDirName":"commands-legacy","slug":"/commands/reject-new-remote-connections","permalink":"/docs/es/20-R8/commands/reject-new-remote-connections","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freject-new-remote-connections.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"reject-new-remote-connections","title":"REJECT NEW REMOTE CONNECTIONS","slug":"/commands/reject-new-remote-connections","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QUIT 4D","permalink":"/docs/es/20-R8/commands/quit-4d"},"next":{"title":"RELOAD PROJECT","permalink":"/docs/es/20-R8/commands/reload-project"}}'),r=s("785893"),c=s("250065");let o={id:"reject-new-remote-connections",title:"REJECT NEW REMOTE CONNECTIONS",slug:"/commands/reject-new-remote-connections",displayed_sidebar:"docs"},i=void 0,d={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"REJECT NEW REMOTE CONNECTIONS"})," ( ",(0,r.jsx)(n.em,{children:"rejectStatus"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rejectStatus"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"True si se rechazan las nuevas conexiones, de lo contrario false"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"REJECT NEW REMOTE CONNECTIONS"})," especifica si el servidor de aplicaciones acepta o no nuevas conexiones de usuarios remotos."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"rejectStatus"}),", pase ",(0,r.jsx)(n.strong,{children:"true"})," para rechazar nuevas conexiones remotas. Al pasar ",(0,r.jsx)(n.strong,{children:"false"}),", especifica que se permiten nuevas conexiones remotas."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),": este comando solo puede ejecutarse en 4D Server. Si el m\xe9todo se utiliza localmente o de forma remota en un solo cliente, ",(0,r.jsx)(n.strong,{children:"REJECT NEW REMOTE CONNECTIONS"})," no hace nada."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"Desea rechazar o aceptar las nuevas conexiones de clientes:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// Rechazar las nuevas conexiones\n\xa0REJECT NEW REMOTE CONNECTIONS(True)\n\xa0\xa0// Ejecutar la operaci\xf3n de mantenimiento\n\xa0...\n\xa0\xa0// Aceptar las nuevas conexiones\n\xa0REJECT NEW REMOTE CONNECTIONS(False)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/drop-remote-user",children:"DROP REMOTE USER"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/application-info",children:"Application info"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/soap-reject-new-requests",children:"SOAP REJECT NEW REQUESTS"})]}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"1635"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return o}});var t=s(667294);let r={},c=t.createContext(r);function o(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);