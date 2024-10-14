"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[66207],{367700:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>o,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var r=s(474848),i=s(28453);const d={id:"CryptoKeyClass",title:"CryptoKey"},l=void 0,c={id:"API/CryptoKeyClass",title:"CryptoKey",description:"La clase CryptoKey del lenguaje 4D encapsula un par de llaves de cifrado asim\xe9trico.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/API/CryptoKeyClass.md",sourceDirName:"API",slug:"/API/CryptoKeyClass",permalink:"/docs/es/API/CryptoKeyClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FCryptoKeyClass.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"CryptoKeyClass",title:"CryptoKey"},sidebar:"docs",previous:{title:"Collection",permalink:"/docs/es/API/CollectionClass"},next:{title:"DataClass",permalink:"/docs/es/API/DataClassClass"}},t={},a=[{value:"Resumen",id:"resumen",level:3},{value:"4D.CryptoKey.new()",id:"4dcryptokeynew",level:2},{value:"<em>settings</em>",id:"settings",level:4},{value:"<em>CryptoKey</em>",id:"cryptokey",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:".curve",id:"curve",level:2},{value:".decrypt()",id:"decrypt",level:2},{value:"<em>opciones</em>",id:"opciones",level:4},{value:"<em>Resultado</em>",id:"resultado",level:4},{value:".encrypt()",id:"encrypt",level:2},{value:"<em>opciones</em>",id:"opciones-1",level:5},{value:"<em>Resultado</em>",id:"resultado-1",level:4},{value:".getPrivateKey()",id:"getprivatekey",level:2},{value:"<em>Resultado</em>",id:"resultado-2",level:4},{value:".getPublicKey()",id:"getpublickey",level:2},{value:"<em>Resultado</em>",id:"resultado-3",level:4},{value:".pem",id:"pem",level:2},{value:".sign()",id:"sign",level:2},{value:"<em>opciones</em>",id:"opciones-2",level:4},{value:"<em>Resultado</em>",id:"resultado-4",level:4},{value:".size",id:"size",level:2},{value:".type",id:"type",level:2},{value:".verify()",id:"verify",level:2},{value:"<em>opciones</em>",id:"opciones-3",level:4},{value:"<em>Resultado</em>",id:"resultado-5",level:4}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["La clase ",(0,r.jsx)(n.code,{children:"CryptoKey"})," del lenguaje 4D encapsula un par de llaves de cifrado asim\xe9trico."]}),"\n",(0,r.jsxs)(n.p,{children:['Esta clase est\xe1 disponible en el "class store" de ',(0,r.jsx)(n.code,{children:"4D"}),"."]}),"\n",(0,r.jsx)(n.admonition,{title:"Ver tambi\xe9n",type:"info",children:(0,r.jsxs)(n.p,{children:["Para obtener una visi\xf3n general de esta clase, consulte la entrada del blog ",(0,r.jsx)(n.a,{href:"https://blog.4d.com/cryptokey-encrypt-decrypt-sign-and-verify/",children:(0,r.jsx)(n.strong,{children:"CryptoKey: cifrar, descifrar, firmar y verificar"})}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"resumen",children:"Resumen"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#4dcryptokeynew",children:[(0,r.jsx)(n.strong,{children:"4D.CryptoKey.new"}),"( ",(0,r.jsx)(n.em,{children:"settings"})," : Object ) : 4D.CryptoKey"]}),(0,r.jsx)(n.br,{}),"crea un nuevo objeto ",(0,r.jsx)(n.code,{children:"4D.CryptoKey"})," que encapsula un par de llaves de cifrado"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#curve",children:[(0,r.jsx)(n.strong,{children:".curve"})," : Text"]}),(0,r.jsx)(n.br,{}),"nombre de la curva normalizada de la llave"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#decrypt",children:[(0,r.jsx)(n.strong,{children:".decrypt"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : Object ) : Object"]}),(0,r.jsx)(n.br,{}),"descifra el par\xe1metro ",(0,r.jsx)(n.em,{children:"message"})," utilizando la llave ",(0,r.jsx)(n.strong,{children:"privada"})]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#encrypt",children:[(0,r.jsx)(n.strong,{children:".encrypt"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : Object ) : Text"]}),(0,r.jsx)(n.br,{}),"cifra el par\xe1metro ",(0,r.jsx)(n.em,{children:"message"})," utilizando la llave ",(0,r.jsx)(n.strong,{children:"p\xfablica"})]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#getprivatekey",children:[(0,r.jsx)(n.strong,{children:".getPrivateKey()"})," : Text"]}),(0,r.jsx)(n.br,{}),"devuelve la llave privada del objeto ",(0,r.jsx)(n.code,{children:"CryptoKey"})]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#getpublickey",children:[(0,r.jsx)(n.strong,{children:".getPublicKey"}),"() : Text"]}),(0,r.jsx)(n.br,{}),"devuelve la llave p\xfablica del objeto ",(0,r.jsx)(n.code,{children:"CryptoKey"})]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#sign",children:[".",(0,r.jsx)(n.strong,{children:"sign"})," (",(0,r.jsx)(n.em,{children:"message"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : Object) : Text"]}),(0,r.jsx)(n.br,{}),"firma la representaci\xf3n utf8 de una cadena de ",(0,r.jsx)(n.em,{children:"message"})]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#size",children:[(0,r.jsx)(n.strong,{children:".size"})," : Integer"]}),(0,r.jsx)(n.br,{}),"el tama\xf1o de la llave en bits"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#type",children:[(0,r.jsx)(n.strong,{children:".type"})," : Text"]}),(0,r.jsx)(n.br,{}),'nombre del tipo de llave - "RSA", "ECDSA", "PEM"']})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#verify",children:[(0,r.jsx)(n.strong,{children:".verify"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text ; ",(0,r.jsx)(n.em,{children:"signature"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : Object) : object"]}),(0,r.jsx)(n.br,{}),"verifica la firma base64 contra la representaci\xf3n utf8 del ",(0,r.jsx)(n.em,{children:"message"})]})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"4dcryptokeynew",children:"4D.CryptoKey.new()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"4D.CryptoKey.new"}),"( ",(0,r.jsx)(n.em,{children:"settings"})," : Object ) : 4D.CryptoKey"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"settings"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Par\xe1metros para generar o cargar un par de llaves"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"resultado"}),(0,r.jsx)(n.td,{children:"4D.CryptoKey"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Objeto que encapsula un par de llaves de cifrado"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["La funci\xf3n ",(0,r.jsx)(n.code,{children:"4D.CryptoKey.new()"})," crea un nuevo objeto ",(0,r.jsx)(n.code,{children:"4D.CryptoKey"})," que encapsula un par de llaves de cifrado, en funci\xf3n del par\xe1metro ",(0,r.jsx)(n.em,{children:"settings"}),". Permite generar una nueva llave RSA o ECDSA, o cargar un par de llaves existente desde una definici\xf3n PEM."]}),"\n",(0,r.jsx)(n.h4,{id:"settings",children:(0,r.jsx)(n.em,{children:"settings"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propiedad"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#type",children:"type"})}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsxs)(n.td,{children:["Define el tipo de clave a crear: ",(0,r.jsxs)(n.li,{children:['"RSA": genera un par de llaves RSA, utilizando ',(0,r.jsx)(n.a,{href:"#size",children:".size"})," como tama\xf1o."]}),(0,r.jsxs)(n.li,{children:['"ECDSA": genera un par de llaves Elliptic Curve Digital Signature Algorithm, utilizando ',(0,r.jsx)(n.a,{href:"#curve",children:".curve"})," como curva. Tenga en cuenta que las llaves ECDSA no pueden utilizarse para cifrar, sino s\xf3lo para firmar."]}),(0,r.jsxs)(n.li,{children:['"PEM": carga una definici\xf3n de par de llaves en formato PEM, utilizando ',(0,r.jsx)(n.a,{href:"#pem",children:".pem"}),"."]})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#curve",children:"curve"})}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nombre de la curva ECDSA"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#pem",children:"pem"})}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Definici\xf3n PEM de una llave de cifrado a cargar"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#size",children:"size"})}),(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsx)(n.td,{children:"Tama\xf1o de la llave RSA en bits"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"cryptokey",children:(0,r.jsx)(n.em,{children:"CryptoKey"})}),"\n",(0,r.jsxs)(n.p,{children:["El objeto ",(0,r.jsx)(n.code,{children:"CryptoKey"})," devuelto encapsula un par de llaves de cifrado. Es un objeto compartido y, por tanto, puede ser utilizado por varios procesos 4D simult\xe1neamente."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsx)(n.p,{children:"Un mensaje est\xe1 firmado por una llave privada y la firma es verificada por la llave p\xfablica correspondiente. El siguiente c\xf3digo firma y verifica una firma de mensaje simple."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Lado bob:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'// Crear el mensaje\n$message:="hello world"\nFolder(fk desktop folder).file("message.txt").setText($message)\n\n// Crear una clave\n$type:=New object("type";"RSA")\n$key:=4D.CryptoKey.new($type)\n\n// Obtener la llave p\xfablica y guardarla\nFolder(fk desktop folder).file("public.pem").setText($key.getPublicKey())\n\n// Obtener firma como base64 y guardarla\nFolder(fk desktop folder).file("signature").setText($key.sign($message;$type))\n\n/*Bob env\xeda el mensaje, la llave p\xfablica y la firma a Alice*/\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Lado Alice:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'// Obtener mensaje, llave p\xfablica y firma\n$message:=Folder(fk desktop folder).file("message.txt").getText()\n$publicKey:=Folder(fk desktop folder).file("public.pem").getText()\n$signature:=Folder(fk desktop folder).file("signature"). etText()\n\n// Crear una llave\n$type:=New object("type";"PEM";"pem";$publicKey)\n$key:=4D.CryptoKey.new($type)\n\n// Verificar la firma\nIf ($key.verify($message;$signature;$type).success)\n// La firma es v\xe1lida\n\nEnd if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"El siguiente c\xf3digo de ejemplo firma y verifica un mensaje utilizando un nuevo par de llaves ECDSA, por ejemplo para hacer un token web JSON ES256."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' // Generar un nuevo par de llaves ECDSA\n$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))\n\n  // Obtener la firma como base64\n$message:="hello world"\n$signature:=$key.sign($message;New object("hash";"SHA256"))\n\n  // Verificar firma\n$status:=$key.verify($message;$signature;New object("hash";"SHA256"))\nASSERT($status.success)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"curve",children:".curve"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".curve"})," : Text"]}),"\n",(0,r.jsx)(n.p,{children:'Definido s\xf3lo para las llaves ECDSA: el nombre de la curva normalizada de la llave. Generalmente "prime256v1" para ES256 (por defecto), "secp384r1" para ES384, "secp521r1" para ES512.'}),"\n",(0,r.jsx)(n.h2,{id:"decrypt",children:".decrypt()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".decrypt"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : Object ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"message"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsxs)(n.td,{children:["Cadena mensaje que se descodificar\xe1 utilizando ",(0,r.jsx)(n.code,{children:"options.encodingEncrypted"})," y se descifrar\xe1."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Opciones de decodificaci\xf3n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Estado"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["La funci\xf3n ",(0,r.jsx)(n.code,{children:".decrypt()"})," descifra el par\xe1metro ",(0,r.jsx)(n.em,{children:"message"})," utilizando la llave ",(0,r.jsx)(n.strong,{children:"privada"}),". El algoritmo utilizado depende del tipo de la llave."]}),"\n",(0,r.jsxs)(n.p,{children:["La llave debe ser una llave RSA, el algoritmo es RSA-OAEP (ver ",(0,r.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc3447",children:"RFC 3447"}),")."]}),"\n",(0,r.jsx)(n.h4,{id:"opciones",children:(0,r.jsx)(n.em,{children:"opciones"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propiedad"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hash"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Algoritmo Digest a utilizar. Por ejemplo: "SHA256", "SHA384" o "SHA512".'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"encodingEncrypted"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsxs)(n.td,{children:["Codificaci\xf3n utilizada para convertir el par\xe1metro ",(0,r.jsx)(n.code,{children:"message"}),' en la representaci\xf3n binaria a descifrar. Puede ser "Base64", o "Base64URL". Por defecto es "Base64".']})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"encodingDecrypted"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Codificaci\xf3n utilizada para convertir el mensaje binario descifrado en la cadena de resultados. Puede ser "UTF-8", "Base64", o "Base64URL". Por defecto es "UTF-8".'})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"resultado",children:(0,r.jsx)(n.em,{children:"Resultado"})}),"\n",(0,r.jsxs)(n.p,{children:["La funci\xf3n devuelve un objeto status con la propiedad ",(0,r.jsx)(n.code,{children:"success"})," definida en ",(0,r.jsx)(n.code,{children:"true"})," si el ",(0,r.jsx)(n.em,{children:"message"})," pudo ser desencriptado con \xe9xito."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propiedad"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"success"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"True si el mensaje ha sido descifrado con \xe9xito"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"resultado"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsxs)(n.td,{children:["Mensaje descifrado y decodificado utilizando ",(0,r.jsx)(n.code,{children:"options.encodingDecrypted"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"errors"}),(0,r.jsx)(n.td,{children:"collection"}),(0,r.jsxs)(n.td,{children:["Si ",(0,r.jsx)(n.code,{children:"success"})," es ",(0,r.jsx)(n.code,{children:"false"}),", puede contener una colecci\xf3n de errores"]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["En caso de que ",(0,r.jsx)(n.em,{children:"message"})," no haya podido ser descifrado por no haber sido cifrado con la misma clave o algoritmo, el objeto ",(0,r.jsx)(n.code,{children:"status"})," devuelto contiene una colecci\xf3n de errores en ",(0,r.jsx)(n.code,{children:"status.errors"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"encrypt",children:".encrypt()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".encrypt"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : Object ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"message"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsxs)(n.td,{children:["Cadena mensaje a codificar utilizando ",(0,r.jsx)(n.code,{children:"options.encodingDecrypted"})," y encriptada."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Opciones de codificaci\xf3n"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsxs)(n.td,{children:["Mensaje encriptado y codificado utilizando la opci\xf3n ",(0,r.jsx)(n.code,{children:"options.encodingEncrypted"})]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["La funci\xf3n ",(0,r.jsx)(n.code,{children:".encrypt()"})," cifra el par\xe1metro ",(0,r.jsx)(n.em,{children:"message"})," utilizando la llave ",(0,r.jsx)(n.strong,{children:"p\xfablica"}),". El algoritmo utilizado depende del tipo de la llave."]}),"\n",(0,r.jsxs)(n.p,{children:["La llave debe ser una llave RSA, el algoritmo es RSA-OAEP (ver ",(0,r.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc3447",children:"RFC 3447"}),")."]}),"\n",(0,r.jsx)(n.h5,{id:"opciones-1",children:(0,r.jsx)(n.em,{children:"opciones"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propiedad"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hash"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Algoritmo Digest a utilizar. Por ejemplo: "SHA256", "SHA384" o "SHA512".'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"encodingEncrypted"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Codificaci\xf3n utilizada para convertir el mensaje binario encriptado en la cadena de resultados. Puede ser "Base64", o "Base64URL". Por defecto es "Base64".'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"encodingDecrypted"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsxs)(n.td,{children:["Codificaci\xf3n utilizada para convertir el par\xe1metro ",(0,r.jsx)(n.code,{children:"message"}),' en la representaci\xf3n binaria a cifrar. Puede ser "UTF-8", "Base64", o "Base64URL". Por defecto es "UTF-8".']})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"resultado-1",children:(0,r.jsx)(n.em,{children:"Resultado"})}),"\n",(0,r.jsx)(n.p,{children:"El valor devuelto es un mensaje encriptado."}),"\n",(0,r.jsx)(n.h2,{id:"getprivatekey",children:".getPrivateKey()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".getPrivateKey()"})," : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Llave privada en formato PEM"})]})})]}),"\n",(0,r.jsxs)(n.p,{children:["La funci\xf3n ",(0,r.jsx)(n.code,{children:".getPrivateKey()"})," devuelve la llave privada del objeto ",(0,r.jsx)(n.code,{children:"CryptoKey"})," en formato PEM, o una cadena vac\xeda si no est\xe1 disponible."]}),"\n",(0,r.jsx)(n.h4,{id:"resultado-2",children:(0,r.jsx)(n.em,{children:"Resultado"})}),"\n",(0,r.jsx)(n.p,{children:"El valor devuelto es la llave privada."}),"\n",(0,r.jsx)(n.h2,{id:"getpublickey",children:".getPublicKey()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".getPublicKey"}),"() : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Llave p\xfablica en formato PEM"})]})})]}),"\n",(0,r.jsxs)(n.p,{children:["La funci\xf3n ",(0,r.jsx)(n.code,{children:".getPublicKey()"})," devuelve la llave p\xfablica del objeto ",(0,r.jsx)(n.code,{children:"CryptoKey"})," en formato PEM, o una cadena vac\xeda si no hay ninguna disponible."]}),"\n",(0,r.jsx)(n.h4,{id:"resultado-3",children:(0,r.jsx)(n.em,{children:"Resultado"})}),"\n",(0,r.jsx)(n.p,{children:"El valor devuelto es la llave p\xfablica."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"pem",children:".pem"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".pem"})," : Text"]}),"\n",(0,r.jsx)(n.p,{children:"Definici\xf3n PEM de una llave de cifrado a cargar. Si la llave es una llave privada, se deducir\xe1 de ella la llave p\xfablica RSA o ECDSA."}),"\n",(0,r.jsx)(n.h2,{id:"sign",children:".sign()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[".",(0,r.jsx)(n.strong,{children:"sign"})," (",(0,r.jsx)(n.em,{children:"message"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : Object) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"message"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Cadena mensaje a firmar"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Opciones de firma"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:'Firma en representaci\xf3n Base64 o Base64URL, seg\xfan la opci\xf3n "encoding'})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["La funci\xf3n ",(0,r.jsx)(n.code,{children:".sign()"})," firma la representaci\xf3n utf8 de una cadena de ",(0,r.jsx)(n.em,{children:"message"})," utilizando las llaves del objeto ",(0,r.jsx)(n.code,{children:"CryptoKey"})," y las ",(0,r.jsx)(n.em,{children:"options"})," suministradas. Devuelve su firma en formato base64 o base64URL, dependiendo del valor del atributo ",(0,r.jsx)(n.code,{children:"options.encoding"})," que le haya pasado."]}),"\n",(0,r.jsxs)(n.p,{children:["La ",(0,r.jsx)(n.code,{children:"CryptoKey"})," debe contener una llave ",(0,r.jsx)(n.strong,{children:"privada"})," v\xe1lida."]}),"\n",(0,r.jsx)(n.h4,{id:"opciones-2",children:(0,r.jsx)(n.em,{children:"opciones"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propiedad"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hash"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Algoritmo Digest a utilizar. Por ejemplo: "SHA256", "SHA384" o "SHA512". Cuando se utiliza para producir un JWT, el tama\xf1o del hash debe coincidir con el tama\xf1o del algoritmo PS@, ES@, RS@ o PS@'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"encodingEncrypted"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Codificaci\xf3n utilizada para convertir el mensaje binario encriptado en la cadena de resultados. Puede ser "Base64", o "Base64URL". Por defecto es "Base64".'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pss"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsxs)(n.td,{children:["Utilice el Probabilistic Signature Scheme (PSS). Se ignora si la llave no es una llave RSA. Pase ",(0,r.jsx)(n.code,{children:"true"})," al producir un JWT para el algoritmo PS@"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"encoding"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Representation of provided signature. Possible values are "Base64" or "Base64URL". Por defecto es "Base64".'})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"resultado-4",children:(0,r.jsx)(n.em,{children:"Resultado"})}),"\n",(0,r.jsxs)(n.p,{children:["La representaci\xf3n utf8 de la cadena ",(0,r.jsx)(n.em,{children:"message"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"size",children:".size"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".size"})," : Integer"]}),"\n",(0,r.jsx)(n.p,{children:"Definido s\xf3lo para llaves RSA: el tama\xf1o de la llave en bits. ."}),"\n",(0,r.jsx)(n.h2,{id:"type",children:".type"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".type"})," : Text"]}),"\n",(0,r.jsx)(n.p,{children:'Contiene el nombre del tipo de llave - "RSA", "ECDSA", "PEM" .'}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['"RSA": un par de llaves RSA, utilizando ',(0,r.jsx)(n.code,{children:"settings.size"})," como ",(0,r.jsx)(n.a,{href:"#size",children:".size"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:['"ECDSA": un par de llaves Elliptic Curve Digital Signature Algorithm, utilizando ',(0,r.jsx)(n.code,{children:"settings.curve"})," como ",(0,r.jsx)(n.a,{href:"#curve",children:".curve"}),". Tenga en cuenta que las llaves ECDSA no pueden utilizarse para el cifrado, sino s\xf3lo para la firma."]}),"\n",(0,r.jsxs)(n.li,{children:['"PEM": definici\xf3n de par de llaves en formato PEM, utilizando ',(0,r.jsx)(n.code,{children:"settings.pem"})," como ",(0,r.jsx)(n.a,{href:"#pem",children:".pem"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"verify",children:".verify()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".verify"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text ; ",(0,r.jsx)(n.em,{children:"signature"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : Object) : object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"message"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Cadena mensaje utilizada para generar la firma"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"signature"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsxs)(n.td,{children:["Firma a verificar, en representaci\xf3n Base64 o Base64URL, seg\xfan el valor de ",(0,r.jsx)(n.code,{children:"options.encoding"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Opciones de firma"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Estado de la verificaci\xf3n"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["La funci\xf3n ",(0,r.jsx)(n.code,{children:".verify()"})," verifica la firma base64 contra la representaci\xf3n utf8 del ",(0,r.jsx)(n.em,{children:"message"})," usando las llaves del objeto ",(0,r.jsx)(n.code,{children:"CryptoKey"})," y las ",(0,r.jsx)(n.em,{children:"options"})," suministradas."]}),"\n",(0,r.jsxs)(n.p,{children:["La ",(0,r.jsx)(n.code,{children:"CryptoKey"})," debe contener una llave ",(0,r.jsx)(n.strong,{children:"p\xfablica"})," v\xe1lida."]}),"\n",(0,r.jsx)(n.h4,{id:"opciones-3",children:(0,r.jsx)(n.em,{children:"opciones"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propiedad"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hash"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Algoritmo Digest a utilizar. Por ejemplo: "SHA256", "SHA384" o "SHA512". Cuando se utiliza para producir un JWT, el tama\xf1o del hash debe coincidir con el tama\xf1o del algoritmo PS@, ES@, RS@ o PS@'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pss"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsxs)(n.td,{children:["Utilice el Probabilistic Signature Scheme (PSS). Se ignora si la llave no es una llave RSA. Pase ",(0,r.jsx)(n.code,{children:"true"})," al verificar un JWT para el algoritmo PS@"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"encoding"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Encoding used to convert the binary encrypted message into the result string. Can be "Base64", or "Base64URL". Por defecto es "Base64".'})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"resultado-5",children:(0,r.jsx)(n.em,{children:"Resultado"})}),"\n",(0,r.jsxs)(n.p,{children:["La funci\xf3n devuelve un objeto de estado con la propiedad ",(0,r.jsx)(n.code,{children:"success"})," en ",(0,r.jsx)(n.code,{children:"true"})," si ",(0,r.jsx)(n.code,{children:"message"})," ha podido ser verificado con \xe9xito (es decir, la firma coincide)."]}),"\n",(0,r.jsxs)(n.p,{children:["En caso de que la firma no se haya podido verificar porque no se ha firmado con el mismo ",(0,r.jsx)(n.em,{children:"message"}),", llave o algoritmo, el objeto ",(0,r.jsx)(n.code,{children:"status"})," que se devuelve contiene una colecci\xf3n de errores en ",(0,r.jsx)(n.code,{children:"status.errors"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propiedad"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"success"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"True si la firma coincide con el mensaje"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"errors"}),(0,r.jsx)(n.td,{children:"collection"}),(0,r.jsxs)(n.td,{children:["Si ",(0,r.jsx)(n.code,{children:"success"})," es ",(0,r.jsx)(n.code,{children:"false"}),", puede contener una colecci\xf3n de errores"]})]})]})]})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var r=s(296540);const i={},d=r.createContext(i);function l(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);