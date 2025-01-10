"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96303"],{357384:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>i,assets:()=>d,toc:()=>l,contentTitle:()=>o});var i=JSON.parse('{"id":"commands-legacy/encrypt-blob","title":"ENCRYPT BLOB","description":"ENCRYPT BLOB ( toEncrypt ; sendPrivKey {; recipPubKey} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/encrypt-blob.md","sourceDirName":"commands-legacy","slug":"/commands/encrypt-blob","permalink":"/docs/commands/encrypt-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fencrypt-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"encrypt-blob","title":"ENCRYPT BLOB","slug":"/commands/encrypt-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOCUMENT TO BLOB","permalink":"/docs/commands/document-to-blob"},"next":{"title":"EXPAND BLOB","permalink":"/docs/commands/expand-blob"}}'),s=t("785893"),r=t("250065");let c={id:"encrypt-blob",title:"ENCRYPT BLOB",slug:"/commands/encrypt-blob",displayed_sidebar:"docs"},o=void 0,d={},l=[{value:"Description",id:"description",level:4},{value:"Optimizing Encryption Commands",id:"optimizing-encryption-commands",level:5},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ENCRYPT BLOB"})," ( ",(0,s.jsx)(n.em,{children:"toEncrypt"})," ; ",(0,s.jsx)(n.em,{children:"sendPrivKey"})," {; ",(0,s.jsx)(n.em,{children:"recipPubKey"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"toEncrypt"}),(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"\u2194"}),(0,s.jsx)(n.td,{children:"Data to encrypt"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Encrypted data"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sendPrivKey"}),(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Sender\u2019s private key"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"recipPubKey"}),(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Recipient\u2019s public key"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ENCRYPT BLOB command encrypts the content of the ",(0,s.jsx)(n.em,{children:"toEncrypt"})," BLOB with the sender\u2019s private key ",(0,s.jsx)(n.em,{children:"sendPrivKey"}),", as well as optionally the recipient\u2019s public key ",(0,s.jsx)(n.em,{children:"recipPubKey"}),". These keys should be generated by the command ",(0,s.jsx)(n.a,{href:"/docs/commands/generate-encryption-keypair",children:"GENERATE ENCRYPTION KEYPAIR"})," (within the \u201CSecured Protocol\u201D theme)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," This command uses the TLS protocol algorithm and encryption features. To be able to use this command, make sure that the components necessary to the TLS protocol are installed properly on your machine \u2014 even if you do not want to use TLS for 4D connections to servers. For detailed information on this protocol, please refer to ",(0,s.jsx)(n.em,{children:"developer.4d.com"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If one key is used for the encryption (the sender\u2019s private key), only people in possession of the public key will be able to read the information. This system guarantees that the sender himself has encrypted the information."}),"\n",(0,s.jsx)(n.li,{children:"The simultaneous use of the sender\u2019s private key and recipient\u2019s public key guarantees that only one recipient will be able to read the information."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The BLOB containing the keys has a PKCS internal format. This standard cross platform format allows exchanging or handling keys simply by copy-pasting in an Email or a text file."}),"\n",(0,s.jsxs)(n.p,{children:["Once the command has been run, the ",(0,s.jsx)(n.em,{children:"toEncrypt"})," BLOB contains the encrypted data that will be decrypted only with the ",(0,s.jsx)(n.a,{href:"/docs/commands/decrypt-blob",children:"DECRYPT BLOB"})," command, with the sender\u2019s public key passed as parameter.",(0,s.jsx)(n.br,{}),"\nMoreover, if the optional recipient\u2019s public key has been used to encrypt the information, the recipient\u2019s private key will also be necessary for decrypting."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Encryption principle with public and private keys for message exchange between two people, \u201CAlice\u201D and \u201CBob\u201D:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(494958).Z+"",width:"391",height:"230"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," The cipher contains a checksum functionality in order to avoid any BLOB content modification (deliberately or not). Consequently, an encrypted BLOB should not be modified otherwise it might not be decrypted."]}),"\n",(0,s.jsx)(n.h5,{id:"optimizing-encryption-commands",children:"Optimizing Encryption Commands"}),"\n",(0,s.jsx)(n.p,{children:"Data encryption slows down the execution of your applications, especially if a pair of keys is used. However, you can consider the following optimization tips:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Depending on the current available memory, the command will execute in \u201Csynchronous\u201D or \u201Casynchronous\u201D mode.",(0,s.jsx)(n.br,{}),"\nThe asynchronous mode is faster, since it does not freeze the other processes. This mode is automatically used if the available memory is at least twice the size of the data to encrypt.",(0,s.jsx)(n.br,{}),"\nOtherwise, for security reasons, the synchronous mode is used. This mode is slower since it freezes the other processes."]}),"\n",(0,s.jsx)(n.li,{children:"Regarding large BLOBs, you can encrypt only a small \u201Cstrategic\u201D part of the BLOB in order to reduce the size of data to be processed as well as the processing time."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Using a single key"}),"\nA company wants to keep the data stored in a 4D database private. It has to regularly send these information to its subsidiaries through files, via the Internet."]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["The company generates a pair of keys with the command ",(0,s.jsx)(n.a,{href:"/docs/commands/generate-encryption-keypair",children:"GENERATE ENCRYPTION KEYPAIR"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//Method GENERATE_KEYS_TXT\n\xa0var $BPublicKey;$BPrivateKey : Blob\n\xa0GENERATE ENCRYPTION KEYPAIR($BPrivateKey;$BPublicKey)\n\xa0BLOB TO DOCUMENT("PublicKey.txt";$BPublicKey)\n\xa0BLOB TO DOCUMENT("PrivateKey.txt";$BPrivateKey)\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The company keeps the private key and sends a copy of the document containing the public key to each subsidiary. For maximum security, the key should be copied on a storage device handed over to the subsidiaries."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Then the company copies the private information (stored in the text field, for example) in BLOBs which will be encrypted with the private key:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//Method ENCRYPT_INFO\n\xa0var $vbEncrypted;$vbPrivateKey : Blob\n\xa0var $vtEncrypted : Text\n\xa0\n\xa0$vtEncrypted:=[Private]Info\n\xa0VARIABLE TO BLOB($vtEncrypted;$vbEncrypted)\n\xa0DOCUMENT TO BLOB("PrivateKey.txt";$vbPrivateKey)\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0ENCRYPT BLOB($vbEncrypted;$vbPrivateKey)\n\xa0\xa0\xa0\xa0BLOB TO DOCUMENT("Update.txt";$vbEncrypted)\n\xa0End if\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The update files can be sent to the subsidiaries (though a non-secured channel such as the Internet). If a third person gets hold of the encrypted file, he will not be able to decrypt it without the public key."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Each subsidiary can decrypt the document with the public key:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//Method DECRYPT_INFO\n\xa0var $vbEncrypted;$vbPublicKey : Blob\n\xa0var $vtDecrytped : Text\n\xa0var $vtDocRef : Time\n\xa0\n\xa0ALERT("Please select an encrypted document.")\n\xa0$vtDocRef:=Open document("")\xa0//Select Update.txt\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vtDocRef)\n\xa0\xa0\xa0\xa0DOCUMENT TO BLOB(Document;$vbEncrypted)\n\xa0\xa0\xa0\xa0DOCUMENT TO BLOB("PublicKey.txt";$vbPublicKey)\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DECRYPT BLOB($vbEncrypted;$vbPublicKey)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO VARIABLE($vbEncrypted;$vtDecrypted)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CREATE RECORD([Private])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Private]Info:=$vtDecrypted\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SAVE RECORD([Private])\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Using keypairs"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["A company wants to use the Internet to exchange information. Each subsidiary receives private information and also sends information to the corporate office. Consequently there are two requirements:",(0,s.jsx)(n.br,{}),"\n- The recipient only should be able to read the message,",(0,s.jsx)(n.br,{}),"\n- The recipient must have proof that the message was sent by the sender himself."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The corporate office and each subsidiary generate their own key pairs (with the GENERATE_KEYS_TXT method)."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The private key is kept secret by both sides. Each subsidiary sends its public key to the corporate office who, in its turn, sends its public key too. This key transfer does not need to be done through a secured channel as the public key is not enough to decrypt the message."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"To encrypt the information to send, the subsidiary or the corporate house executes the ENCRYPT_INFO_2 method which uses the sender\u2019s private key and the recipient\u2019s public key to encrypt the information:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//Method ENCRYPT_INFO_2\n\xa0var $vbEncrypted;$vbPrivateKey;$vbPublicKey : Blob\n\xa0var $vtEncrypt : Text\n\xa0var $vtDocRef : Time\n\xa0\n\xa0$vtEncrypt:=[Private]Info\n\xa0VARIABLE TO BLOB($vtEncrypt;$vbEncrypted)\n\xa0\xa0// Your own private key is loaded...\n\xa0DOCUMENT TO BLOB("PrivateKey.txt";$vbPrivateKey)\n\xa0If(OK=1)\n\xa0\xa0// ...and the recipient\u2019s public key\n\xa0\xa0\xa0\xa0ALERT("Please select the recipient\u2019s public key.")\n\xa0\xa0\xa0\xa0$vhDocRef:=Open document("")\xa0//Public key to load\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vtDocRef)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DOCUMENT TO BLOB(Document;$vbPublicKey)\n\xa0\xa0//BLOB encryption with the two keys as parameters\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ENCRYPT BLOB($vbEncrypted;$vbPrivateKey;$vbPublicKey)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO DOCUMENT("Update.txt";$vbEncrypted)\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The encrypted file can then be sent to the recipient via the Internet. If a third person gets hold of it, he or she will not be able to decrypt the message, even if he or she has the public keys as the recipient\u2019s private key will also be required."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Each recipient can decrypt the document by using his/her own private key and the sender\u2019s public key:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//Method DECRYPT_INFO_2\n\xa0var $vbEncrypted;$vbPublicKey;$vbPrivateKey : Blob\n\xa0var $vtDecrypted : Text\n\xa0var $vhDocRef : Time\n\xa0\n\xa0ALERT("Please select the encrypted document.")\n\xa0$vhDocRef:=Open document("")\xa0//Select the Update.txt file\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\n\xa0\xa0\xa0\xa0DOCUMENT TO BLOB(Document;$vbEncrypted)\n\xa0\xa0//Your own private key is loaded\n\xa0\xa0\xa0\xa0DOCUMENT TO BLOB("PrivateKey.txt";$vbPrivateKey)\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0// ...and the sender\u2019s public key\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Please select the sender\u2019s public key.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vhDocRef:=Open document("")\xa0//Public key to load\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DOCUMENT TO BLOB(Document;$vbPublicKey)\n\xa0\xa0//Decrypting the BLOB with two keys as parameters\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DECRYPT BLOB($vbEncrypted;$vbPublicKey;$vbPrivateKey)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0BLOB TO VARIABLE($vbEncrypted;$vtDecrypted)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CREATE RECORD([Private])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0[Private]Info:=$vtDecrypted\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SAVE RECORD([Private])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"CryptoKey class"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/decrypt-blob",children:"DECRYPT BLOB"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/encrypt-data-blob",children:"Encrypt data BLOB"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/generate-encryption-keypair",children:"GENERATE ENCRYPTION KEYPAIR"})]}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"689"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},494958:function(e,n,t){t.d(n,{Z:function(){return i}});let i="data:image/png;base64,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"},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return c}});var i=t(667294);let s={},r=i.createContext(s);function c(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);