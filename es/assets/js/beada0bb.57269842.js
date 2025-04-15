"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43329"],{642598:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>t,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/load-record","title":"LOAD RECORD","description":"LOAD RECORD {( tabla )}","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/load-record.md","sourceDirName":"commands-legacy","slug":"/commands/load-record","permalink":"/docs/es/commands/load-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fload-record.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"load-record","title":"LOAD RECORD","slug":"/commands/load-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Bloqueo de registros","permalink":"/docs/es/commands/theme/Record-Locking"},"next":{"title":"Locked","permalink":"/docs/es/commands/locked"}}'),o=r("785893"),d=r("250065");let t={id:"load-record",title:"LOAD RECORD",slug:"/commands/load-record",displayed_sidebar:"docs"},a=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function i(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"LOAD RECORD"})," {( ",(0,o.jsx)(n.em,{children:"tabla"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"tabla"}),(0,o.jsx)(n.td,{children:"Table"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Tabla de la cual cargar el registro actual o Tabla por defecto si se omite"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["LOAD RECORD carga el registro actual de ",(0,o.jsx)(n.em,{children:"tabla"}),". Si no hay registro actual, LOAD RECORD no tienen ning\xfan efecto."]}),"\n",(0,o.jsxs)(n.p,{children:["Puede utilizar la funci\xf3n ",(0,o.jsx)(n.a,{href:"/docs/es/commands/locked",title:"Locked",children:"Locked"})," para determinar si puede modificar el registro:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Si la tabla est\xe1 en modo s\xf3lo lectura, la funci\xf3n ",(0,o.jsx)(n.a,{href:"/docs/es/commands/locked",title:"Locked",children:"Locked"})," devuelve TRUE, y no es posible modificar el registro."]}),"\n",(0,o.jsx)(n.li,{children:"Si la tabla est\xe1 en modo lectura/escritura pero el registro ha sido bloqueado, el registro ser\xe1 s\xf3lo lectura, y no es posible modificar el registro."}),"\n",(0,o.jsxs)(n.li,{children:["Si la tabla est\xe1 en modo lectura/escritura y el registro no est\xe1 bloqueado, es posible modificar el registro en el proceso actual. La funci\xf3n ",(0,o.jsx)(n.a,{href:"/docs/es/commands/locked",title:"Locked",children:"Locked"})," devuelve TRUE para todos los otros usuarios y procesos."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," si el comando LOAD RECORD se ejecuta despu\xe9s de un ",(0,o.jsx)(n.a,{href:"/docs/es/commands/read-only",title:"READ ONLY",children:"READ ONLY"}),", el registro se libera autom\xe1ticamente y se carga sin tener que utilizar el comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/unload-record",title:"UNLOAD RECORD",children:"UNLOAD RECORD"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Generalmente, no es necesario utilizar el comando LOAD RECORD, porque los comandos como ",(0,o.jsx)(n.a,{href:"/docs/es/commands/query",title:"QUERY",children:"QUERY"}),", ",(0,o.jsx)(n.a,{href:"/docs/es/commands/next-record",title:"NEXT RECORD",children:"NEXT RECORD"}),", ",(0,o.jsx)(n.a,{href:"/docs/es/commands/previous-record",title:"PREVIOUS RECORD",children:"PREVIOUS RECORD"}),", etc., cargan autom\xe1ticamente el registro actual."]}),"\n",(0,o.jsx)(n.p,{children:"En entornos multiusuario y multiprocesos, cuando necesite modificar un registro existente, debe acceder a la tabla (a la cual pertenece el registro) en modo lectura/escritura. Si un registro est\xe1 bloqueado y no puede ser cargado, LOAD RECORD le permite intentar cargar el registro nuevamente m\xe1s tarde. Utilizando LOAD RECORD en un bucle, puede esperar hasta que el registro est\xe9 disponible en modo lectura/escritura."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Consejo:"})," el comando LOAD RECORD puede ser utilizado para recargar el registro actual en el contexto de un formulario de entrada. Todos los datos modificados son reemplazados por los valores anteriores. En ese caso, el comando LOAD RECORD efect\xfaa en cierto modo una cancelaci\xf3n general de la entrada."]}),"\n",(0,o.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/commands/locked",children:"Locked"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.em,{children:"Record Locking"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/unload-record",children:"UNLOAD RECORD"})]}),"\n",(0,o.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"52"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return t}});var s=r(667294);let o={},d=s.createContext(o);function t(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);