"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["73430"],{335600:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>a,assets:()=>i,toc:()=>l,contentTitle:()=>t});var a=JSON.parse('{"id":"commands-legacy/array-integer","title":"ARRAY INTEGER","description":"ARRAY INTEGER ( nomeArray ; tamanho {; tamanho2} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/array-integer.md","sourceDirName":"commands-legacy","slug":"/commands/array-integer","permalink":"/docs/pt/20-R7/commands/array-integer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Farray-integer.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"array-integer","title":"ARRAY INTEGER","slug":"/commands/array-integer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ARRAY DATE","permalink":"/docs/pt/20-R7/commands/array-date"},"next":{"title":"ARRAY LONGINT","permalink":"/docs/pt/20-R7/commands/array-longint"}}'),s=r("785893"),d=r("250065");let o={id:"array-integer",title:"ARRAY INTEGER",slug:"/commands/array-integer",displayed_sidebar:"docs"},t=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Exemplo 3",id:"exemplo-3",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ARRAY INTEGER"})," ( ",(0,s.jsx)(n.em,{children:"nomeArray"})," ; ",(0,s.jsx)(n.em,{children:"tamanho"})," {; ",(0,s.jsx)(n.em,{children:"tamanho2"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomeArray"}),(0,s.jsx)(n.td,{children:"Array"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nome do array"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tamanho"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de elementos no array ou N\xfamero de linhas se tamanho 2 for especificado"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tamanho2"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de colunas no array de duas dimens\xf5es"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando ARRAY INTEGER cria e/ou redimensiona um array de elementos de tipo ",(0,s.jsx)(n.em,{children:"Inteiro"})," de 2 bytes de mem\xf3ria.\xe9 o nome do array."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["O par\xe2metro ",(0,s.jsx)(n.em,{children:"tamanho"})," \xe9 o n\xfamero de elementos em um array."]}),"\n",(0,s.jsxs)(n.li,{children:["O par\xe2metro ",(0,s.jsx)(n.em,{children:"tamanho2"})," \xe9 opcional; se ",(0,s.jsx)(n.em,{children:"tamanho2"}),", for especificado, o comando cria um array de duas dimens\xf5es. Neste caso, size especifica o n\xfamero de linhas e ",(0,s.jsx)(n.em,{children:"tamanho2"}),"especifica o n\xfamero de colunas em cada array. Cada linha em um array de duas dimens\xf5es pode ser tratada tanto como um elemento como um array. Isso significa que enquanto se trabalha com a primeira dimens\xe3o do array, voc\xea pode usar outros comandos de array para inserir e deletar arrays inteiros e arrays de duas dimens\xf5es."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Enquanto se aplica ARRAY INTEGER para um array j\xe1 existente:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"se voc\xea aumentar o tamanho de um array, os elementos existentes n\xe3o sofrem mudan\xe7as, e os novos elementos se iniciam em 0."}),"\n",(0,s.jsx)(n.li,{children:"se voc\xea reduzir o tamanho de um array, os \xfaltimos elementos s\xe3o deletados do array e se perdem."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsxs)(n.p,{children:["Este exemplo cria um array de processo de 2 bytes de 100 elementos de tipo ",(0,s.jsx)(n.a,{href:"#",title:"Number between -32,768..32,767 (2^15..(2^15)-1) (2-byte integer)",children:"Inteiro"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY INTEGER(aiValores;100)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsxs)(n.p,{children:["Este exemplo cria um array local de 2 bytes de 100 linhas de 50 elementos do tipo ",(0,s.jsx)(n.a,{href:"#",title:"Number between -32,768..32,767 (2^15..(2^15)-1) (2-byte integer)",children:"Inteiro"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY INTEGER($aiValores;100;50)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,s.jsxs)(n.p,{children:["Este exemplo cria um array interprocesso de 2 bytes de 50 elementos do tipo ",(0,s.jsx)(n.em,{children:"Inteiro"})," e determina a cada elemento seu n\xfamero de elemento:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY INTEGER(\u25CAaiValores;50)\n\xa0For($vlElem;1;50)\n\xa0\xa0\xa0\xa0\u25CAaiValores{$vlElem}:=$vlElem\n\xa0End for\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/array-longint",children:"ARRAY LONGINT"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/array-real",children:"ARRAY REAL"})]}),"\n",(0,s.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"220"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return o}});var a=r(667294);let s={},d=a.createContext(s);function o(e){let n=a.useContext(d);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);