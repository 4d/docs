"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55552"],{880034:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>t,metadata:()=>a,assets:()=>c,toc:()=>l,contentTitle:()=>i});var a=JSON.parse('{"id":"commands-legacy/on-web-legacy-close-session-database-method","title":"On Web Legacy Close Session database method","description":"M\xe9todo base On Web Legacy Close Session","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/on-web-legacy-close-session-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-web-legacy-close-session-database-method","permalink":"/docs/es/20-R7/commands/on-web-legacy-close-session-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-web-legacy-close-session-database-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"on-web-legacy-close-session-database-method","title":"On Web Legacy Close Session database method","slug":"/commands/on-web-legacy-close-session-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On Web Connection database method","permalink":"/docs/es/20-R7/commands/on-web-connection-database-method"},"next":{"title":"Date and Time","permalink":"/docs/es/20-R7/commands/theme/Date-and-Time"}}'),o=n("785893"),d=n("250065");let t={id:"on-web-legacy-close-session-database-method",title:"On Web Legacy Close Session database method",slug:"/commands/on-web-legacy-close-session-database-method",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Nota de compatibilidad",id:"nota-de-compatibilidad",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function r(e){let s={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"M\xe9todo base On Web Legacy Close Session"})}),"\n\n\n\n\n\n\n\n",(0,o.jsx)(s.table,{children:(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Este comando no requiere par\xe1metros"}),(0,o.jsx)(s.th,{})]})})}),"\n",(0,o.jsx)(s.h2,{id:"nota-de-compatibilidad",children:"Nota de compatibilidad"}),"\n",(0,o.jsxs)(s.p,{children:["Este m\xe9todo base de datos s\xf3lo puede utilizarse con ",(0,o.jsx)(s.strong,{children:"sesiones web heredadas"}),", disponibles en bases de datos convertidas a partir de versiones anteriores a la 4D v18 R6. Nunca se llama cuando se habilita el modo de ",(0,o.jsx)(s.strong,{children:"sesiones web escalables"})," (recomendado en 4D v18 R6 y superiores). Para obtener m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,o.jsx)(s.em,{children:"Gesti\xf3n de las sesiones web (heredado)"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:""}),"\n",(0,o.jsxs)(s.p,{children:["El ",(0,o.jsx)(s.strong,{children:"M\xe9todo base On Web Legacy Close Session"})," es llamado por el servidor web de 4D cada vez que una sesi\xf3n web se va a cerrar. Una sesi\xf3n puede ser cerrarse en los siguientes casos:"]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["cuando se alcanza el n\xfamero m\xe1ximo de sesiones simult\xe1neas (100 por defecto, modificable utilizando el comando ",(0,o.jsx)(s.a,{href:"/docs/es/20-R7/commands/web-set-option",children:"WEB SET OPTION"}),"), y 4D necesita crear nuevas (4D autom\xe1ticamente destruye el proceso de la sesi\xf3n inactiva m\xe1s antigua),"]}),"\n",(0,o.jsxs)(s.li,{children:["cuando se alcanza el periodo m\xe1ximo de inactividad del proceso de la sesi\xf3n (480 minutos por defecto, modificable v\xeda el comando ",(0,o.jsx)(s.a,{href:"/docs/es/20-R7/commands/web-set-option",children:"WEB SET OPTION"}),"),"]}),"\n",(0,o.jsxs)(s.li,{children:["cuando se llama al comando ",(0,o.jsx)(s.a,{href:"/docs/es/20-R7/commands/web-legacy-close-session",children:"WEB LEGACY CLOSE SESSION"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["Cuando se llama a este m\xe9todo base, el contexto de la sesi\xf3n (variables y selecciones generadas por el usuario) es a\xfan valido. Esto significa que puede guardar los datos relativos a la sesi\xf3n para poder usarlos posteriormente, m\xe1s espec\xedficamente utilizando ",(0,o.jsx)(s.a,{href:"/docs/es/20-R7/commands/qr-set-destination",children:"QR SET DESTINATION"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Nota:"})," en el contexto de una sesi\xf3n 4D Mobile (que puede generar varios procesos), el ",(0,o.jsx)(s.strong,{children:"M\xe9todo base On Web Legacy Close Session"})," se llama para cada proceso web cerrado, lo que permite guardar todo tipo de datos (variables, selecci\xf3n, etc.) generados por el proceso de sesi\xf3n 4D Mobile."]}),"\n",(0,o.jsxs)(s.p,{children:["Un ejemplo de uso del ",(0,o.jsx)(s.strong,{children:"M\xe9todo base On Web Legacy Close Session"})," se presenta en la secci\xf3n ",(0,o.jsx)(s.em,{children:"Gesti\xf3n de las sesiones web (heredado)"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.em,{children:"Gesti\xf3n de las sesiones web (heredado)"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/es/20-R7/commands/web-legacy-close-session",children:"WEB LEGACY CLOSE SESSION"})]})]})}function m(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return t}});var a=n(667294);let o={},d=a.createContext(o);function t(e){let s=a.useContext(d);return a.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),a.createElement(d.Provider,{value:s},e.children)}}}]);