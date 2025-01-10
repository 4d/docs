"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61900"],{984344:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>o,assets:()=>t,toc:()=>l,contentTitle:()=>c});var o=JSON.parse('{"id":"commands-legacy/locked","title":"Locked","description":"Locked {( tabla )} : Boolean","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/locked.md","sourceDirName":"commands-legacy","slug":"/commands/locked","permalink":"/docs/es/commands/locked","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flocked.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"locked","title":"Locked","slug":"/commands/locked","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LOAD RECORD","permalink":"/docs/es/commands/load-record"},"next":{"title":"LOCKED BY","permalink":"/docs/es/commands/locked-by"}}'),s=r("785893"),d=r("250065");let a={id:"locked",title:"Locked",slug:"/commands/locked",displayed_sidebar:"docs"},c=void 0,t={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function i(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Locked"})," {( ",(0,s.jsx)(n.em,{children:"tabla"})," )} : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tabla"}),(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Tabla en la cual verificar si el registro actual est\xe1 bloqueado o Tabla por defecto, si se omite"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"El registro est\xe1 bloqueado (TRUE), o El registro no est\xe1 bloqueado (FALSE)"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["Locked prueba si el registro actual de ",(0,s.jsx)(n.em,{children:"tabla"})," est\xe1 bloqueado. Utilice esta funci\xf3n para saber si un registro est\xe1 bloqueado o no; luego tome la acci\xf3n m\xe1s conveniente, tal como darle al usuario la opci\xf3n de esperar que el registro sea liberado o de anular al operaci\xf3n."]}),"\n",(0,s.jsxs)(n.p,{children:["Si Locked devuelve TRUE, el registro no puede guardarse porque est\xe1 bloqueado por otro usuario o proceso, o est\xe1 apilado en el proceso actual. En este caso, utilice ",(0,s.jsx)(n.a,{href:"/docs/es/commands/load-record",children:"LOAD RECORD"})," para recargar el registro hasta que Locked devuelva FALSE."]}),"\n",(0,s.jsx)(n.p,{children:"SiLocked devuelve FALSE, el registro est\xe1 desbloqueado, lo que significa que est\xe1 bloqueado para los otros usuarios. S\xf3lo el usuario local o el proceso actual puede modificar y guardar el registro. Una tabla debe estar en modo lectura/escritura si quiere modificar los registros que contiene."}),"\n",(0,s.jsxs)(n.p,{children:["Si trata de cargar un registro que ha sido borrado, Locked devuelve TRUE. Para evitar esperar por un registro que no existe, utilice el comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/locked-by",children:"LOCKED BY"}),". Si el registro ha sido borrado, el comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/locked-by",children:"LOCKED BY"})," devuelve -1 en el par\xe1metro proceso."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," Locked devuelve False cuando no hay un registro actual en ",(0,s.jsx)(n.em,{children:"tabla"}),", en otras palabras, cuando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/record-number",title:"Record number",children:"Record number"})," devuelve -1."]}),"\n",(0,s.jsxs)(n.p,{children:["Durante una transacci\xf3n, ",(0,s.jsx)(n.a,{href:"/docs/es/commands/load-record",children:"LOAD RECORD"})," y Locked se utilizan con frecuencia para probar la disponibilidad de los registros. Si un registro est\xe1 bloqueado, es com\xfan cancelar la transacci\xf3n."]}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/commands/locked-records-info",children:"Locked records info"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/load-record",children:"LOAD RECORD"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/locked-by",children:"LOCKED BY"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"Record Locking"})]}),"\n",(0,s.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"147"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return a}});var o=r(667294);let s={},d=o.createContext(s);function a(e){let n=o.useContext(d);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);