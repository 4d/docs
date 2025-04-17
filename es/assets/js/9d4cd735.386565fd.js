"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7409"],{936026:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>a,metadata:()=>i,assets:()=>r,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"commands-legacy/web-legacy-close-session","title":"WEB LEGACY CLOSE SESSION","description":"WEB LEGACY CLOSE SESSION ( idSesion )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/web-legacy-close-session.md","sourceDirName":"commands-legacy","slug":"/commands/web-legacy-close-session","permalink":"/docs/es/20-R8/commands/web-legacy-close-session","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-legacy-close-session.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"web-legacy-close-session","title":"WEB LEGACY CLOSE SESSION","slug":"/commands/web-legacy-close-session","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB Is server running","permalink":"/docs/es/20-R8/commands/web-is-server-running"},"next":{"title":"WEB LEGACY GET SESSION EXPIRATION","permalink":"/docs/es/20-R8/commands/web-legacy-get-session-expiration"}}'),o=n("785893"),d=n("250065");let a={id:"web-legacy-close-session",title:"WEB LEGACY CLOSE SESSION",slug:"/commands/web-legacy-close-session",displayed_sidebar:"docs"},l=void 0,r={},c=[{value:"Nota de compatibilidad",id:"nota-de-compatibilidad",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function t(e){let s={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"WEB LEGACY CLOSE SESSION"})," ( ",(0,o.jsx)(s.em,{children:"idSesion"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe1metro"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,o.jsx)(s.tbody,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"idSesion"}),(0,o.jsx)(s.td,{children:"Text"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"UUID de sesi\xf3n"})]})})]}),"\n",(0,o.jsx)(s.h2,{id:"nota-de-compatibilidad",children:"Nota de compatibilidad"}),"\n",(0,o.jsxs)(s.p,{children:["Este comando s\xf3lo puede utilizarse con ",(0,o.jsx)(s.strong,{children:"sesiones web heredadas"}),", disponibles en bases convertidas a partir de versiones anteriores a la 4D v18 R6. Se ignora cuando se habilita el modo ",(0,o.jsx)(s.strong,{children:"sesiones web escalables"})," (recomendado en 4D v18 R6 y superiores). Para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,o.jsx)(s.em,{children:"Gesti\xf3n de las sesiones web (heredado)"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(s.p,{children:["El comando ",(0,o.jsx)(s.strong,{children:"WEB LEGACY CLOSE SESSION"})," invalida la sesi\xf3n existente designada por el par\xe1metro ",(0,o.jsx)(s.em,{children:"idSesion"}),". Si la sesi\xf3n no existe, el comando no hace nada."]}),"\n",(0,o.jsx)(s.p,{children:"Cuando este comando se llama desde un proceso web o desde cualquier otro proceso:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"la fecha de vencimiento de la cookie est\xe1 definida en 0,"}),"\n",(0,o.jsxs)(s.li,{children:["el ",(0,o.jsx)(s.a,{href:"metodo-base-on-web-legacy-close-session.md",children:"M\xe9todo base On Web Legacy Close Session"})," se llama, permiti\xe9ndole guardar la informaci\xf3n de la sesi\xf3n,"]}),"\n",(0,o.jsx)(s.li,{children:"las selecciones se borran, los registros se desbloquean y las variables se reinician."}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"Despu\xe9s de la ejecuci\xf3n de este comando, si un cliente web env\xeda una petici\xf3n con una cookie invalida, se abre una nueva sesi\xf3n con una nueva cookie y se env\xeda."}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Nota:"})," en el contexto de una sesi\xf3n 4D Mobile, el comando ",(0,o.jsx)(s.strong,{children:"WEB LEGACY CLOSE SESSION"})," cierra la sesi\xf3n 4D Mobile cuyo ID se pasa en el par\xe1metro ",(0,o.jsx)(s.em,{children:"ID"})," ",(0,o.jsx)(s.em,{children:"sesion"}),". Como una sesi\xf3n 4D Mobile puede gestionar varios procesos, este comando solicita a todos los procesos Web relacionados con la sesi\xf3n para terminar su ejecuci\xf3n."]}),"\n",(0,o.jsx)(s.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.em,{children:"Gesti\xf3n de las sesiones web (heredado)"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"metodo-base-on-web-legacy-close-session.md",children:"M\xe9todo base On Web Legacy Close Session"})]}),"\n",(0,o.jsx)(s.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"N\xfamero de comando"}),(0,o.jsx)(s.td,{children:"1208"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Hilo seguro"}),(0,o.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(t,{...e})}):t(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return a}});var i=n(667294);let o={},d=i.createContext(o);function a(e){let s=i.useContext(d);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(d.Provider,{value:s},e.children)}}}]);