"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85764"],{906721:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>r,assets:()=>a,toc:()=>i,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/decrypt-data-blob","title":"Decrypt data BLOB","description":"Decrypt data BLOB ( blobToDecrypt ; keyObject ; salt ; decryptedBLOB ) Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/decrypt-data-blob.md","sourceDirName":"commands-legacy","slug":"/commands/decrypt-data-blob","permalink":"/docs/fr/commands/decrypt-data-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdecrypt-data-blob.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"decrypt-data-blob","title":"Decrypt data BLOB","slug":"/commands/decrypt-data-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Data file encryption status","permalink":"/docs/fr/commands/data-file-encryption-status"},"next":{"title":"Discover data key","permalink":"/docs/fr/commands/discover-data-key"}}'),d=t("785893"),s=t("250065");let c={id:"decrypt-data-blob",title:"Decrypt data BLOB",slug:"/commands/decrypt-data-blob",displayed_sidebar:"docs"},l=void 0,a={},i=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Decrypt data BLOB"})," ( ",(0,d.jsx)(n.em,{children:"blobToDecrypt"})," ; ",(0,d.jsx)(n.em,{children:"keyObject"})," ; ",(0,d.jsx)(n.em,{children:"salt"})," ; ",(0,d.jsx)(n.em,{children:"decryptedBLOB"})," ) : Boolean",(0,d.jsx)(n.br,{}),(0,d.jsx)(n.strong,{children:"Decrypt data BLOB"})," ( ",(0,d.jsx)(n.em,{children:"blobToDecrypt"})," ; ",(0,d.jsx)(n.em,{children:"passPhrase"})," ; ",(0,d.jsx)(n.em,{children:"salt"})," ; ",(0,d.jsx)(n.em,{children:"decryptedBLOB"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Param\xe8tre"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"blobToDecrypt"}),(0,d.jsx)(n.td,{children:"Blob"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"BLOB \xe0 d\xe9crypter"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"keyObject | passPhrase"}),(0,d.jsx)(n.td,{children:"Objet, Texte"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Objet JSON contenant la cl\xe9 de chiffrement ou le mot de passe pour g\xe9n\xe9rer directement une cl\xe9 de chiffrement (texte)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"salt"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Additional salt for algorithm"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"decryptedBlob"}),(0,d.jsx)(n.td,{children:"Blob"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"BLOB d\xe9crypt\xe9"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"R\xe9sultat"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"True si le d\xe9chiffrement a \xe9t\xe9 effectu\xe9 correctement. Sinon False"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["La commande ",(0,d.jsx)(n.strong,{children:"Decrypt data BLOB"}),"d\xe9crypte le param\xe8tre blobToDecrypt avec le m\xeame algorithme utilis\xe9 par 4D pour d\xe9crypter les donn\xe9es (AES-256) et retourne le r\xe9sultat dans decryptedBLOB.."]}),"\n",(0,d.jsxs)(n.p,{children:["Vous pouvez utiliser un ",(0,d.jsx)(n.em,{children:"keyObject"})," ou un ",(0,d.jsx)(n.em,{children:"passPhrase"})," pour d\xe9crypter le BLOB :"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["keyObject : un objet JSON contenant la cl\xe9 de chiffrement, avec la m\xeame structure que l'objet retourn\xe9 par la commande ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/new-data-key",children:"New data key"})]}),"\n",(0,d.jsx)(n.li,{children:"passPhrase : une cha\xeene utilis\xe9e pour g\xe9n\xe9rer la cl\xe9 de chiffrement"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Le nombre pass\xe9 dans le param\xe8tre ",(0,d.jsx)(n.em,{children:"salt"})," de ",(0,d.jsx)(n.strong,{children:"Decrypt data BLOB"})," doit correspondre \xe0 celui utilis\xe9 pour le chiffrement."]}),"\n",(0,d.jsxs)(n.p,{children:["Si le d\xe9chiffrement est r\xe9ussi, les donn\xe9es d\xe9chiffr\xe9es sont retourn\xe9es dans le param\xe8tre ",(0,d.jsx)(n.em,{children:"decryptedBLOB"})," et la commande retourne True."]}),"\n",(0,d.jsx)(n.p,{children:"En cas d'erreur, le BLOB est retourn\xe9 vide et la commande retourne false."}),"\n",(0,d.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,d.jsx)(n.p,{children:"L'exemple suivant montre comment d\xe9crypter un fichier chiffr\xe9 situ\xe9 dans le dossier RESOURCES de la base de donn\xe9es :"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0var $fileToDecrypt;$decryptedFile : 4D.File\n\xa0var $blobToDecrypt;$decryptedBlob : Blob\n\xa0var $result : Boolean\n\xa0\n\xa0$fileToDecrypt:=File("/RESOURCES/encryptedConfidential.txt")\n\xa0$decryptedFile:=File("/RESOURCES/decryptedConfidential.txt")\n\xa0\n\xa0$blobToDecrypt:=$fileToDecrypt.getContent()\n\xa0\n\xa0$result:=Decrypt data BLOB($blobToDecrypt;"myPassPhrase";MAXLONG;$decryptedBlob)\n\xa0$decryptedFile.setContent($decryptedBlob)\n'})}),"\n",(0,d.jsxs)(n.p,{children:["Les param\xe8tres ",(0,d.jsx)(n.em,{children:"passPhrase"})," et le ",(0,d.jsx)(n.em,{children:"salt"})," utilis\xe9s pour le d\xe9chiffrement sont identiques aux param\xe8tres ",(0,d.jsx)(n.em,{children:"passPhrase"})," et ",(0,d.jsx)(n.em,{children:"salt"})," utilis\xe9s pour le cryptage (voir l'exemple ",(0,d.jsx)(n.a,{href:"/docs/fr/commands/encrypt-data-blob",children:"Encrypt data BLOB"}),")."]}),"\n",(0,d.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/fr/commands/encrypt-data-blob",children:"Encrypt data BLOB"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/commands/encrypt-data-file",children:"Encrypt data file"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/fr/commands/new-data-key",children:"New data key"})]}),"\n",(0,d.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,d.jsx)(n.td,{children:"1774"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return c}});var r=t(667294);let d={},s=r.createContext(d);function c(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);