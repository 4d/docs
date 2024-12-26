"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13443"],{973469:function(e,n,o){o.r(n),o.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>h,assets:()=>i,toc:()=>c,frontMatter:()=>d});var t=JSON.parse('{"id":"commands-legacy/blob-to-longint","title":"BLOB to longint","description":"BLOB to longint ( BLOB ; byteOrdem {; offset} ) : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/blob-to-longint.md","sourceDirName":"commands-legacy","slug":"/commands/blob-to-longint","permalink":"/docs/pt/commands/blob-to-longint","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-to-longint.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"blob-to-longint","title":"BLOB to longint","slug":"/commands/blob-to-longint","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BLOB to list","permalink":"/docs/pt/commands/blob-to-list"},"next":{"title":"BLOB to real","permalink":"/docs/pt/commands/blob-to-real"}}'),r=o("785893"),s=o("250065");let d={id:"blob-to-longint",title:"BLOB to longint",slug:"/commands/blob-to-longint",displayed_sidebar:"docs"},l=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"BLOB to longint"})," ( ",(0,r.jsx)(n.em,{children:"BLOB"})," ; ",(0,r.jsx)(n.em,{children:"byteOrdem"})," {; ",(0,r.jsx)(n.em,{children:"offset"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"BLOB do qual obter o valor inteiro longo"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"byteOrdem"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"0 Ordem de bytes nativo 1 Ordem de bytes Macintosh 2 Ordem de bytes PC"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"offset"}),(0,r.jsx)(n.td,{children:"Variable"}),(0,r.jsx)(n.td,{children:"\u2194"}),(0,r.jsx)(n.td,{children:"Offset no BLOB (expressado em bytes)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Novo offset depois da leitura"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado da fun\xe7\xe3o"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valor inteiro longo (4 bytes)"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando BLOB to longint retorna um valor de tipo Inteiro longo (4 bytes) lido do BLOB ",(0,r.jsx)(n.em,{children:"blob"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["O par\xe2metro ",(0,r.jsx)(n.em,{children:"byteOrder"})," fixa a ordem dos bytes do valor inteiro longo de 4-byte a ser lido. Voc\xea passa uma das seguintes constantes pr\xe9-definidas fornecidas por 4D:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Native byte ordering"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Macintosh byte ordering"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PC byte ordering"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota sobre a independ\xeancia de plataforma:"})," Se voc\xea intercambiar BLOBs entre as plataformas Macintosh e PC, cabe a voc\xea a gerenciar os problemas da troca de bytes ao usar este comando."]}),"\n",(0,r.jsxs)(n.p,{children:["Se voc\xea especificar o par\xe2metro opcional ",(0,r.jsx)(n.em,{children:"offset"})," , o valor inteiro de 4-byte \xe9 lido no offset (a partir de zero) dentro do BLOB. Se voc\xea n\xe3o especificar o par\xe2metro opcional ",(0,r.jsx)(n.em,{children:"offset"}),", os quatro primeiros bytes do BLOB s\xe3o lidos."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," Voc\xea deve passar um valor de offset entre 0 (zero) e o tamanho do BLOB menos 4. Se voc\xea n\xe3o fizer isso, um erro -111 \xe9 gerado."]}),"\n",(0,r.jsx)(n.p,{children:"Ap\xf3s a chamada, a vari\xe1vel \xe9 incrementada pelo n\xfamero de bytes lidos. Portanto, voc\xea pode reutilizar a mesma vari\xe1vel com outro comando de leitura BLOB para ler outro valor."}),"\n",(0,r.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"O exemplo a seguir l\xea 20 valores Inteiro longo de um BLOB, iniciando no offset 0x200:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0$vlOffset:=0x200\n\xa0For($viLoop;0;19)\n\xa0\xa0\xa0\xa0$vlValor:=BLOB to longint(vxUnBlob;PC byte ordering;$vlOffset)\n\xa0\xa0// Fazer algo com $vlValor\n\xa0End for\n"})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/commands/blob-to-integer",children:"BLOB to integer"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/blob-to-real",children:"BLOB to real"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/blob-to-text",children:"BLOB to text"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/integer-to-blob",children:"INTEGER TO BLOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/longint-to-blob",children:"LONGINT TO BLOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/real-to-blob",children:"REAL TO BLOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/text-to-blob",children:"TEXT TO BLOB"})]}),"\n",(0,r.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"551"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return l},a:function(){return d}});var t=o(667294);let r={},s=t.createContext(r);function d(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);