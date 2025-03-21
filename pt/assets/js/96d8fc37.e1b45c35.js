"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81638"],{735808:function(e,r,a){a.r(r),a.d(r,{default:()=>p,frontMatter:()=>d,metadata:()=>n,assets:()=>c,toc:()=>i,contentTitle:()=>s});var n=JSON.parse('{"id":"commands-legacy/encrypt-data-blob","title":"Encrypt data BLOB","description":"Encrypt data BLOB ( blobAcriptografar ; objetoChave / passefrase ; salt ; blobCriptografado\' ) : Boolean","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/encrypt-data-blob.md","sourceDirName":"commands-legacy","slug":"/commands/encrypt-data-blob","permalink":"/docs/pt/commands/encrypt-data-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fencrypt-data-blob.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"encrypt-data-blob","title":"Encrypt data BLOB","slug":"/commands/encrypt-data-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Discover data key","permalink":"/docs/pt/commands/discover-data-key"},"next":{"title":"Encrypt data file","permalink":"/docs/pt/commands/encrypt-data-file"}}'),t=a("785893"),o=a("250065");let d={id:"encrypt-data-blob",title:"Encrypt data BLOB",slug:"/commands/encrypt-data-blob",displayed_sidebar:"docs"},s=void 0,c={},i=[{value:"Description",id:"description",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Encrypt data BLOB"})," ( ",(0,t.jsx)(r.em,{children:"blobAcriptografar"})," ; objetoChave / passefrase ; ",(0,t.jsx)(r.em,{children:"salt"})," ; blobCriptografado' ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Par\xe2metro"}),(0,t.jsx)(r.th,{children:"Tipo"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"blobAcriptografar"}),(0,t.jsx)(r.td,{children:"Blob"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"BLOB que vai criptografar"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"objetoChave / passefrase"}),(0,t.jsx)(r.td,{children:"Objeto, Texto"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Objeto JSON que cont\xe9m a chave de criptografia ou passefrase para gera\xe7\xe3o de uma chave de criptografia direta (texto)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"salt"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Sal de criptografia (para adicionar dados aleat\xf3rios) para maior seguran\xe7a do algoritmo"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"blobCriptografado'"}),(0,t.jsx)(r.td,{children:"BLOB"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"BLOB que foi criptografado"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Resultado"}),(0,t.jsx)(r.td,{children:"Boolean"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"TRUE se a criptografia for realizada corretamente, sen\xe3o FALSE"})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:["O comando ",(0,t.jsx)(r.strong,{children:"Encrypt data BLOB"})," encripta o par\xe2metro ",(0,t.jsx)(r.em,{children:"blobCriptografar"})," com o mesmo algoritmo que 4D usas para criptografia de dados (AES-256) e retorna o resultao em ",(0,t.jsx)(r.em,{children:"blobCriptografado"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["Pode usar um ",(0,t.jsx)(r.em,{children:"objetoChave"})," ou uma ",(0,t.jsx)(r.em,{children:"passefrase"})," para criptografar o BLOB:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.em,{children:"objetoChave"}),": um objeto JSON que cont\xe9m a chave de criptografia com a mesma estrutura que o objeto retornado pelo comando ",(0,t.jsx)(r.a,{href:"/docs/pt/commands/new-data-key",children:"New data key"})]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.em,{children:"passefrase"}),": uma string usada para gerar a chave de criptografia"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Passe em ",(0,t.jsx)(r.em,{children:"salt"})," (sal de criptografia) um n\xfamero que ser\xe1 usado para tornar a criptografia mais robusta."]}),"\n",(0,t.jsxs)(r.p,{children:["Se a criptografia tiver sucesso, os dados criptografados s\xe3o retornados no par\xe2metro ",(0,t.jsx)(r.em,{children:"blobCriptografado"})," e o comando retorna True."]}),"\n",(0,t.jsx)(r.p,{children:"No caso de um erro, o BLOB \xe9 retornada vazia e o comando retorna False."}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Nota:"})," Quando criptografar um blob usando ",(0,t.jsx)(r.strong,{children:"Encrypt data BLOB"}),", o resultado ",(0,t.jsx)(r.em,{children:"blobCriptografado"})," \xe9 um m\xfaltiplo de 16 bytes por causa do algoritmo de criptografia. Como consequ\xeancia, se ",(0,t.jsx)(r.em,{children:"blobCriptografar"})," n\xe3o for um m\xfaltiplo de 16 bytes, o comando automaticamente vira para um m\xfaltiplo de 16 bytes para adicionar null bytes no final. Para evitar erros quando decriptografar o blob com ",(0,t.jsx)(r.a,{href:"/docs/pt/commands/decrypt-data-blob",children:"Decrypt data BLOB"}),", precisa manejar o tamanho de ",(0,t.jsx)(r.em,{children:"blobCritpgrafar"})," quando trabalhar com arquivos que n\xe3o forem arquivos de texto. Para um exemplo detalhado de como fazer isso, veja ",(0,t.jsx)(r.a,{href:"https://blog.4d.com/encrypt-your-own-data-with-the-4d-algorithm/",children:"esse artigo no blog"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(r.p,{children:"Para criptografar um arquivo texto na pasta RESOURCES no banco de dados:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'\xa0var $fileToEncrypt;$encryptedFile : 4D.File\n\xa0var $blobToEncrypt;$encryptedBlob : Blob\n\xa0var $result : Boolean\n\xa0\n\xa0$fileToEncrypt:=File("/RESOURCES/confidential.txt")\n\xa0$encryptedFile:=File("/RESOURCES/encryptedConfidential.txt")\n\xa0\n\xa0$blobToencrypt:=$fileToEncrypt.getContent()\n\xa0\n\xa0$result:=Encrypt data BLOB($blobToEncrypt;"myPassPhrase";MAXLONG;$encryptedBlob)\n\xa0$encryptedFile.setContent($encryptedBlob)\n'})}),"\n",(0,t.jsx)(r.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/pt/commands/decrypt-data-blob",children:"Decrypt data BLOB"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/pt/commands/encrypt-blob",children:"ENCRYPT BLOB"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/pt/commands/encrypt-data-file",children:"Encrypt data file"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/pt/commands/new-data-key",children:"New data key"})]}),"\n",(0,t.jsx)(r.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"N\xfamero do comando"}),(0,t.jsx)(r.td,{children:"1773"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Thread-seguro"}),(0,t.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function p(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,r,a){a.d(r,{Z:function(){return s},a:function(){return d}});var n=a(667294);let t={},o=n.createContext(t);function d(e){let r=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);