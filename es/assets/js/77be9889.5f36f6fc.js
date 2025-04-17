"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18139"],{425408:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>o,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/ldap-login","title":"LDAP LOGIN","description":"LDAP LOGIN ( url ; login ; password {; digest} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/ldap-login.md","sourceDirName":"commands-legacy","slug":"/commands/ldap-login","permalink":"/docs/es/commands/ldap-login","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fldap-login.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"ldap-login","title":"LDAP LOGIN","slug":"/commands/ldap-login","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LDAP","permalink":"/docs/es/commands/theme/LDAP"},"next":{"title":"LDAP LOGOUT","permalink":"/docs/es/commands/ldap-logout"}}'),i=r("785893"),d=r("250065");let o={id:"ldap-login",title:"LDAP LOGIN",slug:"/commands/ldap-login",displayed_sidebar:"docs"},a=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function t(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"LDAP LOGIN"})," ( ",(0,i.jsx)(n.em,{children:"url"})," ; ",(0,i.jsx)(n.em,{children:"login"})," ; ",(0,i.jsx)(n.em,{children:"password"})," {; ",(0,i.jsx)(n.em,{children:"digest"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"url"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"URL del servidor LDAP al cual conectarse"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"login"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Cuenta del usuario"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"password"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Contrase\xf1a del usuario"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"digest"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"0 = enviar contrase\xf1a en digest MD5 (por defecto), 1 = enviar contrase\xf1a sin encripci\xf3n"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.strong,{children:"LDAP LOGIN"})," abre una conexi\xf3n de s\xf3lo lectura en el servidor LDAP especificado por el par\xe1metro ",(0,i.jsx)(n.em,{children:"url"})," con los identificadores ",(0,i.jsx)(n.em,{children:"login"})," y ",(0,i.jsx)(n.em,{children:"contrase\xf1a"})," suministrados. Si es aceptado por el servidor, esta conexi\xf3n se utiliza para todas las b\xfasquedas LDAP efectuadas posteriormente en el proceso actual hasta que el comando ",(0,i.jsx)(n.em,{children:"RuntimeVLWinFolder"})," se ejecute (o hasta que el proceso se cierre)."]}),"\n",(0,i.jsxs)(n.p,{children:["En ",(0,i.jsx)(n.em,{children:"url"}),", pase el URL completo del servidor LDAP al cual conectarse, incluyendo el esquema y el puerto (389 por defecto). Este par\xe1metro debe ser compatible con la ",(0,i.jsx)(n.a,{href:"https://www.ietf.org/rfc/rfc2255.txt",children:"rfc2255"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Puede abrir conexiones seguras a trav\xe9s de TLS utilizando una mediante el uso de una ",(0,i.jsx)(n.em,{children:"url"}),' que empieza comience por "ldaps" y que utilice un n\xfamero de puerto espec\xedfico (por ejemplo "ldaps://svr.ldap.acme.com:1389"). El servidor LDAP debe tener un certificado SSL (al menos para Microsoft Active Directory). Es muy recomendable utilizar una conexi\xf3n TLS cuando se env\xeda la contrase\xf1a en texto plano (ver m\xe1s abajo).']}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," si pasa una cadena vac\xeda en el par\xe1metro ",(0,i.jsx)(n.em,{children:"url"}),", el comando intentar\xe1 conectarse al servidor LDAP predeterminado disponible en el dominio; (esta funcionalidad est\xe1 dise\xf1ada para prop\xf3sitos de prueba solamente, por razones de rendimiento no deber\xeda ser utilizada en producci\xf3n)."]}),"\n",(0,i.jsxs)(n.p,{children:["En ",(0,i.jsx)(n.em,{children:"login"}),", pase la cuenta de usuario en el servidor LDAP, y en ",(0,i.jsx)(n.em,{children:"contrase\xf1a"}),", pase la contrase\xf1a de usuario. Por defecto, el ",(0,i.jsx)(n.em,{children:"login"})," puede ser una de las siguientes cadenas de inicio de sesi\xf3n, dependiendo de la configuraci\xf3n del servidor LDAP:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'un Distinguished Name (DN), por ejemplo "CN=John Smith,OU=users,DC=example,DC=com"'}),"\n",(0,i.jsx)(n.li,{children:'un nombre de usuario (CN), por ejemplo "CN=John Smith"'}),"\n",(0,i.jsxs)(n.li,{children:['una direcci\xf3n de correo electr\xf3nico, por ejemplo "',(0,i.jsx)(n.a,{href:"mailto:johnsmith@4d.fr",children:"johnsmith@4d.fr"}),'"']}),"\n",(0,i.jsx)(n.li,{children:'un SAM-Account-Name, por ejemplo "jsmith".'}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Tenga en cuenta que los valores aceptados para el ",(0,i.jsx)(n.em,{children:"login"})," est\xe1n relacionadas con el modo de transmisi\xf3n de la contrase\xf1a definido por el par\xe1metro ",(0,i.jsx)(n.em,{children:"digest"}),". Por ejemplo, en una configuraci\xf3n por defecto de MS Active Directory:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Cuando el modo de transmisi\xf3n es LDAP password MD5, el \xfanico valor aceptado para un inicio de sesi\xf3n es el SAM-Account-Name."}),"\n",(0,i.jsxs)(n.li,{children:["Cuando el modo de transmisi\xf3n es LDAP password plain text (texto plano), el par\xe1metro ",(0,i.jsx)(n.em,{children:"login"}),' puede ser DN, CN o una direcci\xf3n de correo electr\xf3nico. Un SAM-Account-Name tambi\xe9n se acepta, pero s\xf3lo cuando es precedido por el nombre de dominio (por ejemplo, (for example "dc-acme.com/jsmith").']}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["El par\xe1metro ",(0,i.jsx)(n.em,{children:"digest"})," le permite modificar la forma en que la contrase\xf1a se transmite por la red. Puede utilizar una de las siguientes constantes, ubicadas en el tema ",(0,i.jsx)(n.em,{children:"LDAP"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Valor"}),(0,i.jsx)(n.th,{children:"Comentario"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"LDAP password MD5"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"(Por defecto) Enviar contrase\xf1a encriptada en MD5"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"LDAP password plain text"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Env\xedo de contrase\xf1a sin encripci\xf3n (conexi\xf3n TLS recomendada)"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Por defecto, la ",(0,i.jsx)(n.em,{children:"contrase\xf1a"})," se transmite en digest MD5. Pase LDAP password plain text si es necesario, por ejemplo, si desea utilizar diferentes valores de tipo de inicio de sesi\xf3n con el servidor LDAP. En un entorno de producci\xf3n, se recomienda utilizar una conexi\xf3n TLS para la ",(0,i.jsx)(n.em,{children:"url"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," la autenticaci\xf3n con una contrase\xf1a vac\xeda permite introducir el modo de conexi\xf3n an\xf3nima (si est\xe1 autorizado por el servidor LDAP). Sin embargo, en este modo, se pueden generar errores si se intenta realizar cualquier operaci\xf3n que no est\xe9 permitida en este modo espec\xedfico."]}),"\n",(0,i.jsx)(n.p,{children:"Si los par\xe1metros de inicio de sesi\xf3n son v\xe1lidos, una conexi\xf3n con el servidor LDAP se abre en el proceso 4D. Luego puede buscar y recuperar informaci\xf3n utilizando los comandos LDAP."}),"\n",(0,i.jsxs)(n.p,{children:["No olvide llamar al comando ",(0,i.jsx)(n.em,{children:"RuntimeVLWinFolder"})," cuando la conexi\xf3n al servidor LDAP ya no sea necesaria."]}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,i.jsx)(n.p,{children:"Usted quiere conectarse a un servidor LDAP y efectuar una b\xfasqueda:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($_tabAttributes;0)\n\xa0APPEND TO ARRAY($_tabAttributes;"cn")\n\xa0APPEND TO ARRAY($_tabAttributes;"phoneNumber")\n\xa0LDAP LOGIN("ldap://srv.dc.acme.com:389";"John Smith";"qrnSurBret2elburg")\n\xa0$vfound:=LDAP Search("OU=UO_Users,DC=ACME,DC=com";\u201Dcn=John Doe";LDAP all levels;$_tabAttributes)\n\xa0LDAP LOGOUT\xa0//no olvide desconectarse\n'})}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,i.jsx)(n.p,{children:"Este ejemplo intenta conectarse a una aplicaci\xf3n:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0ON ERR CALL("ErrHdlr")\xa0//gesti\xf3n de errores\n\xa0errOccured:=False\n\xa0errMsg:=""\n\xa0If(ppBindMode=1)\xa0//si contrase\xf1a es modo por defecto\n\xa0\xa0\xa0\xa0LDAP LOGIN(vUrlLdap;vUserCN;vPwd;LDAP password MD5)\n\xa0Else\n\xa0\xa0\xa0\xa0LDAP LOGIN(vUrlLdap;vUserCN;vPwd;LDAP password plain text)\n\xa0End if\n\xa0\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Not(errOccured))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Ahora est\xe1 conectado a su servidor LDAP.\xa0 ")\n\xa0\n\xa0\xa0\xa0\xa0:(errOccured)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Errores en sus par\xe1metros")\n\xa0End case\n\xa0\n\xa0LDAP LOGOUT\n\xa0ON ERR CALL("")\n'})}),"\n",(0,i.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"LDAP"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/ldap-logout",children:"LDAP LOGOUT"})]}),"\n",(0,i.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"1326"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return o}});var s=r(667294);let i={},d=s.createContext(i);function o(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);