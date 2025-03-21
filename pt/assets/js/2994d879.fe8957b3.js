"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68954"],{810246:function(e,n,o){o.r(n),o.d(n,{default:()=>x,frontMatter:()=>t,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/integer-to-blob","title":"INTEGER TO BLOB","description":"INTEGER TO BLOB ( inteiro ; BLOB ; byteOrdem {; offset\xa0|\xa0*} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/integer-to-blob.md","sourceDirName":"commands-legacy","slug":"/commands/integer-to-blob","permalink":"/docs/pt/20-R7/commands/integer-to-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Finteger-to-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"integer-to-blob","title":"INTEGER TO BLOB","slug":"/commands/integer-to-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"INSERT IN BLOB","permalink":"/docs/pt/20-R7/commands/insert-in-blob"},"next":{"title":"LIST TO BLOB","permalink":"/docs/pt/20-R7/commands/list-to-blob"}}'),s=o("785893"),d=o("250065");let t={id:"integer-to-blob",title:"INTEGER TO BLOB",slug:"/commands/integer-to-blob",displayed_sidebar:"docs"},i=void 0,l={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Nota",id:"nota",level:3},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Exemplo 3",id:"exemplo-3",level:2},{value:"Exemplo 4",id:"exemplo-4",level:2},{value:"Exemplo 5",id:"exemplo-5",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"INTEGER TO BLOB"})," ( ",(0,s.jsx)(n.em,{children:"inteiro"})," ; ",(0,s.jsx)(n.em,{children:"BLOB"})," ; ",(0,s.jsx)(n.em,{children:"byteOrdem"})," {; offset\xa0|\xa0*} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"inteiro"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Valor inteiro a escrever no BLOB"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"BLOB a receber o valor inteiro"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"byteOrdem"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"0 Ordem de bytes em modo nativo 1 Ordem dos bytes Macintosh 2 Ordem dos bytes PC"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"offset\xa0|\xa0*"}),(0,s.jsx)(n.td,{children:"Vari\xe1vel, Operador"}),(0,s.jsx)(n.td,{children:"\u2194"}),(0,s.jsx)(n.td,{children:"Offset expressado em bytes no BLOB ou * para adicionar o valor"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Novo offset depois de escrita se * for omitido"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando INTEGER TO BLOB grava o valor inteiro de 2 bytes Inteiro no BLOB ",(0,s.jsx)(n.em,{children:"blob"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["O par\xe2metro ",(0,s.jsx)(n.em,{children:"byteOrder"})," fixa a ordena\xe7\xe3o de bytes de valor de 2 bytes inteiro a ser escrito. Voc\xea passa uma das seguintes constantes pr\xe9-definidas fornecidas por 4D:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Native byte ordering"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Macintosh byte ordering"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PC byte ordering"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota sobre a independ\xeancia de plataforma:"})," Se voc\xea intercambiar BLOBs entre as plataformas Macintosh e PC, cabe a voc\xea a gerenciar os problemas da troca de bytes ao usar este comando."]}),"\n",(0,s.jsxs)(n.p,{children:["Se voc\xea especificar o par\xe2metro opcional *, o valor inteiro de 2-byte \xe9 anexado ao BLOB e o tamanho do BLOB \xe9 aumentado em conformidade. Usando o par\xe2metro opcional *, voc\xea pode armazenar qualquer n\xfamero sequencial ",(0,s.jsx)(n.a,{href:"#",title:"Number between -32,768..32,767 (2^15..(2^15)-1) (2-byte integer)",children:"Inteiro"}),", ",(0,s.jsx)(n.a,{href:"#",title:"Number between -2^31..(2^31)-1 (4-byte Integer)",children:"Inteiro longo"}),", Real ou valores de texto (ver outros comandos BLOB) em um BLOB, enquanto o BLOB cabe na mem\xf3ria."]}),"\n",(0,s.jsx)(n.p,{children:"Se voc\xea n\xe3o especificar o par\xe2metro opcional * ou o par\xe2metro vari\xe1vel offset, um valor inteiro de 2-bytes \xe9 armazenado no in\xedcio do BLOB, substituindo o conte\xfado anterior, o tamanho do BLOB \xe9 ajustado em conformidade."}),"\n",(0,s.jsxs)(n.p,{children:["Se voc\xea passar o par\xe2metro ",(0,s.jsx)(n.em,{children:"offset"}),", um valor inteiro de 2-byte \xe9 escrito no byte (a partir do zero) dentro do BLOB. N\xe3o importa onde voc\xea escreva o valor inteiro de 2-byte, o tamanho do BLOB \xe9 aumentado de acordo com o local que voc\xea passou (acima de 2 bytes, se necess\xe1rio). Bytes rec\xe9m-alocados, com exce\xe7\xe3o do que voc\xea est\xe1 escrevendo, s\xe3o inicializados em zero."]}),"\n",(0,s.jsxs)(n.p,{children:["Ap\xf3s a chamada, o par\xe2metro vari\xe1vel ",(0,s.jsx)(n.em,{children:"offset"})," \xe9 devolvido, incrementado pelo n\xfamero de bytes que foram escritos. Portanto, voc\xea pode reutilizar a mesma vari\xe1vel com outro comando de escrita BLOB para gravar outro valor."]}),"\n",(0,s.jsx)(n.h3,{id:"nota",children:"Nota"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota de compatibilidade"}),": como este comando altera o blob passado como par\xe2metro, n\xe3o \xe9 compat\xedvel com objetos blob (tipo 4D.Blob). Ver ",(0,s.jsx)(n.em,{children:"Passing blobs and blob objects to 4D commands"})," em developer.4d.com"]}),"\n",(0,s.jsx)(n.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"Depois de executar este c\xf3digo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0SET BLOB SIZE(vxBlob;100)\n\xa0vlOffset:=50\n\xa0INTEGER TO BLOB(518;vxBlob;Macintosh byte ordering;vlOffset)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["O tamanho de ",(0,s.jsx)(n.em,{children:"vxBlob"})," \xe9 100 bytes"]}),"\n",(0,s.jsxs)(n.li,{children:["Em todas as plataformas ",(0,s.jsx)(n.em,{children:"vxBLOB{50}"})," = ",(0,s.jsx)(n.em,{children:"$02"})," e ",(0,s.jsx)(n.em,{children:"vxBLOB{51}"})," = ",(0,s.jsx)(n.em,{children:"$06"})]}),"\n",(0,s.jsx)(n.li,{children:"Os demais bytes do BLOB s\xe3o inalterados"}),"\n",(0,s.jsx)(n.li,{children:"A vari\xe1vel vlOffset foi incrementado em 2 (e agora \xe9 igual a 52)"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Depois de executar este c\xf3digo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0INTEGER TO BLOB(0x0206;vxBlob;PC byte ordering)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["O tamanho de ",(0,s.jsx)(n.em,{children:"vxBlob"})," \xe9 2 bytes"]}),"\n",(0,s.jsxs)(n.li,{children:["Em todas as plataformas ",(0,s.jsx)(n.em,{children:"vxBLOB{0}"})," = ",(0,s.jsx)(n.em,{children:"$06"})," e ",(0,s.jsx)(n.em,{children:"vxBLOB{1}"})," = ",(0,s.jsx)(n.em,{children:"$02"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,s.jsx)(n.p,{children:"Depois de executar este c\xf3digo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0SET BLOB SIZE(vxBlob;100)\n\xa0INTEGER TO BLOB(0x0206;vxBlob;PC byte ordering;*)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["O tamanho do ",(0,s.jsx)(n.em,{children:"vxBlob"})," \xe9 de 102 bytes"]}),"\n",(0,s.jsxs)(n.li,{children:["Em todas as plataformas ",(0,s.jsx)(n.em,{children:"vxBLOB{100}"})," = ",(0,s.jsx)(n.em,{children:"$06"})," e ",(0,s.jsx)(n.em,{children:"vxBLOB{101}"})," = ",(0,s.jsx)(n.em,{children:"$02"})]}),"\n",(0,s.jsx)(n.li,{children:"Os outros bytes do BLOB n\xe3o mudam"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,s.jsx)(n.p,{children:"Depois de executar este c\xf3digo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0INTEGER TO BLOB(0x0206;vxBlob;Native byte ordering)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["O tamanho do ",(0,s.jsx)(n.em,{children:"vxBlob"})," \xe9 de 2 bytes"]}),"\n",(0,s.jsxs)(n.li,{children:["Em Macintosh ",(0,s.jsx)(n.em,{children:"vxBLOB{0}"})," = ",(0,s.jsx)(n.em,{children:"$02"})," y ",(0,s.jsx)(n.em,{children:"vxBLOB{1}"})," = ",(0,s.jsx)(n.em,{children:"$06"})]}),"\n",(0,s.jsxs)(n.li,{children:["Em PC ",(0,s.jsx)(n.em,{children:"vxBLOB{0}"})," = ",(0,s.jsx)(n.em,{children:"$06"})," e ",(0,s.jsx)(n.em,{children:"vxBLOB{1}"})," = ",(0,s.jsx)(n.em,{children:"$02"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"exemplo-5",children:"Exemplo 5"}),"\n",(0,s.jsx)(n.p,{children:"Depois de executar este c\xf3digo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0INTEGER TO BLOB(0x0206;vxBlob;Macintosh byte ordering)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["O tamanho do ",(0,s.jsx)(n.em,{children:"vxBlob"})," \xe9 de 2 bytes"]}),"\n",(0,s.jsxs)(n.li,{children:["Em todas as plataformas ",(0,s.jsx)(n.em,{children:"vxBLOB{0}"})," = ",(0,s.jsx)(n.em,{children:"$02"})," e ",(0,s.jsx)(n.em,{children:"vxBLOB{1}"})," = ",(0,s.jsx)(n.em,{children:"$06"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/blob-to-integer",children:"BLOB to integer"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/blob-to-longint",children:"BLOB to longint"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/blob-to-real",children:"BLOB to real"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/blob-to-text",children:"BLOB to text"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/longint-to-blob",children:"LONGINT TO BLOB"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/real-to-blob",children:"REAL TO BLOB"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/text-to-blob",children:"TEXT TO BLOB"})]}),"\n",(0,s.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"548"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return t}});var r=o(667294);let s={},d=r.createContext(s);function t(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);