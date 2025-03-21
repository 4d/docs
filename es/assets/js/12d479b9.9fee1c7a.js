"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81777"],{320893:function(e,r,s){s.r(r),s.d(r,{default:()=>h,frontMatter:()=>o,metadata:()=>n,assets:()=>a,toc:()=>l,contentTitle:()=>t});var n=JSON.parse('{"id":"commands-legacy/get-user-properties","title":"GET USER PROPERTIES","description":"GET USER PROPERTIES ( refUsuario ; nombre ; inicio ; contrase\xf1a ; nbLogin ; ultimoLogin {; membrecias {; grupoPropietario}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-user-properties.md","sourceDirName":"commands-legacy","slug":"/commands/get-user-properties","permalink":"/docs/es/commands/get-user-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-user-properties.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-user-properties","title":"GET USER PROPERTIES","slug":"/commands/get-user-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET USER LIST","permalink":"/docs/es/commands/get-user-list"},"next":{"title":"Is user deleted","permalink":"/docs/es/commands/is-user-deleted"}}'),i=s("785893"),d=s("250065");let o={id:"get-user-properties",title:"GET USER PROPERTIES",slug:"/commands/get-user-properties",displayed_sidebar:"docs"},t=void 0,a={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Gesti\xf3n de errores",id:"gesti\xf3n-de-errores",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let r={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"GET USER PROPERTIES"})," ( ",(0,i.jsx)(r.em,{children:"refUsuario"})," ; ",(0,i.jsx)(r.em,{children:"nombre"})," ; ",(0,i.jsx)(r.em,{children:"inicio"})," ; ",(0,i.jsx)(r.em,{children:"contrase\xf1a"})," ; ",(0,i.jsx)(r.em,{children:"nbLogin"})," ; ",(0,i.jsx)(r.em,{children:"ultimoLogin"})," {; ",(0,i.jsx)(r.em,{children:"membrecias"})," {; ",(0,i.jsx)(r.em,{children:"grupoPropietario"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Par\xe1metro"}),(0,i.jsx)(r.th,{children:"Tipo"}),(0,i.jsx)(r.th,{}),(0,i.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"refUsuario"}),(0,i.jsx)(r.td,{children:"Integer"}),(0,i.jsx)(r.td,{children:"\u2192"}),(0,i.jsx)(r.td,{children:"N\xfamero de referencia \xfanico de usuario"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"nombre"}),(0,i.jsx)(r.td,{children:"Text"}),(0,i.jsx)(r.td,{children:"\u2190"}),(0,i.jsx)(r.td,{children:"Nombre del usuario"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"inicio"}),(0,i.jsx)(r.td,{children:"Text"}),(0,i.jsx)(r.td,{children:"\u2190"}),(0,i.jsx)(r.td,{children:"Nombre del m\xe9todo de inicio"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"contrase\xf1a"}),(0,i.jsx)(r.td,{children:"Text"}),(0,i.jsx)(r.td,{children:"\u2190"}),(0,i.jsx)(r.td,{children:"Cadena vac\xeda"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"nbLogin"}),(0,i.jsx)(r.td,{children:"Integer"}),(0,i.jsx)(r.td,{children:"\u2190"}),(0,i.jsx)(r.td,{children:"N\xfameros de usos de la base"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"ultimoLogin"}),(0,i.jsx)(r.td,{children:"Date"}),(0,i.jsx)(r.td,{children:"\u2190"}),(0,i.jsx)(r.td,{children:"Fecha de la \xfaltima utilizaci\xf3n de la base"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"membrecias"}),(0,i.jsx)(r.td,{children:"Integer array"}),(0,i.jsx)(r.td,{children:"\u2190"}),(0,i.jsx)(r.td,{children:"N\xfameros de referencia de los grupos a los que el usuario pertenece"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"grupoPropietario"}),(0,i.jsx)(r.td,{children:"Integer"}),(0,i.jsx)(r.td,{children:"\u2190"}),(0,i.jsx)(r.td,{children:"N\xfamero de referencia del grupo prioritario del usuario"})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"GET USER PROPERTIES"})," devuelve la informaci\xf3n sobre el usuario cuyo n\xfamero de referencia se pasa en el par\xe1metro ",(0,i.jsx)(r.em,{children:"refUsuario"}),". Debe pasar un n\xfamero de referencia de usuario devuelto por el comando ",(0,i.jsx)(r.a,{href:"/docs/es/commands/get-user-list",children:"GET USER LIST"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["Si la cuenta de usuario no existe o ha sido borrada, se genera el error -9979. Puede interceptar este error con un m\xe9todo de gesti\xf3n de errores instalado por ",(0,i.jsx)(r.a,{href:"/docs/es/commands/on-err-call",children:"ON ERR CALL"}),". Sino, puede llamar ",(0,i.jsx)(r.a,{href:"/docs/es/commands/is-user-deleted",children:"Is user deleted"})," para probar la cuenta de usuario antes de llamar ",(0,i.jsx)(r.strong,{children:"GET USER PROPERTIES"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["Despu\xe9s de la llamada, recupera el nombre, m\xe9todo de inicio, n\xfamero de usos y la fecha de la \xfaltima utilizaci\xf3n de la base en los par\xe1metros ",(0,i.jsx)(r.em,{children:"nombre"}),", ",(0,i.jsx)(r.em,{children:"inicio"}),", ",(0,i.jsx)(r.em,{children:"nbLogin"})," y ",(0,i.jsx)(r.em,{children:"ultimoLogin"}),"."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Notas:"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Los par\xe1metros ",(0,i.jsx)(r.em,{children:"nbLogin"})," y ",(0,i.jsx)(r.em,{children:"ultimoLogin"})," se utilizan solo en bases binarias. Siempre devuelven respectivamente 0 y 00/00/00 en las bases proyecto."]}),"\n",(0,i.jsxs)(r.li,{children:["el par\xe1metro ",(0,i.jsx)(r.em,{children:"contrase\xf1a"})," es obsoleto (siempre devuelve una cadena vac\xeda). Si desea verificar la contrase\xf1a de un usuario, utilice la funci\xf3n ",(0,i.jsx)(r.a,{href:"/docs/es/commands/validate-password",children:"Validate password"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["Si pasa el par\xe1metro opcional ",(0,i.jsx)(r.em,{children:"membresias"}),", recupera los n\xfameros de referencia \xfanicos de los grupos a los cuales pertenece el usuario."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"(B"})," ",(0,i.jsx)(r.em,{children:"ases binarias \xfanicamente)"})," Puede pasar el par\xe1metro opcional ",(0,i.jsx)(r.em,{children:"grupoProp"})," para obtener el n\xfamero de referencia del grupo \u201Cpropietario\u201D del usuario, es decir el grupo propietario por defecto de los objetos creados por este usuario."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Nota:"})," The ",(0,i.jsx)(r.em,{children:"groupOwner"})," array always returns 0 values in project databases."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Nota para bases binarias:"})," los valores de ID de grupo y usuario dependen de su creador (Dise\xf1ador, Administrador o propietario del grupo afiliado). Para m\xe1s informaci\xf3n, consulte el p\xe1rrafo ",(0,i.jsx)(r.em,{children:"Rangos de identificaciones de usuarios y grupos"}),"."]}),"\n",(0,i.jsx)(r.h2,{id:"gesti\xf3n-de-errores",children:"Gesti\xf3n de errores"}),"\n",(0,i.jsxs)(r.p,{children:["Si no tiene privilegios de acceso para llamar al comando GET USER PROPERTIES o si otro proceso abri\xf3 en el sistema de contrase\xf1as, se genera un error de privilegios de acceso. Puede interceptar este error con un m\xe9todo de gesti\xf3n de errores instalado por ",(0,i.jsx)(r.a,{href:"/docs/es/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"."]}),"\n",(0,i.jsx)(r.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/docs/es/commands/get-group-list",children:"GET GROUP LIST"}),(0,i.jsx)(r.br,{}),"\n",(0,i.jsx)(r.a,{href:"/docs/es/commands/get-user-list",children:"GET USER LIST"}),(0,i.jsx)(r.br,{}),"\n",(0,i.jsx)(r.a,{href:"/docs/es/commands/is-user-deleted",children:"Is user deleted"}),(0,i.jsx)(r.br,{}),"\n",(0,i.jsx)(r.a,{href:"/docs/es/commands/set-user-properties",children:"Set user properties"}),(0,i.jsx)(r.br,{}),"\n",(0,i.jsx)(r.a,{href:"/docs/es/commands/validate-password",children:"Validate password"})]}),"\n",(0,i.jsx)(r.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{}),(0,i.jsx)(r.th,{})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"N\xfamero de comando"}),(0,i.jsx)(r.td,{children:"611"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Hilo seguro"}),(0,i.jsx)(r.td,{children:"\u2717"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Modifica variables"}),(0,i.jsx)(r.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return t},a:function(){return o}});var n=s(667294);let i={},d=n.createContext(i);function o(e){let r=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);