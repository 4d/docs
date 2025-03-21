"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["44446"],{17231:function(e,r,s){s.r(r),s.d(r,{default:()=>u,frontMatter:()=>o,metadata:()=>n,assets:()=>t,toc:()=>c,contentTitle:()=>d});var n=JSON.parse('{"id":"commands-legacy/set-user-properties","title":"Set user properties","description":"Set user properties ( refUsuario ; nombre ; inicio ; contrase\xf1a ; nbLogin ; ultimoLogin {; membrecias {; grupoPropietario}} ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-user-properties.md","sourceDirName":"commands-legacy","slug":"/commands/set-user-properties","permalink":"/docs/es/commands/set-user-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-user-properties.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-user-properties","title":"Set user properties","slug":"/commands/set-user-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET USER ALIAS","permalink":"/docs/es/commands/set-user-alias"},"next":{"title":"User in group","permalink":"/docs/es/commands/user-in-group"}}'),a=s("785893"),i=s("250065");let o={id:"set-user-properties",title:"Set user properties",slug:"/commands/set-user-properties",displayed_sidebar:"docs"},d=void 0,t={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Gesti\xf3n de errores",id:"gesti\xf3n-de-errores",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let r={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Set user properties"})," ( ",(0,a.jsx)(r.em,{children:"refUsuario"})," ; ",(0,a.jsx)(r.em,{children:"nombre"})," ; ",(0,a.jsx)(r.em,{children:"inicio"})," ; ",(0,a.jsx)(r.em,{children:"contrase\xf1a"})," ; ",(0,a.jsx)(r.em,{children:"nbLogin"})," ; ",(0,a.jsx)(r.em,{children:"ultimoLogin"})," {; ",(0,a.jsx)(r.em,{children:"membrecias"})," {; ",(0,a.jsx)(r.em,{children:"grupoPropietario"}),"}} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Par\xe1metro"}),(0,a.jsx)(r.th,{children:"Tipo"}),(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"refUsuario"}),(0,a.jsx)(r.td,{children:"Integer"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"N\xfamero de referencia \xfanico de cuenta de usuario, -1 para a\xf1adir un usuario"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"\u2190"}),(0,a.jsx)(r.td,{children:"N\xfamero de referencia \xfanico de la cuenta de usuario a\xf1adida(si la hay)"}),(0,a.jsx)(r.td,{}),(0,a.jsx)(r.td,{})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"nombre"}),(0,a.jsx)(r.td,{children:"Text"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Nuevo nombre de usuario"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"inicio"}),(0,a.jsx)(r.td,{children:"Text"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Nombre del nuevo m\xe9todo de inicio"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"contrase\xf1a"}),(0,a.jsx)(r.td,{children:"Text"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Nueva contrase\xf1a (encriptada) o * para no modificar la contrase\xf1a"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"nbLogin"}),(0,a.jsx)(r.td,{children:"Integer"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Nuevo n\xfamero de usos de la base"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"ultimoLogin"}),(0,a.jsx)(r.td,{children:"Date"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Nueva fecha de la \xfaltima utilizaci\xf3n de la base"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"membrecias"}),(0,a.jsx)(r.td,{children:"Integer array"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"N\xfameros de referencia de los grupos a los que pertenece el usuario"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"grupoPropietario"}),(0,a.jsx)(r.td,{children:"Integer"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"N\xfamero de referencia del grupo propietario del usuario"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Resultado"}),(0,a.jsx)(r.td,{children:"Integer"}),(0,a.jsx)(r.td,{children:"\u2190"}),(0,a.jsx)(r.td,{children:"N\xfamero de referencia \xfanico del nuevo usuario"})]})]})]}),"\n",(0,a.jsx)(r.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(r.p,{children:["Set user properties permite modificar y actualizar las propiedades de una cuenta activa de usuario existente cuyo n\xfamero de referencia se pasa en el par\xe1metro ",(0,a.jsx)(r.em,{children:"refUsuario"})," o para a\xf1adir un nuevo usuario."]}),"\n",(0,a.jsxs)(r.p,{children:["Si cambia las propiedades de un usuario existente, debe pasar el n\xfamero de referencia devuelto por el comando ",(0,a.jsx)(r.a,{href:"/docs/es/commands/get-user-list",children:"GET USER LIST"}),". Si la cuenta de usuario no existe o se ha borrado, se genera el error -9979. Puede interceptar este error con un m\xe9todo de gesti\xf3n de errores instalado utilizando ",(0,a.jsx)(r.a,{href:"/docs/es/commands/on-err-call",children:"ON ERR CALL"}),". De lo contrario, puede llamar ",(0,a.jsx)(r.a,{href:"/docs/es/commands/is-user-deleted",children:"Is user deleted"})," para probar la cuenta de usuario antes de llamar Set user properties."]}),"\n",(0,a.jsxs)(r.p,{children:["Para a\xf1adir un nuevo usuario, pase -1 en ",(0,a.jsx)(r.em,{children:"refUsuario"})," (ver tambi\xe9n las notas abajo para bases binarias)."]}),"\n",(0,a.jsxs)(r.p,{children:["Despu\xe9s de la llamada, si el usuario se a\xf1ade o modifica con \xe9xito, su n\xfamero de referencia \xfanico es devuelto en ",(0,a.jsx)(r.em,{children:"refUsuario"})," ."]}),"\n",(0,a.jsx)(r.p,{children:"Si no pasa -1, -2 o un n\xfamero de referencia de usuario v\xe1lido, Set user properties no hace nada."}),"\n",(0,a.jsxs)(r.p,{children:["Antes de llamar este comando, pase el nuevo nombre, m\xe9todo de inicio, contrase\xf1a, n\xfamero de usos y la fecha del \xfaltimo uso del usuario, en ",(0,a.jsx)(r.em,{children:"nombre"}),", ",(0,a.jsx)(r.em,{children:"inicio"}),", ",(0,a.jsx)(r.em,{children:"contrase\xf1a"}),", ",(0,a.jsx)(r.em,{children:"nbLogin"})," y ",(0,a.jsx)(r.em,{children:"ultimoLogin"}),". Pase una contrase\xf1a no encriptada en el par\xe1metro ",(0,a.jsx)(r.em,{children:"contrase\xf1a"}),". 4D la encriptar\xe1 por usted antes de guardarla en la cuenta de usuario.",(0,a.jsx)(r.br,{}),"\nSi el nuevo nombre de usuario pasado en ",(0,a.jsx)(r.em,{children:"nombre"})," no es \xfanico (existe un usuario con el mismo nombre), el comando no hace nada y se devuelve el error -9979. Puede interceptar este error con un m\xe9todo de gesti\xf3n de errores instalado por ",(0,a.jsx)(r.a,{href:"/docs/es/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Nota:"})," los par\xe1metros ",(0,a.jsx)(r.em,{children:"nbLogin"})," y ",(0,a.jsx)(r.em,{children:"ultimoLogin"})," se utilizan solo en bases binarias. Se ignoran en las bases proyecto."]}),"\n",(0,a.jsxs)(r.p,{children:["Si no quiere cambiar todas las propiedades del usuario (a parte de su grupo, ver a continuaci\xf3n), primero llame ",(0,a.jsx)(r.a,{href:"/docs/es/commands/get-user-properties",children:"GET USER PROPERTIES"})," y pase los valores devueltos para las propiedades que no quiere cambiar."]}),"\n",(0,a.jsxs)(r.p,{children:["Si no quiere modificar la contrase\xf1a de una cuenta, pase el s\xedmbolo * en el par\xe1metro ",(0,a.jsx)(r.em,{children:"contrase\xf1a"}),". Esto le permite cambiar otras propiedades de la cuenta del usuario sin cambiar la contrase\xf1a de la cuenta."]}),"\n",(0,a.jsxs)(r.p,{children:["Si no pasa el par\xe1metro opcional ",(0,a.jsx)(r.em,{children:"membrecias"}),", las membrec\xedas actuales del usuario permanecen iguales. Si no pasa ",(0,a.jsx)(r.em,{children:"membrecias"})," cuando a\xf1ade un usuario, el usuario no formar\xe1 parte de ning\xfan grupo.",(0,a.jsx)(r.br,{}),"\nSi pasa el par\xe1metro opcional ",(0,a.jsx)(r.em,{children:"membrecias"}),", cambia todas las membrec\xedas para el usuario. Antes de llamar este comando, debe llenar el array ",(0,a.jsx)(r.em,{children:"membrecias"})," con los n\xfameros de referencia \xfanicos de los grupos cuyos usuarios har\xe1n parte."]}),"\n",(0,a.jsxs)(r.p,{children:["(",(0,a.jsx)(r.em,{children:"B"})," ",(0,a.jsx)(r.em,{children:"ases binarias \xfanicamente"}),") Si pasa el par\xe1metro opcional ",(0,a.jsx)(r.em,{children:"grupoPropietario"}),", indica el n\xfamero de referencia del grupo \u201Cpropietario\u201D, del usuario, es decir el grupo propietario por defecto de los objetos creados por este usuario. Para anular todas las membrec\xedas de un usuario, pase un array vac\xedo en el par\xe1metro ",(0,a.jsx)(r.em,{children:"membrecias"}),"."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Nota para bases binarias:"})," los valores de ID de grupo y usuario dependen de su creador (Dise\xf1ador, Administrador o propietario del grupo afiliado). Para m\xe1s informaci\xf3n, consulte el p\xe1rrafo ",(0,a.jsx)(r.em,{children:"Rangos de identificaciones de usuarios y grupos"}),". Para crear un usuario afiliado al Dise\xf1ador, pase -1 en refUsuario. Para crear un usuario afiliado con el Administrador, pase -2 en refUsuario."]}),"\n",(0,a.jsx)(r.h2,{id:"gesti\xf3n-de-errores",children:"Gesti\xf3n de errores"}),"\n",(0,a.jsxs)(r.p,{children:["Si no tiene privilegios de acceso para llamar al comando Set user properties o si otro proceso abri\xf3 en el sistema de contrase\xf1as, se genera un error de privilegios de acceso. Puede interceptar este error con un m\xe9todo de gesti\xf3n de errores instalado por ",(0,a.jsx)(r.a,{href:"/docs/es/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"."]}),"\n",(0,a.jsx)(r.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"/docs/es/commands/delete-user",children:"DELETE USER"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"/docs/es/commands/get-group-list",children:"GET GROUP LIST"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"/docs/es/commands/get-user-list",children:"GET USER LIST"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"/docs/es/commands/get-user-properties",children:"GET USER PROPERTIES"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"/docs/es/commands/is-user-deleted",children:"Is user deleted"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"/docs/es/commands/validate-password",children:"Validate password"})]}),"\n",(0,a.jsx)(r.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"N\xfamero de comando"}),(0,a.jsx)(r.td,{children:"612"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Hilo seguro"}),(0,a.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return d},a:function(){return o}});var n=s(667294);let a={},i=n.createContext(a);function o(e){let r=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);