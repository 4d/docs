"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65943"],{455355:function(e,s,n){n.r(s),n.d(s,{metadata:()=>r,contentTitle:()=>o,default:()=>u,assets:()=>c,toc:()=>l,frontMatter:()=>i});var r=JSON.parse('{"id":"commands-legacy/is-user-deleted","title":"Is user deleted","description":"Is user deleted ( refUsuario ) : Boolean","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/is-user-deleted.md","sourceDirName":"commands-legacy","slug":"/commands/is-user-deleted","permalink":"/docs/es/commands/is-user-deleted","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-user-deleted.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"is-user-deleted","title":"Is user deleted","slug":"/commands/is-user-deleted","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET USER PROPERTIES","permalink":"/docs/es/commands/get-user-properties"},"next":{"title":"SET GROUP ACCESS","permalink":"/docs/es/commands/set-group-access"}}'),d=n("785893"),t=n("250065");let i={id:"is-user-deleted",title:"Is user deleted",slug:"/commands/is-user-deleted",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Gesti\xf3n de errores",id:"gesti\xf3n-de-errores",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let s={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"Is user deleted"})," ( ",(0,d.jsx)(s.em,{children:"refUsuario"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Par\xe1metro"}),(0,d.jsx)(s.th,{children:"Tipo"}),(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"refUsuario"}),(0,d.jsx)(s.td,{children:"Integer"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"N\xfamero de identificaci\xf3n del usuario"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Resultado"}),(0,d.jsx)(s.td,{children:"Boolean"}),(0,d.jsx)(s.td,{children:"\u2190"}),(0,d.jsx)(s.td,{children:"TRUE = La cuenta del usuario ha sido borrada o no existe FALSE = La cuenta del usuario est\xe1 activa"})]})]})]}),"\n",(0,d.jsx)(s.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(s.p,{children:["El comando Is user deleted prueba la cuenta de usuario cuyo n\xfamero de identificaci\xf3n \xfanico se pasa en ",(0,d.jsx)(s.em,{children:"refUsuario"}),"."]}),"\n",(0,d.jsx)(s.p,{children:"Si la cuenta de usuario no existe o ha sido borrada, Is user deleted devuelve TRUE. De lo contrario, devuelve FALSE."}),"\n",(0,d.jsx)(s.h4,{id:"gesti\xf3n-de-errores",children:"Gesti\xf3n de errores"}),"\n",(0,d.jsxs)(s.p,{children:["Si no tiene privilegios de acceso para llamar al comando Is user deleted o si otro proceso abri\xf3 en el sistema de contrase\xf1as, se genera un error de privilegios de acceso. Puede interceptar este error con un m\xe9todo de gesti\xf3n de errores instalado por ",(0,d.jsx)(s.a,{href:"/docs/es/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"."]}),"\n",(0,d.jsx)(s.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.a,{href:"/docs/es/commands/delete-user",children:"DELETE USER"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/es/commands/get-user-properties",children:"GET USER PROPERTIES"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/es/commands/set-user-properties",children:"Set user properties"})]}),"\n",(0,d.jsx)(s.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"N\xfamero de comando"}),(0,d.jsx)(s.td,{children:"616"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Hilo seguro"}),(0,d.jsx)(s.td,{children:"\u2717"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Modifica variables"}),(0,d.jsx)(s.td,{children:"error"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return i}});var r=n(667294);let d={},t=r.createContext(d);function i(e){let s=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);