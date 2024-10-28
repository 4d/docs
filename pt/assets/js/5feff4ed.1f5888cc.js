"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95390],{882891:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>t,toc:()=>c});var a=r(474848),n=r(28453);const i={id:"read-picture-file",title:"READ PICTURE FILE",slug:"/commands/read-picture-file",displayed_sidebar:"docs"},s=void 0,t={id:"commands-legacy/read-picture-file",title:"READ PICTURE FILE",description:"READ PICTURE FILE ( nomeArquivo ; imagem {; *} )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/read-picture-file.md",sourceDirName:"commands-legacy",slug:"/commands/read-picture-file",permalink:"/docs/pt/commands/read-picture-file",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fread-picture-file.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"read-picture-file",title:"READ PICTURE FILE",slug:"/commands/read-picture-file",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"PICTURE TO BLOB",permalink:"/docs/pt/commands/picture-to-blob"},next:{title:"REMOVE PICTURE FROM LIBRARY",permalink:"/docs/pt/commands/remove-picture-from-library"}},d={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function m(e){const o={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"READ PICTURE FILE"})," ( ",(0,a.jsx)(o.em,{children:"nomeArquivo"})," ; ",(0,a.jsx)(o.em,{children:"imagem"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Par\xe2metro"}),(0,a.jsx)(o.th,{children:"Tipo"}),(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"nomeArquivo"}),(0,a.jsx)(o.td,{children:"Text"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Nome ou rota completa do arquivo a ser lido, ou string vazio"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"imagem"}),(0,a.jsx)(o.td,{children:"Picture"}),(0,a.jsx)(o.td,{children:"\u2190"}),(0,a.jsx)(o.td,{children:"Campo ou vari\xe1vel que recebe a imagem"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"*"}),(0,a.jsx)(o.td,{children:"Operador"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Se passado = aceitar qualquer tipo de arquivo"})]})]})]}),"\n",(0,a.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(o.p,{children:["O comando READ PICTURE FILE  permite abrir a imagem guardada no arquivo do disco ",(0,a.jsx)(o.em,{children:"nomeArquivo"})," e carreg\xe1-la no campo ou vari\xe1vel 4D ",(0,a.jsx)(o.em,{children:"imagem"}),"."]}),"\n",(0,a.jsxs)(o.p,{children:["Pode passar em ",(0,a.jsx)(o.em,{children:"nomeArquivo"})," a rota de acesso completa do arquivo a ler, ou unicamente o nome do arquivo. Se s\xf3 passa o nome do arquivo, o arquivo ser\xe1 localizado junto ao arquivo de estrutura do banco. Em Windows, igualmente deve indicar a extens\xe3o do arquivo."]}),"\n",(0,a.jsxs)(o.p,{children:['Se passa uma cadeia vazia ("") em ',(0,a.jsx)(o.em,{children:"nomeArquivo"}),", aparece a caixa de di\xe1logo padr\xe3o de abertura de arquivos, permitindo ao usu\xe1rio selecionar o arquivo a ser lido, assim como os formatos dispon\xedveis."]}),"\n",(0,a.jsxs)(o.p,{children:["Pode obter a lista de formatos dispon\xedveis com a ajuda do comando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/picture-codec-list",title:"PICTURE CODEC LIST",children:"PICTURE CODEC LIST"}),"."]}),"\n",(0,a.jsxs)(o.p,{children:["Passe em ",(0,a.jsx)(o.em,{children:"imagem"})," a vari\xe1vel ou o campo imagem que deva receber a imagem lida."]}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Nota:"})," O formato interno da imagem se armazena dentro da vari\xe1vel ou campo 4D."]}),"\n",(0,a.jsxs)(o.p,{children:["Se passar o par\xe2metro opcional *, o comando aceitar\xe1 qualquer tipo de arquivo. Isso significa que voc\xea pode trabalhar com imagens sem necessariamente ter os codecs adequados (ver a descri\xe7\xe3o do comando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/blob-to-picture",children:"BLOB TO PICTURE"}),")."]}),"\n",(0,a.jsx)(o.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,a.jsx)(o.p,{children:"Se a execu\xe7\xe3o do comando \xe9 correta, a vari\xe1vel sistema Document cont\xe9m a rota de acesso completa ao arquivo aberto e a vari\xe1vel sistema OK toma o valor 1. Do contr\xe1rio, OK toma o valor 0."}),"\n",(0,a.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.a,{href:"/docs/pt/commands/blob-to-picture",children:"BLOB TO PICTURE"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.em,{children:"Imagens"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/commands/picture-codec-list",children:"PICTURE CODEC LIST"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/commands/write-picture-file",children:"WRITE PICTURE FILE"})]})]})}function l(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},28453:(e,o,r)=>{r.d(o,{R:()=>s,x:()=>t});var a=r(296540);const n={},i=a.createContext(n);function s(e){const o=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(i.Provider,{value:o},e.children)}}}]);