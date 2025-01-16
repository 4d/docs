"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91677"],{87927:function(e,s,t){t.r(s),t.d(s,{default:()=>p,frontMatter:()=>a,metadata:()=>n,assets:()=>d,toc:()=>o,contentTitle:()=>c});var n=JSON.parse('{"id":"commands-legacy/http-set-certificates-folder","title":"HTTP SET CERTIFICATES FOLDER","description":"HTTP SET CERTIFICATES FOLDER ( carpetaCertificados )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/http-set-certificates-folder.md","sourceDirName":"commands-legacy","slug":"/commands/http-set-certificates-folder","permalink":"/docs/es/20-R7/commands/http-set-certificates-folder","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fhttp-set-certificates-folder.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"http-set-certificates-folder","title":"HTTP SET CERTIFICATES FOLDER","slug":"/commands/http-set-certificates-folder","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"HTTP Request","permalink":"/docs/es/20-R7/commands/http-request"},"next":{"title":"HTTP SET OPTION","permalink":"/docs/es/20-R7/commands/http-set-option"}}'),r=t("785893"),i=t("250065");let a={id:"http-set-certificates-folder",title:"HTTP SET CERTIFICATES FOLDER",slug:"/commands/http-set-certificates-folder",displayed_sidebar:"docs"},c=void 0,d={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Certificados SSL",id:"certificados-ssl",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let s={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"HTTP SET CERTIFICATES FOLDER"})," ( ",(0,r.jsx)(s.em,{children:"carpetaCertificados"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe1metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"carpetaCertificados"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Ruta y nombre de la carpeta de certificados del cliente"})]})})]}),"\n",(0,r.jsx)(s.admonition,{title:"Compatibilidad",type:"info",children:(0,r.jsxs)(s.p,{children:["Este comando se mantiene s\xf3lo por razones de compatibilidad. Ahora se recomienda utilizar ",(0,r.jsx)(s.a,{href:"/docs/es/20-R7/API/HTTPRequestClass",children:(0,r.jsx)(s.code,{children:"4D.HTTPRequest class"})}),"."]})}),"\n",(0,r.jsx)(s.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(s.p,{children:["El comando ",(0,r.jsx)(s.strong,{children:"HTTP SET CERTIFICATES FOLDER"})," permite modificar la carpeta de certificados cliente activa para el conjunto de los procesos en la sesi\xf3n actual."]}),"\n",(0,r.jsxs)(s.p,{children:["La carpeta de certificados cliente es en la cual 4D busca los archivos de certificados cliente que son requeridos por los servidores web. Por defecto, siempre y cuando el comando ",(0,r.jsx)(s.strong,{children:"HTTP SET CERTIFICATES FOLDER"}),' no se ejecute, 4D utiliza una carpeta llamada "ClientCertificatesFolder " que se crea junto al archivo de estructura. Esta carpeta se crea \xfanicamente cuando es necesario.']}),"\n",(0,r.jsx)(s.p,{children:"En 4D v14, ahora es posible utilizar varios certificados clientes."}),"\n",(0,r.jsxs)(s.p,{children:["En ",(0,r.jsx)(s.em,{children:"carpetaCertificados"}),", pase la ruta de acceso de la carpeta personalizada que contiene los certificados clientes. Puede pasar una ruta de acceso relativa al archivo de estructura de la aplicaci\xf3n, o una ruta de acceso absoluta. La ruta debe ser expresada con la sintaxis del sistema, por ejemplo:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"(OS X): Disk:Applications:myserv:folder"}),"\n",(0,r.jsx)(s.li,{children:"(Windows): C:\\Applications\\myserv\\folder"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Una vez ejecutado este comando, la nueva ruta se tiene en cuenta inmediatamente por comandos tales como ",(0,r.jsx)(s.a,{href:"/docs/es/20-R7/commands/http-request",children:"HTTP Request"})," que se ejecuten despu\xe9s (no es necesario reiniciar la aplicaci\xf3n). Se utiliza en todos los procesos de la base."]}),"\n",(0,r.jsxs)(s.p,{children:["Si la carpeta especificada no existe en la ubicaci\xf3n definida, o si la ruta de acceso pasada en ",(0,r.jsx)(s.em,{children:"carpetaCertificados"})," no es v\xe1lida, se genera un error. Puede interceptar este error utilizando un m\xe9todo de gesti\xf3n de errores instalado por el comando ",(0,r.jsx)(s.a,{href:"/docs/es/20-R7/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"certificados-ssl",children:"Certificados SSL"}),"\n",(0,r.jsxs)(s.p,{children:["Como se describe en ",(0,r.jsx)(s.a,{href:"/docs/es/20-R7/Admin/tls",children:"esta p\xe1gina"}),", los certificados SSL gestionados por 4D 4D deben estar en ",(0,r.jsx)(s.strong,{children:"PEM format"}),". Si su proveedor de certificados (por ejemplo, ",(0,r.jsx)(s.a,{href:"https://www.startssl.com/",children:"startssl"}),") le env\xeda un certificado que est\xe1 en un formato binario como .crt, .pfx o .p12 (el formato tambi\xe9n depende de su navegador), tiene que convertirlo al formato PEM para utilizarlo. Hay sitios web como ",(0,r.jsx)(s.em,{children:"sslshopper"})," donde puede hacer esta conversi\xf3n en l\xednea."]}),"\n",(0,r.jsx)(s.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(s.p,{children:"Usted quiere cambiar temporalmente la carpeta de certificados:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0var $certifFolder : Text\n\xa0$certifFolder :=HTTP Get certificates folder\xa0//guardar carpeta actual\n\xa0HTTP SET CERTIFICATES FOLDER("C:/temp/certifTempo/")\n\xa0...\xa0// ejecuci\xf3n de peticiones espec\xedficas\n\xa0HTTP SET CERTIFICATES FOLDER($certifFolder)\xa0//restablecer la carpeta anterior\n'})}),"\n",(0,r.jsx)(s.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/es/20-R7/commands/generate-certificate-request",children:"GENERATE CERTIFICATE REQUEST"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/es/20-R7/commands/http-get-certificates-folder",children:"HTTP Get certificates folder"})]}),"\n",(0,r.jsx)(s.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"N\xfamero de comando"}),(0,r.jsx)(s.td,{children:"1306"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Hilo seguro"}),(0,r.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function p(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,s,t){t.d(s,{Z:function(){return c},a:function(){return a}});var n=t(667294);let r={},i=n.createContext(r);function a(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);