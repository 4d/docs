"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21206"],{241262:function(e,r,n){n.r(r),n.d(r,{default:()=>m,frontMatter:()=>a,metadata:()=>o,assets:()=>t,toc:()=>c,contentTitle:()=>d});var o=JSON.parse('{"id":"commands-legacy/read-picture-file","title":"READ PICTURE FILE","description":"READ PICTURE FILE ( nomeArquivo ; imagem {; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/read-picture-file.md","sourceDirName":"commands-legacy","slug":"/commands/read-picture-file","permalink":"/docs/pt/commands/read-picture-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fread-picture-file.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"read-picture-file","title":"READ PICTURE FILE","slug":"/commands/read-picture-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PICTURE TO BLOB","permalink":"/docs/pt/commands/picture-to-blob"},"next":{"title":"REMOVE PICTURE FROM LIBRARY","permalink":"/docs/pt/commands/remove-picture-from-library"}}'),i=n("785893"),s=n("250065");let a={id:"read-picture-file",title:"READ PICTURE FILE",slug:"/commands/read-picture-file",displayed_sidebar:"docs"},d=void 0,t={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let r={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"READ PICTURE FILE"})," ( ",(0,i.jsx)(r.em,{children:"nomeArquivo"})," ; ",(0,i.jsx)(r.em,{children:"imagem"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Par\xe2metro"}),(0,i.jsx)(r.th,{children:"Tipo"}),(0,i.jsx)(r.th,{}),(0,i.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"nomeArquivo"}),(0,i.jsx)(r.td,{children:"Text"}),(0,i.jsx)(r.td,{children:"\u2192"}),(0,i.jsx)(r.td,{children:"Nome ou rota completa do arquivo a ser lido, ou string vazio"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"imagem"}),(0,i.jsx)(r.td,{children:"Picture"}),(0,i.jsx)(r.td,{children:"\u2190"}),(0,i.jsx)(r.td,{children:"Campo ou vari\xe1vel que recebe a imagem"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"*"}),(0,i.jsx)(r.td,{children:"Operador"}),(0,i.jsx)(r.td,{children:"\u2192"}),(0,i.jsx)(r.td,{children:"Se passado = aceitar qualquer tipo de arquivo"})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(r.p,{children:["O comando READ PICTURE FILE  permite abrir a imagem guardada no arquivo do disco ",(0,i.jsx)(r.em,{children:"nomeArquivo"})," e carreg\xe1-la no campo ou vari\xe1vel 4D ",(0,i.jsx)(r.em,{children:"imagem"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["Pode passar em ",(0,i.jsx)(r.em,{children:"nomeArquivo"})," a rota de acesso completa do arquivo a ler, ou unicamente o nome do arquivo. Se s\xf3 passa o nome do arquivo, o arquivo ser\xe1 localizado junto ao arquivo de estrutura do banco. Em Windows, igualmente deve indicar a extens\xe3o do arquivo."]}),"\n",(0,i.jsxs)(r.p,{children:['Se passa uma cadeia vazia ("") em ',(0,i.jsx)(r.em,{children:"nomeArquivo"}),", aparece a caixa de di\xe1logo padr\xe3o de abertura de arquivos, permitindo ao usu\xe1rio selecionar o arquivo a ser lido, assim como os formatos dispon\xedveis."]}),"\n",(0,i.jsxs)(r.p,{children:["Pode obter a lista de formatos dispon\xedveis com a ajuda do comando ",(0,i.jsx)(r.a,{href:"/docs/pt/commands/picture-codec-list",title:"PICTURE CODEC LIST",children:"PICTURE CODEC LIST"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["Passe em ",(0,i.jsx)(r.em,{children:"imagem"})," a vari\xe1vel ou o campo imagem que deva receber a imagem lida."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Nota:"})," O formato interno da imagem se armazena dentro da vari\xe1vel ou campo 4D."]}),"\n",(0,i.jsxs)(r.p,{children:["Se passar o par\xe2metro opcional *, o comando aceitar\xe1 qualquer tipo de arquivo. Isso significa que voc\xea pode trabalhar com imagens sem necessariamente ter os codecs adequados (ver a descri\xe7\xe3o do comando ",(0,i.jsx)(r.a,{href:"/docs/pt/commands/blob-to-picture",children:"BLOB TO PICTURE"}),")."]}),"\n",(0,i.jsx)(r.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,i.jsx)(r.p,{children:"Se a execu\xe7\xe3o do comando \xe9 correta, a vari\xe1vel sistema Document cont\xe9m a rota de acesso completa ao arquivo aberto e a vari\xe1vel sistema OK toma o valor 1. Do contr\xe1rio, OK toma o valor 0."}),"\n",(0,i.jsx)(r.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/docs/pt/commands/blob-to-picture",children:"BLOB TO PICTURE"}),(0,i.jsx)(r.br,{}),"\n",(0,i.jsx)(r.em,{children:"Imagens"}),(0,i.jsx)(r.br,{}),"\n",(0,i.jsx)(r.a,{href:"/docs/pt/commands/picture-codec-list",children:"PICTURE CODEC LIST"}),(0,i.jsx)(r.br,{}),"\n",(0,i.jsx)(r.a,{href:"/docs/pt/commands/write-picture-file",children:"WRITE PICTURE FILE"})]}),"\n",(0,i.jsx)(r.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{}),(0,i.jsx)(r.th,{})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"N\xfamero do comando"}),(0,i.jsx)(r.td,{children:"678"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Thread-seguro"}),(0,i.jsx)(r.td,{children:"\u2713"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Modificar vari\xe1veis"}),(0,i.jsx)(r.td,{children:"OK, Document"})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return d},a:function(){return a}});var o=n(667294);let i={},s=o.createContext(i);function a(e){let r=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);