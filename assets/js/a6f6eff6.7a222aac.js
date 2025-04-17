"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52260"],{707866:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>c,metadata:()=>r,assets:()=>l,toc:()=>i,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/decrypt-data-blob","title":"Decrypt data BLOB","description":"Decrypt data BLOB ( blobToDecrypt ; keyObject ; salt ; decryptedBLOB ) Boolean","source":"@site/versioned_docs/version-20-R9/commands-legacy/decrypt-data-blob.md","sourceDirName":"commands-legacy","slug":"/commands/decrypt-data-blob","permalink":"/docs/commands/decrypt-data-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdecrypt-data-blob.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"decrypt-data-blob","title":"Decrypt data BLOB","slug":"/commands/decrypt-data-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Data file encryption status","permalink":"/docs/commands/data-file-encryption-status"},"next":{"title":"Discover data key","permalink":"/docs/commands/discover-data-key"}}'),d=n("785893"),s=n("250065");let c={id:"decrypt-data-blob",title:"Decrypt data BLOB",slug:"/commands/decrypt-data-blob",displayed_sidebar:"docs"},a=void 0,l={},i=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function o(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:"Decrypt data BLOB"})," ( ",(0,d.jsx)(t.em,{children:"blobToDecrypt"})," ; ",(0,d.jsx)(t.em,{children:"keyObject"})," ; ",(0,d.jsx)(t.em,{children:"salt"})," ; ",(0,d.jsx)(t.em,{children:"decryptedBLOB"})," ) : Boolean",(0,d.jsx)(t.br,{}),(0,d.jsx)(t.strong,{children:"Decrypt data BLOB"})," ( ",(0,d.jsx)(t.em,{children:"blobToDecrypt"})," ; ",(0,d.jsx)(t.em,{children:"passPhrase"})," ; ",(0,d.jsx)(t.em,{children:"salt"})," ; ",(0,d.jsx)(t.em,{children:"decryptedBLOB"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Parameter"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"blobToDecrypt"}),(0,d.jsx)(t.td,{children:"Blob"}),(0,d.jsx)(t.td,{children:"\u2192"}),(0,d.jsx)(t.td,{children:"BLOB to decrypt"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"keyObject | passPhrase"}),(0,d.jsx)(t.td,{children:"Object, Text"}),(0,d.jsx)(t.td,{children:"\u2192"}),(0,d.jsx)(t.td,{children:"JSON object containing the encryption key or passphrase for direct encryption key generation (text)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"salt"}),(0,d.jsx)(t.td,{children:"Integer"}),(0,d.jsx)(t.td,{children:"\u2192"}),(0,d.jsx)(t.td,{children:"Additional salt for algorithm"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"decryptedBlob"}),(0,d.jsx)(t.td,{children:"Blob"}),(0,d.jsx)(t.td,{children:"\u2190"}),(0,d.jsx)(t.td,{children:"decrypted BLOB"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Function result"}),(0,d.jsx)(t.td,{children:"Boolean"}),(0,d.jsx)(t.td,{children:"\u2190"}),(0,d.jsx)(t.td,{children:"True if decryption has been correctly performed, False otherwise"})]})]})]}),"\n",(0,d.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(t.p,{children:["The ",(0,d.jsx)(t.strong,{children:"Decrypt data BLOB"})," command decrypts the ",(0,d.jsx)(t.em,{children:"blobToDecrypt"})," parameter with the same algorithm as 4D uses to decrypt data (AES-256) and returns the result in ",(0,d.jsx)(t.em,{children:"decryptedBLOB"}),"."]}),"\n",(0,d.jsxs)(t.p,{children:["You can use either a ",(0,d.jsx)(t.em,{children:"keyObject"})," or a ",(0,d.jsx)(t.em,{children:"passPhrase"})," to decrypt the BLOB:"]}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:"keyObject"}),": a JSON object containing the encryption key, with the same structure as the object returned by the ",(0,d.jsx)(t.a,{href:"/docs/commands/new-data-key",children:"New data key"})," command"]}),"\n",(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:"passPhrase"}),": a string used to generate the encryption key"]}),"\n"]}),"\n",(0,d.jsxs)(t.p,{children:["The number passed in the ",(0,d.jsx)(t.em,{children:"salt"})," parameter of ",(0,d.jsx)(t.strong,{children:"Decrypt data BLOB"})," must match the one used for encryption."]}),"\n",(0,d.jsxs)(t.p,{children:["If the decryption is successful, the decrypted data is returned in the ",(0,d.jsx)(t.em,{children:"decryptedBLOB"})," parameter and the command returns True."]}),"\n",(0,d.jsx)(t.p,{children:"In case of error, the BLOB is returned empty and the command returns false."}),"\n",(0,d.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,d.jsx)(t.p,{children:"The following example shows how to decrypt an encrypted file located in the RESOURCES folder of the database:"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-4d",children:'\xa0var $fileToDecrypt;$decryptedFile : 4D.File\n\xa0var $blobToDecrypt;$decryptedBlob : Blob\n\xa0var $result : Boolean\n\xa0\n\xa0$fileToDecrypt:=File("/RESOURCES/encryptedConfidential.txt")\n\xa0$decryptedFile:=File("/RESOURCES/decryptedConfidential.txt")\n\xa0\n\xa0$blobToDecrypt:=$fileToDecrypt.getContent()\n\xa0\n\xa0$result:=Decrypt data BLOB($blobToDecrypt;"myPassPhrase";MAXLONG;$decryptedBlob)\n\xa0$decryptedFile.setContent($decryptedBlob)\n'})}),"\n",(0,d.jsxs)(t.p,{children:["The ",(0,d.jsx)(t.em,{children:"passPhrase"})," and ",(0,d.jsx)(t.em,{children:"salt"})," used for decryption are identical to the ",(0,d.jsx)(t.em,{children:"passPhrase"})," and ",(0,d.jsx)(t.em,{children:"salt"})," used for encryption (see the ",(0,d.jsx)(t.a,{href:"/docs/commands/encrypt-data-blob",children:"Encrypt data BLOB"})," example)."]}),"\n",(0,d.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.a,{href:"/docs/commands/encrypt-data-blob",children:"Encrypt data BLOB"}),(0,d.jsx)(t.br,{}),"\n",(0,d.jsx)(t.a,{href:"/docs/commands/encrypt-data-file",children:"Encrypt data file"}),(0,d.jsx)(t.br,{}),"\n",(0,d.jsx)(t.a,{href:"https://blog.4d.com/encrypt-your-own-data-with-the-4d-algorithm",children:"Encrypt your own data with the 4D algorithm"}),(0,d.jsx)(t.br,{}),"\n",(0,d.jsx)(t.a,{href:"/docs/commands/new-data-key",children:"New data key"})]}),"\n",(0,d.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Command number"}),(0,d.jsx)(t.td,{children:"1774"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Thread safe"}),(0,d.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return c}});var r=n(667294);let d={},s=r.createContext(d);function c(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);