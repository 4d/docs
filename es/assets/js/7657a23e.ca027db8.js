"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5216"],{55021:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>t,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/verify-password-hash","title":"Verify password hash","description":"Verify password hash  ( contrasena ; hash ) : Boolean","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/verify-password-hash.md","sourceDirName":"commands-legacy","slug":"/commands/verify-password-hash","permalink":"/docs/es/commands/verify-password-hash","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fverify-password-hash.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"verify-password-hash","title":"Verify password hash","slug":"/commands/verify-password-hash","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"STOP MONITORING ACTIVITY","permalink":"/docs/es/commands/stop-monitoring-activity"},"next":{"title":"Transactions","permalink":"/docs/es/category/transactions"}}'),a=n("785893"),d=n("250065");let o={id:"verify-password-hash",title:"Verify password hash",slug:"/commands/verify-password-hash",displayed_sidebar:"docs"},i=void 0,t={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Gesti\xf3n de errores",id:"gesti\xf3n-de-errores",level:5},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let s={a:"a",code:"code",em:"em",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Verify password hash"}),"  ( ",(0,a.jsx)(s.em,{children:"contrasena"})," ; ",(0,a.jsx)(s.em,{children:"hash"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Par\xe1metro"}),(0,a.jsx)(s.th,{children:"Tipo"}),(0,a.jsx)(s.th,{}),(0,a.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"contrasena"}),(0,a.jsx)(s.td,{children:"Text"}),(0,a.jsx)(s.td,{children:"\u2192"}),(0,a.jsx)(s.td,{children:"La contrase\xf1a de usuario. S\xf3lo se utilizan los primeros 72 caracteres."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"hash"}),(0,a.jsx)(s.td,{children:"Text"}),(0,a.jsx)(s.td,{children:"\u2192"}),(0,a.jsx)(s.td,{children:"Un hash de contrase\xf1a."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Resultado"}),(0,a.jsx)(s.td,{children:"Boolean"}),(0,a.jsx)(s.td,{children:"\u2190"}),(0,a.jsx)(s.td,{children:"Devuelve TRUE si la contrase\xf1a y hash coinciden, de lo contrario devuelve FALSE."})]})]})]}),"\n",(0,a.jsx)(s.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(s.p,{children:["La funci\xf3n ",(0,a.jsx)(s.strong,{children:"Verify password hash"})," verifica que el hash dado coincida con la ",(0,a.jsx)(s.em,{children:"contrasena"})," dada."]}),"\n",(0,a.jsxs)(s.p,{children:["Esta funci\xf3n compara la ",(0,a.jsx)(s.em,{children:"contrasena"})," con un ",(0,a.jsx)(s.em,{children:"hash"})," generado por la funci\xf3n ",(0,a.jsx)(s.a,{href:"/docs/es/commands/generate-password-hash",children:"Generate password hash"}),"."]}),"\n",(0,a.jsx)(s.h5,{id:"gesti\xf3n-de-errores",children:"Gesti\xf3n de errores"}),"\n",(0,a.jsxs)(s.p,{children:["Se pueden devolver los errores siguientes. Puede revisar un error con los comandos ",(0,a.jsx)(s.a,{href:"/docs/es/commands/last-errors",children:"Last errors"}),"  y ",(0,a.jsx)(s.a,{href:"/docs/es/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:(0,a.jsx)(s.strong,{children:"N\xfamero"})}),(0,a.jsx)(s.th,{children:(0,a.jsx)(s.strong,{children:"Mensaje"})})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"850"}),(0,a.jsx)(s.td,{children:"Password-hash: Algoritmo no soportado."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"851"}),(0,a.jsx)(s.td,{children:"Password-hash: Fallo de verificaci\xf3n de consistencia."})]})]})]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Recordatorio"}),": solo se soporta el algoritmo bcrypt. Si su hash no se gener\xf3 utilizando bcrypt, se devuelve un error."]}),"\n",(0,a.jsx)(s.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsxs)(s.p,{children:["Este ejemplo verifica un hash de contrase\xf1a creado previamente por ",(0,a.jsx)(s.a,{href:"/docs/es/commands/generate-password-hash",children:"Generate password hash"})," y almacenado en una tabla [Users] con una contrase\xf1a introducida recientemente:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:'\xa0var $password : Text\n\xa0$password:=Request("Por favor introduzca su contrase\xf1a")\n\xa0\n\xa0If(Verify password hash($password;[Users]hash))\n\xa0\xa0\xa0\xa0ALERT("Contrase\xf1a correcta")\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("Contrase\xf1a incorrecta")\n\xa0End if\n'})}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Nota:"})," la contrase\xf1a nunca se almacena en el disco, s\xf3lo el hash. Utilizando una aplicaci\xf3n 4D remota, el hash podr\xeda ser producido del lado del cliente. Si en cambio, utiliza un front end basado en JavaScript (o similar), la mejor pr\xe1ctica para la seguridad es crear el hash del lado del servidor. Por supuesto, debe utilizar una conexi\xf3n de red cifrada TLS para la seguridad, ya que esto requiere la transferencia de la contrase\xf1a a trav\xe9s de la red."]}),"\n",(0,a.jsx)(s.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"/docs/es/commands/generate-password-hash",children:"Generate password hash"})}),"\n",(0,a.jsx)(s.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{}),(0,a.jsx)(s.th,{})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"N\xfamero de comando"}),(0,a.jsx)(s.td,{children:"1534"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Hilo seguro"}),(0,a.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return o}});var r=n(667294);let a={},d=r.createContext(a);function o(e){let s=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);