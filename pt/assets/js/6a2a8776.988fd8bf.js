"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74665"],{867667:function(e,t,n){n.r(t),n.d(t,{default:()=>m,frontMatter:()=>a,metadata:()=>o,assets:()=>d,toc:()=>l,contentTitle:()=>r});var o=JSON.parse('{"id":"commands-legacy/get-list-item-font","title":"Get list item font","description":"Get list item font ( { ;} lista ; refElem |   ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/get-list-item-font.md","sourceDirName":"commands-legacy","slug":"/commands/get-list-item-font","permalink":"/docs/pt/commands/get-list-item-font","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-list-item-font.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"get-list-item-font","title":"Get list item font","slug":"/commands/get-list-item-font","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET LIST ITEM","permalink":"/docs/pt/commands/get-list-item"},"next":{"title":"GET LIST ITEM ICON","permalink":"/docs/pt/commands/get-list-item-icon"}}'),s=n("785893"),i=n("250065");let a={id:"get-list-item-font",title:"Get list item font",slug:"/commands/get-list-item-font",displayed_sidebar:"docs"},r=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let t={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Get list item font"})," ( {* ;} ",(0,s.jsx)(t.em,{children:"lista"})," ; refElem | *  ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Par\xe2metro"}),(0,s.jsx)(t.th,{children:"Tipo"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"*"}),(0,s.jsx)(t.td,{children:"Operador"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Se especificada, lista \xe9 um nome de objeto (cadeia) Se omitida, lista \xe9 um n\xfamero de refer\xeancia de lista"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"lista"}),(0,s.jsx)(t.td,{children:"Integer, Text"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"N\xfamero de refer\xeancia de lista (se omitida *) ou Nome do objeto de tipo lista (se passada *)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"refElem | *"}),(0,s.jsx)(t.td,{children:"Inteiro longo, Operador"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"N\xfamero de referencia do elemento, ou 0 para o \xfaltimo elemento adicionado \xe0 lista ou * para o elemento da lista atualmente selecionada"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Resultado"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Nome de fonte"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(t.p,{children:["O comando Get list item font retorna o nome da fonte do caractere atual do elemento especificado pelo par\xe2metro ",(0,s.jsx)(t.em,{children:"RefElem"})," da lista cujo n\xfamero de refer\xeancia o nome de objeto se passa em ",(0,s.jsx)(t.em,{children:"lista"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Se passa o primeiro par\xe2metro opcional *, indica que o par\xe2metro ",(0,s.jsx)(t.em,{children:"lista"})," \xe9 um nome de objeto (cadeia) correspondente a uma representa\xe7\xe3o da lista no formul\xe1rio. Se n\xe3o passar este par\xe2metro, indica que o par\xe2metro ",(0,s.jsx)(t.em,{children:"lista"})," \xe9 uma refer\xeancia de lista hier\xe1rquica (",(0,s.jsx)(t.em,{children:"RefLista"}),"). Se utiliza uma s\xf3 representa\xe7\xe3o de lista ou trabalha com elementos estruturais (o segundo * \xe9 omitido), pode utilizar indiferentemente uma ou outra sintaxe. Pelo contr\xe1rio, se utiliza v\xe1rias representa\xe7\xf5es de uma mesma lista e trabalha com o elemento atual (se passa o segundo *), a sintaxe baseada no nome do objeto se necessita j\xe1 que cada representa\xe7\xe3o pode ter seu pr\xf3prio elemento atual."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Nota:"})," se utiliza o caractere @ no nome de objeto da lista e o formul\xe1rio cont\xe9m v\xe1rias listas que correspondem a este nome, o Get list item font se aplicar\xe1 ao primeiro objeto cujo nome corresponda."]}),"\n",(0,s.jsxs)(t.p,{children:["Pode passar um n\xfamero de refer\xeancia em ",(0,s.jsx)(t.em,{children:"refElem"}),". Se este n\xfamero n\xe3o corresponde a nenhum elemento da lista, o comando n\xe3o faz nada. Tamb\xe9m pode passar 0 em ",(0,s.jsx)(t.em,{children:"refElem"})," para obter a fonte do \xfaltimo elemento adicionado \xe0 lista (utilizando ",(0,s.jsx)(t.a,{href:"/docs/pt/commands/append-to-list",title:"APPEND TO LIST",children:"APPEND TO LIST"}),")."]}),"\n",(0,s.jsxs)(t.p,{children:["Finalmente, pode passar * em ",(0,s.jsx)(t.em,{children:"refElem"}),": neste caso, o comando se aplicar\xe1 ao elemento atual da lista. Se v\xe1rios elementos s\xe3o selecionados manualmente, o elemento atual \xe9 o \xfaltimo selecionado. Se nenhum elemento estiver selecionado, o comando n\xe3o faz nada."]}),"\n",(0,s.jsx)(t.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/pt/commands/set-list-item-font",children:"SET LIST ITEM FONT"})}),"\n",(0,s.jsx)(t.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"N\xfamero do comando"}),(0,s.jsx)(t.td,{children:"954"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Thread-seguro"}),(0,s.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return a}});var o=n(667294);let s={},i=o.createContext(s);function a(e){let t=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);