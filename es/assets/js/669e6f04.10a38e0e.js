"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48117],{153726:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var s=n(474848),r=n(28453);const i={id:"generate-encryption-keypair",title:"GENERATE ENCRYPTION KEYPAIR",slug:"/commands/generate-encryption-keypair",displayed_sidebar:"docs"},l=void 0,d={id:"commands-legacy/generate-encryption-keypair",title:"GENERATE ENCRYPTION KEYPAIR",description:"GENERATE ENCRYPTION KEYPAIR ( llavePriv ; llavepublica {; longitud} )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/generate-encryption-keypair.md",sourceDirName:"commands-legacy",slug:"/commands/generate-encryption-keypair",permalink:"/docs/es/commands/generate-encryption-keypair",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fgenerate-encryption-keypair.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"generate-encryption-keypair",title:"GENERATE ENCRYPTION KEYPAIR",slug:"/commands/generate-encryption-keypair",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"GENERATE CERTIFICATE REQUEST",permalink:"/docs/es/commands/generate-certificate-request"},next:{title:"ALL RECORDS",permalink:"/docs/es/commands/all-records"}},c={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"RSA, llaves privadas y llaves p\xfablicas",id:"rsa-llaves-privadas-y-llaves-p\xfablicas",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function t(e){const a={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"GENERATE ENCRYPTION KEYPAIR"})," ( ",(0,s.jsx)(a.em,{children:"llavePriv"})," ; ",(0,s.jsx)(a.em,{children:"llavepublica"})," {; ",(0,s.jsx)(a.em,{children:"longitud"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"Par\xe1metro"}),(0,s.jsx)(a.th,{children:"Tipo"}),(0,s.jsx)(a.th,{}),(0,s.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"llavePriv"}),(0,s.jsx)(a.td,{children:"Blob"}),(0,s.jsx)(a.td,{children:"\u2190"}),(0,s.jsx)(a.td,{children:"BLOB que contiene la llave privada"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"llavepublica"}),(0,s.jsx)(a.td,{children:"Blob"}),(0,s.jsx)(a.td,{children:"\u2190"}),(0,s.jsx)(a.td,{children:"BLOB que contiene la llave p\xfablica"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"longitud"}),(0,s.jsx)(a.td,{children:"Integer"}),(0,s.jsx)(a.td,{children:"\u2192"}),(0,s.jsx)(a.td,{children:"Longitud de la llave (bits) [512...2048] Valor por defecto = 512"})]})]})]}),"\n",(0,s.jsx)(a.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsx)(a.p,{children:"El comando GENERATE ENCRYPTION KEYPAIR genera un nuevo par de llaves RSA. Estas llaves permiten funcionalidades de encripci\xf3n asim\xe9tricas en 4D, generalmente necesarias cuando necesita asegurar intercambios de datos seguros en la red (es decir, utilizando el servidor web 4D y el protocolo TSL)."}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Nota:"})," si necesita cifrar sus datos en el disco, puede considerar el uso de las funciones de cifrado de archivos de datos ofrecidas por 4D (ver la p\xe1gina ",(0,s.jsx)(a.em,{children:"Encripci\xf3n de datos"}),")."]}),"\n",(0,s.jsxs)(a.p,{children:["Una vez ejecutado el comando, los BLOBs pasados en los par\xe1metros ",(0,s.jsx)(a.em,{children:"llavePriv"})," y ",(0,s.jsx)(a.em,{children:"llavepublica"})," contienen un nuevo par de llaves de cifrado."]}),"\n",(0,s.jsxs)(a.p,{children:["El par\xe1metro opcional ",(0,s.jsx)(a.em,{children:"largo"})," permite precisar el tama\xf1o de la llave (en bits). Entre m\xe1s larga sea la llave, m\xe1s dif\xedcil es romper el c\xf3digo cifrado."]}),"\n",(0,s.jsx)(a.p,{children:"Sin embargo, las llaves largas necesitan m\xe1s tiempo de ejecuci\xf3n o de respuesta, especialmente dentro de una conexi\xf3n segura."}),"\n",(0,s.jsxs)(a.p,{children:["Por defecto (si omite el par\xe1metro ",(0,s.jsx)(a.em,{children:"largo"}),"), el tama\xf1o de llave generado es de 512 bits, lo cual es un buen compromiso para la relaci\xf3n seguridad/eficiencia. Para aumentar el factor de seguridad, puede cambiar las llaves con frecuencia, por ejemplo cada seis meses. Puede generar llaves de 2048 bits para aumentar la seguridad de cifrado pero podr\xeda disminuir la velocidad de las conexiones a la aplicaci\xf3n web."]}),"\n",(0,s.jsxs)(a.p,{children:["Este comando genera llaves en formato PKCS codificadas en base64, lo que significa que su contenido puede copiarse y pegarse en un correo electr\xf3nico sin sufrir ning\xfan cambio. Una vez se genera el par de llaves, se puede generar un documento de texto en formato PEM (utilizando por ejemplo el comando ",(0,s.jsx)(a.a,{href:"/docs/es/commands/blob-to-document",children:"BLOB TO DOCUMENT"}),") y las llaves pueden guardarse en un lugar seguro."]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Advertencia:"})," la llave privada siempre debe mantenerse en secreto."]}),"\n",(0,s.jsx)(a.h4,{id:"rsa-llaves-privadas-y-llaves-p\xfablicas",children:"RSA, llaves privadas y llaves p\xfablicas"}),"\n",(0,s.jsxs)(a.p,{children:["El algoritmo de cifrado RSA utilizado por ",(0,s.jsx)(a.strong,{children:"GENERATE ENCRYPTION KEYPAIR"})," est\xe1 basado en un sistema de cifrado de doble llave: una llave privada y una llave p\xfablica. Como su nombre lo indica, la llave p\xfablica puede ser entregada a una tercera persona y utilizada para descifrar la informaci\xf3n. La llave p\xfablica corresponde a una llave privada \xfanica, utilizada para cifrar la informaci\xf3n. De esta forma, la llave privada se utiliza para el cifrado; la llave p\xfablica para descifrar (o viceversa). La informaci\xf3n cifrada con una llave s\xf3lo puede ser descifrada con la otra."]}),"\n",(0,s.jsxs)(a.p,{children:["Las funciones de cifrado del protocolo TLS/SSL est\xe1n basadas en este principio, la llave p\xfablica que se incluye en el certificado enviado a los navegadores (para mayor informaci\xf3n, consulte la secci\xf3n ",(0,s.jsx)(a.a,{href:"/docs/es/commands/web-service-set-parameter",children:"WEB SERVICE SET PARAMETER"}),")."]}),"\n",(0,s.jsxs)(a.p,{children:["Este modo de cifrado tambi\xe9n lo utiliza la primera sintaxis de los comandos ",(0,s.jsx)(a.a,{href:"/docs/es/commands/encrypt-blob",children:"ENCRYPT BLOB"})," y ",(0,s.jsx)(a.a,{href:"/docs/es/commands/decrypt-blob",children:"DECRYPT BLOB"}),". La llave p\xfablica debe ser publicada de manera confidencial."]}),"\n",(0,s.jsxs)(a.p,{children:["Es posible combinar las llaves p\xfablicas y privadas de dos personas para cifrar informaci\xf3n de manera que el receptor sea la \xfanica persona que pueda descifrar los datos y el emisor la \xfanica persona que puede cifrarlos. Es el principio de la segunda sintaxis de los comandos ",(0,s.jsx)(a.a,{href:"/docs/es/commands/encrypt-blob",children:"ENCRYPT BLOB"})," y ",(0,s.jsx)(a.a,{href:"/docs/es/commands/decrypt-blob",children:"DECRYPT BLOB"}),"."]}),"\n",(0,s.jsx)(a.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsxs)(a.p,{children:["Ver el ejemplo del comando ",(0,s.jsx)(a.a,{href:"/docs/es/commands/encrypt-blob",title:"ENCRYPT BLOB",children:"ENCRYPT BLOB"}),"."]}),"\n",(0,s.jsx)(a.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/docs/es/commands/decrypt-blob",children:"DECRYPT BLOB"}),(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.a,{href:"/docs/es/commands/encrypt-blob",children:"ENCRYPT BLOB"}),(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.a,{href:"/docs/es/commands/generate-certificate-request",children:"GENERATE CERTIFICATE REQUEST"})]})]})}function p(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>l,x:()=>d});var s=n(296540);const r={},i=s.createContext(r);function l(e){const a=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:a},e.children)}}}]);