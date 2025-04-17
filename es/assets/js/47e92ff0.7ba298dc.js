"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["39417"],{994873:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>d,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>t});var r=JSON.parse('{"id":"commands-legacy/get-user-list","title":"GET USER LIST","description":"GET USER LIST ( nomsUsuario ; refUsuario )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-user-list.md","sourceDirName":"commands-legacy","slug":"/commands/get-user-list","permalink":"/docs/es/20-R8/commands/get-user-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-user-list.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-user-list","title":"GET USER LIST","slug":"/commands/get-user-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get plugin access","permalink":"/docs/es/20-R8/commands/get-plugin-access"},"next":{"title":"GET USER PROPERTIES","permalink":"/docs/es/20-R8/commands/get-user-properties"}}'),i=n("785893"),o=n("250065");let d={id:"get-user-list",title:"GET USER LIST",slug:"/commands/get-user-list",displayed_sidebar:"docs"},t=void 0,a={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Gesti\xf3n de errores",id:"gesti\xf3n-de-errores",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let s={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"GET USER LIST"})," ( ",(0,i.jsx)(s.em,{children:"nomsUsuario"})," ; ",(0,i.jsx)(s.em,{children:"refUsuario"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Par\xe1metro"}),(0,i.jsx)(s.th,{children:"Tipo"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"nomsUsuario"}),(0,i.jsx)(s.td,{children:"Text array"}),(0,i.jsx)(s.td,{children:"\u2190"}),(0,i.jsx)(s.td,{children:"Nombres de los usuarios tal como aparecen en el editor de contrase\xf1as"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"refUsuario"}),(0,i.jsx)(s.td,{children:"Integer array"}),(0,i.jsx)(s.td,{children:"\u2190"}),(0,i.jsx)(s.td,{children:"N\xfameros de referencia \xfanicos para cada usuario"})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(s.p,{children:["GET USER LIST llena los arrays ",(0,i.jsx)(s.em,{children:"nomsUsuario"})," y ",(0,i.jsx)(s.em,{children:"refUsuario"})," con los nombres y los n\xfameros de referencia \xfanicos de los usuarios tal como aparecen en la ventana de contrase\xf1as."]}),"\n",(0,i.jsxs)(s.p,{children:["El array ",(0,i.jsx)(s.em,{children:"nomsUsuario"})," se llena con los nombres de usuarios mostrados en la ventana de contrase\xf1as, incluyendo los usuarios cuyas cuentas est\xe1n desactivadas (los nombres de los usuarios mostrados en verde en la ventana de contrase\xf1as)."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Nota:"})," utilice el comando ",(0,i.jsx)(s.a,{href:"/docs/es/20-R8/commands/is-user-deleted",children:"Is user deleted"})," para detectar los usuarios borrados."]}),"\n",(0,i.jsxs)(s.p,{children:["El array ",(0,i.jsx)(s.em,{children:"refUsuario"}),", sincronizado con ",(0,i.jsx)(s.em,{children:"nomsUsuario"}),", se llena con los n\xfameros de referencia \xfanicos de los usuarios."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Nota para bases de datos binarias"}),": los valores de ID de grupo y usuario dependen de su creador (Dise\xf1ador, Administrador o propietario del grupo afiliado). Para m\xe1s informaci\xf3n, consulte el p\xe1rrafo ",(0,i.jsx)(s.em,{children:"Rangos de identificaciones de usuarios y grupos"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"gesti\xf3n-de-errores",children:"Gesti\xf3n de errores"}),"\n",(0,i.jsxs)(s.p,{children:["Si no tiene privilegios de acceso para llamar al comando GET USER LIST o si otro proceso abri\xf3 en el sistema de contrase\xf1as, se genera un error de privilegios de acceso. Puede interceptar este error con un m\xe9todo de gesti\xf3n de errores instalado por ",(0,i.jsx)(s.a,{href:"/docs/es/20-R8/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/es/20-R8/commands/get-group-list",children:"GET GROUP LIST"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/es/20-R8/commands/get-user-properties",children:"GET USER PROPERTIES"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/es/20-R8/commands/set-user-properties",children:"Set user properties"})]}),"\n",(0,i.jsx)(s.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"N\xfamero de comando"}),(0,i.jsx)(s.td,{children:"609"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Hilo seguro"}),(0,i.jsx)(s.td,{children:"\u2717"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Modifica variables"}),(0,i.jsx)(s.td,{children:"error"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return t},a:function(){return d}});var r=n(667294);let i={},o=r.createContext(i);function d(e){let s=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);