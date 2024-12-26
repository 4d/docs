"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90684"],{607190:function(e,n,s){s.r(n),s.d(n,{metadata:()=>d,contentTitle:()=>a,default:()=>h,assets:()=>i,toc:()=>c,frontMatter:()=>o});var d=JSON.parse('{"id":"commands-legacy/generate-digest","title":"Generate digest","description":"Generate digest ( param ; algoritmo {; *} ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/generate-digest.md","sourceDirName":"commands-legacy","slug":"/commands/generate-digest","permalink":"/docs/pt/commands/generate-digest","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fgenerate-digest.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"generate-digest","title":"Generate digest","slug":"/commands/generate-digest","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Choose","permalink":"/docs/pt/commands/choose"},"next":{"title":"Generate password hash","permalink":"/docs/pt/commands/generate-password-hash"}}'),r=s("785893"),t=s("250065");let o={id:"generate-digest",title:"Generate digest",slug:"/commands/generate-digest",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Generate digest"})," ( ",(0,r.jsx)(n.em,{children:"param"})," ; ",(0,r.jsx)(n.em,{children:"algoritmo"})," {; *} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"param"}),(0,r.jsx)(n.td,{children:"Blob, Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Blob o texto para o qual obter uma chave digest"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"algoritmo"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Algoritimo utilizado para retornar a chave: 0 = MD5 Digest, 1 = SHA1 Digest"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Encode digest in Base64URL"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"resultado"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valor da chave digest"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.strong,{children:"Generate digest"})," retorna a chave digest (ou chave de resumo) de um BLOB ou texto depois da aplica\xe7\xe3o de um algoritmo de criptografia."]}),"\n",(0,r.jsxs)(n.p,{children:["Passe um Text ou ent\xe3o um campo ou vari\xe1vel BLOB no par\xe2metro ",(0,r.jsx)(n.em,{children:"param"}),". A fun\xe7\xe3o ",(0,r.jsx)(n.strong,{children:"Generate digest"}),"  retorna a chave digest como uma string."]}),"\n",(0,r.jsxs)(n.p,{children:["No par\xe2metro ",(0,r.jsx)(n.em,{children:"algoritimo"}),", passe um valor designando qual fun\xe7\xe3o hash vai usar. Use uma das constantes abaixo, encontradas no tema ",(0,r.jsx)(n.em,{children:"Tipo Digest"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"_o_4D REST digest"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"*** Constante obsoleta ***"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MD5 digest"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Utilizar o algoritmo MD5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SHA1 digest"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Utilizar o algoritmo SHA-1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SHA256 digest"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"(Familia SHA-2) SHA-256 \xe9 uma s\xe9rie de 256 bits devolvidos como uma string de 64 caracteres hexadecimais."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SHA512 digest"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"(Fam\xedlia SHA-2) SHA-512 \xe9 uma s\xe9rie de 512 bits devolvidos como uma string de 128 caracteres hexadecimais."})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," N\xe3o \xe9 recomendado usar algoritmos MD5 e SHA para manejar senhas. Se precisar checar senhas, \xe9 recomendado usar os comandos ",(0,r.jsx)(n.a,{href:"/docs/pt/commands/generate-password-hash",children:"Generate password hash"})," e ",(0,r.jsx)(n.a,{href:"/docs/pt/commands/verify-password-hash",children:"Verify password hash "}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Por padr\xe3o, se o par\xe2metro ",(0,r.jsx)(n.em,{children:"*"})," for omitido, o digest retornado \xe9 codificado em hexadecimal. Passe o par\xe2metro ",(0,r.jsx)(n.em,{children:"*"})," se quiser que seja codificado em Base64URL."]}),"\n",(0,r.jsx)(n.p,{children:"O valor retornado para o mesmo objeto \xe9 o mesmo em todas as plataformas (MacOS/Windows). O c\xe1lculo \xe9 realizado baseado na representa\xe7\xe3o em UTF-8 do texto passado no par\xe2metro."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"}),' se usar o comando com um texto/BLOB vazio, n\xe3o retorna void, e sim um valor de string (por exemplo "d41d8cd98f00b204e9800998ecf8427e" para MD5).']}),"\n",(0,r.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,r.jsx)(n.p,{children:"Este exemplo compara duas imagens utilizando o algoritmo MD5:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $vPict1;$vPict2 : Picture\n\xa0var $FirstBlob;$SecondBlob : Blob\n\xa0READ PICTURE FILE("c:\\\\myPhotos\\\\photo1.png")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0READ PICTURE FILE("c:\\\\myPhotos\\\\photo2.png")\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0PICTURE TO BLOB($vPict1;$FirstBlob;".png")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0PICTURE TO BLOB($vPict2;$SecondBlob;".png")\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$MD5_1:=Generate digest($FirstBlob;MD5 digest)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$MD5_2:=Generate digest($SecondBlob;MD5 digest)\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($MD5_1#$MD5_2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Essas duas imagens s\xe3o diferentes.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Essas duas imagens s\xe3o iguais.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"Esses exemplos ilustram como recuperar a chave digest de um texto:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$key1:=Generate digest("The quick brown fox jumps over the lazy dog.";MD5 digest)\n\xa0\xa0// $key1 is "e4d909c290d0fb1ca068ffaddf22cbd0"\n\xa0$key2:=Generate digest("The quick brown fox jumps over the lazy dog.";SHA1 digest)\n\xa0\xa0// $key2 is "408d94384216f890ff7a0c3528e8bed1e0b01621"\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/commands/base64-decode",children:"BASE64 DECODE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/base64-encode",children:"BASE64 ENCODE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/generate-password-hash",children:"Generate password hash"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Protocolo de seguran\xe7a"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/web-validate-digest",children:"WEB Validate digest"})]}),"\n",(0,r.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"1147"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return o}});var d=s(667294);let r={},t=d.createContext(r);function o(e){let n=d.useContext(t);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);