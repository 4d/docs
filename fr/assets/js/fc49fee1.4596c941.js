"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52757],{751845:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var r=s(474848),i=s(28453);const t={id:"CryptoKeyClass",title:"CryptoKey"},d=void 0,l={id:"API/CryptoKeyClass",title:"CryptoKey",description:"La classe CryptoKey du langage 4D contient une paire de cl\xe9s de chiffrement asym\xe9trique.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/API/CryptoKeyClass.md",sourceDirName:"API",slug:"/API/CryptoKeyClass",permalink:"/docs/fr/19/API/CryptoKeyClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FCryptoKeyClass.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"CryptoKeyClass",title:"CryptoKey"},sidebar:"docs",previous:{title:"Collection",permalink:"/docs/fr/19/API/CollectionClass"},next:{title:"DataClass",permalink:"/docs/fr/19/API/DataClassClass"}},c={},h=[{value:"Sommaire",id:"sommaire",level:3},{value:"4D.CryptoKey.new()",id:"4dcryptokeynew",level:2},{value:"<em>settings</em>",id:"settings",level:4},{value:"<em>CryptoKey</em>",id:"cryptokey",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:".curve",id:"curve",level:2},{value:".decrypt()",id:"decrypt",level:2},{value:"<em>options</em>",id:"options",level:4},{value:"<em>R\xe9sultat</em>",id:"r\xe9sultat",level:4},{value:".encrypt()",id:"encrypt",level:2},{value:"<em>options</em>",id:"options-1",level:5},{value:"<em>R\xe9sultat</em>",id:"r\xe9sultat-1",level:4},{value:".getPrivateKey()",id:"getprivatekey",level:2},{value:"<em>R\xe9sultat</em>",id:"r\xe9sultat-2",level:4},{value:".getPublicKey()",id:"getpublickey",level:2},{value:"<em>R\xe9sultat</em>",id:"r\xe9sultat-3",level:4},{value:".pem",id:"pem",level:2},{value:".sign()",id:"sign",level:2},{value:"<em>options</em>",id:"options-2",level:4},{value:"<em>R\xe9sultat</em>",id:"r\xe9sultat-4",level:4},{value:".size",id:"size",level:2},{value:".type",id:"type",level:2},{value:".verify()",id:"verify",level:2},{value:"<em>options</em>",id:"options-3",level:4},{value:"<em>R\xe9sultat</em>",id:"r\xe9sultat-5",level:4}];function a(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["La classe ",(0,r.jsx)(n.code,{children:"CryptoKey"})," du langage 4D contient une paire de cl\xe9s de chiffrement asym\xe9trique."]}),"\n",(0,r.jsxs)(n.p,{children:['Cette classe est disponible depuis le "class store" de ',(0,r.jsx)(n.code,{children:"4D"}),"."]}),"\n",(0,r.jsx)(n.admonition,{title:"Voir aussi",type:"info",children:(0,r.jsxs)(n.p,{children:["For a comprehensive overview of this class, please refer to the ",(0,r.jsx)(n.a,{href:"https://blog.4d.com/cryptokey-encrypt-decrypt-sign-and-verify/",children:(0,r.jsx)(n.strong,{children:"CryptoKey: encrypt, decrypt, sign, and verify!"})})," blog post."]})}),"\n",(0,r.jsx)(n.h3,{id:"sommaire",children:"Sommaire"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#4dcryptokeynew",children:[(0,r.jsx)(n.strong,{children:"4D.CryptoKey.new"}),"( ",(0,r.jsx)(n.em,{children:"settings"})," : Object ) : 4D.CryptoKey"]}),(0,r.jsx)(n.br,{}),"creates a new ",(0,r.jsx)(n.code,{children:"4D.CryptoKey"})," object encapsulating an encryption key pair"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#curve",children:[(0,r.jsx)(n.strong,{children:".curve"})," : Texte"]}),(0,r.jsx)(n.br,{}),"nom normalis\xe9 de la courbe de la cl\xe9"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#decrypt",children:[(0,r.jsx)(n.strong,{children:".decrypt"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : Object ) : Object"]}),(0,r.jsx)(n.br,{}),"d\xe9chiffre le param\xe8tre ",(0,r.jsx)(n.em,{children:"message"})," \xe0 l'aide de la cl\xe9 ",(0,r.jsx)(n.strong,{children:"priv\xe9e"})]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#encrypt",children:[(0,r.jsx)(n.strong,{children:".encrypt"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : Object ) : Text"]}),(0,r.jsx)(n.br,{}),"crypte le param\xe8tre ",(0,r.jsx)(n.em,{children:"message"})," \xe0 l'aide de la cl\xe9 ",(0,r.jsx)(n.strong,{children:"publique"})]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#getprivatekey",children:[(0,r.jsx)(n.strong,{children:".getPrivateKey()"})," : Text"]}),(0,r.jsx)(n.br,{}),"retourne la cl\xe9 priv\xe9e de l'objet ",(0,r.jsx)(n.code,{children:"CryptoKey"})]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#getpublickey",children:[(0,r.jsx)(n.strong,{children:".getPublicKey"}),"() : Text"]}),(0,r.jsx)(n.br,{}),"retourne la cl\xe9 publique de l'objet ",(0,r.jsx)(n.code,{children:"CryptoKey"})]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#sign",children:[".",(0,r.jsx)(n.strong,{children:"sign"})," (",(0,r.jsx)(n.em,{children:"message"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : Object) : Text"]}),(0,r.jsx)(n.br,{}),"signe la repr\xe9sentation utf8 de la cha\xeene ",(0,r.jsx)(n.em,{children:"message"})]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#size",children:[(0,r.jsx)(n.strong,{children:".size"})," : Integer"]}),(0,r.jsx)(n.br,{}),"la taille de la cl\xe9 en octets"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#type",children:[(0,r.jsx)(n.strong,{children:".type"})," : Texte"]}),(0,r.jsx)(n.br,{}),'nom du type de cl\xe9 - "RSA", "ECDSA", "PEM"']})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#verify",children:[(0,r.jsx)(n.strong,{children:".verify"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text ; ",(0,r.jsx)(n.em,{children:"signature"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : Object) : object"]}),(0,r.jsx)(n.br,{}),"v\xe9rifie la signature base64 par rapport \xe0 la repr\xe9sentation utf8 du ",(0,r.jsx)(n.em,{children:"message"})]})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"4dcryptokeynew",children:"4D.CryptoKey.new()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Modifications"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"4D.CryptoKey.new"}),"( ",(0,r.jsx)(n.em,{children:"settings"})," : Object ) : 4D.CryptoKey"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"settings"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Settings to generate or load a key pair"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"result"}),(0,r.jsx)(n.td,{children:"4D.CryptoKey"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Objet contenant une paire de cl\xe9s de chiffrement"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"4D.CryptoKey.new()"})," function creates a new ",(0,r.jsx)(n.code,{children:"4D.CryptoKey"})," object encapsulating an encryption key pair, based upon the ",(0,r.jsx)(n.em,{children:"settings"})," object parameter. It allows to generate a new RSA or ECDSA key, or to load an existing key pair from a PEM definition."]}),"\n",(0,r.jsx)(n.h4,{id:"settings",children:(0,r.jsx)(n.em,{children:"settings"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#type",children:"type"})}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsxs)(n.td,{children:["D\xe9finit le type de la cl\xe9 \xe0 cr\xe9er : ",(0,r.jsxs)(n.li,{children:['"RSA" : g\xe9n\xe8re une paire de cl\xe9s RSA, en utilisant ',(0,r.jsx)(n.a,{href:"#size",children:".size"})," comme taille."]}),(0,r.jsxs)(n.li,{children:['"ECDSA" : g\xe9n\xe8re une paire de cl\xe9s Elliptic Curve Digital Signature Algorithm, en utilisant ',(0,r.jsx)(n.a,{href:"#curve",children:".curve"})," comme courbe. A noter que les cl\xe9s ECDSA ne peuvent pas \xeatre utilis\xe9es pour le chiffrement, mais uniquement pour la signature."]}),(0,r.jsxs)(n.li,{children:['"PEM" : charge une d\xe9finition de paire de cl\xe9s au format PEM, en utilisant ',(0,r.jsx)(n.a,{href:"#pem",children:".pem"}),"."]})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#curve",children:"curve"})}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nom de la courbe ECDSA"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#pem",children:"pem"})}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"D\xe9finition PEM d'une cl\xe9 de chiffrement \xe0 charger"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#size",children:"size"})}),(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsx)(n.td,{children:"Taille de la cl\xe9 RSA en octets"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"cryptokey",children:(0,r.jsx)(n.em,{children:"CryptoKey"})}),"\n",(0,r.jsxs)(n.p,{children:["The returned ",(0,r.jsx)(n.code,{children:"CryptoKey"})," object encapsulates an encryption key pair. It is a shared object and can therefore be used by multiple 4D processes simultaneously."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsx)(n.p,{children:"Un message est sign\xe9 par une cl\xe9 priv\xe9e et la signature est v\xe9rifi\xe9e par la cl\xe9 publique correspondante. Le code suivant signe et v\xe9rifie une signature de message simple."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"C\xf4t\xe9 bob :"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'// Cr\xe9er le message\n$message:="hello world"\nFolder(fk desktop folder).file("message.txt").setText($message)\n\n// Cr\xe9er une cl\xe9\n$type:=New object("type";"RSA")\n$key:=4D.CryptoKey.new($type)\n\n// R\xe9cup\xe9rer et stocker une cl\xe9 publique\nFolder(fk desktop folder).file("public.pem").setText($key.getPublicKey())\n\n// R\xe9cup\xe9rer et stocker une signature en base64\nFolder(fk desktop folder).file("signature").setText($key.sign($message;$type))\n\n/*Bob envoie le message, la cl\xe9 publique et la signature \xe0 Alice*/\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"C\xf4t\xe9 Alice :"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'// Get message, public key & signature\n$message:=Folder(fk desktop folder).file("message.txt").getText()\n$publicKey:=Folder(fk desktop folder).file("public.pem").getText()\n$signature:=Folder(fk desktop folder).file("signature").getText()\n\n// Create a key\n$type:=New object("type";"PEM";"pem";$publicKey)\n$key:=4D.CryptoKey.new($type)\n\n// Verify signature\nIf ($key.verify($message;$signature;$type).success)\n// The signature is valid\n\nEnd if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(n.p,{children:"L'extrait de code suivant illustre la signature et la v\xe9rification d'un message \xe0 l'aide d'une nouvelle paire de cl\xe9s ECDSA, afin de cr\xe9er, par exemple, un token Web JSON ES256."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' // G\xe9n\xe9rer une nouvelle paire de cl\xe9s ECDSA\n$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))\n\n  // Obtenir une signature en base64\n$message:="hello world" \n$signature:=$key.sign($message;New object("hash";"SHA256"))\n\n  // V\xe9rifier la signature\n$status:=$key.verify($message;$signature;New object("hash";"SHA256"))\nASSERT($status.success)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"curve",children:".curve"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Modifications"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".curve"})," : Texte"]}),"\n",(0,r.jsx)(n.p,{children:'D\xe9fini uniquement pour les cl\xe9s ECDSA : le nom normalis\xe9 de la courbe de la cl\xe9. G\xe9n\xe9ralement "prime256v1" pour ES256 (d\xe9faut), "secp384r1" pour ES384, "secp521r1" pour ES512.'}),"\n",(0,r.jsx)(n.h2,{id:"decrypt",children:".decrypt()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Modifications"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".decrypt"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : Object ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"message"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsxs)(n.td,{children:["Chaine message \xe0 d\xe9chiffrer \xe0 l'aide de ",(0,r.jsx)(n.code,{children:"options.encodingEncrypted"})," et decrypted."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Options de d\xe9codage"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Statut"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["La fonction ",(0,r.jsx)(n.code,{children:".decrypt()"})," d\xe9chiffre le param\xe8tre ",(0,r.jsx)(n.em,{children:"message"})," \xe0 l'aide de la cl\xe9 ",(0,r.jsx)(n.strong,{children:"priv\xe9e"}),". L'algorithme utilis\xe9 d\xe9pend du type de cl\xe9."]}),"\n",(0,r.jsxs)(n.p,{children:["La cl\xe9 doit \xeatre une cl\xe9 RSA, l'algorithme est RSA-OAEP (voir ",(0,r.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc3447",children:"RFC 3447"}),")."]}),"\n",(0,r.jsx)(n.h4,{id:"options",children:(0,r.jsx)(n.em,{children:"options"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hash"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Algorithme de hachage \xe0 utiliser. Par exemple : "SHA256", "SHA384" ou "SHA512".'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"encodingEncrypted"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsxs)(n.td,{children:["Chiffrement utilis\xe9 pour convertir le param\xe8tre ",(0,r.jsx)(n.code,{children:"message"}),' en repr\xe9sentation binaire \xe0 d\xe9chiffrer. Peut \xeatre "Base64" ou "Base64URL". La valeur par d\xe9faut est "Base64".']})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"encodingDecrypted"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Encodage utilis\xe9 pour convertir le message binaire d\xe9chiffr\xe9 en cha\xeene de r\xe9sultat. Peut \xeatre "UTF-8", "Base64" ou "Base64URL". La valeur par d\xe9faut est "UTF-8".'})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"r\xe9sultat",children:(0,r.jsx)(n.em,{children:"R\xe9sultat"})}),"\n",(0,r.jsxs)(n.p,{children:['La fonction renvoie un objet "status" avec la propri\xe9t\xe9 ',(0,r.jsx)(n.code,{children:"success"})," d\xe9finie sur ",(0,r.jsx)(n.code,{children:"true"})," si le ",(0,r.jsx)(n.em,{children:"message"})," a pu \xeatre d\xe9chiffr\xe9 avec succ\xe8s."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"success"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"True si le message a \xe9t\xe9 d\xe9chiffr\xe9 avec succ\xe8s"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"result"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsxs)(n.td,{children:["Message d\xe9chiffr\xe9 et d\xe9cod\xe9 \xe0 l'aide de ",(0,r.jsx)(n.code,{children:"options.encodingDecrypted"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"errors"}),(0,r.jsx)(n.td,{children:"collection"}),(0,r.jsxs)(n.td,{children:["Si ",(0,r.jsx)(n.code,{children:"success"})," est mis sur ",(0,r.jsx)(n.code,{children:"false"}),", il peut contenir une collection d'erreurs"]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Si le ",(0,r.jsx)(n.em,{children:"message"})," n'a pas pu \xeatre d\xe9chiffr\xe9 parce qu'il n'a pas \xe9t\xe9 chiffr\xe9 avec la m\xeame cl\xe9 ou le m\xeame algorithme, l'objet ",(0,r.jsx)(n.code,{children:"status"})," renvoy\xe9 contient une collection d'erreurs dans ",(0,r.jsx)(n.code,{children:"status.errors"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"encrypt",children:".encrypt()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Modifications"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".encrypt"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : Object ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"message"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsxs)(n.td,{children:["Chaine message \xe0 chiffrer \xe0 l'aide de ",(0,r.jsx)(n.code,{children:"options.encodingDecrypted"})," et encrypted."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Options de chiffrement"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsxs)(n.td,{children:["Message encrypted and encoded using the ",(0,r.jsx)(n.code,{children:"options.encodingEncrypted"})]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["La fonction ",(0,r.jsx)(n.code,{children:".encrypt()"})," crypte le param\xe8tre ",(0,r.jsx)(n.em,{children:"message"})," \xe0 l'aide de la cl\xe9 ",(0,r.jsx)(n.strong,{children:"publique"}),". L'algorithme utilis\xe9 d\xe9pend du type de cl\xe9."]}),"\n",(0,r.jsxs)(n.p,{children:["La cl\xe9 doit \xeatre une cl\xe9 RSA, l'algorithme est RSA-OAEP (voir ",(0,r.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc3447",children:"RFC 3447"}),")."]}),"\n",(0,r.jsx)(n.h5,{id:"options-1",children:(0,r.jsx)(n.em,{children:"options"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hash"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Algorithme de hachage \xe0 utiliser. Par exemple : "SHA256", "SHA384" ou "SHA512".'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"encodingEncrypted"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Chiffrement utilis\xe9 pour convertir le message chiffr\xe9 binaire en cha\xeene de r\xe9sultat. Peut \xeatre "Base64" ou "Base64URL". La valeur par d\xe9faut est "Base64".'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"encodingDecrypted"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsxs)(n.td,{children:["Chiffrement utilis\xe9 pour convertir le param\xe8tre ",(0,r.jsx)(n.code,{children:"message"}),' en repr\xe9sentation binaire \xe0 chiffrer. Peut \xeatre "UTF-8", "Base64" ou "Base64URL". La valeur par d\xe9faut est "UTF-8".']})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"r\xe9sultat-1",children:(0,r.jsx)(n.em,{children:"R\xe9sultat"})}),"\n",(0,r.jsx)(n.p,{children:"La valeur retourn\xe9e est un message chiffr\xe9."}),"\n",(0,r.jsx)(n.h2,{id:"getprivatekey",children:".getPrivateKey()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Modifications"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".getPrivateKey()"})," : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Cl\xe9 primaire au format PEM"})]})})]}),"\n",(0,r.jsxs)(n.p,{children:["La fonction ",(0,r.jsx)(n.code,{children:".getPrivateKey()"}),"  retourne la cl\xe9 priv\xe9e de l'objet ",(0,r.jsx)(n.code,{children:"CryptoKey"})," au format PEM, ou une cha\xeene vide si aucune n'est disponible."]}),"\n",(0,r.jsx)(n.h4,{id:"r\xe9sultat-2",children:(0,r.jsx)(n.em,{children:"R\xe9sultat"})}),"\n",(0,r.jsx)(n.p,{children:"La valeur retourn\xe9e est la cl\xe9 priv\xe9e."}),"\n",(0,r.jsx)(n.h2,{id:"getpublickey",children:".getPublicKey()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Modifications"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".getPublicKey"}),"() : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Cl\xe9 publique au format PEM"})]})})]}),"\n",(0,r.jsxs)(n.p,{children:["La fonction ",(0,r.jsx)(n.code,{children:"getPublicKey()"})," retourne la cl\xe9 publique de l'objet ",(0,r.jsx)(n.code,{children:"CryptoKey"})," au format PEM, ou une cha\xeene vide si aucune n'est disponible."]}),"\n",(0,r.jsx)(n.h4,{id:"r\xe9sultat-3",children:(0,r.jsx)(n.em,{children:"R\xe9sultat"})}),"\n",(0,r.jsx)(n.p,{children:"La valeur retourn\xe9e est la cl\xe9 publique."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"pem",children:".pem"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Modifications"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".pem"})," : Text"]}),"\n",(0,r.jsx)(n.p,{children:"D\xe9finition PEM d'une cl\xe9 de chiffrement \xe0 charger. Si la cl\xe9 est une cl\xe9 priv\xe9e, la cl\xe9 publique RSA ou ECDSA en sera d\xe9duite."}),"\n",(0,r.jsx)(n.h2,{id:"sign",children:".sign()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Modifications"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[".",(0,r.jsx)(n.strong,{children:"sign"})," (",(0,r.jsx)(n.em,{children:"message"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : Object) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"message"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Cha\xeene message \xe0 signer"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Options de signature"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:'Signature en repr\xe9sentation Base64 ou Base64URL, selon l\'option "encoding"'})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["La fonction ",(0,r.jsx)(n.code,{children:"sign()"})," signe la repr\xe9sentation utf8 de la cha\xeene ",(0,r.jsx)(n.em,{children:"message"})," \xe0 l'aide des cl\xe9s objet ",(0,r.jsx)(n.code,{children:"CryptoKey"})," et des ",(0,r.jsx)(n.em,{children:"options"})," fournies. Elle retourne sa signature au format base64 ou base64URL, selon la valeur de l'attribut ",(0,r.jsx)(n.code,{children:"options.encoding"})," que vous avez pass\xe9."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"CryptoKey"})," doit contenir une cl\xe9 ",(0,r.jsx)(n.strong,{children:"priv\xe9e"})," valide."]}),"\n",(0,r.jsx)(n.h4,{id:"options-2",children:(0,r.jsx)(n.em,{children:"options"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hash"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Algorithme de hachage \xe0 utiliser. Par exemple : "SHA256", "SHA384" ou "SHA512". Lorsqu\'elle est utilis\xe9e pour produire un JWT, la taille du hachage doit correspondre \xe0 la taille de l\'algorithme PS@, ES@, RS@ ou PS@'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"encodingEncrypted"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Chiffrement utilis\xe9 pour convertir le message chiffr\xe9 binaire en cha\xeene de r\xe9sultat. Peut \xeatre "Base64" ou "Base64URL". La valeur par d\xe9faut est "Base64".'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pss"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsxs)(n.td,{children:["Utilise le Probabilistic Signature Scheme (PSS). Ignor\xe9 si la cl\xe9 n'est pas une cl\xe9 RSA. Passez ",(0,r.jsx)(n.code,{children:"true"})," lors de la production d'un JWT pour l'algorithme PS@"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"encoding"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Repr\xe9sentation \xe0 utiliser pour la signature. Valeurs possibles : "Base64" ou "Base64URL". La valeur par d\xe9faut est "Base64".'})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"r\xe9sultat-4",children:(0,r.jsx)(n.em,{children:"R\xe9sultat"})}),"\n",(0,r.jsxs)(n.p,{children:["La repr\xe9sentation utf8 de la cha\xeene ",(0,r.jsx)(n.em,{children:"message"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"size",children:".size"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Modifications"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".size"})," : Integer"]}),"\n",(0,r.jsx)(n.p,{children:"D\xe9fini uniquement pour les cl\xe9s RSA : la taille de la cl\xe9 en octets. Habituellement 2048 (par d\xe9faut)."}),"\n",(0,r.jsx)(n.h2,{id:"type",children:".type"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Modifications"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".type"})," : Texte"]}),"\n",(0,r.jsx)(n.p,{children:'Contient le nom du type de cl\xe9 - "RSA", "ECDSA", "PEM" .'}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['"RSA" : paire de cl\xe9s RSA, utilise ',(0,r.jsx)(n.code,{children:"settings.size"})," pour la ",(0,r.jsx)(n.a,{href:"#size",children:".size"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:['"ECDSA" : paire de cl\xe9s Elliptic Curve Digital Signature Algorithm, utilise ',(0,r.jsx)(n.code,{children:"settings.curve"})," pour la propri\xe9t\xe9 ",(0,r.jsx)(n.a,{href:"#curve",children:".curve"}),". A noter que les cl\xe9s ECDSA ne peuvent pas \xeatre utilis\xe9es pour le chiffrement, mais uniquement pour la signature."]}),"\n",(0,r.jsxs)(n.li,{children:['"PEM" : D\xe9finition de paire de cl\xe9s au format PEM, utilise ',(0,r.jsx)(n.code,{children:"settings.pem"})," pour la propri\xe9t\xe9 ",(0,r.jsx)(n.a,{href:"#pem",children:".pem"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"verify",children:".verify()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Modifications"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".verify"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text ; ",(0,r.jsx)(n.em,{children:"signature"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : Object) : object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"message"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Cha\xeene message utilis\xe9e pour g\xe9n\xe9rer la signature"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"signature"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsxs)(n.td,{children:["Signature \xe0 v\xe9rifier, en repr\xe9sentation Base64 ou Base64URL, selon la valeur ",(0,r.jsx)(n.code,{children:"options.encoding"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Options de signature"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Statut de la v\xe9rification"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["La fonction ",(0,r.jsx)(n.code,{children:".verify()"})," v\xe9rifie la signature base64 par rapport \xe0 la repr\xe9sentation utf8 du ",(0,r.jsx)(n.em,{children:"message"})," \xe0 l'aide des cl\xe9s objet ",(0,r.jsx)(n.code,{children:"CryptoKey"})," et des ",(0,r.jsx)(n.em,{children:"options"})," fournies."]}),"\n",(0,r.jsxs)(n.p,{children:["La ",(0,r.jsx)(n.code,{children:"CryptoKey"})," doit contenir une cl\xe9 ",(0,r.jsx)(n.strong,{children:"publique"})," valide."]}),"\n",(0,r.jsx)(n.h4,{id:"options-3",children:(0,r.jsx)(n.em,{children:"options"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hash"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Algorithme de hachage \xe0 utiliser. Par exemple : "SHA256", "SHA384" ou "SHA512". Lorsqu\'elle est utilis\xe9e pour produire un JWT, la taille du hachage doit correspondre \xe0 la taille de l\'algorithme PS@, ES@, RS@ ou PS@'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pss"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsxs)(n.td,{children:["Utilise le Probabilistic Signature Scheme (PSS). Ignor\xe9 si la cl\xe9 n'est pas une cl\xe9 RSA. Passez ",(0,r.jsx)(n.code,{children:"true"})," lors de la v\xe9rification d'un JWT pour l'algorithme PS@"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"encoding"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Repr\xe9sentation de la signature fournie. Valeurs possibles : "Base64" ou "Base64URL". La valeur par d\xe9faut est "Base64".'})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"r\xe9sultat-5",children:(0,r.jsx)(n.em,{children:"R\xe9sultat"})}),"\n",(0,r.jsxs)(n.p,{children:["La fonction retourne un objet status avec la propri\xe9t\xe9 ",(0,r.jsx)(n.code,{children:"success"})," d\xe9finie sur ",(0,r.jsx)(n.code,{children:"true"})," si le ",(0,r.jsx)(n.code,{children:"message"})," a pu \xeatre d\xe9chiffr\xe9 avec succ\xe8s (c'est-\xe0-dire si la signature est correspondante)."]}),"\n",(0,r.jsxs)(n.p,{children:["La fonction retourne un objet status avec la propri\xe9t\xe9 ",(0,r.jsx)(n.code,{children:"success"})," d\xe9finie sur ",(0,r.jsx)(n.code,{children:"true"})," si le ",(0,r.jsx)(n.code,{children:"message"})," a pu \xeatre d\xe9chiffr\xe9 avec succ\xe8s (c'est-\xe0-dire si la signature est correspondante)."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"success"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"True si la signature correspond au message"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"errors"}),(0,r.jsx)(n.td,{children:"collection"}),(0,r.jsxs)(n.td,{children:["Si ",(0,r.jsx)(n.code,{children:"success"})," est mis sur ",(0,r.jsx)(n.code,{children:"false"}),", il peut contenir une collection d'erreurs"]})]})]})]})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>l});var r=s(296540);const i={},t=r.createContext(i);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);