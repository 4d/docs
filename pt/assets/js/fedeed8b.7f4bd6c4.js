"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["12594"],{187354:function(e,n,o){o.r(n),o.d(n,{default:()=>x,frontMatter:()=>l,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>t});var s=JSON.parse('{"id":"commands-legacy/longint-to-blob","title":"LONGINT TO BLOB","description":"LONGINT TO BLOB ( longint ; blob ; byteOrder {; offset } )LONGINT TO BLOB ( longint ; blob ; byteOrder {; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/longint-to-blob.md","sourceDirName":"commands-legacy","slug":"/commands/longint-to-blob","permalink":"/docs/pt/commands/longint-to-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flongint-to-blob.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"longint-to-blob","title":"LONGINT TO BLOB","slug":"/commands/longint-to-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LIST TO BLOB","permalink":"/docs/pt/commands/list-to-blob"},"next":{"title":"REAL TO BLOB","permalink":"/docs/pt/commands/real-to-blob"}}'),r=o("785893"),d=o("250065");let l={id:"longint-to-blob",title:"LONGINT TO BLOB",slug:"/commands/longint-to-blob",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Nota",id:"nota",level:3},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Exemplo 3",id:"exemplo-3",level:2},{value:"Exemplo 4",id:"exemplo-4",level:2},{value:"Exemplo 5",id:"exemplo-5",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LONGINT TO BLOB"})," ( ",(0,r.jsx)(n.em,{children:"longint"})," ; ",(0,r.jsx)(n.em,{children:"blob"})," ; ",(0,r.jsx)(n.em,{children:"byteOrder"})," {; offset } )",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"LONGINT TO BLOB"})," ( ",(0,r.jsx)(n.em,{children:"longint"})," ; ",(0,r.jsx)(n.em,{children:"blob"})," ; ",(0,r.jsx)(n.em,{children:"byteOrder"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"longInt"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Valor de tipo Inteiro longo a escrever no BLOB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"BLOB a receber o valor Inteiro longo"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"byteOrder"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"0 Ordem de bytes nativo 1 Ordem de bytes Macintosh 2 Ordem de bytes PC"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"offset | *"}),(0,r.jsx)(n.td,{children:"Vari\xe1vel, Operador"}),(0,r.jsx)(n.td,{children:"\u2194"}),(0,r.jsx)(n.td,{children:"Offset no BLOB (expressado em bytes) ou * para adicionar o valor"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Novo offset depois da escritura se * for omitido"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando LONGINT TO BLOB grava o valor ",(0,r.jsx)(n.em,{children:"inteiro longo"})," de 4-byte no BLOB ",(0,r.jsx)(n.em,{children:"blob"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["O par\xe2metro ",(0,r.jsx)(n.em,{children:"byteOrder"})," fixa a ordem dos bytes do valor inteiro longo de 4-byte a ser escrito. Voc\xea passa uma das seguintes constantes pr\xe9-definidas fornecidas por 4D:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Native byte ordering"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Macintosh byte ordering"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PC byte ordering"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota sobre a independ\xeancia de plataforma:"})," Se voc\xea intercambiar BLOBs entre as plataformas Macintosh e PC, cabe a voc\xea a gerenciar os problemas da troca de bytes ao usar este comando."]}),"\n",(0,r.jsxs)(n.p,{children:["Se voc\xea especificar o par\xe2metro opcional *, o valor inteiro de 4-byte \xe9 anexado ao BLOB e o tamanho do BLOB \xe9 aumentado em conformidade. Usando o par\xe2metro opcional *, voc\xea pode armazenar qualquer n\xfamero sequencial ",(0,r.jsx)(n.a,{href:"#",title:"Number between -32,768..32,767 (2^15..(2^15)-1) (2-byte integer)",children:"Inteiro"}),", ",(0,r.jsx)(n.a,{href:"#",title:"Number between -2^31..(2^31)-1 (4-byte Integer)",children:"Inteiro longo"}),", Real ou valores de texto (ver outros comandos BLOB) em um BLOB, enquanto o BLOB cabe na mem\xf3ria."]}),"\n",(0,r.jsxs)(n.p,{children:["Se voc\xea n\xe3o especificar o par\xe2metro opcional * nem o par\xe2metro vari\xe1vel ",(0,r.jsx)(n.em,{children:"offset"}),", um valor inteiro de 4-bytes \xe9 armazenado no in\xedcio do BLOB, substituindo o conte\xfado anterior, o tamanho do BLOB \xe9 ajustado em conformidade."]}),"\n",(0,r.jsxs)(n.p,{children:["Se voc\xea passar o par\xe2metro ",(0,r.jsx)(n.em,{children:"offset"}),", um valor inteiro de 4-byte \xe9 escrito no byte (a partir do zero) dentro do BLOB. N\xe3o importa onde voc\xea escreva o valor inteiro de 4-byte, o tamanho do BLOB \xe9 aumentado de acordo com o local que voc\xea passou (acima de 4 bytes, se necess\xe1rio). Novos bytes alocados, com exce\xe7\xe3o do que voc\xea est\xe1 escrevendo, s\xe3o inicializados em zero."]}),"\n",(0,r.jsxs)(n.p,{children:["Ap\xf3s a chamada, o par\xe2metro vari\xe1vel ",(0,r.jsx)(n.em,{children:"offset"})," \xe9 devolvido, incrementado pelo n\xfamero de bytes que foram escritos. Portanto, voc\xea pode reutilizar a mesma vari\xe1vel com outro comando de escrita BLOB para gravar outro valor."]}),"\n",(0,r.jsx)(n.h3,{id:"nota",children:"Nota"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota de compatibilidade"}),": como este comando altera o blob passado como par\xe2metro, n\xe3o \xe9 compat\xedvel com objetos blob (tipo 4D.Blob). Ver ",(0,r.jsx)(n.em,{children:"Passing blobs and blob objects to 4D commands"})," em developer.4d.com"]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,r.jsx)(n.p,{children:"Depois de executar esse c\xf3digo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0LONGINT TO BLOB(0x01020304;vxBlob;Native byte ordering)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["O tamanho de ",(0,r.jsx)(n.em,{children:"vxBlob"})," \xe9 4 bytes"]}),"\n",(0,r.jsxs)(n.li,{children:["Em PowerPC ",(0,r.jsx)(n.em,{children:"vxBLOB{0}=$01"}),", ",(0,r.jsx)(n.em,{children:"vxBLOB{1}=$02"}),", ",(0,r.jsx)(n.em,{children:"vxBLOB{2}=$03"}),", ",(0,r.jsx)(n.em,{children:"vxBLOB{3}=$04"})]}),"\n",(0,r.jsxs)(n.li,{children:["Em Intel:PC ",(0,r.jsx)(n.em,{children:"vxBLOB{0}=$04"}),", ",(0,r.jsx)(n.em,{children:"vxBLOB{1}=$03"}),", ",(0,r.jsx)(n.em,{children:"vxBLOB{2}=$02"}),", ",(0,r.jsx)(n.em,{children:"vxBLOB{3}=$01"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"Depois de executar este c\xf3digo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0LONGINT TO BLOB(0x01020304;vxBlob;Macintosh byte ordering)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["O tamanho de ",(0,r.jsx)(n.em,{children:"vxBlob"}),"es 4 bytes"]}),"\n",(0,r.jsxs)(n.li,{children:["Em todas as plataformas ",(0,r.jsx)(n.em,{children:"vxBLOB{0}=$01"}),", ",(0,r.jsx)(n.em,{children:"vxBLOB{1}=$02"}),", ",(0,r.jsx)(n.em,{children:"vxBLOB{2}=$03"}),", ",(0,r.jsx)(n.em,{children:"vxBLOB{3}=$04"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,r.jsx)(n.p,{children:"Depois de executar esse c\xf3digo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0LONGINT TO BLOB(0x01020304;vxBlob;PC byte ordering)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["O tamanho de ",(0,r.jsx)(n.em,{children:"vxBlob"})," es 4 bytes"]}),"\n",(0,r.jsxs)(n.li,{children:["Em todas as plataformas ",(0,r.jsx)(n.em,{children:"vxBLOB{0}=$04"}),", ",(0,r.jsx)(n.em,{children:"vxBLOB{1}=$03"}),", ",(0,r.jsx)(n.em,{children:"vxBLOB{2}=$02"}),", ",(0,r.jsx)(n.em,{children:"vxBLOB{3}=$01"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,r.jsx)(n.p,{children:"Depois de executar esse c\xf3digo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0SET BLOB SIZE(vxBlob;100)\n\xa0LONGINT TO BLOB(0x01020304;vxBlob;PC byte ordering;*)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["O tamanho de ",(0,r.jsx)(n.em,{children:"vxBlob"})," \xe9 104 bytes"]}),"\n",(0,r.jsxs)(n.li,{children:["Em todas as plataformas ",(0,r.jsx)(n.em,{children:"vxBLOB{100}=$04"}),", ",(0,r.jsx)(n.em,{children:"vxBLOB{101}=$03"}),", ",(0,r.jsx)(n.em,{children:"vxBLOB{102}=$02"}),", ",(0,r.jsx)(n.em,{children:"vxBLOB{103}=$01"})]}),"\n",(0,r.jsx)(n.li,{children:"Os outros bytes do BLOB s\xe3o inalterados"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo-5",children:"Exemplo 5"}),"\n",(0,r.jsx)(n.p,{children:"Depois de executar esse c\xf3digo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0SET BLOB SIZE(vxBlob;100)\n\xa0vlOffset:=50\n\xa0LONGINT TO BLOB(0x01020304;vxBlob;Macintosh byte ordering;vlOffset)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["O tamanho de ",(0,r.jsx)(n.em,{children:"vxBlob"})," \xe9 100 bytes"]}),"\n",(0,r.jsxs)(n.li,{children:["Em todas as plataformas ",(0,r.jsx)(n.em,{children:"vxBLOB{50}=$01"}),", ",(0,r.jsx)(n.em,{children:"vxBLOB{51}=$02"}),", ",(0,r.jsx)(n.em,{children:"vxBLOB{52}=$03"}),", ",(0,r.jsx)(n.em,{children:"vxBLOB{53}=$04"})]}),"\n",(0,r.jsx)(n.li,{children:"Os outros bytes do BLOB s\xe3o inalterados"}),"\n",(0,r.jsxs)(n.li,{children:["A vari\xe1vel ",(0,r.jsx)(n.em,{children:"vlOffset"})," tem sido incrementada em 4 (e agora \xe9 igual a 54)"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/commands/blob-to-integer",children:"BLOB to integer"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/blob-to-longint",children:"BLOB to longint"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/blob-to-real",children:"BLOB to real"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/blob-to-text",children:"BLOB to text"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/integer-to-blob",children:"INTEGER TO BLOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/real-to-blob",children:"REAL TO BLOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/text-to-blob",children:"TEXT TO BLOB"})]}),"\n",(0,r.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"550"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return t},a:function(){return l}});var s=o(667294);let r={},d=s.createContext(r);function l(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);