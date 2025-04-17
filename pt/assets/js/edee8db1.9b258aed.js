"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41838"],{220721:function(e,o,n){n.r(o),n.d(o,{default:()=>m,frontMatter:()=>r,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/list-to-blob","title":"LIST TO BLOB","description":"LIST TO BLOB ( lista ; BLOB {; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/list-to-blob.md","sourceDirName":"commands-legacy","slug":"/commands/list-to-blob","permalink":"/docs/pt/20-R8/commands/list-to-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flist-to-blob.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"list-to-blob","title":"LIST TO BLOB","slug":"/commands/list-to-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"INTEGER TO BLOB","permalink":"/docs/pt/20-R8/commands/integer-to-blob"},"next":{"title":"LONGINT TO BLOB","permalink":"/docs/pt/20-R8/commands/longint-to-blob"}}'),a=n("785893"),t=n("250065");let r={id:"list-to-blob",title:"LIST TO BLOB",slug:"/commands/list-to-blob",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Nota",id:"nota",level:3},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let o={a:"a",br:"br",em:"em",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"LIST TO BLOB"})," ( ",(0,a.jsx)(o.em,{children:"lista"})," ; ",(0,a.jsx)(o.em,{children:"BLOB"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Par\xe2metro"}),(0,a.jsx)(o.th,{children:"Tipo"}),(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"lista"}),(0,a.jsx)(o.td,{children:"Integer"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Lista hier\xe1rquica a armazenar no BLOB"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Blob"}),(0,a.jsx)(o.td,{children:"Blob"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"BLOB a receber a lista hier\xe1rquica"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"*"}),(0,a.jsx)(o.td,{children:"Operador"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"* adicionar o valor"})]})]})]}),"\n",(0,a.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(o.p,{children:["O comando LIST TO BLOB armazena a ",(0,a.jsx)(o.em,{children:"lista"})," hier\xe1rquica no BLOB ",(0,a.jsx)(o.em,{children:"blob"}),"."]}),"\n",(0,a.jsxs)(o.p,{children:["Se voc\xea especificar o par\xe2metro opcional ",(0,a.jsx)(o.em,{children:"*"}),", a lista hier\xe1rquica \xe9 anexada ao BLOB e o tamanho do BLOB \xe9 aumentado em conformidade. Usando o par\xe2metro opcional *, voc\xea pode armazenar qualquer n\xfamero de vari\xe1veis ou listas (ver outros comandos BLOB) em um BLOB, enquanto o BLOB couber na mem\xf3ria."]}),"\n",(0,a.jsxs)(o.p,{children:["Se voc\xea n\xe3o especificar o par\xe2metro opcional ",(0,a.jsx)(o.em,{children:"*"}),", a lista hier\xe1rquica \xe9 armazenada no in\xedcio do BLOB, substituindo o conte\xfado anterior, o tamanho do BLOB \xe9 ajustado em conformidade."]}),"\n",(0,a.jsx)(o.p,{children:"Onde quer que a lista hier\xe1rquica seja armazenada, o tamanho do BLOB ser\xe1 aumentado, se necess\xe1rio de acordo com o local especificado (at\xe9 do tamanho da lista se necess\xe1rio). Bytes modificados (exceto os que voc\xea definir) s\xe3o colocados em 0 (zero)."}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Advert\xeancia:"})," Se voc\xea usar um BLOB para armazenar listas, voc\xea deve usar mais tarde o comando BLOB to list para ler o conte\xfado do BLOB, porque as listas s\xe3o armazenados em BLOBs usando um formato interno de 4D."]}),"\n",(0,a.jsx)(o.p,{children:"Ap\xf3s a chamada, se a lista tiver sido salva com sucesso, a vari\xe1vel OK \xe9 definida como 1. Se a opera\xe7\xe3o n\xe3o p\xf4de ser executada, a vari\xe1vel OK \xe9 definido como 0, por exemplo, se n\xe3o havia mem\xf3ria suficiente."}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Nota sobre a independ\xeancia de plataforma:"})," LIST TO BLOB e ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R8/commands/blob-to-list",title:"BLOB to list",children:"BLOB to list"})," usam um formato interno de 4D para processamento de listas armazenadas em BLOBs. Como benef\xedcio, voc\xea n\xe3o precisa se preocupar com a troca de bytes entre as plataformas ao usar esses dois comandos. Em outras palavras, um BLOB criado no Windows usando os comandos podem ser reutilizados em Macintosh, e vice-versa."]}),"\n",(0,a.jsx)(o.h3,{id:"nota",children:"Nota"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Nota de compatibilidade"}),": como este comando altera o blob passado como par\xe2metro, n\xe3o \xe9 compat\xedvel com objetos blob (tipo 4D.Blob). Ver ",(0,a.jsx)(o.em,{children:"Passing blobs and blob objects to 4D commands"})," em developer.4d.com"]}),"\n",(0,a.jsx)(o.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,a.jsxs)(o.p,{children:["Veja o exemplo para o comando ",(0,a.jsx)(o.a,{href:"/docs/pt/20-R8/commands/blob-to-list",title:"BLOB to list",children:"BLOB to list"}),"."]}),"\n",(0,a.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.a,{href:"/docs/pt/20-R8/commands/blob-to-list",children:"BLOB to list"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/20-R8/commands/blob-to-variable",children:"BLOB TO VARIABLE"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/20-R8/commands/save-list",children:"SAVE LIST"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/20-R8/commands/variable-to-blob",children:"VARIABLE TO BLOB"})]}),"\n",(0,a.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"N\xfamero do comando"}),(0,a.jsx)(o.td,{children:"556"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Thread-seguro"}),(0,a.jsx)(o.td,{children:"\u2717"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Modificar vari\xe1veis"}),(0,a.jsx)(o.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return d},a:function(){return r}});var s=n(667294);let a={},t=s.createContext(a);function r(e){let o=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(t.Provider,{value:o},e.children)}}}]);