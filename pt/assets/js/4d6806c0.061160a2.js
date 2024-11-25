"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46239"],{432311:function(e,n,r){r.r(n),r.d(n,{metadata:()=>a,contentTitle:()=>t,default:()=>m,assets:()=>l,toc:()=>i,frontMatter:()=>d});var a=JSON.parse('{"id":"commands-legacy/array-blob","title":"ARRAY BLOB","description":"ARRAY BLOB ( nomArray ; tam {; tam2} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/array-blob.md","sourceDirName":"commands-legacy","slug":"/commands/array-blob","permalink":"/docs/pt/commands/array-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Farray-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"array-blob","title":"ARRAY BLOB","slug":"/commands/array-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"APPEND TO ARRAY","permalink":"/docs/pt/commands/append-to-array"},"next":{"title":"ARRAY BOOLEAN","permalink":"/docs/pt/commands/array-boolean"}}'),s=r("785893"),o=r("250065");let d={id:"array-blob",title:"ARRAY BLOB",slug:"/commands/array-blob",displayed_sidebar:"docs"},t=void 0,l={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ARRAY BLOB"})," ( ",(0,s.jsx)(n.em,{children:"nomArray"})," ; ",(0,s.jsx)(n.em,{children:"tam"})," {; ",(0,s.jsx)(n.em,{children:"tam2"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomArray"}),(0,s.jsx)(n.td,{children:"Array"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nome do array"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tam"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de elementos do array ou n\xfamero de arrays se especificado tam2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tam2"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero dos elementos dos array 2D"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando ",(0,s.jsx)(n.strong,{children:"ARRAY BLOB"})," cria e/ou muda o tama\xf1o de um array de elementos de tipo Blob em mem\xf3ria ."]}),"\n",(0,s.jsxs)(n.p,{children:["O par\xe2metro ",(0,s.jsx)(n.em,{children:"nomArray"})," \xe9 o nome do array."]}),"\n",(0,s.jsxs)(n.p,{children:["O par\xe2metro ",(0,s.jsx)(n.em,{children:"tam"})," \xe9 o n\xfamero de elementos do array."]}),"\n",(0,s.jsxs)(n.p,{children:["O par\xe2metro ",(0,s.jsx)(n.em,{children:"tam2"})," \xe9 opcional. Se passar, este comando cria um array de duas dimens\xf5es. Neste caso, ",(0,s.jsx)(n.em,{children:"tam"})," especifica o n\xfamero de filas e ",(0,s.jsx)(n.em,{children:"tam2"})," o n\xfamero de colunas de cada array. Cada fila em um array de duas dimens\xf5es pode ser processado tanto como um elemento e como um array. Isto significa que quando se trabalha com a primeira dimens\xe3o de um array de duas dimens\xf5es, pode inserir e retirar arrays inteiros utilizando outros comandos neste tema."]}),"\n",(0,s.jsxs)(n.p,{children:["Quando se aplica o comando ",(0,s.jsx)(n.strong,{children:"ARRAY BLOB"})," a um array existente:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Se ampliar seu tamanho, os elementos existentes n\xe3o s\xe3o mudados e os novos elementos se inicializam em um BLOB vazio (",(0,s.jsx)(n.a,{href:"/docs/pt/commands/blob-size",children:"BLOB size"}),"= 0)."]}),"\n",(0,s.jsx)(n.li,{children:"Se reduzir seu tamanho, s\xe3o eliminados e perdem os elementos abaixo do array."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"Este exemplo cria um array processo que cont\xe9m 100 elementos de tipo BLOB:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY BLOB(arrBlob;100)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Este exemplo cria um array local de 100 filas, que cont\xe9m cada uma 50 elementos de tipo BLOB:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY BLOB($arrBlob;100;50)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,s.jsxs)(n.p,{children:["Este exemplo cria um array local de 100 filas, contendo cada uma 50 elementos de tipo BLOB. A vari\xe1vel $",(0,s.jsx)(n.em,{children:"vByteValue"})," recebe o d\xe9cimo byte do BLOB localizado na s\xe9tima coluna e a quinta fila do array BLOB:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0C_INTEGER($vByteValue)\n\xa0ARRAY BLOB($arrValues;100;50)\n\xa0...\n\xa0$vByteValue:=$arrValues{5}{7}{9}\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Criando arrays"})})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return d}});var a=r(667294);let s={},o=a.createContext(s);function d(e){let n=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);