"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25032"],{212247:function(e,r,s){s.r(r),s.d(r,{default:()=>u,frontMatter:()=>t,metadata:()=>n,assets:()=>a,toc:()=>c,contentTitle:()=>i});var n=JSON.parse('{"id":"commands-legacy/delete-user","title":"DELETE USER","description":"DELETE USER ( refUsuario )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/delete-user.md","sourceDirName":"commands-legacy","slug":"/commands/delete-user","permalink":"/docs/es/commands/delete-user","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-user.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"delete-user","title":"DELETE USER","slug":"/commands/delete-user","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Current user","permalink":"/docs/es/commands/current-user"},"next":{"title":"EDIT ACCESS","permalink":"/docs/es/commands/edit-access"}}'),d=s("785893"),o=s("250065");let t={id:"delete-user",title:"DELETE USER",slug:"/commands/delete-user",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Gesti\xf3n de errores",id:"gesti\xf3n-de-errores",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let r={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"DELETE USER"})," ( ",(0,d.jsx)(r.em,{children:"refUsuario"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Par\xe1metro"}),(0,d.jsx)(r.th,{children:"Tipo"}),(0,d.jsx)(r.th,{}),(0,d.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,d.jsx)(r.tbody,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"refUsuario"}),(0,d.jsx)(r.td,{children:"Integer"}),(0,d.jsx)(r.td,{children:"\u2192"}),(0,d.jsx)(r.td,{children:"N\xfamero de identificaci\xf3n del usuario a borrar"})]})})]}),"\n",(0,d.jsx)(r.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(r.p,{children:["El comando DELETE USER borra el usuario cuyo n\xfamero se pasa en ",(0,d.jsx)(r.em,{children:"refUsuario"}),". Debe pasar un n\xfamero v\xe1lido de usuario devuelto por el comando ",(0,d.jsx)(r.a,{href:"/docs/es/commands/get-user-list",title:"GET USER LIST",children:"GET USER LIST"}),"."]}),"\n",(0,d.jsxs)(r.p,{children:["Si la cuenta de usuario no existe o ha sido borrada, se genera el error -9979. Puede interceptar este error con un m\xe9todo de gesti\xf3n de errores instalado por el comando ",(0,d.jsx)(r.a,{href:"/docs/es/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"."]}),"\n",(0,d.jsx)(r.p,{children:"S\xf3lo el Dise\xf1ador y el Administrador pueden borrar usuarios. El Administrador no puede borrar un usuario creado por el Dise\xf1ador."}),"\n",(0,d.jsx)(r.p,{children:"Los usuarios borrados no aparecer\xe1n m\xe1s en el editor de usuarios cuando llame a CHANGE ACCESS ni en modo Dise\xf1o. Note que los n\xfameros de usuarios borrados pueden reasignarse al crear nuevas cuentas."}),"\n",(0,d.jsx)(r.h2,{id:"gesti\xf3n-de-errores",children:"Gesti\xf3n de errores"}),"\n",(0,d.jsxs)(r.p,{children:["Si no tiene los privilegios de acceso para llamar DELETE USER o si otro proceso ya accedi\xf3 al sistema de contrase\xf1as, se genera un error de privilegios de acceso. Puede interceptar este error con un m\xe9todo de gesti\xf3n de errores instalado por el comando ",(0,d.jsx)(r.a,{href:"/docs/es/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"."]}),"\n",(0,d.jsx)(r.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/docs/es/commands/get-user-list",children:"GET USER LIST"}),(0,d.jsx)(r.br,{}),"\n",(0,d.jsx)(r.a,{href:"/docs/es/commands/get-user-properties",children:"GET USER PROPERTIES"}),(0,d.jsx)(r.br,{}),"\n",(0,d.jsx)(r.a,{href:"/docs/es/commands/is-user-deleted",children:"Is user deleted"}),(0,d.jsx)(r.br,{}),"\n",(0,d.jsx)(r.a,{href:"/docs/es/commands/set-user-properties",children:"Set user properties"})]}),"\n",(0,d.jsx)(r.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{}),(0,d.jsx)(r.th,{})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"N\xfamero de comando"}),(0,d.jsx)(r.td,{children:"615"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Hilo seguro"}),(0,d.jsx)(r.td,{children:"\u2717"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Modifica variables"}),(0,d.jsx)(r.td,{children:"error"})]})]})]})]})}function u(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return i},a:function(){return t}});var n=s(667294);let d={},o=n.createContext(d);function t(e){let r=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);