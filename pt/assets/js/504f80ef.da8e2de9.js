"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["94609"],{372175:function(e,o,n){n.r(o),n.d(o,{metadata:()=>r,contentTitle:()=>d,default:()=>x,assets:()=>t,toc:()=>i,frontMatter:()=>a});var r=JSON.parse('{"id":"commands-legacy/real-to-blob","title":"REAL TO BLOB","description":"REAL TO BLOB ( real ; BLOB ; realFormat {; offset | *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/real-to-blob.md","sourceDirName":"commands-legacy","slug":"/commands/real-to-blob","permalink":"/docs/pt/commands/real-to-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freal-to-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"real-to-blob","title":"REAL TO BLOB","slug":"/commands/real-to-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LONGINT TO BLOB","permalink":"/docs/pt/commands/longint-to-blob"},"next":{"title":"SET BLOB SIZE","permalink":"/docs/pt/commands/set-blob-size"}}'),l=n("785893"),s=n("250065");let a={id:"real-to-blob",title:"REAL TO BLOB",slug:"/commands/real-to-blob",displayed_sidebar:"docs"},d=void 0,t={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Nota",id:"nota",level:5},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Exemplo 4",id:"exemplo-4",level:4},{value:"Exemplo 5",id:"exemplo-5",level:4},{value:"Exemplo 6",id:"exemplo-6",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(o.p,{children:[(0,l.jsx)(o.strong,{children:"REAL TO BLOB"})," ( ",(0,l.jsx)(o.em,{children:"real"})," ; ",(0,l.jsx)(o.em,{children:"BLOB"})," ; ",(0,l.jsx)(o.em,{children:"realFormat"})," {; offset | *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(o.table,{children:[(0,l.jsx)(o.thead,{children:(0,l.jsxs)(o.tr,{children:[(0,l.jsx)(o.th,{children:"Par\xe2metro"}),(0,l.jsx)(o.th,{children:"Tipo"}),(0,l.jsx)(o.th,{}),(0,l.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,l.jsxs)(o.tbody,{children:[(0,l.jsxs)(o.tr,{children:[(0,l.jsx)(o.td,{children:"real"}),(0,l.jsx)(o.td,{children:"Real"}),(0,l.jsx)(o.td,{children:"\u2192"}),(0,l.jsx)(o.td,{children:"Valor de tipo real a escrever no BLOB"})]}),(0,l.jsxs)(o.tr,{children:[(0,l.jsx)(o.td,{children:"Blob"}),(0,l.jsx)(o.td,{children:"Blob"}),(0,l.jsx)(o.td,{children:"\u2192"}),(0,l.jsx)(o.td,{children:"BLOB a receber o valor Real"})]}),(0,l.jsxs)(o.tr,{children:[(0,l.jsx)(o.td,{children:"realFormat"}),(0,l.jsx)(o.td,{children:"Integer"}),(0,l.jsx)(o.td,{children:"\u2192"}),(0,l.jsx)(o.td,{children:"0 Formato real nativo 1 Formato real estendido 2 Formato real doble Macintosh 3 Formato real duplo Windows"})]}),(0,l.jsxs)(o.tr,{children:[(0,l.jsx)(o.td,{children:"offset | *"}),(0,l.jsx)(o.td,{children:"Vari\xe1vel, Operador"}),(0,l.jsx)(o.td,{children:"\u2194"}),(0,l.jsx)(o.td,{children:"Offset no BLOB (expressado em bytes) ou * para adicionar o valor"})]}),(0,l.jsxs)(o.tr,{children:[(0,l.jsx)(o.td,{}),(0,l.jsx)(o.td,{}),(0,l.jsx)(o.td,{}),(0,l.jsx)(o.td,{children:"Novo offset depois da escritura se * for omitido"})]})]})]}),"\n",(0,l.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,l.jsxs)(o.p,{children:["O comando REAL TO BLOB grava o valor ",(0,l.jsx)(o.em,{children:"real"})," no BLOB ",(0,l.jsx)(o.em,{children:"blob"}),"."]}),"\n",(0,l.jsxs)(o.p,{children:["O par\xe2metro ",(0,l.jsx)(o.em,{children:"realFormat"})," corrige o formato interno e ordena\xe7\xe3o de bytes do valor real a ser escrito. Voc\xea passa uma das seguintes constantes pr\xe9-definidas fornecidas por 4D:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(o.table,{children:[(0,l.jsx)(o.thead,{children:(0,l.jsxs)(o.tr,{children:[(0,l.jsx)(o.th,{children:"Constante"}),(0,l.jsx)(o.th,{children:"Tipo"}),(0,l.jsx)(o.th,{children:"Valor"})]})}),(0,l.jsxs)(o.tbody,{children:[(0,l.jsxs)(o.tr,{children:[(0,l.jsx)(o.td,{children:"Native real format"}),(0,l.jsx)(o.td,{children:"Inteiro longo"}),(0,l.jsx)(o.td,{children:"0"})]}),(0,l.jsxs)(o.tr,{children:[(0,l.jsx)(o.td,{children:"Extended real format"}),(0,l.jsx)(o.td,{children:"Inteiro longo"}),(0,l.jsx)(o.td,{children:"1"})]}),(0,l.jsxs)(o.tr,{children:[(0,l.jsx)(o.td,{children:"Macintosh double real format"}),(0,l.jsx)(o.td,{children:"Inteiro longo"}),(0,l.jsx)(o.td,{children:"2"})]}),(0,l.jsxs)(o.tr,{children:[(0,l.jsx)(o.td,{children:"PC double real format"}),(0,l.jsx)(o.td,{children:"Inteiro longo"}),(0,l.jsx)(o.td,{children:"3"})]})]})]}),"\n",(0,l.jsxs)(o.p,{children:[(0,l.jsx)(o.strong,{children:"Nota sobre a independ\xeancia de plataforma:"})," Se voc\xea trocar BLOBs entre as plataformas Macintosh e PC, cabe a voc\xea a gerenciar os formatos e troca de bytes ao usar este comando."]}),"\n",(0,l.jsxs)(o.p,{children:["Se voc\xea especificar o par\xe2metro opcional *, o valor real \xe9 anexado ao BLOB, o tamanho do BLOB \xe9 prorrogado em conformidade. Usando o par\xe2metro opcional ",(0,l.jsx)(o.em,{children:"*"}),", voc\xea pode armazenar qualquer n\xfamero sequencial ",(0,l.jsx)(o.a,{href:"#",title:"Number between -32,768..32,767 (2^15..(2^15)-1) (2-byte integer)",children:"Inteiro"}),", ",(0,l.jsx)(o.a,{href:"#",title:"Number between -2^31..(2^31)-1 (4-byte Integer)",children:"Inteiro longo"}),", Real ou valores de texto (ver outros comandos BLOB) em um BLOB, enquanto o BLOB cabe na mem\xf3ria."]}),"\n",(0,l.jsxs)(o.p,{children:["Se voc\xea n\xe3o especificar o par\xe2metro opcional ",(0,l.jsx)(o.em,{children:"*"})," ou o par\xe2metro vari\xe1vel ",(0,l.jsx)(o.em,{children:"offset"}),", o valor real \xe9 armazenado no in\xedcio do BLOB, substituindo o conte\xfado anterior, o tamanho do BLOB \xe9 ajustado em conformidade."]}),"\n",(0,l.jsxs)(o.p,{children:["Se voc\xea passar o par\xe2metro vari\xe1vel ",(0,l.jsx)(o.em,{children:"offset"}),", o valor real est\xe1 escrito no offset (a partir do zero) dentro do BLOB. N\xe3o importa onde voc\xea escreve o valor real, o tamanho do BLOB \xe9 aumentado de acordo com o local que voc\xea passou (at\xe9 8 ou 10 bytes, se necess\xe1rio). Novos bytes alocados, com exce\xe7\xe3o do que voc\xea est\xe1 escrevendo, s\xe3o inicializados em zero."]}),"\n",(0,l.jsxs)(o.p,{children:["Ap\xf3s a chamada, o par\xe2metro vari\xe1vel ",(0,l.jsx)(o.em,{children:"offset"})," \xe9 devolvido, incrementado pelo n\xfamero de bytes que foram escritos. Portanto, voc\xea pode reutilizar a mesma vari\xe1vel com outro comando de escrita BLOB para gravar outro valor."]}),"\n",(0,l.jsx)(o.h5,{id:"nota",children:"Nota"}),"\n",(0,l.jsxs)(o.p,{children:[(0,l.jsx)(o.strong,{children:"Nota de compatibilidade"}),": como este comando altera o blob passado como par\xe2metro, n\xe3o \xe9 compat\xedvel com objetos blob (tipo 4D.Blob). Ver ",(0,l.jsx)(o.em,{children:"Passing blobs and blob objects to 4D commands"})," em developer.4d.com"]}),"\n",(0,l.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,l.jsx)(o.p,{children:"Depois de executar este c\xf3digo:"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-4d",children:"\xa0var vrValor : Real\n\xa0vrValor:=...\n\xa0REAL TO BLOB(vrValor;vxBlob;Extended real format)\n"})}),"\n",(0,l.jsxs)(o.ul,{children:["\n",(0,l.jsxs)(o.li,{children:["Em todas as plataformas, o tamanho do ",(0,l.jsx)(o.em,{children:"vxBlob"})," \xe9 de 10 bytes"]}),"\n"]}),"\n",(0,l.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,l.jsx)(o.p,{children:"Depois de executar esse c\xf3digo:"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-4d",children:"\xa0var vrValor : Real\n\xa0vrValor:=...\n\xa0REAL TO BLOB(vrValor;vxBlob;Native real format)\n"})}),"\n",(0,l.jsxs)(o.ul,{children:["\n",(0,l.jsxs)(o.li,{children:["Em todas as plataformas, o tamanho de ",(0,l.jsx)(o.em,{children:"vxBlob"})," \xe9 8 bytes"]}),"\n"]}),"\n",(0,l.jsx)(o.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,l.jsx)(o.p,{children:"Depois de executar este c\xf3digo:"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-4d",children:"\xa0SET BLOB SIZE(vxBlob;100)\n\xa0var vrValor : Real\n\xa0vrValor:=...\n\xa0INTEGER TO BLOB(vrValor;vxBlob;Windows Double real format)\xa0// o Formato real doble Macintosh\n"})}),"\n",(0,l.jsxs)(o.ul,{children:["\n",(0,l.jsxs)(o.li,{children:["Em todas as plataformas, o tamanho do ",(0,l.jsx)(o.em,{children:"vxBlob"})," \xe9 de 8 bytes"]}),"\n"]}),"\n",(0,l.jsx)(o.h4,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,l.jsx)(o.p,{children:"Depois de executar este c\xf3digo:"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-4d",children:"\xa0SET BLOB SIZE(vxBlob;100)\n\xa0var vrValor : Real\n\xa0vrValor:=...\n\xa0vlOffset:=50\n\xa0REAL TO BLOB(vrValor;vxBlob;Windows Double real format;vlOffset)\xa0// o Formato real doble Macintosh\n"})}),"\n",(0,l.jsxs)(o.ul,{children:["\n",(0,l.jsx)(o.li,{children:"Em todas as plataformas, o tamanho de vxBlob \xe9 de 100 bytes"}),"\n",(0,l.jsx)(o.li,{children:"Em todas as plataformas, o valor real \xe9 armazenado nos bytes #50 at\xe9 o #57"}),"\n",(0,l.jsx)(o.li,{children:"Os outros bytes do BLOB s\xe3o inalterados"}),"\n",(0,l.jsxs)(o.li,{children:["A vari\xe1vel ",(0,l.jsx)(o.em,{children:"vlOffset"})," foi incrementada em 8 (e agora \xe9 igual a 58)"]}),"\n"]}),"\n",(0,l.jsx)(o.h4,{id:"exemplo-5",children:"Exemplo 5"}),"\n",(0,l.jsx)(o.p,{children:"Depois de executar este c\xf3digo:"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-4d",children:"\xa0var vrValor : Real\n\xa0vrValor:=...\n\xa0REAL TO BLOB(vrValor;vxBlob;Macintosh double real format)\xa0// o Formato real doble Windows\n"})}),"\n",(0,l.jsxs)(o.ul,{children:["\n",(0,l.jsxs)(o.li,{children:["Em todas as plataformas, o tamanho do ",(0,l.jsx)(o.em,{children:"vxBlob"})," \xe9 de 8 bytes"]}),"\n"]}),"\n",(0,l.jsx)(o.h4,{id:"exemplo-6",children:"Exemplo 6"}),"\n",(0,l.jsx)(o.p,{children:"Depois de executar este c\xf3digo:"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-4d",children:"\xa0SET BLOB SIZE(vxBlob;100)\n\xa0REAL TO BLOB(vrValor;vxBlob;Extended real format;*)\n"})}),"\n",(0,l.jsxs)(o.ul,{children:["\n",(0,l.jsx)(o.li,{children:"Em todas as plataformas, o tamanho do vxBlob \xe9 de 110 bytes"}),"\n",(0,l.jsx)(o.li,{children:"Em todas as plataformas, o valor real \xe9 armazenado nos bytes #100 a #109"}),"\n",(0,l.jsx)(o.li,{children:"Os outros bytes do BLOB s\xe3o inalterados"}),"\n"]}),"\n",(0,l.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,l.jsxs)(o.p,{children:[(0,l.jsx)(o.a,{href:"/docs/pt/commands/blob-to-integer",children:"BLOB to integer"}),(0,l.jsx)(o.br,{}),"\n",(0,l.jsx)(o.a,{href:"/docs/pt/commands/blob-to-longint",children:"BLOB to longint"}),(0,l.jsx)(o.br,{}),"\n",(0,l.jsx)(o.a,{href:"/docs/pt/commands/blob-to-real",children:"BLOB to real"}),(0,l.jsx)(o.br,{}),"\n",(0,l.jsx)(o.a,{href:"/docs/pt/commands/blob-to-text",children:"BLOB to text"}),(0,l.jsx)(o.br,{}),"\n",(0,l.jsx)(o.a,{href:"/docs/pt/commands/integer-to-blob",children:"INTEGER TO BLOB"}),(0,l.jsx)(o.br,{}),"\n",(0,l.jsx)(o.a,{href:"/docs/pt/commands/longint-to-blob",children:"LONGINT TO BLOB"}),(0,l.jsx)(o.br,{}),"\n",(0,l.jsx)(o.a,{href:"/docs/pt/commands/text-to-blob",children:"TEXT TO BLOB"})]}),"\n",(0,l.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(o.table,{children:[(0,l.jsx)(o.thead,{children:(0,l.jsxs)(o.tr,{children:[(0,l.jsx)(o.th,{}),(0,l.jsx)(o.th,{})]})}),(0,l.jsxs)(o.tbody,{children:[(0,l.jsxs)(o.tr,{children:[(0,l.jsx)(o.td,{children:"N\xfamero do comando"}),(0,l.jsx)(o.td,{children:"552"})]}),(0,l.jsxs)(o.tr,{children:[(0,l.jsx)(o.td,{children:"Thread-seguro"}),(0,l.jsx)(o.td,{children:"\u2713"})]})]})]})]})}function x(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,l.jsx)(o,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return d},a:function(){return a}});var r=n(667294);let l={},s=r.createContext(l);function a(e){let o=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);