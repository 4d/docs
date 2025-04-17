"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84365"],{869345:function(e,i,r){r.r(i),r.d(i,{default:()=>u,frontMatter:()=>s,metadata:()=>n,assets:()=>d,toc:()=>l,contentTitle:()=>c});var n=JSON.parse('{"id":"Admin/tls","title":"Protocolo TLS (HTTPS)","description":"Todos los servidores 4D pueden comunicarse en modo seguro a trav\xe9s del protocolo TLS (Transport Layer Security):","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/Admin/tls.md","sourceDirName":"Admin","slug":"/Admin/tls","permalink":"/docs/es/20-R8/Admin/tls","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Admin%2Ftls.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"tls","title":"Protocolo TLS (HTTPS)"},"sidebar":"docs","previous":{"title":"Command Line Interface","permalink":"/docs/es/20-R8/Admin/cli"},"next":{"title":"Managing 4D Licenses","permalink":"/docs/es/20-R8/Admin/licenses"}}'),a=r("785893"),o=r("250065");let s={id:"tls",title:"Protocolo TLS (HTTPS)"},c=void 0,d={},l=[{value:"Generalidades",id:"generalidades",level:2},{value:"Versi\xf3n m\xednima",id:"versi\xf3n-m\xednima",level:2},{value:"Habilitar TLS con el servidor HTTP",id:"habilitar-tls-con-el-servidor-http",level:2},{value:"Certificados",id:"certificados",level:3},{value:"Formato",id:"formato",level:4},{value:"Encripci\xf3n",id:"encripci\xf3n",level:4},{value:"Instalaci\xf3n de archivos de certificados",id:"instalaci\xf3n-de-archivos-de-certificados",level:3},{value:"Activar TLS",id:"activar-tls",level:3},{value:"Perfect Forward Secrecy (PFS)",id:"perfect-forward-secrecy-pfs",level:3},{value:"Activar TLS con los otros servidores",id:"activar-tls-con-los-otros-servidores",level:2},{value:"\xbfC\xf3mo obtener un certificado RSA? (tutorial)",id:"c\xf3mo-obtener-un-certificado-rsa-tutorial",level:2}];function t(e){let i={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.p,{children:"Todos los servidores 4D pueden comunicarse en modo seguro a trav\xe9s del protocolo TLS (Transport Layer Security):"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"el servidor HTTP"}),"\n",(0,a.jsx)(i.li,{children:"el servidor de aplicaciones (aplicaciones de escritorio cliente-servidor)"}),"\n",(0,a.jsx)(i.li,{children:"el servidor SQL"}),"\n"]}),"\n",(0,a.jsxs)(i.p,{children:["Adem\xe1s, el cliente HTTP de 4D (comando ",(0,a.jsx)(i.code,{children:"HTTP get"})," por ejemplo) tambi\xe9n soporta el protocolo TLS."]}),"\n",(0,a.jsx)(i.h2,{id:"generalidades",children:"Generalidades"}),"\n",(0,a.jsx)(i.p,{children:"El protocolo TLS (sucesor de SSL) ha sido dise\xf1ado para asegurar los intercambios de datos entre dos aplicaciones, principalmente entre un servidor web y un navegador. Este protocolo es ampliamente utilizado y es compatible con la mayor\xeda de los navegadores web."}),"\n",(0,a.jsx)(i.p,{children:"A nivel de red, el protocolo de seguridad se inserta entre la capa TCP/IP (nivel bajo) y el protocolo de alto nivel HTTP. Ha sido dise\xf1ado principalmente para trabajar con HTTP."}),"\n",(0,a.jsx)(i.p,{children:"Configuraci\xf3n de red utilizando TLS:"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{src:r(649413).Z+"",width:"318",height:"174"})}),"\n",(0,a.jsx)(i.p,{children:"El protocolo TLS est\xe1 dise\xf1ado para autenticar al emisor y al receptor y para garantizar la confidencialidad e integridad de la informaci\xf3n intercambiada:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Autenticaci\xf3n"}),": se confirma la identidad del emisor y del receptor."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Confidencialidad"}),": los datos enviados se cifran para que ninguna tercera persona pueda entender el mensaje."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Integridad"}),": los datos recibidos no han sido modificados, por accidente o de forma malintencionada."]}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"TLS utiliza una t\xe9cnica de cifrado de llave p\xfablica basada en un par de llaves asim\xe9tricas para el cifrado y el descifrado: una llave p\xfablica y una llave privada. La llave privada se utiliza para encriptar los datos. El remitente (el sitio web) no se la da a nadie."}),"\n",(0,a.jsxs)(i.p,{children:["La llave p\xfablica se utiliza para descifrar la informaci\xf3n y se env\xeda a los receptores (navegadores web) a trav\xe9s de un ",(0,a.jsx)(i.strong,{children:"certificado"}),". El certificado se entrega a trav\xe9s de una autoridad de certificaci\xf3n. El sitio web paga al proveedor de certificados para que le entregue un certificado que garantiza la autenticaci\xf3n del servidor y contiene la llave p\xfablica que permite intercambiar datos de forma segura."]}),"\n",(0,a.jsx)(i.admonition,{type:"note",children:(0,a.jsx)(i.p,{children:"Los navegadores web solo autorizan los certificados emitidos por una autoridad de certificaci\xf3n referenciada en sus propiedades."})}),"\n",(0,a.jsx)(i.h2,{id:"versi\xf3n-m\xednima",children:"Versi\xf3n m\xednima"}),"\n",(0,a.jsxs)(i.p,{children:["Por defecto, la versi\xf3n m\xednima del protocolo de seguridad aceptado por los servidores 4D es TLS 1.3. Puede modificar este valor utilizando el selector ",(0,a.jsx)(i.code,{children:"Min TLS version"})," con el comando ",(0,a.jsx)(i.code,{children:"SET DATABASE PARAMETER"}),"."]}),"\n",(0,a.jsx)(i.admonition,{type:"note",children:(0,a.jsxs)(i.p,{children:["Puedes controlar de forma separada la ",(0,a.jsx)(i.a,{href:"/docs/es/20-R8/WebServer/webServerConfig#minimum-tls-version",children:"versi\xf3n m\xednima de TLS"})," para ",(0,a.jsx)(i.strong,{children:"objetos webServer"}),"."]})}),"\n",(0,a.jsx)(i.h2,{id:"habilitar-tls-con-el-servidor-http",children:"Habilitar TLS con el servidor HTTP"}),"\n",(0,a.jsx)(i.p,{children:"Para poder utilizar el protocolo TLS con el servidor HTTP de 4D, debe:"}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsx)(i.li,{children:"Obtener sus archivos de certificado."}),"\n",(0,a.jsx)(i.li,{children:"Instale sus archivos de certificado en la(s) ubicaci\xf3n(es) adecuada(s)"}),"\n",(0,a.jsx)(i.li,{children:"Activar TLS."}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"certificados",children:"Certificados"}),"\n",(0,a.jsx)(i.h4,{id:"formato",children:"Formato"}),"\n",(0,a.jsxs)(i.p,{children:["Los certificados TLS gestionados por 4D deben estar en formato ",(0,a.jsx)(i.strong,{children:"PEM"}),". Si su proveedor de certificados le env\xeda un certificado que est\xe1 en un formato binario como . rt, .pfx o .p12, tienes que convertirlo a formato PEM para poder utilizarlo. Hay sitios web donde se puede hacer esta conversi\xf3n en l\xednea."]}),"\n",(0,a.jsx)(i.h4,{id:"encripci\xf3n",children:"Encripci\xf3n"}),"\n",(0,a.jsx)(i.p,{children:"4D soporta certificados en los siguientes formatos est\xe1ndar de cifrado:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/RSA_%5C(cryptosystem%5C)",children:(0,a.jsx)(i.strong,{children:"RSA"})})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm",children:(0,a.jsx)(i.strong,{children:"ECDSA"})})}),"\n"]}),"\n",(0,a.jsx)(i.admonition,{title:"Compatibilidad",type:"info",children:(0,a.jsxs)(i.p,{children:["El formato de cifrado ECDSA no es compatible por 4D ",(0,a.jsx)(i.a,{href:"/docs/es/20-R8/settings/client-server#network-layer",children:"capa de red legacy"}),"."]})}),"\n",(0,a.jsx)(i.admonition,{type:"note",children:(0,a.jsxs)(i.p,{children:["4D le propone dos comandos para ayudarle a solicitar un certificado RSA, ",(0,a.jsx)(i.a,{href:"#how-to-get-a-rsa-certificate-tutorial",children:"vea el tutorial m\xe1s abajo"}),"."]})}),"\n",(0,a.jsx)(i.h3,{id:"instalaci\xf3n-de-archivos-de-certificados",children:"Instalaci\xf3n de archivos de certificados"}),"\n",(0,a.jsx)(i.p,{children:"Los archivos de certificados incluyen:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"key.pem"}),": documento que contiene la llave de encriptaci\xf3n privada,"]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"cert.pem"}),": documento que contiene el certificado."]}),"\n"]}),"\n",(0,a.jsxs)(i.p,{children:["Ambos archivos ",(0,a.jsx)(i.strong,{children:"key.pem"})," y ",(0,a.jsx)(i.strong,{children:"cert.pem"})," deben ubicarse:"]}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["con 4D Server o 4D en modo local, junto a la ",(0,a.jsx)(i.a,{href:"/docs/es/20-R8/Project/architecture#project-folder",children:"carpeta Project"})]}),"\n",(0,a.jsxs)(i.li,{children:["con 4D en modo remoto, en la carpeta de la base cliente en la m\xe1quina remota (para m\xe1s informaci\xf3n sobre la ubicaci\xf3n de esta carpeta, ver el comando ",(0,a.jsx)(i.a,{href:"https://doc.4d.com/4dv20/help/command/en/page485.html",children:(0,a.jsx)(i.code,{children:"Get 4D folder"})}),"). Debe copiar estos archivos manualmente en la m\xe1quina remota."]}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"activar-tls",children:"Activar TLS"}),"\n",(0,a.jsxs)(i.p,{children:["Para que el servidor HTTP acepte conexiones TLS, debe activar HTTPS. Consulte el p\xe1rrafo ",(0,a.jsx)(i.a,{href:"/docs/es/20-R8/WebServer/webServerConfig#enable-https",children:(0,a.jsx)(i.strong,{children:"Activar HTTPS"})})," para conocer las diferentes maneras de habilitar TLS para el servidor HTTP."]}),"\n",(0,a.jsx)(i.admonition,{type:"note",children:(0,a.jsxs)(i.p,{children:["El servidor web 4D tambi\xe9n soporta ",(0,a.jsx)(i.a,{href:"/docs/es/20-R8/WebServer/webServerConfig#enable-hsts",children:"la opci\xf3n HSTS"})," para declarar que los navegadores s\xf3lo deben interactuar con \xe9l a trav\xe9s de conexiones seguras HTTPS."]})}),"\n",(0,a.jsx)(i.h3,{id:"perfect-forward-secrecy-pfs",children:"Perfect Forward Secrecy (PFS)"}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Forward_secrecy",children:"PFS"}),' a\xf1ade una capa adicional de seguridad a sus comunicaciones. En lugar de utilizar llaves de intercambio predefinidas, PFS crea llaves de sesi\xf3n de forma cooperativa entre las partes que se comunican utilizando algoritmos Diffie-Hellman (DH). La forma conjunta en que se construyen las llaves crea un "secreto compartido" que impide que partes externas puedan comprometerlas.']}),"\n",(0,a.jsxs)(i.p,{children:["Cuando se habilita TLS en el servidor, PFS se habilita autom\xe1ticamente. Si el archivo ",(0,a.jsx)(i.em,{children:"dhparams.pem"})," (documento que contiene la llave privada DH del servidor) no existe todav\xeda, 4D lo generar\xe1 autom\xe1ticamente con un tama\xf1o de llave de 2048. La generaci\xf3n inicial de este archivo puede llevar varios minutos. El archivo se coloca junto con los archivos ",(0,a.jsxs)(i.a,{href:"#instalaci%C3%B3n-de-archivos-de-certificado",children:[(0,a.jsx)(i.em,{children:"key.pem"})," y ",(0,a.jsx)(i.em,{children:"cert.pem"})]}),"."]}),"\n",(0,a.jsxs)(i.p,{children:["Si utiliza una ",(0,a.jsx)(i.a,{href:"/docs/es/20-R8/WebServer/webServerConfig#cipher-list",children:"lista de cifrado personalizada"})," y desea activar PFS, debe verificar que contiene entradas con algoritmos DH o ECDH (Elliptic-curve Diffie-Hellman)."]}),"\n",(0,a.jsx)(i.h2,{id:"activar-tls-con-los-otros-servidores",children:"Activar TLS con los otros servidores"}),"\n",(0,a.jsx)(i.p,{children:"Para utilizar TLS con el servidor de aplicaciones 4D (aplicaciones cliente-servidor de escritorio) o el servidor SQL, solo tiene que habilitar las comunicaciones TLS y el servidor configura autom\xe1ticamente las conexiones al inicio."}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Con el servidor de aplicaciones, seleccione la opci\xf3n ",(0,a.jsx)(i.strong,{children:"Encriptar las comunicaciones cliente-servidor"})," en la p\xe1gina ",(0,a.jsx)(i.a,{href:"../settings/client-server#encrypt-client-server-communications",children:'"Opciones cliente-servidor/red" del di\xe1logo Par\xe1metros'}),"."]}),"\n",(0,a.jsxs)(i.li,{children:["Con el servidor SQL, seleccione la opci\xf3n ",(0,a.jsx)(i.strong,{children:"Activar TLS"})," en la ",(0,a.jsx)(i.a,{href:"../settings/sql#sql-server-publishing",children:'p\xe1gina "SQL" del cuadro de di\xe1logo Par\xe1metros'}),"."]}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"c\xf3mo-obtener-un-certificado-rsa-tutorial",children:"\xbfC\xf3mo obtener un certificado RSA? (tutorial)"}),"\n",(0,a.jsx)(i.p,{children:"Un servidor que funciona en modo seguro significa que necesita un certificado digital de una autoridad de certificaci\xf3n. Este certificado contiene diversa informaci\xf3n, como el ID del sitio, as\xed como la llave p\xfablica utilizada para comunicarse con el servidor. Este certificado se transmite a los clientes (por ejemplo, los navegadores web) que se conectan a este servidor. Una vez identificado y aceptado el certificado, la comunicaci\xf3n se realiza en modo seguro."}),"\n",(0,a.jsxs)(i.blockquote,{children:["\n",(0,a.jsx)(i.p,{children:"Los navegadores web s\xf3lo autorizan los certificados emitidos por una autoridad de certificaci\xf3n referenciada en sus propiedades."}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{src:r(554059).Z+"",width:"394",height:"227"})}),"\n",(0,a.jsx)(i.p,{children:"La autoridad de certificaci\xf3n se elige en funci\xf3n de varios criterios. If the certification authority is well known, the certificate will be authorized by many browsers, however the price to pay will be expensive."}),"\n",(0,a.jsx)(i.p,{children:"Para obtener un certificado digital:"}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsxs)(i.li,{children:["Genere una llave privada utilizando el comando ",(0,a.jsx)(i.code,{children:"GENERATE ENCRYPTION KEYPAIR"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(i.blockquote,{children:["\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:"Atenci\xf3n"}),": por razones de seguridad, la llave privada debe mantenerse siempre en secreto. En realidad, deber\xeda permanecer siempre en la m\xe1quina del servidor. Para el servidor web, el archivo Key.pem debe colocarse en la carpeta Project."]}),"\n"]}),"\n",(0,a.jsxs)(i.ol,{start:"2",children:["\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:["Utilice el comando ",(0,a.jsx)(i.code,{children:"GENERATE CERTIFICATE REQUEST"})," para emitir una solicitud de certificado."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:["Env\xede la solicitud de certificado a la autoridad de certificaci\xf3n elegida.\nPara llenar una solicitud de certificado, es posible que tenga que ponerse en contacto con la autoridad de certificaci\xf3n. La autoridad de certificaci\xf3n comprueba que la informaci\xf3n transmitida es correcta. La petici\xf3n de certificado se genera en un BLOB utilizando el formato PKCS codificado en base64 (formato PEM). Este principio permite copiar y pegar las llaves como texto y enviarlas por correo electr\xf3nico sin modificar el contenido de la llave. Por ejemplo, puede guardar el BLOB que contiene la solicitud de certificado en un documento de texto (usando el comando ",(0,a.jsx)(i.code,{children:"BLOB TO DOCUMENT"}),"), luego abrir y copiar y pegar su contenido en un correo electr\xf3nico o un formulario Web para ser enviado a la autoridad de certificaci\xf3n."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:['Una vez que tenga el certificado, cree un archivo de texto llamado "cert.pem" y pegue en \xe9l el contenido del certificado.\nPuede recibir un certificado de diferentes maneras (normalmente por correo electr\xf3nico o formulario HTML). 4D accepts all platform-related text formats for certificates (macOS, PC, Linux, etc.). Sin embargo, el certificado debe estar en ',(0,a.jsx)(i.a,{href:"#format",children:"formato PEM"}),", ",(0,a.jsx)(i.em,{children:"es decir,"}),", PKCS codificado en base64."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(i.blockquote,{children:["\n",(0,a.jsx)(i.p,{children:"Los caracteres de fin de l\xednea CR no se soportan por s\xed solos; debe utilizar CRLF o LF."}),"\n"]}),"\n",(0,a.jsxs)(i.ol,{start:"5",children:["\n",(0,a.jsxs)(i.li,{children:["Coloca el archivo \u201Ccert.pem\u201D en la ",(0,a.jsx)(i.a,{href:"#installing-certificate-files",children:"ubicaci\xf3n apropiada"}),"."]}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"El servidor 4D puede ahora trabajar en modo seguro. Un certificado suele tener una validez de entre 3 meses y un a\xf1o."})]})}function u(e={}){let{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},649413:function(e,i,r){r.d(i,{Z:function(){return n}});let n="data:image/png;base64,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"},554059:function(e,i,r){r.d(i,{Z:function(){return n}});let n=r.p+"assets/images/tls2-654d4965c78986e1ff3061d0686d7943.png"},250065:function(e,i,r){r.d(i,{Z:function(){return c},a:function(){return s}});var n=r(667294);let a={},o=n.createContext(a);function s(e){let i=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);