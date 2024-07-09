/*! For license information please see 0eac89c9.07f4aced.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1451],{853381:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var r=s(474848),d=s(28453);const i={id:"CryptoKeyClass",title:"CryptoKey"},t=void 0,c={id:"API/CryptoKeyClass",title:"CryptoKey",description:"A classe CryptoKey da linguagem 4D cont\xe9m um par de chaves de cifrado assim\xe9trico.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/API/CryptoKeyClass.md",sourceDirName:"API",slug:"/API/CryptoKeyClass",permalink:"/docs/pt/20/API/CryptoKeyClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FCryptoKeyClass.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"CryptoKeyClass",title:"CryptoKey"},sidebar:"docs",previous:{title:"Collection",permalink:"/docs/pt/20/API/CollectionClass"},next:{title:"DataClass",permalink:"/docs/pt/20/API/DataClassClass"}},l={},a=[{value:"Exemplo",id:"Exemplo",level:3},{value:"Resumo",id:"Resumo",level:3},{value:"4D. CryptoKey.new()",id:"4D-CryptoKeynew",level:2},{value:"<em>settings</em>",id:"settings",level:4},{value:"<em>CryptoKey</em>",id:"CryptoKey",level:4},{value:".curve",id:"curve",level:2},{value:".decrypt()",id:"decrypt",level:2},{value:"<em>options</em>",id:"options",level:4},{value:"<em>Resultados</em>",id:"Resultados",level:4},{value:".encrypt()",id:"encrypt",level:2},{value:"<em>options</em>",id:"options-1",level:5},{value:"<em>Resultados</em>",id:"Resultados-1",level:4},{value:".getPrivateKey()",id:"getPrivateKey",level:2},{value:"<em>Resultados</em>",id:"Resultados-2",level:4},{value:".getPublicKey()",id:"getPublicKey",level:2},{value:"<em>Resultados</em>",id:"Resultados-3",level:4},{value:".pem",id:"pem",level:2},{value:".sign()",id:"sign",level:2},{value:"<em>options</em>",id:"options-2",level:4},{value:"<em>Resultados</em>",id:"Resultados-4",level:4},{value:".size",id:"size",level:2},{value:".type",id:"type",level:2},{value:".verify()",id:"verify",level:2},{value:"<em>options</em>",id:"options-3",level:4},{value:"<em>Resultados</em>",id:"Resultados-5",level:4}];function h(e){const n={a:"a",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["A classe ",(0,r.jsx)(n.code,{children:"CryptoKey"})," da linguagem 4D cont\xe9m um par de chaves de cifrado assim\xe9trico."]}),"\n",(0,r.jsxs)(n.p,{children:["Esta classe est\xe1 dispon\xedvel na loja de classes de ",(0,r.jsx)(n.code,{children:"4D"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"Exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"O c\xf3digo abaixo de exemplo firma e verifica uma mensagem utilizando um novo par de chaves ECDSA, por exemplo para criar um token web JSON ES256."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' // Generate a new ECDSA key pair\n$key:=4D. CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))\n\n  // Get signature as base64\n$message:="hello world"\n$signature:=$key.sign($message;New object("hash";"SHA256"))\n\n  // Verify signature\n$status:=$key.verify($message;$signature;New object("hash";"SHA256"))\nASSERT($status.success)\n'})}),"\n",(0,r.jsx)(n.h3,{id:"Resumo",children:"Resumo"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#4dcryptokeynew",children:[(0,r.jsx)(n.code,{children:"CryptoKey"})," deve conter uma chave v\xe1lida ",(0,r.jsx)(n.strong,{children:"privada"}),"."]}),"\xa0\xa0\xa0\xa0cria um novo objecto ",(0,r.jsx)(n.code,{children:"4D. CryptoKey"})," que encapsula um par de chaves de encripta\xe7\xe3o"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#curve",children:[(0,r.jsx)(n.strong,{children:".curve"})," : Text"]}),"\xa0\xa0\xa0\xa0nome da curva normalizada da chave"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#decrypt",children:[(0,r.jsx)(n.strong,{children:".decrypt"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : Object ) : Object"]}),"\xa0\xa0\xa0\xa0decifra o par\xe2metro ",(0,r.jsx)(n.em,{children:"mensagem"})," usando a chave ",(0,r.jsx)(n.strong,{children:"privada"})]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#encrypt",children:[(0,r.jsx)(n.strong,{children:".encrypt"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : Object ) : Text"]}),"\xa0\xa0\xa0\xa0encripta o par\xe2metro ",(0,r.jsx)(n.em,{children:"mensagem"})," utilizando a chave ",(0,r.jsx)(n.strong,{children:"public"})]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#getprivatekey",children:[(0,r.jsx)(n.strong,{children:".getPrivateKey()"})," : Text"]}),"\xa0\xa0\xa0\xa0devolve a chave privada do objecto ",(0,r.jsx)(n.code,{children:"CryptoKey"})]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#getpublickey",children:[(0,r.jsx)(n.strong,{children:".getPublicKey( )"})," : Text"]}),"\xa0\xa0\xa0\xa0devolve a chave p\xfablica do objecto ",(0,r.jsx)(n.code,{children:"CryptoKey"})]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#sign",children:[".",(0,r.jsx)(n.strong,{children:"sign"})," (",(0,r.jsx)(n.em,{children:"message"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : Object) : Text"]}),"\xa0\xa0\xa0\xa0assina a representa\xe7\xe3o utf8 de uma mensagem ** string"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#size",children:[(0,r.jsx)(n.strong,{children:".size"})," : Integer"]}),"\xa0\xa0\xa0\xa0o tamanho da chave em bits"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#type",children:[(0,r.jsx)(n.strong,{children:".type"})," : Text"]}),'\xa0\xa0\xa0\xa0nome do tipo da chave - "RSA", "ECDSA", "PEM"']})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#verify",children:[(0,r.jsx)(n.strong,{children:".verify"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text ; ",(0,r.jsx)(n.em,{children:"signature"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : Object) : object"]}),"\xa0\xa0\xa0\xa0verifica a assinatura base64 contra a representa\xe7\xe3o utf8 de ",(0,r.jsx)(n.em,{children:"mensagem"})]})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"4D-CryptoKeynew",children:"4D. CryptoKey.new()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"CryptoKey"})," deve conter uma chave v\xe1lida ",(0,r.jsx)(n.strong,{children:"privada"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"settings"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Par\xe2metros para gerar ou carregar um par de chaves"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"result"}),(0,r.jsx)(n.td,{children:"4D. CryptoKey"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Objeto que cont\xe9m um par de chaves de criptografia"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"|"}),"\n",(0,r.jsxs)(n.p,{children:["A fun\xe7\xe3o ",(0,r.jsx)(n.code,{children:"4D. CryptoKey.new()"})," cria um novo objecto ",(0,r.jsx)(n.code,{children:"4D. CryptoKey"})," que encapsula um par de chaves de encripta\xe7\xe3o, com base no par\xe2metro objecto ",(0,r.jsx)(n.em,{children:"settings"}),". Permite gerar uma nova chave RSA o ECDSA, ou carregar um par de chaves existente desde uma defini\xe7\xe3o PEM."]}),"\n",(0,r.jsx)(n.h4,{id:"settings",children:(0,r.jsx)(n.em,{children:"settings"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propriedade"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#type",children:"type"})}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsxs)(n.td,{children:["Define o tipo da chave a criar: ",(0,r.jsxs)(n.li,{children:['"RSA": gera um par de chaves RSA usando ',(0,r.jsx)(n.a,{href:"#size",children:".size"})," como size."]}),(0,r.jsxs)(n.li,{children:['"ECDSA": gera um par de chaves Elliptic Curve Digital Signature Algorithm, usando ',(0,r.jsx)(n.a,{href:"#curve",children:".curve"})," como curve. Lembre que chaves ECDSA n\xe3o podem ser usadas para a criptografia mas s\xf3 pela assinatura."]}),(0,r.jsxs)(n.li,{children:['"PEM": carrega uma defini\xe7\xe3o de par de chaves em formato PEM, usando ',(0,r.jsx)(n.a,{href:"#pem",children:".pem"}),"."]})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#curve",children:"curve"})}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nome da curva ECDSA"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#pem",children:"pem"})}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Defini\xe7\xe3o PEM de uma chave de cifrado a carregar"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#size",children:"size"})}),(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsx)(n.td,{children:"Tamanho da chave RSA em bits"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"CryptoKey",children:(0,r.jsx)(n.em,{children:"CryptoKey"})}),"\n",(0,r.jsxs)(n.p,{children:["O objeto ",(0,r.jsx)(n.code,{children:"CryptoKey"})," devolvido encapsula um par de chaves de cifrado. \xc9 um objeto compartido e, portanto, pode ser utilizado por v\xe1rios processos 4D simultaneamente."]}),"\n",(0,r.jsx)(n.h2,{id:"curve",children:".curve"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".curve"})," : Text"]}),"\n",(0,r.jsx)(n.p,{children:'Definido apenas para as chaves ECDSA: o nome da curva normalizada da chave. Normalmente "prime256v1" para ES256 (por defeito), "secp384r1" para ES384, "secp521r1" para ES512.'}),"\n",(0,r.jsx)(n.h2,{id:"decrypt",children:".decrypt()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".decrypt"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : Object ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"message"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsxs)(n.td,{children:["String de mensagens a decodificar utilizando ",(0,r.jsx)(n.code,{children:"options.encodingEncrypted"})," e descifrar."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Op\xe7\xf5es de codifica\xe7\xe3o"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultados"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Estado"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"|"}),"\n",(0,r.jsxs)(n.p,{children:["A fun\xe7\xe3o ",(0,r.jsx)(n.code,{children:".decrypt()"})," decifra o par\xe2metro ",(0,r.jsx)(n.em,{children:"mensagem"})," usando a chave ",(0,r.jsx)(n.strong,{children:"privada"}),". O algoritmo utilizado depende do tipo da chave."]}),"\n",(0,r.jsxs)(n.p,{children:['"RSA": um par de chaves RSA, utilizando ',(0,r.jsx)(n.code,{children:"settings.size"})," como [.size](#size)."]}),"\n",(0,r.jsx)(n.h4,{id:"options",children:(0,r.jsx)(n.em,{children:"options"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propriedade"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hash"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Algoritmo Digest a utilizar. Por exemplo: "SHA256", "SHA384", ou "SHA512".'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"encodingEncrypted"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsxs)(n.td,{children:["Codifica\xe7\xe3o utilizada para converter o par\xe2metro ",(0,r.jsx)(n.code,{children:"mensagem"}),' na representa\xe7\xe3o binaria a decifrar. Pode ser "Base64", ou "Base64URL". Por padr\xe3o \xe9 "Base64".']})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"encodingDecrypted"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Codifica\xe7\xe3o utilizada para converter a mensagem bin\xe1rio decifrado na string de resultados. Pode ser "UTF-8", "Base64" ou "Base64URL". Por padr\xe3o \xe9 "UTF-8".'})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"Resultados",children:(0,r.jsx)(n.em,{children:"Resultados"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"CryptoKey"})," deve conter uma chave v\xe1lida ",(0,r.jsx)(n.strong,{children:"publica"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propriedade"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"success"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"True se a mensagem tiver sido decifrada com \xeaxito"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"result"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsxs)(n.td,{children:["Mensagem decifrado e decodificado utilizando ",(0,r.jsx)(n.code,{children:"options.encodingDecrypted"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"errors"}),(0,r.jsx)(n.td,{children:"collection"}),(0,r.jsxs)(n.td,{children:["Se ",(0,r.jsx)(n.code,{children:"success"})," for ",(0,r.jsx)(n.code,{children:"false"}),", pode conter uma cole\xe7\xe3o de erros"]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:['A fun\xe7\xe3o devolve um objeto "status" com a propriedade ',(0,r.jsx)(n.code,{children:"success"})," definida como ",(0,r.jsx)(n.code,{children:"true"})," se ",(0,r.jsx)(n.em,{children:"message"})," puder ser descifrada com \xeaxito."]}),"\n",(0,r.jsx)(n.h2,{id:"encrypt",children:".encrypt()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".encrypt"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : Object ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"message"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsxs)(n.td,{children:["String de mensagens a codificar utilizando ",(0,r.jsx)(n.code,{children:"options.encodingDecrypted"})," e encriptar"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Op\xe7\xf5es de decodifica\xe7\xe3o"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultados"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsxs)(n.td,{children:["Mensagem criptografada e codificada utilizando ",(0,r.jsx)(n.code,{children:"options.encodingEncrypted"})]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"|"}),"\n",(0,r.jsxs)(n.p,{children:["A fun\xe7\xe3o ",(0,r.jsx)(n.code,{children:".encrypt()"})," encripta o par\xe2metro ",(0,r.jsx)(n.em,{children:"mensagem"})," utilizando a chave ",(0,r.jsx)(n.strong,{children:"public"}),". O algoritmo utilizado depende do tipo da chave."]}),"\n",(0,r.jsxs)(n.p,{children:['"RSA": um par de chaves RSA, utilizando ',(0,r.jsx)(n.code,{children:"settings.size"})," como [.size](#size)."]}),"\n",(0,r.jsx)(n.h5,{id:"options-1",children:(0,r.jsx)(n.em,{children:"options"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propriedade"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hash"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Algoritmo Digest a utilizar. Por exemplo: "SHA256", "SHA384", ou "SHA512".'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"encodingEncrypted"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Codifica\xe7\xe3o utilizada para converter a mensagem bin\xe1ria criptografada na string resultante. Pode ser "Base64", ou "Base64URL". Por padr\xe3o \xe9 "Base64".'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"encodingDecrypted"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Codifica\xe7\xe3o utilizada para converter a mensagem bin\xe1ria criptografada na string  resultante. Pode ser "UTF-8", "Base64" ou "Base64URL". Por padr\xe3o \xe9 "UTF-8".'})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"Resultados-1",children:(0,r.jsx)(n.em,{children:"Resultados"})}),"\n",(0,r.jsx)(n.p,{children:"O valor devolvido \xe9 uma mensagem encriptada."}),"\n",(0,r.jsx)(n.h2,{id:"getPrivateKey",children:".getPrivateKey()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".getPrivateKey()"})," : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultados"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Chave privada em formato PEM"})]})})]}),"\n",(0,r.jsx)(n.p,{children:"|"}),"\n",(0,r.jsxs)(n.p,{children:["A fun\xe7\xe3o ",(0,r.jsx)(n.code,{children:".getPrivateKey()"}),"  devolve a chave privada do objecto ",(0,r.jsx)(n.code,{children:"CryptoKey"})," em formato PEM, ou uma string vazia se nenhum estiver dispon\xedvel."]}),"\n",(0,r.jsx)(n.h4,{id:"Resultados-2",children:(0,r.jsx)(n.em,{children:"Resultados"})}),"\n",(0,r.jsx)(n.p,{children:"O valor devolvido \xe9 a chave privada."}),"\n",(0,r.jsx)(n.h2,{id:"getPublicKey",children:".getPublicKey()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".getPublicKey( )"})," : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultados"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Chave p\xfablica em formato PEM"})]})})]}),"\n",(0,r.jsx)(n.p,{children:"|"}),"\n",(0,r.jsxs)(n.p,{children:["A fun\xe7\xe3o ",(0,r.jsx)(n.code,{children:".getPublicKey()"})," devolve a chave p\xfablica do objecto ",(0,r.jsx)(n.code,{children:"CryptoKey"})," em formato PEM, ou uma string vazia se nenhum estiver dispon\xedvel."]}),"\n",(0,r.jsx)(n.h4,{id:"Resultados-3",children:(0,r.jsx)(n.em,{children:"Resultados"})}),"\n",(0,r.jsx)(n.p,{children:"O valor devolvido \xe9 a chave p\xfablica."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"pem",children:".pem"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".pem"})," : Text"]}),"\n",(0,r.jsx)(n.p,{children:"Defini\xe7\xe3o PEM de uma chave de cifrado a carregar. Se a chave for uma chave privada, ser\xe1 deduzido dela a chave p\xfablica RSA ou ECDSA."}),"\n",(0,r.jsx)(n.h2,{id:"sign",children:".sign()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[".",(0,r.jsx)(n.strong,{children:"sign"})," (",(0,r.jsx)(n.em,{children:"message"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : Object) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"message"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"String mensagem a assinar"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Op\xe7\xf5es de assinatura"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultados"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:'Assinatura na representa\xe7\xe3o Base64 ou Base64URL, dependendo da op\xe7\xe3o "codifica\xe7\xe3o".'})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"|"}),"\n",(0,r.jsxs)(n.p,{children:["A fun\xe7\xe3o ",(0,r.jsx)(n.code,{children:".sign()"})," assina a representa\xe7\xe3o utf8 de uma mensagem ** string utilizando o ",(0,r.jsx)(n.code,{children:"CryptoKey"})," chaves-objecto e forneceu ",(0,r.jsx)(n.em,{children:"op\xe7\xf5es"}),". Devolve a sua assinatura no formato base64 ou base64URL, dependendo do valor do atributo ",(0,r.jsx)(n.code,{children:"options.encoding"})," que passou."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"CryptoKey"})," deve conter uma chave v\xe1lida ",(0,r.jsx)(n.strong,{children:"privada"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"options-2",children:(0,r.jsx)(n.em,{children:"options"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propriedade"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hash"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Algoritmo Digest a utilizar. Por exemplo: "SHA256", "SHA384", ou "SHA512". Quando utilizar para produzir um JWT, o tamanho de hash deve coincidir com o tamanho do algoritmo PS@, ES@, RS@ ou PS@'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"encodingEncrypted"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Codifica\xe7\xe3o utilizada para converter a mensagem bin\xe1ria criptografada na string resultante. Pode ser "Base64", ou "Base64URL". Por padr\xe3o \xe9 "Base64".'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pss"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsxs)(n.td,{children:["Utiliza Probabilistic Signature Scheme (PSS). Ignorado se a chave n\xe3o for uma chave RSA. Passa ",(0,r.jsx)(n.code,{children:"true"})," ao produzir um JWT para o algoritmo PS@"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"encoding"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Representation of provided signature. Possible values are "Base64" or "Base64URL". Por padr\xe3o \xe9 "Base64".'})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"Resultados-4",children:(0,r.jsx)(n.em,{children:"Resultados"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"CryptoKey"})," deve conter uma chave v\xe1lida ",(0,r.jsx)(n.strong,{children:"privada"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"size",children:".size"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".size"})," : Integer"]}),"\n",(0,r.jsx)(n.p,{children:"Definido apenas para chaves RSA: o tamanho da chave em bits. ."}),"\n",(0,r.jsx)(n.h2,{id:"type",children:".type"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".type"})," : Text"]}),"\n",(0,r.jsx)(n.p,{children:'Cont\xe9m nome do tipo da chave - "RSA", "ECDSA", "PEM" .'}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['"RSA": um par de chaves RSA, usando ',(0,r.jsx)(n.code,{children:"settings.size"})," como ",(0,r.jsx)(n.a,{href:"#size",children:".size"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:['"ECDSA": um par de chaves de Algoritmos de Assinatura Digital de Curva El\xedptica, usando ',(0,r.jsx)(n.code,{children:"settings.curve"})," como ",(0,r.jsx)(n.a,{href:"#curve",children:".curve"}),". Lembre que chaves ECDSA n\xe3o podem ser usadas para a criptografia mas s\xf3 pela assinatura."]}),"\n",(0,r.jsxs)(n.li,{children:['"PEM": uma defini\xe7\xe3o de par chave em formato PEM, usando ',(0,r.jsx)(n.code,{children:"settings.pem"})," como ",(0,r.jsx)(n.a,{href:"#pem",children:".pem"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"verify",children:".verify()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"18 R4"}),(0,r.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".verify"}),"( ",(0,r.jsx)(n.em,{children:"message"})," : Text ; ",(0,r.jsx)(n.em,{children:"signature"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : Object) : object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"message"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"String de mensagem utilizada para gerar a assinatura"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"signature"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsxs)(n.td,{children:["Assinatura que vai ser verificada, em representa\xe7\xe3o Base64 ou Base64URL, dependendo do valor de ",(0,r.jsx)(n.code,{children:"options.encoding"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Op\xe7\xf5es de assinatura"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultados"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Estado da verifica\xe7\xe3o"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"|"}),"\n",(0,r.jsxs)(n.p,{children:["A fun\xe7\xe3o ",(0,r.jsx)(n.code,{children:".verify()"})," verifica a assinatura base64 contra a representa\xe7\xe3o utf8 de ",(0,r.jsx)(n.em,{children:"mensagem"})," utilizando o ",(0,r.jsx)(n.code,{children:"CryptoKey"})," chaves-objecto e forneceu ",(0,r.jsx)(n.em,{children:"op\xe7\xf5es"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"CryptoKey"})," deve conter uma chave v\xe1lida ",(0,r.jsx)(n.strong,{children:"publica"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"options-3",children:(0,r.jsx)(n.em,{children:"options"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propriedade"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hash"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Algoritmo Digest a utilizar. Por exemplo: "SHA256", "SHA384", ou "SHA512". Quando utilizar para produzir um JWT, o tamanho de hash deve coincidir com o tamanho do algoritmo PS@, ES@, RS@ ou PS@'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pss"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsxs)(n.td,{children:["Utiliza Probabilistic Signature Scheme (PSS). Ignorado se a chave n\xe3o for uma chave RSA. Passa ",(0,r.jsx)(n.code,{children:"true"})," ao verficar um JWT para o algoritmo PS@"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"encoding"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'Codifica\xe7\xe3o utilizada para converter a mensagem bin\xe1ria criptografada na string  resultante. Pode ser "Base64", ou "Base64URL". Por padr\xe3o \xe9 "Base64".'})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"Resultados-5",children:(0,r.jsx)(n.em,{children:"Resultados"})}),"\n",(0,r.jsxs)(n.p,{children:['A fun\xe7\xe3o devolve um objeto "status" com a propriedade ',(0,r.jsx)(n.code,{children:"success"}),"estabelecida para ",(0,r.jsx)(n.code,{children:"true"})," se ",(0,r.jsx)(n.code,{children:"message"})," puder ser verificada com \xeaxito (ou seja, se a assinatura coincidir)."]}),"\n",(0,r.jsxs)(n.p,{children:["Se a assinatura n\xe3o puder ser verificada por n\xe3o ter sido assinada com a mesma ",(0,r.jsx)(n.em,{children:"message"}),", chave ou algoritmo, o objecto ",(0,r.jsx)(n.code,{children:"status"})," devolvido cont\xe9m uma colec\xe7\xe3o de erros em ",(0,r.jsx)(n.code,{children:"status.errors"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propriedade"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"success"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"True se a assinatura corresponder com a mensagem"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"errors"}),(0,r.jsx)(n.td,{children:"collection"}),(0,r.jsxs)(n.td,{children:["Se ",(0,r.jsx)(n.code,{children:"success"})," for ",(0,r.jsx)(n.code,{children:"false"}),", pode conter uma cole\xe7\xe3o de erros"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]})]})]})]})}function o(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},221020:(e,n,s)=>{var r=s(296540),d=Symbol.for("react.element"),i=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var r,i={},a=null,h=null;for(r in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(h=n.ref),n)t.call(n,r)&&!l.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:d,type:e,key:a,ref:h,props:i,_owner:c.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var r=s(296540);const d={},i=r.createContext(d);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);