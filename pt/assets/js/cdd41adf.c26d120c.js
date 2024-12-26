"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59725"],{731288:function(e,r,a){a.r(r),a.d(r,{metadata:()=>t,contentTitle:()=>s,default:()=>p,assets:()=>c,toc:()=>i,frontMatter:()=>o});var t=JSON.parse('{"id":"commands-legacy/decrypt-data-blob","title":"Decrypt data BLOB","description":"Decrypt data BLOB ( blobDecriptografar ; objetoChave / passefrase ; salt ; BLOBdecriptografado ) : Boolean","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/decrypt-data-blob.md","sourceDirName":"commands-legacy","slug":"/commands/decrypt-data-blob","permalink":"/docs/pt/commands/decrypt-data-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdecrypt-data-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"decrypt-data-blob","title":"Decrypt data BLOB","slug":"/commands/decrypt-data-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Data file encryption status","permalink":"/docs/pt/commands/data-file-encryption-status"},"next":{"title":"Discover data key","permalink":"/docs/pt/commands/discover-data-key"}}'),d=a("785893"),n=a("250065");let o={id:"decrypt-data-blob",title:"Decrypt data BLOB",slug:"/commands/decrypt-data-blob",displayed_sidebar:"docs"},s=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"Decrypt data BLOB"})," ( ",(0,d.jsx)(r.em,{children:"blobDecriptografar"})," ; objetoChave / passefrase ; ",(0,d.jsx)(r.em,{children:"salt"})," ; ",(0,d.jsx)(r.em,{children:"BLOBdecriptografado"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Par\xe2metro"}),(0,d.jsx)(r.th,{children:"Tipo"}),(0,d.jsx)(r.th,{}),(0,d.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"blobDecriptografar"}),(0,d.jsx)(r.td,{children:"Blob"}),(0,d.jsx)(r.td,{children:"\u2192"}),(0,d.jsx)(r.td,{children:"Blob que vai ser decriptografado"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"objetoChave / passefrase"}),(0,d.jsx)(r.td,{children:"Objeto, Texto"}),(0,d.jsx)(r.td,{children:"\u2192"}),(0,d.jsx)(r.td,{children:"Objeto JSON que cont\xe9m a chave de criptografia ou passefrase para gera\xe7\xe3o de chave direta de criptografia (texto)"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"salt"}),(0,d.jsx)(r.td,{children:"Integer"}),(0,d.jsx)(r.td,{children:"\u2192"}),(0,d.jsx)(r.td,{children:"Salt (ou sal/dados aleat\xf3rios) para o algoritmo de criptografia"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Blobdecriptografado"}),(0,d.jsx)(r.td,{children:"Blob"}),(0,d.jsx)(r.td,{children:"\u2190"}),(0,d.jsx)(r.td,{children:"BLOB que foi decriptografado"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Resultado"}),(0,d.jsx)(r.td,{children:"Boolean"}),(0,d.jsx)(r.td,{children:"\u2190"}),(0,d.jsx)(r.td,{children:"True se a descri\xe7\xe3o tiver sido realizada corretamente. Sen\xe3o False"})]})]})]}),"\n",(0,d.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(r.p,{children:["O comando ",(0,d.jsx)(r.strong,{children:"Decrypt data BLOB"})," realiza a descriptografia do par\xe2metro ",(0,d.jsx)(r.em,{children:"blobDecriptografia"})," com o mesmo algoritmo que 4D usa para a criptografia de dados (AES-256) e retorna o resultado em ",(0,d.jsx)(r.em,{children:"blobDecriptografado"}),"."]}),"\n",(0,d.jsxs)(r.p,{children:["Pode usar ",(0,d.jsx)(r.em,{children:"objetoChave"})," ou uma ",(0,d.jsx)(r.em,{children:"passefrase"})," para decriptografar o BLOB:"]}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.em,{children:"objetoChave"}),": um objeto JSON contendo uma chave de criptografia, com a mesma estrutura que o objeto retornado pelo comando ",(0,d.jsx)(r.a,{href:"/docs/pt/commands/new-data-key",children:"New data key"})]}),"\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.em,{children:"passefrase"}),": uma string usada para gerar a chave de criptografia"]}),"\n"]}),"\n",(0,d.jsxs)(r.p,{children:["O n\xfamero passado no par\xe2metro ",(0,d.jsx)(r.em,{children:"salt"})," ",(0,d.jsx)(r.strong,{children:"Decrypt data BLOB"})," deve corresponder com o usado para a criptografia."]}),"\n",(0,d.jsxs)(r.p,{children:["Se a decriptografia tiver sucesso, os dados decriptografados ser\xe3o retornados no par\xe2metro ",(0,d.jsx)(r.em,{children:"blobDecriptografado"})," e o comando retorna True."]}),"\n",(0,d.jsx)(r.p,{children:"No caso de um erro, o BLOB \xe9 retornado vazio e o comando retorna false."}),"\n",(0,d.jsx)(r.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(r.p,{children:"O exemplo abaixo mostra como decriptogrofar um arquivo criptografado localizado na pasta RESOURCES do banco de dados:"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-4d",children:'\xa0var $fileToDecrypt;$decryptedFile : 4D.File\n\xa0var $blobToDecrypt;$decryptedBlob : Blob\n\xa0var $result : Boolean\n\xa0\n\xa0$fileToDecrypt:=File("/RESOURCES/encryptedConfidential.txt")\n\xa0$decryptedFile:=File("/RESOURCES/decryptedConfidential.txt")\n\xa0\n\xa0$blobToDecrypt:=$fileToDecrypt.getContent()\n\xa0\n\xa0$result:=Decrypt data BLOB($blobToDecrypt;"myPassPhrase";MAXLONG;$decryptedBlob)\n\xa0$decryptedFile.setContent($decryptedBlob)\n'})}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.em,{children:"passefrase"})," e ",(0,d.jsx)(r.em,{children:"salt"})," usados para a descriptografia s\xe3o id\xeanticos a ",(0,d.jsx)(r.em,{children:"passefrase"})," e ",(0,d.jsx)(r.em,{children:"salt"})," usados para criptografar (ver o exemplo ",(0,d.jsx)(r.a,{href:"/docs/pt/commands/encrypt-data-blob",children:"Encrypt data BLOB"}),")."]}),"\n",(0,d.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.a,{href:"/docs/pt/commands/encrypt-data-blob",children:"Encrypt data BLOB"}),(0,d.jsx)(r.br,{}),"\n",(0,d.jsx)(r.a,{href:"/docs/pt/commands/encrypt-data-file",children:"Encrypt data file"}),(0,d.jsx)(r.br,{}),"\n",(0,d.jsx)(r.a,{href:"/docs/pt/commands/new-data-key",children:"New data key"})]}),"\n",(0,d.jsx)(r.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{}),(0,d.jsx)(r.th,{})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"N\xfamero do comando"}),(0,d.jsx)(r.td,{children:"1774"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Thread-seguro"}),(0,d.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function p(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,r,a){a.d(r,{Z:function(){return s},a:function(){return o}});var t=a(667294);let d={},n=t.createContext(d);function o(e){let r=t.useContext(n);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);