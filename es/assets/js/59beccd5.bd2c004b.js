/*! For license information please see 59beccd5.bd2c004b.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9081],{147885:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>o,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var i=s(474848),r=s(28453);const d={id:"CryptoKeyClass",title:"CryptoKey"},l=void 0,c={id:"API/CryptoKeyClass",title:"CryptoKey",description:"La clase CryptoKey del lenguaje 4D contiene un par de llaves de cifrado asim\xe9trico.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/API/CryptoKeyClass.md",sourceDirName:"API",slug:"/API/CryptoKeyClass",permalink:"/docs/es/19/API/CryptoKeyClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FCryptoKeyClass.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"CryptoKeyClass",title:"CryptoKey"},sidebar:"docs",previous:{title:"Collection",permalink:"/docs/es/19/API/CollectionClass"},next:{title:"DataClass",permalink:"/docs/es/19/API/DataClassClass"}},t={},a=[{value:"Ejemplo",id:"ejemplo",level:3},{value:"Resumen",id:"resumen",level:3},{value:"4D.CryptoKey.new()",id:"4dcryptokeynew",level:2},{value:"<em>settings</em>",id:"settings",level:4},{value:"<em>CryptoKey</em>",id:"cryptokey",level:4},{value:".curve",id:"curve",level:2},{value:".decrypt()",id:"decrypt",level:2},{value:"<em>options</em>",id:"options",level:4},{value:"<em>Result</em>",id:"result",level:4},{value:".encrypt()",id:"encrypt",level:2},{value:"<em>options</em>",id:"options-1",level:5},{value:"<em>Result</em>",id:"result-1",level:4},{value:".getPrivateKey()",id:"getprivatekey",level:2},{value:"<em>Result</em>",id:"result-2",level:4},{value:".getPublicKey()",id:"getpublickey",level:2},{value:"<em>Result</em>",id:"result-3",level:4},{value:".pem",id:"pem",level:2},{value:".sign()",id:"sign",level:2},{value:"<em>options</em>",id:"options-2",level:4},{value:"<em>Result</em>",id:"result-4",level:4},{value:".size",id:"size",level:2},{value:".type",id:"type",level:2},{value:".verify()",id:"verify",level:2},{value:"<em>options</em>",id:"options-3",level:4},{value:"<em>Result</em>",id:"result-5",level:4}];function h(e){const n={a:"a",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["La clase ",(0,i.jsx)(n.code,{children:"CryptoKey"})," del lenguaje 4D contiene un par de llaves de cifrado asim\xe9trico."]}),"\n",(0,i.jsxs)(n.p,{children:["Esta clase est\xe1 disponible en el almac\xe9n de clases de ",(0,i.jsx)(n.code,{children:"4D"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(n.p,{children:"El siguiente c\xf3digo de ejemplo firma y verifica un mensaje utilizando un nuevo par de llaves ECDSA, por ejemplo para hacer un token web JSON ES256."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' // Generar un nuevo par de llaves ECDSA\n$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))\n\n  // Obtener la firma como base64\n$message:="hello world"\n$signature:=$key.sign($message;New object("hash";"SHA256"))\n\n  // Verificar firma\n$status:=$key.verify($message;$signature;New object("hash";"SHA256"))\nASSERT($status.success)\n'})}),"\n",(0,i.jsx)(n.h3,{id:"resumen",children:"Resumen"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{})})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#4dcryptokeynew",children:[" ",(0,i.jsx)(n.strong,{children:"4D.CryptoKey.new"}),"( ",(0,i.jsx)(n.em,{children:"settings"})," : Object ) : 4D.CryptoKey"]}),"\xa0\xa0\xa0\xa0crea un nuevo objeto ",(0,i.jsx)(n.code,{children:"4D.CryptoKey"})," que encapsula un par de llaves de cifrado"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#curve",children:[(0,i.jsx)(n.strong,{children:".curve"})," : Text"]}),"\xa0\xa0\xa0\xa0nombre de la curva normalizada de la llave"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#decrypt",children:[" ",(0,i.jsx)(n.strong,{children:".decrypt"}),"( ",(0,i.jsx)(n.em,{children:"message"})," : Text ; ",(0,i.jsx)(n.em,{children:"options"})," : Object ) : Object"]}),"\xa0\xa0\xa0\xa0descifra el par\xe1metro ",(0,i.jsx)(n.em,{children:"mensaje"})," utilizando la llave ",(0,i.jsx)(n.strong,{children:"privada"})]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#encrypt",children:[" ",(0,i.jsx)(n.strong,{children:".encrypt"}),"( ",(0,i.jsx)(n.em,{children:"message"})," : Text ; ",(0,i.jsx)(n.em,{children:"options"})," : Object ) : Text"]}),"\xa0\xa0\xa0\xa0encripta el par\xe1metro ",(0,i.jsx)(n.em,{children:"mensaje"})," utilizando la llave ",(0,i.jsx)(n.strong,{children:"p\xfablica"})]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#getprivatekey",children:[" ",(0,i.jsx)(n.strong,{children:".getPrivateKey()"})," : Text"]}),"\xa0\xa0\xa0\xa0devuelve la llave privada del objeto ",(0,i.jsx)(n.code,{children:"CryptoKey"})]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#getpublickey",children:[" ",(0,i.jsx)(n.strong,{children:".getPublicKey( )"})," : Text"]}),"\xa0\xa0\xa0\xa0devuelve la llave p\xfablica del objeto ",(0,i.jsx)(n.code,{children:"CryptoKey"})]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#sign",children:[".",(0,i.jsx)(n.strong,{children:"sign"})," (",(0,i.jsx)(n.em,{children:"message"})," : Text ; ",(0,i.jsx)(n.em,{children:"options"})," : Object) : Text"]}),"\xa0\xa0\xa0\xa0firma la representaci\xf3n utf8 de una cadena ",(0,i.jsx)(n.em,{children:"mensaje"})]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#size",children:[(0,i.jsx)(n.strong,{children:".size"})," : Integer"]}),"\xa0\xa0\xa0\xa0el tama\xf1o de la llave en bits"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#type",children:[(0,i.jsx)(n.strong,{children:".type"})," : Text"]}),'\xa0\xa0\xa0\xa0nombre del tipo de llave - "RSA", "ECDSA", "PEM"']})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#verify",children:[" ",(0,i.jsx)(n.strong,{children:".verify"}),"( ",(0,i.jsx)(n.em,{children:"message"})," : Text ; ",(0,i.jsx)(n.em,{children:"signature"})," : Text ; ",(0,i.jsx)(n.em,{children:"options"})," : Object) : object"]}),"\xa0\xa0\xa0\xa0verifica la firma base64 contra la representaci\xf3n utf8 del ",(0,i.jsx)(n.em,{children:"mensaje"})]})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"4dcryptokeynew",children:"4D.CryptoKey.new()"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Lanzamiento"}),(0,i.jsx)(n.th,{children:"Modificaciones"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"18 R4"}),(0,i.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"4D.CryptoKey.new"}),"( ",(0,i.jsx)(n.em,{children:"settings"})," : Object ) : 4D.CryptoKey"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metros"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"settings"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"Par\xe1metros para generar o cargar un par de llaves"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"result"}),(0,i.jsx)(n.td,{children:"4D.CryptoKey"}),(0,i.jsx)(n.td,{children:"<-"}),(0,i.jsx)(n.td,{children:"Objeto que contiene un par de llaves de encriptaci\xf3n"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["La funci\xf3n ",(0,i.jsx)(n.code,{children:"4D.CryptoKey.new()"})," crea un nuevo objeto ",(0,i.jsx)(n.code,{children:"4D.CryptoKey"})," que encapsula un par de llaves de cifrado, basado en el par\xe1metro objeto ",(0,i.jsx)(n.em,{children:"settings"}),". Permite generar una nueva llave RSA o ECDSA, o cargar un par de llaves existente desde una definici\xf3n PEM."]}),"\n",(0,i.jsx)(n.h4,{id:"settings",children:(0,i.jsx)(n.em,{children:"settings"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propiedad"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#type",children:"type"})}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsxs)(n.td,{children:["Define el tipo de la llave a crear: ",(0,i.jsxs)(n.li,{children:['"RSA": genera un par de llaves RSA, utilizando ',(0,i.jsx)(n.a,{href:"#size",children:".size"})," como tama\xf1o."]}),(0,i.jsxs)(n.li,{children:['"ECDSA": genera un par de llaves Elliptic Curve Digital Signature Algorithm, utilizando ',(0,i.jsx)(n.a,{href:"#curve",children:".curve"})," como curva. Tenga en cuenta que las llaves ECDSA no pueden utilizarse para el cifrado, sino s\xf3lo para la firma."]}),(0,i.jsxs)(n.li,{children:['"PEM": carga una definici\xf3n de par de llaves en formato PEM, utilizando ',(0,i.jsx)(n.a,{href:"#pem",children:".pem"}),"."]})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#curve",children:"curve"})}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:"Nombre de la curva ECDSA"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#pem",children:"pem"})}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:"Definici\xf3n PEM de una llave de cifrado a cargar"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#size",children:"size"})}),(0,i.jsx)(n.td,{children:"integer"}),(0,i.jsx)(n.td,{children:"Tama\xf1o de la llave RSA en bits"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"cryptokey",children:(0,i.jsx)(n.em,{children:"CryptoKey"})}),"\n",(0,i.jsxs)(n.p,{children:["El objeto ",(0,i.jsx)(n.code,{children:"CryptoKey"})," devuelto encapsula un par de llaves de cifrado. Es un objeto compartido y, por tanto, puede ser utilizado por varios procesos 4D simult\xe1neamente."]}),"\n",(0,i.jsx)(n.h2,{id:"curve",children:".curve"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Lanzamiento"}),(0,i.jsx)(n.th,{children:"Modificaciones"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"18 R4"}),(0,i.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".curve"})," : Text"]}),"\n",(0,i.jsx)(n.p,{children:'Definido s\xf3lo para llaves ECDSA: el nombre de la curva normalizada de la llave. Generalmente "prime256v1" para ES256 (por defecto), "secp384r1" para ES384, "secp521r1" para ES512.'}),"\n",(0,i.jsx)(n.h2,{id:"decrypt",children:".decrypt()"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Lanzamiento"}),(0,i.jsx)(n.th,{children:"Modificaciones"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"18 R4"}),(0,i.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".decrypt"}),"( ",(0,i.jsx)(n.em,{children:"message"})," : Text ; ",(0,i.jsx)(n.em,{children:"options"})," : Object ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metros"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"message"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsxs)(n.td,{children:["Cadena de mensajes a decodificar utilizando ",(0,i.jsx)(n.code,{children:"options.encodingEncrypted"})," y descifrar."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"options"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"Opciones de decodificaci\xf3n"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Result"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"<-"}),(0,i.jsx)(n.td,{children:"Status"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["La funci\xf3n ",(0,i.jsx)(n.code,{children:".decrypt()"})," descifra el par\xe1metro ",(0,i.jsx)(n.em,{children:"mensaje"})," utilizando la llave ",(0,i.jsx)(n.strong,{children:"privada"}),". El algoritmo utilizado depende del tipo de la llave."]}),"\n",(0,i.jsxs)(n.p,{children:["La llave debe ser una llave RSA, el algoritmo es RSA-OAEP (ver ",(0,i.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc3447",children:"RFC 3447"}),")."]}),"\n",(0,i.jsx)(n.h4,{id:"options",children:(0,i.jsx)(n.em,{children:"options"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propiedad"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"hash"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:'Algoritmo Digest a utilizar. Por ejemplo: "SHA256", "SHA384" o "SHA512".'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"encodingEncrypted"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsxs)(n.td,{children:["Codificaci\xf3n utilizada para convertir el par\xe1metro ",(0,i.jsx)(n.code,{children:"mensaje"}),' en la representaci\xf3n binaria a descifrar. Puede ser "Base64", o "Base64URL". Por defecto es "Base64".']})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"encodingDecrypted"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:'Codificaci\xf3n utilizada para convertir el mensaje binario descifrado en la cadena de resultados. Puede ser "UTF-8", "Base64", o "Base64URL". Por defecto es "UTF-8".'})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"result",children:(0,i.jsx)(n.em,{children:"Result"})}),"\n",(0,i.jsxs)(n.p,{children:['La funci\xf3n devuelve un objeto "status" con la propiedad ',(0,i.jsx)(n.code,{children:"success"})," definida como ",(0,i.jsx)(n.code,{children:"true"})," si el ",(0,i.jsx)(n.em,{children:"message"})," pudo ser descifrado con \xe9xito."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propiedad"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"success"}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"True si el mensaje ha sido descifrado con \xe9xito"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"result"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsxs)(n.td,{children:["Mensaje descifrado y decodificado utilizando ",(0,i.jsx)(n.code,{children:"options.encodingDecrypted"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"errors"}),(0,i.jsx)(n.td,{children:"collection"}),(0,i.jsxs)(n.td,{children:["Si ",(0,i.jsx)(n.code,{children:"success"})," es ",(0,i.jsx)(n.code,{children:"false"}),", puede contener una colecci\xf3n de errores"]})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["En caso de que el ",(0,i.jsx)(n.em,{children:"message"})," no haya podido ser descifrado por no haber sido encriptado con la misma llave o algoritmo, el objeto ",(0,i.jsx)(n.code,{children:"status"})," que se devuelve contiene una colecci\xf3n de errores en ",(0,i.jsx)(n.code,{children:"status.errors"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"encrypt",children:".encrypt()"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Lanzamiento"}),(0,i.jsx)(n.th,{children:"Modificaciones"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"18 R4"}),(0,i.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".encrypt"}),"( ",(0,i.jsx)(n.em,{children:"message"})," : Text ; ",(0,i.jsx)(n.em,{children:"options"})," : Object ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metros"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"message"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsxs)(n.td,{children:["Cadena de mensajes a codificar utilizando ",(0,i.jsx)(n.code,{children:"options.encodingDecrypted"})," y encriptado."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"options"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"Opciones de codificaci\xf3n"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Result"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"<-"}),(0,i.jsxs)(n.td,{children:["Mensaje encriptado y codificado utilizando la opci\xf3n ",(0,i.jsx)(n.code,{children:"options.encodingEncrypted"})]})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["La funci\xf3n ",(0,i.jsx)(n.code,{children:".encrypt()"})," encripta el par\xe1metro ",(0,i.jsx)(n.em,{children:"mensaje"})," utilizando la llave ",(0,i.jsx)(n.strong,{children:"p\xfablica"}),". El algoritmo utilizado depende del tipo de la llave."]}),"\n",(0,i.jsxs)(n.p,{children:["La llave debe ser una llave RSA, el algoritmo es RSA-OAEP (ver ",(0,i.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc3447",children:"RFC 3447"}),")."]}),"\n",(0,i.jsx)(n.h5,{id:"options-1",children:(0,i.jsx)(n.em,{children:"options"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propiedad"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"hash"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:'Algoritmo Digest a utilizar. Por ejemplo: "SHA256", "SHA384" o "SHA512".'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"encodingEncrypted"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:'Codificaci\xf3n utilizada para convertir el mensaje binario encriptado en la cadena de resultados. Puede ser "Base64", o "Base64URL". Por defecto es "Base64".'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"encodingDecrypted"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsxs)(n.td,{children:["Codificaci\xf3n utilizada para convertir el par\xe1metro ",(0,i.jsx)(n.code,{children:"mensaje"}),' en la representaci\xf3n binaria a cifrar. Puede ser "UTF-8", "Base64", o "Base64URL". Por defecto es "UTF-8".']})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"result-1",children:(0,i.jsx)(n.em,{children:"Result"})}),"\n",(0,i.jsx)(n.p,{children:"El valor devuelto es un mensaje encriptado."}),"\n",(0,i.jsx)(n.h2,{id:"getprivatekey",children:".getPrivateKey()"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Lanzamiento"}),(0,i.jsx)(n.th,{children:"Modificaciones"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"18 R4"}),(0,i.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".getPrivateKey()"})," : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metros"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Result"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"<-"}),(0,i.jsx)(n.td,{children:"Llave privada en formato PEM"})]})})]}),"\n",(0,i.jsxs)(n.p,{children:["La funci\xf3n ",(0,i.jsx)(n.code,{children:".getPrivateKey()"}),"  devuelve la llave privada del objeto ",(0,i.jsx)(n.code,{children:"CryptoKey"})," en formato PEM, o una cadena vac\xeda si no hay ninguna disponible."]}),"\n",(0,i.jsx)(n.h4,{id:"result-2",children:(0,i.jsx)(n.em,{children:"Result"})}),"\n",(0,i.jsx)(n.p,{children:"El valor devuelto es la llave privada."}),"\n",(0,i.jsx)(n.h2,{id:"getpublickey",children:".getPublicKey()"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Lanzamiento"}),(0,i.jsx)(n.th,{children:"Modificaciones"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"18 R4"}),(0,i.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".getPublicKey( )"})," : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metros"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Result"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"<-"}),(0,i.jsx)(n.td,{children:"Llave p\xfablica en formato PEM"})]})})]}),"\n",(0,i.jsxs)(n.p,{children:["La funci\xf3n ",(0,i.jsx)(n.code,{children:".getPublicKey()"})," devuelve la llave p\xfablica del objeto ",(0,i.jsx)(n.code,{children:"CryptoKey"})," en formato PEM, o una cadena vac\xeda si no hay ninguna disponible."]}),"\n",(0,i.jsx)(n.h4,{id:"result-3",children:(0,i.jsx)(n.em,{children:"Result"})}),"\n",(0,i.jsx)(n.p,{children:"El valor devuelto es la llave p\xfablica."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"pem",children:".pem"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Lanzamiento"}),(0,i.jsx)(n.th,{children:"Modificaciones"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"18 R4"}),(0,i.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".pem"})," : Text"]}),"\n",(0,i.jsx)(n.p,{children:"Definici\xf3n PEM de una llave de cifrado a cargar. Si la llave es una llave privada, se deducir\xe1 de ella la llave p\xfablica RSA o ECDSA."}),"\n",(0,i.jsx)(n.h2,{id:"sign",children:".sign()"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Lanzamiento"}),(0,i.jsx)(n.th,{children:"Modificaciones"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"18 R4"}),(0,i.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[".",(0,i.jsx)(n.strong,{children:"sign"})," (",(0,i.jsx)(n.em,{children:"message"})," : Text ; ",(0,i.jsx)(n.em,{children:"options"})," : Object) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metros"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"message"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"Cadena mensaje a firmar"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"options"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"Opciones de firma"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Result"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"<-"}),(0,i.jsx)(n.td,{children:'Firma en representaci\xf3n Base64 o Base64URL, seg\xfan la opci\xf3n "encoding'})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["La funci\xf3n ",(0,i.jsx)(n.code,{children:".sign()"})," firma la representaci\xf3n utf8 de una cadena ",(0,i.jsx)(n.em,{children:"mensaje"})," utilizando las llaves del objeto ",(0,i.jsx)(n.code,{children:"CryptoKey"})," y las ",(0,i.jsx)(n.em,{children:"opciones"})," suministradas. Devuelve su firma en formato base64 o base64URL, dependiendo del valor del atributo ",(0,i.jsx)(n.code,{children:"options.encoding"})," que haya pasado."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"CryptoKey"})," debe contener una llave v\xe1lida ",(0,i.jsx)(n.strong,{children:"privada"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"options-2",children:(0,i.jsx)(n.em,{children:"options"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propiedad"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"hash"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:'Algoritmo Digest a utilizar. Por ejemplo: "SHA256", "SHA384" o "SHA512". Cuando se utiliza para producir un JWT, el tama\xf1o del hash debe coincidir con el tama\xf1o del algoritmo PS@, ES@, RS@ o PS@'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"encodingEncrypted"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:'Codificaci\xf3n utilizada para convertir el mensaje binario encriptado en la cadena de resultados. Puede ser "Base64", o "Base64URL". Por defecto es "Base64".'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"pss"}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsxs)(n.td,{children:["Utilice el Probabilistic Signature Scheme (PSS). Se ignora si la llave no es una llave RSA. Pase ",(0,i.jsx)(n.code,{children:"true"})," al producir un JWT para el algoritmo PS@"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"encoding"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:'Representation of provided signature. Possible values are "Base64" or "Base64URL". Por defecto es "Base64".'})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"result-4",children:(0,i.jsx)(n.em,{children:"Result"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"CryptoKey"})," debe contener una llave v\xe1lida ",(0,i.jsx)(n.strong,{children:"privada"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"size",children:".size"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Lanzamiento"}),(0,i.jsx)(n.th,{children:"Modificaciones"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"18 R4"}),(0,i.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".size"})," : Integer"]}),"\n",(0,i.jsx)(n.p,{children:"Definido s\xf3lo para llaves RSA: el tama\xf1o de la llave en bits. ."}),"\n",(0,i.jsx)(n.h2,{id:"type",children:".type"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Lanzamiento"}),(0,i.jsx)(n.th,{children:"Modificaciones"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"18 R4"}),(0,i.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".type"})," : Text"]}),"\n",(0,i.jsx)(n.p,{children:'Contiene el nombre del tipo de llave - "RSA", "ECDSA", "PEM" .'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:['"RSA": un par de llaves RSA, utilizando l',(0,i.jsx)(n.code,{children:"settings.size"})," como ",(0,i.jsx)(n.a,{href:"#size",children:".size"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:['"ECDSA": un par de llaves del Algoritmo Elliptic Curve Digital Signature Algorithm, utilizando ',(0,i.jsx)(n.code,{children:"settings.curve"})," como ",(0,i.jsx)(n.a,{href:"#curve",children:".curve"}),". Tenga en cuenta que las llaves ECDSA no pueden utilizarse para el cifrado, sino s\xf3lo para la firma."]}),"\n",(0,i.jsxs)(n.li,{children:['"PEM": una definici\xf3n de par de llaves en formato PEM, utilizando ',(0,i.jsx)(n.code,{children:"settings.pem"})," como ",(0,i.jsx)(n.a,{href:"#pem",children:".pem"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"verify",children:".verify()"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Lanzamiento"}),(0,i.jsx)(n.th,{children:"Modificaciones"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"18 R4"}),(0,i.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:".verify"}),"( ",(0,i.jsx)(n.em,{children:"message"})," : Text ; ",(0,i.jsx)(n.em,{children:"signature"})," : Text ; ",(0,i.jsx)(n.em,{children:"options"})," : Object) : object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metros"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"message"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"Cadena mensaje utilizada para generar la firma"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"signature"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsxs)(n.td,{children:["Firma a verificar, en representaci\xf3n Base64 o Base64URL, dependiendo del valor de ",(0,i.jsx)(n.code,{children:"options.encoding"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"options"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"Opciones de firma"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Result"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"<-"}),(0,i.jsx)(n.td,{children:"Estado de la verificaci\xf3n"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["La funci\xf3n ",(0,i.jsx)(n.code,{children:".verify()"})," verifica la firma base64 contra la representaci\xf3n utf8 del ",(0,i.jsx)(n.em,{children:"mensaje"})," utilizando las llaves del objeto ",(0,i.jsx)(n.code,{children:"CryptoKey"})," y las ",(0,i.jsx)(n.em,{children:"opciones"})," suministradas."]}),"\n",(0,i.jsxs)(n.p,{children:["La funci\xf3n ",(0,i.jsx)(n.code,{children:".verify()"})," verifica la firma base64 contra la representaci\xf3n utf8 del ",(0,i.jsx)(n.em,{children:"message"})," utilizando las llaves del objeto ",(0,i.jsx)(n.code,{children:"CryptoKey"})," y las ",(0,i.jsx)(n.em,{children:"options"})," proporcionadas."]}),"\n",(0,i.jsx)(n.h4,{id:"options-3",children:(0,i.jsx)(n.em,{children:"options"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propiedad"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"hash"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:'Algoritmo Digest a utilizar. Por ejemplo: "SHA256", "SHA384" o "SHA512". Cuando se utiliza para producir un JWT, el tama\xf1o del hash debe coincidir con el tama\xf1o del algoritmo PS@, ES@, RS@ o PS@'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"pss"}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsxs)(n.td,{children:["Utilice el Probabilistic Signature Scheme (PSS). Se ignora si la llave no es una llave RSA. Pase ",(0,i.jsx)(n.code,{children:"true"})," al verificar un JWT para el algoritmo PS@"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"encoding"}),(0,i.jsx)(n.td,{children:"text"}),(0,i.jsx)(n.td,{children:'Encoding used to convert the binary encrypted message into the result string. Can be "Base64", or "Base64URL". Por defecto es "Base64".'})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"result-5",children:(0,i.jsx)(n.em,{children:"Result"})}),"\n",(0,i.jsxs)(n.p,{children:["La ",(0,i.jsx)(n.code,{children:"CryptoKey"})," debe contener una llave ",(0,i.jsx)(n.strong,{children:"p\xfablica"})," v\xe1lida."]}),"\n",(0,i.jsxs)(n.p,{children:["La funci\xf3n devuelve un objeto de estado con la propiedad ",(0,i.jsx)(n.code,{children:"success"})," definida como ",(0,i.jsx)(n.code,{children:"true"})," si el ",(0,i.jsx)(n.code,{children:"message"})," pudo ser verificado con \xe9xito (es decir, la firma coincide)."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propiedad"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"success"}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"True si la firma coincide con el mensaje"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"errors"}),(0,i.jsx)(n.td,{children:"collection"}),(0,i.jsxs)(n.td,{children:["Si ",(0,i.jsx)(n.code,{children:"success"})," es ",(0,i.jsx)(n.code,{children:"false"}),", puede contener una colecci\xf3n de errores"]})]})]})]})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},221020:(e,n,s)=>{var i=s(296540),r=Symbol.for("react.element"),d=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var i,d={},a=null,h=null;for(i in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(h=n.ref),n)l.call(n,i)&&!t.hasOwnProperty(i)&&(d[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===d[i]&&(d[i]=n[i]);return{$$typeof:r,type:e,key:a,ref:h,props:d,_owner:c.current}}n.Fragment=d,n.jsx=a,n.jsxs=a},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var i=s(296540);const r={},d=i.createContext(r);function l(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);