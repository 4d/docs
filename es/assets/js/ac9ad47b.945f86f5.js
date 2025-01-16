"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52199"],{554124:function(e,n,i){i.r(n),i.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>t});var s=JSON.parse('{"id":"commands-legacy/web-service-authenticate","title":"WEB SERVICE AUTHENTICATE","description":"WEB SERVICE AUTHENTICATE ( nombre ; contrase\xf1a {; metAutenticacion} {; *} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/web-service-authenticate.md","sourceDirName":"commands-legacy","slug":"/commands/web-service-authenticate","permalink":"/docs/es/commands/web-service-authenticate","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-service-authenticate.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"web-service-authenticate","title":"WEB SERVICE AUTHENTICATE","slug":"/commands/web-service-authenticate","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Web Services (Client)","permalink":"/docs/es/category/web-services-client"},"next":{"title":"WEB SERVICE CALL","permalink":"/docs/es/commands/web-service-call"}}'),c=i("785893"),a=i("250065");let r={id:"web-service-authenticate",title:"WEB SERVICE AUTHENTICATE",slug:"/commands/web-service-authenticate",displayed_sidebar:"docs"},t=void 0,d={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"WEB SERVICE AUTHENTICATE"})," ( ",(0,c.jsx)(n.em,{children:"nombre"})," ; ",(0,c.jsx)(n.em,{children:"contrase\xf1a"})," {; ",(0,c.jsx)(n.em,{children:"metAutenticacion"}),"} {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Par\xe1metro"}),(0,c.jsx)(n.th,{children:"Tipo"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"nombre"}),(0,c.jsx)(n.td,{children:"Text"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"Nombre del usuario"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"contrase\xf1a"}),(0,c.jsx)(n.td,{children:"Text"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"Contrase\xf1a del usuario"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"metAutenticacion"}),(0,c.jsx)(n.td,{children:"Integer"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"M\xe9todo de Autenticaci\xf3n 0 u omitido = no especificado, 1 = BASIC, 2 = DIGEST"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"*"}),(0,c.jsx)(n.td,{children:"Operador"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"Si se pasa: autenticaci\xf3n por proxy"})]})]})]}),"\n",(0,c.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,c.jsxs)(n.p,{children:["El comando ",(0,c.jsx)(n.strong,{children:"WEB SERVICE AUTHENTICATE"}),"  permite utilizar los servicios web que necesitan de la autenticaci\xf3n de la aplicaci\xf3n cliente. Los m\xe9todos BASIC y DIGEST son soportados."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Nota:"})," para m\xe1s informaci\xf3n sobre los m\xe9todos de autenticaci\xf3n BASIC y DIGEST, por favor revise la secci\xf3n ",(0,c.jsx)(n.em,{children:"Seguridad de las conexiones"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["En los par\xe1metros ",(0,c.jsx)(n.em,{children:"nombre"})," y ",(0,c.jsx)(n.em,{children:"contrase\xf1a"}),", pase la informaci\xf3n de identificaci\xf3n requerida (nombre de usuario y contrase\xf1a). Esta informaci\xf3n ser\xe1 codificada y a\xf1adida a la petici\xf3n HTTP enviada al servicio web utilizando el comando ",(0,c.jsx)(n.a,{href:"/docs/es/commands/web-service-call",children:"WEB SERVICE CALL"}),". Es entonces necesario llamar al comando ",(0,c.jsx)(n.strong,{children:"WEB SERVICE AUTHENTICATE"})," antes de llamar al comando ",(0,c.jsx)(n.a,{href:"/docs/es/commands/web-service-call",children:"WEB SERVICE CALL"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["La informaci\xf3n de autenticaci\xf3n se reinicializa en cero despu\xe9s de cada petici\xf3n. Por lo tanto, debe utilizar el comando ",(0,c.jsx)(n.strong,{children:"WEB SERVICE AUTHENTICATE"})," antes de llamar al comando ",(0,c.jsx)(n.a,{href:"/docs/es/commands/web-service-call",children:"WEB SERVICE CALL"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["El par\xe1metro opcional metAutenticacion permite indicar el m\xe9todo de autenticaci\xf3n a utilizar para la pr\xf3xima llamada del comando ",(0,c.jsx)(n.a,{href:"/docs/es/commands/web-service-call",children:"WEB SERVICE CALL"}),". Puede pasar uno de los siguientes valores:"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"2 = utilizar el m\xe9todo de autenticaci\xf3n DIGEST"}),"\n",(0,c.jsx)(n.li,{children:"1 = utilizar el m\xe9todo de autenticaci\xf3n BASIC"}),"\n",(0,c.jsx)(n.li,{children:"0 (\xf3 se omite el par\xe1metro) = utilizar el m\xe9todo apropiado. En este caso, 4D env\xeda una petici\xf3n adicional para negociar el m\xe9todo de autenticaci\xf3n."}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["Por defecto, la informaci\xf3n de autenticaci\xf3n se reinicia despu\xe9s de cada petici\xf3n. Por lo tanto, debe utilizar el comando ",(0,c.jsx)(n.strong,{children:"WEB SERVICE AUTHENTICATE"})," antes de cada comando ",(0,c.jsx)(n.a,{href:"/docs/es/commands/web-service-call",children:"WEB SERVICE CALL"}),". Sin embargo es posible conservar temporalmente esta informaci\xf3n utilizando una opci\xf3n del comando ",(0,c.jsx)(n.a,{href:"/docs/es/commands/web-service-set-option",children:"WEB SERVICE SET OPTION"}),". En este caso, no es necesario ejecutar el comando ",(0,c.jsx)(n.strong,{children:"WEB SERVICE AUTHENTICATE"})," antes de cada ",(0,c.jsx)(n.a,{href:"/docs/es/commands/web-service-call",children:"WEB SERVICE CALL"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["Si la autenticaci\xf3n falla, el servidor SOAP devuelve un error que puede identificar utilizando el comando ",(0,c.jsx)(n.a,{href:"/docs/es/commands/web-service-get-info",children:"WEB SERVICE Get info"}),"."]}),"\n",(0,c.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,c.jsx)(n.p,{children:"Autenticaci\xf3n con un servicio web ubicado detr\xe1s de un proxy:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Autenticaci\xf3n al servicio web en modo DIGEST\n\xa0WEB SERVICE AUTHENTICATE("SoapUser";"123";2)\n\xa0\xa0// Autenticaci\xf3n al proxy en modo por defecto\n\xa0WEB SERVICE AUTHENTICATE("ProxyUser";"456";*)\n\xa0WEB SERVICE CALL(...)\n'})}),"\n",(0,c.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/es/commands/web-service-call",children:"WEB SERVICE CALL"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/es/commands/web-service-get-info",children:"WEB SERVICE Get info"})]}),"\n",(0,c.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"N\xfamero de comando"}),(0,c.jsx)(n.td,{children:"786"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Hilo seguro"}),(0,c.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return t},a:function(){return r}});var s=i(667294);let c={},a=s.createContext(c);function r(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);