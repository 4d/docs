"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8641"],{761963:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>j,assets:()=>c,toc:()=>h,frontMatter:()=>d});var r=JSON.parse('{"id":"API/CryptoKeyClass","title":"CryptoKey","description":"The CryptoKey class in the 4D language encapsulates an asymmetric encryption key pair.","source":"@site/versioned_docs/version-20/API/CryptoKeyClass.md","sourceDirName":"API","slug":"/API/CryptoKeyClass","permalink":"/docs/20/API/CryptoKeyClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FCryptoKeyClass.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"CryptoKeyClass","title":"CryptoKey"},"sidebar":"docs","previous":{"title":"Collection","permalink":"/docs/20/API/CollectionClass"},"next":{"title":"DataClass","permalink":"/docs/20/API/DataClassClass"}}'),t=s("785893"),i=s("250065");let d={id:"CryptoKeyClass",title:"CryptoKey"},l=void 0,c={},h=[{value:"Summary",id:"summary",level:3},{value:"4D.CryptoKey.new()",id:"4dcryptokeynew",level:2},{value:"<em>settings</em>",id:"settings",level:4},{value:"<em>CryptoKey</em>",id:"cryptokey",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:".curve",id:"curve",level:2},{value:".decrypt()",id:"decrypt",level:2},{value:"<em>options</em>",id:"options",level:4},{value:"<em>Result</em>",id:"result",level:4},{value:".encrypt()",id:"encrypt",level:2},{value:"<em>options</em>",id:"options-1",level:5},{value:"<em>Result</em>",id:"result-1",level:4},{value:".getPrivateKey()",id:"getprivatekey",level:2},{value:"<em>Result</em>",id:"result-2",level:4},{value:".getPublicKey()",id:"getpublickey",level:2},{value:"<em>Result</em>",id:"result-3",level:4},{value:".pem",id:"pem",level:2},{value:".sign()",id:"sign",level:2},{value:"<em>options</em>",id:"options-2",level:4},{value:"<em>Result</em>",id:"result-4",level:4},{value:".size",id:"size",level:2},{value:".type",id:"type",level:2},{value:".verify()",id:"verify",level:2},{value:"<em>options</em>",id:"options-3",level:4},{value:"<em>Result</em>",id:"result-5",level:4}];function x(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"CryptoKey"})," class in the 4D language encapsulates an asymmetric encryption key pair."]}),"\n",(0,t.jsxs)(n.p,{children:["This class is available from the ",(0,t.jsx)(n.code,{children:"4D"})," class store."]}),"\n",(0,t.jsx)(n.admonition,{title:"See also",type:"info",children:(0,t.jsxs)(n.p,{children:["For a comprehensive overview of this class, please refer to the ",(0,t.jsx)(n.a,{href:"https://blog.4d.com/cryptokey-encrypt-decrypt-sign-and-verify/",children:(0,t.jsx)(n.strong,{children:"CryptoKey: encrypt, decrypt, sign, and verify!"})})," blog post."]})}),"\n",(0,t.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.th,{})})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#4dcryptokeynew",children:[(0,t.jsx)(n.strong,{children:"4D.CryptoKey.new"}),"( ",(0,t.jsx)(n.em,{children:"settings"})," : Object ) : 4D.CryptoKey"]}),(0,t.jsx)(n.br,{}),"creates a new ",(0,t.jsx)(n.code,{children:"4D.CryptoKey"})," object encapsulating an encryption key pair"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#curve",children:[(0,t.jsx)(n.strong,{children:".curve"})," : Text"]}),(0,t.jsx)(n.br,{}),"normalised curve name of the key"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#decrypt",children:[(0,t.jsx)(n.strong,{children:".decrypt"}),"( ",(0,t.jsx)(n.em,{children:"message"})," : Text ; ",(0,t.jsx)(n.em,{children:"options"})," : Object ) : Object"]}),(0,t.jsx)(n.br,{}),"decrypts the ",(0,t.jsx)(n.em,{children:"message"})," parameter using the ",(0,t.jsx)(n.strong,{children:"private"})," key"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#encrypt",children:[(0,t.jsx)(n.strong,{children:".encrypt"}),"( ",(0,t.jsx)(n.em,{children:"message"})," : Text ; ",(0,t.jsx)(n.em,{children:"options"})," : Object ) : Text"]}),(0,t.jsx)(n.br,{}),"encrypts the ",(0,t.jsx)(n.em,{children:"message"})," parameter using the ",(0,t.jsx)(n.strong,{children:"public"})," key"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#getprivatekey",children:[(0,t.jsx)(n.strong,{children:".getPrivateKey()"})," : Text"]}),(0,t.jsx)(n.br,{}),"returns the private key of the ",(0,t.jsx)(n.code,{children:"CryptoKey"})," object"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#getpublickey",children:[(0,t.jsx)(n.strong,{children:".getPublicKey"}),"() : Text"]}),(0,t.jsx)(n.br,{}),"returns the public key of the ",(0,t.jsx)(n.code,{children:"CryptoKey"})," object"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#sign",children:[".",(0,t.jsx)(n.strong,{children:"sign"})," (",(0,t.jsx)(n.em,{children:"message"})," : Text ; ",(0,t.jsx)(n.em,{children:"options"})," : Object) : Text"]}),(0,t.jsx)(n.br,{}),"signs the utf8 representation of a ",(0,t.jsx)(n.em,{children:"message"})," string"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#size",children:[(0,t.jsx)(n.strong,{children:".size"})," : Integer"]}),(0,t.jsx)(n.br,{}),"the size of the key in bits"]})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#type",children:[(0,t.jsx)(n.strong,{children:".type"})," : Text"]}),(0,t.jsx)(n.br,{}),'name of the key type - "RSA", "ECDSA", "PEM"']})}),(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.td,{children:[(0,t.jsxs)(n.a,{href:"#verify",children:[(0,t.jsx)(n.strong,{children:".verify"}),"( ",(0,t.jsx)(n.em,{children:"message"})," : Text ; ",(0,t.jsx)(n.em,{children:"signature"})," : Text ; ",(0,t.jsx)(n.em,{children:"options"})," : Object) : Object"]}),(0,t.jsx)(n.br,{}),"verifies the base64 signature against the utf8 representation of ",(0,t.jsx)(n.em,{children:"message"})]})})]})]}),"\n",(0,t.jsx)(n.h2,{id:"4dcryptokeynew",children:"4D.CryptoKey.new()"}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"18 R4"}),(0,t.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"4D.CryptoKey.new"}),"( ",(0,t.jsx)(n.em,{children:"settings"})," : Object ) : 4D.CryptoKey"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"settings"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Settings to generate or load a key pair"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Result"}),(0,t.jsx)(n.td,{children:"4D.CryptoKey"}),(0,t.jsx)(n.td,{children:"<-"}),(0,t.jsx)(n.td,{children:"Object encapsulating an encryption key pair"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"4D.CryptoKey.new()"})," function creates a new ",(0,t.jsx)(n.code,{children:"4D.CryptoKey"})," object encapsulating an encryption key pair, based upon the ",(0,t.jsx)(n.em,{children:"settings"})," object parameter. It allows to generate a new RSA or ECDSA key, or to load an existing key pair from a PEM definition."]}),"\n",(0,t.jsx)(n.h4,{id:"settings",children:(0,t.jsx)(n.em,{children:"settings"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#type",children:"type"})}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsxs)(n.td,{children:["Defines the type of the key to create: ",(0,t.jsxs)(n.li,{children:['"RSA": generates a RSA key pair, using ',(0,t.jsx)(n.a,{href:"#size",children:".size"})," as size."]}),(0,t.jsxs)(n.li,{children:['"ECDSA": generates an Elliptic Curve Digital Signature Algorithm key pair, using ',(0,t.jsx)(n.a,{href:"#curve",children:".curve"})," as curve. Note that ECDSA keys cannot be used for encryption but only for signature."]}),(0,t.jsxs)(n.li,{children:['"PEM": loads a key pair definition in PEM format, using ',(0,t.jsx)(n.a,{href:"#pem",children:".pem"}),"."]})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#curve",children:"curve"})}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"Name of ECDSA curve"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#pem",children:"pem"})}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"PEM definition of an encryption key to load"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#size",children:"size"})}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:"Size of RSA key in bits"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"cryptokey",children:(0,t.jsx)(n.em,{children:"CryptoKey"})}),"\n",(0,t.jsxs)(n.p,{children:["The returned ",(0,t.jsx)(n.code,{children:"CryptoKey"})," object encapsulates an encryption key pair. It is a shared object and can therefore be used by multiple 4D processes simultaneously."]}),"\n",(0,t.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(n.p,{children:"A message is signed by a private key and the signature is verified by the corresponding public key. The following code signs and verifies a simple message signature."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Bob's side:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'// Create the message\n$message:="hello world"\nFolder(fk desktop folder).file("message.txt").setText($message)\n\n// Create a key\n$type:=New object("type";"RSA")\n$key:=4D.CryptoKey.new($type)\n\n// Get the public key and save it\nFolder(fk desktop folder).file("public.pem").setText($key.getPublicKey())\n\n// Get signature as base64 and save it\nFolder(fk desktop folder).file("signature").setText($key.sign($message;$type))\n\n/*Bob sends the message, the public key and the signature to Alice*/\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Alice's side:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'// Get message, public key & signature\n$message:=Folder(fk desktop folder).file("message.txt").getText()\n$publicKey:=Folder(fk desktop folder).file("public.pem").getText()\n$signature:=Folder(fk desktop folder).file("signature").getText()\n\n// Create a key\n$type:=New object("type";"PEM";"pem";$publicKey)\n$key:=4D.CryptoKey.new($type)\n\n// Verify signature\nIf ($key.verify($message;$signature;$type).success)\n// The signature is valid\n\nEnd if\n'})}),"\n",(0,t.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(n.p,{children:"The following sample code signs and verifies a message using a new ECDSA key pair, for example in order to make a ES256 JSON Web token."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' // Generate a new ECDSA key pair\n$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))\n\n  // Get signature as base64\n$message:="hello world"\n$signature:=$key.sign($message;New object("hash";"SHA256"))\n\n  // Verify signature\n$status:=$key.verify($message;$signature;New object("hash";"SHA256"))\nASSERT($status.success)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"curve",children:".curve"}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"18 R4"}),(0,t.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".curve"})," : Text"]}),"\n",(0,t.jsx)(n.p,{children:'Defined only for ECDSA keys: the normalised curve name of the key. Usually "prime256v1" for ES256 (default), "secp384r1" for ES384, "secp521r1" for ES512.'}),"\n",(0,t.jsx)(n.h2,{id:"decrypt",children:".decrypt()"}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"18 R4"}),(0,t.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".decrypt"}),"( ",(0,t.jsx)(n.em,{children:"message"})," : Text ; ",(0,t.jsx)(n.em,{children:"options"})," : Object ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"message"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsxs)(n.td,{children:["Message string to be decoded using ",(0,t.jsx)(n.code,{children:"options.encodingEncrypted"})," and decrypted."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"options"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Decoding options"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Result"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"<-"}),(0,t.jsx)(n.td,{children:"Status"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".decrypt()"})," function decrypts the ",(0,t.jsx)(n.em,{children:"message"})," parameter using the ",(0,t.jsx)(n.strong,{children:"private"})," key. The algorithm used depends on the type of the key."]}),"\n",(0,t.jsxs)(n.p,{children:["The key must be a RSA key, the algorithm is RSA-OAEP (see ",(0,t.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc3447",children:"RFC 3447"}),")."]}),"\n",(0,t.jsx)(n.h4,{id:"options",children:(0,t.jsx)(n.em,{children:"options"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"hash"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:'Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512".'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"encodingEncrypted"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsxs)(n.td,{children:["Encoding used to convert the ",(0,t.jsx)(n.code,{children:"message"}),' parameter into the binary representation to decrypt. Can be "Base64" or "Base64URL". Default is "Base64".']})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"encodingDecrypted"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:'Encoding used to convert the binary decrypted message into the result string. Can be "UTF-8", "Base64", or "Base64URL". Default is "UTF-8".'})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"result",children:(0,t.jsx)(n.em,{children:"Result"})}),"\n",(0,t.jsxs)(n.p,{children:["The function returns a status object with ",(0,t.jsx)(n.code,{children:"success"})," property set to ",(0,t.jsx)(n.code,{children:"true"})," if the ",(0,t.jsx)(n.em,{children:"message"})," could be successfully decrypted."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"success"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"True if the message has been successfully decrypted"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"result"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsxs)(n.td,{children:["Message decrypted and decoded using the ",(0,t.jsx)(n.code,{children:"options.encodingDecrypted"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"errors"}),(0,t.jsx)(n.td,{children:"collection"}),(0,t.jsxs)(n.td,{children:["If ",(0,t.jsx)(n.code,{children:"success"})," is ",(0,t.jsx)(n.code,{children:"false"}),", may contain a collection of errors"]})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["In case the ",(0,t.jsx)(n.em,{children:"message"})," couldn't be decrypted because it was not encrypted with the same key or algorithm, the ",(0,t.jsx)(n.code,{children:"status"})," object being returned contains an error collection in ",(0,t.jsx)(n.code,{children:"status.errors"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"encrypt",children:".encrypt()"}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"18 R4"}),(0,t.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".encrypt"}),"( ",(0,t.jsx)(n.em,{children:"message"})," : Text ; ",(0,t.jsx)(n.em,{children:"options"})," : Object ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"message"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsxs)(n.td,{children:["Message string to be encoded using ",(0,t.jsx)(n.code,{children:"options.encodingDecrypted"})," and encrypted."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"options"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Encoding options"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Result"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"<-"}),(0,t.jsxs)(n.td,{children:["Message encrypted and encoded using the ",(0,t.jsx)(n.code,{children:"options.encodingEncrypted"})]})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".encrypt()"})," function encrypts the ",(0,t.jsx)(n.em,{children:"message"})," parameter using the ",(0,t.jsx)(n.strong,{children:"public"})," key. The algorithm used depends on the type of the key."]}),"\n",(0,t.jsxs)(n.p,{children:["The key must be a RSA key, the algorithm is RSA-OAEP (see ",(0,t.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc3447",children:"RFC 3447"}),")."]}),"\n",(0,t.jsx)(n.h5,{id:"options-1",children:(0,t.jsx)(n.em,{children:"options"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"hash"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:'Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512".'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"encodingEncrypted"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:'Encoding used to convert the binary encrypted message into the result string. Can be "Base64", or "Base64URL". Default is "Base64".'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"encodingDecrypted"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsxs)(n.td,{children:["Encoding used to convert the ",(0,t.jsx)(n.code,{children:"message"}),' parameter into the binary representation to encrypt. Can be "UTF-8", "Base64", or "Base64URL". Default is "UTF-8".']})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"result-1",children:(0,t.jsx)(n.em,{children:"Result"})}),"\n",(0,t.jsx)(n.p,{children:"The returned value is an encrypted message."}),"\n",(0,t.jsx)(n.h2,{id:"getprivatekey",children:".getPrivateKey()"}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"18 R4"}),(0,t.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".getPrivateKey()"})," : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Result"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"<-"}),(0,t.jsx)(n.td,{children:"Private key in PEM format"})]})})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".getPrivateKey()"})," function  returns the private key of the ",(0,t.jsx)(n.code,{children:"CryptoKey"})," object in PEM format, or an empty string if none is available."]}),"\n",(0,t.jsx)(n.h4,{id:"result-2",children:(0,t.jsx)(n.em,{children:"Result"})}),"\n",(0,t.jsx)(n.p,{children:"The returned value is the private key."}),"\n",(0,t.jsx)(n.h2,{id:"getpublickey",children:".getPublicKey()"}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"18 R4"}),(0,t.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".getPublicKey"}),"() : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Result"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"<-"}),(0,t.jsx)(n.td,{children:"Public key in PEM format"})]})})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".getPublicKey()"})," function returns the public key of the ",(0,t.jsx)(n.code,{children:"CryptoKey"})," object in PEM format, or an empty string if none is available."]}),"\n",(0,t.jsx)(n.h4,{id:"result-3",children:(0,t.jsx)(n.em,{children:"Result"})}),"\n",(0,t.jsx)(n.p,{children:"The returned value is the public key."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"pem",children:".pem"}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"18 R4"}),(0,t.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".pem"})," : Text"]}),"\n",(0,t.jsx)(n.p,{children:"PEM definition of an encryption key to load. If the key is a private key, the RSA or ECDSA public key will be deduced from it."}),"\n",(0,t.jsx)(n.h2,{id:"sign",children:".sign()"}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"18 R4"}),(0,t.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[".",(0,t.jsx)(n.strong,{children:"sign"})," (",(0,t.jsx)(n.em,{children:"message"})," : Text ; ",(0,t.jsx)(n.em,{children:"options"})," : Object) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"message"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Message string to sign"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"options"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Signing options"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Result"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"<-"}),(0,t.jsx)(n.td,{children:'Signature in Base64 or Base64URL representation, depending on "encoding" option'})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".sign()"})," function signs the utf8 representation of a ",(0,t.jsx)(n.em,{children:"message"})," string using the ",(0,t.jsx)(n.code,{children:"CryptoKey"})," object keys and provided ",(0,t.jsx)(n.em,{children:"options"}),". It returns its signature in base64 or base64URL format, depending on the value of the ",(0,t.jsx)(n.code,{children:"options.encoding"})," attribute you passed."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"CryptoKey"})," must contain a valid ",(0,t.jsx)(n.strong,{children:"private"})," key."]}),"\n",(0,t.jsx)(n.h4,{id:"options-2",children:(0,t.jsx)(n.em,{children:"options"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"hash"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:'Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512". When used to produce a JWT, the hash size must match the PS@, ES@, RS@, or PS@ algorithm size'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"encodingEncrypted"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:'Encoding used to convert the binary encrypted message into the result string. Can be "Base64", or "Base64URL". Default is "Base64".'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pss"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsxs)(n.td,{children:["Use Probabilistic Signature Scheme (PSS). Ignored if the key is not an RSA key. Pass ",(0,t.jsx)(n.code,{children:"true"})," when producing a JWT for PS@ algorithm"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"encoding"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:'ERepresentation to be used for result signature. Possible values: "Base64" or "Base64URL". Default is "Base64".'})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"result-4",children:(0,t.jsx)(n.em,{children:"Result"})}),"\n",(0,t.jsxs)(n.p,{children:["The utf8 representation of the ",(0,t.jsx)(n.em,{children:"message"})," string."]}),"\n",(0,t.jsx)(n.h2,{id:"size",children:".size"}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"18 R4"}),(0,t.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".size"})," : Integer"]}),"\n",(0,t.jsx)(n.p,{children:"Defined only for RSA keys: the size of the key in bits. Typically 2048 (default)."}),"\n",(0,t.jsx)(n.h2,{id:"type",children:".type"}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"18 R4"}),(0,t.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".type"})," : Text"]}),"\n",(0,t.jsx)(n.p,{children:'Contains the name of the key type - "RSA", "ECDSA", "PEM" .'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:['"RSA": an RSA key pair, using ',(0,t.jsx)(n.code,{children:"settings.size"})," as ",(0,t.jsx)(n.a,{href:"#size",children:".size"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:['"ECDSA": an Elliptic Curve Digital Signature Algorithm key pair, using ',(0,t.jsx)(n.code,{children:"settings.curve"})," as ",(0,t.jsx)(n.a,{href:"#curve",children:".curve"}),". Note that ECDSA keys cannot be used for encryption but only for signature."]}),"\n",(0,t.jsxs)(n.li,{children:['"PEM": a key pair definition in PEM format, using ',(0,t.jsx)(n.code,{children:"settings.pem"})," as ",(0,t.jsx)(n.a,{href:"#pem",children:".pem"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"verify",children:".verify()"}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Changes"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"18 R4"}),(0,t.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:".verify"}),"( ",(0,t.jsx)(n.em,{children:"message"})," : Text ; ",(0,t.jsx)(n.em,{children:"signature"})," : Text ; ",(0,t.jsx)(n.em,{children:"options"})," : Object) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"message"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Message string that was used to produce the signature"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"signature"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsxs)(n.td,{children:["Signature to verify, in Base64 or Base64URL representation, depending on ",(0,t.jsx)(n.code,{children:"options.encoding"})," value"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"options"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Signing options"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Result"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"<-"}),(0,t.jsx)(n.td,{children:"Status of the verification"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:".verify()"})," function verifies the base64 signature against the utf8 representation of ",(0,t.jsx)(n.em,{children:"message"})," using the ",(0,t.jsx)(n.code,{children:"CryptoKey"})," object keys and provided ",(0,t.jsx)(n.em,{children:"options"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"CryptoKey"})," must contain a valid ",(0,t.jsx)(n.strong,{children:"public"})," key."]}),"\n",(0,t.jsx)(n.h4,{id:"options-3",children:(0,t.jsx)(n.em,{children:"options"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"hash"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:'Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512". When used to produce a JWT, the hash size must match the PS@, ES@, RS@, or PS@ algorithm size'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pss"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsxs)(n.td,{children:["Use Probabilistic Signature Scheme (PSS). Ignored if the key is not an RSA key. Pass ",(0,t.jsx)(n.code,{children:"true"})," when verifying a JWT for PS@ algorithm"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"encoding"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:'Representation of provided signature. Possible values are "Base64" or "Base64URL". Default is "Base64".'})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"result-5",children:(0,t.jsx)(n.em,{children:"Result"})}),"\n",(0,t.jsxs)(n.p,{children:["The function returns a status object with ",(0,t.jsx)(n.code,{children:"success"})," property set to ",(0,t.jsx)(n.code,{children:"true"})," if ",(0,t.jsx)(n.code,{children:"message"})," could be successfully verified (i.e. the signature matches)."]}),"\n",(0,t.jsxs)(n.p,{children:["In case the signature couldn't be verified because it was not signed with the same ",(0,t.jsx)(n.em,{children:"message"}),", key or algorithm, the ",(0,t.jsx)(n.code,{children:"status"})," object being returned contains an error collection in ",(0,t.jsx)(n.code,{children:"status.errors"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"success"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"True if the signature matches the message"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"errors"}),(0,t.jsx)(n.td,{children:"collection"}),(0,t.jsxs)(n.td,{children:["If ",(0,t.jsx)(n.code,{children:"success"})," is ",(0,t.jsx)(n.code,{children:"false"}),", may contain a collection of errors"]})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var r=s(667294);let t={},i=r.createContext(t);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);