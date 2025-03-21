"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["19071"],{216204:function(e,t,n){n.r(t),n.d(t,{default:()=>m,frontMatter:()=>r,metadata:()=>s,assets:()=>d,toc:()=>l,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/list-item-position","title":"List item position","description":"List item position ( { ;} lista ; refElem* ) : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/list-item-position.md","sourceDirName":"commands-legacy","slug":"/commands/list-item-position","permalink":"/docs/pt/commands/list-item-position","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flist-item-position.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"list-item-position","title":"List item position","slug":"/commands/list-item-position","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"List item parent","permalink":"/docs/pt/commands/list-item-parent"},"next":{"title":"LIST OF CHOICE LISTS","permalink":"/docs/pt/commands/list-of-choice-lists"}}'),i=n("785893"),o=n("250065");let r={id:"list-item-position",title:"List item position",slug:"/commands/list-item-position",displayed_sidebar:"docs"},a=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let t={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"List item position"})," ( {* ;} ",(0,i.jsx)(t.em,{children:"lista"})," ; ",(0,i.jsx)(t.em,{children:"refElem"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Par\xe2metro"}),(0,i.jsx)(t.th,{children:"Tipo"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"*"}),(0,i.jsx)(t.td,{children:"Operador"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Se especificada, lista \xe9 um nome de objeto (cadeia) Se omitida, lista \xe9 um n\xfamero de refer\xeancia de lista"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"lista"}),(0,i.jsx)(t.td,{children:"Integer, Text"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"N\xfamero de refer\xeancia de lista (se omitida *) ou Nome do objeto de tipo lista (se passada *)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"refElem"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"N\xfamero de refer\xeancia do elemento"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Resultado"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"Posi\xe7\xe3o do elemento em listas expandidas/contra\xeddas"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(t.p,{children:["O comando List item position retorna a posi\xe7\xe3o do elemento cujo n\xfamero de referencia ou nome de objeto se passa em ",(0,i.jsx)(t.em,{children:"refElem"}),",na lista cujo n\xfamero de refer\xeancia se passa na lista."]}),"\n",(0,i.jsxs)(t.p,{children:["Se passa o primeiro par\xe2metro opcional ",(0,i.jsx)(t.em,{children:"*"}),", indica que o par\xe2metro ",(0,i.jsx)(t.em,{children:"lista"})," \xe9 um nome de objeto (cadeia) correspondente a uma representa\xe7\xe3o de lista no formul\xe1rio. Se n\xe3o passar este par\xe2metro, indica que o par\xe2metro ",(0,i.jsx)(t.em,{children:"lista"})," \xe9 uma refer\xeancia de lista hier\xe1rquica (",(0,i.jsx)(t.em,{children:"RefLista"}),"). Se utilizada apenas uma representa\xe7\xe3o de lista, ou trabalha com elementos estruturais (o segundo * \xe9 omitido), pode utilizar indiferentemente uma ou outra sintaxe. Por outro lado, se usar v\xe1rias representa\xe7\xf5es de uma mesma lista, a sintaxe baseada no nome do objeto \xe9 necess\xe1ria j\xe1 que cada representa\xe7\xe3o pode ter sua pr\xf3pria configura\xe7\xe3o expandida/contra\xedda."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Nota:"})," se utilizar o caractere @ no nome da lista e o formul\xe1rio cont\xe9m v\xe1rias listas que respondem a este nome, o comando List item position s\xf3 aplicar\xe1 ao primeiro objeto cujo nome corresponda."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Nota:"})," diferente de outros comandos deste tema, este comando n\xe3o permite passar o valor 0 em ",(0,i.jsx)(t.em,{children:"refElem"})," para designar o \xfaltimo item adicionado."]}),"\n",(0,i.jsx)(t.p,{children:"A posi\xe7\xe3o \xe9 expressa com rela\xe7\xe3o ao elemento superior da lista, utilizando o estado atual expandido/contra\xeddo da lista e sua sub-lista."}),"\n",(0,i.jsxs)(t.p,{children:["O resultado \xe9 um n\xfamero entre 1 e o valor retornado por ",(0,i.jsx)(t.a,{href:"/docs/pt/commands/count-list-items",title:"Count list items",children:"Count list items"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Se o elemento n\xe3o \xe9 vis\xedvel porque est\xe1 localizado em uma lista contra\xedda, List item position expande a lista correspondente de maneira que o elemento seja vis\xedvel."}),"\n",(0,i.jsx)(t.p,{children:"Se o elemento n\xe3o existir, List item position retorna 0."}),"\n",(0,i.jsx)(t.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/pt/commands/count-list-items",children:"Count list items"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/pt/commands/select-list-items-by-reference",children:"SELECT LIST ITEMS BY REFERENCE"})]}),"\n",(0,i.jsx)(t.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"N\xfamero do comando"}),(0,i.jsx)(t.td,{children:"629"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Thread-seguro"}),(0,i.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return r}});var s=n(667294);let i={},o=s.createContext(i);function r(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);