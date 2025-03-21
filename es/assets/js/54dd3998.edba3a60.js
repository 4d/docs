"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49284"],{730093:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>i,assets:()=>a,toc:()=>o,contentTitle:()=>t});var i=JSON.parse('{"id":"commands-legacy/web-legacy-get-session-expiration","title":"WEB LEGACY GET SESSION EXPIRATION","description":"WEB LEGACY GET SESSION EXPIRATION ( idSesion ; fechaVenc ; horaVenc )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/web-legacy-get-session-expiration.md","sourceDirName":"commands-legacy","slug":"/commands/web-legacy-get-session-expiration","permalink":"/docs/es/20-R7/commands/web-legacy-get-session-expiration","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-legacy-get-session-expiration.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-legacy-get-session-expiration","title":"WEB LEGACY GET SESSION EXPIRATION","slug":"/commands/web-legacy-get-session-expiration","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB LEGACY CLOSE SESSION","permalink":"/docs/es/20-R7/commands/web-legacy-close-session"},"next":{"title":"WEB SEND BLOB","permalink":"/docs/es/20-R7/commands/web-send-blob"}}'),r=s("785893"),d=s("250065");let c={id:"web-legacy-get-session-expiration",title:"WEB LEGACY GET SESSION EXPIRATION",slug:"/commands/web-legacy-get-session-expiration",displayed_sidebar:"docs"},t=void 0,a={},o=[{value:"Nota de compatibilidad",id:"nota-de-compatibilidad",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WEB LEGACY GET SESSION EXPIRATION"})," ( ",(0,r.jsx)(n.em,{children:"idSesion"})," ; ",(0,r.jsx)(n.em,{children:"fechaVenc"})," ; ",(0,r.jsx)(n.em,{children:"horaVenc"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"idSesion"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"UUID de sesi\xf3n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fechaVenc"}),(0,r.jsx)(n.td,{children:"Date"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Fecha de vencimiento de la cookie"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"horaVenc"}),(0,r.jsx)(n.td,{children:"Time"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Fecha de vencimiento de la cookie"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"nota-de-compatibilidad",children:"Nota de compatibilidad"}),"\n",(0,r.jsxs)(n.p,{children:["Este comando s\xf3lo puede utilizarse con ",(0,r.jsx)(n.strong,{children:"sesiones web heredadas"}),", disponibles en bases convertidas a partir de versiones anteriores a la 4D v18 R6. Devuelve valores nulos de fecha y hora cuando se habilita el modo ",(0,r.jsx)(n.strong,{children:"sesiones web escalables"})," (recomendado en 4D v18 R6 y superiores). Para m\xe1s informaci\xf3n, consulte la secci\xf3n ",(0,r.jsx)(n.em,{children:"Gesti\xf3n de las sesiones web (heredado)"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.strong,{children:"WEB LEGACY GET SESSION EXPIRATION"})," devuelve la informaci\xf3n relativa al vencimiento de la cookie de la sesi\xf3n cuyo UUID se pas\xf3 en ",(0,r.jsx)(n.em,{children:"idSesion"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["El par\xe1metro ",(0,r.jsx)(n.em,{children:"fechaVenc"})," recibe la fecha de vencimiento y el par\xe1metro ",(0,r.jsx)(n.em,{children:"horaVenc"})," recibe la hora de vencimiento de la cookie."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," cada vez que se env\xeda una petici\xf3n web, la fecha y hora de vencimiento de la cookie se reinician en un valor correspondiente a la hora de la petici\xf3n+el valor de la opci\xf3n Web Inactive session timeout. Por ejemplo:",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Primera petici\xf3n, lunes a la 1:00"}),(0,r.jsx)(n.br,{}),"\n-> env\xeda una cookie 4DSID xxxyyy vence I+24h = martes 01:00",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Segunda"})," ",(0,r.jsx)(n.em,{children:"petici\xf3n, lunes a la"})," ",(0,r.jsx)(n.em,{children:"1:10"}),(0,r.jsx)(n.br,{}),"\n-> env\xeda una cookie 4DSID xxxyyy vence I+24h = martes 01:10",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Tercera petici\xf3n, martes a las 4:00: cookie vencida"}),(0,r.jsx)(n.br,{}),"\n-> env\xeda una cookie 4DSID aaabbb vence I+24h = mi\xe9rcoles 01:00"]}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Gesti\xf3n de las sesiones web (heredado)"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/web-get-current-session-id",children:"WEB Get current session ID"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/commands/web-set-option",children:"WEB SET OPTION"})]}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"1207"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return c}});var i=s(667294);let r={},d=i.createContext(r);function c(e){let n=i.useContext(d);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);