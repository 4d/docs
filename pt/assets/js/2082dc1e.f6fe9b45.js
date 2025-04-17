"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28309"],{778417:function(e,o,r){r.r(o),r.d(o,{default:()=>l,frontMatter:()=>d,metadata:()=>n,assets:()=>t,toc:()=>c,contentTitle:()=>s});var n=JSON.parse('{"id":"commands-legacy/write-picture-file","title":"WRITE PICTURE FILE","description":"WRITE PICTURE FILE ( nomeArquivo ; imagem {; codec} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/write-picture-file.md","sourceDirName":"commands-legacy","slug":"/commands/write-picture-file","permalink":"/docs/pt/20-R8/commands/write-picture-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwrite-picture-file.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"write-picture-file","title":"WRITE PICTURE FILE","slug":"/commands/write-picture-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"TRANSFORM PICTURE","permalink":"/docs/pt/20-R8/commands/transform-picture"},"next":{"title":"Printing","permalink":"/docs/pt/20-R8/commands/theme/Printing"}}'),i=r("785893"),a=r("250065");let d={id:"write-picture-file",title:"WRITE PICTURE FILE",slug:"/commands/write-picture-file",displayed_sidebar:"docs"},s=void 0,t={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function m(e){let o={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.strong,{children:"WRITE PICTURE FILE"})," ( ",(0,i.jsx)(o.em,{children:"nomeArquivo"})," ; ",(0,i.jsx)(o.em,{children:"imagem"})," {; ",(0,i.jsx)(o.em,{children:"codec"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(o.table,{children:[(0,i.jsx)(o.thead,{children:(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.th,{children:"Par\xe2metro"}),(0,i.jsx)(o.th,{children:"Tipo"}),(0,i.jsx)(o.th,{}),(0,i.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(o.tbody,{children:[(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"nomeArquivo"}),(0,i.jsx)(o.td,{children:"Text"}),(0,i.jsx)(o.td,{children:"\u2192"}),(0,i.jsx)(o.td,{children:"Nome ou rota completa do arquivo a escrever, ou string vazia"})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"imagem"}),(0,i.jsx)(o.td,{children:"Picture"}),(0,i.jsx)(o.td,{children:"\u2192"}),(0,i.jsx)(o.td,{children:"Campo de imagem ou vari\xe1vel a escrever"})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"codec"}),(0,i.jsx)(o.td,{children:"Text"}),(0,i.jsx)(o.td,{children:"\u2192"}),(0,i.jsx)(o.td,{children:"Codec de identifica\xe7\xe3o de Imagem"})]})]})]}),"\n",(0,i.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(o.p,{children:["O comando WRITE PICTURE FILE permite guardar em um arquivo no disco a imagem passada no par\xe2metro ",(0,i.jsx)(o.em,{children:"imagem,"})," no formato definido por ",(0,i.jsx)(o.em,{children:"codec"}),"."]}),"\n",(0,i.jsxs)(o.p,{children:["Pode passar em ",(0,i.jsx)(o.em,{children:"nomArquivo"})," a rota de acesso completa do arquivo a criar, ou unicamente o nome do arquivo. Se s\xf3 passa o nome do arquivo, o arquivo ser\xe1 localizado junto ao arquivo de estrutura do banco."]}),"\n",(0,i.jsx)(o.p,{children:"Tem que ser indicado a extens\xe3o do arquivo."}),"\n",(0,i.jsxs)(o.p,{children:['Se passa uma string vazia ("") em ',(0,i.jsx)(o.em,{children:"nomArquivo"}),", aparece a caixa de di\xe1logo padr\xe3o de registro, permitindo ao usu\xe1rio indicar o nome, localiza\xe7\xe3o e formato do arquivo a criar.",(0,i.jsx)(o.br,{}),"\nSe um nome padr\xe3o \xe9 associado com o campo imagem, ele \xe9 fornecido na caixa de di\xe1logo (ver o comando ",(0,i.jsx)(o.a,{href:"/docs/pt/20-R8/commands/set-picture-file-name",children:"SET PICTURE FILE NAME"}),")."]}),"\n",(0,i.jsxs)(o.p,{children:["Passe em ",(0,i.jsx)(o.em,{children:"imagem"})," a vari\xe1vel ou campo imagem que cont\xe9m a imagem a armazenar no disco."]}),"\n",(0,i.jsxs)(o.p,{children:["O par\xe2metro opcional ",(0,i.jsx)(o.em,{children:"codec"}),' permite definir o formato no qual a imagem ser\xe1 guardado. Um codec pode ser uma extens\xe3o (por exemplo ".gif") ou um tipo Mime (por exemplo "image/jpg") Pode obter uma lista de codecs dispon\xedveis atrav\xe9s do comando ',(0,i.jsx)(o.a,{href:"/docs/pt/20-R8/commands/picture-codec-list",children:"PICTURE CODEC LIST"}),"."]}),"\n",(0,i.jsxs)(o.p,{children:["Se for omitido o par\xe2metro ",(0,i.jsx)(o.em,{children:"codec"}),", o comando tentar\xe1 determinar o ",(0,i.jsx)(o.em,{children:"codec"})," baseado na extens\xe3o do nome do arquivo passado no par\xe2metro ",(0,i.jsx)(o.em,{children:"nomArquivo"}),". Por exemplo, se passa a instru\xe7\xe3o:"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-4d",children:'\xa0WRITE PICTURE FILE("c:\\folder\\foto.jpg";minhafoto)\n'})}),"\n",(0,i.jsxs)(o.p,{children:["... o comando utilizar\xe1 o codec JPEG para guardar a imagem.",(0,i.jsx)(o.br,{}),"\nSe a extens\xe3o utilizada n\xe3o corresponde a nenhum codec dispon\xedvel, o arquivo n\xe3o se guarda e a vari\xe1vel sistema OK toma o valor 0. Se n\xe3o passa um ",(0,i.jsx)(o.em,{children:"codec"})," ou um arquivo de extens\xe3o, o arquivo imagem se guarda em formato PICT."]}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.strong,{children:"Nota:"})," se o formato de escrita de ",(0,i.jsx)(o.em,{children:"imagem"})," (indicado via a extens\xe3o do ",(0,i.jsx)(o.em,{children:"nomArquivo"})," ou o par\xe2metro ",(0,i.jsx)(o.em,{children:"codec"}),') \xe9 igual a seu tipo original e se nenhuma opera\xe7\xe3o de transforma\xe7\xe3o for aplicada, a imagem \xe9 escrita "tal qual", sem nenhuma modifica\xe7\xe3o.']}),"\n",(0,i.jsx)(o.p,{children:"Se a execu\xe7\xe3o do comando for correta, a vari\xe1vel sistema Document cont\xe9m a rota de acesso completa ao arquivo criado e a vari\xe1vel sistema OK toma o valor 1. Do contr\xe1rio, OK toma o valor 0."}),"\n",(0,i.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.em,{children:"Imagens"}),(0,i.jsx)(o.br,{}),"\n",(0,i.jsx)(o.a,{href:"/docs/pt/20-R8/commands/picture-to-blob",children:"PICTURE TO BLOB"}),(0,i.jsx)(o.br,{}),"\n",(0,i.jsx)(o.a,{href:"/docs/pt/20-R8/commands/read-picture-file",children:"READ PICTURE FILE"}),(0,i.jsx)(o.br,{}),"\n",(0,i.jsx)(o.a,{href:"/docs/pt/20-R8/commands/set-picture-file-name",children:"SET PICTURE FILE NAME"})]}),"\n",(0,i.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(o.table,{children:[(0,i.jsx)(o.thead,{children:(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.th,{}),(0,i.jsx)(o.th,{})]})}),(0,i.jsxs)(o.tbody,{children:[(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"N\xfamero do comando"}),(0,i.jsx)(o.td,{children:"680"})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"Thread-seguro"}),(0,i.jsx)(o.td,{children:"\u2713"})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"Modificar vari\xe1veis"}),(0,i.jsx)(o.td,{children:"OK, Document"})]})]})]})]})}function l(e={}){let{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return s},a:function(){return d}});var n=r(667294);let i={},a=n.createContext(i);function d(e){let o=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(a.Provider,{value:o},e.children)}}}]);