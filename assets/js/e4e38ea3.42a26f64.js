"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54897"],{277244:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>r,assets:()=>a,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/encrypt-data-blob","title":"Encrypt data BLOB","description":"Encrypt data BLOB ( blobToEncrypt ; keyObject ; salt ; encryptedBLOB ) Boolean","source":"@site/versioned_docs/version-20-R9/commands-legacy/encrypt-data-blob.md","sourceDirName":"commands-legacy","slug":"/commands/encrypt-data-blob","permalink":"/docs/commands/encrypt-data-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fencrypt-data-blob.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"encrypt-data-blob","title":"Encrypt data BLOB","slug":"/commands/encrypt-data-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Discover data key","permalink":"/docs/commands/discover-data-key"},"next":{"title":"Encrypt data file","permalink":"/docs/commands/encrypt-data-file"}}'),s=t("785893"),d=t("250065");let c={id:"encrypt-data-blob",title:"Encrypt data BLOB",slug:"/commands/encrypt-data-blob",displayed_sidebar:"docs"},l=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function i(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Encrypt data BLOB"})," ( ",(0,s.jsx)(n.em,{children:"blobToEncrypt"})," ; ",(0,s.jsx)(n.em,{children:"keyObject"})," ; ",(0,s.jsx)(n.em,{children:"salt"})," ; ",(0,s.jsx)(n.em,{children:"encryptedBLOB"})," ) : Boolean",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:"Encrypt data BLOB"})," ( ",(0,s.jsx)(n.em,{children:"blobToEncrypt"})," ; ",(0,s.jsx)(n.em,{children:"passPhrase"})," ; ",(0,s.jsx)(n.em,{children:"salt"})," ; ",(0,s.jsx)(n.em,{children:"encryptedBLOB"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"blobToEncrypt"}),(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"BLOB to encrypt"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"keyObject | passPhrase"}),(0,s.jsx)(n.td,{children:"Object, Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"JSON object containing the encryption key or passphrase for direct encryption key generation (text)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"salt"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Additional salt for algorithm"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"encryptedBlob"}),(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Encrypted BLOB"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"True if encryption has been correctly performed, False otherwise"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Encrypt data BLOB"})," command encrypts the ",(0,s.jsx)(n.em,{children:"blobToEncrypt"})," parameter with the same algorithm as 4D uses to encrypt data (AES-256) and returns the result in ",(0,s.jsx)(n.em,{children:"encryptedBlob"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You can use either a ",(0,s.jsx)(n.em,{children:"keyObject"})," or a ",(0,s.jsx)(n.em,{children:"passPhrase"})," to encrypt the BLOB:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"keyObject"}),": a JSON object containing the encryption key, with the same structure as the object returned by the ",(0,s.jsx)(n.a,{href:"/docs/commands/new-data-key",children:"New data key"})," command"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"passPhrase"}),": a string used to generate the encryption key"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Pass in ",(0,s.jsx)(n.em,{children:"salt"})," a number that will be used to make the encryption more robust."]}),"\n",(0,s.jsxs)(n.p,{children:["If the encryption is successful, the encrypted data is returned in the ",(0,s.jsx)(n.em,{children:"encryptedBlob"})," parameter and the command returns True."]}),"\n",(0,s.jsx)(n.p,{children:"In case of error, the BLOB is returned empty and the command returns False."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," When you encrypt a blob using ",(0,s.jsx)(n.strong,{children:"Encrypt data BLOB"}),", the resulting ",(0,s.jsx)(n.em,{children:"encryptedBlob"})," is a multiple of 16 bytes because of the encryption algorithm. As a consequence, if ",(0,s.jsx)(n.em,{children:"blobToEncrypt"})," is not a multiple of 16 bytes, the command automatically turns it into a multiple of 16 bytes by adding null bytes at the end. To avoid errors when decrypting the blob with ",(0,s.jsx)(n.a,{href:"/docs/commands/decrypt-data-blob",children:"Decrypt data BLOB"}),", you need to handle the size of ",(0,s.jsx)(n.em,{children:"blobToEncrypt"})," when working with files other than text files. For a detailed example on how to do this, see ",(0,s.jsx)(n.a,{href:"https://blog.4d.com/encrypt-your-own-data-with-the-4d-algorithm/",title:"test",children:"this blog article"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Encrypt a text file located in the RESOURCES folder of the database:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $fileToEncrypt;$encryptedFile : 4D.File\n\xa0var $blobToEncrypt;$encryptedBlob : Blob\n\xa0var $result : Boolean\n\xa0\n\xa0$fileToEncrypt:=File("/RESOURCES/confidential.txt")\n\xa0$encryptedFile:=File("/RESOURCES/encryptedConfidential.txt")\n\xa0\n\xa0$blobToencrypt:=$fileToEncrypt.getContent()\n\xa0\n\xa0$result:=Encrypt data BLOB($blobToEncrypt;"myPassPhrase";MAXLONG;$encryptedBlob)\n\xa0$encryptedFile.setContent($encryptedBlob)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/decrypt-data-blob",children:"Decrypt data BLOB"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/encrypt-blob",children:"ENCRYPT BLOB"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/encrypt-data-file",children:"Encrypt data file"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"https://blog.4d.com/encrypt-your-own-data-with-the-4d-algorithm",children:"Encrypt your own data with the 4D algorithm (blog post)"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/new-data-key",children:"New data key"})]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1773"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return c}});var r=t(667294);let s={},d=r.createContext(s);function c(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);