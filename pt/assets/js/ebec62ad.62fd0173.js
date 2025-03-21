"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18814"],{746298:function(e,n,t){t.r(n),t.d(n,{default:()=>x,frontMatter:()=>d,metadata:()=>o,assets:()=>a,toc:()=>i,contentTitle:()=>c});var o=JSON.parse('{"id":"commands-legacy/text-to-blob","title":"TEXT TO BLOB","description":"TEXT TO BLOB ( texto ; BLOB {; textFormat {; offset | *}} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/text-to-blob.md","sourceDirName":"commands-legacy","slug":"/commands/text-to-blob","permalink":"/docs/pt/20-R7/commands/text-to-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftext-to-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"text-to-blob","title":"TEXT TO BLOB","slug":"/commands/text-to-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET BLOB SIZE","permalink":"/docs/pt/20-R7/commands/set-blob-size"},"next":{"title":"VARIABLE TO BLOB","permalink":"/docs/pt/20-R7/commands/variable-to-blob"}}'),r=t("785893"),s=t("250065");let d={id:"text-to-blob",title:"TEXT TO BLOB",slug:"/commands/text-to-blob",displayed_sidebar:"docs"},c=void 0,a={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Nota",id:"nota",level:3},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"TEXT TO BLOB"})," ( ",(0,r.jsx)(n.em,{children:"texto"})," ; ",(0,r.jsx)(n.em,{children:"BLOB"})," {; ",(0,r.jsx)(n.em,{children:"textFormat"})," {; offset | *}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"texto"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Texto a escrever no BLOB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"BLOB a receber o texto"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"textFormat"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Formato e conjunto de caracteres de texto"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"offset | *"}),(0,r.jsx)(n.td,{children:"Vari\xe1vel, Operador"}),(0,r.jsx)(n.td,{children:"\u2194"}),(0,r.jsx)(n.td,{children:"Offset no BLOB (expressado em bytes) ou * para adicionar o valor"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Novo offset depois da escritura se * for omitido"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando TEXT TO BLOB escreve o ",(0,r.jsx)(n.em,{children:"texto"})," no BLOB ",(0,r.jsx)(n.em,{children:"blob"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["O par\xe2metro ",(0,r.jsx)(n.em,{children:"textFormat"})," pode ser usado para definir o formato interno, o conjunto de caracteres o valor texto a ser escrito. Para fazer isso, passe uma das seguintes constantes (encontrado no tema ",(0,r.jsx)(n.em,{children:"BLOB"}),") no par\xe2metro ",(0,r.jsx)(n.em,{children:"textFormat"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Mac C string"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Mac Pascal string"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Mac text with length"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Mac text without length"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"UTF8 C string"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"UTF8 text with length"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"UTF8 text without length"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"6"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Se voc\xea omitir o par\xe2metro ",(0,r.jsx)(n.em,{children:"textFormat"}),", por padr\xe3o 4D usa o formato Mac C string. Com bancos de dados criados a partir da vers\xe3o 11, 4D funciona por padr\xe3o com o conjunto de caracteres Unicode (UTF8) para o gerenciamento de texto, por isso \xe9 recomendado o uso deste conjunto de caracteres."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'As constantes "UTF8" podem ser usadas somente quando o aplicativo \xe9 executado no modo Unicode.'}),"\n",(0,r.jsx)(n.li,{children:'As constantes "Mac" n\xe3o podem trabalhar com textos maiores que 32 KB.'}),"\n",(0,r.jsxs)(n.li,{children:["Se voc\xea deseja trabalhar com conjuntos de caracteres diferentes a UTF8, use o comando ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/convert-from-text",children:"CONVERT FROM TEXT"})," ."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"A tabela a seguir descreve cada um desses formatos:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Formato texto"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Descri\xe7\xe3o e exemplos"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"C string"}),(0,r.jsx)(n.td,{children:"O texto termina em um caractere NULL (c\xf3digo ASCII $00)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"UTF8"}),(0,r.jsx)(n.td,{children:'"" $00'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'"Caf\xe9" $43 61 66 C3 A9 00'}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Mac"}),(0,r.jsx)(n.td,{children:'"" $00'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'"Caf\xe9" $43 61 66 8E 00'}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Pascal string"}),(0,r.jsx)(n.td,{children:"O texto est\xe1 precedido de um byte de comprimento."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"UTF8"}),(0,r.jsx)(n.td,{children:"-"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Mac"}),(0,r.jsx)(n.td,{children:'"" $00'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'"Caf\xe9" $04 43 61 66 8E'}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Text with length"}),(0,r.jsx)(n.td,{children:"O texto est\xe1 precedido por 4 bytes (UTF8) ou 2 bytes (Mac) de comprimento."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"UTF8"}),(0,r.jsx)(n.td,{children:'"" $00 00 00 00'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'"Caf\xe9" $00 00 00 05 43 61 66 C3 A9'}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Mac"}),(0,r.jsx)(n.td,{children:'"" $00 00'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'"Caf\xe9" $00 04 43 61 66 8E'}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Text without length"}),(0,r.jsx)(n.td,{children:"O texto est\xe1 composto somente por seus caracteres."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"UTF8"}),(0,r.jsx)(n.td,{children:'"" Sem dados'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'"Caf\xe9" $43 61 66 C3 A9'}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Mac"}),(0,r.jsx)(n.td,{children:'"" Sem dados'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'"Caf\xe9" $43 61 66 8E'}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Se voc\xea especificar o par\xe2metro opcional *, o valor de texto \xe9 anexado ao BLOB, o tamanho do BLOB \xe9 aumentado em conformidade. Usando o par\xe2metro opcional *, voc\xea pode armazenar qualquer n\xfamero sequencial ",(0,r.jsx)(n.a,{href:"#",title:"Number between -32,768..32,767 (2^15..(2^15)-1) (2-byte integer)",children:"Inteiro"}),", ",(0,r.jsx)(n.a,{href:"#",title:"Number between -2^31..(2^31)-1 (4-byte Integer)",children:"Inteiro longo"}),", Real ou valores de texto (ver outros comandos BLOB) em um BLOB, enquanto o BLOB cabe na mem\xf3ria."]}),"\n",(0,r.jsx)(n.p,{children:"Se voc\xea n\xe3o especificar o par\xe2metro opcional * nem o par\xe2metro de deslocamento vari\xe1vel, o valor de texto \xe9 armazenado no in\xedcio do BLOB, substituindo o conte\xfado anterior, o tamanho do BLOB \xe9 ajustado em conformidade."}),"\n",(0,r.jsxs)(n.p,{children:["Se voc\xea passar o par\xe2metro vari\xe1vel ",(0,r.jsx)(n.em,{children:"offset"}),", o valor do Texto est\xe1 escrito no offset (a partir do zero) dentro do BLOB. N\xe3o importa onde voc\xea escreva o valor de texto, o tamanho do BLOB \xe9 aumentado de acordo com o local que voc\xea passou (e at\xe9 o tamanho do texto, se necess\xe1rio). Novos bytes alocados, com exce\xe7\xe3o do que voc\xea est\xe1 escrevendo, s\xe3o inicializados em zero."]}),"\n",(0,r.jsxs)(n.p,{children:["Ap\xf3s a chamada, o par\xe2metro vari\xe1vel ",(0,r.jsx)(n.em,{children:"offset"})," \xe9 devolvido, incrementado pelo n\xfamero de bytes que foram escritos. Entretanto, voc\xea pode reutilizar a mesma vari\xe1vel com outro comando de escrita BLOB para gravar outro valor."]}),"\n",(0,r.jsx)(n.h3,{id:"nota",children:"Nota"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota de compatibilidade"}),": como este comando altera o blob passado como par\xe2metro, n\xe3o \xe9 compat\xedvel com objetos blob (tipo 4D.Blob). Ver ",(0,r.jsx)(n.em,{children:"Passing blobs and blob objects to 4D commands"})," em developer.4d.com"]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Depois de executar este c\xf3digo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0SET BLOB SIZE(vxBlob;0)\n\xa0var vtValor : Text\n\xa0vtValor:="Caf\xe9"\xa0// O comprimento de vtValor \xe9 4 bytes\n\xa0TEXT TO BLOB(vtValor;vxBlob;Mac C string)\xa0// O tamanho do BLOB se torna 5 bytes\n\xa0TEXT TO BLOB(vtValor;vxBlob;Mac Pascal string)\xa0//\xa0O tamanho do\xa0BLOB\xa0se torna\xa05 bytes\n\xa0TEXT TO BLOB(vtValor;vxBlob;Mac text with length)\xa0//\xa0O tamanho do\xa0BLOB\xa0se torna\xa06 bytes\n\xa0TEXT TO BLOB(vtValor;vxBlob;Mac text without length)\xa0//\xa0O tamanho do\xa0BLOB\xa0se torna\xa04 bytes\n\xa0TEXT TO BLOB(vtValor;vxBlob;UTF8 C string)\xa0//\xa0O tamanho do\xa0BLOB\xa0se torna\xa06 bytes\n\xa0TEXT TO BLOB(vtValor;vxBlob;UTF8 text with length)\xa0//\xa0O tamanho do\xa0BLOB\xa0se torna\xa09 bytes\n\xa0TEXT TO BLOB(vtValor;vxBlob;UTF8 text without length)\xa0//\xa0O tamanho do\xa0BLOB\xa0se torna\xa05 bytes\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/blob-to-integer",children:"BLOB to integer"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/blob-to-longint",children:"BLOB to longint"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/blob-to-real",children:"BLOB to real"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/blob-to-text",children:"BLOB to text"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/convert-from-text",children:"CONVERT FROM TEXT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/integer-to-blob",children:"INTEGER TO BLOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/longint-to-blob",children:"LONGINT TO BLOB"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/real-to-blob",children:"REAL TO BLOB"})]}),"\n",(0,r.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"554"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return d}});var o=t(667294);let r={},s=o.createContext(r);function d(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);