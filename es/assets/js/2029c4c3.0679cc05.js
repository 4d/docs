"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26622"],{273959:function(e,a,t){t.r(a),t.d(a,{default:()=>u,frontMatter:()=>o,metadata:()=>n,assets:()=>i,toc:()=>c,contentTitle:()=>d});var n=JSON.parse('{"id":"commands-legacy/on-server-startup-database-method","title":"On Server Startup database method","description":"M\xe9todo base On Server Startup","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/on-server-startup-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-server-startup-database-method","permalink":"/docs/es/20-R7/commands/on-server-startup-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-server-startup-database-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"on-server-startup-database-method","title":"On Server Startup database method","slug":"/commands/on-server-startup-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On Server Shutdown database method","permalink":"/docs/es/20-R7/commands/on-server-shutdown-database-method"},"next":{"title":"On SQL Authentication database method","permalink":"/docs/es/20-R7/commands/on-sql-authentication-database-method"}}'),r=t("785893"),s=t("250065");let o={id:"on-server-startup-database-method",title:"On Server Startup database method",slug:"/commands/on-server-startup-database-method",displayed_sidebar:"docs"},d=void 0,i={},c=[];function l(e){let a={a:"a",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"M\xe9todo base On Server Startup"})}),"\n\n\n\n\n\n\n\n",(0,r.jsx)(a.table,{children:(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Este comando no requiere par\xe1metros"}),(0,r.jsx)(a.th,{})]})})}),"\n",(0,r.jsx)(a.h4,{id:""}),"\n",(0,r.jsx)(a.p,{children:"El M\xe9todo base On Server Startup se llama una vez en el equipo servidor cuando abre una base con 4D Server. El M\xe9todo base On Server Startup NO se ejecuta en un entorno diferente a 4D Server."}),"\n",(0,r.jsx)(a.p,{children:"El M\xe9todo base On Server Startup es la ubicaci\xf3n ideal para:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Inicializar las variables interproceso utilizadas durante toda la sesi\xf3n 4D Server."}),"\n",(0,r.jsxs)(a.li,{children:["Iniciar autom\xe1ticamente los ",(0,r.jsx)(a.em,{children:"Procedimientos almacenados"})," al abrir la base."]}),"\n",(0,r.jsx)(a.li,{children:"Cargar preferencias o par\xe1metros guardados durante la sesi\xf3n anterior de 4D Server."}),"\n",(0,r.jsxs)(a.li,{children:["Evitar la apertura de la base si no se cumple una condici\xf3n (ausencia de recursos sistema) para una llamada expl\xedcita a ",(0,r.jsx)(a.a,{href:"/docs/es/20-R7/commands/quit-4d",children:"QUIT 4D"}),"."]}),"\n",(0,r.jsx)(a.li,{children:"Realizar otras acciones que quiera efectuar autom\xe1ticamente cada vez que se abra la base."}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Para ejecutar c\xf3digo autom\xe1ticamente en un equipo cliente cuando un 4D remoto se conecta al servidor, utilice el M\xe9todo base On Server Startup."}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Nota"}),": el M\xe9todo base On Server Startup se ejecuta de manera at\xf3mica, lo que significa que ning\xfan 4D remoto puede conectarse mientras la ejecuci\xf3n del m\xe9todo no haya terminado."]})]})}function u(e={}){let{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,a,t){t.d(a,{Z:function(){return d},a:function(){return o}});var n=t(667294);let r={},s=n.createContext(r);function o(e){let a=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);